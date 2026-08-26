import React, { useState, useEffect, useRef } from 'react';
import { Link, usePage, Head } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import MainLayout from '@/layouts/main-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    ChevronDown, Search, User, ShoppingBag,
    Briefcase, Package, Users, Award, Zap, TrendingUp,
    Globe, ShieldCheck, Code, Cpu, Server, Rocket, Settings, Eye,
    ArrowRight, Sparkles, Star, CheckCircle2, Check, Layers
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

function StatCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let animationFrameId: number;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    observer.disconnect();

                    const duration = 1800;
                    let startTime: number | null = null;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const elapsed = timestamp - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(target * easeOut);
                        setCount(current);

                        if (progress < 1) {
                            animationFrameId = requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };

                    animationFrameId = requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [target]);

    return (
        <div ref={ref} className="text-5xl font-normal text-[#00477b] mb-3 tracking-tight">
            {count}{suffix}
        </div>
    );
}

export default function Welcome() {
    const { auth } = usePage().props as any;

    return (
        <>
            <Head title="Gnosys Digital - Expert-Built Digital Solutions">
                <meta name="description" content="Expert-built digital solutions, ERPNext implementations, custom web apps, AI automation, and ready-to-use digital products by Gnosys Digital." />
            </Head>

            <MainLayout>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 flex items-start justify-start text-left min-h-[85vh]">

                    {/* Background Container with Dynamic Shining Light Beam Sweep */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-[1.02]"
                            style={{ backgroundImage: "url('/assets/gnosys-hero.webp')" }}
                        ></div>
                        {/* Overlay: Gradient from left to right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
                        {/* Bottom fade out */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent"></div>

                        {/* Balanced Ambient Light Beam Sweeping Left to Right (Delayed to trigger AFTER text loads) */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-85">
                            {/* Luminous Cyan-Blue Shimmer Beam - Starts after text reveals */}
                            <div 
                                className="absolute -inset-y-32 -left-1/3 w-[55%] bg-gradient-to-r from-transparent via-cyan-400/15 via-blue-500/10 to-transparent animate-[beamSweep_8s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-3xl opacity-0" 
                                style={{ animationDelay: '1.4s', animationFillMode: 'backwards' }}
                            />
                            
                            {/* Crystal Light Flare Streak */}
                            <div 
                                className="absolute -inset-y-32 -left-1/3 w-[28%] bg-gradient-to-r from-transparent via-white/12 to-transparent animate-[beamSweep_8s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-xl opacity-0" 
                                style={{ animationDelay: '1.65s', animationFillMode: 'backwards' }}
                            />

                            {/* Cyber Glow Orbs - Fade in with text */}
                            <div className="absolute top-1/4 left-1/4 size-72 bg-blue-500/10 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />
                            <div className="absolute top-1/2 right-1/3 size-80 bg-teal-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '1s' }} />
                        </div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl space-y-8 flex flex-col items-start relative z-20">

                            <ScrollReveal animation="fade-up" delay={80} duration={850}>
                                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.05] drop-shadow-lg mt-4">
                                    Expert-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300">Digital Solutions</span><br />
                                    No Freelancers. <br /> No Outsourcing.
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={220} duration={850}>
                                <p className="max-w-2xl text-lg sm:text-xl text-zinc-300/90 leading-relaxed font-medium">
                                    From high-performing websites and automation setups to ready-to-use digital products - we build everything in-house so you can scale effortlessly.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={360} duration={850}>
                                <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
                                    <Button asChild size="lg" className="group relative bg-white text-[#1677FF] hover:bg-zinc-100 shadow-[0_8px_25px_rgba(255,255,255,0.15)] rounded-2xl px-10 h-16 text-[16px] font-bold w-full sm:w-auto overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.25)] border-0">
                                        <Link href="/solutions">
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                            <span className="flex items-center gap-3">
                                                Explore Our Solutions
                                                <svg className="size-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                            </span>
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" className="bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl px-10 h-16 text-[16px] font-bold w-full sm:w-auto transition-all duration-300 hover:-translate-y-1">
                                        <Link href="/digital-products">Shop Products</Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            {/* Trust Metrics (Horizontal Row) */}
                            <ScrollReveal animation="fade-up" delay={500} duration={850} className="w-full">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-10 w-full mt-4 border-t border-white/10">
                                    {[
                                        { val: "50+", label: "Projects Delivered" },
                                        { val: "100%", label: "In-House Team" },
                                        { val: "12+", label: "Years Experience" },
                                        { val: "24/7", label: "Premium Support" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col">
                                            <div className="text-2xl font-black text-white drop-shadow-md">{stat.val}</div>
                                            <div className="text-[12px] font-bold text-blue-200/70 uppercase tracking-widest mt-1 leading-tight">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Curved Wave Divider */}
                    <HeroWaveDivider />
                </section>

                {/* 1. Core Offerings */}
                <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-16">
                        <ScrollReveal animation="fade-up" delay={100} className="text-center flex flex-col items-center">
                            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-widest mb-6">What We Do</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#00477b] leading-tight">Our Core Offerings</h2>
                        </ScrollReveal>
                    </div>

                    {/* Edge-to-edge split grid */}
                    <div className="grid lg:grid-cols-2 w-full items-stretch border-y border-white/60 bg-white/40 backdrop-blur-xl">
                        {/* Left Side: Cards */}
                        <div className="grid sm:grid-cols-2">
                            {/* Card 1: In-House Gigs */}
                            <ScrollReveal animation="fade-up" delay={150} className="h-full flex flex-col">
                                <div className="group relative border-b sm:border-b-0 sm:border-r border-white/60 p-8 lg:p-12 transition-all duration-300 hover:bg-white/50 backdrop-blur-lg flex flex-col items-center text-center h-full">
                                    <div className="size-16 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center mb-6">
                                        <Briefcase className="size-7 text-[#00477b]" />
                                    </div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#00477b] text-[10px] font-semibold tracking-wider uppercase mb-3 shadow-2xs">
                                        Ready-To-Use Digital Services
                                    </span>
                                    <h4 className="text-2xl lg:text-3xl font-medium text-[#00477b] mb-3 tracking-tight">
                                        In-House Gigs
                                    </h4>
                                    <p className="text-zinc-600 text-sm lg:text-base mb-8 leading-relaxed font-normal max-w-sm">
                                        Web development, SEO, eCommerce, server management, and marketing automation - delivered end-to-end by our team.
                                    </p>
                                    <Button asChild className="mt-auto group/btn relative overflow-hidden bg-[#00477b] hover:bg-[#00335e] text-white shadow-xl shadow-blue-900/20 border border-white/30 rounded-full px-8 h-12 font-bold w-full max-w-[220px] transition-all duration-300 hover:scale-105">
                                        <Link href="/digital-services">
                                            <span className="relative z-10 flex items-center justify-center gap-2">View All Gigs <ArrowRight className="size-4" /></span>
                                            <div className="absolute inset-0 -translate-x-[150%] group-hover/btn:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            {/* Card 2: Digital Products */}
                            <ScrollReveal animation="fade-up" delay={250} className="h-full flex flex-col">
                                <div className="group relative p-8 lg:p-12 transition-all duration-300 hover:bg-white/50 backdrop-blur-lg flex flex-col items-center text-center h-full">
                                    <div className="size-16 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center mb-6">
                                        <Package className="size-7 text-[#00477b]" />
                                    </div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#00477b] text-[10px] font-semibold tracking-wider uppercase mb-3 shadow-2xs">
                                        Ready-To-Use Digital Assets
                                    </span>
                                    <h4 className="text-2xl lg:text-3xl font-medium text-[#00477b] mb-3 tracking-tight">
                                        Digital Products
                                    </h4>
                                    <p className="text-zinc-600 text-sm lg:text-base mb-8 leading-relaxed font-normal max-w-sm">
                                        Templates, workflows, themes, UI kits, and proven frameworks built to accelerate your business workflows.
                                    </p>
                                    <Button asChild className="mt-auto group/btn relative overflow-hidden bg-[#00477b] hover:bg-[#00335e] text-white shadow-xl shadow-blue-900/20 border border-white/30 rounded-full px-8 h-12 font-bold w-full max-w-[220px] transition-all duration-300 hover:scale-105">
                                        <Link href="/digital-products">
                                            <span className="relative z-10 flex items-center justify-center gap-2">Shop Products <ArrowRight className="size-4" /></span>
                                            <div className="absolute inset-0 -translate-x-[150%] group-hover/btn:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Side: Image (Curve on left side with elevation shadow) */}
                        <ScrollReveal animation="fade-left" delay={200} className="h-full">
                            <div className="relative min-h-[420px] lg:min-h-full flex items-start justify-start text-left px-8 pt-8 pb-8 sm:px-12 sm:pt-10 sm:pb-12 lg:rounded-l-[3rem] shadow-[-25px_0_50px_-10px_rgba(0,0,0,0.35),_-15px_0_30px_-5px_rgba(0,71,123,0.3)] overflow-hidden z-10 h-full">
                                <img
                                    src="/assets/mountain.webp"
                                    alt="Digital Offerings Peak Mountain"
                                    width="800"
                                    height="600"
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                />
                                {/* Overlay to ensure text readability */}
                                <div className="absolute inset-0 bg-zinc-900/20 z-10"></div>

                                <div className="relative z-20 flex flex-col items-start">
                                    <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                                        OUR MISSION
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-100 tracking-tight mb-4 drop-shadow-md">
                                        Build. Transform. Scale.
                                    </h3>
                                    <p className="text-lg sm:text-xl text-zinc-200/90 font-normal max-w-md drop-shadow leading-relaxed">
                                        Taking your business from its digital foundation to its next peak.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. Why Choose Gnosys */}
                <section className="pt-24 pb-20 lg:pb-28 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Why Gnosys</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Why Businesses Choose Gnosys Digital</h2>
                        </ScrollReveal>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                            {[
                                { 
                                    icon: Users, 
                                    tag: "COLLABORATIVE",
                                    title: "100% In-House Team", 
                                    desc: "Designers, senior developers, and growth marketers collaborating directly under one roof.",
                                    benefit: "Direct access to builders"
                                },
                                { 
                                    icon: Award, 
                                    tag: "EXCELLENCE",
                                    title: "Quality Over Volume", 
                                    desc: "We never outsource or cut corners. Every line of code and design adheres to global engineering benchmarks.",
                                    benefit: "Zero junior outsourcing"
                                },
                                { 
                                    icon: Zap, 
                                    tag: "EFFICIENCY",
                                    title: "Speed & Precision", 
                                    desc: "Our structured agile sprints guarantee 30-70% faster turnaround times without sacrificing reliability.",
                                    benefit: "Fast iterative delivery"
                                },
                                { 
                                    icon: TrendingUp, 
                                    tag: "SCALABILITY",
                                    title: "Performance First", 
                                    desc: "Every database, frontend, and backend architecture is stress-tested for maximum load, speed, and 99.9% uptime.",
                                    benefit: "High-load stress tested"
                                },
                                { 
                                    icon: Globe, 
                                    tag: "INTERNATIONAL",
                                    title: "Global Expertise", 
                                    desc: "Proven track record delivering enterprise-grade digital systems across North America, Europe, and Asia.",
                                    benefit: "Multi-continent reach"
                                },
                                { 
                                    icon: ShieldCheck, 
                                    tag: "TRANSPARENCY",
                                    title: "Full IP Ownership", 
                                    desc: "You retain 100% intellectual property, code access, and repository ownership with zero lock-in contracts.",
                                    benefit: "100% code & data rights"
                                },
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 80} className="h-full">
                                    <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-7 sm:p-8 text-left shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden h-full">
                                        {/* Subtle ambient hover glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        
                                        {/* Top Header Row with Icon and Tag */}
                                        <div className="relative z-10 flex items-center justify-between mb-6">
                                            <div className="size-12 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center shadow-xs">
                                                <item.icon className="size-5 text-[#00477b]" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-semibold tracking-wider text-[#00477b] bg-white/60 backdrop-blur-md border border-white/80 px-2.5 py-1 rounded-full uppercase">
                                                    {item.tag}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title & Desc */}
                                        <div className="relative z-10 mb-6">
                                            <h4 className="text-lg sm:text-xl font-medium text-[#00477b] mb-2 tracking-tight group-hover:text-[#00335e] transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Verified Footer Pill */}
                                        <div className="relative z-10 pt-4 border-t border-white/60 mt-auto flex items-center justify-between text-xs font-normal text-zinc-500">
                                            <span>{item.benefit}</span>
                                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Culture of Change */}
                <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch border-y border-white/60 my-20 lg:my-28 bg-white/40 backdrop-blur-xl">
                    {/* Left Side: World Map Image with Curve on Right & Elevation Shadow */}
                    <div className="w-full lg:w-1/2 flex">
                        <ScrollReveal animation="fade-right" delay={100} className="w-full flex">
                            <div className="relative w-full min-h-[360px] lg:min-h-[480px] lg:rounded-r-[3rem] shadow-[25px_0_50px_-10px_rgba(0,0,0,0.35),_15px_0_30px_-5px_rgba(0,71,123,0.3)] overflow-hidden z-10 flex-1">
                                <img 
                                    src="/assets/world-map.webp" 
                                    alt="Global reach world map" 
                                    width="900"
                                    height="600"
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                                />
                                <div className="absolute inset-0 bg-zinc-900/10 z-10"></div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Side: Content */}
                    <div className="relative z-0 w-full lg:w-1/2 flex justify-start">
                        <ScrollReveal animation="fade-left" delay={200} className="w-full">
                            <div className="w-full max-w-[800px] py-12 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center space-y-6">
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                        CULTURE OF CHANGE
                                    </span>
                                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                        Our Culture Of Change
                                    </h2>
                                    <p className="text-zinc-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                                        Change isn't a campaign for us - it's our culture. We constantly evolve our tools, design, and strategies to help our clients grow faster in a world that changes every day. At Gnosys Digital, we experiment boldly, execute precisely, and learn endlessly - because progress never stands still.
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-lg shadow-blue-900/10 text-sm font-semibold transition-all hover:-translate-y-0.5 w-fit">
                                        <Link href="/about/culture-of-change">Read Our Story</Link>
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 4. Featured Gigs */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                FEATURED GIGS
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                                Our Top Gigs - Built & Delivered By Experts
                            </h2>
                        </ScrollReveal>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 w-full text-left">
                            {[
                                { icon: Code, tag: "POPULAR", title: "Laravel Development", desc: "Enterprise architecture, custom APIs, and scalable web apps.", img: "/assets/larawel.webp", link: "/digital-services/custom-development" },
                                { icon: Cpu, tag: "AI POWERED", title: "AI Workflow Automation", desc: "Smart AI integration, LLM pipelines, and automated business workflows.", img: "/assets/ai-automation.jpg", link: "/digital-services/ai-automation-data-services" },
                                { icon: Server, tag: "INFRASTRUCTURE", title: "Server Setup & DevOps", desc: "High-availability cloud deployment, CI/CD, and server optimization.", img: "/assets/server-setup.jpg", link: "/digital-services/server-devops" },
                            ].map((gig, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 120} className="h-full">
                                    <Link 
                                        href={gig.link}
                                        className="group relative bg-white/35 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-5 sm:p-6 shadow-lg shadow-blue-900/5 hover:bg-white/55 hover:shadow-[0_20px_50px_-10px_rgba(0,71,123,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden cursor-pointer"
                                    >
                                        <div>
                                            {/* Image Container */}
                                            <div className="relative h-[230px] sm:h-[250px] w-full rounded-[1.75rem] overflow-hidden bg-slate-900 shadow-md mb-6">
                                                <img 
                                                    src={gig.img} 
                                                    alt={gig.title} 
                                                    width="600"
                                                    height="400"
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                                                
                                                {/* Floating Badge */}
                                                <div className="absolute top-4 left-4 z-10">
                                                    <span className="bg-white/85 backdrop-blur-md text-[#00477b] text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-white/80">
                                                        {gig.tag}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="size-12 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center text-[#00477b] shrink-0">
                                                    <gig.icon className="size-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-medium text-[#00477b] tracking-tight mb-1.5">
                                                        {gig.title}
                                                    </h4>
                                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                                        {gig.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Bar */}
                                        <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between mt-4">
                                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Expert Team</span>
                                            <span className="text-sm font-semibold text-[#00477b] group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                                                Explore Gig <span>&rarr;</span>
                                            </span>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                            </div>

                            <ScrollReveal animation="fade-up" delay={400}>
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-14 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1">
                                    <Link href="/digital-services">View All Gigs</Link>
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 5. Featured Digital Products */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Featured Digital Products</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Ready-To-Use Digital Products</h2>
                        </ScrollReveal>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 w-full">
                            {[1, 2, 3, 4].map((item, idx) => (
                                <ScrollReveal key={item} animation="fade-up" delay={idx * 100} className="h-full">
                                    <div className="group relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-3 hover:bg-white/60 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col overflow-hidden h-full">

                                        {/* Product Image Placeholder (Gradient Glass) */}
                                        <div className="relative h-48 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 border border-white/50 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Center Icon */}
                                            <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-md border border-white/60 text-[#00477b] mb-3 relative z-10">
                                                <Package className="size-7 text-[#00477b]" />
                                            </div>
                                            <span className="text-[11px] font-bold text-[#00477b]/70 uppercase tracking-widest relative z-10">Digital Asset</span>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-6 pb-2 px-3 flex flex-col items-center text-center flex-1">
                                            <h4 className="font-medium text-[15px] text-[#00477b] mb-2 line-clamp-2 leading-tight">
                                                Premium Digital Product Template {item}
                                            </h4>

                                            {/* Pricing */}
                                            <div className="flex items-end gap-2 mb-6 mt-auto">
                                                <span className="text-gray-400 text-sm line-through font-semibold">$79.00</span>
                                                <span className="text-2xl font-bold text-[#00477b]">$49.00</span>
                                            </div>

                                            {/* Action Button */}
                                            <Button size="sm" className="w-full bg-white/70 backdrop-blur-md hover:bg-gradient-to-r hover:from-[#00477b] hover:to-[#00335e] text-[#00477b] hover:text-white border border-white/80 hover:border-transparent rounded-full h-11 font-bold transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgb(0,71,123,0.25)] hover:scale-[1.02] cursor-pointer">
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                            </div>
                            <ScrollReveal animation="fade-up" delay={300}>
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-14 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1">
                                    <Link href="/digital-products">View All Products</Link>
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 6. Why Choose Gnosys Grid */}
                <section className="pt-24 bg-transparent text-center">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Enterprise-Grade Delivery</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">How We Drive Results</h2>
                        </ScrollReveal>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12 w-full">
                            {[
                                {
                                    icon: Briefcase,
                                    badge: "Delivery Models",
                                    title: "Delivery & Engagement Models",
                                    desc: "Structured milestone execution, dedicated retainers, and agile sprint delivery models.",
                                    features: ["Direct dev execution", "Milestone-based delivery", "Full IP ownership"],
                                    link: "/delivery-engagement-models"
                                },
                                {
                                    icon: Layers,
                                    badge: "Consultation",
                                    title: "Free Digital Consultation",
                                    desc: "End-to-end ERPNext systems, multi-system cloud architecture, and custom business portals.",
                                    features: ["Dedicated architects", "Legacy migration support", "SLA-backed delivery"],
                                    link: "/free-digital-consultation"
                                },
                                {
                                    icon: Rocket,
                                    badge: "Discovery",
                                    title: "Growth Systems Discovery Call",
                                    desc: "In-depth 30-minute system architecture audit, technical roadmap, and growth strategy session.",
                                    features: ["Architecture audit", "Clear rollout roadmap", "Preliminary ROI projection"],
                                    link: "/growth-systems-discovery-call"
                                },
                            ].map((sol, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={i * 100} className="h-full">
                                    <Link 
                                        href={sol.link}
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-7 sm:p-8 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between text-left shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden h-full cursor-pointer block"
                                    >
                                        {/* Subtle ambient hover glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div>
                                            <div className="relative z-10 flex items-center justify-between w-full mb-6">
                                                <div className="size-12 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                                                    <sol.icon className="size-5 text-[#00477b]" />
                                                </div>
                                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/60 backdrop-blur-md text-[#00477b] border border-white/80">
                                                    {sol.badge}
                                                </span>
                                            </div>

                                            <h4 className="relative z-10 text-lg sm:text-xl font-medium text-[#00477b] mb-2 tracking-tight group-hover:text-[#00335e]">
                                                {sol.title}
                                            </h4>
                                            <p className="relative z-10 text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                                                {sol.desc}
                                            </p>

                                            {/* Feature list */}
                                            <div className="relative z-10 space-y-2.5 mb-6">
                                                {sol.features.map((feat, fIdx) => (
                                                    <div key={fIdx} className="flex items-center gap-2 text-xs font-normal text-zinc-600">
                                                        <Check className="size-3.5 text-emerald-600 shrink-0" />
                                                        <span>{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="relative z-10 pt-4 border-t border-white/60 mt-auto flex items-center justify-between text-xs font-medium text-[#00477b] group-hover:text-[#00335e] transition-colors">
                                            <span>Explore Path</span>
                                            <div className="size-7 rounded-full bg-white/80 border border-white/90 text-[#00477b] flex items-center justify-center shadow-2xs transition-transform group-hover:translate-x-1">
                                                <ArrowRight className="size-3.5" />
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                            </div>
                            <ScrollReveal animation="fade-up" delay={450}>
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#00335e] text-white shadow-xl shadow-blue-900/20 border border-white/30 rounded-full px-10 h-14 font-extrabold text-base transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                    <Link href="/solutions/erpnext-implementation">
                                        <span className="relative z-10 flex items-center gap-2">Explore Solutions <ArrowRight className="size-4" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                    </Link>
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 7. Proof & Impact */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Proof & Impact</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Proven Results. Real Impact.</h2>
                        </ScrollReveal>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <ScrollReveal animation="zoom-in" delay={120}>
                                <div className="flex flex-wrap justify-center divide-x divide-zinc-200/60 max-w-5xl mx-auto mb-10 py-12 bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden relative w-full">
                                    {/* Shining Glass Effect */}
                                    <div
                                        className="absolute top-0 -left-[100%] h-full w-1/2 z-0 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"
                                        style={{ animation: 'shimmerGlass 3s infinite' }}
                                    />
                                    <style>{`
                                        @keyframes shimmerGlass {
                                             0% { transform: translateX(-50%) skewX(-20deg); opacity: 0; }
                                            20% { opacity: 1; }
                                            80% { opacity: 1; }
                                            100% { transform: translateX(400%) skewX(-20deg); opacity: 0; }
                                        }
                                    `}</style>

                                    {[
                                        { target: 500, suffix: "+", label: "Projects Delivered" },
                                        { target: 90, suffix: "%", label: "Client Retention Rate" },
                                        { target: 3, suffix: "", label: "Global Offices" },
                                        { target: 38, suffix: "%", label: "Avg Increase In Client Conversions" },
                                    ].map((stat, i) => (
                                        <div key={i} className="px-8 sm:px-14 flex flex-col items-center relative z-10 group cursor-default my-4 sm:my-0">
                                            <StatCounter target={stat.target} suffix={stat.suffix} />
                                            <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.2em] text-center max-w-[140px] leading-relaxed">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={250}>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                    View Case Studies
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 8. Testimonials */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Testimonials</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">What Our Clients Say</h2>
                        </ScrollReveal>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            {/* Infinite X-Axis Scrolling Marquee Track */}
                            <div className="relative w-full overflow-hidden py-4 mb-10">
                                {/* Left & Right Gradient Fade Masks */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-blue-100/90 via-blue-50/50 to-transparent z-20"></div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-pink-100/90 via-pink-50/50 to-transparent z-20"></div>

                                <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
                                {[
                                    { 
                                        name: "Daniel Kim", 
                                        role: "UX Lead", 
                                        company: "Apex Global",
                                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.8,
                                        quote: "Elegant architecture, smooth user experience, and incredible delivery speed - everything a modern product team needs." 
                                    },
                                    { 
                                        name: "Priya Menon", 
                                        role: "Product Director", 
                                        company: "InnoTech Labs",
                                        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.6,
                                        quote: "Their ERP implementation and automated workflows transformed our operations completely. Intuitive, fast, and robust!" 
                                    },
                                    { 
                                        name: "Arjun Desai", 
                                        role: "CTO", 
                                        company: "Nexus Enterprises",
                                        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.9,
                                        quote: "We've scaled 3x since deploying this stack. Easily the best engineering partnership we've ever had." 
                                    },
                                    { 
                                        name: "Sarah Jenkins", 
                                        role: "VP of Engineering", 
                                        company: "CloudScale AI",
                                        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.7,
                                        quote: "High-performance codebases delivered on schedule. Their technical rigor and communication are world-class." 
                                    },
                                    { 
                                        name: "Marcus Vance", 
                                        role: "Managing Director", 
                                        company: "Hyperion B2B",
                                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.8,
                                        quote: "Turned our complex legacy software into an automated, lightning-fast digital asset in record time." 
                                    },
                                    { 
                                        name: "Elena Rostova", 
                                        role: "Head of Operations", 
                                        company: "Veloce Global",
                                        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.5,
                                        quote: "Seamless end-to-end execution. Their digital solutions gave us an immediate 40% efficiency boost." 
                                    },
                                    { 
                                        name: "Rohan Mehta", 
                                        role: "Founder & CEO", 
                                        company: "Optima Commerce",
                                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.9,
                                        quote: "Our online sales conversion doubled within 60 days of relaunch. Couldn't recommend them more highly." 
                                    },
                                    /* Duplicate items for seamless continuous looping */
                                    { 
                                        name: "Daniel Kim", 
                                        role: "UX Lead", 
                                        company: "Apex Global",
                                        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.8,
                                        quote: "Elegant architecture, smooth user experience, and incredible delivery speed - everything a modern product team needs." 
                                    },
                                    { 
                                        name: "Priya Menon", 
                                        role: "Product Director", 
                                        company: "InnoTech Labs",
                                        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.6,
                                        quote: "Their ERP implementation and automated workflows transformed our operations completely. Intuitive, fast, and robust!" 
                                    },
                                    { 
                                        name: "Arjun Desai", 
                                        role: "CTO", 
                                        company: "Nexus Enterprises",
                                        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.9,
                                        quote: "We've scaled 3x since deploying this stack. Easily the best engineering partnership we've ever had." 
                                    },
                                    { 
                                        name: "Sarah Jenkins", 
                                        role: "VP of Engineering", 
                                        company: "CloudScale AI",
                                        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.7,
                                        quote: "High-performance codebases delivered on schedule. Their technical rigor and communication are world-class." 
                                    },
                                    { 
                                        name: "Marcus Vance", 
                                        role: "Managing Director", 
                                        company: "Hyperion B2B",
                                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.8,
                                        quote: "Turned our complex legacy software into an automated, lightning-fast digital asset in record time." 
                                    },
                                    { 
                                        name: "Elena Rostova", 
                                        role: "Head of Operations", 
                                        company: "Veloce Global",
                                        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.5,
                                        quote: "Seamless end-to-end execution. Their digital solutions gave us an immediate 40% efficiency boost." 
                                    },
                                    { 
                                        name: "Rohan Mehta", 
                                        role: "Founder & CEO", 
                                        company: "Optima Commerce",
                                        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
                                        rating: 4.9,
                                        quote: "Our online sales conversion doubled within 60 days of relaunch. Couldn't recommend them more highly." 
                                    },
                                ].map((test, i) => (
                                    <div 
                                        key={i} 
                                        className="w-[340px] sm:w-[410px] shrink-0 group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 text-left shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex items-center gap-4 sm:gap-5 overflow-hidden"
                                    >
                                        {/* Subtle ambient hover glow */}
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        {/* Left Side: Real User Image */}
                                        <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/90 shadow-md ring-2 ring-[#00477b]/10 shrink-0 bg-white">
                                            <img 
                                                src={test.image} 
                                                alt={test.name} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Right Side: Text (Stars, Rating, Quote, Name, Role) */}
                                        <div className="relative z-10 flex-1 flex flex-col justify-between h-full text-left overflow-hidden">
                                            <div>
                                                {/* Stars Rating with Exact Rating Score */}
                                                <div className="flex items-center gap-1.5 mb-2">
                                                    <div className="flex items-center text-amber-400">
                                                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                                                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                                                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                                                        <Star className="size-3.5 fill-amber-400 text-amber-400" />
                                                        <Star className="size-3.5 fill-amber-400/35 text-amber-400" />
                                                    </div>
                                                    <span className="text-[11px] font-semibold text-[#00477b] bg-blue-50/80 border border-blue-100/90 px-1.5 py-0.5 rounded-md leading-none">
                                                        {test.rating}
                                                    </span>
                                                </div>

                                                {/* Quote */}
                                                <p className="text-zinc-600 text-xs leading-relaxed font-normal mb-3 line-clamp-3">
                                                    "{test.quote}"
                                                </p>
                                            </div>

                                            {/* Author Name & Role */}
                                            <div className="pt-2 border-t border-white/60 mt-auto">
                                                <div className="font-medium text-zinc-900 text-sm truncate">
                                                    {test.name}
                                                </div>
                                                <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider truncate">
                                                    {test.role} &bull; {test.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <ScrollReveal animation="fade-up" delay={400}>
                                <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#00335e] text-white shadow-xl shadow-blue-900/20 border border-white/30 rounded-full px-10 h-14 font-extrabold text-base transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                                    <span className="relative z-10 flex items-center gap-2">Client Videos <ArrowRight className="size-4" /></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 9. CTA */}
                <section
                    className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/get ready.webp')" }}
                >
                    {/* Optional dark overlay so the image is clear but doesn't overpower the text */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-5xl mx-auto py-12 lg:py-24 text-left relative z-10">
                            <ScrollReveal animation="fade-up" delay={100}>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">Let's Connect</span>
                                <h2 className="text-4xl sm:text-6xl font-normal tracking-tight mb-6 text-white max-w-3xl">Ready To Start Something Great?</h2>
                            </ScrollReveal>
                            
                            <ScrollReveal animation="fade-up" delay={220}>
                                <p className="text-gray-200 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl font-medium">
                                    Whether you want to launch a store, scale marketing, or streamline your workflows - Gnosys Digital is your in-house growth partner.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={340}>
                                <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                                    <Button className="bg-white text-zinc-900 hover:bg-gray-100 rounded-full px-10 h-14 w-full sm:w-auto font-bold shadow-xl shadow-black/20 border border-white hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                                        Get Started Today
                                    </Button>
                                    <Button asChild variant="outline" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:text-white rounded-full px-10 h-14 w-full sm:w-auto font-bold hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-sm">
                                        <Link href="/free-digital-consultation">
                                            Book a Free Consultation
                                        </Link>
                                    </Button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </MainLayout>

        </>
    );
}
