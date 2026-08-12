import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ProductProps {
    slug: string | null;
}

export default function Product({ slug }: ProductProps) {
    return (
        <MainLayout>
            <Head title="90 Claude Secret Codes - Gnosys Digital" />
            
            <div className="bg-transparent min-h-screen py-10 lg:py-16">
                <div className="w-full mx-auto max-w-full">
                    <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 bg-white/40 backdrop-blur-2xl border border-white/50 w-full p-4 sm:p-8">
                        
                        {/* Left: Product Image */}
                        <div className="w-full lg:w-[60%] relative flex justify-center px-4 lg:px-6">
                            <div className="w-full max-w-full relative">
                                <div className="absolute top-6 left-6 z-20 bg-[#a3b118] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wider uppercase">
                                    Sale!
                                </div>
                                <div className="w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] bg-gradient-to-br from-[#1c234d] to-[#111533] rounded-none overflow-hidden flex items-center justify-center p-6 sm:p-12 relative shadow-2xl shadow-blue-900/20 border border-white/10">
                                    {/* Placeholder for the book cover image */}
                                    <div className="h-[80%] aspect-[3/4] bg-blue-800/40 backdrop-blur-xl rounded-xl border border-blue-400/20 flex flex-col items-center justify-center shadow-2xl relative z-10 p-6 sm:p-8 text-center transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                                        <div className="text-blue-200/80 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">90 Claude Secret Codes</div>
                                        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">90<br/>Claude<br/>Secret Codes</h2>
                                        <p className="text-blue-300/80 text-xs sm:text-sm italic">That Change Everything</p>
                                        <div className="mt-8 sm:mt-10 size-12 sm:size-14 border border-blue-400/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400/80 size-5 sm:size-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        </div>
                                        
                                    </div>
                                    
                                    {/* Background Decorative Elements */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                                    <div className="absolute top-1/4 left-1/4 size-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-1/4 right-1/4 size-56 bg-blue-500/10 rounded-full blur-3xl"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Details */}
                        <div className="w-full lg:w-[40%] flex justify-center px-4 lg:px-6">
                            <div className="w-full max-w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-none p-8 sm:p-10 lg:p-12 shadow-2xl shadow-blue-900/10 flex flex-col justify-center relative overflow-hidden">
                                {/* Decorative blur */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
                                
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#00477b] mb-4 leading-tight tracking-tight">
                                    90 Claude Secret Codes
                                </h1>
                                
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-gray-400 line-through text-lg sm:text-xl font-medium">$15.99</span>
                                    <span className="text-gray-900 font-black text-4xl sm:text-5xl tracking-tight">$9.99</span>
                                    <span className="bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ml-2">Save 37%</span>
                                </div>

                                <div className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-10 max-w-prose">
                                    <p>
                                        Unlock the hidden operating system inside Claude AI. "90 Claude Secret Codes" is the ultimate prompt encyclopedia that transforms Claude from a helpful chatbot into a creative powerhouse, strategic genius, and relentless executive assistant. Stop getting average answers. Start commanding Claude with the exact codes that force it to think, write, and operate at its absolute peak.
                                    </p>
                                </div>

                                {/* Purchase Controls */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-4 z-10 w-full">
                                    <div className="w-full sm:w-28 shrink-0">
                                        <Input 
                                            type="number" 
                                            defaultValue="1" 
                                            min="1" 
                                            className="h-14 sm:h-16 bg-white border border-gray-200 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-[#00477b] text-center px-2 font-bold text-xl text-gray-900 w-full transition-all"
                                        />
                                    </div>
                                    <Button 
                                        onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))}
                                        className="w-full bg-[#00477b] hover:bg-[#00335e] text-white font-bold rounded-2xl h-14 sm:h-16 shadow-lg shadow-[#00477b]/20 hover:shadow-xl transition-all hover:-translate-y-1 text-lg tracking-wide"
                                    >
                                        Add to cart
                                    </Button>
                                </div>

                                {/* PayPal Button */}
                                <div className="mb-10 z-10 w-full">
                                    <Button className="w-full bg-[#ffc439] hover:bg-[#f2b934] text-black font-semibold h-14 sm:h-16 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center text-lg border border-[#f2b934]/50">
                                        <span className="font-bold text-[#003087] mr-1 italic text-[20px]">Pay</span>
                                        <span className="font-bold text-[#0079C1] italic text-[20px]">Pal</span>
                                    </Button>
                                </div>

                                {/* Metadata */}
                                <div className="pt-8 border-t border-gray-200/60 text-sm">
                                    <div className="flex items-baseline mb-3">
                                        <span className="font-bold text-gray-900 w-24 shrink-0">Categories:</span>
                                        <span className="text-gray-600 leading-snug">
                                            <Link href="#" className="hover:text-[#00477b] hover:underline transition-colors">AI Tools & Automation Packs</Link>,{' '}
                                            <Link href="#" className="hover:text-[#00477b] hover:underline transition-colors">eBooks & Guides</Link>
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-bold text-gray-900 w-24 shrink-0">Share:</span>
                                        <div className="flex gap-4 text-gray-400">
                                            {/* Mock Social Icons */}
                                            <Link href="#" className="hover:text-[#00477b] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></Link>
                                            <Link href="#" className="hover:text-[#00477b] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                                            <Link href="#" className="hover:text-[#00477b] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                                            <Link href="#" className="hover:text-[#00477b] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 4l10 8 10-8"></path></svg></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
