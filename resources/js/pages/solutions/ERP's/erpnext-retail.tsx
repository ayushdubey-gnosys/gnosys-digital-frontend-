import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    CheckCircle, BarChart3, Store, Globe, ArrowUpRight,
    Smartphone, Database, Settings, RefreshCw, ShoppingCart,
    CreditCard, Users, Box, HeadphonesIcon, Search, Rocket
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextRetail() {
    return (
        <MainLayout>
            <Head title="ERPNext For Retail SMEs" />

            {/* 1. Hero Section */}
            <section
                className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh]"
                style={{
                    backgroundImage: "url('/assets/erp-treading.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-[#0a2540]/20 z-0"></div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-tight drop-shadow-md">
                            ERPNext For Retail SMEs
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <div className="flex flex-wrap justify-center gap-8 mb-10 text-white font-bold text-sm sm:text-base">
                            <div className="flex flex-col items-center gap-3">
                                <Store className="size-8 text-white" />
                                <span>Run Better Stores</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <Globe className="size-8 text-white" />
                                <span>Sell Anywhere</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <ArrowUpRight className="size-8 text-white" />
                                <span>Grow Faster</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            A single platform to manage inventory, sales, customers, and finance for retail businesses.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={380}>
                        <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">Request Free Assessment <span className="text-xl">&rarr;</span></span>
                            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                        </Button>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* Main Content Wrapper */}
            <div className="bg-transparent">

                {/* 2. Retail Challenges */}
                <section className="pt-24 pb-12 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            CHALLENGES
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Retail Challenges
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-12">
                            Common hurdles in retail operations.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                                    {[
                                        { icon: <RefreshCw />, title: "Disconnected Systems", desc: "Silos between online and offline channels leading to data mismatch." },
                                        { icon: <Box />, title: "Stock Out / Overstock", desc: "Poor inventory visibility causing lost sales or tied-up capital." },
                                        { icon: <Settings />, title: "Manual Processes & Errors", desc: "High reliance on manual data entry for pricing and promotions." },
                                        { icon: <Users />, title: "Poor Data & Customer Understanding", desc: "Lack of insights into customer buying behavior and lifetime value." },
                                        { icon: <Store />, title: "Shrinkage & Pilferage", desc: "Inadequate controls leading to inventory losses." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                            <div className="size-16 rounded-full bg-[#00477b] text-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                                {React.cloneElement(item.icon, { className: "size-7" })}
                                            </div>
                                            <h3 className="text-base font-semibold text-[#00477b] mb-2 leading-tight relative z-10">{item.title}</h3>
                                            <p className="text-xs text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. ERPNext Retail Solutions */}
                <section className="pt-24 pb-12 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            SOLUTIONS
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            ERPNext Retail Solutions
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-12">
                            How ERPNext solves for Retail SMEs
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {[
                                        { icon: <Database />, title: "Unified Inventory", desc: "Real-time stock visibility across all stores and warehouses." },
                                        { icon: <Smartphone />, title: "Fast & Robust POS", desc: "Cloud-based POS that works offline and syncs automatically." },
                                        { icon: <Users />, title: "360° Customer View", desc: "Track purchase history, preferences, and loyalty programs." },
                                        { icon: <RefreshCw />, title: "Automated Replenishment", desc: "Smart reordering rules to prevent stockouts and overstock." },
                                        { icon: <BarChart3 />, title: "Financial Clarity", desc: "Integrated accounting for store-wise profitability and cash flow tracking." },
                                        { icon: <Globe />, title: "Omnichannel Operations", desc: "Manage physical stores, e-commerce, and marketplaces centrally." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                            <div className="size-16 rounded-full bg-[#00477b] text-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                                {React.cloneElement(item.icon, { className: "size-7" })}
                                            </div>
                                            <h3 className="text-base font-semibold text-[#00477b] mb-2 relative z-10">{item.title}</h3>
                                            <p className="text-sm text-zinc-700 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Key Modules */}
                <section className="pt-24 pb-12 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            MODULES
                        </span>
                        <h2 className="mb-12 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key Modules
                        </h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {[
                                        { icon: <ShoppingCart />, title: "Point of Sale (POS)", desc: "Fast checkout, offline mode, multi-payment methods, barcode integration, receipt printing." },
                                        { icon: <Box />, title: "Inventory Management", desc: "Serial/batch tracking, multi-warehouse, stock transfers, barcode generation." },
                                        { icon: <HeadphonesIcon />, title: "Customer Engagement & CRM", desc: "Loyalty programs, customer groups, marketing campaigns, feedback collection." },
                                        { icon: <Smartphone />, title: "Orders & Fulfillment", desc: "E-commerce integration (Shopify, WooCommerce), order tracking, returns & refunds management." },
                                        { icon: <Store />, title: "Multi-Store Management", desc: "Centralized pricing, promotions, and stock visibility across retail chains." },
                                        { icon: <CreditCard />, title: "Finance & Accounting", desc: "Automated store invoicing, tax compliance (GST), expense tracking, profit & loss analysis." }
                                    ].map((mod, i) => (
                                        <div key={i} className="bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                            <div className="size-16 rounded-full bg-[#00477b] text-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                                {React.cloneElement(mod.icon, { className: "size-7" })}
                                            </div>
                                            <h3 className="text-base font-semibold mb-3 text-[#00477b] relative z-10">{mod.title}</h3>
                                            <ul className="space-y-2 mt-auto text-left w-full relative z-10">
                                                <li className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed font-normal">
                                                    <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                        <div className="size-1 bg-[#00477b] rounded-full"></div>
                                                    </div>
                                                    <span>{mod.desc}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Implementation Process */}
                <section className="pt-24 pb-12 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            ROADMAP
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Implementation Process
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-12 uppercase tracking-widest">
                            Future-Ready Roadmap
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="relative max-w-[90rem] mx-auto">
                                {/* Continuous Horizontal Line for Desktop */}
                                <div className="hidden md:block absolute top-[2rem] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-transparent via-[#00477b]/30 to-transparent z-0"></div>

                                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative z-10">
                                    {[
                                        { title: "Retail Audit", desc: "Requirement analysis and gap identification.", icon: <Search /> },
                                        { title: "System Config", desc: "Setup pricing, taxes, stock locations, and POS.", icon: <Settings /> },
                                        { title: "Data Migration", desc: "Import item masters, barcodes, opening stock.", icon: <Database /> },
                                        { title: "Training & Pilot", desc: "Store staff training on POS, pilot launch.", icon: <Users /> },
                                        { title: "Go-Live & Support", desc: "Complete rollout and ongoing support.", icon: <Rocket /> }
                                    ].map((step, i) => (
                                        <div key={i} className="flex flex-col items-center group pt-2">
                                            {/* Icon Node */}
                                            <div className="size-16 mb-8 rounded-full bg-white backdrop-blur-md border-4 border-blue-50/80 shadow-md flex items-center justify-center relative z-10 text-[#00477b] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white group-hover:border-[#00477b]/20">
                                                {React.cloneElement(step.icon, { className: "size-6" })}
                                            </div>

                                            {/* Content Card */}
                                            <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] shadow-sm text-center w-full h-full flex flex-col items-center hover:bg-white/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                                <span className="inline-flex items-center justify-center bg-blue-100/50 text-[#00477b] font-extrabold text-[10px] px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
                                                    Phase 0{i + 1}
                                                </span>
                                                <h4 className="font-semibold text-[#00477b] text-base mb-3 leading-tight">{step.title}</h4>
                                                <p className="text-sm text-zinc-600 font-normal leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Retail Formats */}
                <section className="pt-24 pb-12 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            FORMATS
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Retail Formats
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-12">
                            Tailored for Various Retail Types
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {[
                                        { bold: "Apparel & Footwear", text: "Size/Color matrix, seasonal collections, discount pricing." },
                                        { bold: "Electronics & Appliances", text: "Serial number tracking, warranty management." },
                                        { bold: "Supermarkets & Grocery", text: "Fast checkout, barcode scanning, perishable goods tracking." },
                                        { bold: "Pharmacies / Healthcare", text: "Batch/expiry tracking, prescription management." },
                                        { bold: "Boutiques & Specialty Stores", text: "Customer profiles, loyalty programs, bespoke orders." },
                                        { bold: "Furniture & Home", text: "Showroom inventory, catalog pricing, delivery tracking." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                            <div className="size-16 rounded-full bg-[#00477b] text-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                                <CheckCircle className="size-7" />
                                            </div>
                                            <h3 className="font-semibold text-[#00477b] text-base mb-2 relative z-10">{item.bold}</h3>
                                            <p className="text-sm text-zinc-700 font-normal leading-relaxed relative z-10">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Benefits */}
                <section className="pt-24 pb-12 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            BENEFITS
                        </span>
                        <h2 className="mb-12 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Choose ERPNext?
                        </h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                                    {[
                                        {
                                            title: "Operational Efficiency",
                                            icon: <Settings />,
                                            points: ["20% faster checkouts", "30% time saved on admin", "15% reduction in errors"]
                                        },
                                        {
                                            title: "Customer Experience",
                                            icon: <Users />,
                                            points: ["360° customer view", "Personalized loyalty programs", "Omnichannel returns"]
                                        },
                                        {
                                            title: "Financial Control",
                                            icon: <BarChart3 />,
                                            points: ["Automated tax compliance", "Store-wise profitability", "Real-time cash flow visibility"]
                                        },
                                        {
                                            title: "Business Growth",
                                            icon: <ArrowUpRight />,
                                            points: ["Scalable multi-store setup", "Centralized operations", "Data-driven insights"]
                                        }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md border border-white/80 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col text-left relative overflow-hidden">
                                            {/* Subtle glare effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                                            <div className="flex items-center gap-5 mb-8 relative z-10">
                                                <div className="size-14 rounded-full bg-white backdrop-blur-md border border-zinc-100 shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-110 transition-transform duration-300">
                                                    {React.cloneElement(benefit.icon, { className: "size-6" })}
                                                </div>
                                                <h3 className="text-xl font-semibold text-[#00477b]">{benefit.title}</h3>
                                            </div>
                                            <ul className="space-y-4 mt-auto relative z-10">
                                                {benefit.points.map((point, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-3">
                                                        <div className="mt-0.5 shrink-0 text-[#00477b]/50">
                                                            <CheckCircle className="size-5" />
                                                        </div>
                                                        <span className="text-sm font-medium text-zinc-700 leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Why Choose Gnosys Digital */}
                <section className="pt-24 pb-12 relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-5">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Businesses Choose Gnosys Digital
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { title: "Deep Retail ERP Implementation Experience", icon: <Store className="size-6" /> },
                                    { title: "Focus on Usability and Quick Adoption", icon: <Rocket className="size-6" /> },
                                    { title: "End-to-End System Integration Capabilities", icon: <RefreshCw className="size-6" /> },
                                    { title: "Responsive Local Support and Maintenance", icon: <HeadphonesIcon className="size-6" /> }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        
                                        <div className="size-14 mb-5 rounded-full bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        
                                        <h3 className="text-[15px] font-bold text-[#00477b] leading-relaxed relative z-10">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Special Offer & Contact Form */}
                <section className="py-24 relative z-10 w-full bg-transparent">
                    <div className="container mx-auto px-4 lg:px-8 max-w-[90rem]">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
                            
                            {/* Left Column: Special Offer */}
                            <div className="lg:col-span-5 lg:sticky lg:top-24 mt-4">
                                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#00477b] mb-6">
                                    Retail Standard ERP Package
                                </h2>
                                
                                <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                                    
                                    <div className="text-center border-b border-zinc-200/60 pb-8 mb-8 relative z-10">
                                        <h3 className="text-[11px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">Package Starts At</h3>
                                        <div className="flex justify-center items-start gap-1 mb-4">
                                            <span className="text-2xl font-bold text-[#00477b] mt-2">₹</span>
                                            <p className="text-6xl font-black text-[#00477b] tracking-tighter">85,000</p>
                                        </div>
                                        <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 text-[#00477b] text-xs font-bold uppercase tracking-widest border border-blue-200/60 shadow-sm">
                                            Ideal for 1-5 store setups
                                        </span>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#00477b]/5 to-transparent rounded-2xl p-5 mb-8 border-l-4 border-[#00477b] relative z-10">
                                        <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                                            Includes core modules: <br/>
                                            <span className="text-[#00477b] font-bold text-base">Core POS, Inventory, Accounts</span>
                                        </p>
                                    </div>

                                    <div className="relative text-center mb-8 z-10">
                                        <span className="bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] shadow-sm border border-white">What's Included</span>
                                        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent -z-10"></div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                        <div className="bg-white/60 hover:bg-white transition-colors rounded-2xl p-4 border border-white shadow-sm flex items-start gap-3">
                                            <div className="bg-blue-50 rounded-full p-1 shrink-0 mt-0.5">
                                                <CheckCircle className="size-4 text-[#00477b]" />
                                            </div>
                                            <span className="text-xs font-semibold text-zinc-700 leading-snug">Unlimited SKUs & Transactions</span>
                                        </div>
                                        <div className="bg-white/60 hover:bg-white transition-colors rounded-2xl p-4 border border-white shadow-sm flex items-start gap-3">
                                            <div className="bg-blue-50 rounded-full p-1 shrink-0 mt-0.5">
                                                <CheckCircle className="size-4 text-[#00477b]" />
                                            </div>
                                            <span className="text-xs font-semibold text-zinc-700 leading-snug">No per-transaction fees</span>
                                        </div>
                                        <div className="bg-white/60 hover:bg-white transition-colors rounded-2xl p-4 border border-white shadow-sm flex items-start gap-3 sm:col-span-2">
                                            <div className="bg-blue-50 rounded-full p-1 shrink-0 mt-0.5">
                                                <CheckCircle className="size-4 text-[#00477b]" />
                                            </div>
                                            <span className="text-xs font-semibold text-zinc-700 leading-snug">Standard data import and POS hardware integration support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="lg:col-span-7 relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-white/40 to-white/10 blur-2xl rounded-[3rem] -z-10"></div>
                                <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                                    <div className="mb-10 text-left">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-white shadow-sm text-[10px] font-black text-[#00477b] uppercase tracking-widest mb-6">
                                            GET STARTED
                                        </span>
                                        <h2 className="mb-4 text-3xl md:text-4xl font-normal tracking-tight text-[#00477b]">
                                            Request Your Free Assessment
                                        </h2>
                                        <p className="text-zinc-500 text-sm font-medium">Let's review your operations and show you exactly how ERPNext can scale your retail business.</p>
                                    </div>

                                    <form className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                                            <div className="space-y-2.5">
                                                <Label htmlFor="fullName" className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="h-14 rounded-2xl bg-white/70 backdrop-blur-sm border-white shadow-inner text-zinc-800 text-sm font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all duration-300 px-5" />
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label htmlFor="email" className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="h-14 rounded-2xl bg-white/70 backdrop-blur-sm border-white shadow-inner text-zinc-800 text-sm font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all duration-300 px-5" />
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label htmlFor="phone" className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Phone Number</Label>
                                                <Input id="phone" placeholder="Enter your phone number" className="h-14 rounded-2xl bg-white/70 backdrop-blur-sm border-white shadow-inner text-zinc-800 text-sm font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all duration-300 px-5" />
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label htmlFor="storeName" className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Store / Business Name</Label>
                                                <Input id="storeName" placeholder="Enter your store name" className="h-14 rounded-2xl bg-white/70 backdrop-blur-sm border-white shadow-inner text-zinc-800 text-sm font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all duration-300 px-5" />
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label htmlFor="numStores" className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Number of Stores</Label>
                                                <select id="numStores" className="w-full h-14 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-inner px-5 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all duration-300 hover:bg-white cursor-pointer appearance-none">
                                                    <option>Select Option</option>
                                                    <option>1</option>
                                                    <option>2-5</option>
                                                    <option>6-10</option>
                                                    <option>11-50</option>
                                                    <option>50+</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2.5">
                                                <Label htmlFor="retailType" className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Retail Type</Label>
                                                <select id="retailType" className="w-full h-14 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-inner px-5 text-sm font-medium text-zinc-800 focus:outline-none focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all duration-300 hover:bg-white cursor-pointer appearance-none">
                                                    <option>Select</option>
                                                    <option>Apparel & Footwear</option>
                                                    <option>Electronics</option>
                                                    <option>Grocery & Supermarket</option>
                                                    <option>Pharmacy</option>
                                                    <option>Furniture / Home Decor</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest block mb-4 ml-1">Key Operational Challenges</Label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <label className="flex items-center gap-4 p-4 rounded-2xl border border-white hover:border-[#00477b]/30 hover:shadow-md cursor-pointer transition-all bg-white/80 backdrop-blur-sm shadow-sm group">
                                                    <div className="relative flex items-center justify-center size-5 rounded border border-zinc-300 bg-white group-hover:border-[#00477b]/50 transition-colors shrink-0">
                                                        <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                                                        <svg className="hidden peer-checked:block size-3.5 text-[#00477b] pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    <span className="text-sm font-semibold text-zinc-600 group-hover:text-[#00477b] transition-colors">Inventory Discrepancies</span>
                                                </label>
                                                <label className="flex items-center gap-4 p-4 rounded-2xl border border-white hover:border-[#00477b]/30 hover:shadow-md cursor-pointer transition-all bg-white/80 backdrop-blur-sm shadow-sm group">
                                                    <div className="relative flex items-center justify-center size-5 rounded border border-zinc-300 bg-white group-hover:border-[#00477b]/50 transition-colors shrink-0">
                                                        <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                                                        <svg className="hidden peer-checked:block size-3.5 text-[#00477b] pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    <span className="text-sm font-semibold text-zinc-600 group-hover:text-[#00477b] transition-colors">Multi-store Sync Issues</span>
                                                </label>
                                                <label className="flex items-center gap-4 p-4 rounded-2xl border border-white hover:border-[#00477b]/30 hover:shadow-md cursor-pointer transition-all bg-white/80 backdrop-blur-sm shadow-sm group">
                                                    <div className="relative flex items-center justify-center size-5 rounded border border-zinc-300 bg-white group-hover:border-[#00477b]/50 transition-colors shrink-0">
                                                        <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                                                        <svg className="hidden peer-checked:block size-3.5 text-[#00477b] pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    <span className="text-sm font-semibold text-zinc-600 group-hover:text-[#00477b] transition-colors">Poor Billing Speed (POS)</span>
                                                </label>
                                                <label className="flex items-center gap-4 p-4 rounded-2xl border border-white hover:border-[#00477b]/30 hover:shadow-md cursor-pointer transition-all bg-white/80 backdrop-blur-sm shadow-sm group">
                                                    <div className="relative flex items-center justify-center size-5 rounded border border-zinc-300 bg-white group-hover:border-[#00477b]/50 transition-colors shrink-0">
                                                        <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                                                        <svg className="hidden peer-checked:block size-3.5 text-[#00477b] pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    <span className="text-sm font-semibold text-zinc-600 group-hover:text-[#00477b] transition-colors">E-commerce Integration</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <Button className="bg-gradient-to-r from-[#00477b] to-[#00335e] text-white hover:from-[#00335e] hover:to-[#001f3f] h-16 px-10 text-[15px] font-bold shadow-xl shadow-[#00477b]/20 hover:shadow-[#00477b]/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full group">
                                                Submit Assessment Request
                                                <ArrowUpRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> {/* End Main Content Wrapper */}

        </MainLayout>
    );
}
