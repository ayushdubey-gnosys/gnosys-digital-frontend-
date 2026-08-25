import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    CheckCircle, BarChart3, Store, Globe, ArrowUpRight,
    Smartphone, Database, Settings, RefreshCw, ShoppingCart,
    CreditCard, Users, Box, HeadphonesIcon, Search, Rocket,
    CheckSquare, Check, ArrowRight, ShieldCheck, Trophy, ChevronDown
} from 'lucide-react';
import React, { useState } from 'react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextRetail() {
    const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

    const toggleChallenge = (item: string) => {
        setSelectedChallenges((prev) =>
            prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
        );
    };

    return (
        <MainLayout>
            <Head title="ERPNext For Retail SMEs" />

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
                                Retail ERP Solution
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                ERPNext For <br />
                                <span className="text-blue-100 font-normal">Retail SMEs</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 text-white font-bold text-xs sm:text-sm">
                                <div className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                                    <Store className="size-4 text-blue-300" />
                                    <span>Run Better Stores</span>
                                </div>
                                <div className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                                    <Globe className="size-4 text-blue-300" />
                                    <span>Sell Anywhere</span>
                                </div>
                                <div className="flex items-center gap-2.5 bg-black/30 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                                    <ArrowUpRight className="size-4 text-blue-300" />
                                    <span>Grow Faster</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                A single unified platform to manage multi-store POS, real-time inventory, customer loyalty, and automated accounting for growing retail brands.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={380}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Request Free Retail Assessment <ArrowUpRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Retail Challenges */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Retail Challenges
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { icon: RefreshCw, title: "Disconnected Channels", desc: "Physical POS, online stores, and marketplace listings functioning in isolation." },
                                { icon: Box, title: "Stock Blindspots", desc: "Frequent stockouts and mismatch between storefront shelves and main warehouse." },
                                { icon: Settings, title: "Slow Checkout & Errors", desc: "Manual discount errors, delayed billing queues, and system offline glitches." },
                                { icon: Users, title: "Fragmented Loyalty", desc: "Zero single-pane visibility into customer purchase patterns across locations." },
                                { icon: Store, title: "Month-End Reconciliation", desc: "Painful multi-store closing with days lost matching cash, card, and UPI balances." }
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

            {/* 3. ERPNext Retail Solutions */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Solutions
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            ERPNext Retail Solutions
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: Database, title: "Unified Multi-Location Inventory", desc: "Real-time stock visibility across all storefronts, regional hubs, and warehouses with automated transfer tracking." },
                                { icon: Smartphone, title: "Fast POS with Offline Capability", desc: "Lightning fast barcode scanning, split billing, gift cards, and uninterrupted offline checkout sync." },
                                { icon: Users, title: "Customer 360° & Loyalty Engine", desc: "Centralized customer profiles, reward points, dynamic tier upgrades, and automated WhatsApp SMS promotions." },
                                { icon: RefreshCw, title: "Automated Restocking & Min-Max", desc: "Smart replenishment triggers based on past sales velocities, lead times, and seasonal trends." },
                                { icon: BarChart3, title: "Financial Clarity & Automated GST", desc: "1-Click E-invoicing, multi-store daily sales closing, automatic payment reconciliation, and P&L statements." },
                                { icon: Globe, title: "Omnichannel Operations", desc: "Seamless integration with Shopify, Amazon, WooCommerce, and hyper-local delivery partners." }
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

            {/* 4. Key Modules */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key Retail Modules
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: ShoppingCart, title: "Point of Sale (POS)", desc: "Barcode scanning, rapid search, split tender payments, returns, and automatic background data synchronization." },
                                { icon: Box, title: "Inventory & Warehousing", desc: "Serial & batch number tracking, multi-warehouse transfers, barcode generation, and automated stock audits." },
                                { icon: HeadphonesIcon, title: "Customer Engagement & CRM", desc: "Omnichannel customer database, targeted campaign management, feedback collection, and loyalty tiers." },
                                { icon: Smartphone, title: "Orders & Fulfillment", desc: "Unified omnichannel orders, click-and-collect store pickups, dispatch routing, and shipping integrations." },
                                { icon: Store, title: "Staff & Store Operations", desc: "Shift scheduling, cashier drawer openings/closings, commission calculations, and role-based permissions." },
                                { icon: CreditCard, title: "Finance & Accounting", desc: "Daily till reconciliation, GST tax invoicing, multi-store profit centers, accounts payable/receivable, and P&L." }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
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

            {/* 5. Implementation Process - Connected Roadmap */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Roadmap
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            8-Week Retail ERP Implementation Roadmap
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="relative max-w-[86rem] mx-auto">
                        
                        {/* Horizontal Roadmap Connector Track for Desktop */}
                        <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
                            {[
                                { step: "01", week: "Week 1", title: "Retail Operations Analysis", desc: "Audit stores, supply chains, SKU catalogs, and billing workflows.", icon: Search },
                                { step: "02", week: "Weeks 2-3", title: "System Customization", desc: "Configure POS terminals, payment gateways, price lists, and barcode schemes.", icon: Settings },
                                { step: "03", week: "Weeks 4-5", title: "Data Migration", desc: "Import legacy customer data, open stock balances, and vendor profiles.", icon: Database },
                                { step: "04", week: "Weeks 5-6", title: "Training & Testing", desc: "Train cashier staff, store managers, and conduct mock transaction runs.", icon: Users },
                                { step: "05", week: "Weeks 7-8", title: "Go-Live & Support", desc: "Seamless rollout across all storefronts with on-ground launch support.", icon: Rocket }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div className="group relative flex flex-col items-center">
                                        
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

                                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[11px] uppercase tracking-wider mb-2.5 relative z-10">
                                                {item.week}
                                            </span>

                                            <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                {item.title}
                                            </h3>

                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
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

            {/* 6. Retail Formats We Support */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Formats
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Retail Formats We Support
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { bold: "Apparel & Fashion", text: "Size, color, and fit matrix variations, seasonal catalogs, and markdown management.", icon: Store },
                                { bold: "Electronics & Appliances", text: "Serial number and warranty tracking, IMEI registration, and demo unit management.", icon: Smartphone },
                                { bold: "Department Stores", text: "Multi-department layout, concessionaire split billing, and centralized stock sync.", icon: Store },
                                { bold: "Pharmacy & Wellness", text: "Batch number, expiry tracking, prescription attachments, and schedule drug audits.", icon: Box },
                                { bold: "Grocery & Supermarkets", text: "Weighing scale integrations, perishable stock rotation, and rapid POS scan.", icon: ShoppingCart },
                                { bold: "Specialty & Luxury Outlets", text: "Custom product attributes, gift registry, bespoke packaging, and VIP loyalty.", icon: Globe }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.bold}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{item.text}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Measurable Retail Benefits */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Benefits
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Measurable Retail Business Benefits
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    title: "Operational Speed",
                                    icon: Settings,
                                    points: ["70% faster counter checkout", "60% reduction in stockouts", "Instant day-end reconciliation"]
                                },
                                {
                                    title: "Customer Experience",
                                    icon: Users,
                                    points: ["Single customer 360° profile", "Personalized loyalty rewards", "Omnichannel returns & pickup"]
                                },
                                {
                                    title: "Financial Control",
                                    icon: BarChart3,
                                    points: ["Automated GST E-invoicing", "Audit-ready store records", "Real-time store cashflow dashboards"]
                                },
                                {
                                    title: "Business Growth",
                                    icon: ArrowUpRight,
                                    points: ["Data-driven replenishment", "Rapid multi-store rollout", "Optimized gross profit margins"]
                                }
                            ].map((benefit, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <benefit.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{benefit.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {benefit.points.map((pt, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <CheckCircle className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{pt}</span>
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
                                { title: "Retail Domain Experts", desc: "Retail-focused ERP implementations for growing Indian brands & multi-store chains.", icon: Store },
                                { title: "Transparent Pricing", desc: "Fixed-scope rollout with zero recurring user license fees and rapid ROI.", icon: Trophy },
                                { title: "End-to-End Handholding", desc: "Cashier training, barcode setup, on-site go-live support, and dedicated SLA.", icon: ShieldCheck },
                                { title: "Multi-Format Experience", desc: "Proven expertise across fashion, grocery, electronics, and pharmacy retail.", icon: Globe }
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

            {/* 9. Special Offer & Assessment Form */}
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
                                    Retail ERP Package
                                </h2>
                                <p className="text-zinc-600 mb-6 text-sm sm:text-base leading-relaxed font-normal">
                                    Comprehensive retail transformation package for single & multi-store chains with complete POS and inventory setup.
                                </p>

                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-xl overflow-hidden w-full">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold text-[#00477b]">₹</span>
                                        <p className="text-5xl font-extrabold text-[#00477b] tracking-tight">85,000</p>
                                        <span className="text-xs text-zinc-500 font-medium ml-2">/ complete package</span>
                                    </div>

                                    <div className="bg-white/60 rounded-2xl p-4 border border-white mb-6">
                                        <h4 className="text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2.5">
                                            Early Booking Bonus Inclusions:
                                        </h4>
                                        <ul className="space-y-2 text-xs text-zinc-700 font-normal">
                                            {[
                                                "Unified POS setup for up to 3 retail outlets",
                                                "Free e-commerce Shopify / WooCommerce sync",
                                                "3 Months extended post-launch support",
                                                "1-Click GST E-invoicing & E-way bill configuration"
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
                                            <span>• Multi-Store POS</span>
                                            <span>• Inventory Sync</span>
                                            <span>• Customer CRM</span>
                                            <span>• GST Accounting</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column: Assessment Form (7 cols) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl relative z-10">
                                    <div className="text-left mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Get Started
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal text-[#00477b] tracking-tight mb-1">
                                            Request Free Retail Assessment
                                        </h3>
                                        <p className="text-zinc-600 text-xs sm:text-sm font-normal">
                                            Tell us about your stores and our retail ERP architect will connect with you.
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
                                                <Label htmlFor="storeName" className="text-xs font-medium text-[#00477b]">Store / Brand Name *</Label>
                                                <Input id="storeName" placeholder="e.g. Metro Retailers" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="numStores" className="text-xs font-medium text-[#00477b]">Number of Stores</Label>
                                                <div className="relative">
                                                    <select id="numStores" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">1 Store (Single Outlet)</option>
                                                        <option className="bg-white">2 - 5 Stores</option>
                                                        <option className="bg-white">6 - 15 Stores</option>
                                                        <option className="bg-white">15+ Outlets / Regional Chain</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="retailType" className="text-xs font-medium text-[#00477b]">Retail Category</Label>
                                                <div className="relative">
                                                    <select id="retailType" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Apparel & Fashion</option>
                                                        <option className="bg-white">Electronics & Appliances</option>
                                                        <option className="bg-white">Grocery & Supermarkets</option>
                                                        <option className="bg-white">Pharmacy & Healthcare</option>
                                                        <option className="bg-white">Department Store / Multi-Category</option>
                                                        <option className="bg-white">Specialty Retail / Other</option>
                                                     </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <Label className="text-xs font-medium text-[#00477b]">Key Operational Challenges</Label>
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {[
                                                    "Inventory Discrepancies",
                                                    "Multi-Store POS Sync",
                                                    "Billing Speed at Counter",
                                                    "E-Commerce Integration"
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
                                                Request Free Retail Assessment <ArrowRight className="size-4" />
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
