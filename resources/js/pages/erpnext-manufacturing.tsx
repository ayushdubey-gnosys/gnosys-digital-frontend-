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
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextManufacturing() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <MainLayout>
            <Head title="ERPNext Solutions for Manufacturing SMEs" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[80vh] bg-[#021f3d]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#021f3d]/80 mix-blend-multiply z-10"></div>
                    {/* Simulated Factory/Machinery Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#022c54] via-[#021f3d] to-[#011428]"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Tailored Digital Systems <br className="hidden sm:block" />
                        For Indian Factories
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Streamline production, manage supply chains, and track profitability with ERPNext tailored for the Indian manufacturing industry.
                    </p>
                    <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Get A Free Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Common Manufacturing Challenges */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Common Manufacturing Challenges
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "Disconnected spreadsheets for WIP",
                            "No visibility on inventory stockouts",
                            "Untracked raw material wastage",
                            "Inaccurate cost accounting pricing",
                            "Dependency on legacy software",
                            "Poor & slow quality control"
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] p-6 rounded-sm shadow-sm flex items-center justify-center min-h-[100px]">
                                <p className="text-sm font-bold text-[#1e3a8a] text-center">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. How ERPNext Helps */}
            <section className="py-24 bg-[#f0f9ff] border-y border-[#bae6fd]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 flex justify-center">
                            {/* Abstract Helping Hands / Digital Graphic representation */}
                            <div className="relative w-full max-w-md aspect-square rounded-full bg-[#0284c7]/10 flex items-center justify-center">
                                <div className="absolute inset-4 rounded-full border border-[#0284c7]/30 border-dashed animate-[spin_30s_linear_infinite]"></div>
                                <div className="absolute inset-12 rounded-full border border-[#0284c7]/50 animate-[spin_20s_linear_infinite_reverse]"></div>
                                <div className="relative z-10 text-[#0284c7]">
                                    <Settings className="size-32" />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-[#022c54] mb-10">
                                How ERPNext Helps
                            </h2>
                            <ul className="space-y-5">
                                {[
                                    "Single platform from procurement to accounting",
                                    "Automated Bill of Materials (BOM) & Work Orders",
                                    "Real-time Inventory & Shop Floor Tracking",
                                    "Accurate Product Costing and Profitability",
                                    "Multi-level Approval Workflows",
                                    "Compliance with Indian GST and E-Way Bills"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="bg-[#0284c7] rounded-sm p-1.5 mt-0.5 shrink-0">
                                            <CheckCircle className="size-4 text-white" />
                                        </div>
                                        <span className="text-zinc-700 font-medium text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 4. Key ERPNext Modules For Manufacturers */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Key ERPNext Modules For Manufacturers
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                icon: <ClipboardList className="size-8 text-[#0284c7]" />, 
                                title: "Production & Planning", 
                                items: ["Bill of Materials (BOM)", "Capacity Planning", "Work Order Management", "Subcontracting workflows"] 
                            },
                            { 
                                icon: <Cog className="size-8 text-[#0284c7]" />, 
                                title: "Shop Floor Execution", 
                                items: ["Digital Job Cards", "Machine downtime tracking", "Real-time status tracking"] 
                            },
                            { 
                                icon: <Boxes className="size-8 text-[#0284c7]" />, 
                                title: "Inventory & Quality Management", 
                                items: ["Multi-warehouse & batch tracking", "Quality Inspection workflows", "Scrap & wastage tracking"] 
                            },
                            { 
                                icon: <CircleDollarSign className="size-8 text-[#0284c7]" />, 
                                title: "Finance & Compliance", 
                                items: ["Automated GST billing and E-Way bill generation", "Landed costing & profitability tracking"] 
                            }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] rounded-sm p-8 shadow-sm text-left flex flex-col hover:border-[#38bdf8] transition-colors">
                                <div className="mb-6">
                                    {mod.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#022c54] mb-6">{mod.title}</h3>
                                <ul className="space-y-3 mt-auto">
                                    {mod.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 font-medium leading-relaxed">
                                            <div className="bg-[#e0f2fe] rounded-full p-1 mt-0.5 shrink-0">
                                                <div className="size-1.5 bg-[#0284c7] rounded-full"></div>
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Implementation Approach */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Implementation Approach
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { step: "1", title: "Discovery & Configuration", desc: ["Factory audit & process mapping", "Custom dashboards & workflows"] },
                            { step: "2", title: "Training & Go-Live", desc: ["Role-based shop floor training", "Phased rollout across units"] },
                            { step: "3", title: "Ongoing Support", desc: ["Post-implementation stabilization", "Continuous system refinement"] }
                        ].map((phase, i) => (
                            <div key={i} className="bg-[#02498b] rounded-sm p-8 shadow-md text-left text-white flex flex-col">
                                <div className="size-12 rounded-full border-2 border-white/30 flex items-center justify-center font-bold text-xl mb-6 shrink-0">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-bold mb-6">{phase.title}</h3>
                                <ul className="space-y-4 mt-auto">
                                    {phase.desc.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-blue-50/90 font-medium">
                                            <div className="bg-white/20 rounded-full p-1 mt-0.5 shrink-0">
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
            <section className="py-24 bg-[#013565] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/connecting-dots.png')]"></div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Stories
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20 text-left">
                        <div className="pb-8 md:pb-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">Auto Components</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Pune</p>
                            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">Reduced planning time by 7 days. Decreased material wastage by 15%.</p>
                        </div>
                        <div className="py-8 md:py-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">Furniture Unit</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Rajkot</p>
                            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">Streamlined sub-contracting and improved delivery times by 30%.</p>
                        </div>
                        <div className="pt-8 md:pt-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">Food Processing</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Gujarat</p>
                            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">100% batch traceability and improved QC compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Why Manufacturers Choose Gnosys Digital */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Why Manufacturers Choose Gnosys Digital
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <Factory className="size-8 text-[#0369a1]" />, text: "50+ factory implementations across India." },
                            { icon: <Settings className="size-8 text-[#0369a1]" />, text: "Tailored ERPNext workflows tailored to your unique operations." },
                            { icon: <CircleDollarSign className="size-8 text-[#0369a1]" />, text: "Clear pricing ₹75,000 - ₹3,00,000 (No hidden costs)." },
                            { icon: <Headset className="size-8 text-[#0369a1]" />, text: "Full support and local presence & 24/7 help." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-b-4 border-[#0369a1] shadow-lg rounded-sm p-8 flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                                <div className="mb-6">{item.icon}</div>
                                <p className="text-sm font-bold text-[#1e3a8a]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Industries We Serve */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Industries We Serve
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Discrete Manufacturing", desc: "Auto parts, machinery, finished goods factories." },
                            { title: "Process Manufacturing", desc: "Food, beverages, chemicals, pharmaceuticals." },
                            { title: "Textile & Apparel", desc: "Garment manufacturing, textile mills." },
                            { title: "Tech, Medical & General", desc: "Light assembly, electronics, assembly." }
                        ].map((ind, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-8 rounded-sm shadow-sm">
                                <h3 className="text-base font-bold text-[#0369a1] mb-4">{ind.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Top FAQs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#022c54] text-center mb-16">
                        Top FAQs
                    </h2>
                    
                    <div className="border border-gray-200 rounded-sm bg-white">
                        {[
                            {
                                q: "Can ERPNext handle unique processes?",
                                a: "Yes, workflows are customized for batch, job work, continuous, and assembly operations."
                            },
                            {
                                q: "How long for results?",
                                a: "Typically, you can start seeing results within 4-8 weeks of implementation, depending on the complexity of your processes."
                            },
                            {
                                q: "Can workers use it easily?",
                                a: "Absolutely. ERPNext features an intuitive, user-friendly interface and we provide comprehensive role-based training for your shop floor staff."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 last:border-b-0">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center gap-3 px-5 py-4 text-left font-bold text-gray-900 focus:outline-none hover:bg-slate-50 transition-colors"
                                >
                                    <span className="flex items-center text-xl font-bold w-4">
                                        {openFaq === index ? "−" : "+"}
                                    </span>
                                    <span className="text-[15px]">{faq.q}</span>
                                </button>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        openFaq === index ? "max-h-40 opacity-100 border-t border-gray-200" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <p className="p-5 text-[14px] text-gray-600 font-medium bg-gray-50/50">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Take The First Step */}
            <section className="py-24 bg-[#f8fafc] text-center border-t border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-4">
                        Take The First Step
                    </h2>
                    <p className="text-zinc-600 font-medium mb-16">
                        Choose the path that fits your current stage
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Option 1", action: "Book a free consulting call to discuss your current processes and pain points." },
                            { title: "Option 2", action: "Request a personalized demo focused on your specific manufacturing workflows." },
                            { title: "Option 3", action: "Request a quote for a tailored implementation plan." }
                        ].map((opt, i) => (
                            <div key={i} className="bg-white border border-[#cbd5e1] p-8 rounded-sm shadow-sm text-left hover:border-[#94a3b8] transition-colors cursor-pointer group">
                                <h3 className="text-sm font-bold text-[#0284c7] mb-4 group-hover:text-[#0369a1]">{opt.title}</h3>
                                <p className="text-sm text-zinc-700 font-medium">{opt.action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Contact Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="border border-[#e0eaf5] rounded-sm p-8 md:p-12 shadow-xl shadow-blue-900/5">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#022c54] mb-2">
                                Tell Us About Your Manufacturing Needs
                            </h2>
                            <p className="text-sm text-zinc-500 font-medium">Fill out the form below and we'll get back to you with a personalized consultation.</p>
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
                                <Label htmlFor="industryType" className="text-xs font-bold text-zinc-700">Industry / Manufacturing Type</Label>
                                <select id="industryType" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Select Option</option>
                                    <option>Discrete Manufacturing</option>
                                    <option>Process Manufacturing</option>
                                    <option>Textile & Apparel</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="employees" className="text-xs font-bold text-zinc-700">Number of Employees</Label>
                                <select id="employees" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Select Option</option>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>51-200</option>
                                    <option>200+</option>
                                </select>
                            </div>

                            <div className="space-y-2 pt-2">
                                <Label htmlFor="challenges" className="text-xs font-bold text-zinc-700">ERP Challenges</Label>
                                <textarea id="challenges" rows={4} placeholder="Please describe the challenges you are facing..." className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300"></textarea>
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
                                <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 px-12 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Consultation
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
