import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PieChart, FileText, Target, Wrench, Link2, BarChart3, PenTool, 
    CheckCircle2, Search, Zap, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Quote,
    ShoppingCart, Landmark, Activity, GraduationCap, Briefcase, Store, UserCheck, Sparkles, Trophy
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React, { useState, useEffect, useRef } from 'react';

// Smooth Count-Up Animation Component with IntersectionObserver
function AnimatedCount({ 
    endNum,
    startRange,
    endRange,
    prefix = '', 
    suffix = '', 
    duration = 1800 
}: { 
    endNum?: number;
    startRange?: number;
    endRange?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [progress, setProgress] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.15 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progressRatio = Math.min(elapsed / duration, 1);

            // Ease-out cubic for realistic smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progressRatio, 3);
            setProgress(easeProgress);

            if (progressRatio < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [hasAnimated, duration]);

    if (startRange !== undefined && endRange !== undefined) {
        const currentStart = Math.round(startRange * progress);
        const currentEnd = Math.round(endRange * progress);
        return (
            <span ref={elementRef} className="tabular-nums">
                {prefix}{currentStart}-{currentEnd}{suffix}
            </span>
        );
    }

    if (endNum !== undefined) {
        const currentVal = Math.round(endNum * progress);
        return (
            <span ref={elementRef} className="tabular-nums">
                {prefix}{currentVal}{suffix}
            </span>
        );
    }

    return <span ref={elementRef}>{prefix}{suffix}</span>;
}

export default function SeoServices() {
    return (
        <MainLayout>
            <Head title="SEO Services | Gnosys Digital" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section (Clear & Full Background Image) */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/seo service.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none lg:w-1/2" />
                </div>

                {/* Dynamic Shining Ambient Light Beam Sweep & Pulse Glows */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-85">
                    <div 
                        className="absolute -inset-y-32 -left-1/3 w-[55%] bg-gradient-to-r from-transparent via-cyan-400/15 via-blue-500/10 to-transparent animate-[beamSweep_8s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-3xl opacity-0" 
                        style={{ animationDelay: '1.4s', animationFillMode: 'backwards' }}
                    />
                    <div 
                        className="absolute -inset-y-32 -left-1/3 w-[28%] bg-gradient-to-r from-transparent via-white/12 to-transparent animate-[beamSweep_8s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-xl opacity-0" 
                        style={{ animationDelay: '1.65s', animationFillMode: 'backwards' }}
                    />
                    <div className="absolute top-1/4 left-1/4 size-72 bg-blue-500/10 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />
                    <div className="absolute top-1/2 right-1/3 size-80 bg-teal-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '1s' }} />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl lg:max-w-xl text-left">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                Data-Driven SEO &amp; Revenue Growth
                            </span>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={180}>
                            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight drop-shadow-xl">
                                Be Found. Be Chosen.<br /> <span className="text-blue-100 font-normal">Be Profitable.</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <p className="mb-8 text-base sm:text-lg text-blue-50/95 font-normal drop-shadow-md leading-relaxed">
                                We don't just get you on Google - we grow your revenue. At Gnosys Digital, SEO is about measurable outcomes: traffic that converts, content that scales, and top-tier organic visibility.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={380}>
                            <div className="mb-10 flex flex-wrap gap-8 sm:gap-12 text-left">
                                {[
                                    { renderValue: () => <AnimatedCount endNum={300} suffix="%" />, label: 'Traffic Growth' },
                                    { renderValue: () => <AnimatedCount endNum={5} suffix="X" />, label: 'ROI within 6 Months' },
                                    { renderValue: () => <AnimatedCount endNum={50} suffix="%" />, label: 'Faster Indexing' },
                                ].map((stat, idx) => (
                                    <div key={idx}>
                                        <p className="mb-1 text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg">{stat.renderValue()}</p>
                                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-blue-200 drop-shadow-md">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={480}>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Get My SEO Growth Plan <ArrowRight className="size-5" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
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
                
                {/* 2. Why SEO Matters Now (3 Frosted Glass Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                The Opportunity
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Visibility Is Profit. If You're Not Ranking, You're Not In The Game.
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal mx-auto max-w-3xl leading-relaxed">
                                93% of online buyer journeys begin with a search. We engineer intent-based optimization and technical authority so high-intent buyers choose you.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-3">
                                {[
                                    { icon: PieChart, title: '57% of enterprise leaders report organic search drives more qualified pipeline than paid channels.' },
                                    { icon: FileText, title: 'Companies publishing authoritative, intent-led content achieve 13× higher customer acquisition ROI.' },
                                    { icon: Target, title: 'Organic inbound search leads convert 8× better than cold outreach or display advertising.' },
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[220px] h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-normal text-[#00477b] leading-relaxed relative z-10">{item.title}</h3>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Gnosys SEO Engine (4 Framework Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Our Framework
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                The Gnosys SEO Engine: Designed For Measurable ROI
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal mx-auto max-w-3xl leading-relaxed">
                                We combine deep technical audit rigor, semantic topic clustering, and digital PR to capture dominant organic share.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { 
                                        icon: Wrench, 
                                        title: 'Technical SEO Excellence', 
                                        desc: 'Site speed optimization, Core Web Vitals remediation, clean canonical structures, and crawl budget efficiency.',
                                        result: '40% faster indexing and zero indexation bloat.'
                                    },
                                    { 
                                        icon: PenTool, 
                                        title: 'Content & Semantic Clustering', 
                                        desc: 'We map user search intent to deep pillar pages and topic clusters that establish unquestioned authority.',
                                        result: '3× average dwell time and 25% lower bounce rates.'
                                    },
                                    { 
                                        icon: Link2, 
                                        title: 'Authority Building & Digital PR', 
                                        desc: 'Acquire editorial, high-trust contextual backlinks from verified industry publications through digital PR.',
                                        result: 'Domain Authority lift and resilient rankings.'
                                    },
                                    { 
                                        icon: BarChart3, 
                                        title: 'Revenue Analytics & Attribution', 
                                        desc: 'Transparent Looker Studio dashboards tracking keyword movements directly to demo requests and CRM revenue.',
                                        result: '100% transparent attribution and real-time ROI.'
                                    },
                                ].map((step, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="size-16 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center">
                                                        <step.icon className="size-7 text-[#00477b]" />
                                                    </div>
                                                    <span className="text-[11px] font-black text-zinc-400 tracking-widest uppercase">
                                                        0{i + 1}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">{step.title}</h3>
                                                <p className="text-sm font-normal leading-relaxed text-zinc-600 mb-6">{step.desc}</p>
                                            </div>
                                            <div className="pt-3 border-t border-zinc-200/60 relative z-10">
                                                <span className="text-xs font-bold text-[#00477b]">→ Key Outcome: </span>
                                                <span className="text-xs text-zinc-600 font-medium">{step.result}</span>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Measurable Outcomes (5 Rectangular Cards + Quote) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                The ROI
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                We Don’t Talk Vanity Traffic: We Deliver Business ROI
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    {
                                        step: "01",
                                        renderMetric: () => <AnimatedCount startRange={250} endRange={400} suffix="%" />,
                                        title: "Organic Traffic Growth",
                                        impact: "Within 6 months of systematic optimization"
                                    },
                                    {
                                        step: "02",
                                        renderMetric: () => <AnimatedCount prefix="↑ " startRange={3} endRange={5} suffix="x" />,
                                        title: "Conversion Lift",
                                        impact: "Through high-intent searcher alignment"
                                    },
                                    {
                                        step: "03",
                                        renderMetric: () => <AnimatedCount prefix="↓ " startRange={30} endRange={40} suffix="%" />,
                                        title: "Lower Cost Per Lead",
                                        impact: "Substantial savings compared to paid Google Ads"
                                    },
                                    {
                                        step: "04",
                                        renderMetric: () => <AnimatedCount prefix="+" startRange={20} endRange={30} />,
                                        title: "Top 3 Positions",
                                        impact: "Across high-converting target keywords"
                                    },
                                    {
                                        step: "05",
                                        renderMetric: () => <AnimatedCount endNum={90} suffix=" Days" />,
                                        title: "ROI Realization",
                                        impact: "Measured in pipeline growth and inbound SQLs"
                                    }
                                ].map((card, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={70 * (idx + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="relative z-10 w-full flex flex-col items-center">
                                                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-2">
                                                    Metric {card.step}
                                                </span>
                                                <div className="text-3xl sm:text-4xl font-light text-[#00477b] tracking-tight mb-1.5">
                                                    {card.renderMetric()}
                                                </div>
                                                <h3 className="text-sm font-normal text-zinc-800 mb-2 leading-tight">
                                                    {card.title}
                                                </h3>
                                                <p className="text-xs text-zinc-600 font-normal leading-relaxed pt-2.5 border-t border-zinc-200/60 w-full">
                                                    {card.impact}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {/* Quote Box */}
                            <ScrollReveal animation="fade-up" delay={200}>
                                <div className="mt-8 max-w-3xl mx-auto p-6 sm:p-7 rounded-[2rem] bg-gradient-to-br from-white/95 via-white/80 to-blue-50/60 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative overflow-hidden group">
                                    <Quote className="size-6 text-[#00477b]/40 mx-auto mb-2" />
                                    <p className="text-base sm:text-lg font-normal text-[#00477b] italic mb-1.5 tracking-tight">
                                        "If SEO doesn't move your business KPIs, it's not SEO - it's noise."
                                    </p>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">- Team Gnosys Digital</span>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 5. Industry-Focused SEO Strategies (Connected Horizontal Roadmap Timeline) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Industry Verticals
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Tailored SEO For High-Growth Industries
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto">
                                Every sector has distinct conversion patterns. We engineer vertical-specific strategies matching user psychology.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="relative max-w-[85rem] mx-auto">
                            
                            {/* Horizontal Roadmap Connector Track */}
                            <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
                                {[
                                    {
                                        step: "01",
                                        icon: ShoppingCart,
                                        title: "E-Commerce",
                                        desc: "Category schema, PLP search optimization, and product feed ranking."
                                    },
                                    {
                                        step: "02",
                                        icon: Landmark,
                                        title: "BFSI & FinTech",
                                        desc: "Compliance-safe financial keywords and secure architecture."
                                    },
                                    {
                                        step: "03",
                                        icon: Activity,
                                        title: "Healthcare",
                                        desc: "E-E-A-T medical authority, local clinic packs, and patient search."
                                    },
                                    {
                                        step: "04",
                                        icon: GraduationCap,
                                        title: "EdTech & Education",
                                        desc: "Course discovery funnels, program landing pages, and admissions."
                                    },
                                    {
                                        step: "05",
                                        icon: Briefcase,
                                        title: "B2B & SaaS",
                                        desc: "High-intent buyer keywords, competitor comparisons, and demos."
                                    }
                                ].map((node, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div className="group relative flex flex-col items-center h-full">
                                            
                                            {/* Top Roadmap Node */}
                                            <div className="relative mb-6">
                                                <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                    <node.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                {/* Step Number Tag */}
                                                <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                                    {node.step}
                                                </span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                                <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                    {node.title}
                                                </h3>

                                                <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Client Results That Speak Louder Than Claims (3 Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Case Studies
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Real Clients. Verified Revenue Results.
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-3">
                                {[
                                    { 
                                        icon: Store, 
                                        title: 'E-Commerce Brand', 
                                        desc: '400% increase in organic traffic in 5 months resulting in substantial top-line revenue growth exclusively from organic search.' 
                                    },
                                    { 
                                        icon: UserCheck, 
                                        title: 'Enterprise B2B SaaS', 
                                        desc: '120+ high-intent category keywords ranked in top 3 positions, quadrupling qualified sales demo requests within 90 days.' 
                                    },
                                    { 
                                        icon: Activity, 
                                        title: 'Healthcare Network', 
                                        desc: 'Local cluster search optimization and schema remediation increased direct patient appointment bookings by 55%.' 
                                    },
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between min-h-[220px] h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 relative z-10">{item.title}</h3>
                                            <p className="text-sm text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. How We Work - The Gnosys Growth Playbook (5 Rectangular Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Execution Playbook
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                SEO That Starts With Data. Ends With Revenue.
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    { icon: Search, title: "01. Discover", desc: "Comprehensive technical audit, competitive whitespace analysis, and keyword gap mapping." },
                                    { icon: Target, title: "02. Define", desc: "Strategic topic cluster roadmap with commercial intent prioritization and clear KPI targets." },
                                    { icon: Zap, title: "03. Deploy", desc: "High-impact on-page optimization, Core Web Vitals remediation, and structured data injection." },
                                    { icon: BarChart3, title: "04. Deliver", desc: "Live Looker dashboards with weekly ranking progress and transparent lead attribution." },
                                    { icon: TrendingUp, title: "05. Dominate", desc: "Continuous algorithmic adaptation, digital PR backlink velocity, and organic market dominance." }
                                ].map((step, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-14 mb-4 rounded-xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <step.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{step.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">{step.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Bottom CTA */}
                <section className="py-20 text-center relative z-10">
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-4">
                                Ready To Scale Your Search Success?
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                Let's Turn Search Into Predictable Revenue
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-700 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
                                Your customers are actively searching. Let’s make sure they find you - and choose you.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Request a Free SEO Audit
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </MainLayout>
    );
}
