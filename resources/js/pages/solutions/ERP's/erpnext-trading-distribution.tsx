import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    CheckCircle, ShoppingCart, Box, Truck, CreditCard, 
    TrendingUp, FileText, ClipboardList, Clock, CheckSquare,
    Search, Server, PlayCircle, Settings, Monitor, Headset,
    LayoutDashboard, MapPin
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextTradingDistribution() {
    return (
        <MainLayout>
            <Head title="ERPNext For Trading & Distribution SMEs" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] "
                style={{
                    backgroundImage: "url('/assets/erp-treading.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-[#0a2540]/20 z-0"></div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
                        Streamline Your Wholesale, Retail & Distribution Operations
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Manage inventory, orders, logistics and accounting seamlessly from one single platform. Accelerate business growth and customer satisfaction.
                    </p>
                    <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-xl px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Get A Free Consultation
                    </Button>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div className="bg-transparent">

                {/* 2. Why Trading Businesses Choose Gnosys Digital */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <div className="inline-block bg-white/60 backdrop-blur-md border border-white/80 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-widest">WHY GNOSYS</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Why Trading Businesses Choose Gnosys Digital
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                            {[
                                { icon: <Box />, title: "Stock Uncertainty", desc: "Real-time tracking across multiple warehouses." },
                                { icon: <Settings />, title: "Manual Orders", desc: "Automated order to fulfillment workflows." },
                                { icon: <Truck />, title: "Logistics Delays", desc: "Optimized dispatch and delivery tracking." },
                                { icon: <CreditCard />, title: "Payment Delays", desc: "Integrated invoicing and payment gateways." },
                                { icon: <TrendingUp />, title: "Profitability", desc: "Accurate landed cost calculations." }
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

                {/* 3. How ERPNext Transforms Your Business */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            How ERPNext Transforms Your Business
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                "End-to-end Inventory visibility",
                                "Automated Order Processing",
                                "Seamless Logistics & Delivery Tracking",
                                "Integrated Accounting & GST Compliance",
                                "Multi-Warehouse, Multi-Branch Support",
                                "Real-time Analytics & Dashboards"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 text-left group flex flex-col items-center text-center justify-center">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 text-zinc-800 shadow-sm">
                                        <CheckCircle className="size-5" />
                                    </div>
                                    <h3 className="font-medium text-[#00477b] text-base">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 4. Key ERPNext Modules For Trading & Distribution */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Key ERPNext Modules
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { 
                                    icon: <Box />, 
                                    title: "Inventory & Warehousing", 
                                    items: ["Multi-level item trees", "Tracking by serial/batch", "Stock transfers", "Automated re-order levels", "Stock audits"] 
                                },
                                { 
                                    icon: <ShoppingCart />, 
                                    title: "Sales & Order Processing", 
                                    items: ["Quotation to invoice automation", "B2B/B2C pricing rules", "Customer portal", "Sales commissions"] 
                                },
                                { 
                                    icon: <Truck />, 
                                    title: "Logistics & Delivery", 
                                    items: ["Delivery notes", "Integration with 3PL providers", "Fleet tracking & dispatch schedules", "Route planning and vehicle tracking"] 
                                },
                                { 
                                    icon: <FileText />, 
                                    title: "Finance & Accounting", 
                                    items: ["GST/Tax compliance", "Accounts Payable/Receivable", "Multi-currency", "Profitability by item/category"] 
                                }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-left flex flex-col hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800">
                                        {React.cloneElement(mod.icon, { className: "size-5" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-4">{mod.title}</h3>
                                    <ul className="space-y-2 mt-auto">
                                        {mod.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-xs text-zinc-700 font-normal">
                                                <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0">
                                                    <div className="size-1 bg-zinc-600 rounded-full"></div>
                                                </div>
                                                <span className="leading-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Implementation Made Simple */}
                <section className="py-24 text-center overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Implementation Made Simple
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { step: "1", title: "Discovery & Configuration", desc: ["Process mapping, setup taxes, items, and warehouses.", "Custom workflows and dashboards."] },
                                { step: "2", title: "Training & Go-Live", desc: ["Role-based training for sales, inventory, and finance teams.", "Master data upload and system launch."] },
                                { step: "3", title: "Ongoing Support", desc: ["Post go-live stabilization.", "Continuous process refinement and training."] }
                            ].map((phase, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 justify-center">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800 font-bold text-lg">
                                        {phase.step}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-4">{phase.title}</h3>
                                    <ul className="space-y-2 mt-auto text-left w-full">
                                        {phase.desc.map((pt, j) => (
                                            <li key={j} className="flex items-start gap-2 text-xs text-zinc-700 font-normal leading-relaxed">
                                                <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                    <div className="size-1 bg-zinc-600 rounded-full"></div>
                                                </div>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Success Stories */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Success Stories
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                <h3 className="text-xl font-semibold text-[#00477b] mb-1">FMCG Distributor</h3>
                                <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Kolkata</p>
                                <p className="text-sm text-zinc-700 leading-relaxed font-normal">Automated 500+ daily orders, reduced stock-outs by 40%, and improved delivery time by 2 days.</p>
                            </div>
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                <h3 className="text-xl font-semibold text-[#00477b] mb-1">Pharma Wholesaler</h3>
                                <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Mumbai</p>
                                <p className="text-sm text-zinc-700 leading-relaxed font-normal">Achieved 100% batch traceability and increased order fulfillment rate to 99%.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Key Benefits You'll Experience */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Key Benefits You'll Experience
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: "Operational Efficiency", items: ["30% faster order processing", "50% less manual data entry", "99% inventory accuracy"] },
                                { title: "Financial Control", items: ["20% improvement in cash flow", "Automated GST filing & returns", "Real-time tracking of unpaid invoices"] },
                                { title: "Business Growth", items: ["Seamless scaling across new branches", "Better vendor negotiations", "Scalable platform ready for e-commerce"] }
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-center flex flex-col items-center hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 justify-center">
                                    <h3 className="text-lg font-semibold text-[#00477b] mb-4">{benefit.title}</h3>
                                    <ul className="space-y-3 w-full text-left mt-auto">
                                        {benefit.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-zinc-700 font-normal">
                                                <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                    <div className="size-1 bg-zinc-600 rounded-full"></div>
                                                </div>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Contact Form */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#00477b] mb-3">
                                    Tell Us About Your Business
                                </h2>
                                <p className="text-sm text-zinc-600 font-normal">Let us understand your operations and recommend the best ERP solution.</p>
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
                                    <Label htmlFor="companyName" className="text-xs font-medium text-zinc-800">Company Name</Label>
                                    <Input id="companyName" placeholder="Enter your company name" className="h-10 rounded-lg bg-white/20 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-500 focus-visible:ring-zinc-400 focus-visible:bg-white" />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="industryType" className="text-xs font-medium text-zinc-800">Industry / Distribution Type</Label>
                                    <select id="industryType" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Select Option</option>
                                        <option>FMCG</option>
                                        <option>Electronics</option>
                                        <option>Pharmaceuticals</option>
                                        <option>Apparel & Textiles</option>
                                        <option>Industrial Goods</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5 pt-1">
                                    <Label htmlFor="challenges" className="text-xs font-medium text-zinc-800">Current Challenges / Needs</Label>
                                    <textarea id="challenges" rows={3} placeholder="Please describe the challenges you are facing..." className="w-full rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white"></textarea>
                                </div>
                                
                                <div className="space-y-1.5 pt-1">
                                    <Label htmlFor="contactMethod" className="text-xs font-medium text-zinc-800">Preferred Contact Method</Label>
                                    <select id="contactMethod" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Choose an option</option>
                                        <option>Email</option>
                                        <option>Phone Call</option>
                                        <option>WhatsApp</option>
                                    </select>
                                </div>
                                
                                <div className="pt-6 text-center">
                                    <Button className="bg-[#00477b] text-white hover:bg-[#00335e] px-8 h-12 text-sm font-semibold w-full sm:w-auto shadow-md rounded-xl transition-all">
                                        Request Free Demo
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* 9. Special Offer */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-12">
                            Special Offer
                        </h2>
                        
                        <div className="flex flex-col md:flex-row bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm overflow-hidden max-w-4xl mx-auto">
                            <div className="md:w-1/3 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/60">
                                <h3 className="text-sm font-medium text-[#00477b] mb-1">Starts At</h3>
                                <p className="text-3xl font-bold text-zinc-900">₹75,000</p>
                            </div>
                            <div className="md:w-2/3 p-8 text-left">
                                <p className="font-medium text-zinc-900 text-sm leading-relaxed mb-5">
                                    Trading & Distribution ERP Package - Includes multi-location inventory, order automation, accounting, GST compliance, and standard reports/dashboards.
                                </p>
                                
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-zinc-800 font-normal">
                                        <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0 text-zinc-800">
                                            <CheckCircle className="size-3" />
                                        </div>
                                        <span className="font-medium text-zinc-900">Up to 5 users (scalable on demand)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-800 font-normal">
                                        <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0 text-zinc-800">
                                            <CheckCircle className="size-3" />
                                        </div>
                                        <span className="font-medium text-zinc-900">Standard 2-month support</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-800 font-normal">
                                        <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0 text-zinc-800">
                                            <CheckCircle className="size-3" />
                                        </div>
                                        <span className="text-zinc-700">Vendor portal & app support</span>
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

                {/* 10. Common Trading Challenges */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-12">
                            Common Trading Challenges
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                "Disconnected systems for sales, inventory, and accounts",
                                "Lack of real-time inventory visibility & stockouts",
                                "Complex pricing margins, and discount structures",
                                "Inefficient dispatch, tracking and delivery execution"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm flex items-center justify-center text-center hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <p className="text-base font-medium text-zinc-900 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
            </div> {/* End Main Content Wrapper */}
            
        </MainLayout>
    );
}
