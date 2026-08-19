import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PieChart, FileText, Target, Wrench, Link, BarChart3, PenTool, 
    CheckCircle2, Search, Zap, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Quote
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function SeoServices() {
    return (
        <MainLayout>
            <Head title="SEO Services | Gnosys Digital" />

            {/* 1. Hero Section (Clear Background - Left Aligned Text for full graphic visibility) */}
            <section
                className="relative overflow-hidden flex min-h-[85vh] lg:min-h-[90vh] items-center pb-20 pt-24 lg:pt-32 bg-cover bg-right lg:bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/seo service.webp')" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
                    <div className="max-w-2xl lg:max-w-xl text-left">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <p className="text-[13px] font-extrabold text-blue-200 uppercase tracking-widest mb-4 drop-shadow-lg">
                                DATA-DRIVEN SEO & REVENUE ACCELERATION
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
                                    { value: '5X', label: 'ROI in 6 Mos' },
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
                                <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-full px-8 h-13 text-sm sm:text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                                    Get My SEO Growth Plan
                                </Button>
                                <Button className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-8 h-13 text-sm sm:text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                                    Talk to an expert
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
                            WHY SEO MATTERS NOW
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mx-auto mb-4 max-w-4xl">
                            Visibility Is Profit. If You're Not Ranking, You're Not In The Game.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium mx-auto max-w-3xl leading-relaxed">
                            93% of online experiences start with a search — and 75% of users never go past page one. We build data-driven visibility and strategic content that makes search engines and buyers trust you.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-3">
                                {[
                                    { icon: <PieChart className="size-7" />, title: '57% of B2B Marketers', desc: 'Say organic SEO generates more qualified leads and sales than paid advertising channels.' },
                                    { icon: <FileText className="size-7" />, title: '13x Higher ROI', desc: 'Companies that publish high-intent, strategic search content consistently see compounding returns.' },
                                    { icon: <Target className="size-7" />, title: '5x Better Conversion', desc: 'Organic high-intent search leads convert 5x faster than interruptive outbound sales outreach.' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden group">
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

                {/* 3. The Gnosys SEO Engine */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SEO FRAMEWORK
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            The Gnosys SEO Growth Engine
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium mx-auto max-w-3xl leading-relaxed">
                            We combine data intelligence, creative content, and technical precision to deliver growth you can measure in revenue.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <Wrench className="size-6" />, title: 'Technical SEO', desc: 'Fix what search engines see first — site speed, Core Web Vitals, schema markup, and crawl architecture.' },
                                    { icon: <PenTool className="size-6" />, title: 'Content Intelligence', desc: 'We turn search intent into authoritative, beautifully written content that ranks on page 1 and converts.' },
                                    { icon: <Link className="size-6" />, title: 'Authority Building', desc: 'Acquire contextual, high-tier editorial backlinks and digital PR citations to build domain authority.' },
                                    { icon: <BarChart3 className="size-6" />, title: 'Performance Analytics', desc: 'Live weekly dashboards tying keyword visibility directly to pipeline leads and revenue realization.' },
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
                                            <p className="text-sm font-medium leading-relaxed text-zinc-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Connected 5-Step SEO Pipeline */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WORKFLOW PIPELINE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            SEO That Starts With Data. Ends With Revenue.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            A systematic 5-phase growth methodology designed for compounding search dominance.
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
                                            tag: "Audit Phase",
                                            icon: <Search className="size-7" />,
                                            title: "Discover",
                                            desc: "Full technical audit, competitor keyword gap analysis & search intent mapping."
                                        },
                                        {
                                            step: "02",
                                            tag: "Strategy Phase",
                                            icon: <Target className="size-7" />,
                                            title: "Define",
                                            desc: "Quarterly roadmap with clear KPI benchmarks and target commercial queries."
                                        },
                                        {
                                            step: "03",
                                            tag: "Execution Phase",
                                            icon: <Zap className="size-7" />,
                                            title: "Deploy",
                                            desc: "On-page optimization, content production, schema rollout, and speed tuning."
                                        },
                                        {
                                            step: "04",
                                            tag: "Reporting Phase",
                                            icon: <BarChart3 className="size-7" />,
                                            title: "Deliver",
                                            desc: "Transparent live ranking reports, traffic attribution, and conversion metrics."
                                        },
                                        {
                                            step: "05",
                                            tag: "Scaling Phase",
                                            icon: <TrendingUp className="size-7" />,
                                            title: "Dominate",
                                            desc: "Continuous backlink acquisition, entity building, and market expansion."
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Step {node.step}</span>
                                                </div>

                                                <div className="size-18 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                                                    {node.tag}
                                                </span>

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
                        </div>
                    </div>
                </section>

                {/* 5. Measurable Outcomes (High-Impact 6-Card KPI Matrix) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            MEASURABLE OUTCOMES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Don't Talk Traffic — We Talk ROI
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Clear, accountable benchmarks that tie organic rankings directly to qualified leads and business revenue.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        metric: "250-400%",
                                        tag: "Traffic Surge",
                                        title: "Organic Traffic Growth",
                                        desc: "Compounding top-of-funnel reach within 6 months of active semantic optimization.",
                                        trend: "+310% Avg"
                                    },
                                    {
                                        metric: "3X - 5X",
                                        tag: "Intent Match",
                                        title: "Conversion Rate Lift",
                                        desc: "Direct conversion lift through commercial query alignment and high-converting landing page UX.",
                                        trend: "Higher Lead Quality"
                                    },
                                    {
                                        metric: "↓ 30-40%",
                                        tag: "Efficiency",
                                        title: "Cost Per Lead (CPL)",
                                        desc: "Drastic drop in customer acquisition cost compared to saturated Google & LinkedIn PPC ads.",
                                        trend: "40% Savings vs Ads"
                                    },
                                    {
                                        metric: "+25 Pos",
                                        tag: "SERP Dominance",
                                        title: "Average Ranking Jump",
                                        desc: "Rapid elevation across 50+ high-volume commercial buyer keywords into Google Top 3 positions.",
                                        trend: "Top 3 Placement"
                                    },
                                    {
                                        metric: "90 Days",
                                        tag: "Speed To Value",
                                        title: "ROI Realization Horizon",
                                        desc: "Proven timeline to reach positive financial return measured strictly through closed pipeline revenue.",
                                        trend: "Rapid Payback"
                                    },
                                    {
                                        metric: "100%",
                                        tag: "Safety & Compliance",
                                        title: "White-Hat Architecture",
                                        desc: "Zero algorithmic risk with Google guidelines, high-tier editorial authority, and sustainable foundations.",
                                        trend: "Zero Penalty Record"
                                    }
                                ].map((card, idx) => (
                                    <div key={idx} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                                        <div className="relative z-10 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="flex items-center justify-between mb-5">
                                                    <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">
                                                        {card.tag}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-extrabold shadow-sm">
                                                        {card.trend}
                                                    </span>
                                                </div>

                                                <div className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#00477b] tracking-tight mb-3">
                                                    {card.metric}
                                                </div>

                                                <h3 className="text-base sm:text-lg font-normal text-zinc-800 mb-2 leading-tight">
                                                    {card.title}
                                                </h3>
                                            </div>

                                            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed pt-4 border-t border-zinc-200/60 mt-auto">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Standalone Growth Principle Full-Width Highlight Banner */}
                <section className="py-12 text-center relative z-10 w-full overflow-hidden">
                    <div className="relative w-full bg-gradient-to-r from-[#002440] via-[#00477b] to-[#001d36] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-white/20 shadow-2xl shadow-blue-950/20">
                        {/* Ambient Glows */}
                        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>
                        <div className="absolute -left-20 -bottom-20 size-80 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                            <div className="size-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-200 mb-8 shadow-inner">
                                <Quote className="size-8 text-blue-200" />
                            </div>

                            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic tracking-tight text-white mb-8 leading-snug drop-shadow-md">
                                “If SEO doesn't move your bottom-line business KPIs, it's not SEO — it's just noise.”
                            </blockquote>

                            <div className="flex items-center gap-3">
                                <div className="h-0.5 w-10 bg-blue-300/60 rounded-full"></div>
                                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-200">
                                    Gnosys Growth Principle &bull; Performance Standard
                                </span>
                                <div className="h-0.5 w-10 bg-blue-300/60 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Bottom CTA */}
                <section className="py-32 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            READY TO SCALE?
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            Let’s Turn Search Into Sales
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Your customers are actively searching. Let’s make sure they find you — and choose you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                Request a Free SEO Audit
                            </Button>
                            <Button className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-14 text-base font-semibold shadow-sm transition-all w-full sm:w-auto">
                                Schedule a Discovery Call
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
