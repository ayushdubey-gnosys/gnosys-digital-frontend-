import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Factory, Clock, Activity, Settings, BarChart3, 
    FileText, Zap, Search, Cog, CheckCircle2, FileCode, Users, CheckCircle, ArrowRight, Boxes, Truck, Code
} from 'lucide-react';
import React from 'react';

export default function CustomManufacturing() {
    return (
        <MainLayout>
            <Head title="Custom Manufacturing Software Development" />
            
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
                        Your Factory Does Not Need A System. It Needs A Nervous System.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Your Production Runs Daily. But Your Visibility Stops At Paperwork.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Custom Web Applications, Mobile Apps, And Shop Floor Management Systems. We digitize the dirty, messy, undocumented workflows that off-the-shelf ERPs just can't handle.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Talk to a manufacturing expert
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore our implementations
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why Off-the-Shelf Systems Fail Your Plants */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Off-The-Shelf Systems Fail Your Plants
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16 max-w-3xl mx-auto leading-tight">
                        Your Process Isn't Standard — So Why Use Standard Software?
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <Settings className="size-6 text-[#0369a1]" />, title: "Rigid ERP Systems", desc: "Force you to change how your factory actually works" },
                            { icon: <FileText className="size-6 text-[#0369a1]" />, title: "Manual Job Cards", desc: "Paper gets lost, misread, or entered late" },
                            { icon: <Clock className="size-6 text-[#0369a1]" />, title: "Untracked Downtime", desc: "Machines stop, nobody knows why" },
                            { icon: <Factory className="size-6 text-[#0369a1]" />, title: "Disconnected Departments", desc: "Inventory, Sales, Production don't talk" },
                            { icon: <BarChart3 className="size-6 text-[#0369a1]" />, title: "Delayed Reporting", desc: "End of month is too late to fix today's problems" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-8 rounded-sm shadow-sm flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-sm font-bold text-[#022c54] mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                        You don't need a generic tool. You need a custom manufacturing nervous system built around your shop floor reality.
                    </p>
                </div>
            </section>

            {/* 3. What We Build For You (Features Table) */}
            <section className="py-24 bg-[#f8fafc] border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        What We Build For You
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        We Design Your Factory's Digital Nervous System.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-12 max-w-3xl mx-auto">
                        From raw material entry to final QC, we build modular manufacturing shop floor systems designed for operators, supervisors, and management—all from simple web and mobile dashboards.
                    </p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white shadow-sm border border-[#e2e8f0] rounded-sm overflow-hidden">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3">Function</th>
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Custom Solutions We Can Build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { f: "Production Planning", c: "Auto-scheduling based on machine availability and shift" },
                                    { f: "Job Card System", c: "Digital job cards via mobile/tablet for operators" },
                                    { f: "Machine Monitoring", c: "Downtime logging, breakdown alerts, repair status" },
                                    { f: "Quality Control (QC)", c: "Stage-wise QC checklists, rework logging, rejection tracking" },
                                    { f: "Material Traceability", c: "Batch tracking from raw material to finished product" },
                                    { f: "Shift Tracking", c: "Real-time tracking of shift performance and targets" },
                                    { f: "Inventory Sync", c: "Real-time stock depletion through shop floor integrations" },
                                    { f: "Analytics & KPIs", c: "OEE calculation, yield analysis, rejection analysis" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.f}</td>
                                        <td className="py-4 px-6 text-[14px] text-zinc-700 font-medium">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-12 text-sm font-bold shadow-md">
                            Discuss Custom Solutions
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. Custom Manufacturing (Hexagon Flow Diagram) */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Custom Manufacturing
                    </h2>
                    
                    {/* CSS Hexagon Flow Diagram */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        
                        {/* Raw Material */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white mb-4 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Boxes className="size-10" />
                            </div>
                            <h3 className="font-bold text-[#022c54] text-sm">Raw Material</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px]">Inward inspection and lot generation</p>
                        </div>
                        
                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Production */}
                        <div className="flex flex-col items-center md:-mt-24">
                            <h3 className="font-bold text-[#022c54] text-sm mb-1 text-center">Production</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px] mb-4">Machine-wise job assignment and tracking</p>
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Factory className="size-10" />
                            </div>
                        </div>

                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Quality Check */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white mb-4 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <CheckCircle className="size-10" />
                            </div>
                            <h3 className="font-bold text-[#022c54] text-sm">Quality Check</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px]">Stage-wise QC and rework management</p>
                        </div>

                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Dispatch */}
                        <div className="flex flex-col items-center md:-mt-24">
                            <h3 className="font-bold text-[#022c54] text-sm mb-1 text-center">Dispatch</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px] mb-4">Packing, labelling, and dispatch planning</p>
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Truck className="size-10" />
                            </div>
                        </div>

                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Analysis */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white mb-4 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <BarChart3 className="size-10" />
                            </div>
                            <h3 className="font-bold text-[#022c54] text-sm">Analysis</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px]">Yield, OEE, downtime, and cost reporting</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. Our Approach */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Our Approach
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        We Don't Install Systems. We Design Them With You.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-16 max-w-3xl mx-auto">
                        We specialize in custom web apps, mobile apps, and backend dashboards that mirror exactly how your factory currently functions.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Search className="size-6 text-white" />, title: "Discovery & Process Mapping", desc: "We walk the shop floor. We map every step of your production cycle, QC metrics, and bottlenecks before writing a single line of code." },
                            { icon: <Cog className="size-6 text-white" />, title: "System Blueprint & UI Design", desc: "We design UI mockups tailored to operators, supervisors, and management. You validate the flow before we start building." },
                            { icon: <Code className="size-6 text-white" />, title: "Development & Integration", desc: "Built using robust backend frameworks and APIs to seamlessly sync with your existing ERP or accounting tools." },
                            { icon: <Zap className="size-6 text-white" />, title: "Training, Deployment & Support", desc: "We train your shop floor workers and provide ongoing tech support to ensure the system scales with your production volume." }
                        ].map((step, i) => (
                            <div key={i} className="bg-[#013565] rounded-sm p-8 shadow-md text-left text-white border-t-4 border-[#38bdf8] flex flex-col">
                                <div className="mb-6 bg-white/10 w-fit p-3 rounded-sm border border-white/20">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 leading-tight">{step.title}</h3>
                                <p className="text-sm text-blue-50/90 font-medium leading-relaxed mt-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Custom Manufacturing Software Outperforms */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                                Why Custom Manufacturing Software Outperforms
                            </p>
                            <h2 className="text-3xl font-bold text-[#022c54] mb-8 leading-tight">
                                Because Efficiency Comes From Alignment, Not Adoption.
                            </h2>
                            
                            <ul className="space-y-5 mb-10">
                                {[
                                    "Built exactly for your machines, people, and workflows.",
                                    "UI designed for the shop floor.",
                                    "No per-user licensing fees.",
                                    "Integrates with Tally, SAP, or existing ERPs."
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
                            <div className="border-[8px] border-[#f0f9ff] rounded-sm overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Factory worker interacting with tablet" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Technology & Capabilities (Stack Table) */}
            <section className="py-24 bg-[#f8fafc] border-y border-[#e2e8f0] text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Technology & Capabilities
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        Enterprise-Grade Tech, Applied To SME-Scale Manufacturing.
                    </h2>
                    
                    <div className="overflow-hidden shadow-sm border border-[#e2e8f0] rounded-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-1/3">Area</th>
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Tech Stack</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { area: "Backend", tech: "Laravel, Node.js, Python" },
                                    { area: "Frontend", tech: "React, Vue, Next.js" },
                                    { area: "Mobile Apps", tech: "React Native (Android tablets/phones)" },
                                    { area: "Integrations", tech: "APIs, ERPs, IoT devices" },
                                    { area: "Hosting", tech: "AWS, DigitalOcean, Azure" },
                                    { area: "Security", tech: "SSL, Role-based access, backups" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-8 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.area}</td>
                                        <td className="py-4 px-8 text-[14px] text-zinc-700 font-medium">{row.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <p className="mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        We build tech that scales with your growing factory.
                    </p>
                </div>
            </section>

            {/* 8. Engagement Models */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Engagement Models
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Transparent Engagement, Flexible Scope.
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: <FileCode className="size-6 text-[#0369a1]" />, 
                                title: "Fixed-Scope Project", 
                                desc: "For clearly defined web or app development projects with set timelines and costs.",
                                btn: "Get A Proposal"
                            },
                            { 
                                icon: <Users className="size-6 text-[#0369a1]" />, 
                                title: "Dedicated Technology Partner", 
                                desc: "An extended engineering team working closely with you to iterate on your product.",
                                btn: "Discuss Partnership"
                            },
                            { 
                                icon: <CheckCircle className="size-6 text-[#0369a1]" />, 
                                title: "Process & Tech Consulting", 
                                desc: "A full audit of your supply chain and distributor process to map out a tech strategy.",
                                btn: "Book Process Review"
                            }
                        ].map((model, i) => (
                            <div key={i} className="bg-[#f0f9ff] border border-[#bae6fd] p-10 rounded-sm shadow-sm flex flex-col items-center hover:border-[#38bdf8] transition-colors group">
                                <div className="mb-6 bg-white p-4 rounded-full border border-[#bae6fd] group-hover:bg-[#e0f2fe] transition-colors">{model.icon}</div>
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

            {/* 9. Why Gnosys Digital */}
            <section className="py-24 bg-[#f8fafc] text-center border-t border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Gnosys Digital
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        Your Factory, Digitized By Engineers<br/>Who Understand Manufacturing.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            "10+ years building custom manufacturing software.",
                            "Deep domain knowledge of Indian shop floors.",
                            "Strong Laravel & React teams in-house.",
                            "UI/UX designed for operators, not accountants.",
                            "Agile delivery and transparent project management."
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] p-6 rounded-sm shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex items-center justify-center min-h-[140px]">
                                <p className="text-sm font-bold text-[#0369a1] leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-14 text-base font-bold shadow-md">
                        Talk To Our Tech Expert
                    </Button>
                </div>
            </section>

        </MainLayout>
    );
}
