import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    CheckCircle, Factory, Settings, Database, Server,
    FileText, Search, ClipboardList, MapPin, Building,
    Activity, ShieldCheck, HelpCircle, ArrowRight, Cog,
    PhoneCall, FileCheck, Layers, Boxes, CircleDollarSign, Headset
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import FaqAccordion from '@/components/FaqAccordion';

export default function ErpnextManufacturing() {
    return (
        <MainLayout>
            <Head title="ERPNext Solutions for Manufacturing SMEs" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh]"
                style={{
                    backgroundImage: "url('/assets/erp-manufacturing.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-[#0a2540]/20 z-0"></div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-tight drop-shadow-md">
                        Tailored Digital Systems <br className="hidden sm:block" /> For Indian Factories
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                        Streamline production, manage supply chains, and track profitability with ERPNext tailored for the Indian manufacturing industry.
                    </p>
                    <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">Get A Free Assessment <span className="text-xl">&rarr;</span></span>
                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                    </Button>
                </div>
            </section>

            {/* Main Content Wrapper */}
            <div className="bg-transparent">

                {/* 2. Common Manufacturing Challenges */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Common Manufacturing Challenges
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: <FileText />, text: "Disconnected spreadsheets for WIP" },
                                { icon: <Boxes />, text: "No visibility on inventory stockouts" },
                                { icon: <Activity />, text: "Untracked raw material wastage" },
                                { icon: <CircleDollarSign />, text: "Inaccurate cost accounting pricing" },
                                { icon: <Server />, text: "Dependency on legacy software" },
                                { icon: <ShieldCheck />, text: "Poor & slow quality control" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800">
                                        {React.cloneElement(item.icon, { className: "size-5" })}
                                    </div>
                                    <p className="text-sm font-medium text-zinc-900">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. How ERPNext Helps */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            How ERPNext Helps
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: <Settings />, title: "Single platform from procurement to accounting" },
                                { icon: <ClipboardList />, title: "Automated Bill of Materials (BOM) & Work Orders" },
                                { icon: <Activity />, title: "Real-time Inventory & Shop Floor Tracking" },
                                { icon: <CircleDollarSign />, title: "Accurate Product Costing and Profitability" },
                                { icon: <CheckCircle />, title: "Multi-level Approval Workflows" },
                                { icon: <FileCheck />, title: "Compliance with Indian GST and E-Way Bills" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex items-center gap-4 text-left group hover:-translate-y-1 hover:bg-white/60 transition-all duration-300">
                                    <div className="bg-white rounded-full size-14 shrink-0 flex items-center justify-center shadow-sm text-zinc-800">
                                        {React.cloneElement(item.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-sm font-semibold text-[#00477b] leading-snug">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 4. Key ERPNext Modules For Manufacturers */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Key ERPNext Modules
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { 
                                    icon: <ClipboardList />, 
                                    title: "Production & Planning", 
                                    items: ["Bill of Materials (BOM)", "Capacity Planning", "Work Order Management", "Subcontracting workflows"] 
                                },
                                { 
                                    icon: <Cog />, 
                                    title: "Shop Floor Execution", 
                                    items: ["Digital Job Cards", "Machine downtime tracking", "Real-time status tracking"] 
                                },
                                { 
                                    icon: <Boxes />, 
                                    title: "Inventory & Quality", 
                                    items: ["Multi-warehouse & batch tracking", "Quality Inspection workflows", "Scrap & wastage tracking"] 
                                },
                                { 
                                    icon: <CircleDollarSign />, 
                                    title: "Finance & Compliance", 
                                    items: ["Automated GST billing & E-Way bills", "Landed costing & profitability tracking"] 
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

                {/* 5. Implementation Approach */}
                <section className="py-24 text-center overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Implementation Approach
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { step: "1", title: "Discovery & Configuration", desc: ["Factory audit & process mapping", "Custom dashboards & workflows"] },
                                { step: "2", title: "Training & Go-Live", desc: ["Role-based shop floor training", "Phased rollout across units"] },
                                { step: "3", title: "Ongoing Support", desc: ["Post-implementation stabilization", "Continuous system refinement"] }
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
                <section className="py-32 text-center relative z-10 bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center"
                    style={{ backgroundImage: "url('/assets/worldmap.webp')" }}
                >
                    <div className="absolute inset-0 bg-[#0a2540]/40 z-0"></div>
                    <div className="container relative z-10 mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-white mb-16 drop-shadow-md">
                            Success Stories
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:-translate-y-1 hover:bg-white/20 transition-all duration-300 flex flex-col justify-center text-white">
                                <h3 className="text-xl font-semibold mb-1">Auto Components</h3>
                                <p className="text-[10px] text-blue-200 font-bold mb-4 uppercase tracking-wider">Pune</p>
                                <p className="text-sm text-zinc-300 leading-relaxed font-normal">Reduced planning time by 7 days. Decreased material wastage by 15%.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:-translate-y-1 hover:bg-white/20 transition-all duration-300 flex flex-col justify-center text-white">
                                <h3 className="text-xl font-semibold mb-1">Furniture Unit</h3>
                                <p className="text-[10px] text-blue-200 font-bold mb-4 uppercase tracking-wider">Rajkot</p>
                                <p className="text-sm text-zinc-300 leading-relaxed font-normal">Streamlined sub-contracting and improved delivery times by 30%.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:-translate-y-1 hover:bg-white/20 transition-all duration-300 flex flex-col justify-center text-white">
                                <h3 className="text-xl font-semibold mb-1">Food Processing</h3>
                                <p className="text-[10px] text-blue-200 font-bold mb-4 uppercase tracking-wider">Gujarat</p>
                                <p className="text-sm text-zinc-300 leading-relaxed font-normal">100% batch traceability and improved QC compliance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Why Manufacturers Choose Gnosys Digital */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Why Manufacturers Choose Us
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { icon: <Factory />, text: "50+ factory implementations across India." },
                                { icon: <Settings />, text: "Tailored ERPNext workflows for unique operations." },
                                { icon: <CircleDollarSign />, text: "Clear pricing ₹75,000 - ₹3,00,000 (No hidden costs)." },
                                { icon: <Headset />, text: "Full support, local presence & 24/7 help." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all text-left group flex flex-col items-center justify-center text-center">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 text-zinc-800 shadow-sm">
                                        {React.cloneElement(item.icon, { className: "size-5" })}
                                    </div>
                                    <p className="text-sm text-zinc-700 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Industries We Serve */}
                <section className="py-24 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-16">
                            Industries We Serve
                        </h2>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { title: "Discrete Manufacturing", desc: "Auto parts, machinery, finished goods factories." },
                                { title: "Process Manufacturing", desc: "Food, beverages, chemicals, pharmaceuticals." },
                                { title: "Textile & Apparel", desc: "Garment manufacturing, textile mills." },
                                { title: "Tech & Electronics", desc: "Light assembly, electronics, medical assembly." }
                            ].map((ind, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all group flex flex-col justify-center text-center">
                                    <h3 className="text-base font-semibold text-[#00477b] mb-2">{ind.title}</h3>
                                    <p className="text-sm text-zinc-700 font-normal leading-relaxed">{ind.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Top FAQs */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] text-center mb-16">
                            Top FAQs
                        </h2>
                        
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-2 shadow-sm">
                            <FaqAccordion 
                                items={[
                                    {
                                        q: "Can ERPNext handle unique processes?",
                                        a: "Yes, workflows are customized for batch, job work, continuous, and assembly operations."
                                    },
                                    {
                                        q: "How long for results?",
                                        a: "Most see production improvements within 1 month; full benefits in 3–4 months."
                                    },
                                    {
                                        q: "Can workers use it easily?",
                                        a: "Simple screens, barcode support, and hands-on training make adoption easy."
                                    }
                                ]}
                                containerClassName="border-0 bg-transparent shadow-none"
                                itemClassName="border-b border-white/60 last:border-b-0"
                                buttonClassName="flex w-full items-center gap-3 px-5 py-4 text-left font-medium text-zinc-900 focus:outline-none hover:bg-white/50 transition-colors text-sm rounded-xl"
                                iconColorClass="text-zinc-800 font-medium"
                                answerClassName="p-5 text-sm text-zinc-700 font-normal bg-white/30 border-t border-white/60 rounded-b-xl"
                            />
                        </div>
                    </div>
                </section>

                {/* 10. Contact Form */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#00477b] mb-3">
                                    Tell Us About Your Manufacturing Needs
                                </h2>
                                <p className="text-sm text-zinc-600 font-normal">Fill out the form below and we'll get back to you with a personalized consultation.</p>
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
                                    <Label htmlFor="industryType" className="text-xs font-medium text-zinc-800">Industry / Manufacturing Type</Label>
                                    <select id="industryType" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Select Option</option>
                                        <option>Discrete Manufacturing</option>
                                        <option>Process Manufacturing</option>
                                        <option>Textile & Apparel</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="employees" className="text-xs font-medium text-zinc-800">Number of Employees</Label>
                                    <select id="employees" className="w-full h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white">
                                        <option>Select Option</option>
                                        <option>1-10</option>
                                        <option>11-50</option>
                                        <option>51-200</option>
                                        <option>200+</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5 pt-1">
                                    <Label htmlFor="challenges" className="text-xs font-medium text-zinc-800">ERP Challenges</Label>
                                    <textarea id="challenges" rows={3} placeholder="Please describe the challenges you are facing..." className="w-full rounded-lg bg-white/20 backdrop-blur-md border border-white/60 px-3 py-2 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:bg-white"></textarea>
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
                                        Request Consultation
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                
            </div> {/* End Main Content Wrapper */}
            
        </MainLayout>
    );
}
