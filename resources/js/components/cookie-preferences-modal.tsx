import React, { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface CookiePreferencesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CookiePreferencesModal({ isOpen, onClose }: CookiePreferencesModalProps) {
    const [preferences, setPreferences] = useState({
        functional: true,
        analytical: true,
        advertisement: true,
    });

    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
        necessary: false,
        functional: false,
        analytical: false,
        advertisement: false,
    });

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const toggleExpand = (category: string) => {
        setExpanded(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const handleToggle = (key: 'functional' | 'analytical' | 'advertisement') => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleAcceptAll = () => {
        setPreferences({
            functional: true,
            analytical: true,
            advertisement: true,
        });
        localStorage.setItem('gnosys_cookie_consent', JSON.stringify({
            necessary: true,
            functional: true,
            analytical: true,
            advertisement: true,
            acceptedAt: new Date().toISOString(),
        }));
        onClose();
    };

    const handleRejectAll = () => {
        setPreferences({
            functional: false,
            analytical: false,
            advertisement: false,
        });
        localStorage.setItem('gnosys_cookie_consent', JSON.stringify({
            necessary: true,
            functional: false,
            analytical: false,
            advertisement: false,
            acceptedAt: new Date().toISOString(),
        }));
        onClose();
    };

    const handleSavePreferences = () => {
        localStorage.setItem('gnosys_cookie_consent', JSON.stringify({
            necessary: true,
            ...preferences,
            acceptedAt: new Date().toISOString(),
        }));
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-300">
            {/* Ambient Background Glass Blur Overlay */}
            <div 
                className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Glassmorphic Modal Card with Site Gradient Theme */}
            <div 
                className="relative z-10 w-full max-w-[760px] bg-gradient-to-br from-blue-100/95 via-blue-50/90 to-pink-100/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,50,100,0.2)] border border-white/90 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-300"
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-modal-title"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/60 bg-white/50 backdrop-blur-md">
                    <div>
                        <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 border border-white/90 text-[11px] font-extrabold uppercase tracking-widest text-[#00477b] shadow-sm mb-2">
                            Privacy & Consent
                        </span>
                        <h2 id="cookie-modal-title" className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                            Personalize Your Cookie Preferences
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="size-10 rounded-full bg-white/80 hover:bg-[#00477b] text-zinc-700 hover:text-white transition-all flex items-center justify-center border border-white/90 hover:border-[#00477b] shadow-sm hover:rotate-90 shrink-0 ml-4 duration-300"
                        aria-label="Close cookie preferences"
                    >
                        <X className="size-5" />
                    </button>
                </div>

                {/* Body Content */}
                <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-[13.5px] sm:text-[14px] leading-relaxed text-zinc-600 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-400">
                    {/* Introductory Text */}
                    <div className="space-y-3 bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-sm text-zinc-600">
                        <p>
                            We use cookies to ensure smooth navigation and enable essential site functions. You can view detailed information about each cookie category below.
                        </p>
                        <p>
                            Cookies marked as <strong className="text-zinc-900 font-semibold">Necessary</strong> are stored in your browser because they are essential for basic site functionality. <strong className="text-[#00477b] font-semibold">These cookies do not require your consent under GDPR.</strong>
                        </p>
                        <p className="text-[13px] text-zinc-500">
                            We also use third-party cookies to analyze site usage, remember your preferences, and deliver relevant content and ads. You can enable or disable these cookies according to your choice.
                        </p>
                    </div>

                    {/* Categories List */}
                    <div className="space-y-3.5">
                        {/* 1. Necessary Cookies */}
                        <div className="bg-white/75 hover:bg-white/90 transition-all backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-sm">
                            <div className="flex items-center justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={() => toggleExpand('necessary')}
                                    className="flex items-center gap-3 text-left font-bold text-zinc-900 hover:text-[#00477b] transition-colors"
                                >
                                    <div className="size-6 rounded-full bg-zinc-100 flex items-center justify-center">
                                        <Play 
                                            className={`size-2.5 fill-zinc-700 text-zinc-700 transition-transform duration-200 ${expanded.necessary ? 'rotate-90' : ''}`} 
                                        />
                                    </div>
                                    <span className="text-[14.5px] sm:text-[15px] tracking-tight">Necessary Cookies</span>
                                </button>
                                <span className="text-[12px] font-bold text-[#00477b] bg-[#00477b]/10 border border-[#00477b]/20 px-3 py-1 rounded-full tracking-wide shrink-0">
                                    Always Active
                                </span>
                            </div>
                            <p className="mt-2.5 text-[12.5px] sm:text-[13px] text-zinc-500 pl-9 leading-relaxed">
                                Necessary cookies enable essential site features like secure log-ins and consent preference adjustments. They do not store personal data.
                            </p>
                        </div>

                        {/* 2. Functional Cookies */}
                        <div className="bg-white/75 hover:bg-white/90 transition-all backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-sm">
                            <div className="flex items-center justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={() => toggleExpand('functional')}
                                    className="flex items-center gap-3 text-left font-bold text-zinc-900 hover:text-[#00477b] transition-colors"
                                >
                                    <div className="size-6 rounded-full bg-zinc-100 flex items-center justify-center">
                                        <Play 
                                            className={`size-2.5 fill-zinc-700 text-zinc-700 transition-transform duration-200 ${expanded.functional ? 'rotate-90' : ''}`} 
                                        />
                                    </div>
                                    <span className="text-[14.5px] sm:text-[15px] tracking-tight">Functional Cookies</span>
                                </button>
                                {/* Toggle Switch */}
                                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                    <input 
                                        type="checkbox" 
                                        checked={preferences.functional} 
                                        onChange={() => handleToggle('functional')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-sm peer-checked:bg-[#00477b]"></div>
                                </label>
                            </div>
                            <p className="mt-2.5 text-[12.5px] sm:text-[13px] text-zinc-500 pl-9 leading-relaxed">
                                Functional cookies support features like content sharing on social media, collecting feedback, and enabling third-party tools.
                            </p>
                        </div>

                        {/* 3. Analytical Cookies */}
                        <div className="bg-white/75 hover:bg-white/90 transition-all backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-sm">
                            <div className="flex items-center justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={() => toggleExpand('analytical')}
                                    className="flex items-center gap-3 text-left font-bold text-zinc-900 hover:text-[#00477b] transition-colors"
                                >
                                    <div className="size-6 rounded-full bg-zinc-100 flex items-center justify-center">
                                        <Play 
                                            className={`size-2.5 fill-zinc-700 text-zinc-700 transition-transform duration-200 ${expanded.analytical ? 'rotate-90' : ''}`} 
                                        />
                                    </div>
                                    <span className="text-[14.5px] sm:text-[15px] tracking-tight">Analytical Cookies</span>
                                </button>
                                {/* Toggle Switch */}
                                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                    <input 
                                        type="checkbox" 
                                        checked={preferences.analytical} 
                                        onChange={() => handleToggle('analytical')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-sm peer-checked:bg-[#00477b]"></div>
                                </label>
                            </div>
                            <p className="mt-2.5 text-[12.5px] sm:text-[13px] text-zinc-500 pl-9 leading-relaxed">
                                Analytical cookies track visitor interactions, providing insights on metrics like visitor count, bounce rate, and traffic sources.
                            </p>
                        </div>

                        {/* 4. Advertisement Cookies */}
                        <div className="bg-white/75 hover:bg-white/90 transition-all backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-sm">
                            <div className="flex items-center justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={() => toggleExpand('advertisement')}
                                    className="flex items-center gap-3 text-left font-bold text-zinc-900 hover:text-[#00477b] transition-colors"
                                >
                                    <div className="size-6 rounded-full bg-zinc-100 flex items-center justify-center">
                                        <Play 
                                            className={`size-2.5 fill-zinc-700 text-zinc-700 transition-transform duration-200 ${expanded.advertisement ? 'rotate-90' : ''}`} 
                                        />
                                    </div>
                                    <span className="text-[14.5px] sm:text-[15px] tracking-tight">Advertisement Cookies</span>
                                </button>
                                {/* Toggle Switch */}
                                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                    <input 
                                        type="checkbox" 
                                        checked={preferences.advertisement} 
                                        onChange={() => handleToggle('advertisement')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-sm peer-checked:bg-[#00477b]"></div>
                                </label>
                            </div>
                            <p className="mt-2.5 text-[12.5px] sm:text-[13px] text-zinc-500 pl-9 leading-relaxed">
                                Advertisement cookies deliver personalized ads based on your previous visits and analyze the effectiveness of ad campaigns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 sm:px-8 py-5 bg-white/50 backdrop-blur-md border-t border-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                        <button
                            type="button"
                            onClick={handleRejectAll}
                            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-600 hover:text-zinc-900 bg-white/80 hover:bg-white border border-white rounded-full transition-all duration-200 shadow-sm w-full sm:w-auto hover:-translate-y-0.5"
                        >
                            Reject All
                        </button>
                        <button
                            type="button"
                            onClick={handleSavePreferences}
                            className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#00477b] hover:bg-[#00335e] rounded-full transition-all duration-200 shadow-md shadow-blue-900/15 w-full sm:w-auto hover:-translate-y-0.5"
                        >
                            Save Preferences
                        </button>
                        <button
                            type="button"
                            onClick={handleAcceptAll}
                            className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#00477b] hover:bg-[#00335e] rounded-full transition-all duration-200 shadow-md shadow-blue-900/15 w-full sm:w-auto hover:-translate-y-0.5"
                        >
                            Accept All
                        </button>
                    </div>

                    <div className="text-[11px] text-zinc-500 font-medium self-end sm:self-center">
                        Powered by <span className="font-extrabold text-[#00477b]">CookieAdmin</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
