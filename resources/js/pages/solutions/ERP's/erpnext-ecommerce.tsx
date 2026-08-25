import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Package, RefreshCw, Truck, TrendingDown,
    Link as LinkIcon, FileText, CheckCircle2, ChevronDown,
    ArrowRight, Coins, FileCheck, Settings, Users, BarChart3,
    ArrowUpRight, Search, Globe, Database, Rocket, Layers
} from 'lucide-react';
import React from 'react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextEcommerce() {
    return (
        <MainLayout>
            <Head title="ERPNext For E-Commerce" />

            {/* Background Gradient */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-36 lg:pt-36 lg:pb-48 flex items-center min-h-[92vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-ecomm.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none lg:w-1/2"></div>
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
                                E-Commerce ERP Solution
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Unify Your Sales, Stock, And Accounts.
                                <br />
                                <span className="text-blue-100 font-normal">Automate Everything Else.</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Stop juggling apps and spreadsheets. Get a single, intelligent system that connects your marketplaces, website, warehouse, and financials. Scale your business, not your workload.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Book Your Free E-Commerce Workflow Assessment <span className="text-xl">&rarr;</span></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Growth Pains Grid */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            The Growth Pains Every E-Commerce Brand Knows
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: Package, title: "Stock-Outs & Overstocks", desc: "Your website says 'In Stock,' your warehouse says 'Sold Out.' Dead inventory piles up while you miss out on sales." },
                                { icon: RefreshCw, title: "Manual Mayhem", desc: "Copy-pasting orders, chasing payment reconciliations, and syncing data across 3 different tools manually." },
                                { icon: Truck, title: "Fulfillment Friction", desc: "Slow picking/packing, shipping delays, and a massive pile of return orders that are impossible to track." },
                                { icon: TrendingDown, title: "Profitability Blindness", desc: "You see sales volume, but where is the real profit per product, category, or sales channel?" },
                                { icon: LinkIcon, title: "Disconnected Channels", desc: "Managing Amazon, Flipkart, Shopify, and your own retail stores in completely separate data silos." },
                                { icon: FileText, title: "GST & Compliance Headaches", desc: "Monthly filing becomes a scrambling exercise of manual calculations and mismatched tax reports." }
                            ].map((pain, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <pain.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{pain.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{pain.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Command Center Intro Banner */}
            <section className="py-20 min-h-[420px] flex items-center justify-center relative z-10 w-full overflow-hidden text-center border-t border-white/40">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/about_Ecom.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-[#00477b]/30 backdrop-blur-xs"></div>
                </div>

                <ScrollReveal animation="zoom-in" delay={100} className="container mx-auto px-4 max-w-3xl relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-bold text-white uppercase tracking-wider mb-4">
                        Our Solution
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4">
                        Your All-In-One Commerce Command Center
                    </h2>
                    <p className="text-zinc-100 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                        ERPNext organizes chaos into process, giving you a unified backbone to run your entire business from procurement to final delivery.
                    </p>
                    <Button className="bg-white text-[#00477b] hover:bg-white/90 h-12 px-8 font-bold shadow-lg transition-all hover:scale-105 rounded-full">
                        Schedule An Assessment Call
                    </Button>
                </ScrollReveal>
            </section>

            {/* 4. Modules Built For Scale */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Core Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Modules Built For E-Commerce Scale
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: Layers, title: "Product & Catalog Master", desc: "Manage complex attributes, bundles, and variants. Centralized pricing, bulk upload, and update across all channels with ease." },
                                { icon: Globe, title: "Omnichannel Sales Integrations", desc: "Native connectors for Shopify, WooCommerce, Amazon, Flipkart, and Magento. Manage all orders in one centralized hub." },
                                { icon: Package, title: "Intelligent Inventory & Warehouse", desc: "Multi-warehouse real-time stock visibility. Expiry tracking, serial/batch tracking, and barcode scanning operations." },
                                { icon: Truck, title: "Automated Order-To-Delivery", desc: "Rule-based order processing, pick/pack/ship workflows, shipping label generation, and automated RTO tracking." },
                                { icon: Users, title: "Smart CRM & Loyalty", desc: "Unified customer profiles, integrated support ticket system, and built-in loyalty/reward programs to boost repeat sales." },
                                { icon: BarChart3, title: "Finance, Taxes & Analytics", desc: "Automated GST compliance, AR/AP, bank statement reconciliation, and rich dashboards for P&L, sales trends, and inventory health." }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
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

            {/* 5. Roadmap */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Implementation Plan
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            6-Week E-Commerce Roadmap
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { step: "Week 1-2", icon: Search, title: "Process Mapping", desc: "Map sales channels, inventory workflows, and financials to establish the baseline." },
                                { step: "Week 3", icon: Settings, title: "Core System Setup", desc: "Configure users, multi-warehouse structures, pricing rules, and GST taxation." },
                                { step: "Week 4", icon: Globe, title: "Omnichannel Integrations", desc: "Connect sales channels (Shopify, Amazon), payment gateways, and logistics." },
                                { step: "Week 5", icon: Database, title: "Migration & QA Testing", desc: "Import historical data, followed by rigorous end-to-end system testing." },
                                { step: "Week 6", icon: Rocket, title: "Training & Launch", desc: "Go live with comprehensive team training and dedicated hand-holding support." },
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-7 sm:p-8 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-5 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-xs uppercase tracking-wider mb-2.5 relative z-10">
                                            {item.step}
                                        </span>
                                        <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-snug tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Proven Results */}
            <section className="relative overflow-hidden py-14 sm:py-16 text-white border-t border-white/40">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/indian-eCom.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-[#00477b]/40 backdrop-blur-xs"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-bold text-white uppercase tracking-wider mb-3">
                            Case Studies
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-center mb-10 text-white">
                            Proven Results For Indian E-Commerce Brands
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ScrollReveal animation="fade-right" delay={100} className="h-full">
                            <div className="bg-black/35 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl transition-all flex flex-col text-left h-full">
                                <h3 className="text-2xl font-normal mb-4 text-white">
                                    D2C Skincare Brand
                                    <br />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest mt-2 px-3 py-1 bg-white/20 border border-white/35 rounded-full w-fit inline-block">Bangalore</span>
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-zinc-100 font-normal">
                                        <CheckCircle2 className="size-5 shrink-0 text-blue-300 mt-0.5" />
                                        <span>1.5x order processing speed without adding warehouse headcount.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-100 font-normal">
                                        <CheckCircle2 className="size-5 shrink-0 text-blue-300 mt-0.5" />
                                        <span>Real-time stock visibility across Shopify, Amazon, and offline distributors.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-100 font-normal">
                                        <CheckCircle2 className="size-5 shrink-0 text-blue-300 mt-0.5" />
                                        <span>99% accuracy in order fulfillment.</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" delay={150} className="h-full">
                            <div className="bg-black/35 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl transition-all flex flex-col text-left h-full">
                                <h3 className="text-2xl font-normal mb-4 text-white">
                                    Electronics Store
                                    <br />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest mt-2 px-3 py-1 bg-white/20 border border-white/35 rounded-full w-fit inline-block">Mumbai</span>
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-zinc-100 font-normal">
                                        <CheckCircle2 className="size-5 shrink-0 text-blue-300 mt-0.5" />
                                        <span>Unified Shopify & retail stores. 30% reduction in dead stock.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-100 font-normal">
                                        <CheckCircle2 className="size-5 shrink-0 text-blue-300 mt-0.5" />
                                        <span>Automated GST compliance saving 40 hours/month for accounting team.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-100 font-normal">
                                        <CheckCircle2 className="size-5 shrink-0 text-blue-300 mt-0.5" />
                                        <span>Single Source of Truth established for all business data.</span>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 7. Combined Gnosys Partner & Final CTA Section */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                {/* Headings */}
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 md:px-8 lg:px-10 mb-7 sm:mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            {/* Left Heading */}
                            <div className="lg:col-span-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Why Gnosys
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] leading-tight">
                                    Why Partner With Gnosys Digital?
                                </h2>
                            </div>
                            {/* Right Heading */}
                            <div className="lg:col-span-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Get Started
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] leading-tight">
                                    Ready To Scale Without The Chaos?
                                </h2>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Full-width Glass Band */}
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
                            
                            {/* Left Side Content: Grid of 2x2 cards */}
                            <div className="lg:col-span-6 flex flex-col justify-center">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        { title: "60+ E-Commerce Implementations", desc: "Proven track record across leading D2C brands and retailers across India." },
                                        { title: "Indian Compliance Specialists", desc: "Deep expertise in automated GST, E-Way Bills, and E-Invoicing." },
                                        { title: "Rapid 6-8 Week Onboarding", desc: "Structured deployment roadmap with guaranteed milestone deliverables." },
                                        { title: "Dedicated Support Team", desc: "Domain specialists who understand daily e-commerce logistics and ops." }
                                    ].map((item, i) => (
                                        <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                            <div 
                                                className="group relative bg-white/40 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                                <div className="size-14 mb-4 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10 shrink-0">
                                                    <CheckCircle2 className="size-6 text-[#00477b]" />
                                                </div>
                                                <h3 className="text-base font-normal text-[#00477b] mb-1.5 relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side Content: Stack of 3 action buttons */}
                            <div className="lg:col-span-6 flex flex-col justify-center gap-4 w-full">
                                {[
                                    { title: "Get a tailored automation plan for your catalog & orders.", btnText: "Book Free Assessment" },
                                    { title: "Walk through the platform with our e-commerce expert.", btnText: "See Live Demo" },
                                    { title: "Instant clarity on marketplace integrations & pricing.", btnText: "Talk to an Expert" }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)}>
                                        <div className="bg-white/40 backdrop-blur-xl p-5 sm:p-6 rounded-[1.75rem] shadow-sm border border-white/70 hover:bg-white/60 hover:shadow-md transition-all group flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <h3 className="font-normal text-sm sm:text-base text-[#00477b] text-center sm:text-left flex-1">{item.title}</h3>
                                            <Button className="bg-[#00477b] text-white hover:bg-[#003862] font-bold h-11 px-6 rounded-full shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto">
                                                {item.btnText} <ArrowRight className="size-4" />
                                            </Button>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Combined Pricing & Contact Form Section */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                            
                            {/* Left Side: Pricing Details */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 flex flex-col justify-start">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3 w-fit">
                                    Transparent Pricing
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                                    E-Commerce ERP Package
                                </h2>
                                <p className="text-zinc-600 font-normal mb-6 text-sm sm:text-base leading-relaxed">
                                    Everything you need to automate and scale your operations.
                                </p>

                                {/* Pricing Box */}
                                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/80 p-6 sm:p-7 flex flex-col gap-5 relative group overflow-hidden mb-5">
                                    <div className="border-b border-blue-100/80 pb-4">
                                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Starts At</div>
                                        <div className="text-4xl sm:text-5xl font-extrabold text-[#00477b] tracking-tight">
                                            ₹75,000
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-[#00477b] uppercase tracking-wider text-xs">Includes:</h4>
                                        <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                            Order & Inventory Management, 2 Marketplace Integrations, Automated Shipping & GST, 5 User Licenses, Training & Dedicated Go-Live Support.
                                        </p>
                                    </div>
                                </div>

                                {/* Bonus Box */}
                                <div className="bg-blue-50/70 backdrop-blur-md rounded-2xl p-5 border border-blue-100/90 shadow-sm relative overflow-hidden">
                                    <h4 className="font-bold text-[#00477b] mb-2.5 uppercase tracking-wider text-xs flex items-center gap-2">
                                        Limited Time Bonuses:
                                    </h4>
                                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-normal">
                                        <li className="flex items-center gap-2">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                            <span>Free Amazon/Flipkart Connector Setup</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                            <span>Free Data Migration from your current platform</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                            <span>3 Months Extended Priority Support</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Right Side: Contact Form */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 w-full">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-8 rounded-[2rem] shadow-xl w-full">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Assessment
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-2">Discover Your Automation Potential</h3>
                                        <p className="text-zinc-600 text-sm font-normal">
                                            Tell us a bit about your business, and we'll identify exactly where bottlenecks are slowing you down.
                                        </p>
                                    </div>
                                    <form className="space-y-5">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="fullName" className="text-[#00477b] font-medium text-xs sm:text-sm">Full Name</Label>
                                            <Input id="fullName" placeholder="Enter your full name" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-[#00477b] font-medium text-xs sm:text-sm">Email Address</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="phone" className="text-[#00477b] font-medium text-xs sm:text-sm">Phone Number</Label>
                                                <Input id="phone" placeholder="Enter your phone number" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="company" className="text-[#00477b] font-medium text-xs sm:text-sm">Company Name</Label>
                                            <Input id="company" placeholder="Enter your company name" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="businessType" className="text-[#00477b] font-medium text-xs sm:text-sm">What best describes you?</Label>
                                                <div className="relative">
                                                    <select id="businessType" className="flex h-11 w-full rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Select Type...</option>
                                                        <option className="bg-white">D2C Brand</option>
                                                        <option className="bg-white">B2B Distributor</option>
                                                        <option className="bg-white">Retailer (Online + Offline)</option>
                                                        <option className="bg-white">Marketplace Seller</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="platforms" className="text-[#00477b] font-medium text-xs sm:text-sm">Platforms you sell on</Label>
                                                <div className="relative">
                                                    <select id="platforms" className="flex h-11 w-full rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Select Platform...</option>
                                                        <option className="bg-white">Shopify</option>
                                                        <option className="bg-white">WooCommerce</option>
                                                        <option className="bg-white">Amazon / Flipkart</option>
                                                        <option className="bg-white">Multiple Platforms</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-[#00477b] font-medium text-xs sm:text-sm">Monthly Order Volume</Label>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                {['< 500', '500 - 2000', '2000 - 5000', '5000+'].map((vol, i) => (
                                                    <label key={i} className="flex items-center justify-center py-2.5 px-3 rounded-xl border border-white/80 bg-white/40 hover:bg-white/65 text-xs text-[#00477b] font-bold cursor-pointer transition-all has-[:checked]:bg-[#00477b] has-[:checked]:text-white has-[:checked]:border-[#00477b] text-center shadow-sm">
                                                        <input type="radio" name="volume" className="sr-only" defaultChecked={i === 0} />
                                                        <span>{vol}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="headache" className="text-[#00477b] font-medium text-xs sm:text-sm">Biggest Operational Headache?</Label>
                                            <Textarea id="headache" placeholder="e.g., 'Inventory never matches,' 'GST filing takes days'" className="min-h-[85px] bg-white/60 border border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl transition-all text-sm" />
                                        </div>

                                        <div className="pt-1">
                                            <Button className="bg-[#00477b] text-white hover:bg-[#003862] font-bold h-12 px-10 rounded-full shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 w-full sm:w-auto">
                                                Request Free Assessment <ArrowRight className="size-4" />
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
