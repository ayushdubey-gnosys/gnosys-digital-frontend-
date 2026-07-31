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
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh] bg-[#020817]">
                <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
                    {/* Simulated Candlestick/Data Chart Background */}
                    <div className="absolute inset-0 flex items-end justify-between px-10 pb-10 opacity-30">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center justify-end h-full">
                                <div className={`w-1 bg-teal-500/50 h-${Math.floor(Math.random() * 20) + 10}`}></div>
                                <div className={`w-4 bg-teal-500 rounded-sm h-${Math.floor(Math.random() * 40) + 20}`}></div>
                                <div className={`w-1 bg-teal-500/50 h-${Math.floor(Math.random() * 20) + 10}`}></div>
                            </div>
                        ))}
                    </div>
                    {/* Simulated Globe Overlay */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] rounded-full border border-blue-500/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-[#020817]/80"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-tight drop-shadow-md">
                        ERPNext For Retail SMEs
                    </h1>
                    
                    <div className="flex flex-wrap justify-center gap-8 mb-10 text-white font-bold text-sm sm:text-base">
                        <div className="flex flex-col items-center gap-3">
                            <Store className="size-8 text-teal-400" />
                            <span>Run Better Stores</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Globe className="size-8 text-teal-400" />
                            <span>Sell Anywhere</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ArrowUpRight className="size-8 text-teal-400" />
                            <span>Grow Faster</span>
                        </div>
                    </div>

                    <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed font-medium mb-12 max-w-2xl mx-auto drop-shadow-sm">
                        A single platform to manage inventory, sales, customers, and finance for retail businesses.
                    </p>
                    <Button className="bg-white text-[#0f172a] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Request Free Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Retail Challenges */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
                        Retail Challenges
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16">
                        Common hurdles in retail operations.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Disconnected Systems", desc: "Silos between online and offline channels leading to data mismatch." },
                            { title: "Stock Out / Overstock", desc: "Poor inventory visibility causing lost sales or tied-up capital." },
                            { title: "Manual Processes & Errors", desc: "High reliance on manual data entry for pricing and promotions." },
                            { title: "Poor Data & Customer Understanding", desc: "Lack of insights into customer buying behavior and lifetime value." },
                            { title: "Shrinkage & Pilferage", desc: "Inadequate controls leading to inventory losses." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-blue-100 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                <h3 className="text-sm font-bold text-[#1e3a8a] mb-3 leading-tight">{item.title}</h3>
                                <p className="text-xs text-zinc-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ERPNext Retail Solutions */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                        ERPNext Retail Solutions
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16">
                        How ERPNext solves for Retail SMEs
                    </p>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Unified Inventory", desc: "Real-time stock visibility across all stores and warehouses." },
                            { title: "Fast & Robust POS", desc: "Cloud-based POS that works offline and syncs automatically." },
                            { title: "360° Customer View", desc: "Track purchase history, preferences, and loyalty programs." },
                            { title: "Automated Replenishment", desc: "Smart reordering rules to prevent stockouts and overstock." },
                            { title: "Financial Clarity", desc: "Integrated accounting for store-wise profitability and cash flow tracking." },
                            { title: "Omnichannel Operations", desc: "Manage physical stores, e-commerce, and marketplaces centrally." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-blue-200 rounded-sm p-8 shadow-sm hover:border-[#3b82f6] transition-colors flex flex-col items-center text-center">
                                <h3 className="text-base font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 4. Key Modules */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#0f172a] mb-16">
                        Key Modules
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "A", title: "Point of Sale (POS)", desc: "Fast checkout, offline mode, multi-payment methods, barcode integration, receipt printing." },
                            { icon: "B", title: "Inventory Management", desc: "Serial/batch tracking, multi-warehouse, stock transfers, barcode generation." },
                            { icon: "C", title: "Customer Engagement & CRM", desc: "Loyalty programs, customer groups, marketing campaigns, feedback collection." },
                            { icon: "D", title: "Orders & Fulfillment", desc: "E-commerce integration (Shopify, WooCommerce), order tracking, returns & refunds management." },
                            { icon: "E", title: "Multi-Store Management", desc: "Centralized pricing, promotions, and stock visibility across retail chains." },
                            { icon: "F", title: "Finance & Accounting", desc: "Automated store invoicing, tax compliance (GST), expense tracking, profit & loss analysis." }
                        ].map((mod, i) => (
                            <div key={i} className="bg-[#1e3a8a] border-t-4 border-[#60a5fa] rounded-sm p-8 shadow-md text-left text-white flex flex-col">
                                <div className="size-8 rounded-full border-2 border-[#93c5fd] flex items-center justify-center text-[#93c5fd] font-bold text-sm mb-6 shrink-0">
                                    {mod.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4">{mod.title}</h3>
                                <ul className="space-y-2 mt-auto">
                                    <li className="flex items-start gap-2 text-sm text-blue-50/90 leading-relaxed">
                                        <div className="bg-white/20 rounded-full p-0.5 mt-1 shrink-0">
                                            <div className="size-1.5 bg-white rounded-full"></div>
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
            <section className="py-24 bg-[#f8fafc] text-center overflow-hidden border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                        Implementation Process
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16 uppercase tracking-widest text-[#0284c7]">
                        Future-Ready Roadmap
                    </p>
                    
                    {/* Custom Timeline Layout */}
                    <div className="relative max-w-5xl mx-auto py-10">
                        {/* Horizontal Line */}
                        <div className="hidden md:block absolute top-[50%] left-0 w-full h-4 bg-zinc-400 rounded-full border-t-2 border-dashed border-zinc-600 z-0"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-24">
                                    <h5 className="font-bold text-[#0284c7] text-[10px] uppercase tracking-wider mb-1">Phase 1</h5>
                                    <h4 className="font-bold text-[#1e3a8a] text-xs mb-1">Retail Operations Audit</h4>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Requirement analysis and gap identification.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#1e40af] border-4 border-[#f8fafc] shadow-md flex items-center justify-center text-white relative z-10 mx-auto outline outline-4 outline-zinc-400">
                                    <Search className="size-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-24">
                                    <h5 className="font-bold text-[#0284c7] text-[10px] uppercase tracking-wider mb-1">Phase 2</h5>
                                    <h4 className="font-bold text-[#1e3a8a] text-xs mb-1">System Configuration</h4>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Setup pricing, taxes, stock locations, and POS profiles.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#4338ca] border-4 border-[#f8fafc] shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2 outline outline-4 outline-zinc-400">
                                    <Settings className="size-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-24">
                                    <h5 className="font-bold text-[#0284c7] text-[10px] uppercase tracking-wider mb-1">Phase 3</h5>
                                    <h4 className="font-bold text-[#1e3a8a] text-xs mb-1">Data Migration</h4>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Import item masters, barcodes, opening stock.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0369a1] border-4 border-[#f8fafc] shadow-md flex items-center justify-center text-white relative z-10 mx-auto outline outline-4 outline-zinc-400">
                                    <Database className="size-6" />
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-24">
                                    <h5 className="font-bold text-[#0284c7] text-[10px] uppercase tracking-wider mb-1">Phase 4</h5>
                                    <h4 className="font-bold text-[#1e3a8a] text-xs mb-1">Training & Pilot</h4>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Store staff training on POS, pilot launch at one location.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#059669] border-4 border-[#f8fafc] shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2 outline outline-4 outline-zinc-400">
                                    <Users className="size-6" />
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-24">
                                    <h5 className="font-bold text-[#0284c7] text-[10px] uppercase tracking-wider mb-1">Phase 5</h5>
                                    <h4 className="font-bold text-[#1e3a8a] text-xs mb-1">Go-Live & Support</h4>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Complete rollout and ongoing maintenance support.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0f766e] border-4 border-[#f8fafc] shadow-md flex items-center justify-center text-white relative z-10 mx-auto outline outline-4 outline-zinc-400">
                                    <Rocket className="size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Retail Formats */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                        Retail Formats
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-12">
                        Tailored for Various Retail Types
                    </p>
                    
                    <div className="bg-white p-10 rounded-sm shadow-md border border-[#e2e8f0] text-left">
                        <ul className="space-y-4">
                            {[
                                { bold: "Apparel & Footwear:", text: "Size/Color matrix, seasonal collections, discount pricing." },
                                { bold: "Electronics & Appliances:", text: "Serial number tracking, warranty management." },
                                { bold: "Supermarkets & Grocery:", text: "Fast checkout, barcode scanning, perishable goods tracking." },
                                { bold: "Pharmacies / Healthcare:", text: "Batch/expiry tracking, prescription management." },
                                { bold: "Boutiques & Specialty Stores:", text: "Customer profiles, loyalty programs, bespoke orders." },
                                { bold: "Furniture & Home:", text: "Showroom inventory, catalog pricing, delivery tracking." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-700 font-medium">
                                    <div className="bg-[#eff6ff] rounded-sm p-1 mt-0.5 shrink-0 text-[#2563eb]">
                                        <CheckCircle className="size-4" />
                                    </div>
                                    <span><span className="font-bold text-[#1e3a8a]">{item.bold}</span> {item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 7. Benefits */}
            <section className="py-24 bg-[#4b4b4b] text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Benefits
                    </h2>
                    
                    <div className="space-y-12 max-w-4xl mx-auto">
                        {/* Row 1 */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-zinc-200">Operational Efficiency</h3>
                            <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                                <div className="text-center px-4"><p className="text-sm font-bold">20% faster checkouts</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">30% time saved on admin</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">15% reduction in errors</p></div>
                            </div>
                        </div>
                        
                        {/* Row 2 */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-zinc-200">Customer Experience</h3>
                            <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                                <div className="text-center px-4"><p className="text-sm font-bold">360° customer view</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">personalized loyalty programs</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">omnichannel returns</p></div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-zinc-200">Financial Control</h3>
                            <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                                <div className="text-center px-4"><p className="text-sm font-bold">automated tax compliance</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">store-wise profitability</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">real-time cash flow visibility</p></div>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-zinc-200">Business Growth</h3>
                            <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                                <div className="text-center px-4"><p className="text-sm font-bold">scalable multi-store setup</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">centralized operations</p></div>
                                <div className="text-center px-4"><p className="text-sm font-bold">data-driven insights</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Contact Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="border border-[#e0eaf5] rounded-sm p-8 md:p-12 shadow-xl shadow-blue-900/5">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">
                                Tell Us About Your Retail Business
                            </h2>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-sm border-gray-300" />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                <Input id="phone" placeholder="Enter your phone number" className="h-11 rounded-sm border-gray-300" />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="storeName" className="text-xs font-bold text-zinc-700">Store / Business Name</Label>
                                <Input id="storeName" placeholder="Enter your business name" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="numStores" className="text-xs font-bold text-zinc-700">Number of Stores</Label>
                                <select id="numStores" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Select Option</option>
                                    <option>1</option>
                                    <option>2-5</option>
                                    <option>6-10</option>
                                    <option>11-50</option>
                                    <option>50+</option>
                                </select>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="retailType" className="text-xs font-bold text-zinc-700">Retail Type</Label>
                                <select id="retailType" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Select Option</option>
                                    <option>Apparel & Footwear</option>
                                    <option>Electronics</option>
                                    <option>Grocery & Supermarket</option>
                                    <option>Pharmacy</option>
                                    <option>Furniture / Home Decor</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2 pt-2">
                                <Label htmlFor="challenges" className="text-xs font-bold text-zinc-700">Current Challenges</Label>
                                <textarea id="challenges" rows={4} placeholder="Tell us about the challenges you are facing..." className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300"></textarea>
                            </div>
                            
                            <div className="space-y-2 pt-2">
                                <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700">Preferred Contact Method</Label>
                                <select id="contactMethod" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Choose an option</option>
                                    <option>Email</option>
                                    <option>Phone Call</option>
                                </select>
                            </div>
                            
                            <div className="pt-6 text-center">
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-12 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Free Retail Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 9. Why Choose Gnosys Digital */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                        Why Choose Gnosys Digital
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Deep Retail ERP Implementation Experience",
                            "Focus on Usability and Quick Adoption",
                            "End-to-End System Integration Capabilities",
                            "Responsive Local Support and Maintenance"
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] p-6 rounded-sm shadow-sm flex items-center justify-center min-h-[100px]">
                                <p className="text-sm font-bold text-[#1e3a8a]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Special Offer */}
            <section className="py-24 bg-white text-center border-t border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                        Special Offer
                    </h2>
                    
                    <div className="flex flex-col md:flex-row border border-[#e0eaf5] rounded-sm shadow-lg overflow-hidden max-w-4xl mx-auto">
                        <div className="md:w-1/3 bg-[#f8fafc] p-10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#e0eaf5]">
                            <h3 className="text-lg font-bold text-zinc-600 mb-2">Starts At</h3>
                            <p className="text-4xl font-bold text-[#1e3a8a]">₹85,000</p>
                        </div>
                        <div className="md:w-2/3 p-10 text-left bg-white">
                            <p className="font-bold text-[#1e3a8a] text-sm mb-1 uppercase tracking-widest">
                                Retail Standard ERP Package
                            </p>
                            <p className="font-bold text-[#0284c7] text-xs mb-6">
                                Ideal for 1-5 store setups
                            </p>
                            
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <div className="bg-[#eff6ff] rounded-sm p-1 mt-0.5 shrink-0 text-[#2563eb]">
                                        <CheckCircle className="size-3" />
                                    </div>
                                    <span className="font-bold">Core POS, Inventory, and Accounts modules</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <div className="bg-[#eff6ff] rounded-sm p-1 mt-0.5 shrink-0 text-[#2563eb]">
                                        <CheckCircle className="size-3" />
                                    </div>
                                    <span><span className="font-bold">Unlimited SKUs & Transactions</span> (no per-transaction fees!)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <div className="bg-[#eff6ff] rounded-sm p-1 mt-0.5 shrink-0 text-[#2563eb]">
                                        <CheckCircle className="size-3" />
                                    </div>
                                    <span>Standard data import and POS hardware integration support</span>
                                </li>
                            </ul>
                            
                            <div className="mt-8">
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-10 px-6 font-bold shadow-sm rounded-sm">
                                    Claim This Offer
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
