import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Users, Boxes, CircleDollarSign, AlertCircle, FileSpreadsheet,
    Store, Truck, Warehouse, Factory, Package, Cog, Code,
    Smartphone, Zap, CheckCircle2, FileCode, CheckCircle, ArrowRight, Search,
    Globe, Activity, ShieldCheck, TrendingUp, BarChart3, MapPin, RotateCcw,
    BadgePercent, UserCheck, ShoppingCart, MessageCircle, Clock, Lightbulb,
    Handshake, Compass
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function ChannelDistribution() {
    return (
        <MainLayout>
            <Head title="Channel Distribution Management Software Development" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/channel-distribution.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                CHANNEL DISTRIBUTION ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Your Dealers & Distributors <br />
                                <span className="text-blue-100 font-normal">Deserve A Custom System</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Specialized Web Applications, Mobile Apps, and CRM Portals. We map your exact sales network logic to a custom distribution management platform.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <span className="relative z-10 flex items-center gap-2">Talk To An Expert <ArrowRight className="size-5" /></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Explore Features
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why Off-the-Shelf CRMs Don't Work */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY STANDARD CRMs FAIL
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            Every Manufacturer's Distribution Model Is Different
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Users className="size-7" />, title: "Different Dealer Hierarchies", desc: "Distributors, sub-dealers, and retailers — all managed differently." },
                                    { icon: <MessageCircle className="size-7" />, title: "Orders on WhatsApp", desc: "No structured order tracking or approvals." },
                                    { icon: <Clock className="size-7" />, title: "Delayed Payments", desc: "No real-time collection and outstanding visibility." },
                                    { icon: <TrendingUp className="size-7" />, title: "Commission Confusion", desc: "Complex incentive rules that generic tools can't handle." },
                                    { icon: <Globe className="size-7" />, title: "No Territory Insights", desc: "No way to track sales by geography, product, or dealer." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-tight relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Original 8-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            From Order To Payment. Complete Visibility.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            We design, develop, and implement custom channel software and portals. Give your dealers an app to place orders and give your management a dashboard to track inventory, commissions, and targets in real-time.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <UserCheck className="size-6" />, f: "Dealer Management", c: "Multi-level dealer hierarchies, onboarding & approvals." },
                                    { icon: <ShoppingCart className="size-6" />, f: "Order Management", c: "Dealer portals, order workflows, and mobile order capture." },
                                    { icon: <Boxes className="size-6" />, f: "Stock Visibility", c: "Warehouse-to-dealer stock mapping, real-time dashboards." },
                                    { icon: <Zap className="size-6" />, f: "Commission Engine", c: "Rule-based incentive and commission automation." },
                                    { icon: <CircleDollarSign className="size-6" />, f: "Credit Control", c: "Outstanding tracking, auto-reminders, and approvals." },
                                    { icon: <MapPin className="size-6" />, f: "Territory & Sales Insights", c: "Region-wise sales, performance dashboards." },
                                    { icon: <RotateCcw className="size-6" />, f: "ERP / Tally Integration", c: "Sync orders, invoices, and payments seamlessly." },
                                    { icon: <BadgePercent className="size-6" />, f: "Alerts & Triggers", c: "WhatsApp / SMS updates for dealers and managers." }
                                ].map((row, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-7 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        
                                        <div className="flex items-center justify-between mb-5 relative z-10">
                                            <div className="size-12 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                {row.icon}
                                            </div>
                                            <span className="text-[11px] font-black text-zinc-400/80 tracking-widest uppercase">
                                                0{i + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-snug relative z-10">
                                            {row.f}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed relative z-10 mt-auto">
                                            {row.c}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Built for Your Network (Stylish Enterprise Pipeline) */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            NETWORK FLOW
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Built for Your Connected Network
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Seamless data flow connecting every tier of your supply chain in real-time.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            
                            {/* Workflow Grid with Connections */}
                            <div className="relative">
                                {/* Background connecting track line on desktop */}
                                <div className="hidden lg:block absolute top-[6.5rem] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 z-0"></div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 items-stretch relative z-10">
                                    {[
                                        {
                                            step: "01",
                                            tag: "Order Entry",
                                            icon: <Store className="size-7" />,
                                            title: "Dealer",
                                            desc: "Places orders directly via dedicated mobile app or dealer portal with instant pricing."
                                        },
                                        {
                                            step: "02",
                                            tag: "Allocation",
                                            icon: <Truck className="size-7" />,
                                            title: "Distributor",
                                            desc: "Validates credit limits, approves orders & locks stock allocation automatically."
                                        },
                                        {
                                            step: "03",
                                            tag: "Fulfillment",
                                            icon: <Warehouse className="size-7" />,
                                            title: "Warehouse",
                                            desc: "Packs batch-coded inventory, auto-generates E-Way bills & schedules dispatch."
                                        },
                                        {
                                            step: "04",
                                            tag: "Production",
                                            icon: <Factory className="size-7" />,
                                            title: "Factory",
                                            desc: "Triggered on reorder levels to push manufactured stock to regional depots."
                                        },
                                        {
                                            step: "05",
                                            tag: "Intelligence",
                                            icon: <Package className="size-7" />,
                                            title: "Depot / HQ",
                                            desc: "Real-time visibility into secondary sales, dealer targets, and commission analytics."
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                
                                                {/* Top Glow on Hover */}
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                {/* Step Number Badge */}
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Step {node.step}</span>
                                                </div>

                                                {/* Soft Light Icon Container */}
                                                <div className="size-18 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                {/* Node Tag */}
                                                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                                                    {node.tag}
                                                </span>

                                                {/* Node Title */}
                                                <h3 className="font-bold text-[#00477b] text-xl mb-3 tracking-tight">
                                                    {node.title}
                                                </h3>

                                                {/* Description */}
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

                {/* 5. Our Development Process */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR DEVELOPMENT PROCESS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Design Around Your Business — Not Around Software.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            We combine data intelligence creative content and technical precision to deliver growth you can measure in revenue, not vanity metrics.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
                                {[
                                    { 
                                        icon: <Search className="size-7" />, 
                                        title: "Process Discovery & Mapping", 
                                        desc: "We study your current sales and dealer network structure to identify pain points and process gaps." 
                                    },
                                    { 
                                        icon: <Smartphone className="size-7" />, 
                                        title: "Blueprint & UI/UX Design", 
                                        desc: "We design a system that matches your flow — approval logic, dealer levels, and reporting structure." 
                                    },
                                    { 
                                        icon: <Code className="size-7" />, 
                                        title: "Development & Integration", 
                                        desc: "Built with Laravel full stack, optimized for scalability, API-ready for ERP or mobile integration." 
                                    },
                                    { 
                                        icon: <Users className="size-7" />, 
                                        title: "Training & Support", 
                                        desc: "We train your internal team and dealers, go live in phases, and provide ongoing optimization." 
                                    }
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

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                                You get a system that feels native to your business — <span className="font-bold text-[#00477b]">because it's built from it.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Channel Systems Outperform CRMs */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Why Custom Channel Systems Outperform CRMs
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Because Your Channel Isn't Generic — It's Your Biggest Competitive Edge.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
                                {/* Left Side Checklist */}
                                <div className="lg:col-span-7 space-y-4">
                                    {[
                                        "Designed to match your dealer network, product mix, and territories.",
                                        "Handles complex commission rules and multi-level approvals.",
                                        "Seamless integration with your Tally or ERP.",
                                        "Built-in analytics and alert systems.",
                                        "Modular — start with one region, scale nationwide."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3.5 p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                                            <div className="flex-shrink-0 size-8 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm">
                                                <CheckCircle className="size-4" />
                                            </div>
                                            <span className="text-zinc-800 text-sm font-semibold leading-tight">{item}</span>
                                        </div>
                                    ))}

                                    <div className="pt-4">
                                        <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-lg px-8 h-12 text-sm font-bold shadow-md transition-all">
                                            <Link href="/free-digital-consultation">
                                                Book a Free Consultation
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Side Image / Illustration */}
                                <div className="lg:col-span-5">
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white shadow-xl">
                                        <img 
                                            src="/assets/erp-trading.webp" 
                                            alt="Custom Channel Systems" 
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Why Gnosys Digital */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Why Gnosys Digital
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2 leading-tight">
                            Your Business. Your Channel.
                        </h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-[#00477b]">
                            Your Software — Custom-Built.
                        </h3>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10 text-left">
                                {[
                                    { step: "01", text: "10+ years of experience with manufacturing and sales workflows." },
                                    { step: "02", text: "Deep domain knowledge of Indian dealer & distribution networks." },
                                    { step: "03", text: "Expert Laravel full-stack development team." },
                                    { step: "04", text: "Proven track record in building modular, scalable enterprise systems." },
                                    { step: "05", text: "Local support, transparent pricing, and long-term partnerships." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-start min-h-[160px] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <span className="text-[11px] font-black text-zinc-400/80 tracking-widest uppercase mb-3 relative z-10">
                                            {item.step}
                                        </span>
                                        <p className="text-xs sm:text-sm text-zinc-700 font-semibold leading-relaxed relative z-10">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-lg px-8 h-12 text-sm font-bold shadow-md transition-all">
                                <Link href="/free-digital-consultation">
                                    Talk to Gnosys Solutions Expert
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 8. Technology & Capabilities */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Technology & Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Modern Technology, Flexible Architecture, Built To Last.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-5xl">
                            {/* Table */}
                            <div className="overflow-hidden rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl mb-6 text-left">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#00477b] text-white">
                                            <th className="py-4 px-6 text-sm font-bold w-1/3 border-r border-[#003861]">Area</th>
                                            <th className="py-4 px-6 text-sm font-bold">Tools & Tech</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-blue-100/50 text-xs sm:text-sm">
                                        {[
                                            { area: "Backend", tech: "Laravel (PHP 8+), MySQL, Redis" },
                                            { area: "Frontend", tech: "Vue / React + Tailwind CSS" },
                                            { area: "Mobile Access", tech: "PWA for dealers + optional Android/iOS apps" },
                                            { area: "Integrations", tech: "Tally, Zoho, SAP B1, WhatsApp API, Email/SMS" },
                                            { area: "Hosting", tech: "AWS / DigitalOcean / On-premise" },
                                            { area: "Security", tech: "JWT Auth, RBAC, Encryption, Audit Logs" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                                <td className="py-3.5 px-6 font-semibold text-zinc-900 border-r border-blue-100/50">{row.area}</td>
                                                <td className="py-3.5 px-6 text-zinc-600 font-medium">{row.tech}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                                Enterprise-grade systems, engineered for SME budgets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. Engagement Models */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Engagement Models
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Flexible Engagement, Transparent Outcomes.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    {
                                        icon: <Lightbulb className="size-7" />,
                                        title: "Fixed-Scope Project",
                                        desc: "You know what you want. We develop it end-to-end — fixed milestones, clear deliverables, and timelines.",
                                        btn: "Get a Proposal"
                                    },
                                    {
                                        icon: <Handshake className="size-7" />,
                                        title: "Dedicated Development Partner",
                                        desc: "You need a long-term tech ally. Our team works as your in-house extension, continuously evolving your platform.",
                                        btn: "Discuss Partnership"
                                    },
                                    {
                                        icon: <Compass className="size-7" />,
                                        title: "Process + Tech Consulting",
                                        desc: "You're still exploring? We map your sales process and design a blueprint before you commit to full development.",
                                        btn: "Book Discovery Session"
                                    }
                                ].map((card, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-8 sm:p-9 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center justify-between relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3 leading-tight relative z-10">{card.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-8 flex-1 relative z-10">
                                            {card.desc}
                                        </p>
                                        <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-xl px-6 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full relative z-10">
                                            <Link href="/free-digital-consultation">
                                                {card.btn}
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Ready To Start Something Great? */}
                <section className="py-32 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            Ready To Start Something Great?
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Whether you want to launch a store, scale marketing, or streamline your workflows — Gnosys Digital is your in-house growth partner.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-semibold shadow-md transition-all w-full sm:w-auto">
                                Get Started
                            </Button>
                            <Button asChild className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-8 h-12 text-sm font-semibold shadow-sm transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Book a Free Consultation
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
}
