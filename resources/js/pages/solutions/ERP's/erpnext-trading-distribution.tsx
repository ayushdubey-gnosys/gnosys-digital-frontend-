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

export default function ErpnextTradingDistribution() {
    return (
        <MainLayout>
            <Head title="ERPNext For Trading & Distribution SMEs" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh] bg-[#022c54]">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute inset-0 bg-[#022c54]/70 mix-blend-multiply z-10"></div>
                    {/* Placeholder for the shopping cart/warehouse image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#021f3d] via-[#022c54] to-[#021f3d]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
                        Streamline Your Wholesale, Retail & Distribution Operations
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Manage inventory, orders, logistics and accounting seamlessly from one single platform. Accelerate business growth and customer satisfaction.
                    </p>
                    <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Get A Free Consultation
                    </Button>
                </div>
            </section>

            {/* 2. Why Trading Businesses Choose Gnosys Digital */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Why Trading Businesses Choose Gnosys Digital
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <Box className="size-6 text-[#2563eb]" />, title: "Stock Uncertainty", desc: "Real-time tracking across multiple warehouses." },
                            { icon: <Settings className="size-6 text-[#2563eb]" />, title: "Manual Orders", desc: "Automated order to fulfillment workflows." },
                            { icon: <Truck className="size-6 text-[#2563eb]" />, title: "Logistics Delays", desc: "Optimized dispatch and delivery tracking." },
                            { icon: <CreditCard className="size-6 text-[#2563eb]" />, title: "Payment Delays", desc: "Integrated invoicing and payment gateways." },
                            { icon: <TrendingUp className="size-6 text-[#2563eb]" />, title: "Profitability", desc: "Accurate landed cost calculations." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)]">
                                <div className="mb-4 bg-blue-50 p-3 rounded-full">{item.icon}</div>
                                <h3 className="text-sm font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
                                <p className="text-xs text-zinc-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. How ERPNext Transforms Your Business */}
            <section className="py-24 bg-white text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        How ERPNext Transforms Your Business
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {[
                            "End-to-end Inventory visibility",
                            "Automated Order Processing",
                            "Seamless Logistics & Delivery Tracking",
                            "Integrated Accounting & GST Compliance",
                            "Multi-Warehouse, Multi-Branch Support",
                            "Real-time Analytics & Dashboards"
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                    <CheckCircle className="size-6 text-[#2563eb]" />
                                </div>
                                <p className="text-sm font-bold text-zinc-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 4. Key ERPNext Modules For Trading & Distribution */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Key ERPNext Modules For Trading & Distribution
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                icon: <Box className="size-8 text-[#0284c7]" />, 
                                title: "Inventory & Warehousing", 
                                items: ["Multi-level item trees", "Tracking by serial/batch", "Stock transfers", "Automated re-order levels", "Stock audits"] 
                            },
                            { 
                                icon: <ShoppingCart className="size-8 text-[#0284c7]" />, 
                                title: "Sales & Order Processing", 
                                items: ["Quotation to invoice automation", "B2B/B2C pricing rules", "Customer portal", "Sales commissions"] 
                            },
                            { 
                                icon: <Truck className="size-8 text-[#0284c7]" />, 
                                title: "Logistics & Delivery", 
                                items: ["Delivery notes", "Integration with 3PL providers", "Fleet tracking & dispatch schedules", "Route planning and vehicle tracking"] 
                            },
                            { 
                                icon: <FileText className="size-8 text-[#0284c7]" />, 
                                title: "Finance & Accounting", 
                                items: ["GST/Tax compliance", "Accounts Payable/Receivable", "Multi-currency", "Profitability by item/category"] 
                            }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] rounded-sm p-8 shadow-sm text-left flex flex-col hover:border-[#38bdf8] transition-colors">
                                <div className="bg-[#f0f9ff] w-fit p-3 rounded-md mb-6 border border-[#e0f2fe]">
                                    {mod.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#0369a1] mb-6">{mod.title}</h3>
                                <ul className="space-y-3 mt-auto">
                                    {mod.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                            <CheckSquare className="size-4 text-[#0ea5e9] mt-0.5 shrink-0" />
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
            <section className="py-24 bg-white text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Implementation Made Simple
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { step: "1", title: "Discovery & Configuration", desc: ["Process mapping, setup taxes, items, and warehouses.", "Custom workflows and dashboards."] },
                            { step: "2", title: "Training & Go-Live", desc: ["Role-based training for sales, inventory, and finance teams.", "Master data upload and system launch."] },
                            { step: "3", title: "Ongoing Support", desc: ["Post go-live stabilization.", "Continuous process refinement and training."] }
                        ].map((phase, i) => (
                            <div key={i} className="bg-[#023e7d] rounded-sm p-8 shadow-md text-left text-white border-t-4 border-[#60a5fa] flex flex-col">
                                <div className="size-10 rounded-full border-2 border-[#93c5fd] flex items-center justify-center text-[#93c5fd] font-bold text-lg mb-6 shrink-0">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold mb-6">{phase.title}</h3>
                                <ul className="space-y-3 mt-auto">
                                    {phase.desc.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-blue-50/90 leading-relaxed">
                                            <div className="bg-white/20 rounded-full p-0.5 mt-0.5 shrink-0">
                                                <div className="size-1.5 bg-white rounded-full"></div>
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
            <section className="py-24 bg-[#02498b] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:30px_30px]"></div>
                
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Stories
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20 text-left">
                        <div className="pb-8 md:pb-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">FMCG Distributor</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Kolkata</p>
                            <p className="text-base text-blue-50/90 leading-relaxed font-medium">Automated 500+ daily orders, reduced stock-outs by 40%, and improved delivery time by 2 days.</p>
                        </div>
                        <div className="pt-8 md:pt-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">Pharma Wholesaler</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Mumbai</p>
                            <p className="text-base text-blue-50/90 leading-relaxed font-medium">Achieved 100% batch traceability and increased order fulfillment rate to 99%.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Key Benefits You'll Experience */}
            <section className="py-24 bg-[#f8fafc] text-center border-b border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Key Benefits You'll Experience
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Operational Efficiency", items: ["30% faster order processing", "50% less manual data entry", "99% inventory accuracy"] },
                            { title: "Financial Control", items: ["20% improvement in cash flow", "Automated GST filing & returns", "Real-time tracking of unpaid invoices"] },
                            { title: "Business Growth", items: ["Seamless scaling across new branches", "Better vendor negotiations", "Scalable platform ready for e-commerce"] }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] rounded-sm p-8 shadow-sm text-left">
                                <h3 className="text-lg font-bold text-[#0369a1] mb-6 border-b border-[#e0f2fe] pb-4">{benefit.title}</h3>
                                <ul className="space-y-4">
                                    {benefit.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-700 font-medium">
                                            <CheckCircle className="size-4 text-[#0ea5e9] mt-0.5 shrink-0" />
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
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="border border-[#e0eaf5] rounded-sm p-8 md:p-12 shadow-xl shadow-blue-900/5">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#022c54] mb-2">
                                Tell Us About Your Business
                            </h2>
                            <p className="text-sm text-zinc-500 font-medium">Let us understand your operations and recommend the best ERP solution.</p>
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
                                <Label htmlFor="companyName" className="text-xs font-bold text-zinc-700">Company Name</Label>
                                <Input id="companyName" placeholder="Enter your company name" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="industryType" className="text-xs font-bold text-zinc-700">Industry / Distribution Type</Label>
                                <select id="industryType" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Select Option</option>
                                    <option>FMCG</option>
                                    <option>Electronics</option>
                                    <option>Pharmaceuticals</option>
                                    <option>Apparel & Textiles</option>
                                    <option>Industrial Goods</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2 pt-2">
                                <Label htmlFor="challenges" className="text-xs font-bold text-zinc-700">Current Challenges / Needs</Label>
                                <textarea id="challenges" rows={4} placeholder="Please describe the challenges you are facing..." className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300"></textarea>
                            </div>
                            
                            <div className="space-y-2 pt-2">
                                <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700">Preferred Contact Method</Label>
                                <select id="contactMethod" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Choose an option</option>
                                    <option>Email</option>
                                    <option>Phone Call</option>
                                    <option>WhatsApp</option>
                                </select>
                            </div>
                            
                            <div className="pt-6 text-center">
                                <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 px-12 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Free Demo
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 9. Special Offer */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        Special Offer
                    </h2>
                    
                    <div className="flex flex-col md:flex-row border border-[#bae6fd] rounded-sm shadow-lg overflow-hidden max-w-4xl mx-auto bg-white">
                        <div className="md:w-1/3 bg-white p-10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#bae6fd]">
                            <h3 className="text-lg font-bold text-zinc-600 mb-2">Starts At</h3>
                            <p className="text-4xl font-bold text-[#0369a1]">₹75,000</p>
                        </div>
                        <div className="md:w-2/3 p-10 text-left bg-[#f0f9ff]">
                            <p className="font-bold text-[#022c54] text-sm leading-relaxed mb-6">
                                Trading & Distribution ERP Package - Includes multi-location inventory, order automation, accounting, GST compliance, and standard reports/dashboards.
                            </p>
                            
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <div className="bg-white rounded-full p-0.5 mt-0.5 shrink-0 border border-[#bae6fd]">
                                        <div className="size-1.5 bg-[#0369a1] rounded-full"></div>
                                    </div>
                                    <span>Up to 5 users (scalable on demand)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <div className="bg-white rounded-full p-0.5 mt-0.5 shrink-0 border border-[#bae6fd]">
                                        <div className="size-1.5 bg-[#0369a1] rounded-full"></div>
                                    </div>
                                    <span>Standard 2-month support</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <div className="bg-white rounded-full p-0.5 mt-0.5 shrink-0 border border-[#bae6fd]">
                                        <div className="size-1.5 bg-[#0369a1] rounded-full"></div>
                                    </div>
                                    <span>Vendor portal & app support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Common Trading Challenges */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        Common Trading Challenges
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Disconnected systems for sales, inventory, and accounts",
                            "Lack of real-time inventory visibility & stockouts",
                            "Complex pricing margins, and discount structures",
                            "Inefficient dispatch, tracking and delivery execution"
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] p-6 rounded-sm shadow-sm flex items-center justify-center min-h-[120px] hover:border-[#bae6fd] transition-colors">
                                <p className="text-sm font-bold text-[#0369a1] leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
