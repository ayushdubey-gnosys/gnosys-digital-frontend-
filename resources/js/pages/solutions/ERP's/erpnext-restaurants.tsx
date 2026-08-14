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
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-xl">
                        ERPNext for Restaurants: One Platform to Manage Orders, Inventory & Accounts
                    </h1>
                    
                    <p className="text-lg sm:text-2xl text-zinc-100 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-lg">
                        Stop juggling between a POS, Excel sheets, and your accountant. Streamline dine-in, QSR, cloud kitchen, and multi-outlet chains with India's leading open-source ERP.
                    </p>
                    <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">Book Your Free ERP Consult Assessment <span className="text-xl">&rarr;</span></span>
                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                    </Button>
                </div>
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

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                            { icon: ClipboardList, area: "Ordering", help: "Intuitive POS, table & floor management, QR order scanning, and KOT printing." },
                            { icon: ChefHat, area: "Kitchen", help: "Digital KDS (Kitchen Display System). Instantly sent to the Kitchen Display System (KDS). No lost chits." },
                            { icon: PackageSearch, area: "Inventory", help: "Real-time ingredient tracking. Automatically deduct inventory when a dish is ordered." },
                            { icon: Calculator, area: "Finance", help: "GST-Compliant billing & accounting auto-reconciling. Close daily cash in minutes." },
                            { icon: LineChart, area: "Reporting", help: "Live Dashboards showing sales, top-selling dishes, and outlet-wise profitability." },
                            { icon: Users, area: "Customers", help: "Built-in Loyalty Programs & Customer Database to drive repeat visits." }
                        ].map((row, i) => (
                            <div key={i} className="flex flex-col bg-white/90 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group hover:-translate-y-2">
                                <div className="bg-[#00477b] p-3 rounded-2xl w-14 h-14 flex items-center justify-center text-white shadow-lg shadow-[#00477b]/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <row.icon className="size-6" />
                                </div>
                                    <h3 className="text-xl font-extrabold text-[#00477b] mb-3">{row.area}</h3>
                                    <p className="text-zinc-600 font-medium leading-relaxed">
                                        <span className="text-zinc-900 font-bold">{row.help.split('. ')[0] + (row.help.includes('. ') ? '. ' : '')}</span>
                                        <span className="text-zinc-500">
                                            {row.help.includes('. ') ? row.help.substring(row.help.indexOf('. ') + 2) : ''}
                                        </span>
                                    </p>
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
                                    { q: "Can ERPNext handle Dine-in, Takeaway, and Delivery?", a: "Yes, the POS supports all three order types with different tax and packing charge settings. You can track sources like Zomato, Swiggy, and direct calls." },
                                    { q: "Does it work offline?", a: "Yes, the POS module has robust offline capabilities. It syncs data back to the central server automatically once the internet connection is restored." },
                                    { q: "How do you manage food costs?", a: "We utilize the Bill of Materials (BOM) feature. Every time a dish is sold, the exact raw materials are deducted from inventory, giving you real-time COGS." },
                                    { q: "Can it manage multiple branches?", a: "Absolutely. You can set up multiple companies or cost centers within a single instance, allowing you to view consolidated reports or branch-specific P&L." }
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
                                <h2 className="text-3xl font-normal tracking-tight text-[#00477b] mb-8 text-center lg:text-left">
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
