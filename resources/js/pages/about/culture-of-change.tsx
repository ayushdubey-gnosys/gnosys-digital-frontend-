import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Search, PenTool, Layout, Target, Settings, Globe, Award, User, 
    ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Trophy, Layers, 
    Zap, Code, HeartHandshake, Eye
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function CultureOfChange() {
    return (
        <MainLayout>
            <Head title="About Gnosys Digital - The Studio Behind The Change" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section
                className="relative text-white overflow-hidden py-24 lg:py-36 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/about.webp")' }}
            >
                {/* Lighter blue overlay to make the image clearly visible */}
                <div className="absolute inset-0 bg-[#00477b]/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/50 via-transparent to-[#022c54]/30"></div>

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

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-bold text-white uppercase tracking-wider mb-4">
                            ABOUT GNOSYS DIGITAL
                        </span>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={180}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-tight">
                            The Studio Behind The <span className="font-normal text-blue-100">Change</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={280}>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100/95 mb-6 max-w-3xl mx-auto leading-relaxed font-normal">
                            At Gnosys Digital, we don't just develop software; we build digital ecosystems. We are a digital product studio driven by high-impact execution and ready-to-use digital products, designed 100% in-house.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={380}>
                        <p className="text-sm sm:text-base text-blue-200/90 max-w-2xl mx-auto font-normal">
                            No freelancers. No outsourcing. Just a focused team obsessed with helping brands launch faster, scale smarter, and grow stronger.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">

                {/* 2. Mission Section (Image Flush to Right Edge, Clean Left Content) */}
                <section className="relative overflow-hidden w-full my-12 lg:my-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Column */}
                        <div className="lg:col-span-6 pl-4 sm:pl-8 lg:pl-16 xl:pl-24 pr-4 sm:pr-6">
                            <ScrollReveal animation="fade-right" delay={100}>
                                <div className="max-w-xl space-y-6">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-2">
                                        OUR MISSION
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                        Simplifying Digital Growth
                                    </h2>
                                    <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-normal">
                                        Technology is complex. Business growth doesn't have to be. We exist to simplify digital execution for startups, brands, and digital agencies worldwide.
                                    </p>

                                    {/* Rounded Glass Vision Card */}
                                    <div className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border-l-4 border-l-[#00477b]">
                                        <h3 className="mb-2 text-xl font-medium tracking-tight text-[#00477b]">Our Vision is Simple</h3>
                                        <p className="text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
                                            To deliver top-tier digital assets, engineered systems, and development resources to you - without the typical tech headaches.
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Column: Flush to the Right Edge */}
                        <div className="lg:col-span-6 flex justify-end pl-4 sm:pl-6 lg:pl-0">
                            <ScrollReveal animation="fade-left" delay={150} className="w-full">
                                <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-l-[2.5rem] lg:rounded-l-[3.5rem] rounded-r-none overflow-hidden shadow-[-25px_0_50px_-10px_rgba(0,47,123,0.35),_-10px_10px_30px_-5px_rgba(0,0,0,0.2)] border-y border-l-2 border-white/90 bg-[#000c1e]">
                                    <img 
                                        src="/assets/growth.webp" 
                                        alt="Simplifying Digital Growth" 
                                        className="w-full h-full object-cover object-center select-none pointer-events-none"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 3. What We Do (2 Distinct Models) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                CORE EXPERTISE
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                What We Do
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal mx-auto max-w-3xl leading-relaxed">
                                We operate on two distinct, structured models - ready-to-use digital products and custom done-for-you digital services.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
                                
                                {/* Card 1 */}
                                <ScrollReveal animation="fade-up" delay={100} className="h-full">
                                    <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center">
                                                <Layout className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-3">
                                                Ready-to-Use Digital Products
                                            </h3>
                                            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 font-normal mb-8">
                                                Pre-built UI templates, code snippets, full SaaS boilerplates, and UI kits designed to accelerate your development timeline and ship products 10x faster.
                                            </p>
                                        </div>

                                        <div className="relative z-10 pt-5 border-t border-zinc-200/60">
                                            <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-6 h-11 text-xs sm:text-sm font-bold shadow-md shadow-blue-900/10 transition-all">
                                                <Link href="/products/components-library">
                                                    <span>View Digital Products</span>
                                                    <ArrowRight className="size-4 ml-1.5" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Card 2 */}
                                <ScrollReveal animation="fade-up" delay={200} className="h-full">
                                    <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center">
                                                <Settings className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-3">
                                                Done-for-You Services
                                            </h3>
                                            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 font-normal mb-8">
                                                From architecture consulting to custom Web Applications, bespoke SaaS platforms, React Native mobile apps, ERPNext integrations, and high-performance Laravel APIs.
                                            </p>
                                        </div>

                                        <div className="relative z-10 pt-5 border-t border-zinc-200/60">
                                            <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-6 h-11 text-xs sm:text-sm font-bold shadow-md shadow-blue-900/10 transition-all">
                                                <Link href="/services/web-development">
                                                    <span>Explore Services</span>
                                                    <ArrowRight className="size-4 ml-1.5" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Our Culture Of Change (4 Values) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                OUR MINDSET
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Our Culture Of Change
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                At Gnosys Digital, innovation is not a buzzword; it's our daily practice. We embrace agility in a rapidly evolving digital world.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { title: "Staying Ahead", desc: "We proactively master modern tech stacks and architectural paradigms before they become industry mandates.", icon: Zap },
                                    { title: "Designing with Purpose", desc: "We prioritize clarity, speed, zero latency, and human-centric UI/UX design in everything we build.", icon: PenTool },
                                    { title: "Data-Driven Decisions", desc: "Every architectural choice and workflow optimization is backed by verified business outcomes.", icon: Target },
                                    { title: "Radical Collaboration", desc: "We emphasize open communication, continuous peer code reviews, and collective problem-solving.", icon: HeartHandshake }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                        <div 
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="relative z-10">
                                                <div className="size-16 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] mb-6 shadow-md shadow-blue-900/5">
                                                    <item.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Our Approach (Connected Horizontal Roadmap Timeline / 4 Steps) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                OUR PROCESS
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Our Approach - The Gnosys Way
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto">
                                A structured, phased process ensuring predictability, transparency, and top-tier code quality from day one to production launch.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="relative max-w-[85rem] mx-auto">
                            
                            {/* Horizontal Roadmap Connector Track */}
                            <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
                                {[
                                    { step: "01", title: "Discover", desc: "We listen and audit your core workflows, mapping business KPIs to create an airtight execution roadmap.", icon: Search },
                                    { step: "02", title: "Design", desc: "We map user journeys, craft clean wireframes, and design reactive UI/UX that looks stunning and converts.", icon: PenTool },
                                    { step: "03", title: "Build", desc: "We engineer robust backend architectures using Laravel, React, Inertia, and resilient database schemas.", icon: Code },
                                    { step: "04", title: "Deliver", desc: "We test thoroughly with automated test suites, deploy seamlessly, and support your ongoing scaling.", icon: Target },
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                        <div className="group relative flex flex-col items-center h-full">
                                            
                                            {/* Top Roadmap Node */}
                                            <div className="relative mb-6">
                                                <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                    <item.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                {/* Step Number Tag */}
                                                <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                                    {item.step}
                                                </span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                                <h3 className="text-xl font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                    {item.title}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed relative z-10">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Why Businesses Choose Gnosys Digital (4 Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                WHY GNOSYS
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Businesses Choose Gnosys Digital
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { title: "Senior Engineers Only", desc: "Our squad consists of senior full-stack architects, product designers, and Frappe specialists.", icon: Trophy },
                                    { title: "Deep Domain Knowledge", desc: "Proven operational experience across manufacturing, supply chain, retail POS, and enterprise SaaS.", icon: Layers },
                                    { title: "Agile Rapid Turnaround", desc: "A tightly synchronized in-house workforce providing rapid iteration and round-the-clock progress.", icon: Globe },
                                    { title: "Measurable ROI Results", desc: "We focus on revenue and operational efficiency, building systems that make a lasting bottom-line impact.", icon: ShieldCheck },
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                        <div 
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="relative z-10">
                                                <div className="size-16 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center mb-6">
                                                    <item.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Our Story */}
                <section className="relative overflow-hidden w-full bg-gradient-to-r from-[#002440] via-[#00477b] to-[#001d36] py-20 lg:py-28 my-10 border-y border-white/20 shadow-2xl">
                    <div className="absolute -top-36 -left-28 w-[550px] h-[550px] bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -top-36 -right-28 w-[550px] h-[550px] bg-gradient-to-bl from-white/30 via-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold text-sky-200 tracking-wider uppercase mb-6">
                                HOW IT STARTED
                            </span>

                            <h2 className="mb-8 text-3xl md:text-5xl font-light tracking-tight text-white">
                                Our <span className="font-normal bg-gradient-to-r from-sky-200 via-white to-blue-200 bg-clip-text text-transparent">Story</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <div className="text-center space-y-6 max-w-3xl mx-auto">
                                <p className="text-xl md:text-2xl text-blue-100/95 leading-relaxed font-light">
                                    Gnosys Digital started with a simple premise: bridging the gap between <span className="text-sky-300 font-medium">innovative technology</span> and <span className="text-white font-medium underline decoration-sky-400/40 underline-offset-8">real business success</span>.
                                </p>

                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-300/50 to-transparent mx-auto"></div>

                                <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-normal max-w-2xl mx-auto">
                                    We realized that companies struggled with fragmented agencies that promised everything but delivered very little code quality. We built an ecosystem where design meets code and strategy meets execution.
                                </p>

                                <div className="pt-4 flex flex-wrap justify-center gap-3">
                                    {["Design Meets Code", "Strategy Meets Execution", "Sustainable Growth"].map((tag, idx) => (
                                        <span key={idx} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 8. Industry Collaboration & Workshops (4 Academic Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                ACADEMIC COLLABORATIONS
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Empowering Future Innovators
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                Collaborating with premier institutes to bridge academic learning and real-world tech execution.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { name: "IIT Kharagpur", img: "/assets/iit-khadkpur.webp" },
                                    { name: "IIM Raipur", img: "/assets/iim-raipur.webp" },
                                    { name: "IIT Varanasi", img: "/assets/iit-vanarasi.webp" },
                                    { name: "MDI Gurgaon", img: "/assets/mdi-gurgaon.webp" }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                        <div 
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-between text-center min-h-[220px] overflow-hidden h-full"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="flex-1 flex items-center justify-center w-full py-4 h-24 relative z-10">
                                                <img 
                                                    src={item.img} 
                                                    alt={item.name} 
                                                    width="120"
                                                    height="120"
                                                    loading="lazy"
                                                    className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                                                />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] tracking-tight group-hover:text-[#00335e] transition-colors mt-3 relative z-10">
                                                {item.name}
                                            </h3>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Meet The People Behind The Work (Marquee Scroller) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center overflow-hidden">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                OUR TEAM
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Meet The People Behind The Work
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                A senior-led multidisciplinary team united by a passion for delivering high-performance digital systems.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                        {/* Left & Right Gradient Masks */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-blue-100/90 via-blue-50/60 to-transparent z-20"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-pink-100/90 via-pink-50/60 to-transparent z-20"></div>

                        <div className="flex w-max gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused] py-2 px-6">
                            {[
                                { 
                                    name: "Priya Menon", 
                                    role: "Creative & Brand Director", 
                                    exp: "10+ Yrs Exp",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
                                    desc: "Priya shapes the visual direction, design systems, and brand experience, blending high-end aesthetics with conversion-focused strategy.",
                                    skills: ["Design Systems", "Brand Strategy", "UX Architecture"]
                                },
                                { 
                                    name: "Arjun Desai", 
                                    role: "Principal System Architect", 
                                    exp: "Tech Lead",
                                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
                                    desc: "Arjun leads the core engineering team, driving high-concurrency microservices, bank-grade security protocols, and robust Laravel full-stack backbones.",
                                    skills: ["Laravel & PHP 8+", "Microservices", "Database Tuning"]
                                },
                                { 
                                    name: "Daniel Kim", 
                                    role: "Product & UI/UX Designer", 
                                    exp: "Interaction Design",
                                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
                                    desc: "Daniel crafts frictionless, user-centric interfaces and responsive interactive dashboards for enterprise ERPs and bespoke SaaS tools.",
                                    skills: ["Figma Prototyping", "Design Tokens", "User Research"]
                                },
                                { 
                                    name: "Sarah Jenkins", 
                                    role: "ERP Solutions Architect", 
                                    exp: "Frappe / ERPNext",
                                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
                                    desc: "Sarah architects enterprise ERPNext implementations for manufacturing, retail, and supply chain enterprises with custom Frappe integrations.",
                                    skills: ["Frappe Framework", "Supply Chain ERP", "Workflows"]
                                },
                                { 
                                    name: "Marcus Vance", 
                                    role: "Cloud & DevOps Lead", 
                                    exp: "AWS Certified",
                                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
                                    desc: "Marcus manages containerized cloud environments, zero-downtime CI/CD deployment pipelines, and high-availability server clusters.",
                                    skills: ["Docker & K8s", "AWS / Cloud", "CI/CD Pipelines"]
                                },
                                { 
                                    name: "Elena Rostova", 
                                    role: "AI & Workflow Specialist", 
                                    exp: "ML & LLMs",
                                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
                                    desc: "Elena builds automated intelligent document processing pipelines, conversational AI assistants, and predictive analytics modules.",
                                    skills: ["LLM Integration", "Python & PyTorch", "Data Pipelines"]
                                },
                                { 
                                    name: "Rohan Mehta", 
                                    role: "Senior Full Stack Engineer", 
                                    exp: "Inertia + React",
                                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
                                    desc: "Rohan specializes in lightning-fast SPAs with Inertia.js, React, Tailwind CSS, and real-time WebSocket communication.",
                                    skills: ["Inertia.js", "React & TypeScript", "Tailwind CSS"]
                                },
                                { 
                                    name: "Ananya Sharma", 
                                    role: "QA & Reliability Lead", 
                                    exp: "Automated QA",
                                    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
                                    desc: "Ananya ensures zero-defect releases with automated regression suites, stress testing, and continuous integration validations.",
                                    skills: ["Pest / PHPUnit", "E2E Testing", "Security Audits"]
                                },
                                /* Duplicate items for seamless continuous looping */
                                { 
                                    name: "Priya Menon", 
                                    role: "Creative & Brand Director", 
                                    exp: "10+ Yrs Exp",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
                                    desc: "Priya shapes the visual direction, design systems, and brand experience, blending high-end aesthetics with conversion-focused strategy.",
                                    skills: ["Design Systems", "Brand Strategy", "UX Architecture"]
                                },
                                { 
                                    name: "Arjun Desai", 
                                    role: "Principal System Architect", 
                                    exp: "Tech Lead",
                                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
                                    desc: "Arjun leads the core engineering team, driving high-concurrency microservices, bank-grade security protocols, and robust Laravel full-stack backbones.",
                                    skills: ["Laravel & PHP 8+", "Microservices", "Database Tuning"]
                                }
                            ].map((person, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative w-[320px] sm:w-[360px] bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden shrink-0 select-none text-left"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div>
                                        {/* Top Profile Header with Real Avatar */}
                                        <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-zinc-200/60 relative z-10">
                                            <div className="relative size-14 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-md shadow-blue-900/5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                                                <img 
                                                    src={person.image} 
                                                    alt={person.name} 
                                                    className="w-full h-full object-cover object-center" 
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <h3 className="text-base font-bold text-[#00477b] tracking-tight truncate">{person.name}</h3>
                                                    <span className="shrink-0 bg-blue-50 text-[#00477b] text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border border-blue-100/80">
                                                        {person.exp}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-zinc-600 font-semibold mt-0.5 truncate">{person.role}</p>
                                            </div>
                                        </div>

                                        {/* Bio Description */}
                                        <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed font-normal mb-5 relative z-10">
                                            {person.desc}
                                        </p>
                                    </div>

                                    {/* Skills / Expertise Pills */}
                                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-zinc-200/50 relative z-10 mt-auto">
                                        {person.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="bg-white/80 border border-white text-zinc-700 text-[10px] font-semibold px-2 py-0.5 rounded-lg shadow-xs">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. Global Presence & CTA (Edge-to-Edge Split Layout) */}
                <section className="relative z-10 my-10 sm:my-12">
                    <div className="w-full bg-white/40 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px]">
                            
                            {/* Left Column: Full-Bleed Map Graphic */}
                            <ScrollReveal animation="fade-right" delay={100} className="h-full">
                                <div className="relative min-h-[300px] lg:min-h-[480px] w-full bg-[#082f49] overflow-hidden group h-full">
                                    <img
                                        src="/assets/global-work.webp"
                                        alt="Our Global Presence"
                                        className="absolute inset-0 w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002440]/80 via-transparent to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                                            Global Footprint
                                        </span>
                                        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
                                            Worldwide Execution
                                        </h3>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column: CTA Transparent Frosted Glass */}
                            <ScrollReveal animation="fade-left" delay={150} className="h-full">
                                <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left bg-white/30 backdrop-blur-xl overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"></div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-xs text-xs font-bold text-[#00477b] uppercase tracking-wider mb-4 self-center lg:self-start relative z-10">
                                        WORK WITH US
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4 relative z-10">
                                        Ready To Work With Us?
                                    </h2>
                                    <p className="text-sm sm:text-base text-zinc-600 font-normal mb-8 leading-relaxed relative z-10">
                                        Whether you are looking to launch a new digital product, scale your manufacturing operations, or build enterprise software, Gnosys Digital is your end-to-end technology partner.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10">
                                        <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                            <Link href="/free-digital-consultation">
                                                Get In Touch
                                            </Link>
                                        </Button>
                                        <Button asChild className="bg-white/80 hover:bg-white text-[#00477b] border border-white/80 rounded-full px-8 h-12 text-sm font-bold shadow-xs transition-all w-full sm:w-auto">
                                            <Link href="/services/web-development">
                                                Explore Services
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
}
