import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
    CheckCircle, ShoppingCart, Box, Truck, CreditCard, 
    TrendingUp, FileText, ClipboardList, Clock, CheckSquare,
    Search, Server, PlayCircle, Settings, Monitor, Headset,
    LayoutDashboard, MapPin, Eye, ArrowUpRight, Check, ArrowRight,
    Trophy, ShieldCheck, Globe, Users, Rocket, ChevronDown
} from 'lucide-react';
import React, { useState } from 'react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextTradingDistribution() {
    return (
        <MainLayout>
            <Head title="ERPNext For Trading & Distribution SMEs" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-treading.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none lg:w-1/2" />
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
                                Trading & Distribution ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Streamline Your <br />
                                <span className="text-blue-100 font-normal">Wholesale & Distribution</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Manage multi-warehouse stock, order-to-dispatch pipelines, logistics, and GST accounting from a single unified enterprise platform.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Get Free Distribution Assessment <ArrowUpRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Challenges in Trading & Distribution */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Challenges Faced By Wholesale Distributors
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { icon: Box, title: "Stock Uncertainty", desc: "Lack of real-time inventory visibility across multiple regional hubs and godowns." },
                                { icon: Settings, title: "Manual Order Errors", desc: "Errors in order processing, inaccurate pricing tiers, and slow invoice generation." },
                                { icon: Truck, title: "Logistics Chaos", desc: "Difficulty tracking vehicle dispatches, transit delays, and proof of delivery." },
                                { icon: CreditCard, title: "Payment Delays", desc: "Poor visibility into customer credit limits, outstanding dues, and ageing receivables." },
                                { icon: Eye, title: "Poor Visibility", desc: "Disconnected data silos preventing fast, data-backed procurement decisions." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
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

            {/* 3. How ERPNext Transforms Your Business */}
            <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] my-10 sm:my-12">
                {/* Left Side: Seamless World Map Image (100% 50/50 Cover, Attached to Left) */}
                <ScrollReveal animation="fade-right" delay={100} className="relative w-full lg:w-1/2 min-h-[380px] lg:min-h-[580px]">
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat shadow-[15px_0_40px_-10px_rgba(0,71,123,0.15)]" 
                        style={{ backgroundImage: 'url("/assets/world-map.webp")' }}
                    ></div>
                </ScrollReveal>

                {/* Right Side: Content */}
                <ScrollReveal animation="fade-left" delay={150} className="w-full lg:w-1/2 flex justify-start">
                    <div className="w-full max-w-[800px] py-12 lg:py-16 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center space-y-6">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                TRANSFORMATION
                            </span>
                            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                How ERPNext Transforms Your Business
                            </h2>
                            <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
                                Empower your trading enterprise with global visibility, automated fulfillment, and real-time inventory intelligence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Real-time multi-location inventory tracking",
                                "Automated order-to-invoice processing",
                                "Integrated logistics and delivery management",
                                "Smart accounting with automated GST compliance",
                                "Dashboards for sales, stock, and financial health",
                                "Faster month-end closing and reconciliation"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3.5 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                                    <div className="flex-shrink-0 size-9 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm">
                                        <CheckCircle className="size-4" />
                                    </div>
                                    <span className="text-zinc-700 text-sm font-semibold leading-tight">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-md text-sm font-medium hover:-translate-y-0.5 transition-all w-fit">
                                Schedule Transformation Demo
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
            
            {/* 4. Key ERPNext Modules For Trading & Distribution */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key ERPNext Modules For Distribution
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                            {[
                                { 
                                    icon: Box, 
                                    title: "Inventory & Warehousing", 
                                    items: [
                                        "Multi-location stock tracking and automated inter-warehouse transfers",
                                        "Batch & expiry management with FEFO/FIFO dispatch rules",
                                        "Automated reorder triggers and weighted average stock valuation"
                                    ] 
                                },
                                { 
                                    icon: ShoppingCart, 
                                    title: "Sales & Order Processing", 
                                    items: [
                                        "Quotation-to-invoice automated workflow with approvals",
                                        "Multi-tier wholesale pricing lists, volume schemes & customer discounts",
                                        "Customer credit limit controls with automated payment hold"
                                    ] 
                                },
                                { 
                                    icon: Truck, 
                                    title: "Logistics & Fleet Dispatch", 
                                    items: [
                                        "Delivery note generation with automated trip planning",
                                        "Transporter integration and automated E-way bill generation",
                                        "Proof of delivery capture and tracking via mobile app"
                                    ] 
                                },
                                { 
                                    icon: CreditCard, 
                                    title: "Finance & Accounting", 
                                    items: [
                                        "Automated GST invoicing, GSTR 1/3B reconciliation, and bank sync",
                                        "Item-wise and customer-wise gross profit margin reporting",
                                        "Real-time accounts receivable aging and automatic reminder dispatch"
                                    ] 
                                }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <mod.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {mod.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <CheckCircle className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Roadmap - Connected Roadmap Style */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Roadmap
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Trading ERP Implementation Roadmap
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="relative max-w-[80rem] mx-auto">
                        
                        {/* Horizontal Roadmap Connector Track */}
                        <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
                            {[
                                { 
                                    step: "01", 
                                    week: "Weeks 1-2",
                                    title: "Discovery & Process Mapping", 
                                    desc: "Audit warehouses, inventory SKUs, customer pricing rules, and logistics routing.",
                                    icon: Search
                                },
                                { 
                                    step: "02", 
                                    week: "Weeks 3-4",
                                    title: "System Setup & Configuration", 
                                    desc: "Configure ERPNext multi-warehouse nodes, GST tax rules, and approval hierarchies.",
                                    icon: Settings
                                },
                                { 
                                    step: "03", 
                                    week: "Weeks 5-6",
                                    title: "Data Migration & Training", 
                                    desc: "Migrate opening stock, supplier balances, and conduct role-based team training.",
                                    icon: Users
                                },
                                { 
                                    step: "04", 
                                    week: "Weeks 7-8",
                                    title: "Go-Live & Support", 
                                    desc: "Launch live dispatch operations with dedicated on-ground SLA support.",
                                    icon: Rocket
                                }
                            ].map((phase, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div className="group relative flex flex-col items-center">
                                        
                                        {/* Top Roadmap Node */}
                                        <div className="relative mb-6">
                                            <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                <phase.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            {/* Step Number Tag */}
                                            <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                                {phase.step}
                                            </span>
                                        </div>

                                        {/* Content Card */}
                                        <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[11px] uppercase tracking-wider mb-2.5 relative z-10">
                                                {phase.week}
                                            </span>

                                            <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                {phase.title}
                                            </h3>

                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                                {phase.desc}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Success Stories */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Stories
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Wholesale Distribution Success Stories
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
                            <ScrollReveal animation="fade-right" delay={100} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-3 w-fit">
                                        FMCG Distributor • Delhi NCR
                                    </span>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                        70% Reduction in Stockouts
                                    </h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                        Automated multi-warehouse inventory management reduced stockouts by 70%, while month-end reconciliation was slashed from 3 days to under 3 hours.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-left" delay={150} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-3 w-fit">
                                        Pharma Wholesaler • Mumbai
                                    </span>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                        40% Less Expiry Losses
                                    </h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                        Automated FEFO batch dispatch and expiry alerts cut inventory waste by 40%, while integrated E-way bill generation accelerated regional dispatch cycles.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Key Benefits */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Benefits
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key Benefits You'll Experience
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                { 
                                    title: "Operational Efficiency", 
                                    icon: TrendingUp,
                                    items: [
                                        "60% faster customer order processing", 
                                        "40% reduction in stockouts and overselling", 
                                        "50% faster delivery turnarounds"
                                    ] 
                                },
                                { 
                                    title: "Financial Control", 
                                    icon: CreditCard,
                                    items: [
                                        "Real-time cash flow & receivables visibility", 
                                        "Automated GST & E-invoicing compliance", 
                                        "Accurate profit margins per SKU and dealer"
                                    ] 
                                },
                                { 
                                    title: "Business Growth", 
                                    icon: Box,
                                    items: [
                                        "Data-backed reorder intelligence", 
                                        "Higher dealer & vendor satisfaction", 
                                        "Scalable foundation for regional expansion"
                                    ] 
                                }
                            ].map((benefit, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <benefit.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{benefit.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {benefit.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <CheckCircle className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Why Choose Gnosys Digital */}
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
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { title: "40+ Distribution Deployments", desc: "40+ successful ERP implementations tailored for FMCG, electrical, and industrial distributors.", icon: Truck },
                                { title: "Configured for Trading", desc: "Tailored multi-warehouse, batch-tracking, and dealer pricing out-of-the-box.", icon: Settings },
                                { title: "Transparent Fixed Pricing", desc: "Predictable rollout budgets with zero recurring license lock-ins.", icon: Trophy },
                                { title: "End-to-End Handholding", desc: "Warehouse staff training, barcode integration, and dedicated post-launch support.", icon: ShieldCheck }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
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

            {/* 9. Contact Form + Special Offer Combined */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[1450px]">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            {/* Left Column: Special Offer (5 cols) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 text-left flex flex-col items-start">
                                <span className="w-fit inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Special Pricing
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                    Distribution ERP Package
                                </h2>
                                <p className="text-zinc-600 mb-6 text-sm sm:text-base leading-relaxed font-normal">
                                    Complete wholesale & distribution transformation package for growing Indian traders and supply chain businesses.
                                </p>

                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-xl overflow-hidden w-full">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold text-[#00477b]">₹</span>
                                        <p className="text-5xl font-extrabold text-[#00477b] tracking-tight">75,000</p>
                                        <span className="text-xs text-zinc-500 font-medium ml-2">/ complete package</span>
                                    </div>

                                    <div className="bg-white/60 rounded-2xl p-4 border border-white mb-6">
                                        <h4 className="text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2.5">
                                            Early Booking Bonus Inclusions:
                                        </h4>
                                        <ul className="space-y-2 text-xs text-zinc-700 font-normal">
                                            {[
                                                "Up to 5 Full User Licenses (Scalable on demand)",
                                                "2 Months comprehensive post-launch support",
                                                "Free Mobile Dispatch & Stock Taking App Setup",
                                                "1-Click GST E-invoicing & Automated E-way Bills"
                                            ].map((bonus, bIdx) => (
                                                <li key={bIdx} className="flex items-center gap-2">
                                                    <Check className="size-3.5 text-[#00477b] shrink-0" />
                                                    <span>{bonus}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-2 text-xs text-zinc-600 font-normal">
                                        <p className="font-medium text-[#00477b]">Includes All Core Modules:</p>
                                        <div className="grid grid-cols-2 gap-2 text-zinc-700">
                                            <span>• Multi-Warehouse Stock</span>
                                            <span>• Order-to-Invoice</span>
                                            <span>• Transporter Fleet</span>
                                            <span>• GST Accounting</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column: Contact Form (7 cols) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl relative z-10">
                                    <div className="text-left mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Get Started
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal text-[#00477b] tracking-tight mb-1">
                                            Request Free Distribution Assessment
                                        </h3>
                                        <p className="text-zinc-600 text-xs sm:text-sm font-normal">
                                            Tell us about your distribution operations and our ERP architect will tailor a demo.
                                        </p>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="fullName" className="text-xs font-medium text-[#00477b]">Full Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-xs font-medium text-[#00477b]">Email Address *</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="phone" className="text-xs font-medium text-[#00477b]">Phone Number *</Label>
                                                <Input id="phone" placeholder="+91 98765 43210" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="companyName" className="text-xs font-medium text-[#00477b]">Company / Trading Name *</Label>
                                                <Input id="companyName" placeholder="e.g. Pioneer Traders" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="industryType" className="text-xs font-medium text-[#00477b]">Industry / Category</Label>
                                                <div className="relative">
                                                    <select id="industryType" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">FMCG & Consumer Goods</option>
                                                        <option className="bg-white">Electronics & Appliances</option>
                                                        <option className="bg-white">Pharmaceuticals & Healthcare</option>
                                                        <option className="bg-white">Apparel & Textiles</option>
                                                        <option className="bg-white">Industrial Supplies & Hardware</option>
                                                        <option className="bg-white">Other Wholesale Category</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="contactMethod" className="text-xs font-medium text-[#00477b]">Preferred Contact Method</Label>
                                                <div className="relative">
                                                    <select id="contactMethod" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">WhatsApp</option>
                                                        <option className="bg-white">Phone Call</option>
                                                        <option className="bg-white">Email</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <Label className="text-xs font-medium text-[#00477b]">Current Operational Priorities</Label>
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {[
                                                    "Multi-Warehouse Sync",
                                                    "Batch/Expiry FEFO Tracking",
                                                    "Fleet & Dispatch Automation",
                                                    "Receivables & Credit Control"
                                                ].map((challenge, idx) => (
                                                    <label key={idx} className="flex items-center gap-2 cursor-pointer bg-white/50 p-2.5 rounded-xl border border-white/70 hover:bg-white/80 transition-colors">
                                                        <Checkbox className="border-white/80 bg-white/70 data-[state=checked]:bg-[#00477b] data-[state=checked]:text-white data-[state=checked]:border-[#00477b]" />
                                                        <span className="text-xs text-zinc-700 font-normal leading-tight">{challenge}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button type="button" className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 font-bold w-full shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2">
                                                Request Free Distribution Assessment <ArrowRight className="size-4" />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
