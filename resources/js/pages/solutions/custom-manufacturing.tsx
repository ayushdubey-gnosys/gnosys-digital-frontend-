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
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh]">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/custom-manufacturing.webp')" }}>
                    <div className="absolute inset-0 bg-[#022c54]/30 z-10"></div>
                </div>
                
                <div className="container relative z-20 mx-auto px-4 max-w-5xl">
                    <p className="text-[13px] font-extrabold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
                        Your Factory Does Not Need A System. It Needs A Nervous System.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Your Production Runs Daily. But Your Visibility Stops At Paperwork.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Custom Web Applications, Mobile Apps, And Shop Floor Management Systems. We digitize the dirty, messy, undocumented workflows that off-the-shelf ERPs just can't handle.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-full px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Talk to a manufacturing expert
                        </Button>
                        <Button className="bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 rounded-full px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore our implementations
                        </Button>
                    </div>
                </div>
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why Off-the-Shelf Systems Fail Your Plants */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY STANDARD ERPs FAIL
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-3xl mx-auto leading-tight">
                            Your Process Isn't Standard — So Why Use Standard Software?
                        </h2>
                        
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { icon: <Settings />, title: "Rigid ERP Systems", desc: "Force you to change how your factory actually works" },
                                { icon: <FileText />, title: "Manual Job Cards", desc: "Paper gets lost, misread, or entered late" },
                                { icon: <Clock />, title: "Untracked Downtime", desc: "Machines stop, nobody knows why" },
                                { icon: <Factory />, title: "Disconnected Departments", desc: "Inventory, Sales, Production don't talk" },
                                { icon: <BarChart3 />, title: "Delayed Reporting", desc: "End of month is too late to fix today's problems" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className="bg-white/80 rounded-full size-14 flex items-center justify-center mb-6 text-zinc-800 shadow-sm">
                                        {React.cloneElement(item.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-3">{item.title}</h3>
                                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <p className="mt-16 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                            You don't need a generic tool. You need a custom manufacturing nervous system built around your shop floor reality.
                        </p>
                    </div>
                </section>

                {/* 3. What We Build For You (Features Table alternative as Cards) */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            We Design Your Factory's Digital Nervous System.
                        </h2>
                        <p className="text-zinc-600 font-medium mb-16 max-w-3xl mx-auto">
                            From raw material entry to final QC, we build modular manufacturing shop floor systems designed for operators, supervisors, and management—all from simple web and mobile dashboards.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
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
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <h3 className="text-base font-semibold text-[#00477b] mb-2">{row.f}</h3>
                                    <p className="text-sm text-zinc-600 font-medium">{row.c}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-14 text-base font-bold shadow-xl transition-all">
                                Discuss Custom Solutions
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 4. Custom Manufacturing (Hexagon Flow Diagram -> Modernized to match main page style) */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-20">
                            Custom Manufacturing Flow
                        </h2>
                        
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mx-auto">
                            {[
                                { icon: <Boxes />, title: "Raw Material", desc: "Inward inspection and lot generation" },
                                { icon: <Factory />, title: "Production", desc: "Machine-wise job assignment and tracking" },
                                { icon: <CheckCircle />, title: "Quality Check", desc: "Stage-wise QC and rework management" },
                                { icon: <Truck />, title: "Dispatch", desc: "Packing, labelling, and dispatch planning" },
                                { icon: <BarChart3 />, title: "Analysis", desc: "Yield, OEE, downtime, and cost reporting" }
                            ].map((node, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex flex-col items-center w-full sm:w-auto">
                                        <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center w-full sm:w-56 min-h-[240px] justify-center hover:-translate-y-2 hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                                            <div className="bg-white/90 rounded-full size-16 flex items-center justify-center mb-5 text-zinc-800 shadow-sm border border-white/80">
                                                {React.cloneElement(node.icon, { className: "size-6" })}
                                            </div>
                                            <h3 className="font-semibold text-[#00477b] text-[17px] mb-3">{node.title}</h3>
                                            <p className="text-[13px] text-zinc-600 font-medium leading-relaxed">{node.desc}</p>
                                        </div>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden lg:flex text-zinc-400 shrink-0">
                                            <ArrowRight className="size-6" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Our Approach */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR APPROACH
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            We Don't Install Systems. We Design Them With You.
                        </h2>
                        <p className="text-zinc-600 font-medium mb-16 max-w-3xl mx-auto">
                            We specialize in custom web apps, mobile apps, and backend dashboards that mirror exactly how your factory currently functions.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: <Search />, title: "Discovery & Process Mapping", desc: "We walk the shop floor. We map every step of your production cycle, QC metrics, and bottlenecks before writing a single line of code." },
                                { icon: <Cog />, title: "System Blueprint & UI Design", desc: "We design UI mockups tailored to operators, supervisors, and management. You validate the flow before we start building." },
                                { icon: <Code />, title: "Development & Integration", desc: "Built using robust backend frameworks and APIs to seamlessly sync with your existing ERP or accounting tools." },
                                { icon: <Zap />, title: "Training, Deployment & Support", desc: "We train your shop floor workers and provide ongoing tech support to ensure the system scales with your production volume." }
                            ].map((step, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[280px]">
                                    <div className="bg-white/80 rounded-full size-14 flex items-center justify-center mb-6 text-zinc-800 shadow-sm border border-white/80">
                                        {React.cloneElement(step.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-3">{step.title}</h3>
                                    <p className="text-sm text-zinc-600 font-medium leading-relaxed mt-auto">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Manufacturing Software Outperforms */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl p-10 lg:p-16 shadow-lg">
                            <div className="lg:w-1/2">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                    WHY IT OUTPERFORMS
                                </span>
                                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-8 leading-tight">
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
                                            <div className="bg-blue-100 rounded-full p-1 mt-0.5 shrink-0 text-blue-600">
                                                <CheckCircle2 className="size-4" />
                                            </div>
                                            <span className="text-zinc-700 font-medium text-[15px]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                    Book a Discovery Call
                                </Button>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="border-[8px] border-white/60 rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Factory worker interacting with tablet" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Technology & Capabilities (Stack Table alternative) */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            TECH STACK
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                            Enterprise-Grade Tech, Applied To SME-Scale Manufacturing.
                        </h2>
                        
                        <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl overflow-hidden shadow-sm text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/40">
                                {[
                                    { area: "Backend", tech: "Laravel, Node.js, Python" },
                                    { area: "Frontend", tech: "React, Vue, Next.js" },
                                    { area: "Mobile Apps", tech: "React Native (Android tablets/phones)" },
                                    { area: "Integrations", tech: "APIs, ERPs, IoT devices" },
                                    { area: "Hosting", tech: "AWS, DigitalOcean, Azure" },
                                    { area: "Security", tech: "SSL, Role-based access, backups" }
                                ].map((row, i) => (
                                    <div key={i} className="p-6 hover:bg-white/40 transition-colors flex items-center justify-between border-b border-white/40 md:border-b-0">
                                        <span className="text-[14px] font-bold text-zinc-900">{row.area}</span>
                                        <span className="text-[14px] text-zinc-600 font-medium text-right">{row.tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <p className="mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                            We build tech that scales with your growing factory.
                        </p>
                    </div>
                </section>

                {/* 8. Engagement Models */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            ENGAGEMENT MODELS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16">
                            Transparent Engagement, Flexible Scope.
                        </h2>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { 
                                    icon: <FileCode />, 
                                    title: "Fixed-Scope Project", 
                                    desc: "For clearly defined web or app development projects with set timelines and costs.",
                                    btn: "Get A Proposal"
                                },
                                { 
                                    icon: <Users />, 
                                    title: "Dedicated Technology Partner", 
                                    desc: "An extended engineering team working closely with you to iterate on your product.",
                                    btn: "Discuss Partnership"
                                },
                                { 
                                    icon: <CheckCircle />, 
                                    title: "Process & Tech Consulting", 
                                    desc: "A full audit of your supply chain and distributor process to map out a tech strategy.",
                                    btn: "Book Process Review"
                                }
                            ].map((model, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 p-10 rounded-2xl shadow-sm flex flex-col items-center hover:-translate-y-2 hover:shadow-lg hover:bg-white/80 transition-all duration-300 group">
                                    <div className="mb-6 bg-white/90 p-4 rounded-full border border-white/80 shadow-sm text-zinc-800 group-hover:bg-blue-50 transition-colors">
                                        {React.cloneElement(model.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#00477b] mb-4">{model.title}</h3>
                                    <p className="text-sm text-zinc-600 font-medium mb-8 flex-grow">{model.desc}</p>
                                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-8 h-12 text-sm font-bold w-full shadow-md transition-all">
                                        {model.btn}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Why Gnosys Digital */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY US
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                            Your Factory, Digitized By Engineers<br/>Who Understand Manufacturing.
                        </h2>
                        
                        <div className="flex flex-wrap justify-center gap-6 mb-16">
                            {[
                                "10+ years building custom manufacturing software.",
                                "Deep domain knowledge of Indian shop floors.",
                                "Strong Laravel & React teams in-house.",
                                "UI/UX designed for operators, not accountants.",
                                "Agile delivery and transparent project management."
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 p-6 rounded-2xl shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex items-center justify-center min-h-[140px] hover:scale-105 hover:bg-white/80 transition-all duration-300">
                                    <p className="text-sm font-semibold text-zinc-800 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                        
                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-12 h-16 text-lg font-bold shadow-xl transition-all">
                            Talk To Our Tech Expert
                        </Button>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
