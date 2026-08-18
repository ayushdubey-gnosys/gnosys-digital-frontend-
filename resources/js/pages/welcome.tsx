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
    ArrowRight, Sparkles
} from 'lucide-react';

function StatCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
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
            { threshold: 0.25 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [hasAnimated, target]);

    return (
        <div ref={ref} className="text-5xl font-normal text-[#00477b] mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">
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

                    {/* Background Container */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('/assets/gnosys-hero.webp')" }}
                        ></div>
                        {/* Overlay: Gradient from left to right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
                        {/* Bottom fade out */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl space-y-8 flex flex-col items-start relative z-20">

                            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.05] drop-shadow-lg mt-4">
                                Expert-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300">Digital Solutions</span><br />
                                No Freelancers. <br /> No Outsourcing.
                            </h1>

                            <p className="max-w-2xl text-lg sm:text-xl text-zinc-300/90 leading-relaxed font-medium">
                                From high-performing websites and automation setups to ready-to-use digital products — we build everything in-house so you can scale effortlessly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto">
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

                            {/* Trust Metrics (Horizontal Row) */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-12 w-full mt-4 border-t border-white/10">
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
                        </div>
                    </div>

                    {/* Curved Wave Divider (Right side more curved) */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none drop-shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] lg:h-[180px] scale-x-[-1]">
                            <path fill="currentColor" className="text-blue-200/80 " d="M0,120 C300,120 500,250 1440,100 L1440,250 L0,250 Z" />
                            <path fill="currentColor" className="text-blue-100" d="M0,160 C400,160 600,250 1440,140 L1440,250 L0,250 Z" />
                        </svg>
                    </div>
                </section>

                {/* 1. Core Offerings */}
                <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                    <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-16">
                        <div className="text-center flex flex-col items-center">
                            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-widest mb-6">What We Do</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#00477b] leading-tight">Our Core Offerings</h2>
                        </div>
                    </div>

                    {/* Edge-to-edge split grid */}
                    <div className="grid lg:grid-cols-2 w-full">
                        {/* Left Side: Cards (No gap, no rounded corners) */}
                        <div className="grid sm:grid-cols-2">
                            {/* Card 1 */}
                            <div className="border border-white/60 border-l-0 p-8 lg:p-12 transition-colors duration-300 hover:bg-white/60 bg-white/40 backdrop-blur-lg flex flex-col items-center text-center">
                                <div className="size-14 lg:size-16 bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                    <Briefcase className="size-7 lg:size-8" />
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold text-[#00477b] mb-2">In-House Gigs</h4>
                                <p className="text-xs lg:text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Ready-To-Use Digital Services</p>
                                <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                                    Web development, SEO, eCommerce, server management, and marketing automation - delivered end-to-end by our team.
                                </p>
                                <Button className="mt-auto bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-6 h-12 font-bold w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30">
                                    View All Gigs
                                </Button>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-white/60 border-l-0 sm:border-l-0 border-r-0 p-8 lg:p-12 transition-colors duration-300 hover:bg-white/60 bg-white/40 backdrop-blur-lg flex flex-col items-center text-center">
                                <div className="size-14 lg:size-16 bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                    <Package className="size-7 lg:size-8" />
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold text-[#00477b] mb-2">Digital Products</h4>
                                <p className="text-xs lg:text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Ready-To-Use Digital Assets</p>
                                <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                                    Templates, workflows, themes, UI kits, and proven frameworks built to accelerate your business workflows.
                                </p>
                                <Button className="mt-auto bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-6 h-12 font-bold w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30">
                                    Shop Products
                                </Button>
                            </div>
                        </div>

                        {/* Right Side: Image (Curve on left side with elevation shadow) */}
                        <div className="relative min-h-[400px] lg:min-h-full flex items-start justify-start text-left px-8 pt-8 pb-8 sm:px-12 sm:pt-10 sm:pb-12 lg:rounded-l-[2.5rem] shadow-[-25px_0_50px_-10px_rgba(0,0,0,0.35),_-15px_0_30px_-5px_rgba(0,71,123,0.3)] overflow-hidden z-10">
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
                            <div className="absolute inset-0 bg-zinc-900/15 z-10"></div>

                            <div className="relative z-20 flex flex-col items-start">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-100 tracking-tight mb-4 drop-shadow-md">
                                    Build. Transform. Scale.
                                </h3>
                                <p className="text-lg sm:text-xl text-zinc-200/90 font-normal max-w-md drop-shadow">
                                    Taking your business from its digital foundation to its next peak.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Why Choose Gnosys */}
                <section className="pt-24 pb-20 lg:pb-28 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Why Gnosys</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Why Businesses Choose Gnosys Digital</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                            {[
                                { icon: Users, title: "100% In-House Team", desc: "Designers, developers, and marketers under one roof." },
                                { icon: Award, title: "Quality Over Volume", desc: "We never outsource. Pure global vendors." },
                                { icon: Zap, title: "Speed & Precision", desc: "Our agile process ensures 30-70% turnarounds." },
                                { icon: TrendingUp, title: "Performance First", desc: "Hosting and codebase is tested for maximum scale & speed." },
                                { icon: Globe, title: "Global Expertise", desc: "Delivering projects across 3 continents." },
                                { icon: ShieldCheck, title: "Full Ownership", desc: "You get complete control — no hidden fees or lock-ins." },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1 transition-all duration-300">
                                    <div className="size-14 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                        <item.icon className="size-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Culture of Change */}
                <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch border-y border-white/60 my-20 lg:my-28 bg-white/40 backdrop-blur-xl">
                    {/* Left Side: World Map Image with Curve on Right & Elevation Shadow */}
                    <div className="relative w-full lg:w-1/2 min-h-[360px] lg:min-h-[480px] lg:rounded-r-[3rem] shadow-[25px_0_50px_-10px_rgba(0,0,0,0.35),_15px_0_30px_-5px_rgba(0,71,123,0.3)] overflow-hidden z-10">
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

                    {/* Right Side: Content */}
                    <div className="relative z-0 w-full lg:w-1/2 flex justify-start">
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
                    </div>
                </section>

                {/* 4. Featured Gigs */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            FEATURED GIGS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Our Top Gigs - Built & Delivered By Experts
                        </h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 w-full text-left">
                            {[
                                { icon: Code, tag: "POPULAR", title: "Laravel Development", desc: "Enterprise architecture, custom APIs, and scalable web apps.", img: "/assets/larawel.webp", link: "/digital-services/custom-development" },
                                { icon: Cpu, tag: "AI POWERED", title: "AI Workflow Automation", desc: "Smart AI integration, LLM pipelines, and automated business workflows.", img: "/assets/ai-automation.jpg", link: "/digital-services/ai-automation-data-services" },
                                { icon: Server, tag: "INFRASTRUCTURE", title: "Server Setup & DevOps", desc: "High-availability cloud deployment, CI/CD, and server optimization.", img: "/assets/server-setup.jpg", link: "/digital-services/server-devops" },
                            ].map((gig, i) => (
                                <Link 
                                    key={i} 
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
                                            <div className="size-12 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center text-[#00477b] shrink-0 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                <gig.icon className="size-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-medium text-[#00477b] tracking-tight mb-1.5 group-hover:text-[#00335e] transition-colors">
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
                            ))}
                            </div>

                            <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-14 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1">
                                <Link href="/digital-services">View All Gigs</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 5. Featured Digital Products */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Featured Digital Products</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Ready-To-Use Digital Products</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 w-full">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="group relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-3 hover:bg-white/60 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col overflow-hidden">

                                    {/* Product Image Placeholder (Gradient Glass) */}
                                    <div className="relative h-48 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 border border-white/50 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                                        {/* Glow effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Center Icon */}
                                        <div className="size-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/60 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                            <Package className="size-7" />
                                        </div>
                                        <span className="text-[11px] font-bold text-blue-900/50 uppercase tracking-widest relative z-10">Digital Asset</span>

                                        {/* Bestseller Badge (Removed) */}
                                    </div>

                                    {/* Content */}
                                    <div className="pt-6 pb-2 px-3 flex flex-col items-center text-center flex-1">
                                        <h4 className="font-extrabold text-[15px] text-[#00477b] mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                            Premium Digital Product Template {item}
                                        </h4>

                                        {/* Pricing */}
                                        <div className="flex items-end gap-2 mb-6 mt-auto">
                                            <span className="text-gray-400 text-sm line-through font-semibold">$79.00</span>
                                            <span className="font-black text-zinc-900 text-xl tracking-tight">$19.00</span>
                                        </div>

                                        {/* Action Button */}
                                        <Button size="sm" className="w-full bg-white hover:bg-[#00477b] hover:text-white text-zinc-900 border border-gray-200 hover:border-[#00335e] rounded-full h-11 font-bold transition-all duration-300 shadow-sm group-hover:shadow-md">
                                            Add to cart
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <Button asChild className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-14 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1">
                                <Link href="/digital-products">Browse All Products</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 6. Solutions by Goal */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Solutions by Goal</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Solutions Built For Every Digital Goal</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10 w-full">
                            {[
                                { icon: Rocket, title: "Launch Fast", desc: "For startups & new businesses" },
                                { icon: TrendingUp, title: "Scale Online Sales", desc: "For eCommerce brands" },
                                { icon: Settings, title: "Automate Workflows", desc: "For agencies & B2B founders" },
                                { icon: Eye, title: "Grow Visibility", desc: "For SEO & content-driven teams" },
                            ].map((sol, i) => (
                                <div key={i} className="group relative bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 hover:bg-white/50 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 flex flex-col items-start text-left overflow-hidden">
                                    {/* Subtle gradient overlay for extra depth */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                                    <div className="relative z-10 size-14 rounded-2xl bg-white shadow-sm border border-white text-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-500">
                                        <sol.icon className="size-6" />
                                    </div>
                                    <h4 className="relative z-10 text-xl font-extrabold text-[#00477b] mb-2 tracking-tight">{sol.title}</h4>
                                    <p className="relative z-10 text-sm font-medium text-zinc-600 leading-relaxed">{sol.desc}</p>
                                </div>
                            ))}
                            </div>
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Explore Solutions
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 7. Proof & Impact */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Proof & Impact</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Proven Results. Real Impact.</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
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
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                View Case Studies
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 8. Testimonials */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Testimonials</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">What Our Clients Say</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 w-full">
                            {[
                                { name: "Daniel Kim", role: "UX Designer", quote: "Elegant design, smooth experience, and incredible flexibility — everything a modern professional needs." },
                                { name: "Priya Menon", role: "Product Manager", quote: "This platform transformed the way our team collaborates. Intuitive, fast, and reliable!" },
                                { name: "Arjun Desai", role: "CTO", quote: "We've scaled 3x since adopting this, and I can honestly say it's been the best technical decision we've made." },
                            ].map((test, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 text-left hover:shadow-2xl hover:shadow-zinc-900/10 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center">
                                            <User className="size-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 text-sm">{test.name}</div>
                                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{test.role}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed italic font-medium">"{test.quote}"</p>
                                </div>
                            ))}
                            </div>
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Client Videos
                            </Button>
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

                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">Let's Connect</span>
                            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight mb-6 text-white max-w-3xl">Ready To Start Something Great?</h2>
                            <p className="text-gray-200 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl font-medium">
                                Whether you want to launch a store, scale marketing, or streamline your workflows — Gnosys Digital is your in-house growth partner.
                            </p>
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
                        </div>
                    </div>
                </section>
            </MainLayout>

        </>
    );
}
