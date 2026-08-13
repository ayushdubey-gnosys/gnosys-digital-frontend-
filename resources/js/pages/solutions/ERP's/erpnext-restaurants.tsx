import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    Clock, Flame, Trash2, Wallet, AlertTriangle, EyeOff, 
    CheckSquare, Utensils, Zap, Coffee, Cloud, Store, 
    CheckCircle2, Check
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import FaqAccordion from '@/components/FaqAccordion';

export default function ErpnextRestaurants() {

    return (
        <MainLayout>
            <Head title="ERPNext For Restaurants" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-resturant.webp')" }}
                    ></div>
                    {/* Subtle overlay for text readability, mostly transparent */}
                    <div className="absolute inset-0 bg-zinc-950/30"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                        ERPNext for Restaurants: One Platform to Manage Orders, Inventory & Accounts
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
                        Stop juggling between a POS, Excel sheets, and your accountant. Streamline dine-in, QSR, cloud kitchen, and multi-outlet chains with India's leading open-source ERP.
                    </p>
                    <Button className="bg-zinc-100 text-zinc-900 hover:bg-white hover:scale-105 rounded-full px-8 h-12 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                        Book Your Free ERP Consult Assessment &rarr;
                    </Button>
                </div>
            </section>

            {/* 2. Bottlenecks Grid */}
            <section className="py-24 bg-transparent text-center border-t border-white/40">
                <div className="container mx-auto px-4 max-w-5xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-14">
                        Stop Losing Money to These 6 Restaurant Bottlenecks
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Clock, title: "Long Wait Times", desc: "Losing customers during peak hours due to inefficient order processing and service lag." },
                            { icon: Flame, title: "Kitchen Chaos", desc: "Missing orders, late tickets, and lack of clear communication to staff from the server app." },
                            { icon: Trash2, title: "Food Wastage", desc: "Over-ordering ingredients without inventory usage tracking, eating into your margins." },
                            { icon: Wallet, title: "Manual Accounting", desc: "Reconciling UPI, cash, and card payments takes hours of manual admin time every night." },
                            { icon: AlertTriangle, title: "Invisible Costs", desc: "You don't know the exact profit margin of your signature dish because recipe costs aren't tracked." },
                            { icon: EyeOff, title: "Multi-Outlet Blindness", desc: "No real-time visibility into which branch is actually performing or where inventory is leaking." }
                        ].map((pain, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 flex flex-col items-center hover:bg-white/60 hover:-translate-y-1 hover:shadow-2xl shadow-lg transition-all text-center group">
                                <div className="mb-5 bg-white/80 backdrop-blur-md p-4 rounded-2xl group-hover:scale-110 shadow-sm border border-white/60 transition-transform">
                                    <pain.icon className="size-8 text-zinc-900" />
                                </div>
                                <h3 className="font-extrabold text-[17px] text-[#00477b] mb-3">{pain.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed font-medium">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The ERPNext Solution Table */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
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

                    <div className="overflow-x-auto shadow-lg rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl p-1">
                        <table className="w-full text-sm sm:text-base border-collapse text-left bg-transparent">
                            <thead>
                                <tr className="bg-white/60 text-zinc-900 rounded-t-2xl">
                                    <th className="py-5 px-6 font-bold w-1/4 uppercase tracking-wider text-xs border-r border-white/40 rounded-tl-2xl">Area</th>
                                    <th className="py-5 px-6 font-bold w-3/4 uppercase tracking-wider text-xs rounded-tr-2xl">How ERPNext Helps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/40">
                                {[
                                    { area: "Ordering", help: "Intuitive POS, table & floor management, QR order scanning, and KOT printing." },
                                    { area: "Kitchen", help: "Digital KDS (Kitchen Display System). Instantly sent to the Kitchen Display System (KDS). No lost chits." },
                                    { area: "Inventory", help: "Real-time ingredient tracking. Automatically deduct inventory when a dish is ordered." },
                                    { area: "Finance", help: "GST-Compliant billing & accounting auto-reconciling. Close daily cash in minutes." },
                                    { area: "Reporting", help: "Live Dashboards showing sales, top-selling dishes, and outlet-wise profitability." },
                                    { area: "Customers", help: "Built-in Loyalty Programs & Customer Database to drive repeat visits." }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/40 transition-colors">
                                        <td className="py-5 px-6 font-bold text-zinc-900 border-r border-white/40 bg-white/20">{row.area}</td>
                                        <td className="py-5 px-6 text-zinc-600 font-medium">
                                            <span className="text-zinc-900 font-bold">{row.help.split('. ')[0] + (row.help.includes('. ') ? '. ' : '')}</span>
                                            <span className="font-normal text-zinc-500">
                                                {row.help.includes('. ') ? row.help.substring(row.help.indexOf('. ') + 2) : ''}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. Why We Beat Standard POS */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                WHY US
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                                Why Gnosys Beats Standard POS Systems
                            </h2>
                            <p className="text-zinc-600 mb-10 font-medium">
                                Don't settle for a basic cash register. Get a full-fledged, post-modern running system designed for growth.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-sm">
                                    <div className="bg-white/80 text-zinc-900 p-2 rounded-xl shrink-0 shadow-sm border border-white/60">
                                        <Check className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[15px] text-[#00477b] mb-1">Recipe Costing (BOM)</h3>
                                        <p className="text-zinc-600 text-sm font-medium">Exact item cost history (how long, below margin, or COGS below threshold).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-sm">
                                    <div className="bg-white/80 text-zinc-900 p-2 rounded-xl shrink-0 shadow-sm border border-white/60">
                                        <Check className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[15px] text-[#00477b] mb-1">Multi-Outlet HQ</h3>
                                        <p className="text-zinc-600 text-sm font-medium">Map inventory and P&L for all branches on one single master screen.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white/40 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-sm">
                                    <div className="bg-white/80 text-zinc-900 p-2 rounded-xl shrink-0 shadow-sm border border-white/60">
                                        <Check className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[15px] text-[#00477b] mb-1">Cloud or On-Premise</h3>
                                        <p className="text-zinc-600 text-sm font-medium">We deploy it how you need. Total data ownership, no vendor lock-in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative shadow-2xl rounded-3xl overflow-hidden border border-white/60 p-2 bg-white/40 backdrop-blur-xl">
                                <div className="aspect-[4/3] bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('/assets/restaurant-dashboard.webp')", backgroundColor: '#f4f4f5' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Tailored for Every Restaurant Type */}
            <section className="py-24 bg-transparent text-center border-t border-white/40">
                <div className="container mx-auto px-4 max-w-5xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHO WE SERVE
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                        Tailored for Every Restaurant Type
                    </h2>
                    <p className="text-zinc-600 font-medium mb-14">
                        No matter the size or format, Gnosys Digital scales to your unique workflow.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {[
                            { icon: Utensils, title: "Fine Dining", desc: "Table reservations, bill renewals, and complex multi-course KOT workflows with ease." },
                            { icon: Zap, title: "QSR", desc: "Speed ordering and kitchen production during peak lunch hours and high-volume periods." },
                            { icon: Coffee, title: "Cafes", desc: "Manage high-volume low-ticket items with ultra-fast POS workflows and loyalty integrations." }
                        ].map((type, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 hover:bg-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                                <div className="bg-white/80 border border-white/60 shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <type.icon className="size-8 text-zinc-900" />
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
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 hover:bg-white/60 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                                <div className="bg-white/80 border border-white/60 shadow-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <type.icon className="size-8 text-zinc-900" />
                                </div>
                                <h3 className="font-extrabold text-[17px] text-[#00477b] mb-3">{type.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Gnosys Digital (Trust) */}
            <section className="py-16 bg-transparent border-y border-white/40">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        EXPERTISE
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-8">
                        Why Gnosys Digital? (Trust & Expertise)
                    </h2>
                    
                    <div className="flex flex-col items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/80 shadow-md text-zinc-800">
                            <CheckSquare className="size-5 text-zinc-900" />
                            <span>Certified ERPNext Partner with 10+ years in the hospitality industry.</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/80 shadow-md text-zinc-800">
                            <CheckSquare className="size-5 text-zinc-900" />
                            <span>We don't just install, we train. Data migration and staff training included.</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/80 shadow-md text-zinc-800">
                            <CheckSquare className="size-5 text-zinc-900" />
                            <span>Dedicated Support and AMC for all technical updates/upgrades.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            FAQS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-zinc-600 font-medium">
                            Everything you need to know about implementing ERPNext for your restaurant.
                        </p>
                    </div>
                    
                    <FaqAccordion 
                        items={[
                            { q: "Can ERPNext handle Dine-in, Takeaway, and Delivery?", a: "Yes, the POS supports all three order types with different tax and packing charge settings. You can track sources like Zomato, Swiggy, and direct calls." },
                            { q: "Does it work offline?", a: "Yes, the POS module has robust offline capabilities. It syncs data back to the central server automatically once the internet connection is restored." },
                            { q: "How do you manage food costs?", a: "We utilize the Bill of Materials (BOM) feature. Every time a dish is sold, the exact raw materials are deducted from inventory, giving you real-time COGS." },
                            { q: "Can it manage multiple branches?", a: "Absolutely. You can set up multiple companies or cost centers within a single instance, allowing you to view consolidated reports or branch-specific P&L." }
                        ]}
                        containerClassName="border border-white/60 rounded-3xl shadow-lg bg-white/40 backdrop-blur-xl overflow-hidden p-2"
                        itemClassName="border-b border-white/40 last:border-0 bg-white/40 rounded-2xl mb-2 last:mb-0 px-4"
                        buttonClassName="text-zinc-900 text-sm hover:bg-white/20 font-extrabold py-4"
                        iconColorClass="text-zinc-900"
                        answerClassName="text-zinc-600 bg-transparent pt-2 pb-4 font-medium"
                    />
                </div>
            </section>

            {/* 8. Final CTA & Form */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="w-full lg:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                NEXT STEPS
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                                Ready to Modernize Your Restaurant?
                            </h2>
                            <p className="text-zinc-600 font-medium mb-10">
                                Skip the guesswork. Get a tailored implementation roadmap and see how Gnosys Digital can scale your hospitality business.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/60 text-zinc-900 p-6 rounded-3xl flex items-start gap-4 shadow-lg hover:bg-white/60 transition-all">
                                    <div className="bg-white/80 p-3 rounded-2xl shrink-0 mt-1 border border-white/60 shadow-sm">
                                        <CheckSquare className="size-6 text-zinc-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[15px] mb-1 text-[#00477b]">Book a Free Operations Assessment:</h3>
                                        <p className="text-sm font-medium text-zinc-600">We analyze your current workflow and show you the exact ROI.</p>
                                    </div>
                                </div>
                                <div className="bg-white/40 backdrop-blur-xl border border-white/60 text-zinc-900 p-6 rounded-3xl flex items-start gap-4 shadow-lg hover:bg-white/60 transition-all">
                                    <div className="bg-white/80 p-3 rounded-2xl shrink-0 mt-1 border border-white/60 shadow-sm">
                                        <CheckSquare className="size-6 text-zinc-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[15px] mb-1 text-[#00477b]">Watch a Personalized Live Demo</h3>
                                        <p className="text-sm font-medium text-zinc-600">See the exact product in action tailored to your specific menu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2">
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
                                    <Button className="bg-[#00477b] hover:bg-[#00477b] text-white rounded-2xl h-14 font-extrabold w-full shadow-xl hover:-translate-y-1 transition-all tracking-wide">
                                        Book My Free Assessment
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
