import React, { useState } from 'react';
import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    Activity, 
    BarChart3, 
    Compass, 
    Cpu, 
    DollarSign, 
    FileText, 
    Video, 
    CheckCircle2, 
    Globe, 
    ShieldCheck, 
    TrendingUp, 
    Users, 
    ChevronDown, 
    Star, 
    HelpCircle,
    Calendar,
    ArrowRight,
    Lock
} from 'lucide-react';

export default function FreeDigitalConsultation() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
    const [preferredTime, setPreferredTime] = useState<string>('Morning');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleChallenge = (item: string) => {
        if (selectedChallenges.includes(item)) {
            setSelectedChallenges(selectedChallenges.filter((c) => c !== item));
        } else {
            setSelectedChallenges([...selectedChallenges, item]);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const scrollToForm = () => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const faqs = [
        {
            q: "Is this really 100% free? What's the catch?",
            a: "Yes, it is 100% free with zero catch or payment info required. We do this to demonstrate our deep technical expertise. If you decide to work with us later, great! If not, the actionable digital roadmap is entirely yours to keep and execute."
        },
        {
            q: "Who will I be talking to?",
            a: "You will speak directly with a Senior Digital Architect or Tech Lead who understands business ROI, frameworks, and architecture — never a pushy junior sales rep."
        },
        {
            q: "What do I need to prepare before the call?",
            a: "Just your website/app URL, a quick understanding of your current tech bottleneck or business goals, and 30 minutes of focused time."
        },
        {
            q: "Will I be pressured to sign a contract?",
            a: "Never. We have a strict zero-pressure policy. We share pure value, answer your technical questions, and let our insights speak for themselves."
        },
        {
            q: "How soon can we schedule a call?",
            a: "Once you fill out the form, our team will coordinate calendar invites within 24 hours, usually locking in a slot within 1–2 business days."
        }
    ];

    return (
        <MainLayout>
            <Head title="Free Digital Consultation - Gnosys Digital" />

            {/* 1. Hero Section */}
            <section 
                className="relative text-white overflow-hidden min-h-[calc(100vh-76px)] flex items-center justify-center py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/consulting.webp")' }}
            >
                {/* Clean transparent overlay for 100% crystal clear image */}
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-5 py-2 border border-white/20 shadow-sm">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-100">Free Digital Strategy Session</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
                        Your Digital Transformation <br className="hidden sm:inline" /> Starts With A Conversation
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
                        Get expert guidance on your website, app, or marketing system without commitment. Free growth audit for businesses ready to scale. Tell us your current bottlenecks, and we'll deliver actionable insights — whether you decide to work with us or not.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Button 
                            onClick={scrollToForm}
                            className="bg-white text-[#00477b] hover:bg-blue-50 rounded-full px-8 sm:px-10 h-14 text-base font-bold shadow-2xl shadow-blue-950/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Book Your Free Consultation Today
                        </Button>

                        {/* 3 Pillars / Feature Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2">
                            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                                ✓ No-sales pressure
                            </span>
                            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                                ✓ 30-minute consultation
                            </span>
                            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white">
                                ✓ Senior experts only
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Why a Free Consultation? */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Why a Free Consultation?</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Because Every Business Faces Unique Digital Challenges
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        Most agencies sell boilerplate solutions before understanding the root cause. We believe in asking the right questions before recommending any system:
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                            {[
                                {
                                    title: "Lead Generation & Conversion",
                                    desc: "Is your website actively converting visitors into customers, or just sitting there as a digital brochure?",
                                    icon: Globe
                                },
                                {
                                    title: "System Disconnection & Chaos",
                                    desc: "Are your internal tools (CRM, ERP, inventory) seamlessly synced, or creating slow manual bottlenecks?",
                                    icon: Activity
                                },
                                {
                                    title: "Scalability Under High Volume",
                                    desc: "Will your current tech architecture scale with your growth, or collapse under 10x traffic volume?",
                                    icon: TrendingUp
                                },
                                {
                                    title: "Delayed Product Roadmaps",
                                    desc: "Are slow technical decisions and development roadblocks delaying your feature rollouts and launches?",
                                    icon: Compass
                                },
                                {
                                    title: "Overpaying on Redundant SaaS",
                                    desc: "Are you burning monthly budget on bloated software subscriptions with duplicate or unused features?",
                                    icon: DollarSign
                                },
                                {
                                    title: "Unpredictable Sprint Cycles",
                                    desc: "Is your development team missing critical deadlines and struggling with delivery predictability?",
                                    icon: BarChart3
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="size-13 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] p-3 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                <item.icon className="size-6" />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-[#00477b] bg-blue-50/80 px-3 py-1.5 rounded-full border border-blue-100">
                                                Challenge 0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-2.5 tracking-tight">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center mt-6">
                    <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                        <p className="text-sm sm:text-base text-[#00477b] font-medium">
                            💡 During our 30-minute session, we explore your unique digital architecture — and give you actionable clarity on what to fix first.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. What We Deliver */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">What We Deliver</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        We Don't Sell — We Solve. Get Clarity & Direction.
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        We will give you the exact roadmap you need to solve your challenges — clear, actionable, and free of jargon.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                            {[
                                {
                                    icon: Activity,
                                    title: "Technical Health Check",
                                    points: ["Identify bottlenecks in tech & architecture", "Actionable steps for recommendations"]
                                },
                                {
                                    icon: BarChart3,
                                    title: "Performance Deep Dive",
                                    points: ["Speed, SEO & CRO bottlenecks calculated", "Server & code efficiency assessment"]
                                },
                                {
                                    icon: Compass,
                                    title: "Digital Strategy Blueprint",
                                    points: ["Prioritized action plan with clear ROI", "Framework for sustainable growth"]
                                },
                                {
                                    icon: Cpu,
                                    title: "Technology Recommendation",
                                    points: ["Best-fit tech stack (Laravel, React, Next.js)", "Avoid overpriced software & tool traps"]
                                },
                                {
                                    icon: DollarSign,
                                    title: "Rough Budget & Timeline",
                                    points: ["Realistic estimates for recommended fixes", "Zero hidden surprises or upsells"]
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Security & Scale Audit",
                                    points: ["Database integrity & API vulnerability check", "Cloud scalability readiness assessment"]
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <item.icon className="size-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-4 tracking-tight">{item.title}</h3>
                                        <ul className="space-y-2.5">
                                            {item.points.map((pt, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2.5 text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                                                    <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-1" />
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mt-8">
                    <Button 
                        onClick={scrollToForm}
                        className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 sm:px-10 h-14 text-base font-bold shadow-xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        Claim Your Free 30-Minute Consultation
                    </Button>
                </div>
            </section>

            {/* 4. Simple Process, Real Results — In 3 Easy Steps */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">How It Works?</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Simple Process, Real Results — In 3 Easy Steps
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        We respect your time. No tedious back-and-forths, just 3 simple steps to total clarity.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
                            {[
                                {
                                    icon: FileText,
                                    step: "1. Share Your Challenge",
                                    desc: "Fill out our short 1-minute form with your current challenges & goals."
                                },
                                {
                                    icon: Video,
                                    step: "2. 30-Min Call With Expert",
                                    desc: "A focused, 1-on-1 strategy call with our senior tech & growth specialists."
                                },
                                {
                                    icon: CheckCircle2,
                                    step: "3. Receive Custom Action Plan",
                                    desc: "Get your clear recommendation document — yours to keep, whether we work together or not."
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between"
                                >
                                    <div>
                                        <div className="size-16 rounded-2xl bg-blue-50/80 border border-blue-100 text-[#00477b] flex items-center justify-center mx-auto mb-6 shadow-sm">
                                            <item.icon className="size-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3">{item.step}</h3>
                                        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mt-6">
                    <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                        🔒 No Pressure. No Obligation. Just pure clarity on your digital roadmap.
                    </p>
                </div>
            </section>

            {/* 5. Why Businesses Choose Gnosys Digital? */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Why Businesses Choose Gnosys Digital?</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        We Go Beyond Development — We Build Growth Systems
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        We don't just write code; we partner with businesses to eliminate manual chaos and scale revenue.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                            {[
                                { title: "Websites That Convert", desc: "High-performance architectures engineered for speed, clean UX, and consistent revenue generation." },
                                { title: "SEO That Actually Ranks", desc: "Data-backed search strategies designed to dominate competitive keywords and bring inbound leads." },
                                { title: "Transparent & Accountable", desc: "Clear milestone-based pricing, direct communication, and weekly sprint reporting. No surprises." },
                                { title: "Proven Digital Transformation", desc: "Custom ERPs, CRMs, and system integrations that automate operations and eliminate busywork." },
                                { title: "Partnership Approach", desc: "We treat your business as our own — advising on long-term strategy, not just one-off tasks." },
                                { title: "100% Code Ownership", desc: "Complete source code, documentation, and IP transferred to you with zero vendor lock-in." }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <h4 className="text-xl font-bold text-[#00477b] mb-3">{item.title}</h4>
                                        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mt-8">
                    <Button 
                        onClick={scrollToForm}
                        className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-blue-900/20"
                    >
                        Book A Free Strategy Call Now
                    </Button>
                </div>
            </section>

            {/* 6. Social Proof / Testimonials & Stats */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Social Proof & Client Stories</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Hear From Businesses That Started With A Consultation
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        Real leaders who booked a 30-minute session and unlocked clear technical direction.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                            {[
                                {
                                    initials: "SJ",
                                    name: "Sarah Johnson",
                                    role: "Operations Director — Logistics Group",
                                    quote: "The free consultation gave us more actionable clarity in 30 minutes than 3 other agencies did in an entire month. We hired Gnosys immediately after.",
                                    tag: "Operations Audit"
                                },
                                {
                                    initials: "DR",
                                    name: "David Rodriguez",
                                    role: "Founder — E-commerce Brand",
                                    quote: "Their technical roadmap helped us double our page speed and cut infrastructure costs by 40%. The most high-ROI 30 minutes we ever spent.",
                                    tag: "Performance & Scale"
                                },
                                {
                                    initials: "AV",
                                    name: "Aman Verma",
                                    role: "CTO — FinTech Solutions",
                                    quote: "Zero sales fluff or aggressive pitching. They pointed out two critical database bottlenecks we had no idea about. Total game-changer for our launch.",
                                    tag: "Architecture Review"
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-7 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-6">
                                            <div className="flex gap-1 text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="size-4 fill-amber-400" />
                                                ))}
                                            </div>
                                            <span className="text-xs font-semibold text-[#00477b] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <p className="text-zinc-700 text-base leading-relaxed font-normal mb-8">
                                            “{item.quote}”
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-zinc-200/70 flex items-center gap-3.5">
                                        <div className="size-11 rounded-2xl bg-blue-50/80 border border-blue-100 text-[#00477b] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                                            {item.initials}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#00477b] text-base tracking-tight">{item.name}</h4>
                                            <p className="text-xs text-zinc-500 font-medium">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mt-10">
                    {/* Stats Counter */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { value: "25+", label: "Successful Scaled Projects" },
                            { value: "4.9 / 5", label: "Client Satisfaction Rating" },
                            { value: "2.5x", label: "Average Client Growth" }
                        ].map((stat, sIdx) => (
                            <div key={sIdx} className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-[2rem] p-7 shadow-sm">
                                <div className="text-3xl sm:text-4xl font-bold text-[#00477b] mb-1.5 tracking-tight">{stat.value}</div>
                                <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Combined Booking Form & FAQ Section */}
            <section id="booking-form" className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-3 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        {/* Left Side: FAQ */}
                        <div className="lg:col-span-5">
                            <div className="mb-8 text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">FAQ & Next Steps</span>
                                </div>
                                <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600">
                                    You have questions, we have clear answers.
                                </p>
                            </div>

                            <div className="space-y-3.5">
                                {faqs.map((faq, idx) => {
                                    const isOpen = faqOpen === idx;
                                    return (
                                        <div 
                                            key={idx}
                                            className="bg-white/85 backdrop-blur-xl border border-white/95 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                                        >
                                            <button 
                                                onClick={() => setFaqOpen(isOpen ? null : idx)}
                                                className="w-full py-4.5 px-5 text-left flex items-center justify-between font-semibold text-sm sm:text-base text-[#00477b] focus:outline-none"
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown className={`size-4 transition-transform duration-300 text-zinc-500 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#00477b]' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-5 pb-5 pt-1 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 font-normal">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side: Booking Form */}
                        <div className="lg:col-span-7">
                            <div className="mb-8 text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Form & Action Section</span>
                                </div>
                                <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Request Your Free Strategy Session Today
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600">
                                    Fill out the form below — our team will reach out within 24 hours to confirm your session time.
                                </p>
                            </div>

                            <div className="bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-xl shadow-blue-900/5">
                                {formSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="size-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#00477b] mb-2">Thank You for Booking!</h3>
                                        <p className="text-zinc-600 max-w-md mx-auto mb-6 font-normal">
                                            We've received your request. One of our senior strategists will contact you via email within 24 hours with calendar slots.
                                        </p>
                                        <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full">
                                            Submit Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullname" className="text-sm font-semibold text-zinc-700">
                                                    Full Name *
                                                </Label>
                                                <Input 
                                                    id="fullname" 
                                                    required 
                                                    placeholder="Rahul Sharma" 
                                                    className="h-12 rounded-xl bg-white/90 border-gray-200 focus:border-[#00477b]"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-semibold text-zinc-700">
                                                    Work Email *
                                                </Label>
                                                <Input 
                                                    id="email" 
                                                    type="email" 
                                                    required 
                                                    placeholder="rahul@company.com" 
                                                    className="h-12 rounded-xl bg-white/90 border-gray-200 focus:border-[#00477b]"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-sm font-semibold text-zinc-700">
                                                Company / Website URL *
                                            </Label>
                                            <Input 
                                                id="company" 
                                                required 
                                                placeholder="www.yourcompany.com" 
                                                className="h-12 rounded-xl bg-white/90 border-gray-200 focus:border-[#00477b]"
                                            />
                                        </div>

                                        <div className="space-y-3 pt-2">
                                            <Label className="text-sm font-semibold text-zinc-700">
                                                What challenge are you facing? (Select all that apply)
                                            </Label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                {[
                                                    "Web / App Development",
                                                    "SEO & Digital Marketing",
                                                    "ERP & Automation Systems",
                                                    "UI/UX Redesign & Conversion"
                                                ].map((challenge) => {
                                                    const isChecked = selectedChallenges.includes(challenge);
                                                    return (
                                                        <div 
                                                            key={challenge}
                                                            onClick={() => toggleChallenge(challenge)}
                                                            className={`cursor-pointer px-3.5 py-3 rounded-xl border text-sm font-medium flex items-center gap-2.5 transition-all ${
                                                                isChecked 
                                                                    ? 'bg-[#00477b] text-white border-[#00477b]' 
                                                                    : 'bg-white/90 text-zinc-700 border-gray-200 hover:border-gray-300'
                                                            }`}
                                                        >
                                                            <div className={`size-4 rounded border flex items-center justify-center shrink-0 ${isChecked ? 'bg-white border-white' : 'border-gray-300'}`}>
                                                                {isChecked && <div className="size-2 rounded-sm bg-[#00477b]" />}
                                                            </div>
                                                            <span className="text-xs sm:text-sm font-normal">{challenge}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="space-y-2.5 pt-2">
                                            <Label className="text-sm font-semibold text-zinc-700">
                                                Preferred Call Time
                                            </Label>
                                            <div className="flex flex-wrap gap-3">
                                                {["Morning", "Afternoon", "Evening"].map((time) => (
                                                    <label 
                                                        key={time} 
                                                        className={`cursor-pointer px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                                                            preferredTime === time 
                                                                ? 'bg-blue-50 border-[#00477b] text-[#00477b]' 
                                                                : 'bg-white border-gray-200 text-zinc-600'
                                                        }`}
                                                    >
                                                        <input 
                                                            type="radio" 
                                                            name="preferredTime" 
                                                            value={time} 
                                                            checked={preferredTime === time} 
                                                            onChange={() => setPreferredTime(time)}
                                                            className="hidden" 
                                                        />
                                                        <span>{time}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button 
                                                type="submit" 
                                                className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-13 text-base font-bold shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                Book My Free Consultation
                                            </Button>
                                        </div>

                                        <div className="text-center pt-2 flex items-center justify-center gap-2 text-xs text-zinc-500 font-medium">
                                            <Lock className="size-3.5 text-zinc-400" />
                                            <span>Your information is 100% secure. We never share your data or spam.</span>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. What Happens Next? (Journey) */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-6">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">What Happens Next?</span>
                    </div>
                    <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Here's Your Journey After Booking
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
                        A clear, predictable roadmap from the moment you submit your request.
                    </p>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
                            {[
                                {
                                    step: "01",
                                    title: "Instant Confirmation",
                                    desc: "You'll receive calendar invites and a short prep checklist immediately.",
                                    icon: Calendar
                                },
                                {
                                    step: "02",
                                    title: "Expert Pre-Call Audit",
                                    desc: "Our team reviews your website and systems before we even jump on the call.",
                                    icon: Activity
                                },
                                {
                                    step: "03",
                                    title: "30-Min Strategy Session",
                                    desc: "We identify bottlenecks and map out high-impact solutions with you.",
                                    icon: Video
                                },
                                {
                                    step: "04",
                                    title: "Custom Roadmap",
                                    desc: "You'll receive a clear, actionable summary document of findings and next steps.",
                                    icon: FileText
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-7 lg:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="size-14 bg-blue-50/80 border border-blue-100 text-[#00477b] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <item.icon className="size-6" />
                                        </div>
                                        <div className="text-xs font-black text-[#00477b] uppercase tracking-widest mb-1.5">Step {item.step}</div>
                                        <h4 className="font-bold text-lg text-[#00477b] mb-2.5">{item.title}</h4>
                                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Button onClick={scrollToForm} className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-10 h-14 shadow-xl shadow-blue-900/20 text-base font-bold transition-all hover:-translate-y-0.5">
                        Schedule Your 30-Min Call
                    </Button>
                </div>
            </section>
        </MainLayout>
    );
}
