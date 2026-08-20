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

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-36 lg:pt-36 lg:pb-48 flex items-center min-h-[92vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-ecomm.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none lg:w-1/2"></div>
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
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                        The Growth Pains Every E-Commerce Brand Knows
                    </h2>
                    <p className="text-zinc-600 mb-14 text-lg">
                        Your operations turn into a bottleneck just as sales take off. Does this sound familiar?
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Package, title: "Stock-Outs & Overstocks", desc: "Your website says 'In Stock,' your warehouse says 'Sold Out.' Dead inventory piles up while you miss out on sales." },
                                { icon: RefreshCw, title: "Manual Mayhem", desc: "Copy-pasting orders, chasing payment reconciliations, and syncing data across 3 different tools manually." },
                                { icon: Truck, title: "Fulfillment Friction", desc: "Slow picking/packing, shipping delays, and a massive pile of return orders that are impossible to track." },
                                { icon: TrendingDown, title: "Profitability Blindness", desc: "You see sales volume, but where is the real profit per product, category, or sales channel?" },
                                { icon: LinkIcon, title: "Disconnected Channels", desc: "Managing Amazon, Flipkart, Shopify, and your own retail stores in completely separate data silos." },
                                { icon: FileText, title: "GST & Compliance Headaches", desc: "Monthly filing becomes a scrambling exercise of manual calculations and mismatched tax reports." }
                            ].map((pain, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 hover:bg-white/40 rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all text-center group">
                                    <div className="bg-white/80 shadow-sm p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                        <pain.icon className="size-8 text-[#00477b]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#00477b] mb-3">{pain.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{pain.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Command Center Intro */}
            <section className="py-36 min-h-[500px] flex items-center justify-center relative z-10 w-full overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/about_Ecom.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-[#00477b]/20"></div>
                </div>

                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">
                        OUR SOLUTION
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white mb-6">
                        Your All-In-One Commerce Command Center
                    </h2>
                    <p className="text-zinc-100 text-lg mb-10 leading-relaxed">
                        ERPNext organizes chaos into process, giving you a unified backbone to run your entire business from procurement to final delivery.
                    </p>
                    <Button className="bg-white text-[#00477b] hover:bg-white/90 h-12 px-8 font-bold shadow-lg transition-all hover:scale-105 rounded-full">
                        Schedule An Assessment Call
                    </Button>
                </div>
            </section>

            {/* 4. Modules Built For Scale */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        CORE MODULES
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-center text-[#00477b] mb-14">
                        Modules Built For E-Commerce Scale
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        {/* Top Row - 3 Cards */}
                        <div className="grid lg:grid-cols-3 gap-6 mb-6">
                            {[
                                { num: "1", title: "Product & Catalog Master", desc: "Manage complex attributes, bundles, and variants. Centralized pricing, bulk upload, and update across all channels with ease." },
                                { num: "2", title: "Omnichannel Sales Integrations", desc: "Native connectors for Shopify, WooCommerce, Amazon, Flipkart, and Magento. Manage all orders in one centralized hub." },
                                { num: "3", title: "Intelligent Inventory & Warehouse", desc: "Multi-warehouse real-time stock visibility. Expiry tracking, serial/batch tracking, and barcode scanning operations." }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] font-black text-8xl -mr-4 -mt-6 group-hover:scale-110 transition-transform text-[#00477b]">
                                        {mod.num}
                                    </div>
                                    <div className="size-8 bg-[#00477b] text-white rounded-full flex items-center justify-center font-bold mb-6">
                                        {mod.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#00477b] mb-4">{mod.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{mod.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row - 3 Wide Cards */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {[
                                { num: "4", title: "Automated Order-To-Delivery", desc: "Rule-based order processing, pick/pack/ship workflows, shipping label generation, and automated RTO (Return to Origin) tracking." },
                                { num: "5", title: "Smart CRM & Loyalty", desc: "Unified customer profiles, integrated support ticket system, and built-in loyalty/reward programs to boost repeat sales." },
                                { num: "6", title: "Finance, Taxes & Analytics", desc: "Automated GST compliance, AR/AP, bank statement reconciliation, and rich dashboards for P&L, sales trends, and inventory health." }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] font-black text-8xl -mr-4 -mt-6 group-hover:scale-110 transition-transform text-[#00477b]">
                                        {mod.num}
                                    </div>
                                    <div className="size-8 bg-[#00477b] text-white rounded-full flex items-center justify-center font-bold mb-6">
                                        {mod.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#00477b] mb-4">{mod.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{mod.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Roadmap */}
            <section className="py-24 bg-transparent overflow-hidden relative z-10 w-full">
                <div className="w-full mx-auto text-center">
                    <div className="text-center mb-16 md:mb-20 max-w-5xl mx-auto px-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Implementation Plan
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            6-Week E-commerce Roadmap
                        </h2>
                        <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                            A streamlined, step-by-step plan to automate operations, integrate channels, and empower your team without the chaos.
                        </p>
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-4 sm:px-6 lg:px-10 shadow-lg shadow-blue-900/5 my-8">
                    <div className="max-w-[1650px] mx-auto w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 xl:gap-6 w-full">
                            {[
                                { step: "Week 1-2", icon: Search, title: "Process Mapping & Architecture", desc: "Map sales channels, inventory workflows, and financials to establish the baseline." },
                                { step: "Week 3", icon: Settings, title: "Core System Setup", desc: "Configure users, multi-warehouse structures, pricing rules, and GST taxation." },
                                { step: "Week 4", icon: Globe, title: "Omnichannel Integrations", desc: "Connect sales channels (Shopify, Amazon), payment gateways, and logistics." },
                                { step: "Week 5", icon: Database, title: "Migration & QA Testing", desc: "Import historical data, followed by rigorous end-to-end system testing." },
                                { step: "Week 6", icon: Rocket, title: "Training & Launch", desc: "Go live with comprehensive team training and dedicated hand-holding support." },
                            ].map((item, i) => (
                                <div 
                                    key={i} 
                                    className="relative bg-white/80 hover:bg-white backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/90 hover:border-[#00477b]/25 shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group min-h-[280px]"
                                >
                                    <div>
                                        <div className="flex items-center justify-between w-full mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00477b]/10 to-[#00477b]/5 border border-[#00477b]/15 text-[#00477b] flex items-center justify-center group-hover:bg-[#00477b] group-hover:text-white group-hover:border-[#00477b] transition-all duration-300 shadow-2xs">
                                                <item.icon className="size-5" />
                                            </div>
                                            <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#00477b]/10 text-[#00477b] group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                0{i + 1}
                                            </span>
                                        </div>
                                        <div className="w-8 h-1 rounded-full bg-[#00477b]/20 group-hover:w-full group-hover:bg-[#00477b] transition-all duration-500 mb-3" />
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100/90 text-[#00477b] font-extrabold text-[11px] uppercase tracking-wider mb-2.5">
                                            {item.step}
                                        </span>
                                        <h3 className="text-[16px] font-bold text-[#00477b] mb-2 leading-snug tracking-tight group-hover:text-[#002f52]">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Proven Results */}
            <section className="py-36 min-h-[500px] flex items-center justify-center relative overflow-hidden w-full text-center">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/indian-eCom.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-[#00477b]/20"></div>
                </div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-center mb-16 text-white">
                        Proven Results For Indian E-Commerce Brands
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg transition-all flex flex-col group text-left">
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                D2C Skincare Brand
                                <br />
                                <span className="text-xs font-bold text-white uppercase tracking-widest mt-2 px-3 py-1 bg-white/20 border border-white/35 rounded-full w-fit inline-block">Bangalore</span>
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-zinc-100 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-white mt-0.5" />
                                    <span>1.5x order processing speed without adding warehouse headcount.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-100 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-white mt-0.5" />
                                    <span>Real-time stock visibility across Shopify, Amazon, and offline distributors.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-100 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-white mt-0.5" />
                                    <span>99% accuracy in order fulfillment.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg transition-all flex flex-col group text-left">
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                Electronics Store
                                <br />
                                <span className="text-xs font-bold text-white uppercase tracking-widest mt-2 px-3 py-1 bg-white/20 border border-white/35 rounded-full w-fit inline-block">Mumbai</span>
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-zinc-100 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-white mt-0.5" />
                                    <span>Unified Shopify & retail stores. 30% reduction in dead stock.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-100 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-white mt-0.5" />
                                    <span>Automated GST compliance saving 40 hours/month for accounting team.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-100 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-white mt-0.5" />
                                    <span>Single Source of Truth established for all business data.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Combined Gnosys Partner & Final CTA Section */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                {/* Headings (Outside / Above the background band) */}
                <div className="container mx-auto px-4 sm:px-6 max-w-[1450px] mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Left Heading */}
                        <div className="lg:col-span-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                WHY GNOSYS
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] leading-tight">
                                Why Partner With Gnosys Digital?
                            </h2>
                        </div>
                        {/* Right Heading */}
                        <div className="lg:col-span-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                GET STARTED
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] leading-tight mb-2">
                                Ready To Scale Without The Chaos?
                            </h2>
                            <p className="text-zinc-500 text-sm font-medium">
                                Choose Your Next Step:
                            </p>
                        </div>
                    </div>
                </div>

                {/* Full-width Glass Band (Applies below the headings) */}
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5">
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1450px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
                            
                            {/* Left Side Content: Grid of 2x2 cards */}
                            <div className="lg:col-span-6 flex flex-col justify-center">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "60+ E-commerce Implementations across India.",
                                        "Specialists in Indian Compliance (GST, E-Way Bills, E-Invoicing).",
                                        "Rapid Onboarding: Go-live in 6-8 weeks.",
                                        "Dedicated Support Team that understands e-commerce ops."
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center">
                                            <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shrink-0">
                                                <CheckCircle2 className="size-5 text-[#00477b]" />
                                            </div>
                                            <span className="text-sm font-semibold text-zinc-700 leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side Content: Stack of 3 action buttons */}
                            <div className="lg:col-span-6 flex flex-col justify-between gap-4 w-full">
                                {[
                                    { title: "Get a tailored automation plan.", btnText: "Book a Free Assessment" },
                                    { title: "Walk through the platform with our expert.", btnText: "See Live Demo" },
                                    { title: "Instant clarity on your questions.", btnText: "Talk to an Expert" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/20 backdrop-blur-lg p-5 rounded-2xl shadow-sm border border-white/40 hover:bg-white/30 transition-all group flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <h3 className="font-bold text-sm sm:text-base text-[#00477b] text-center sm:text-left flex-1">{item.title}</h3>
                                        <Button className="bg-[#00477b] text-white hover:bg-[#003862] font-bold h-11 px-6 rounded-full shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto">
                                            {item.btnText} <ArrowRight className="size-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Combined Pricing & Contact Form Section */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-2 sm:px-6 max-w-[1450px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        
                        {/* Left Side: Pricing Details */}
                        <div className="lg:col-span-6 flex flex-col justify-start">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                Transparent Pricing
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                                E-Commerce ERP Package
                            </h2>
                            <p className="text-zinc-600 font-medium mb-8 text-sm sm:text-base leading-relaxed">
                                Everything you need to automate and scale.
                            </p>

                            {/* Pricing Box */}
                            <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-8 flex flex-col gap-6 relative group overflow-hidden mb-6">
                                <div className="border-b border-white/40 pb-6">
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Starts At</div>
                                    <div className="text-4xl sm:text-5xl font-black text-[#00477b] tracking-tight">
                                        ₹75,000
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-[#00477b] uppercase tracking-widest text-xs">Includes:</h4>
                                    <ul className="space-y-3 text-sm text-zinc-700 font-medium">
                                        <li className="flex items-start gap-2.5">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0 mt-2" />
                                            <span>Order & Inventory Management, 2 Marketplace Integrations, Automated Shipping & GST, 5 User Licenses, Training & Go-Live Support.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bonus Box */}
                            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm relative overflow-hidden group/bonus">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#00477b]"></div>
                                <h4 className="font-bold text-[#00477b] mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                                    Limited time bonuses:
                                </h4>
                                <ul className="space-y-2 text-sm text-zinc-700 font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="text-zinc-400 font-bold">•</span> Free Amazon/Flipkart Connector Setup.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-zinc-400 font-bold">•</span> Free Data Migration from your current platform
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-zinc-400 font-bold">•</span> 3 Months Extended Priority Support.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-6 w-full">
                            <div className="bg-white/25 backdrop-blur-md border border-white/50 p-6 sm:p-8 rounded-2xl shadow-xl w-full">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-[10px] font-extrabold text-[#00477b] uppercase tracking-wider mb-2">
                                        ASSESSMENT
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-2">Discover Your Automation Potential</h3>
                                    <p className="text-zinc-600 text-sm">
                                        Tell us a bit about your business, and we'll identify exactly where bottlenecks are slowing you down.
                                    </p>
                                </div>
                                <form className="space-y-5">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="fullName" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Full Name</Label>
                                        <Input id="fullName" placeholder="Enter your full name" className="bg-white/60 border border-white/80 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-900 font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all text-sm shadow-sm" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Email Address</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" className="bg-white/60 border border-white/80 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-900 font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all text-sm shadow-sm" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="phone" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Phone Number</Label>
                                            <Input id="phone" placeholder="Enter your phone number" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-900 font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all text-sm shadow-sm" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="company" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Company Name</Label>
                                        <Input id="company" placeholder="Enter your company name" className="bg-white/60 border border-white/80 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-900 font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all text-sm shadow-sm" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="businessType" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">What best describes you?</Label>
                                            <div className="relative">
                                                <select id="businessType" className="flex h-11 w-full rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-zinc-700 font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 transition-all appearance-none shadow-sm">
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
                                            <Label htmlFor="platforms" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Platforms you sell on</Label>
                                            <div className="relative">
                                                <select id="platforms" className="flex h-11 w-full rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-zinc-700 font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 transition-all appearance-none shadow-sm">
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
                                        <Label className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Monthly Order Volume</Label>
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
                                        <Label htmlFor="headache" className="text-[#00477b] font-bold text-xs uppercase tracking-wider">Biggest Operational Headache?</Label>
                                        <Textarea id="headache" placeholder="e.g., 'Inventory never matches,' 'GST filing takes days'" className="min-h-[90px] bg-white/60 border border-white/80 focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-900 font-medium placeholder:text-zinc-400 rounded-xl transition-all text-sm shadow-sm" />
                                    </div>

                                    <div className="pt-2">
                                        <Button className="bg-[#00477b] text-white hover:bg-[#003862] font-bold h-12 px-10 rounded-full shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2 w-full sm:w-auto">
                                            Request Free Assessment <ArrowRight className="size-4" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
