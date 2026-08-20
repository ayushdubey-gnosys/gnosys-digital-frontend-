import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PieChart, FileText, Target, Wrench, Link2, BarChart3, PenTool, 
    CheckCircle2, Search, Zap, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Quote,
    ShoppingCart, Landmark, Activity, GraduationCap, Briefcase, Store, UserCheck
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function SeoServices() {
    return (
        <MainLayout>
            <Head title="SEO Services | Gnosys Digital" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section (Clear Background - Left Aligned Text for full graphic visibility) */}
            <section
                className="relative overflow-hidden flex min-h-[85vh] lg:min-h-[90vh] items-center pb-20 pt-24 lg:pt-32 bg-cover bg-right lg:bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/seo service.webp')" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                    <div className="max-w-2xl lg:max-w-xl text-left">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <p className="text-[13px] font-extrabold text-blue-200 uppercase tracking-widest mb-4 drop-shadow-lg">
                                DATA-DRIVEN SEO &amp; REVENUE ACCELERATION
                            </p>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={180}>
                            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight drop-shadow-xl">
                                Be Found. Be Chosen.<br /> <span className="text-blue-300">Be Profitable.</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <p className="mb-8 text-base sm:text-lg text-blue-50/95 font-medium drop-shadow-md leading-relaxed">
                                We don't just get you on Google — we grow your revenue. At Gnosys Digital, SEO is not about vanity metrics; it's about measurable outcomes — traffic that converts, content that scales, and visibility that drives profit.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={380}>
                            <div className="mb-10 flex flex-wrap gap-8 sm:gap-12 text-left">
                                {[
                                    { value: '300%', label: 'Traffic Growth' },
                                    { value: '5X', label: 'ROI within 6 Months' },
                                    { value: '50%', label: 'Faster Results' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="mb-1 text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg">{stat.value}</p>
                                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-blue-200 drop-shadow-md">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={480}>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Button asChild className="bg-white text-[#022c54] hover:bg-slate-100 rounded-full px-8 h-13 text-sm sm:text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Get My SEO Growth Plan
                                    </Link>
                                </Button>
                                <Button asChild className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-8 h-13 text-sm sm:text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Talk to an expert
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why SEO Matters Now */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Why SEO Matters Now
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mx-auto mb-4 max-w-4xl">
                            Visibility Is Profit. If You're Not Ranking, You're Not In The Game.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium mx-auto max-w-3xl leading-relaxed">
                            93% of online experiences start with a search — and 75% of users never go past page one. But SEO today is not just about keywords — it's about <strong className="text-zinc-800 font-semibold">data-driven visibility, intent-based optimization, and strategic storytelling</strong> that makes search engines and humans trust you.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-3">
                                {[
                                    { icon: <PieChart className="size-7" />, title: '57% of marketers say SEO drives more sales than paid ads.' },
                                    { icon: <FileText className="size-7" />, title: 'Companies that blog consistently see 13× higher ROI.' },
                                    { icon: <Target className="size-7" />, title: 'Organic leads convert 8× better than outbound ones.' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[180px] h-full relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#00477b] leading-snug relative z-10">{item.title}</h3>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                    <Link href="/free-digital-consultation">
                                        Get My SEO Growth Plan
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Gnosys SEO Engine */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Our SEO Framework- Built for Outcomes
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            The Gnosys SEO Engine — Designed For Measurable Results
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium mx-auto max-w-3xl leading-relaxed">
                            We combine <strong className="text-zinc-800 font-semibold">data intelligence, creative content</strong>, and <strong className="text-zinc-800 font-semibold">technical precision</strong> to deliver growth you can measure in revenue, not vanity metrics.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { 
                                        icon: <Wrench className="size-6" />, 
                                        title: 'Technical SEO Excellence', 
                                        desc: 'Fix what search engines see first — site speed, structure, crawl depth, Core Web Vitals.',
                                        result: '40% faster indexing, improved SERP stability.'
                                    },
                                    { 
                                        icon: <PenTool className="size-6" />, 
                                        title: 'Content Intelligence', 
                                        desc: 'We turn keywords into compelling narratives that rank and convert.',
                                        result: '3× average time on page, 25% lower bounce rates.'
                                    },
                                    { 
                                        icon: <Link2 className="size-6" />, 
                                        title: 'Authority Building & Backlinks', 
                                        desc: 'Acquire contextual, high-trust backlinks through ethical digital PR and outreach.',
                                        result: 'Domain Authority +25%, organic traffic surge within 90 days.'
                                    },
                                    { 
                                        icon: <BarChart3 className="size-6" />, 
                                        title: 'Performance Analytics & Reporting', 
                                        desc: 'Weekly dashboards that tie clicks to conversions and ROI.',
                                        result: 'Full transparency, real-time performance tracking.'
                                    },
                                ].map((step, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="size-13 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                    {step.icon}
                                                </div>
                                                <span className="text-[11px] font-black text-zinc-400 tracking-widest uppercase">
                                                    0{i + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#00477b] mb-3">{step.title}</h3>
                                            <p className="text-sm font-medium leading-relaxed text-zinc-600 mb-4">{step.desc}</p>
                                            <div className="pt-3 border-t border-zinc-200/60">
                                                <span className="text-xs font-bold text-zinc-800">→ Result: </span>
                                                <span className="text-xs text-zinc-600 font-medium">{step.result}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Measurable Outcomes — Our Promise */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Measurable Outcomes— Our Promise
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Don’t Talk Traffic — We Talk ROI.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-14 pb-18 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                                {[
                                    {
                                        step: "01",
                                        metric: "250-400%",
                                        title: "Organic Traffic Growth",
                                        impact: "Within 6 months of engagement"
                                    },
                                    {
                                        step: "02",
                                        metric: "↑ 3-5x",
                                        title: "Conversion Rate Lift",
                                        impact: "Through content and UX optimization"
                                    },
                                    {
                                        step: "03",
                                        metric: "↓ 30-40%",
                                        title: "Cost Per Lead (CPL)",
                                        impact: "Lower vs. PPC channels"
                                    },
                                    {
                                        step: "04",
                                        metric: "+20-30 Positions",
                                        title: "Average Ranking Improvement",
                                        impact: "Across 50+ tracked keywords"
                                    },
                                    {
                                        step: "05",
                                        metric: "90 Days",
                                        title: "ROI Realization",
                                        impact: "Measured through sales-qualified leads"
                                    }
                                ].map((card, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-md border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden">
                                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.25rem] pointer-events-none"></div>

                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            <div className="mb-4 inline-flex items-center justify-center gap-1.5 self-center px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                <span className="text-[11px] font-semibold text-[#00477b] tracking-wider uppercase">Metric {card.step}</span>
                                            </div>

                                            <div className="my-3">
                                                <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-light text-[#00477b] tracking-tight mb-2 leading-none">
                                                    {card.metric}
                                                </div>
                                                <h3 className="text-sm sm:text-[15px] font-medium text-zinc-800 leading-snug">
                                                    {card.title}
                                                </h3>
                                            </div>

                                            <p className="text-xs text-zinc-600 font-normal leading-relaxed pt-4 border-t border-zinc-200/60 mt-auto">
                                                {card.impact}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quote Box */}
                            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-[2.25rem] bg-gradient-to-br from-white/95 via-white/80 to-blue-50/60 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.25rem] pointer-events-none"></div>
                                <Quote className="size-8 text-[#00477b]/30 mx-auto mb-3" />
                                <p className="text-lg sm:text-xl font-normal text-[#00477b] italic mb-2 tracking-tight">
                                    "If SEO doesn't move your business KPIs, it's not SEO — it's noise."
                                </p>
                                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-zinc-500">— Team Gnosys Digital</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Industry-Focused SEO Strategies */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Industry-Focused SEO Strategies
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Tailored SEO For Every Industry
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto">
                            Every business is unique — so is your search strategy. We craft vertical-specific SEO blueprints that blend industry trends with AI-powered keyword intelligence.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="hidden lg:block absolute top-[6.5rem] left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 z-0"></div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                                    {[
                                        {
                                            step: "01",
                                            icon: <ShoppingCart className="size-7" />,
                                            title: "E-Commerce",
                                            desc: "Product-focused SEO and schema setup"
                                        },
                                        {
                                            step: "02",
                                            icon: <Landmark className="size-7" />,
                                            title: "BFSI",
                                            desc: "Compliance-safe keywords and secure tech SEO"
                                        },
                                        {
                                            step: "03",
                                            icon: <Activity className="size-7" />,
                                            title: "Healthcare",
                                            desc: "HIPAA-safe content and local search"
                                        },
                                        {
                                            step: "04",
                                            icon: <GraduationCap className="size-7" />,
                                            title: "Education",
                                            desc: "Search funnels for student acquisition"
                                        },
                                        {
                                            step: "05",
                                            icon: <Briefcase className="size-7" />,
                                            title: "Consulting",
                                            desc: "Authority-based SEO for lead growth"
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Stage {node.step}</span>
                                                </div>

                                                <div className="size-18 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                <h3 className="font-bold text-[#00477b] text-xl mb-3 tracking-tight">
                                                    {node.title}
                                                </h3>

                                                <p className="text-xs text-zinc-600 font-medium leading-relaxed mt-auto">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                    <Link href="/free-digital-consultation">
                                        Explore Industry Use Cases
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Client Results That Speak Louder Than Claims */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Client Results That Speak Louder Than Claims
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Real Clients. Real Results.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-3">
                                {[
                                    { 
                                        icon: <Store className="size-7" />, 
                                        title: 'E-Commerce Brand', 
                                        desc: '400% increase in organic traffic in 5 months → $180K revenue increase via SEO-only channel' 
                                    },
                                    { 
                                        icon: <UserCheck className="size-7" />, 
                                        title: 'SaaS Client', 
                                        desc: '120 high-intent keywords ranked in top 10 → 4× demo bookings within 90 days' 
                                    },
                                    { 
                                        icon: <Activity className="size-7" />, 
                                        title: 'Healthcare Client', 
                                        desc: 'Local SEO optimization increased appointment bookings by 55%' 
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px] h-full relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3 relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. How We Work - The Gnosys Growth Playbook */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            How We Work - The Gnosys Growth Playbook
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            SEO That Starts With Data. Ends With Revenue.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Discover", desc: "Deep audit & competitor gap analysis" },
                                    { icon: <Target className="size-7" />, title: "Define", desc: "Strategy roadmap with measurable KPIs" },
                                    { icon: <Zap className="size-7" />, title: "Deploy", desc: "On-page, off-page, and technical rollout" },
                                    { icon: <BarChart3 className="size-7" />, title: "Deliver", desc: "Transparent weekly reports" },
                                    { icon: <TrendingUp className="size-7" />, title: "Dominate", desc: "Continuous optimization & authority scaling" }
                                ].map((step, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-3 leading-tight relative z-10">{step.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Bottom CTA */}
                <section className="py-32 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Ready To Scale Your Search Success?
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            Let's Turn Search Into Sales
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Your customers are searching. Let’s make sure they find you — and choose you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Request a Free SEO Audit
                                </Link>
                            </Button>
                            <Button asChild className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-14 text-base font-semibold shadow-sm transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Schedule a Discovery Call
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
