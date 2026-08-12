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
            <section 
                className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/warehouse.webp')" }}
            >
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#022c54]/40 z-10"></div>
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
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why Off-The-Shelf Software Doesn't Work
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-4xl mx-auto leading-tight">
                        You've Tried Excel. You've Seen ERPs.<br/>But Neither Fits How Your Warehouse Actually Runs.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <PackageOpen className="size-6 text-zinc-800" />, title: "Too Generic", desc: "They force rigid processes that don't fit your products." },
                            { icon: <Settings className="size-6 text-zinc-800" />, title: "Too Manual", desc: "Excel spreadsheets require constant typing and get out of sync." },
                            { icon: <Network className="size-6 text-zinc-800" />, title: "Too Isolated", desc: "Your stock info doesn't sync with sales and accounts in real-time." },
                            { icon: <MapPin className="size-6 text-zinc-800" />, title: "No Bin Insights", desc: "You have stock but don't know the exact shelf or rack." },
                            { icon: <Clock className="size-6 text-zinc-800" />, title: "Too Slow to Adapt", desc: "Standard systems can't adapt to seasonal business rules." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                                <div className="size-14 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                        You don't need generic software. You need a warehouse platform that works exactly how your staff does.
                    </p>
                </div>
            </section>

            {/* 3. What We Build For You (Features Table & Flow) */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        What We Build For You
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 max-w-4xl mx-auto">
                        From Racks To Reconciliation.<br/>We Design Your Digital Warehouse, Your Way.
                    </h2>
                    <p className="text-gray-600 font-medium mb-12 max-w-3xl mx-auto">
                        Custom modules that map to your physical warehouse flow. From barcoding inward goods to managing complex outward dispatches, we give you end-to-end visibility without forcing you to change your workflow.
                    </p>
                    
                    <div className="overflow-x-auto mb-16 pb-4">
                        <table className="w-full text-left bg-white/10 backdrop-blur-md shadow-lg shadow-blue-900/5 border border-white/40 rounded-[2.5rem] overflow-hidden">
                            <thead>
                                <tr className="bg-zinc-800 border-b border-zinc-700 text-white">
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3">Function</th>
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-2/3 border-l border-zinc-700">Custom Solutions We Can Build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
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
                                    <tr key={i} className="hover:bg-white/30 transition-colors duration-300">
                                        <td className="py-5 px-8 text-[15px] font-bold text-zinc-900 border-r border-white/30">{row.f}</td>
                                        <td className="py-5 px-8 text-[15px] text-gray-700 font-medium">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Custom Inbound -> Warehouse -> Dispatch Flow Diagram */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl mx-auto relative z-10">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 text-center flex-1 w-full group hover:bg-white transition-all duration-300">
                            <div className="size-16 mx-auto bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Boxes className="size-8 text-zinc-900" />
                            </div>
                            <h3 className="font-bold text-lg text-[#00477b] mb-2">Inbound</h3>
                            <p className="text-sm text-gray-600 font-medium max-w-[180px] mx-auto">Receiving, sorting & barcoding goods.</p>
                        </div>
                        {/* Arrow */}
                        <div className="hidden md:flex text-zinc-300">
                            <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 text-center flex-1 w-full group hover:bg-white transition-all duration-300">
                            <div className="size-16 mx-auto bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Warehouse className="size-8 text-zinc-900" />
                            </div>
                            <h3 className="font-bold text-lg text-[#00477b] mb-2">Warehouse</h3>
                            <p className="text-sm text-gray-600 font-medium max-w-[180px] mx-auto">Putaway, transfers & real-time visibility.</p>
                        </div>
                        {/* Arrow */}
                        <div className="hidden md:flex text-zinc-300">
                            <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 text-center flex-1 w-full group hover:bg-white transition-all duration-300">
                            <div className="size-16 mx-auto bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Truck className="size-8 text-zinc-900" />
                            </div>
                            <h3 className="font-bold text-lg text-[#00477b] mb-2">Dispatch</h3>
                            <p className="text-sm text-gray-600 font-medium max-w-[180px] mx-auto">Pick, pack, label, & outbound shipping.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Development Process */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Our Development Process
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                        We Don't Sell Software. We Engineer It Around You.
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Search className="size-6 text-zinc-800" />, title: "Process Discovery & Mapping", desc: "We study your physical warehouse operations to define the required workflows and logic." },
                            { icon: <TabletSmartphone className="size-6 text-zinc-800" />, title: "UI/UX & Solution Design", desc: "We design simple, intuitive interfaces for your floor staff and robust portals for management." },
                            { icon: <Code className="size-6 text-zinc-800" />, title: "Development & Integration", desc: "Custom backends built to scale, and native integrations (ERP/Tally) to ensure data flows." },
                            { icon: <Zap className="size-6 text-zinc-800" />, title: "Training & Deployment", desc: "We roll out your software globally and train your staff, providing ongoing support." }
                        ].map((step, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 text-center hover:bg-white/60 hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                                <div className="mb-6 bg-white w-fit p-4 rounded-full border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 text-[#00477b] leading-tight">{step.title}</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Custom Warehouse Software Wins */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                Why Custom Warehouse Software Wins
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-8 leading-tight">
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
                                        <div className="bg-zinc-900 rounded-full p-1 mt-0.5 shrink-0 shadow-sm">
                                            <CheckCircle2 className="size-4 text-white" />
                                        </div>
                                        <span className="text-gray-700 font-medium text-[16px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-8 h-14 text-[16px] font-bold shadow-lg shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300">
                                Book a Discovery Call
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-3 rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
                                <div className="rounded-[2rem] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" alt="Warehouse worker using tablet" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Technology & Capabilities (Stack Table) */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Technology & Capabilities
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                        We Use Enterprise Technology — Sized For SME Scale.
                    </h2>
                    
                    <div className="overflow-hidden shadow-lg shadow-blue-900/5 border border-white/40 rounded-[2.5rem] bg-white/10 backdrop-blur-md">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-800 border-b border-zinc-700 text-white">
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3">Area</th>
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-2/3 border-l border-zinc-700">Tech Stack</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
                                {[
                                    { area: "Backend", tech: "Laravel, Node.js, Python (Django)" },
                                    { area: "Frontend", tech: "React, Vue, Next.js, HTML/CSS" },
                                    { area: "Mobile Apps", tech: "React Native, Flutter (Android & iOS Apps)" },
                                    { area: "Integrations", tech: "Tally, SAP, ERPs, Barcode Scanners, APIs" },
                                    { area: "Hosting", tech: "AWS, DigitalOcean, Azure (Cloud Hosting)" },
                                    { area: "Security", tech: "SSL, Data Encryption, Role-Based Access" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/30 transition-colors duration-300">
                                        <td className="py-5 px-8 text-[15px] font-bold text-zinc-900 border-r border-white/30">{row.area}</td>
                                        <td className="py-5 px-8 text-[15px] text-gray-700 font-medium">{row.tech}</td>
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
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Engagement Models
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16">
                        We Fit Into Your Process — And Your Budget.
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: <FileCode className="size-8 text-zinc-800" />, 
                                title: "Fixed-Scope Project", 
                                desc: "Defined scope and timelines. Ideal for clearly outlined custom warehouse software builds.",
                                btn: "Get A Proposal"
                            },
                            { 
                                icon: <Users className="size-8 text-zinc-800" />, 
                                title: "Long-Term Development Partner", 
                                desc: "An extended team that grows your software continuously alongside your business.",
                                btn: "Discuss Partnership"
                            },
                            { 
                                icon: <CheckCircle className="size-8 text-zinc-800" />, 
                                title: "Process & Tech Consulting", 
                                desc: "We map your inventory flow, define process gaps, and recommend a phased tech strategy.",
                                btn: "Book Consultation"
                            }
                        ].map((model, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-10 rounded-[2.5rem] shadow-lg shadow-blue-900/5 flex flex-col items-center hover:bg-white/60 hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-6 bg-white p-4 rounded-full border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {model.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-4">{model.title}</h3>
                                <p className="text-[15px] text-gray-600 font-medium mb-10 flex-grow leading-relaxed">{model.desc}</p>
                                <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-8 h-12 text-[15px] font-bold w-full shadow-lg shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300">
                                    {model.btn}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Why Gnosys Digital */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why Gnosys Digital
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                        We Bring Enterprise Thinking To SME Warehouses.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        {[
                            "10+ years transforming warehousing for B2B logistics.",
                            "Deep domain understanding of FMCG, parts, and hardware.",
                            "Strong Laravel, Node.js & React developer teams.",
                            "UX specifically designed for fast-paced warehouse staff.",
                            "Outstanding support, zero hidden or ongoing license fees."
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-[2rem] shadow-lg shadow-blue-900/5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex items-center justify-center min-h-[140px] hover:bg-white/60 transition-all duration-300">
                                <p className="text-[15px] font-bold text-zinc-800 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-14 text-[16px] font-bold shadow-lg shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300">
                        Talk To A Supply Chain Expert
                    </Button>
                </div>
            </section>

        </MainLayout>
    );
}
