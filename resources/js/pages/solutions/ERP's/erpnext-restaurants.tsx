import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    Clock, Flame, Trash2, Wallet, AlertTriangle, EyeOff, 
    CheckSquare, Utensils, Zap, Coffee, Cloud, Store, 
    CheckCircle2, Plus, Minus, Check
} from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextRestaurants() {
    const [openFaq, setOpenFaq] = useState<number>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <MainLayout>
            <Head title="ERPNext For Restaurants" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
                        style={{ backgroundImage: "url('/assets/restaurant-hero.webp')", backgroundColor: '#0f2c4a' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f2c4a]/90 via-[#0f2c4a]/70 to-[#0f2c4a]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                        ERPNext for Restaurants: One Platform to Manage Orders, Inventory & Accounts
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
                        Stop juggling between a POS, Excel sheets, and your accountant. Streamline dine-in, QSR, cloud kitchen, and multi-outlet chains with India's leading open-source ERP.
                    </p>
                    <Button className="bg-white text-[#0f2c4a] hover:bg-slate-100 rounded-sm px-8 h-12 text-sm font-bold shadow-xl transition-all">
                        Book Your Free ERP Consult Assessment &rarr;
                    </Button>
                </div>
            </section>

            {/* 2. Bottlenecks Grid */}
            <section className="py-24 bg-[#f4f8fb] text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#0f2c4a] mb-14">
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
                            <div key={i} className="bg-white border border-[#d6e5f3] rounded-sm p-8 flex flex-col items-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all text-center">
                                <div className="mb-5">
                                    <pain.icon className="size-10 text-[#2177b5]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0f2c4a] mb-3">{pain.title}</h3>
                                <p className="text-xs text-zinc-600 leading-relaxed font-medium">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The ERPNext Solution Table */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#0f2c4a] mb-3">
                            How Gnosys Digital Fixes This (The ERPNext Solution)
                        </h2>
                        <p className="text-zinc-600 text-sm">
                            Our module approach builds an interconnected digital nervous system for your restaurant.
                        </p>
                    </div>

                    <div className="overflow-x-auto shadow-md border border-[#0f2c4a]/10">
                        <table className="w-full text-sm sm:text-base border-collapse text-left">
                            <thead>
                                <tr className="bg-[#0f2c4a] text-white">
                                    <th className="py-5 px-6 font-bold w-1/4 uppercase tracking-wider text-xs border-r border-white/20">Area</th>
                                    <th className="py-5 px-6 font-bold w-3/4 uppercase tracking-wider text-xs">How ERPNext Helps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    { area: "Ordering", help: "Intuitive POS, table & floor management, QR order scanning, and KOT printing." },
                                    { area: "Kitchen", help: "Digital KDS (Kitchen Display System). Instantly sent to the Kitchen Display System (KDS). No lost chits." },
                                    { area: "Inventory", help: "Real-time ingredient tracking. Automatically deduct inventory when a dish is ordered." },
                                    { area: "Finance", help: "GST-Compliant billing & accounting auto-reconciling. Close daily cash in minutes." },
                                    { area: "Reporting", help: "Live Dashboards showing sales, top-selling dishes, and outlet-wise profitability." },
                                    { area: "Customers", help: "Built-in Loyalty Programs & Customer Database to drive repeat visits." }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-5 px-6 font-bold text-[#0f2c4a] border-r border-gray-200 bg-slate-50/50">{row.area}</td>
                                        <td className="py-5 px-6 text-zinc-700 font-medium">
                                            {/* Highlight the first bold part if exists, simple split by period for emphasis */}
                                            {row.help.split('. ')[0] + (row.help.includes('. ') ? '. ' : '')}
                                            <span className="font-normal text-zinc-600">
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
            <section className="py-24 bg-[#f9f9f9]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold text-[#0f2c4a] mb-4">
                                Why Gnosys Digital Beats Standard POS Systems
                            </h2>
                            <p className="text-zinc-600 mb-10 text-sm font-medium">
                                Don't settle for a basic cash register. Get a full-fledged, post-modern running system designed for growth.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-[#2177b5] text-white p-1 rounded-sm mt-1 shrink-0">
                                        <Check className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f2c4a] text-lg mb-1">Recipe Costing (BOM)</h3>
                                        <p className="text-zinc-600 text-sm">Exact item cost history (how long, below margin, or COGS below threshold).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-[#2177b5] text-white p-1 rounded-sm mt-1 shrink-0">
                                        <Check className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f2c4a] text-lg mb-1">Multi-Outlet HQ</h3>
                                        <p className="text-zinc-600 text-sm">Map inventory and P&L for all branches on one single master screen.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-[#2177b5] text-white p-1 rounded-sm mt-1 shrink-0">
                                        <Check className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f2c4a] text-lg mb-1">Cloud or On-Premise</h3>
                                        <p className="text-zinc-600 text-sm">We deploy it how you need. Total data ownership, no vendor lock-in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative shadow-2xl rounded-sm overflow-hidden border border-gray-200">
                                {/* Dashboard Image Placeholder */}
                                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: "url('/assets/restaurant-dashboard.webp')", backgroundColor: '#e2e8f0' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Tailored for Every Restaurant Type */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#0f2c4a] mb-2">
                        Tailored for Every Restaurant Type
                    </h2>
                    <p className="text-zinc-600 text-sm mb-14">
                        No matter the size or format, Gnosys Digital scales to your unique workflow.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {[
                            { icon: Utensils, title: "Fine Dining", desc: "Table reservations, bill renewals, and complex multi-course KOT workflows with ease." },
                            { icon: Zap, title: "QSR", desc: "Speed ordering and kitchen production during peak lunch hours and high-volume periods." },
                            { icon: Coffee, title: "Cafes", desc: "Manage high-volume low-ticket items with ultra-fast POS workflows and loyalty integrations." }
                        ].map((type, i) => (
                            <div key={i} className="border border-[#d6e5f3] rounded-sm p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <type.icon className="size-10 text-[#2177b5] mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-[#0f2c4a] mb-2">{type.title}</h3>
                                <p className="text-xs text-zinc-600">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {[
                            { icon: Cloud, title: "Cloud Kitchens", desc: "Directly coordinate with delivery apps (Zomato/Swiggy) and manage optimized production lines." },
                            { icon: Store, title: "Food Courts & Franchises", desc: "Standardize menus, pricing, and reporting across all outlets from one central headquarters." }
                        ].map((type, i) => (
                            <div key={i} className="border border-[#d6e5f3] rounded-sm p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <type.icon className="size-10 text-[#2177b5] mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-[#0f2c4a] mb-2">{type.title}</h3>
                                <p className="text-xs text-zinc-600">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Gnosys Digital (Trust) */}
            <section className="py-16 bg-[#f4f8fb] border-y border-[#e2edf8]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-[#0f2c4a] mb-8">
                        Why Gnosys Digital? (Trust & Expertise)
                    </h2>
                    
                    <div className="flex flex-col items-center gap-4 text-sm text-[#0f2c4a] font-medium">
                        <div className="flex items-center gap-3">
                            <CheckSquare className="size-5 text-[#2177b5]" />
                            <span>Certified ERPNext Partner with 10+ years in the hospitality industry.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckSquare className="size-5 text-[#2177b5]" />
                            <span>We don't just install, we train. Data migration and staff training included.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckSquare className="size-5 text-[#2177b5]" />
                            <span>Dedicated Support and AMC for all technical updates/upgrades.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#0f2c4a] mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-zinc-600 text-sm">
                            Everything you need to know about implementing ERPNext for your restaurant.
                        </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-sm">
                        {[
                            { q: "Can ERPNext handle Dine-in, Takeaway, and Delivery?", a: "Yes, the POS supports all three order types with different tax and packing charge settings. You can track sources like Zomato, Swiggy, and direct calls." },
                            { q: "Does it work offline?", a: "Yes, the POS module has robust offline capabilities. It syncs data back to the central server automatically once the internet connection is restored." },
                            { q: "How do you manage food costs?", a: "We utilize the Bill of Materials (BOM) feature. Every time a dish is sold, the exact raw materials are deducted from inventory, giving you real-time COGS." },
                            { q: "Can it manage multiple branches?", a: "Absolutely. You can set up multiple companies or cost centers within a single instance, allowing you to view consolidated reports or branch-specific P&L." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-200 last:border-0">
                                <button 
                                    className="w-full text-left px-6 py-5 font-bold text-[#0f2c4a] text-sm flex justify-between items-center hover:bg-slate-50 transition-colors"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#2177b5]">
                                            {openFaq === idx ? <Minus className="size-4" /> : <Plus className="size-4" />}
                                        </div>
                                        <span>{faq.q}</span>
                                    </div>
                                </button>
                                {openFaq === idx && (
                                    <div className="px-14 pb-5 text-zinc-600 text-sm leading-relaxed bg-slate-50/50 pt-2 border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Final CTA & Form */}
            <section className="py-24 bg-[#f4f8fb] border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold text-[#0f2c4a] mb-4">
                                Ready to Modernize Your Restaurant?
                            </h2>
                            <p className="text-zinc-600 text-sm font-medium mb-10">
                                Skip the guesswork. Get a tailored implementation roadmap and see how Gnosys Digital can scale your hospitality business.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="bg-[#1b6b99] text-white p-6 rounded-sm flex items-start gap-4 shadow-md">
                                    <CheckSquare className="size-6 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Book a Free Operations Assessment:</h3>
                                        <p className="text-sm text-blue-100">We analyze your current workflow and show you the exact ROI.</p>
                                    </div>
                                </div>
                                <div className="bg-[#1b6b99] text-white p-6 rounded-sm flex items-start gap-4 shadow-md">
                                    <CheckSquare className="size-6 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Watch a Personalized Live Demo</h3>
                                        <p className="text-sm text-blue-100">See the exact product in action tailored to your specific menu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl font-bold text-[#0f2c4a] mb-8 text-center lg:text-left">
                                Request Your Free Consultation
                            </h2>
                            
                            <form className="space-y-4 bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                                <div className="space-y-1">
                                    <Label htmlFor="fullName" className="text-xs text-zinc-500 uppercase tracking-wider">Full Name</Label>
                                    <Input id="fullName" placeholder="Jane Doe" className="rounded-sm border-gray-300 h-11" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email" className="text-xs text-zinc-500 uppercase tracking-wider">Email Address</Label>
                                    <Input id="email" type="email" placeholder="jane@restaurant.com" className="rounded-sm border-gray-300 h-11" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="restaurantName" className="text-xs text-zinc-500 uppercase tracking-wider">Restaurant Name</Label>
                                    <Input id="restaurantName" placeholder="e.g. The Grand Bistro" className="rounded-sm border-gray-300 h-11" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="phone" className="text-xs text-zinc-500 uppercase tracking-wider">Phone Number</Label>
                                    <Input id="phone" placeholder="9876543210" className="rounded-sm border-gray-300 h-11" />
                                </div>
                                <div className="pt-4 flex flex-col gap-2">
                                    <Button className="bg-[#0f2c4a] hover:bg-[#0a1e33] text-white rounded-sm h-12 font-bold w-full shadow-md">
                                        Book My Free Assessment
                                    </Button>
                                    {/* The screenshot shows two buttons, but one is enough. I will add an outline one to match the visual weight if needed, but a single clear CTA is better UX */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
