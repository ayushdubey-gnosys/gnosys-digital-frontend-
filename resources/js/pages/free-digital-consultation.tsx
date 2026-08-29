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
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

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
            a: "You will speak directly with a Senior Digital Architect or Tech Lead who understands business ROI, frameworks, and architecture - never a pushy junior sales rep."
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
            a: "Once you fill out the form, our team will coordinate calendar invites within 24 hours, usually locking in a slot within 1-2 business days."
        }
    ];

    return (
        <MainLayout>
            <Head title="Free Digital Consultation - Gnosys Digital" />

            {/* 1. Hero Section */}
            <section 
                className="relative text-white overflow-hidden min-h-[calc(100vh-76px)] lg:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 pb-28 sm:pb-36 lg:pb-40 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/consulting.webp")' }}
            >
                {/* Crisp subtle dark gradient overlay so the photo is 100% clear and vibrant */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/30 to-slate-950/50"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 border border-white/25 shadow-sm">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-100">Free Digital Strategy Session</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal mb-4 leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                            Your Digital Transformation <br className="hidden sm:inline" /> Starts With A Conversation
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <p className="text-sm sm:text-base md:text-lg text-blue-50/95 mb-6 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                            Get expert guidance on your website, app, or marketing system without commitment. Free growth audit for businesses ready to scale. Tell us your current bottlenecks, and we'll deliver actionable insights - whether you decide to work with us or not.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={380}>
                        <div className="flex flex-col items-center gap-5">
                            <Button 
                                onClick={scrollToForm}
                                className="bg-white text-[#00477b] hover:bg-blue-50 rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold shadow-2xl shadow-blue-950/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                Book Your Free Consultation Today
                            </Button>

                            {/* 3 Pillars / Feature Pills */}
                            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1">
                                <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                    ✓ No-sales pressure
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                    ✓ 30-minute consultation
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                    ✓ Senior experts only
                                </span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Why a Free Consultation? */}
            <section className="mt-16 sm:mt-24 text-center">
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 max-w-7xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                Why a Free Consultation?
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                Because Every Business Faces Unique Digital Challenges
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                Most agencies sell boilerplate solutions before understanding the root cause. We believe in asking the right questions before recommending any system:
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full px-2 sm:px-4 max-w-[95rem] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
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
                                <ScrollReveal key={idx} animation="fade-up" delay={80 + (idx % 3) * 80} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.2rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] p-2.5 shadow-md shadow-blue-900/5">
                                                    <item.icon className="size-6 text-[#00477b]" />
                                                </div>
                                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                                                    Challenge 0{idx + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#00477b] mb-2 tracking-tight">{item.title}</h3>
                                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="w-full max-w-3xl mx-auto text-center mt-6">
                                <div className="p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xs">
                                    <p className="text-xs sm:text-sm text-[#00477b] font-medium">
                                        💡 During our 30-minute session, we explore your unique digital architecture - and give you actionable clarity on what to fix first.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 3. What We Deliver */}
            <section className="mt-16 sm:mt-24 text-center">
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 max-w-7xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                What We Deliver
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                We Don't Sell - We Solve. Get Clarity & Direction.
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                We will give you the exact roadmap you need to solve your challenges - clear, actionable, and free of jargon.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full px-2 sm:px-4 max-w-[95rem] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
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
                                <ScrollReveal key={idx} animation="fade-up" delay={80 + (idx % 3) * 80} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.2rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] mb-4 shadow-md shadow-blue-900/5">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#00477b] mb-3 tracking-tight">{item.title}</h3>
                                            <ul className="space-y-2">
                                                {item.points.map((pt, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-2 text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                                                        <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up" delay={150}>
                            <div className="w-full max-w-7xl mx-auto text-center mt-6">
                                <Button 
                                    onClick={scrollToForm}
                                    className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 sm:px-10 h-12 text-sm font-bold shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Claim Your Free 30-Minute Consultation
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 4. Simple Process, Real Results - In 3 Easy Steps */}
            <section className="mt-16 sm:mt-24 text-center">
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 max-w-7xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                How It Works?
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                Simple Process, Real Results - In 3 Easy Steps
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
                                We respect your time. No tedious back-and-forths, just 3 simple steps to total clarity.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full px-2 sm:px-4 max-w-[90rem] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-center">
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
                                    desc: "Get your clear recommendation document - yours to keep, whether we work together or not."
                                }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={100 * (idx + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.2rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-between h-full"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="size-14 rounded-2xl bg-white border border-white text-[#00477b] flex items-center justify-center mx-auto mb-4 shadow-md shadow-blue-900/5">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#00477b] mb-2">{item.step}</h3>
                                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="w-full max-w-7xl mx-auto text-center mt-5">
                                <p className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                                    🔒 No Pressure. No Obligation. Just pure clarity on your digital roadmap.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 5. Why Businesses Choose Gnosys Digital? */}
            <section className="mt-16 sm:mt-24 text-center">
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 max-w-7xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                Why Businesses Choose Gnosys Digital?
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                We Go Beyond Development - We Build Growth Systems
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                We don't just write code; we partner with businesses to eliminate manual chaos and scale revenue.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full px-2 sm:px-4 max-w-[95rem] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
                            {[
                                { title: "Websites That Convert", desc: "High-performance architectures engineered for speed, clean UX, and consistent revenue generation." },
                                { title: "SEO That Actually Ranks", desc: "Data-backed search strategies designed to dominate competitive keywords and bring inbound leads." },
                                { title: "Transparent & Accountable", desc: "Clear milestone-based pricing, direct communication, and weekly sprint reporting. No surprises." },
                                { title: "Proven Digital Transformation", desc: "Custom ERPs, CRMs, and system integrations that automate operations and eliminate busywork." },
                                { title: "Partnership Approach", desc: "We treat your business as our own - advising on long-term strategy, not just one-off tasks." },
                                { title: "100% Code Ownership", desc: "Complete source code, documentation, and IP transferred to you with zero vendor lock-in." }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={80 + (idx % 3) * 80} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.2rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <h4 className="text-lg sm:text-xl font-bold text-[#00477b] mb-2">{item.title}</h4>
                                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="w-full max-w-7xl mx-auto text-center mt-6">
                                <Button 
                                    onClick={scrollToForm}
                                    className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all"
                                >
                                    Book A Free Strategy Call Now
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 6. Social Proof / Testimonials & Stats */}
            <section className="mt-16 sm:mt-24 text-center">
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 max-w-7xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                Social Proof & Client Stories
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                Hear From Businesses That Started With A Consultation
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
                                Real leaders who booked a 30-minute session and unlocked clear technical direction.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full px-2 sm:px-4 max-w-[95rem] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
                            {[
                                {
                                    initials: "SJ",
                                    name: "Sarah Johnson",
                                    role: "Operations Director - Logistics Group",
                                    quote: "The free consultation gave us more actionable clarity in 30 minutes than 3 other agencies did in an entire month. We hired Gnosys immediately after.",
                                    tag: "Operations Audit"
                                },
                                {
                                    initials: "DR",
                                    name: "David Rodriguez",
                                    role: "Founder - E-commerce Brand",
                                    quote: "Their technical roadmap helped us double our page speed and cut infrastructure costs by 40%. The most high-ROI 30 minutes we ever spent.",
                                    tag: "Performance & Scale"
                                },
                                {
                                    initials: "AV",
                                    name: "Aman Verma",
                                    role: "CTO - FinTech Solutions",
                                    quote: "Zero sales fluff or aggressive pitching. They pointed out two critical database bottlenecks we had no idea about. Total game-changer for our launch.",
                                    tag: "Architecture Review"
                                }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={80 + (idx % 3) * 80} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.2rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between gap-2 mb-4">
                                                <div className="flex gap-1 text-amber-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="size-4 fill-amber-400" />
                                                    ))}
                                                </div>
                                                <span className="text-[11px] font-semibold text-[#00477b] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                                                    {item.tag}
                                                </span>
                                            </div>

                                            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-6">
                                                “{item.quote}”
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-zinc-200/70 flex items-center gap-3.5 relative z-10">
                                            <div className="size-10 rounded-xl bg-white border border-blue-100 text-[#00477b] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                                                {item.initials}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#00477b] text-sm sm:text-base tracking-tight">{item.name}</h4>
                                                <p className="text-xs text-zinc-500 font-medium">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Stats Counter */}
                        <ScrollReveal animation="fade-up" delay={150}>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
                                {[
                                    { value: "25+", label: "Successful Scaled Projects" },
                                    { value: "4.9 / 5", label: "Client Satisfaction Rating" },
                                    { value: "2.5x", label: "Average Client Growth" }
                                ].map((stat, sIdx) => (
                                    <div key={sIdx} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-xs">
                                        <div className="text-2xl sm:text-3xl font-bold text-[#00477b] mb-1 tracking-tight">{stat.value}</div>
                                        <div className="text-[11px] font-semibold text-zinc-600 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 7. Combined Booking Form & FAQ Section */}
            <section id="booking-form" className="mt-16 sm:mt-24 text-center">
                {/* Headers row outside background strip */}
                <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-[95rem] mx-auto mb-6 sm:mb-8 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
                        {/* Left Side Header: FAQ */}
                        <div className="lg:col-span-5">
                            <ScrollReveal animation="fade-up" delay={80}>
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                        FAQ & Next Steps
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#00477b] mb-2">
                                        Frequently Asked Questions
                                    </h2>
                                    <p className="text-sm sm:text-base text-zinc-600">
                                        You have questions, we have clear answers.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Side Header: Booking Form */}
                        <div className="lg:col-span-7">
                            <ScrollReveal animation="fade-left" delay={120}>
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                        Form & Action Section
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#00477b] mb-2">
                                        Request Your Free Strategy Session Today
                                    </h2>
                                    <p className="text-sm sm:text-base text-zinc-600">
                                        Fill out the form below - our team will reach out within 24 hours to confirm your session time.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Full-width strip wrapping ONLY the cards (FAQ list & Booking Form) */}
                <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full px-2 sm:px-4 max-w-[95rem] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                            {/* Left Side: FAQ Cards */}
                            <div className="lg:col-span-5 text-left">
                                <div className="space-y-3">
                                    {faqs.map((faq, idx) => {
                                        const isOpen = faqOpen === idx;
                                        return (
                                            <ScrollReveal key={idx} animation="fade-up" delay={60 * (idx + 1)}>
                                                <div 
                                                    className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden shadow-sm transition-all"
                                                >
                                                    <button 
                                                        onClick={() => setFaqOpen(isOpen ? null : idx)}
                                                        className="w-full py-4 px-5 text-left flex items-center justify-between font-semibold text-sm sm:text-base text-[#00477b] focus:outline-none"
                                                    >
                                                        <span>{faq.q}</span>
                                                        <ChevronDown className={`size-4 transition-transform duration-300 text-zinc-500 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#00477b]' : ''}`} />
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-5 pb-4 pt-1 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-white/40 font-normal">
                                                            {faq.a}
                                                        </div>
                                                    )}
                                                </div>
                                            </ScrollReveal>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Side: Booking Form Card */}
                            <div className="lg:col-span-7 text-left">
                                <ScrollReveal animation="fade-left" delay={120}>
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-blue-900/5">
                                        {formSubmitted ? (
                                            <div className="text-center py-8">
                                                <div className="size-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                                                    <CheckCircle2 className="size-7" />
                                                </div>
                                                <h3 className="text-xl font-bold text-[#00477b] mb-2">Thank You for Booking!</h3>
                                                <p className="text-zinc-600 text-sm max-w-md mx-auto mb-5 font-normal">
                                                    We've received your request. One of our senior strategists will contact you via email within 24 hours with calendar slots.
                                                </p>
                                                <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full h-10 text-xs">
                                                    Submit Another Request
                                                </Button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="fullname" className="text-xs sm:text-sm font-semibold text-zinc-700">
                                                            Full Name *
                                                        </Label>
                                                        <Input 
                                                            id="fullname" 
                                                            required 
                                                            placeholder="Rahul Sharma" 
                                                            className="h-11 rounded-xl bg-white/60 backdrop-blur-md border-white/80 focus:border-[#00477b] text-sm"
                                                        />
                                                    </div>

                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-zinc-700">
                                                            Work Email *
                                                        </Label>
                                                        <Input 
                                                            id="email" 
                                                            type="email" 
                                                            required 
                                                            placeholder="rahul@company.com" 
                                                            className="h-11 rounded-xl bg-white/60 backdrop-blur-md border-white/80 focus:border-[#00477b] text-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1.5">
                                                    <Label htmlFor="company" className="text-xs sm:text-sm font-semibold text-zinc-700">
                                                        Company / Website URL *
                                                    </Label>
                                                    <Input 
                                                        id="company" 
                                                        required 
                                                        placeholder="www.yourcompany.com" 
                                                        className="h-11 rounded-xl bg-white/60 backdrop-blur-md border-white/80 focus:border-[#00477b] text-sm"
                                                    />
                                                </div>

                                                <div className="space-y-2 pt-1">
                                                    <Label className="text-xs sm:text-sm font-semibold text-zinc-700">
                                                        What challenge are you facing? (Select all that apply)
                                                    </Label>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                                                                    className={`cursor-pointer px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2.5 transition-all ${
                                                                        isChecked 
                                                                            ? 'bg-[#00477b] text-white border-[#00477b]' 
                                                                            : 'bg-white/80 text-zinc-700 border-gray-200 hover:border-gray-300'
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

                                                <div className="space-y-2 pt-1">
                                                    <Label className="text-xs sm:text-sm font-semibold text-zinc-700">
                                                        Preferred Call Time
                                                    </Label>
                                                    <div className="flex flex-wrap gap-2.5">
                                                        {["Morning", "Afternoon", "Evening"].map((time) => (
                                                            <label 
                                                                key={time} 
                                                                className={`cursor-pointer px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
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
                                                        className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm sm:text-base font-bold shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-0.5"
                                                    >
                                                        Book My Free Consultation
                                                    </Button>
                                                </div>

                                                <div className="text-center pt-1 flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-medium">
                                                    <Lock className="size-3 text-zinc-400" />
                                                    <span>Your information is 100% secure. We never share your data or spam.</span>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. What Happens Next? (Journey) */}
            <section className="mt-16 sm:mt-24 text-center">
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 max-w-7xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                What Happens Next?
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                Here's Your Journey After Booking
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                A clear, predictable roadmap from the moment you submit your request.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full px-2 sm:px-4 max-w-[95rem] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-center">
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
                                <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.2rem] p-6 lg:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="size-12 bg-white border border-white text-[#00477b] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-blue-900/5">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <div className="text-[11px] font-black text-[#00477b] uppercase tracking-widest mb-1">Step {item.step}</div>
                                            <h4 className="font-bold text-base sm:text-lg text-[#00477b] mb-2">{item.title}</h4>
                                            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="text-center mt-6">
                                <Button onClick={scrollToForm} className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 sm:px-10 h-12 shadow-lg shadow-blue-900/20 text-sm sm:text-base font-bold transition-all hover:-translate-y-0.5">
                                    Schedule Your 30-Min Call
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
