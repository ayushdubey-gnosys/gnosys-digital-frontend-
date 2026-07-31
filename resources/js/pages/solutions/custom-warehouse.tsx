import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PackageOpen, Clock, Network, Search, Zap, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    ArrowRight, Boxes, Truck, MapPin, TabletSmartphone, Code, Settings, Warehouse
} from 'lucide-react';
import React from 'react';

export default function CustomWarehouse() {
    return (
        <MainLayout>
            <Head title="Custom Warehouse & Inventory Management Software Development" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-[#022c54]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#022c54]/85 mix-blend-multiply z-10"></div>
                    {/* Simulated meeting/collaboration background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#011428] via-[#022c54] to-[#011428]"></div>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/connected.png')]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <p className="text-sm sm:text-base font-bold text-blue-300 uppercase tracking-widest mb-6">
                        Every Warehouse Is Different. Your Software Should Be Too.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Your Stock Process Is Unique.<br/>Your System Should Match It — Not Fight It.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Custom barcode systems, tailored allocations, and real-time inventory tracking. We build custom warehouse software that maps to how your physical operations actually run.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Talk to an inventory expert
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore solutions
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why Off-the-Shelf Software Doesn't Work */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Off-The-Shelf Software Doesn't Work
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16 max-w-3xl mx-auto leading-tight">
                        You've Tried Excel. You've Seen ERPs.<br/>But Neither Fits How Your Warehouse Actually Runs.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <PackageOpen className="size-6 text-[#0369a1]" />, title: "Too Generic", desc: "They force rigid processes that don't fit your products." },
                            { icon: <Settings className="size-6 text-[#0369a1]" />, title: "Too Manual", desc: "Excel spreadsheets require constant typing and get out of sync." },
                            { icon: <Network className="size-6 text-[#0369a1]" />, title: "Too Isolated", desc: "Your stock info doesn't sync with sales and accounts in real-time." },
                            { icon: <MapPin className="size-6 text-[#0369a1]" />, title: "No Bin Insights", desc: "You have stock but don't know the exact shelf or rack." },
                            { icon: <Clock className="size-6 text-[#0369a1]" />, title: "Too Slow to Adapt", desc: "Standard systems can't adapt to seasonal business rules." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-8 rounded-sm shadow-sm flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-sm font-bold text-[#022c54] mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                        You don't need generic software. You need a warehouse platform that works exactly how your staff does.
                    </p>
                </div>
            </section>

            {/* 3. What We Build For You (Features Table & Flow) */}
            <section className="py-24 bg-[#f8fafc] border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        What We Build For You
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        From Racks To Reconciliation.<br/>We Design Your Digital Warehouse, Your Way.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-12 max-w-3xl mx-auto">
                        Custom modules that map to your physical warehouse flow. From barcoding inward goods to managing complex outward dispatches, we give you end-to-end visibility without forcing you to change your workflow.
                    </p>
                    
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full text-left border-collapse bg-white shadow-sm border border-[#e2e8f0] rounded-sm overflow-hidden">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3">Function</th>
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Custom Solutions We Can Build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { f: "Inward Stock", c: "Barcode scanning, blind checking, GRN workflows" },
                                    { f: "Bin & Location Management", c: "Zone, aisle, rack, and bin level tracking logic" },
                                    { f: "Stock Movement & Tracking", c: "Internal transfers, warehouse-to-warehouse workflows" },
                                    { f: "Barcode / QR Integration", c: "Custom label generation, mobile scanning functionality" },
                                    { f: "Multi-Warehouse Control", c: "Centralized dashboard for multiple distribution centers" },
                                    { f: "Dispatch Rules", c: "FEFO, FIFO, FMFO, or custom allocation & dispatch process" },
                                    { f: "Inventory Audits", c: "Cycle counting, reconciliation, shrinkage reporting" },
                                    { f: "ERP / Tally Integrations", c: "Auto-sync of inward, dispatch, and stock adjustments" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.f}</td>
                                        <td className="py-4 px-6 text-[14px] text-zinc-700 font-medium">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Custom Inbound -> Warehouse -> Dispatch Flow Diagram */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
                        <div className="bg-[#02498b] text-white py-6 px-10 rounded-sm shadow-md text-center flex-1 w-full [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%)]">
                            <Boxes className="size-8 mx-auto mb-2" />
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Inbound</h3>
                            <p className="text-xs text-blue-100 font-medium max-w-[140px] mx-auto">Receiving, sorting & barcoding goods.</p>
                        </div>
                        <div className="bg-[#02498b] text-white py-6 px-10 rounded-sm shadow-md text-center flex-1 w-full [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%,15%_50%)]">
                            <Warehouse className="size-8 mx-auto mb-2" />
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Warehouse</h3>
                            <p className="text-xs text-blue-100 font-medium max-w-[140px] mx-auto">Putaway, transfers & real-time visibility.</p>
                        </div>
                        <div className="bg-[#02498b] text-white py-6 px-10 rounded-sm shadow-md text-center flex-1 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,15%_50%)]">
                            <Truck className="size-8 mx-auto mb-2" />
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Dispatch</h3>
                            <p className="text-xs text-blue-100 font-medium max-w-[140px] mx-auto">Pick, pack, label, & outbound shipping.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Development Process */}
            <section className="py-24 bg-white text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Our Development Process
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        We Don't Sell Software. We Engineer It Around You.
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Search className="size-6 text-[#0369a1]" />, title: "Process Discovery & Mapping", desc: "We study your physical warehouse operations to define the required workflows and logic." },
                            { icon: <TabletSmartphone className="size-6 text-[#0369a1]" />, title: "UI/UX & Solution Design", desc: "We design simple, intuitive interfaces for your floor staff and robust portals for management." },
                            { icon: <Code className="size-6 text-[#0369a1]" />, title: "Development & Integration", desc: "Custom backends built to scale, and native integrations (ERP/Tally) to ensure data flows." },
                            { icon: <Zap className="size-6 text-[#0369a1]" />, title: "Training & Deployment", desc: "We roll out your software globally and train your staff, providing ongoing support." }
                        ].map((step, i) => (
                            <div key={i} className="bg-[#f0f9ff] rounded-sm p-8 shadow-sm text-center border border-[#bae6fd] hover:border-[#38bdf8] transition-colors flex flex-col items-center">
                                <div className="mb-6 bg-white w-fit p-3 rounded-full border border-[#bae6fd]">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 text-[#022c54] leading-tight">{step.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Custom Warehouse Software Wins */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                                Why Custom Warehouse Software Wins
                            </p>
                            <h2 className="text-3xl font-bold text-[#022c54] mb-8 leading-tight">
                                Because No Ready-Made Tool Can Match Your Real-World Operations.
                            </h2>
                            
                            <ul className="space-y-5 mb-10">
                                {[
                                    "Custom workflows built for your specific categories and aging rules.",
                                    "Mobile-first interfaces for your warehouse staff.",
                                    "Seamless integration with existing accounting tools (Tally, SAP, ERPs).",
                                    "Full ownership of the code and data—no recurring per-user fees."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="bg-[#0284c7] rounded-sm p-1 mt-0.5 shrink-0">
                                            <CheckCircle2 className="size-4 text-white" />
                                        </div>
                                        <span className="text-zinc-700 font-bold text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-8 h-12 text-sm font-bold shadow-md">
                                Book a Discovery Call
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="border-[8px] border-white rounded-sm overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" alt="Warehouse worker using tablet" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Technology & Capabilities (Stack Table) */}
            <section className="py-24 bg-white border-y border-[#e2e8f0] text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Technology & Capabilities
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        We Use Enterprise Technology — Sized For SME Scale.
                    </h2>
                    
                    <div className="overflow-hidden shadow-sm border border-[#e2e8f0] rounded-sm">
                        <table className="w-full text-left border-collapse bg-[#f8fafc]">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-1/3">Area</th>
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Tech Stack</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { area: "Backend", tech: "Laravel, Node.js, Python (Django)" },
                                    { area: "Frontend", tech: "React, Vue, Next.js, HTML/CSS" },
                                    { area: "Mobile Apps", tech: "React Native, Flutter (Android & iOS Apps)" },
                                    { area: "Integrations", tech: "Tally, SAP, ERPs, Barcode Scanners, APIs" },
                                    { area: "Hosting", tech: "AWS, DigitalOcean, Azure (Cloud Hosting)" },
                                    { area: "Security", tech: "SSL, Data Encryption, Role-Based Access" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white transition-colors bg-white">
                                        <td className="py-4 px-8 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.area}</td>
                                        <td className="py-4 px-8 text-[14px] text-zinc-700 font-medium">{row.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <p className="mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Custom software that runs as fast as your operations.
                    </p>
                </div>
            </section>

            {/* 7. Engagement Models */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Engagement Models
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        We Fit Into Your Process — And Your Budget.
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: <FileCode className="size-6 text-[#0369a1]" />, 
                                title: "Fixed-Scope Project", 
                                desc: "Defined scope and timelines. Ideal for clearly outlined custom warehouse software builds.",
                                btn: "Get A Proposal"
                            },
                            { 
                                icon: <Users className="size-6 text-[#0369a1]" />, 
                                title: "Long-Term Development Partner", 
                                desc: "An extended team that grows your software continuously alongside your business.",
                                btn: "Discuss Partnership"
                            },
                            { 
                                icon: <CheckCircle className="size-6 text-[#0369a1]" />, 
                                title: "Process & Tech Consulting", 
                                desc: "We map your inventory flow, define process gaps, and recommend a phased tech strategy.",
                                btn: "Book Consultation"
                            }
                        ].map((model, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-10 rounded-sm shadow-sm flex flex-col items-center hover:border-[#38bdf8] transition-colors group">
                                <div className="mb-6 bg-[#f0f9ff] p-4 rounded-full border border-[#bae6fd] group-hover:bg-[#e0f2fe] transition-colors">{model.icon}</div>
                                <h3 className="text-lg font-bold text-[#022c54] mb-4">{model.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium mb-8 flex-grow">{model.desc}</p>
                                <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-8 h-11 text-sm font-bold w-full">
                                    {model.btn}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Why Gnosys Digital */}
            <section className="py-24 bg-white text-center border-t border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Gnosys Digital
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        We Bring Enterprise Thinking To SME Warehouses.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            "10+ years transforming warehousing for B2B logistics.",
                            "Deep domain understanding of FMCG, parts, and hardware.",
                            "Strong Laravel, Node.js & React developer teams.",
                            "UX specifically designed for fast-paced warehouse staff.",
                            "Outstanding support, zero hidden or ongoing license fees."
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] p-6 rounded-sm shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex items-center justify-center min-h-[140px]">
                                <p className="text-sm font-bold text-[#0369a1] leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-14 text-base font-bold shadow-md">
                        Talk To A Supply Chain Expert
                    </Button>
                </div>
            </section>

        </MainLayout>
    );
}
