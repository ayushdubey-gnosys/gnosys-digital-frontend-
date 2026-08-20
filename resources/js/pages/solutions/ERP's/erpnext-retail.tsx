import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    CheckCircle, BarChart3, Store, Globe, ArrowUpRight,
    Smartphone, Database, Settings, RefreshCw, ShoppingCart,
    CreditCard, Users, Box, HeadphonesIcon, Search, Rocket, CheckSquare
} from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
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

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-treading.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                RETAIL ERP SOLUTION
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
                                A single platform to manage inventory, sales, customers, and finance for retail businesses.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={380}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Request Free Assessment <ArrowUpRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
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
                            Common Problems in Retail Operations
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                                    {[
                                        { icon: <RefreshCw />, title: "Disconnected Channels", desc: "POS, online store, and marketplaces function separately without integration." },
                                        { icon: <Box />, title: "Stock Surprises", desc: "Inventory between the store and warehouse is often unclear and inconsistent." },
                                        { icon: <Settings />, title: "Slow Checkout & Errors", desc: "Manual discounts, delayed billing, and offline glitches slow the process." },
                                        { icon: <Users />, title: "Job Work & Contract Manufacturing", desc: "Purchase patterns and customer loyalty are not visible in a single view." },
                                        { icon: <Store />, title: "Month-End Pain", desc: "Reconciliation is time-consuming, taking hours or even days." }
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
                            How ERPNext Transforms Your Retail Business
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {[
                                        { icon: <Database />, title: "Unified Inventory", desc: "Real-time stock visibility across all stores and warehouses" },
                                        { icon: <Smartphone />, title: "Fast POS & Offline Capability", desc: "Smooth checkout and automatic stock updates." },
                                        { icon: <Users />, title: "Customer 360° View", desc: "Track preferences, purchases, and loyalty programs." },
                                        { icon: <RefreshCw />, title: "Automated Restocking", desc: "Smart reorder suggestions based on sales trends." },
                                        { icon: <BarChart3 />, title: "Financial Clarity", desc: "GST-ready invoicing, automated reconciliation, dashboards." },
                                        { icon: <Globe />, title: "Omnichannel Operations", desc: "Connect physical stores, online channels, and marketplaces." }
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
                                        { icon: <ShoppingCart />, title: "Point of Sale (POS)", desc: "Quick barcode/product search, multiple payment options, returns/exchanges, offline functionality." },
                                        { icon: <Box />, title: "Inventory Management", desc: "Multi-location stock tracking, batch/serial tracking, automated reorders, stock audits." },
                                        { icon: <HeadphonesIcon />, title: "Customer Engagement & CRM", desc: "Loyalty programs, customer history, targeted promotions, feedback tracking." },
                                        { icon: <Smartphone />, title: "Orders & Fulfillment", desc: "Unified order management across channels, Click & Collect, home delivery tracking, payment gateway integration." },
                                        { icon: <Store />, title: "Staff & Store Management", desc: "Shift scheduling, performance monitoring, attendance, role-based access, task checklists." },
                                        { icon: <CreditCard />, title: "Finance & Reporting", desc: "Sales, expense tracking, P&L, GST-compliant invoices, automated bank reconciliation, dashboards." }
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
                        <h3 className="text-base font-bold text-[#00477b] tracking-wider uppercase mb-1">
                            Future-Ready Roadmap
                        </h3>
                        <p className="text-zinc-600 text-sm font-normal mb-12">
                            Plan for continuous digital growth and improvement
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="relative max-w-[90rem] mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 relative z-10">
                                    {[
                                        { week: "Week 1", title: "Retail Operations Analysis", desc: "Analyze retail operations and workflows.", icon: <Search /> },
                                        { week: "Weeks 2–3", title: "System Customization", desc: "Customize stores, POS, and dashboards.", icon: <Settings /> },
                                        { week: "Weeks 4–5", title: "Data Migration & Integration", desc: "Migrate data and connect integrations.", icon: <Database /> },
                                        { week: "Weeks 5–6", title: "Training", desc: "Train teams across all retail functions.", icon: <Users /> },
                                        { week: "Weeks 7–8", title: "Go-Live & Support", desc: "Launch system and support improvement.", icon: <Rocket /> }
                                    ].map((step, i) => (
                                        <div key={i} className="flex flex-col items-center group pt-2">
                                            {/* Icon Node */}
                                            <div className="size-16 mb-8 rounded-full bg-white backdrop-blur-md border-4 border-blue-50/80 shadow-md flex items-center justify-center relative z-10 text-[#00477b] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white group-hover:border-[#00477b]/20">
                                                {React.cloneElement(step.icon, { className: "size-6" })}
                                            </div>

                                            {/* Content Card */}
                                            <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] shadow-sm text-center w-full h-full flex flex-col items-center hover:bg-white/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                                <span className="inline-flex items-center justify-center bg-blue-100/50 text-[#00477b] font-extrabold text-[10px] px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
                                                    {step.week}
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
                            Tailored ERP for Various Retail Types
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="container mx-auto max-w-[90rem]">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {[
                                        { bold: "Apparel & Fashion", text: "Size/color matrix, seasonal collection management." },
                                        { bold: "Electronics & Appliances", text: "Serial/warranty tracking, demo stock." },
                                        { bold: "Department Stores", text: "Multi-department and concessionaire management." },
                                        { bold: "Pharmacy", text: "Batch/expiry tracking, prescription management." },
                                        { bold: "Grocery & Supermarkets", text: "Perishables, weight-based items, rapid checkout." },
                                        { bold: "Specialty Stores", text: "Custom attributes, gift wrapping, and delivery options." }
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
                <section className="py-24 bg-transparent text-center relative z-10 border-t border-white/40">
                    <div className="w-full px-4 mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            BENEFITS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Measurable Retail Business Benefits
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium max-w-2xl mx-auto">
                            Data-backed improvements across efficiency, customer loyalty, and financial control.
                        </p>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                                {[
                                    {
                                        title: "Operational Efficiency",
                                        icon: <Settings className="size-6 text-[#00477b]" />,
                                        points: ["70% faster checkout", "60% fewer stockouts", "80% faster reconciliation"]
                                    },
                                    {
                                        title: "Customer Experience",
                                        icon: <Users className="size-6 text-[#00477b]" />,
                                        points: ["360° customer view", "personalized loyalty programs", "omnichannel service"]
                                    },
                                    {
                                        title: "Financial Control",
                                        icon: <BarChart3 className="size-6 text-[#00477b]" />,
                                        points: ["Automated GST compliance", "audit-ready records", "real-time cash flow visibility"]
                                    },
                                    {
                                        title: "Business Growth",
                                        icon: <ArrowUpRight className="size-6 text-[#00477b]" />,
                                        points: ["Data-driven decisions", "scalable operations", "improved margins"]
                                    }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 text-left hover:-translate-y-2 flex flex-col group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>

                                        <div className="p-3 bg-blue-50/50 rounded-2xl mb-6 border border-blue-100/50 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300 self-start">
                                            {benefit.icon}
                                        </div>

                                        <h3 className="text-xl font-bold text-[#00477b] mb-6 tracking-tight group-hover:text-blue-600 transition-colors">{benefit.title}</h3>

                                        <ul className="space-y-3.5 mt-auto relative z-10">
                                            {benefit.points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex items-center gap-3 bg-blue-50/40 p-2.5 px-3.5 rounded-xl border border-blue-100/40 group-hover:bg-white transition-colors shadow-xs">
                                                    <CheckCircle className="size-4 text-[#00477b] shrink-0" />
                                                    <span className="text-xs font-semibold text-zinc-700 leading-snug">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Why Choose Gnosys Digital */}
                <section className="py-24 bg-transparent text-center relative z-10 border-t border-white/40">
                    <div className="w-full px-4 mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Why Choose Gnosys Digital
                        </h2>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                                {[
                                    "Retail-focused ERP implementations for Indian SMEs.",
                                    "Transparent pricing with predictable ROI.",
                                    "End-to-end support, including training, updates, and account management.",
                                    "Experience across multiple retail formats and channels."
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center group min-h-[160px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="bg-blue-50/50 p-3 rounded-2xl mb-4 border border-blue-100/50 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            <CheckCircle className="size-5 text-[#00477b]" />
                                        </div>
                                        <p className="text-sm font-bold text-[#00477b] leading-relaxed relative z-10">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Special Offer & Assessment Form (Wrapped in Single Parent Grid) */}
                <section className="py-24 relative z-10 w-full">
                    <div className="w-full px-4 lg:px-6 2xl:px-8 max-w-[1600px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                            {/* Left Column: Special Offer */}
                            <div className="lg:col-span-5 text-center lg:text-left flex flex-col">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 self-center lg:self-start">
                                    SPECIAL PRICING
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-8">
                                    Special Offer
                                </h2>

                                <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col justify-center h-full">
                                    {/* Price Header */}
                                    <div className="text-center pb-8 mb-8 border-b border-zinc-200/60">
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2">Starts At</h3>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-3xl font-bold text-[#00477b]">₹</span>
                                            <span className="text-6xl font-black text-[#00477b] tracking-tight">85,000</span>
                                        </div>
                                    </div>

                                    {/* Offer Content */}
                                    <div className="text-left space-y-4">
                                        <h4 className="text-base font-bold text-zinc-900">Limited-Time Retail ERP Package</h4>
                                        <p className="text-sm font-bold text-[#00477b]">Bonus for early bookings:</p>

                                        <ul className="space-y-3 text-sm text-zinc-600 font-medium">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-[#00477b] font-bold text-lg leading-none mt-0.5">•</span>
                                                <span className="leading-relaxed">Free e-commerce integration, 3 months extended support, custom dashboard.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-[#00477b] font-bold text-lg leading-none mt-0.5">•</span>
                                                <span className="leading-relaxed">Unified POS for up to 3 stores, inventory management, loyalty program, GST compliance, training, and support.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Assessment Form */}
                            <div className="lg:col-span-7 flex flex-col">
                                <div className="bg-gradient-to-bl from-white/70 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 h-full">
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
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white/70 p-4 rounded-2xl border border-white shadow-sm">
                                                {[
                                                    "Inventory Discrepancies",
                                                    "Multi-store Sync Issues",
                                                    "Poor Billing Speed (POS)",
                                                    "E-commerce Integration"
                                                ].map((challenge, idx) => {
                                                    const isChecked = selectedChallenges.includes(challenge);
                                                    return (
                                                        <div
                                                            key={idx}
                                                            onClick={() => toggleChallenge(challenge)}
                                                            className="flex items-start gap-2.5 text-xs font-medium text-zinc-700 cursor-pointer hover:text-[#00477b] transition-colors p-1.5 rounded-lg hover:bg-white/80 select-none"
                                                        >
                                                            <div className={`mt-0.5 size-4 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${isChecked ? 'bg-[#00477b] border-[#00477b] text-white shadow-xs' : 'bg-white border-zinc-400 hover:border-[#00477b]'}`}>
                                                                {isChecked && (
                                                                    <svg className="size-3 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <span className="leading-snug font-semibold">{challenge}</span>
                                                        </div>
                                                    );
                                                })}
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
