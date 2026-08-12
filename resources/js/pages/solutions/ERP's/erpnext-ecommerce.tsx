import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Package, RefreshCw, Truck, TrendingDown,
    Link as LinkIcon, FileText, CheckCircle2, ChevronDown
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextEcommerce() {
    return (
        <MainLayout>
            <Head title="ERPNext For E-Commerce" />

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-36 flex flex-col items-center justify-center text-center min-h-[70vh]">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-ecomm.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Unify Your Sales, Stock, And Accounts.
                        <br />
                        <span className="text-zinc-300">Automate Everything Else.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
                        Stop juggling apps and spreadsheets. Get a single, intelligent system that connects your marketplaces, website, warehouse, and financials. Scale your business, not your workload.
                    </p>
                    <Button className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full px-8 h-14 text-base font-bold shadow-xl transition-all hover:scale-105">
                        Book Your Free E-Commerce Workflow Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Growth Pains Grid */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                        The Growth Pains Every E-Commerce Brand Knows
                    </h2>
                    <p className="text-zinc-600 mb-14 text-lg">
                        Your operations turn into a bottleneck just as sales take off. Does this sound familiar?
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Package, title: "Stock-Outs & Overstocks", desc: "Your website says 'In Stock,' your warehouse says 'Sold Out.' Dead inventory piles up while you miss out on sales." },
                            { icon: RefreshCw, title: "Manual Mayhem", desc: "Copy-pasting orders, chasing payment reconciliations, and syncing data across 3 different tools manually." },
                            { icon: Truck, title: "Fulfillment Friction", desc: "Slow picking/packing, shipping delays, and a massive pile of return orders that are impossible to track." },
                            { icon: TrendingDown, title: "Profitability Blindness", desc: "You see sales volume, but where is the real profit per product, category, or sales channel?" },
                            { icon: LinkIcon, title: "Disconnected Channels", desc: "Managing Amazon, Flipkart, Shopify, and your own retail stores in completely separate data silos." },
                            { icon: FileText, title: "GST & Compliance Headaches", desc: "Monthly filing becomes a scrambling exercise of manual calculations and mismatched tax reports." }
                        ].map((pain, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 hover:bg-white/60 rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all text-center group">
                                <div className="bg-white/80 shadow-sm p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                    <pain.icon className="size-8 text-zinc-900" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-3">{pain.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Command Center Intro */}
            <section className="py-24 bg-transparent text-center border-t border-white/40 relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-6">
                        Your All-In-One Commerce Command Center
                    </h2>
                    <p className="text-zinc-700 text-lg mb-10 leading-relaxed">
                        ERPNext organizes chaos into process, giving you a unified backbone to run your entire business from procurement to final delivery.
                    </p>
                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] h-12 px-8 font-bold shadow-lg">
                        Schedule An Assessment Call
                    </Button>
                </div>
            </section>

            {/* 4. Modules Built For Scale */}
            <section className="py-24 bg-transparent border-t border-white/40 relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#00477b] mb-14">
                        Modules Built For E-Commerce Scale
                    </h2>

                    {/* Top Row - 3 Cards */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        {[
                            { num: "1", title: "Product & Catalog Master", desc: "Manage complex attributes, bundles, and variants. Centralized pricing, bulk upload, and update across all channels with ease." },
                            { num: "2", title: "Omnichannel Sales Integrations", desc: "Native connectors for Shopify, WooCommerce, Amazon, Flipkart, and Magento. Manage all orders in one centralized hub." },
                            { num: "3", title: "Intelligent Inventory & Warehouse", desc: "Multi-warehouse real-time stock visibility. Expiry tracking, serial/batch tracking, and barcode scanning operations." }
                        ].map((mod, i) => (
                            <div key={i} className="bg-zinc-900 rounded-xl p-8 shadow-xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl -mr-4 -mt-6 group-hover:scale-110 transition-transform">
                                    {mod.num}
                                </div>
                                <div className="size-8 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center font-bold mb-6">
                                    {mod.num}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{mod.title}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">{mod.desc}</p>
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
                            <div key={i} className="bg-zinc-900 rounded-xl p-8 shadow-xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl -mr-4 -mt-6 group-hover:scale-110 transition-transform">
                                    {mod.num}
                                </div>
                                <div className="size-8 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center font-bold mb-6">
                                    {mod.num}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{mod.title}</h3>
                                <p className="text-sm text-zinc-300 leading-relaxed">{mod.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Roadmap */}
            <section className="py-24 bg-transparent overflow-hidden border-t border-white/40 relative z-10 w-full">
                <div className="w-full px-4 lg:px-8 xl:px-12 mx-auto">
                    <div className="text-center mb-16 md:mb-24 max-w-5xl mx-auto">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-200/50 border border-zinc-300/50 text-xs font-bold text-[#00477b] uppercase tracking-wider mb-4">
                            Implementation Plan
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#00477b] mb-6 tracking-tight">
                            6-Week E-commerce Roadmap
                        </h2>
                        <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                            A streamlined, step-by-step plan to automate operations, integrate channels, and empower your team without the chaos.
                        </p>
                    </div>

                    <div className="relative pt-8 max-w-[1600px] mx-auto">
                        {/* Horizontal connecting line (Desktop only) */}
                        <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-px bg-white/60 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
                            {[
                                { step: "Week 1-2", title: "Process Mapping & Architecture", desc: "Map sales channels, inventory workflows, and financials to establish the baseline." },
                                { step: "Week 3", title: "Core System Setup", desc: "Configure users, multi-warehouse structures, pricing rules, and GST taxation." },
                                { step: "Week 4", title: "Omnichannel Integrations", desc: "Connect sales channels (Shopify, Amazon), payment gateways, and logistics." },
                                { step: "Week 5", title: "Migration & QA Testing", desc: "Import historical data, followed by rigorous end-to-end system testing." },
                                { step: "Week 6", title: "Training & Launch", desc: "Go live with comprehensive team training and dedicated hand-holding support." },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col relative group">
                                    {/* Vertical Connecting Line (Mobile only) */}
                                    {i !== 4 && <div className="lg:hidden absolute left-[27px] top-14 bottom-[-24px] w-px bg-white/40"></div>}

                                    {/* Center Dot/Number */}
                                    <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center shrink-0 relative z-10 text-zinc-900 font-bold text-lg group-hover:scale-110 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300 mb-6 lg:mx-auto">
                                        {i + 1}
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl shadow-sm border border-white/40 group-hover:shadow-xl group-hover:bg-white/20 transition-all duration-300 flex-1 ml-12 lg:ml-0 flex flex-col">
                                        <div className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase mb-2">{item.step}</div>
                                        <h3 className="text-[15px] font-bold text-[#00477b] mb-2 leading-tight">{item.title}</h3>
                                        <p className="text-[13px] text-zinc-700 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Proven Results */}
            <section className="py-24 bg-zinc-900 text-white overflow-hidden relative border-y border-zinc-800">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:100px_100px]"></div>

                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white tracking-tight">
                        Proven Results For Indian E-Commerce Brands
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
                        <div className="pb-8 md:pb-0 md:pr-8 group">
                            <h3 className="text-2xl font-bold mb-6 text-white">D2C Skincare Brand<br /><span className="text-sm font-bold text-[#00477b] uppercase tracking-widest mt-1 inline-block">Bangalore</span></h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-zinc-400 mt-0.5" />
                                    <span>1.5x order processing speed without adding warehouse headcount.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-zinc-400 mt-0.5" />
                                    <span>Real-time stock visibility across Shopify, Amazon, and offline distributors.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-zinc-400 mt-0.5" />
                                    <span>99% accuracy in order fulfillment.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-8 md:pt-0 md:pl-8 group">
                            <h3 className="text-2xl font-bold mb-6 text-white">Electronics Store<br /><span className="text-sm font-bold text-[#00477b] uppercase tracking-widest mt-1 inline-block">Mumbai</span></h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-zinc-400 mt-0.5" />
                                    <span>Unified Shopify & retail stores. 30% reduction in dead stock.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-zinc-400 mt-0.5" />
                                    <span>Automated GST compliance saving 40 hours/month for accounting team.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                                    <CheckCircle2 className="size-5 shrink-0 text-zinc-400 mt-0.5" />
                                    <span>Single Source of Truth established for all business data.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Contact Form */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                            Discover Your Automation Potential
                        </h2>
                        <p className="text-zinc-600">
                            Tell us a bit about your business, and we'll identify exactly where bottlenecks are slowing you down.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/40">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="Enter your full name" className="h-12 bg-white/20 border-white/40 placeholder:text-zinc-500 focus:bg-white/40 transition-colors" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-12 bg-white/20 border-white/40 placeholder:text-zinc-500 focus:bg-white/40 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-12 bg-white/20 border-white/40 placeholder:text-zinc-500 focus:bg-white/40 transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Company Name</Label>
                                <Input id="company" placeholder="Enter your company name" className="h-12 bg-white/20 border-white/40 placeholder:text-zinc-500 focus:bg-white/40 transition-colors" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="businessType">What best describes you?</Label>
                                    <div className="relative">
                                        <select id="businessType" className="w-full h-12 rounded-md border border-white/40 bg-white/20 px-3 py-2 text-sm ring-offset-background appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors">
                                            <option className="bg-white">Select Type...</option>
                                            <option className="bg-white">D2C Brand</option>
                                            <option className="bg-white">B2B Distributor</option>
                                            <option className="bg-white">Retailer (Online + Offline)</option>
                                            <option className="bg-white">Marketplace Seller</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-zinc-600 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="platforms">Platforms you sell on</Label>
                                    <div className="relative">
                                        <select id="platforms" className="w-full h-12 rounded-md border border-white/40 bg-white/20 px-3 py-2 text-sm ring-offset-background appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors">
                                            <option className="bg-white">Select Platform...</option>
                                            <option className="bg-white">Shopify</option>
                                            <option className="bg-white">WooCommerce</option>
                                            <option className="bg-white">Amazon / Flipkart</option>
                                            <option className="bg-white">Multiple Platforms</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-zinc-600 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Monthly Order Volume</Label>
                                <div className="flex flex-wrap gap-4">
                                    {['< 500', '500 - 2000', '2000 - 5000', '5000+'].map((vol, i) => (
                                        <label key={i} className="flex items-center gap-2 cursor-pointer group">
                                            <input type="radio" name="volume" className="size-4 appearance-none rounded-full border border-zinc-300 bg-white checked:border-[5px] checked:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all cursor-pointer shadow-sm" />
                                            <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">{vol}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="headache">Your Biggest Operational Headache Right Now?</Label>
                                <Textarea id="headache" placeholder="e.g., 'Inventory never matches,' 'GST filing takes days,' 'Orders get missed'" className="min-h-[120px] bg-white/20 border-white/40 placeholder:text-zinc-500 focus:bg-white/40 transition-colors" />
                            </div>

                            <div className="pt-4 text-center">
                                <Button className="bg-[#00477b] text-white hover:bg-[#00477b] hover:scale-105 px-10 h-14 font-bold w-full sm:w-auto shadow-lg transition-all">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Pricing */}
            <section className="py-24 bg-transparent border-y border-white/40 relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-xs font-bold text-white uppercase tracking-wider mb-4 shadow-lg shadow-zinc-900/20">
                            Transparent Pricing
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#00477b] mb-6 tracking-tight">
                            E-Commerce ERP Package
                        </h2>
                        <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                            Everything you need to automate workflows, integrate channels, and scale your brand—without the enterprise price tag.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-white/40 overflow-hidden flex flex-col lg:flex-row relative group">

                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Left Side: Pricing */}
                        <div className="lg:w-2/5 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/40 flex flex-col justify-center bg-white/10 relative z-10">
                            <h3 className="text-xl font-bold text-[#00477b] mb-2">Comprehensive Plan</h3>
                            <p className="text-sm text-zinc-600 mb-8 font-medium">One-time implementation fee with transparent deliverables.</p>

                            <div className="mb-8">
                                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Starts At</div>
                                <div className="text-5xl lg:text-6xl font-black text-zinc-700 tracking-tight">
                                    ₹75<span className="text-4xl lg:text-5xl text-zinc-600">,000</span>
                                </div>
                            </div>

                            <Button className="w-full bg-[#00477b] hover:bg-[#00477b] text-white h-14 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                                Book Your Assessment
                            </Button>
                            <p className="text-xs text-center text-zinc-500 mt-4 font-medium">Takes 2 minutes • No credit card required</p>
                        </div>

                        {/* Right Side: Features */}
                        <div className="lg:w-3/5 p-10 lg:p-14 relative z-10">
                            <div className="mb-10">
                                <h4 className="font-bold text-[#00477b] mb-6 uppercase tracking-widest text-sm flex items-center gap-3">
                                    <span className="w-8 h-px bg-zinc-400"></span>
                                    What's Included
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 text-sm text-zinc-700 font-medium">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-zinc-900/10 rounded-full p-1 shrink-0"><CheckCircle2 className="size-4 text-zinc-900" /></div>
                                        <span>Complete Inventory & Warehouse Management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-zinc-900/10 rounded-full p-1 shrink-0"><CheckCircle2 className="size-4 text-zinc-900" /></div>
                                        <span>Order & Shipping Automation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-zinc-900/10 rounded-full p-1 shrink-0"><CheckCircle2 className="size-4 text-zinc-900" /></div>
                                        <span>Finance, Taxes, & Accounting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-zinc-900/10 rounded-full p-1 shrink-0"><CheckCircle2 className="size-4 text-zinc-900" /></div>
                                        <span>Training & Dedicated Go-Live Support</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm relative overflow-hidden group/bonus">
                                <div className="absolute top-0 left-0 w-1 h-full bg-zinc-900"></div>
                                <h4 className="font-bold text-[#00477b] mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                                    Limited-Time Bonuses
                                </h4>
                                <ul className="space-y-2 text-sm text-zinc-800 font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="text-zinc-400 font-bold">•</span> Free Amazon/Flipkart connector setup
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-zinc-400 font-bold">•</span> Free data migration from your current platform
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-zinc-400 font-bold">•</span> 3 Months Extended Priority Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Why Partner With Us */}
            <section className="py-20 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-2xl font-bold text-[#00477b] mb-10">
                        Why Partner With Gnosys Digital?
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "50+ E-commerce implementations across India",
                            "Specialists in retail operations (B2B, B2C, D2C, Marketplaces)",
                            "Agile onboarding (Go-Live in 4-6 weeks)",
                            "Dedicated support team that understands e-commerce ops"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/40 p-6 rounded-xl text-sm font-medium text-zinc-700 shadow-sm hover:bg-white/30 transition-colors">
                                <CheckCircle2 className="size-6 text-zinc-800 mx-auto mb-4" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="py-24 bg-transparent text-center border-t border-white/40 relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                        Ready To Scale Without The Chaos?
                    </h2>
                    <p className="text-zinc-500 mb-12">Choose Your Next Step.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-sm border border-white/40 hover:bg-white/20 transition-all group flex flex-col">
                            <h3 className="font-bold text-lg mb-auto text-[#00477b]">Get a tailored automation plan.</h3>
                            <Button className="mt-6 bg-[#00477b] text-white group-hover:bg-[#00477b] transition-colors w-full border border-transparent group-hover:scale-[1.02] shadow-sm">
                                Book Free Assessment
                            </Button>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-sm border border-white/40 hover:bg-white/20 transition-all group flex flex-col">
                            <h3 className="font-bold text-lg mb-auto text-[#00477b]">Walk through the platform with our expert.</h3>
                            <Button className="mt-6 bg-[#00477b] text-white group-hover:bg-[#00477b] transition-colors w-full border border-transparent group-hover:scale-[1.02] shadow-sm">
                                See Live Demo
                            </Button>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-sm border border-white/40 hover:bg-white/20 transition-all group flex flex-col">
                            <h3 className="font-bold text-lg mb-auto text-[#00477b]">Instant clarity on your questions.</h3>
                            <Button className="mt-6 bg-[#00477b] text-white group-hover:bg-[#00477b] transition-colors w-full border border-transparent group-hover:scale-[1.02] shadow-sm">
                                Talk To An Expert
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
