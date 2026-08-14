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
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-tight drop-shadow-md">
                        ERPNext For Retail SMEs
                    </h1>

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

                    <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                        A single platform to manage inventory, sales, customers, and finance for retail businesses.
                    </p>
                    <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">Request Free Assessment <span className="text-xl">&rarr;</span></span>
                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                    </Button>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div className="bg-transparent">

                {/* 2. Retail Challenges */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-6">
                            Retail Challenges
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-16">
                            Common hurdles in retail operations.
                        </p>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                            {[
                                { icon: <RefreshCw />, title: "Disconnected Systems", desc: "Silos between online and offline channels leading to data mismatch." },
                                { icon: <Box />, title: "Stock Out / Overstock", desc: "Poor inventory visibility causing lost sales or tied-up capital." },
                                { icon: <Settings />, title: "Manual Processes & Errors", desc: "High reliance on manual data entry for pricing and promotions." },
                                { icon: <Users />, title: "Poor Data & Customer Understanding", desc: "Lack of insights into customer buying behavior and lifetime value." },
                                { icon: <Store />, title: "Shrinkage & Pilferage", desc: "Inadequate controls leading to inventory losses." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800">
                                        {React.cloneElement(item.icon, { className: "size-5" })}
                                    </div>
                                    <h3 className="text-sm font-semibold text-[#00477b] mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. ERPNext Retail Solutions */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-6">
                            ERPNext Retail Solutions
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-16">
                            How ERPNext solves for Retail SMEs
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: <Database />, title: "Unified Inventory", desc: "Real-time stock visibility across all stores and warehouses." },
                                { icon: <Smartphone />, title: "Fast & Robust POS", desc: "Cloud-based POS that works offline and syncs automatically." },
                                { icon: <Users />, title: "360° Customer View", desc: "Track purchase history, preferences, and loyalty programs." },
                                { icon: <RefreshCw />, title: "Automated Replenishment", desc: "Smart reordering rules to prevent stockouts and overstock." },
                                { icon: <BarChart3 />, title: "Financial Clarity", desc: "Integrated accounting for store-wise profitability and cash flow tracking." },
                                { icon: <Globe />, title: "Omnichannel Operations", desc: "Manage physical stores, e-commerce, and marketplaces centrally." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800">
                                        {React.cloneElement(item.icon, { className: "size-5" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-2">{item.title}</h3>
                                    <p className="text-sm text-zinc-700 font-normal leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Key Modules */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Key Modules
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: <ShoppingCart />, title: "Point of Sale (POS)", desc: "Fast checkout, offline mode, multi-payment methods, barcode integration, receipt printing." },
                                { icon: <Box />, title: "Inventory Management", desc: "Serial/batch tracking, multi-warehouse, stock transfers, barcode generation." },
                                { icon: <HeadphonesIcon />, title: "Customer Engagement & CRM", desc: "Loyalty programs, customer groups, marketing campaigns, feedback collection." },
                                { icon: <Smartphone />, title: "Orders & Fulfillment", desc: "E-commerce integration (Shopify, WooCommerce), order tracking, returns & refunds management." },
                                { icon: <Store />, title: "Multi-Store Management", desc: "Centralized pricing, promotions, and stock visibility across retail chains." },
                                { icon: <CreditCard />, title: "Finance & Accounting", desc: "Automated store invoicing, tax compliance (GST), expense tracking, profit & loss analysis." }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-left flex flex-col hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800">
                                        {React.cloneElement(mod.icon, { className: "size-5" })}
                                    </div>
                                    <h3 className="text-base font-semibold mb-3 text-[#00477b]">{mod.title}</h3>
                                    <ul className="space-y-2 mt-auto">
                                        <li className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed font-normal">
                                            <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                <div className="size-1 bg-zinc-600 rounded-full"></div>
                                            </div>
                                            <span>{mod.desc}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Implementation Process */}
                <section className="py-24 text-center overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-6">
                            Implementation Process
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-16 uppercase tracking-widest">
                            Future-Ready Roadmap
                        </p>

                        <div className="relative max-w-[90rem] mx-auto py-10">
                            {/* Sleek Horizontal Line */}
                            <div className="hidden md:block absolute top-[50%] left-0 w-full h-1 bg-white/60 z-0 backdrop-blur-md"></div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8 relative z-10">
                                {[
                                    { phase: "Phase 1", title: "Retail Operations Audit", desc: "Requirement analysis and gap identification.", icon: <Search className="size-6" /> },
                                    { phase: "Phase 2", title: "System Configuration", desc: "Setup pricing, taxes, stock locations, and POS.", icon: <Settings className="size-6" />, offset: true },
                                    { phase: "Phase 3", title: "Data Migration", desc: "Import item masters, barcodes, opening stock.", icon: <Database className="size-6" /> },
                                    { phase: "Phase 4", title: "Training & Pilot", desc: "Store staff training on POS, pilot launch.", icon: <Users className="size-6" />, offset: true },
                                    { phase: "Phase 5", title: "Go-Live & Support", desc: "Complete rollout and ongoing support.", icon: <Rocket className="size-6" /> }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center group">
                                        <div className={cn(
                                            "w-full mb-6 md:mb-0 transition-transform duration-300 group-hover:-translate-y-1",
                                            step.offset ? "md:order-3 md:mt-12" : "md:mb-12"
                                        )}>
                                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm flex flex-col justify-center text-center hover:bg-white/60 transition-all">
                                                <h5 className="font-semibold text-[#00477b] text-[9px] uppercase tracking-wider mb-2">{step.phase}</h5>
                                                <h4 className="font-semibold text-[#00477b] text-sm mb-2 leading-tight">{step.title}</h4>
                                                <p className="text-[11px] text-zinc-700 font-normal leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "size-12 rounded-full bg-white shadow-sm flex items-center justify-center relative z-10 mx-auto text-zinc-800 transition-all duration-300 group-hover:scale-110",
                                            step.offset ? "md:order-2" : ""
                                        )}>
                                            {React.cloneElement(step.icon, { className: "size-5" })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Retail Formats */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-6">
                            Retail Formats
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mb-12">
                            Tailored for Various Retail Types
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { bold: "Apparel & Footwear", text: "Size/Color matrix, seasonal collections, discount pricing." },
                                { bold: "Electronics & Appliances", text: "Serial number tracking, warranty management." },
                                { bold: "Supermarkets & Grocery", text: "Fast checkout, barcode scanning, perishable goods tracking." },
                                { bold: "Pharmacies / Healthcare", text: "Batch/expiry tracking, prescription management." },
                                { bold: "Boutiques & Specialty Stores", text: "Customer profiles, loyalty programs, bespoke orders." },
                                { bold: "Furniture & Home", text: "Showroom inventory, catalog pricing, delivery tracking." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all text-left group flex flex-col items-center justify-center text-center">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 text-zinc-800 shadow-sm">
                                        <CheckCircle className="size-5" />
                                    </div>
                                    <h3 className="font-semibold text-[#00477b] text-base mb-2">{item.bold}</h3>
                                    <p className="text-sm text-zinc-700 font-normal leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Benefits */}
                <section className="py-24 text-zinc-900">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-4xl sm:text-5xl font-normal text-center mb-16 text-[#00477b]">
                            Benefits
                        </h2>

                        <div className="space-y-6 max-w-4xl mx-auto">
                            {/* Row 1 */}
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-center">
                                <h3 className="text-base font-semibold mb-4 text-[#00477b]">Operational Efficiency</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 sm:divide-x divide-zinc-300">
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">20% faster checkouts</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">30% time saved on admin</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">15% reduction in errors</p></div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-center">
                                <h3 className="text-base font-semibold mb-4 text-[#00477b]">Customer Experience</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 sm:divide-x divide-zinc-300">
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">360° customer view</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">personalized loyalty programs</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">omnichannel returns</p></div>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-center">
                                <h3 className="text-base font-semibold mb-4 text-[#00477b]">Financial Control</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 sm:divide-x divide-zinc-300">
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">automated tax compliance</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">store-wise profitability</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">real-time cash flow visibility</p></div>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-center">
                                <h3 className="text-base font-semibold mb-4 text-[#00477b]">Business Growth</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 sm:divide-x divide-zinc-300">
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">scalable multi-store setup</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">centralized operations</p></div>
                                    <div className="px-2"><p className="text-xs font-medium text-zinc-700">data-driven insights</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Contact Form */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#00477b] mb-2">
                                    Tell Us About Your Retail Business
                                </h2>
                            </div>

                            <form className="space-y-5">
                                <div className="space-y-1.5">
                                    <Label htmlFor="fullName" className="text-xs font-medium text-zinc-800">Full Name</Label>
                                    <Input id="fullName" placeholder="Enter your full name" className="h-10 rounded-lg bg-white/20 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-500 focus-visible:ring-zinc-400 focus-visible:bg-white" />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="email" className="text-xs font-medium text-zinc-800">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-10 rounded-lg bg-white/20 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-500 focus-visible:ring-zinc-400 focus-visible:bg-white" />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="phone" className="text-xs font-medium text-zinc-800">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-10 rounded-lg bg-white/20 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-500 focus-visible:ring-zinc-400 focus-visible:bg-white" />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="storeName" className="text-xs font-medium text-zinc-800">Store / Business Name</Label>
                                    <Input id="storeName" placeholder="Enter your business name" className="h-10 rounded-lg bg-white/20 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-500 focus-visible:ring-zinc-400 focus-visible:bg-white" />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="numStores" className="text-xs font-medium text-zinc-800">Number of Stores</Label>
                                    <select id="numStores" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Select Option</option>
                                        <option>1</option>
                                        <option>2-5</option>
                                        <option>6-10</option>
                                        <option>11-50</option>
                                        <option>50+</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="retailType" className="text-xs font-medium text-zinc-800">Retail Type</Label>
                                    <select id="retailType" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Select Option</option>
                                        <option>Apparel & Footwear</option>
                                        <option>Electronics</option>
                                        <option>Grocery & Supermarket</option>
                                        <option>Pharmacy</option>
                                        <option>Furniture / Home Decor</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5 pt-1">
                                    <Label htmlFor="challenges" className="text-xs font-medium text-zinc-800">Current Challenges</Label>
                                    <textarea id="challenges" rows={3} placeholder="Tell us about the challenges you are facing..." className="w-full rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white"></textarea>
                                </div>

                                <div className="space-y-1.5 pt-1">
                                    <Label htmlFor="contactMethod" className="text-xs font-medium text-zinc-800">Preferred Contact Method</Label>
                                    <select id="contactMethod" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Choose an option</option>
                                        <option>Email</option>
                                        <option>Phone Call</option>
                                    </select>
                                </div>

                                <div className="pt-6 text-center">
                                    <Button className="bg-[#00477b] text-white hover:bg-[#00335e] px-8 h-12 text-sm font-semibold w-full sm:w-auto shadow-md rounded-xl transition-all">
                                        Request Free Retail Assessment
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* 9. Why Choose Gnosys Digital */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-5">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-12">
                            Why Businesses Choose Gnosys Digital
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                "Deep Retail ERP Implementation Experience",
                                "Focus on Usability and Quick Adoption",
                                "End-to-End System Integration Capabilities",
                                "Responsive Local Support and Maintenance"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <p className="text-base font-medium text-zinc-900 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. Special Offer */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-12">
                            Special Offer
                        </h2>

                        <div className="flex flex-col md:flex-row bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm overflow-hidden max-w-4xl mx-auto">
                            <div className="md:w-1/3 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/60">
                                <h3 className="text-sm font-medium text-[#00477b] mb-1">Starts At</h3>
                                <p className="text-3xl font-bold text-zinc-900">₹85,000</p>
                            </div>
                            <div className="md:w-2/3 p-8 text-left">
                                <p className="font-semibold text-zinc-900 text-xs mb-1 uppercase tracking-widest">
                                    Retail Standard ERP Package
                                </p>
                                <p className="font-normal text-zinc-700 text-xs mb-5">
                                    Ideal for 1-5 store setups
                                </p>

                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-zinc-800 font-normal">
                                        <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0 text-zinc-800">
                                            <CheckCircle className="size-3" />
                                        </div>
                                        <span className="font-medium text-zinc-900">Core POS, Inventory, and Accounts modules</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-800 font-normal">
                                        <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0 text-zinc-800">
                                            <CheckCircle className="size-3" />
                                        </div>
                                        <span><span className="font-medium text-zinc-900">Unlimited SKUs & Transactions</span> (no per-transaction fees!)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-800 font-normal">
                                        <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0 text-zinc-800">
                                            <CheckCircle className="size-3" />
                                        </div>
                                        <span className="text-zinc-700">Standard data import and POS hardware integration support</span>
                                    </li>
                                </ul>

                                <div className="mt-6">
                                    <Button className="bg-[#00477b] text-white hover:bg-[#00335e] h-10 px-6 text-sm font-medium shadow-sm rounded-xl transition-all">
                                        Claim This Offer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> {/* End Main Content Wrapper */}

        </MainLayout>
    );
}
