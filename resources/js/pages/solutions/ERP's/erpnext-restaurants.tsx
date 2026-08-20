import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Clock, Flame, Trash2, Wallet, AlertTriangle, EyeOff,
    CheckSquare, Utensils, Zap, Coffee, Cloud, Store,
    CheckCircle2, Check, ClipboardList, ChefHat, PackageSearch,
    Calculator, LineChart, Users
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import FaqAccordion from '@/components/FaqAccordion';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextRestaurants() {

    return (
        <MainLayout>
            <Head title="ERPNext For Restaurants" />

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-32 lg:pt-48 lg:pb-48 flex items-center justify-center text-center min-h-[95vh]">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                        style={{ backgroundImage: "url('/assets/erp-resturant.webp')" }}
                    ></div>
                    {/* Very subtle gradient overlay to make the image pop while keeping text readable */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/10 to-zinc-950/40"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-xl">
                            ERPNext for Restaurants: One Platform to Manage Orders, Inventory & Accounts
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <p className="text-lg sm:text-2xl text-zinc-100 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-lg">
                            Stop juggling between a POS, Excel sheets, and your accountant. Streamline dine-in, QSR, cloud kitchen, and multi-outlet chains with India's leading open-source ERP.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-extrabold transition-all duration-300 w-full sm:w-auto">
                                <span className="relative z-10 flex items-center justify-center gap-2">Book Your Free ERP Consult Assessment <span className="text-xl">&rarr;</span></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                            
                            <Button className="group relative overflow-hidden bg-white hover:bg-blue-50 text-[#00477b] border border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                <span className="relative z-10 flex items-center justify-center gap-2">Download brochure here <span className="text-xl">&rarr;</span></span>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Bottlenecks Grid */}
            <section className="py-24 bg-transparent text-center border-t border-white/40 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                        Stop Losing Money to These 6 Restaurant Bottlenecks
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Clock, title: "Long Wait Times", desc: "Losing customers during peak hours due to inefficient order processing and service lag." },
                                { icon: Flame, title: "Kitchen Chaos", desc: "Missing orders, late tickets, and lack of clear communication to staff from the server app." },
                                { icon: Trash2, title: "Food Wastage", desc: "Over-ordering ingredients without inventory usage tracking, eating into your margins." },
                                { icon: Wallet, title: "Manual Accounting", desc: "Reconciling UPI, cash, and card payments takes hours of manual admin time every night." },
                                { icon: AlertTriangle, title: "Invisible Costs", desc: "You don't know the exact profit margin of your signature dish because recipe costs aren't tracked." },
                                { icon: EyeOff, title: "Multi-Outlet Blindness", desc: "No real-time visibility into which branch is actually performing or where inventory is leaking." }
                            ].map((pain, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-3xl p-8 flex flex-col items-center hover:bg-white/30 hover:-translate-y-1 hover:shadow-md transition-all text-center group">
                                    <div className="mb-5 bg-white shadow-sm p-4 rounded-2xl group-hover:scale-110 border border-gray-100 transition-transform">
                                        <pain.icon className="size-8 text-[#00477b]" />
                                    </div>
                                    <h3 className="font-extrabold text-[17px] text-[#00477b] mb-3">{pain.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-medium">{pain.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The ERPNext Solution Table */}
            <section className="py-24 bg-transparent w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl mb-8">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SOLUTION
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            How Gnosys Digital Fixes This
                        </h2>
                        <p className="text-zinc-600 font-medium">
                            Our module approach builds an interconnected digital nervous system for your restaurant.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-4 sm:px-6 lg:px-10 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto max-w-[1450px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: ClipboardList, area: "Ordering", desc: "Intuitive POS, table & floor management, QR order scanning, and instant KOT printing." },
                                { icon: ChefHat, area: "Kitchen", desc: "Digital KDS (Kitchen Display System) routing orders instantly to the kitchen with zero lost chits." },
                                { icon: PackageSearch, area: "Inventory", desc: "Real-time ingredient tracking with automated stock deduction whenever dishes are ordered." },
                                { icon: Calculator, area: "Finance", desc: "GST-compliant billing, automated reconciliation, and daily cash closing in minutes." },
                                { icon: LineChart, area: "Reporting", desc: "Live dashboards tracking gross sales, best-selling dishes, and outlet-wise profitability." },
                                { icon: Users, area: "Customers", desc: "Built-in loyalty programs and centralized customer directory to maximize repeat visits." }
                            ].map((row, i) => (
                                <div 
                                    key={i} 
                                    className="relative bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 hover:border-[#00477b]/20 p-7 sm:p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between w-full mb-5">
                                            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#00477b]/10 to-[#00477b]/5 border border-[#00477b]/15 text-[#00477b] flex items-center justify-center group-hover:bg-[#00477b] group-hover:text-white group-hover:border-[#00477b] transition-all duration-300 shadow-2xs">
                                                <row.icon className="size-6" />
                                            </div>
                                            <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#00477b]/10 text-[#00477b] group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                0{i + 1}
                                            </span>
                                        </div>
                                        <div className="w-8 h-1 rounded-full bg-[#00477b]/20 group-hover:w-full group-hover:bg-[#00477b] transition-all duration-500 mb-3" />
                                        <h3 className="text-xl font-bold text-[#00477b] mb-2.5 tracking-tight group-hover:text-[#002f52]">
                                            {row.area}
                                        </h3>
                                        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                                            {row.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why We Beat Standard POS */}
            <section className="py-24 bg-transparent border-t border-white/40 w-full overflow-hidden">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 px-6 lg:pl-16 xl:pl-32 lg:pr-0">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                WHY US
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                                Why Gnosys Beats Standard POS Systems
                            </h2>
                            <p className="text-zinc-600 mb-10 font-medium text-lg">
                                Don't settle for a basic cash register. Get a full-fledged, post-modern running system designed for growth.
                            </p>

                            <div className="space-y-5">
                                {[
                                    { title: "Recipe Costing (BOM)", desc: "Exact item cost history (how long, below margin, or COGS below threshold)." },
                                    { title: "Multi-Outlet HQ", desc: "Map inventory and P&L for all branches on one single master screen." },
                                    { title: "Cloud or On-Premise", desc: "We deploy it how you need. Total data ownership, no vendor lock-in." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/60 p-6 rounded-[2rem] shadow-sm hover:shadow-lg hover:from-white/80 hover:to-white/50 transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="bg-[#00477b] text-white p-3.5 rounded-2xl shrink-0 shadow-lg shadow-[#00477b]/20 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                            <Check className="size-6 stroke-[3]" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-[17px] text-[#00477b] mb-1.5">{item.title}</h3>
                                            <p className="text-zinc-600 text-[15px] font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative group mt-12 lg:mt-0 pr-0">
                            {/* Decorative Glow Blob behind the image container */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-[#00477b]/30 rounded-l-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 right-0"></div>

                            <div className="relative shadow-2xl rounded-l-3xl overflow-hidden border border-r-0 border-white/60 bg-transparent">
                                <div className="aspect-[16/10] sm:aspect-[16/9] bg-cover bg-no-repeat bg-center rounded-l-3xl rounded-r-none shadow-inner relative" style={{ backgroundImage: "url('/assets/resturdant-erp.webp')" }}>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/5 to-white/10 pointer-events-none rounded-l-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Tailored for Every Restaurant Type */}
            <section className="py-24 bg-transparent text-center border-t border-white/40 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHO WE SERVE
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                        Tailored for Every Restaurant Type
                    </h2>
                    <p className="text-zinc-600 font-medium">
                        No matter the size or format, Gnosys Digital scales to your unique workflow.
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8 text-center">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            {[
                                { icon: Utensils, title: "Fine Dining", desc: "Table reservations, bill renewals, and complex multi-course KOT workflows with ease." },
                                { icon: Zap, title: "QSR", desc: "Speed ordering and kitchen production during peak lunch hours and high-volume periods." },
                                { icon: Coffee, title: "Cafes", desc: "Manage high-volume low-ticket items with ultra-fast POS workflows and loyalty integrations." }
                            ].map((type, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-3xl p-8 hover:bg-white/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                                    <div className="bg-white border border-gray-100 shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <type.icon className="size-8 text-[#00477b]" />
                                    </div>
                                    <h3 className="font-extrabold text-[17px] text-[#00477b] mb-3">{type.title}</h3>
                                    <p className="text-sm text-zinc-600 font-medium">{type.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {[
                                { icon: Cloud, title: "Cloud Kitchens", desc: "Directly coordinate with delivery apps (Zomato/Swiggy) and manage optimized production lines." },
                                { icon: Store, title: "Food Courts & Franchises", desc: "Standardize menus, pricing, and reporting across all outlets from one central headquarters." }
                            ].map((type, i) => (
                                <div key={i} className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-3xl p-8 hover:bg-white/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                                    <div className="bg-white border border-gray-100 shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                        <type.icon className="size-8 text-[#00477b]" />
                                    </div>
                                    <h3 className="font-extrabold text-[17px] text-[#00477b] mb-3">{type.title}</h3>
                                    <p className="text-sm text-zinc-600 font-medium">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 & 7. Expertise and FAQ Combined Section */}
            <section className="py-24 bg-transparent w-full overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1450px]">
                    {/* Headings Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end mb-10">
                        <div className="lg:col-span-5">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                EXPERTISE
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Gnosys Digital? (Trust & Expertise)
                            </h2>
                        </div>
                        <div className="lg:col-span-7">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                FAQS
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-zinc-600 font-medium text-lg">
                                Everything you need to know about implementing ERPNext for your restaurant.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 shadow-lg shadow-blue-900/5">
                    <div className="container mx-auto px-4 sm:px-6 max-w-[1450px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                            {/* Left Side: Expertise Cards */}
                            <div className="lg:col-span-5">
                                <div className="flex flex-col gap-4 text-sm font-medium">
                                    <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-5 rounded-3xl border border-white/60 shadow-sm text-zinc-800 hover:bg-white hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-[#00477b] text-white p-3 rounded-xl shrink-0 shadow-md">
                                            <CheckSquare className="size-6" />
                                        </div>
                                        <span className="text-base leading-relaxed">Certified ERPNext Partner with 10+ years in the hospitality industry.</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-5 rounded-3xl border border-white/60 shadow-sm text-zinc-800 hover:bg-white hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-[#00477b] text-white p-3 rounded-xl shrink-0 shadow-md">
                                            <CheckSquare className="size-6" />
                                        </div>
                                        <span className="text-base leading-relaxed">We don't just install, we train. Data migration and staff training included.</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl px-6 py-5 rounded-3xl border border-white/60 shadow-sm text-zinc-800 hover:bg-white hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-[#00477b] text-white p-3 rounded-xl shrink-0 shadow-md">
                                            <CheckSquare className="size-6" />
                                        </div>
                                        <span className="text-base leading-relaxed">Dedicated Support and AMC for all technical updates/upgrades.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: FAQ */}
                            <div className="lg:col-span-7">
                                <FaqAccordion
                                    items={[
                                        { q: "Can ERPNext handle Dine-in, Takeaway, and Delivery?", a: "Yes. The POS supports all three order types with different tax and packing charge settings. You can track source-wise sales for Zomato, Swiggy, and direct orders." },
                                        { q: "Does it work offline?", a: "Yes. The system caches data locally on your POS machine and syncs automatically with the cloud server as soon as the internet connection is restored. Your service never stops." },
                                        { q: "How do you manage food costs?", a: "You create a “Bill of Materials” (BOM) for each recipe in your menu. When you sell a dish, the system automatically deducts the required raw ingredients from inventory and calculates your exact profit margin in real-time." },
                                        { q: "Can I manage multiple branches?", a: "Absolutely. You can view consolidated reports for all locations from one login while allowing individual managers to handle their own branch-specific inventory and billing independently." }
                                    ]}
                                    containerClassName="border border-white/60 rounded-3xl shadow-lg bg-white/90 backdrop-blur-xl overflow-hidden p-2"
                                    itemClassName="border-b border-white/40 last:border-0 bg-white/40 rounded-2xl mb-2 last:mb-0 px-4 hover:bg-white/80 transition-colors"
                                    buttonClassName="text-[#00477b] text-[15px] hover:bg-transparent font-extrabold py-5"
                                    iconColorClass="text-[#00477b]"
                                    answerClassName="text-zinc-600 bg-transparent pt-2 pb-5 font-medium leading-relaxed"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. Final CTA & Form */}
                <div className="container mx-auto px-4 sm:px-6 max-w-[1450px]">
                    <div className="mt-24 pt-24 border-t border-white/40">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            <div className="lg:col-span-5">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                    NEXT STEPS
                                </span>
                                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                                    Ready to Modernize Your Restaurant?
                                </h2>
                                <p className="text-zinc-600 font-medium mb-10 text-lg">
                                    Skip the guesswork. Get a tailored implementation roadmap and see how Gnosys Digital can scale your hospitality business.
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 text-zinc-900 p-6 rounded-3xl flex items-start gap-4 shadow-sm hover:bg-white/60 hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-[#00477b] text-white p-3 rounded-xl shrink-0 shadow-md">
                                            <CheckSquare className="size-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-[15px] mb-1 text-[#00477b]">Book a Free Operations Assessment:</h3>
                                            <p className="text-sm font-medium text-zinc-600">We analyze your current workflow and show you the exact ROI.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 text-zinc-900 p-6 rounded-3xl flex items-start gap-4 shadow-sm hover:bg-white/60 hover:-translate-y-1 transition-all duration-300">
                                        <div className="bg-[#00477b] text-white p-3 rounded-xl shrink-0 shadow-md">
                                            <CheckSquare className="size-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-[15px] mb-1 text-[#00477b]">Watch a Personalized Live Demo</h3>
                                            <p className="text-sm font-medium text-zinc-600">See the exact product in action tailored to your specific menu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-8 text-center lg:text-left">
                                    Request Your Free Consultation
                                </h2>

                                <form className="space-y-5 bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-xl border border-white/60">
                                    <div className="space-y-1">
                                        <Label htmlFor="fullName" className="text-xs text-zinc-600 uppercase tracking-wider font-extrabold">Full Name</Label>
                                        <Input id="fullName" placeholder="Jane Doe" className="rounded-2xl border-white/60 bg-white/60 text-zinc-900 placeholder:text-zinc-400 h-14 focus:ring-zinc-900 focus:border-zinc-900 shadow-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="email" className="text-xs text-zinc-600 uppercase tracking-wider font-extrabold">Email Address</Label>
                                        <Input id="email" type="email" placeholder="jane@restaurant.com" className="rounded-2xl border-white/60 bg-white/60 text-zinc-900 placeholder:text-zinc-400 h-14 focus:ring-zinc-900 focus:border-zinc-900 shadow-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="restaurantName" className="text-xs text-zinc-600 uppercase tracking-wider font-extrabold">Restaurant Name</Label>
                                        <Input id="restaurantName" placeholder="e.g. The Grand Bistro" className="rounded-2xl border-white/60 bg-white/60 text-zinc-900 placeholder:text-zinc-400 h-14 focus:ring-zinc-900 focus:border-zinc-900 shadow-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="phone" className="text-xs text-zinc-600 uppercase tracking-wider font-extrabold">Phone Number</Label>
                                        <Input id="phone" placeholder="9876543210" className="rounded-2xl border-white/60 bg-white/60 text-zinc-900 placeholder:text-zinc-400 h-14 focus:ring-zinc-900 focus:border-zinc-900 shadow-sm" />
                                    </div>
                                    <div className="pt-4 flex flex-col gap-2">
                                        <Button className="bg-[#00477b] hover:bg-[#00477b]/90 text-white rounded-2xl h-14 font-extrabold w-full shadow-xl hover:-translate-y-1 transition-all tracking-wide text-base">
                                            Book My Free Assessment
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
