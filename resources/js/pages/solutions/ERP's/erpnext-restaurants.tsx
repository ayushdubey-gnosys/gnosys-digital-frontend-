import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Clock, Flame, Trash2, Wallet, AlertTriangle, EyeOff,
    CheckSquare, Utensils, Zap, Coffee, Cloud, Store,
    CheckCircle2, Check, ClipboardList, ChefHat, PackageSearch,
    Calculator, LineChart, Users, ArrowRight, ShieldCheck, Sparkles
} from 'lucide-react';
import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextRestaurants() {
    return (
        <MainLayout>
            <Head title="ERPNext For Restaurants - Modern Food & Beverage Operations" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-28 pb-36 lg:pt-40 lg:pb-48 flex items-center justify-center text-center min-h-[92vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                        style={{ backgroundImage: "url('/assets/erp-resturant.webp')" }}
                    ></div>
                    {/* Dark gradient overlay to make text clearly readable */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
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

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-md backdrop-blur-xs">
                            UNIFIED RESTAURANT & HOSPITALITY MANAGEMENT
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6 leading-tight drop-shadow-xl">
                            One Platform to Manage Orders, <br />
                            <span className="text-blue-200 font-light">Inventory & Accounts</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <p className="text-base sm:text-xl text-blue-50/95 leading-relaxed font-normal mb-12 max-w-3xl mx-auto drop-shadow-lg">
                            Stop juggling between disconnected POS devices, messy Excel sheets, and delayed accounting. Streamline dine-in, QSR, cloud kitchens, and multi-outlet chains with India's leading open-source ERP.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#00335e] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                <Link href="/free-digital-consultation" className="relative z-10 flex items-center justify-center gap-2">
                                    Book Your Free ERP Consult <ArrowRight className="size-5" />
                                </Link>
                            </Button>
                            
                            <Button asChild className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                <Link href="/contact">
                                    Explore Menu & Modules
                                </Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Bottlenecks Grid */}
                <section className="pt-10 sm:pt-12 bg-transparent text-center border-t border-white/40 w-full overflow-hidden">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Common Restaurant Bottlenecks
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] leading-tight">
                                Running a Restaurant is Hard. Running It on Disconnected Systems is Costly.
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: Clock, title: "Long Wait Times", desc: "Losing customers during peak lunch/dinner hours due to slow order entry and service lags." },
                                    { icon: Flame, title: "Kitchen Chaos", desc: "Missing orders, late tickets, and lack of clear communication from server apps to the kitchen." },
                                    { icon: Trash2, title: "Food Wastage", desc: "Over-ordering ingredients without live inventory consumption tracking, eating away your margins." },
                                    { icon: Wallet, title: "Manual Accounting", desc: "Reconciling UPI, cash, card, and aggregator payments takes hours of manual admin work every night." },
                                    { icon: AlertTriangle, title: "Invisible Costs", desc: "You don't know the exact profit margin of your signature dish because recipe raw materials aren't tracked." },
                                    { icon: EyeOff, title: "Multi-Outlet Blindness", desc: "No real-time visibility into which branch is actually performing or where ingredient pilferage occurs." }
                                ].map((pain, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 mb-6 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center relative z-10">
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

                {/* 3. The ERPNext Solution Table */}
                <section className="pt-10 sm:pt-12 bg-transparent w-full overflow-hidden border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Our Solution
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                How Gnosys Digital Fixes This
                            </h2>
                            <p className="text-zinc-600 text-sm font-normal mt-2">
                                Our modular approach builds an interconnected digital nervous system for your entire restaurant operations.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: ClipboardList, area: "Ordering & POS", desc: "Intuitive POS, table & floor layout management, QR order scanning, and instant multi-printer KOT printing." },
                                    { icon: ChefHat, area: "Kitchen Display (KDS)", desc: "Digital KDS routing tickets instantly to kitchen preparation stations with zero lost chits or miscommunication." },
                                    { icon: PackageSearch, area: "Recipe & Inventory", desc: "Real-time ingredient tracking with automated stock deductions whenever dishes are prepared and billed." },
                                    { icon: Calculator, area: "Finance & Accounts", desc: "GST-compliant billing, automated aggregator reconciliations, and daily cash drawer closing in minutes." },
                                    { icon: LineChart, area: "Reports & Analytics", desc: "Live dashboards tracking gross sales, best-selling menu items, peak hours, and outlet-wise profitability." },
                                    { icon: Users, area: "Customers & Loyalty", desc: "Built-in loyalty points, SMS promotions, and centralized customer directories to maximize repeat footfall." }
                                ].map((row, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div 
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 mb-6 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center relative z-10">
                                                <row.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                {row.area}
                                            </h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">
                                                {row.desc}
                                            </p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Why We Beat Standard POS */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 w-full overflow-hidden">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-6">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                        Why Us
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                        Why Gnosys Beats Standard POS Systems
                                    </h2>
                                    <p className="text-zinc-600 mb-6 font-normal text-sm sm:text-base leading-relaxed">
                                        Don't settle for a basic counter register. Get an interconnected enterprise running system designed for profitability and multi-outlet expansion.
                                    </p>

                                    <div className="space-y-4">
                                        {[
                                            { title: "Recipe Costing (BOM)", desc: "Exact ingredient cost history and gross margin alerts per dish sold." },
                                            { title: "Multi-Outlet Master HQ", desc: "Map inventory transfers, central kitchen batching, and P&L across all branches on one screen." },
                                            { title: "Cloud or On-Premise", desc: "Deploy on cloud or local server. Total data ownership with zero third-party vendor lock-in." }
                                        ].map((item, i) => (
                                            <div key={i} className="group relative flex gap-4 items-start bg-white/40 backdrop-blur-xl border border-white/70 p-5 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                                <div className="size-11 rounded-xl bg-white text-[#00477b] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/5 border border-white relative z-10">
                                                    <Check className="size-5 text-[#00477b]" />
                                                </div>
                                                <div className="relative z-10">
                                                    <h3 className="font-normal text-base text-[#00477b] mb-1">{item.title}</h3>
                                                    <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                                
                                <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 relative group mt-6 lg:mt-0">
                                    <div className="relative shadow-2xl rounded-[2.25rem] overflow-hidden border border-white/80 bg-transparent">
                                        <div 
                                            className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] bg-cover bg-no-repeat bg-center rounded-[2.25rem] shadow-inner relative transition-transform duration-700 group-hover:scale-105" 
                                            style={{ backgroundImage: "url('/assets/resturdant-erp.webp')" }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/5 to-white/10 pointer-events-none rounded-[2.25rem]"></div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Tailored for Every Restaurant Type */}
                <section className="pt-10 sm:pt-12 bg-transparent text-center border-t border-white/40 w-full overflow-hidden">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Who We Serve
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Tailored for Every Restaurant Type
                            </h2>
                            <p className="text-zinc-600 text-sm font-normal mt-2">
                                No matter the size or format, Gnosys Digital scales to your unique kitchen and service workflow.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6">
                                {[
                                    { icon: Utensils, title: "Fine Dining", desc: "Table reservations, steward ordering apps, split billing, and complex multi-course KOT workflows." },
                                    { icon: Zap, title: "Quick Service (QSR)", desc: "Speed ordering, digital tokens, dual-screen POS, and express kitchen prep queues for peak hours." },
                                    { icon: Coffee, title: "Cafes & Bakeries", desc: "Fast counter billing, combo packaging, batch expiry tracking, and customer loyalty promotions." }
                                ].map((type, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center mb-6 relative z-10">
                                                <type.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{type.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{type.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                                {[
                                    { icon: Cloud, title: "Cloud Kitchens", desc: "Direct integration with online delivery aggregators (Zomato / Swiggy) and central recipe batching." },
                                    { icon: Store, title: "Food Courts & Franchises", desc: "Standardize menus, seasonal pricing, and corporate royalties across all franchises from one HQ." }
                                ].map((type, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center mb-6 relative z-10">
                                                <type.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{type.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{type.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6 & 7. Expertise and FAQ Combined Section */}
                <section className="pt-10 sm:pt-12 bg-transparent w-full overflow-hidden border-t border-white/40">
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1450px]">
                        {/* Headings Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-7 sm:mb-8">
                            <ScrollReveal animation="fade-right" delay={80} className="lg:col-span-5">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Expertise
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Why Gnosys Digital?
                                </h2>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-left" delay={120} className="lg:col-span-7">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    FAQs
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-zinc-600 font-normal text-sm sm:text-base">
                                    Everything you need to know about implementing ERPNext for your restaurant.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[1450px]">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                                {/* Left Side: Expertise Cards */}
                                <div className="lg:col-span-5 flex flex-col gap-4">
                                    {[
                                        "Certified ERPNext Partner with specialized experience in food service and hospitality workflows.",
                                        "End-to-end implementation: POS hardware setup, recipe BOM data migration, and full staff training.",
                                        "Dedicated AMC and 24/7 technical support for peak operating hours and software updates."
                                    ].map((text, idx) => (
                                        <ScrollReveal key={idx} animation="fade-right" delay={80 * (idx + 1)}>
                                            <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 overflow-hidden">
                                                <div className="size-12 rounded-xl bg-white text-[#00477b] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/5 border border-white relative z-10">
                                                    <CheckSquare className="size-5 text-[#00477b]" />
                                                </div>
                                                <span className="text-zinc-700 text-sm font-normal leading-relaxed relative z-10">{text}</span>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>

                                {/* Right Side: FAQ */}
                                <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                    <FaqAccordion
                                        items={[
                                            { q: "Can ERPNext handle Dine-in, Takeaway, and Delivery?", a: "Yes. The POS supports all three order types with separate tax, service, and packing charge settings. You can track source-wise sales for Zomato, Swiggy, and direct walk-ins." },
                                            { q: "Does it work offline during network drops?", a: "Yes. The system caches transactions locally on your POS machine and syncs automatically with the cloud database as soon as internet connection is restored. Your billing never stops." },
                                            { q: "How do you manage recipe food costing?", a: "You create a Bill of Materials (BOM) for each menu dish. When a customer orders, raw ingredients are deducted from your kitchen store in real-time, giving you accurate profit margins per dish." },
                                            { q: "Can I manage multiple outlets and central kitchens?", a: "Absolutely. You can view consolidated P&L and sales reports from one HQ login while individual branch managers access only their store-specific billing and stock requisitions." }
                                        ]}
                                        containerClassName="border border-white/80 rounded-[2rem] shadow-xl bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl overflow-hidden p-3"
                                        itemClassName="border-b border-white/40 last:border-0 bg-white/40 rounded-2xl mb-2 last:mb-0 px-5 hover:bg-white/80 transition-colors"
                                        buttonClassName="text-[#00477b] text-base hover:bg-transparent font-normal py-4"
                                        iconColorClass="text-[#00477b]"
                                        answerClassName="text-zinc-600 bg-transparent pt-2 pb-5 font-normal text-sm leading-relaxed"
                                    />
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Final CTA & Form */}
                <section className="pt-10 sm:pt-12 bg-transparent w-full overflow-hidden border-t border-white/40">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[1450px]">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                                <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                        Next Steps
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                                        Ready to Modernize Your Restaurant?
                                    </h2>
                                    <p className="text-zinc-600 font-normal mb-6 text-sm sm:text-base leading-relaxed">
                                        Skip the guesswork. Get a tailored restaurant ERP implementation roadmap and see how Gnosys Digital transforms your hospitality operations.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 overflow-hidden">
                                            <div className="size-11 rounded-xl bg-white text-[#00477b] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/5 border border-white relative z-10">
                                                <CheckSquare className="size-5 text-[#00477b]" />
                                            </div>
                                            <div className="relative z-10">
                                                <h3 className="font-normal text-base mb-1 text-[#00477b]">Free Operations Assessment:</h3>
                                                <p className="text-xs sm:text-sm font-normal text-zinc-600">We analyze your current POS and inventory workflows to calculate ROI.</p>
                                            </div>
                                        </div>
                                        <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 overflow-hidden">
                                            <div className="size-11 rounded-xl bg-white text-[#00477b] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/5 border border-white relative z-10">
                                                <CheckSquare className="size-5 text-[#00477b]" />
                                            </div>
                                            <div className="relative z-10">
                                                <h3 className="font-normal text-base mb-1 text-[#00477b]">Personalized Live Demo:</h3>
                                                <p className="text-xs sm:text-sm font-normal text-zinc-600">See live POS, KDS, and multi-outlet reporting configured for your menu.</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                    <form className="space-y-4 bg-white/40 backdrop-blur-xl p-6 sm:p-8 lg:p-10 border border-white/70 rounded-[2rem] shadow-xl transition-all duration-400">
                                        <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-2">
                                            Request Your Free Consultation
                                        </h3>
                                        <p className="text-zinc-600 text-sm font-normal mb-5">
                                            Fill in the details below and our restaurant solutions architect will get in touch with you.
                                        </p>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="fullName" className="text-xs text-[#00477b] uppercase tracking-wider font-medium">Full Name</Label>
                                            <Input id="fullName" placeholder="Jane Doe" className="rounded-xl border-white/80 bg-white/60 text-[#00477b] placeholder:text-zinc-400 h-11 focus:bg-white focus:border-[#00477b] shadow-sm font-medium" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs text-[#00477b] uppercase tracking-wider font-medium">Email Address</Label>
                                            <Input id="email" type="email" placeholder="jane@restaurant.com" className="rounded-xl border-white/80 bg-white/60 text-[#00477b] placeholder:text-zinc-400 h-11 focus:bg-white focus:border-[#00477b] shadow-sm font-medium" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="restaurantName" className="text-xs text-[#00477b] uppercase tracking-wider font-medium">Restaurant Name</Label>
                                            <Input id="restaurantName" placeholder="e.g. The Grand Bistro" className="rounded-xl border-white/80 bg-white/60 text-[#00477b] placeholder:text-zinc-400 h-11 focus:bg-white focus:border-[#00477b] shadow-sm font-medium" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="phone" className="text-xs text-[#00477b] uppercase tracking-wider font-medium">Phone Number</Label>
                                            <Input id="phone" placeholder="+91 98765 43210" className="rounded-xl border-white/80 bg-white/60 text-[#00477b] placeholder:text-zinc-400 h-11 focus:bg-white focus:border-[#00477b] shadow-sm font-medium" />
                                        </div>
                                        <div className="pt-2">
                                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 font-bold w-full shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 transition-all text-base">
                                                Book My Free Assessment &rarr;
                                            </Button>
                                        </div>
                                    </form>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

