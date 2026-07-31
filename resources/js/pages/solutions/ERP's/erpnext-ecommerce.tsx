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
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                        style={{ backgroundImage: "url('/assets/ecommerce-hero.webp')", backgroundColor: '#002a3a' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#002a3a]/90 via-[#002a3a]/80 to-[#002a3a]"></div>
                    {/* Data stream lines decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Unify Your Sales, Stock, And Accounts.
                        <br />
                        <span className="text-cyan-400">Automate Everything Else.</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
                        Stop juggling apps and spreadsheets. Get a single, intelligent system that connects your marketplaces, website, warehouse, and financials. Scale your business, not your workload.
                    </p>
                    <Button className="bg-white text-[#002a3a] hover:bg-cyan-50 rounded-full px-8 h-14 text-base font-bold shadow-xl transition-all hover:scale-105">
                        Book Your Free E-Commerce Workflow Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Growth Pains Grid */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#002a3a] mb-4">
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
                            <div key={i} className="bg-white border-2 border-cyan-50/50 hover:border-cyan-200 rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all text-center group">
                                <div className="bg-cyan-50 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                    <pain.icon className="size-8 text-[#002a3a]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#002a3a] mb-3">{pain.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">{pain.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Command Center Intro */}
            <section className="py-20 bg-slate-50/80 text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#002a3a] mb-6">
                        Your All-In-One Commerce Command Center
                    </h2>
                    <p className="text-zinc-700 text-lg mb-10 leading-relaxed">
                        ERPNext organizes chaos into process, giving you a unified backbone to run your entire business from procurement to final delivery.
                    </p>
                    <Button className="bg-[#002a3a] text-white hover:bg-[#001d29] h-12 px-8 font-bold shadow-lg">
                        Schedule An Assessment Call
                    </Button>
                </div>
            </section>

            {/* 4. Modules Built For Scale */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#002a3a] mb-14">
                        Modules Built For E-Commerce Scale
                    </h2>
                    
                    {/* Top Row - 3 Cards */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        {[
                            { num: "1", title: "Product & Catalog Master", desc: "Manage complex attributes, bundles, and variants. Centralized pricing, bulk upload, and update across all channels with ease." },
                            { num: "2", title: "Omnichannel Sales Integrations", desc: "Native connectors for Shopify, WooCommerce, Amazon, Flipkart, and Magento. Manage all orders in one centralized hub." },
                            { num: "3", title: "Intelligent Inventory & Warehouse", desc: "Multi-warehouse real-time stock visibility. Expiry tracking, serial/batch tracking, and barcode scanning operations." }
                        ].map((mod, i) => (
                            <div key={i} className="bg-[#002a3a] rounded-xl p-8 shadow-xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl -mr-4 -mt-6 group-hover:scale-110 transition-transform">
                                    {mod.num}
                                </div>
                                <div className="size-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold mb-6">
                                    {mod.num}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{mod.title}</h3>
                                <p className="text-sm text-blue-100 leading-relaxed">{mod.desc}</p>
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
                            <div key={i} className="bg-[#002a3a] rounded-xl p-8 shadow-xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-8xl -mr-4 -mt-6 group-hover:scale-110 transition-transform">
                                    {mod.num}
                                </div>
                                <div className="size-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold mb-6">
                                    {mod.num}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{mod.title}</h3>
                                <p className="text-sm text-blue-100 leading-relaxed">{mod.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Roadmap */}
            <section className="py-24 bg-slate-50 overflow-hidden border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#002a3a] mb-4">
                            6-Week E-commerce Automation Roadmap
                        </h2>
                        <p className="text-zinc-600 text-lg">Streamlined plan to automate operations, integrate channels, and empower your team.</p>
                    </div>

                    <div className="relative py-12">
                        {/* Center Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-2 bg-zinc-300 -translate-y-1/2 hidden md:block rounded-full"></div>
                        
                        {/* Timeline Points */}
                        <div className="flex flex-col md:flex-row justify-between relative z-20 gap-8 md:gap-0">
                            {[
                                { step: "Week 1-2", title: "Process Mapping", desc: "Sales channels, inventory workflows & finance mapped.", color: "bg-cyan-500", up: true },
                                { step: "Week 3", title: "System Setup", desc: "Configure users, warehouses, pricing rules, and taxes.", color: "bg-emerald-500", up: false },
                                { step: "Week 4", title: "Integrations", desc: "Connect sales channels, marketplaces, & gateways.", color: "bg-indigo-500", up: true },
                                { step: "Week 5", title: "Migration & Testing", desc: "Import past sales, inventory data; end-to-end testing.", color: "bg-emerald-500", up: false },
                                { step: "Week 6", title: "Training & Launch", desc: "Go Live with full hand-holding support and training.", color: "bg-cyan-500", up: true },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center w-full md:w-1/5 relative">
                                    {item.up ? (
                                        <div className="md:absolute bottom-full mb-4 md:mb-6 w-full flex flex-col items-center">
                                            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 mb-4 md:mb-3 w-48 z-10 relative">
                                                <div className="text-xs font-bold text-cyan-600 mb-1">{item.step}</div>
                                                <div className="text-sm font-bold text-[#002a3a] mb-2">{item.title}</div>
                                                <div className="text-xs text-zinc-500 leading-snug">{item.desc}</div>
                                                {/* Arrow down */}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-white hidden md:block"></div>
                                            </div>
                                            <div className={`size-6 rounded-full ${item.color} ring-4 ring-white shadow-md z-20`}></div>
                                        </div>
                                    ) : (
                                        <div className="md:absolute top-full mt-4 md:mt-6 w-full flex flex-col items-center">
                                            <div className={`size-6 rounded-full ${item.color} ring-4 ring-white shadow-md z-20`}></div>
                                            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 mt-4 md:mt-3 w-48 z-10 relative">
                                                {/* Arrow up */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-b-white hidden md:block"></div>
                                                <div className="text-xs font-bold text-emerald-600 mb-1">{item.step}</div>
                                                <div className="text-sm font-bold text-[#002a3a] mb-2">{item.title}</div>
                                                <div className="text-xs text-zinc-500 leading-snug">{item.desc}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Proven Results */}
            <section className="py-24 bg-[#002a3a] text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:100px_100px]"></div>
                
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Proven Results For Indian E-Commerce Brands
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="pb-8 md:pb-0 md:pr-8">
                            <h3 className="text-xl font-bold mb-6 text-cyan-400">D2C Skincare Brand<br/><span className="text-sm font-normal text-white/60">Bangalore</span></h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />
                                    <span>1.5x order processing speed without adding warehouse headcount.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />
                                    <span>Real-time stock visibility across Shopify, Amazon, and offline distributors.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />
                                    <span>99% accuracy in order fulfillment.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-8 md:pt-0 md:pl-8">
                            <h3 className="text-xl font-bold mb-6 text-cyan-400">Electronics Store<br/><span className="text-sm font-normal text-white/60">Mumbai</span></h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />
                                    <span>Unified Shopify & retail stores. 30% reduction in dead stock.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />
                                    <span>Automated GST compliance saving 40 hours/month for accounting team.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-blue-50">
                                    <CheckCircle2 className="size-5 shrink-0 text-cyan-400" />
                                    <span>Single Source of Truth established for all business data.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Contact Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#002a3a] mb-4">
                            Discover Your Automation Potential
                        </h2>
                        <p className="text-zinc-600">
                            Tell us a bit about your business, and we'll identify exactly where bottlenecks are slowing you down.
                        </p>
                    </div>
                    
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="Enter your full name" className="h-12" />
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-12" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Company Name</Label>
                                <Input id="company" placeholder="Enter your company name" className="h-12" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="businessType">What best describes you?</Label>
                                    <div className="relative">
                                        <select id="businessType" className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                            <option>Select Type...</option>
                                            <option>D2C Brand</option>
                                            <option>B2B Distributor</option>
                                            <option>Retailer (Online + Offline)</option>
                                            <option>Marketplace Seller</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="platforms">Platforms you sell on</Label>
                                    <div className="relative">
                                        <select id="platforms" className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                            <option>Select Platform...</option>
                                            <option>Shopify</option>
                                            <option>WooCommerce</option>
                                            <option>Amazon / Flipkart</option>
                                            <option>Multiple Platforms</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Monthly Order Volume</Label>
                                <div className="flex flex-wrap gap-4">
                                    {['< 500', '500 - 2000', '2000 - 5000', '5000+'].map((vol, i) => (
                                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="volume" className="size-4 text-cyan-600 focus:ring-cyan-600" />
                                            <span className="text-sm text-zinc-700">{vol}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="headache">Your Biggest Operational Headache Right Now?</Label>
                                <Textarea id="headache" placeholder="e.g., 'Inventory never matches,' 'GST filing takes days,' 'Orders get missed'" className="min-h-[120px]" />
                            </div>
                            
                            <div className="pt-4 text-center">
                                <Button className="bg-[#002a3a] text-white hover:bg-[#001d29] px-10 h-14 font-bold w-full sm:w-auto shadow-lg">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Pricing */}
            <section className="py-20 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-[#002a3a] mb-10">
                        E-Commerce ERP Package
                    </h2>
                    
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-cyan-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
                            <div className="text-2xl lg:text-3xl font-bold text-[#002a3a] mb-2">Starts At</div>
                            <div className="text-4xl lg:text-5xl font-black text-cyan-600">₹75,000</div>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-sm text-zinc-700 mb-6 font-medium">
                                Everything you need to automate workflows and scale your brand.
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-[#002a3a] mb-3 uppercase tracking-wider text-xs">Includes:</h4>
                                <ul className="space-y-2 text-sm text-zinc-600">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" /> Complete Inventory Management & Warehouse operations</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" /> Order & Shipping automation integrations</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" /> Finance, Taxes, & Accounting configuration</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" /> Training & Go-Live support</li>
                                </ul>
                            </div>
                            
                            <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                                <h4 className="font-bold text-amber-700 mb-2 uppercase tracking-wider text-xs flex items-center gap-2">
                                    Limited-time bonuses:
                                </h4>
                                <ul className="space-y-1 text-sm text-amber-800/80">
                                    <li>• Free Amazon/Flipkart connector setup</li>
                                    <li>• Free data migration from your current platform</li>
                                    <li>• 3 Months Extended Priority Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Why Partner With Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-2xl font-bold text-[#002a3a] mb-10">
                        Why Partner With Gnosys Digital?
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "50+ E-commerce implementations across India",
                            "Specialists in retail operations (B2B, B2C, D2C, Marketplaces)",
                            "Agile onboarding (Go-Live in 4-6 weeks)",
                            "Dedicated support team that understands e-commerce ops"
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 border border-gray-100 p-6 rounded-xl text-sm font-medium text-zinc-700 shadow-sm">
                                <CheckCircle2 className="size-6 text-cyan-600 mx-auto mb-4" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="py-24 bg-slate-50 text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#002a3a] mb-4">
                        Ready To Scale Without The Chaos?
                    </h2>
                    <p className="text-zinc-500 mb-12">Choose Your Next Step.</p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-lg mb-2 text-[#002a3a]">Get a tailored automation plan.</h3>
                            <Button className="mt-4 bg-[#002a3a] text-white hover:bg-[#001d29] w-full">
                                Book Free Assessment
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-lg mb-2 text-[#002a3a]">Walk through the platform with our expert.</h3>
                            <Button variant="outline" className="mt-4 border-cyan-600 text-cyan-700 hover:bg-cyan-50 w-full">
                                See Live Demo
                            </Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-lg mb-2 text-[#002a3a]">Instant clarity on your questions.</h3>
                            <Button variant="secondary" className="mt-4 bg-slate-100 text-[#002a3a] hover:bg-slate-200 w-full">
                                Talk To An Expert
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
