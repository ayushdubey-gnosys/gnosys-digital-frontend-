import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Users, Boxes, CircleDollarSign, AlertCircle, FileSpreadsheet,
    Store, Truck, Warehouse, Factory, Package, Cog, Code,
    Smartphone, Zap, CheckCircle2, FileCode, CheckCircle, ArrowRight, Search,
    Globe, Activity, ShieldCheck, TrendingUp, BarChart3, MapPin, RotateCcw,
    BadgePercent, UserCheck, ShoppingCart, MessageCircle, Clock, Lightbulb,
    Handshake, Compass, ArrowUpRight, Trophy, Sparkles
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
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/channel-distribution.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none lg:w-1/2" />
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
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                Channel Distribution ERP
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
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Talk To An Expert <ArrowRight className="size-5" /></span>
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
                
                {/* 2. Why Off-the-Shelf CRMs Don't Work / The Challenges */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                The Challenge
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Generic CRMs Fail Indian Channel Networks
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[84rem]">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                                {[
                                    { icon: Users, title: "Complex Dealer Tiers", desc: "Distributors, super-stockists, sub-dealers, and retailers each needing distinct pricing." },
                                    { icon: MessageCircle, title: "Orders on WhatsApp", desc: "Unorganized messaging leading to lost orders, missed delivery schedules, and zero tracking." },
                                    { icon: Clock, title: "Delayed Collections", desc: "No real-time visibility into customer credit limits, outstanding balances, and aging dues." },
                                    { icon: TrendingUp, title: "Incentive Confusion", desc: "Complex rebate schemes and slab-based commission rules that generic software cannot compute." },
                                    { icon: Globe, title: "Zero Territory Insights", desc: "Lack of real-time visibility into region-wise primary vs secondary sales performance." }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-15 mb-4 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (8 Core Capabilities) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Capabilities
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                From Order To Payment: Complete Network Control
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                Give your dealers an easy app to place orders and give your leadership a real-time dashboard to track secondary sales and commissions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: UserCheck, title: "Dealer Hierarchy Management", desc: "Multi-tier dealer network onboarding, KYC approvals, and territory mapping." },
                                    { icon: ShoppingCart, title: "Mobile Order Capture", desc: "Dealer mobile app & web portal with tiered wholesale price schemes and 1-click ordering." },
                                    { icon: Boxes, title: "Warehouse Stock Visibility", desc: "Depot-to-dealer stock mapping with live inventory visibility and automated dispatch alerts." },
                                    { icon: Zap, title: "Automated Commission Engine", desc: "Automated rule-based rebate, target bonus, and seasonal incentive calculations." },
                                    { icon: CircleDollarSign, title: "Credit Limit & Aging Control", desc: "Automated credit balance locks, payment reminders, and dealer ledger statements." },
                                    { icon: MapPin, title: "Territory & Sales Insights", desc: "Granular sales heatmaps by state, city, dealer category, and product SKU." },
                                    { icon: RotateCcw, title: "ERP & Tally Sync", desc: "Two-way automated sync for sales invoices, stock levels, and ledger receipts." },
                                    { icon: BadgePercent, title: "Instant Alerts & Notifications", desc: "Automated WhatsApp & SMS updates for order dispatches, payments, and schemes." }
                                ].map((mod, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * ((i % 4) + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <mod.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{mod.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Built for Your Connected Network (Connected Horizontal Roadmap Timeline) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Network Flow
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Built for Your Connected Supply Chain
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                Seamless data and order flow connecting every tier of your channel in real-time.
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
                                        tag: "Order Entry",
                                        icon: Store,
                                        title: "Dealer & Retailer",
                                        desc: "Places orders directly via dedicated mobile app or dealer portal with instant pricing schemes."
                                    },
                                    {
                                        step: "02",
                                        tag: "Allocation",
                                        icon: Truck,
                                        title: "Distributor",
                                        desc: "Validates dealer credit balance, approves order lines, and locks stock allocation automatically."
                                    },
                                    {
                                        step: "03",
                                        tag: "Fulfillment",
                                        icon: Warehouse,
                                        title: "Depot Warehouse",
                                        desc: "Packs batch-coded inventory, auto-generates E-Way bills, and dispatches via integrated logistics."
                                    },
                                    {
                                        step: "04",
                                        tag: "Production",
                                        icon: Factory,
                                        title: "Manufacturing Plant",
                                        desc: "Triggered automatically on reorder thresholds to schedule production runs and restock depots."
                                    },
                                    {
                                        step: "05",
                                        tag: "HQ Intelligence",
                                        icon: Package,
                                        title: "Corporate HQ",
                                        desc: "Live visibility into secondary sales, dealer target achievements, and automated commission payouts."
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

                                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-2.5 relative z-10">
                                                    {node.tag}
                                                </span>

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

                {/* 5. Our Development Process */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Our Process
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Tailored Around Your Network, Not Generic Templates
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
                                We architect customized workflows to match your exact channel structures and dealer expectations.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: Search, 
                                        title: "Process Discovery & Mapping", 
                                        desc: "We study your current sales hierarchies, dealer slabs, and operational bottlenecks." 
                                    },
                                    { 
                                        icon: Smartphone, 
                                        title: "Blueprint & UX Design", 
                                        desc: "We design a frictionless mobile & web interface tailored for busy dealers and sales reps." 
                                    },
                                    { 
                                        icon: Code, 
                                        title: "Development & Integration", 
                                        desc: "Built with scalable Laravel & React architectures with ready Tally / ERP API connectors." 
                                    },
                                    { 
                                        icon: Users, 
                                        title: "Rollout & Dealer Training", 
                                        desc: "Hands-on regional training, staged deployment, and ongoing SLA maintenance." 
                                    }
                                ].map((step, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <step.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{step.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{step.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Channel Systems Outperform CRMs */}
                <section className="relative z-10 my-10 sm:my-12">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid lg:grid-cols-12 items-stretch">
                                {/* Left Side Checklist */}
                                <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 h-full">
                                    <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-12 flex flex-col justify-center h-full">
                                        <div className="max-w-xl">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-5">
                                                Why Custom Channel Systems Outperform CRMs
                                            </span>
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                                Because Your Channel Isn't Generic - It's Your Biggest Competitive Edge.
                                            </h2>

                                            <div className="space-y-3 mb-6">
                                                {[
                                                    "Designed to match your dealer network, product mix, and territories.",
                                                    "Handles complex commission rules and multi-level approvals.",
                                                    "Seamless integration with your Tally or ERP.",
                                                    "Built-in analytics and alert systems.",
                                                    "Modular - start with one region, scale nationwide."
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                                                        <div className="flex-shrink-0 size-7 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm">
                                                            <CheckCircle className="size-4" />
                                                        </div>
                                                        <span className="text-zinc-800 text-xs sm:text-sm font-semibold leading-tight">{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div>
                                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                                    <Link href="/free-digital-consultation">
                                                        Book a Free Consultation
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right Side Image (Full Image Visible, No Cropping, Edge-to-Edge) */}
                                <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 h-full">
                                    <div className="relative bg-[#02050f] overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[480px] h-full">
                                        <img 
                                            src="/assets/custom-channels.webp" 
                                            alt="Custom Channel Systems" 
                                            className="w-full h-full object-cover object-center rounded-none"
                                            loading="lazy"
                                        />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Why Gnosys Digital */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Why Gnosys
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Choose Gnosys Digital
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                                {[
                                    { title: "10+ Years Experience", desc: "Proven track record designing enterprise distribution systems across manufacturing sectors.", icon: Trophy },
                                    { title: "Indian Network Expertise", desc: "Deep domain knowledge of dealer credit habits, billing nuances, and FMCG trade workflows.", icon: Globe },
                                    { title: "Laravel & React Masters", desc: "High-performance full-stack architectures optimized for massive concurrent order peaks.", icon: Code },
                                    { title: "Modular Architecture", desc: "Modular microservices that grow seamlessly as you expand into new states and dealer slabs.", icon: Sparkles },
                                    { title: "Dedicated Support", desc: "Transparent pricing, on-ground dealer training, and 24/7 technical assistance.", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Technology & Capabilities */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Tech Stack
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Modern Technology, Built To Scale
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-5xl">
                            <ScrollReveal animation="zoom-in" delay={120}>
                                <div className="overflow-hidden rounded-[2rem] border border-white/80 shadow-lg bg-white/60 backdrop-blur-xl text-left">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-[#00477b] text-white">
                                                <th className="py-4 px-6 text-sm font-bold w-1/3 border-r border-[#003861]">Architecture Layer</th>
                                                <th className="py-4 px-6 text-sm font-bold">Tools & Technologies</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-blue-100/60 text-xs sm:text-sm">
                                            {[
                                                { area: "Backend Core", tech: "Laravel (PHP 8.3), MySQL, Redis Caching, Queues" },
                                                { area: "Frontend Interfaces", tech: "React 19 + TypeScript, Tailwind CSS v4, Inertia.js" },
                                                { area: "Mobile Access", tech: "PWA Mobile Apps + Optional Native Android/iOS Portals" },
                                                { area: "ERP Integrations", tech: "Tally Prime, Zoho Books, SAP Business One, WhatsApp Cloud API" },
                                                { area: "Hosting & DevOps", tech: "AWS Cloud / DigitalOcean / Dedicated Bare-Metal Servers" },
                                                { area: "Enterprise Security", tech: "JWT / Sanctum Auth, Granular RBAC, 256-bit Encryption, Audit Logs" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                                                    <td className="py-3.5 px-6 font-semibold text-[#00477b] border-r border-blue-100/60">{row.area}</td>
                                                    <td className="py-3.5 px-6 text-zinc-600 font-normal">{row.tech}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 9. Engagement Models */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Engagement
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Flexible Engagement Models
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    {
                                        icon: Lightbulb,
                                        title: "Fixed-Scope Project",
                                        desc: "Clear milestones, pre-agreed deliverables, and predictable timelines for fixed network rollouts.",
                                        btn: "Get a Proposal",
                                        href: "/delivery-engagement-models"
                                    },
                                    {
                                        icon: Handshake,
                                        title: "Dedicated Development Partner",
                                        desc: "Long-term tech team working as your in-house extension to continuously enhance your custom portal.",
                                        btn: "Discuss Partnership",
                                        href: "/free-digital-consultation"
                                    },
                                    {
                                        icon: Compass,
                                        title: "Process & Tech Consulting",
                                        desc: "Comprehensive sales network audit and technical blueprinting before committing to full development.",
                                        btn: "Book Discovery Session",
                                        href: "/growth-systems-discovery-call"
                                    }
                                ].map((card, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <Link
                                            href={card.href}
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden h-full cursor-pointer block"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10 transition-transform group-hover:scale-105">
                                                <card.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e]">{card.title}</h3>
                                            <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6 relative z-10">
                                                {card.desc}
                                            </p>
                                            <div className="w-full relative z-10">
                                                <Button className="bg-[#00477b] group-hover:bg-[#00335e] text-white rounded-full px-6 h-12 text-sm font-bold shadow-md group-hover:shadow-lg transition-all w-full pointer-events-none">
                                                    {card.btn}
                                                </Button>
                                            </div>
                                        </Link>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Ready To Start Something Great? */}
                <section className="py-20 text-center relative z-10">
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-4">
                                Get Started
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                Ready To Modernize Your Dealer Network?
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-700 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
                                Whether you want to launch a dealer ordering app, integrate Tally, or build custom commission engines - Gnosys Digital is your tech growth partner.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Book a Free Consultation
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
