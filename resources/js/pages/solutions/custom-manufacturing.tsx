import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Factory, Clock, Activity, Settings, BarChart3, 
    FileText, Zap, Search, Cog, CheckCircle2, FileCode, Users, CheckCircle, ArrowRight, Boxes, Truck, Code,
    ShieldCheck, Layers, Cpu, TrendingUp, ClipboardCheck, Smartphone, Server, Workflow, Gauge, RotateCcw, Box,
    Cloud, Database, Layout
} from 'lucide-react';
import React from 'react';

export default function CustomManufacturing() {
    return (
        <MainLayout>
            <Head title="Custom Manufacturing Software Development" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh]">
                <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/custom-manufacturing.webp')" }}>
                </div>
                
                <div className="container relative z-20 mx-auto px-4 max-w-5xl">
                    <p className="text-[13px] font-extrabold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
                        YOUR FACTORY DOES NOT NEED A SYSTEM. IT NEEDS A NERVOUS SYSTEM.
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
                        <Button className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore our implementations
                        </Button>
                    </div>
                </div>
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why Off-the-Shelf Systems Fail Your Plants (Balanced 6 Cards Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY STANDARD ERPs FAIL
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            Your Process Isn't Standard — So Why Use Standard Software?
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Settings className="size-7" />, title: "Rigid ERP Systems", desc: "Force you to change how your factory actually works to match software limits." },
                                    { icon: <FileText className="size-7" />, title: "Manual Job Cards", desc: "Paper gets lost, misread, or entered days late with no live tracking." },
                                    { icon: <Clock className="size-7" />, title: "Untracked Downtime", desc: "Machines stop unexpectedly and nobody logs the root cause." },
                                    { icon: <Factory className="size-7" />, title: "Disconnected Departments", desc: "Inventory, Sales, and Production operate in isolated data silos." },
                                    { icon: <BarChart3 className="size-7" />, title: "Delayed Reporting", desc: "End of month is far too late to fix today's shop floor bottlenecks." },
                                    { icon: <ShieldCheck className="size-7" />, title: "Quality Blindspots", desc: "Lack of stage-wise QC checklists leading to expensive rework & scrap." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-tight relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Balanced 4-Column 8-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Design Your Factory's Digital Nervous System
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            From raw material entry to final QC, we build modular manufacturing shop floor systems designed for operators, supervisors, and management—all from simple web and mobile dashboards.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <Workflow className="size-6" />, f: "Production Planning", c: "Auto-scheduling based on machine availability, capacity & shifts." },
                                    { icon: <Smartphone className="size-6" />, f: "Digital Job Cards", c: "Interactive touch job cards via mobile & tablet for floor operators." },
                                    { icon: <Gauge className="size-6" />, f: "Machine Monitoring", c: "Real-time downtime logging, breakdown alerts & repair status." },
                                    { icon: <ClipboardCheck className="size-6" />, f: "Quality Control (QC)", c: "Stage-wise QC checklists, rework logging & rejection tracking." },
                                    { icon: <Box className="size-6" />, f: "Material Traceability", c: "Batch & lot tracking from raw material inward to finished goods." },
                                    { icon: <Clock className="size-6" />, f: "Shift Tracking", c: "Real-time tracking of shift performance, operator output & targets." },
                                    { icon: <Boxes className="size-6" />, f: "Live Inventory Sync", c: "Automatic stock depletion directly through shop floor production runs." },
                                    { icon: <TrendingUp className="size-6" />, f: "Analytics & KPIs", c: "Automated OEE calculations, yield analysis & actionable cost reporting." }
                                ].map((row, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-7 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        
                                        <div className="flex items-center justify-between mb-5 relative z-10">
                                            <div className="size-12 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                {row.icon}
                                            </div>
                                            <span className="text-[11px] font-black text-zinc-400/80 tracking-widest uppercase">
                                                0{i + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-snug relative z-10">
                                            {row.f}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed relative z-10 mt-auto">
                                            {row.c}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Custom Manufacturing Flow (Stylish Connected Pipeline) */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WORKFLOW PIPELINE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Custom Manufacturing Flow
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            End-to-end operational visibility across your factory floor in five connected stages.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            
                            <div className="relative">
                                {/* Connecting Track Line */}
                                <div className="hidden lg:block absolute top-[6.5rem] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 z-0"></div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 items-stretch relative z-10">
                                    {[
                                        {
                                            step: "01",
                                            tag: "Inward Gate",
                                            icon: <Boxes className="size-7" />,
                                            title: "Raw Material",
                                            desc: "Inward inspection, quality check & automated lot/batch barcode generation."
                                        },
                                        {
                                            step: "02",
                                            tag: "Shop Floor",
                                            icon: <Factory className="size-7" />,
                                            title: "Production",
                                            desc: "Machine-wise job assignment, shift logs & operator task completion."
                                        },
                                        {
                                            step: "03",
                                            tag: "Inspection",
                                            icon: <CheckCircle className="size-7" />,
                                            title: "Quality Check",
                                            desc: "Stage-wise QC parameters, rework routing & scrap logging."
                                        },
                                        {
                                            step: "04",
                                            tag: "Logistics",
                                            icon: <Truck className="size-7" />,
                                            title: "Dispatch",
                                            desc: "Automated packing lists, shipping labels & E-Way bill dispatch planning."
                                        },
                                        {
                                            step: "05",
                                            tag: "Management",
                                            icon: <BarChart3 className="size-7" />,
                                            title: "Analysis",
                                            desc: "Yield calculations, OEE downtime reports, and true batch cost analysis."
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                
                                                {/* Top Glow on Hover */}
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                {/* Step Number Badge */}
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Step {node.step}</span>
                                                </div>

                                                {/* Soft Light Icon Container */}
                                                <div className="size-18 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                {/* Node Tag */}
                                                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                                                    {node.tag}
                                                </span>

                                                {/* Node Title */}
                                                <h3 className="font-bold text-[#00477b] text-xl mb-3 tracking-tight">
                                                    {node.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-xs text-zinc-600 font-medium leading-relaxed mt-auto">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 5. Our Approach */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR APPROACH
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Don't Install Systems. We Design Them With You.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto">
                            We specialize in custom web apps, mobile apps, and backend dashboards that mirror exactly how your factory currently functions.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Discovery & Process Mapping", desc: "We walk your shop floor and map every production cycle, QC check, and bottleneck." },
                                    { icon: <Cog className="size-7" />, title: "Blueprint & UI Design", desc: "Custom UI mockups built for operators and supervisors to validate before coding." },
                                    { icon: <Code className="size-7" />, title: "Development & Integration", desc: "Robust backend APIs syncing seamlessly with your existing ERP, Tally, or IoT sensors." },
                                    { icon: <Zap className="size-7" />, title: "Deployment & Training", desc: "Hands-on operator training and ongoing support to ensure frictionless shop floor adoption." }
                                ].map((step, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-3 leading-tight relative z-10">{step.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Manufacturing Software Outperforms (Edge-to-Edge Layout) */}
                <section className="pt-20 pb-16 relative z-10">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                        <div className="w-full">
                            <div className="grid lg:grid-cols-12 items-stretch">
                                
                                {/* Left Side: Text Content */}
                                <div className="lg:col-span-6 px-6 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-20 flex flex-col justify-center">
                                    <div className="max-w-2xl">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                            WHY IT OUTPERFORMS
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                            Because Efficiency Comes From Alignment, Not Adoption.
                                        </h2>
                                        
                                        <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed mb-8">
                                            Generic off-the-shelf software forces factory workers to change their routines. Custom shop floor software fits your established machinery and line-workers seamlessly.
                                        </p>
                                        
                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Built exactly for your machines, people, and shop workflows.",
                                                "Touch-friendly UI designed for dusty factory floor tablets.",
                                                "Zero per-user licensing fees or restrictive vendor locks.",
                                                "Seamlessly connects with Tally, SAP, or legacy accounting."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3.5">
                                                    <div className="bg-blue-100 rounded-full p-1 mt-0.5 shrink-0 text-[#00477b]">
                                                        <CheckCircle2 className="size-4" />
                                                    </div>
                                                    <span className="text-zinc-700 font-semibold text-[15px]">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <div>
                                            <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                                Book a Discovery Call
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Image (No Radius) */}
                                <div className="lg:col-span-6 min-h-[360px] lg:min-h-[540px] relative overflow-hidden">
                                    <img 
                                        src="/assets/custom-manufact.webp" 
                                        alt="Custom Manufacturing" 
                                        className="w-full h-full object-cover object-center rounded-none" 
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Technology & Capabilities (Modern 6-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            TECH STACK & ARCHITECTURE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Enterprise-Grade Tech, Applied To SME Manufacturing
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Modern, resilient, and battle-tested frameworks built to handle high-frequency factory data.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        icon: <Server className="size-6" />,
                                        area: "Backend Engine",
                                        desc: "High-concurrency data processing, custom business logic, and transactional integrity.",
                                        stack: ["Laravel", "Node.js", "Python", "REST APIs", "PostgreSQL"]
                                    },
                                    {
                                        icon: <Layout className="size-6" />,
                                        area: "Frontend & UI",
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for plant operators.",
                                        stack: ["React.js", "Next.js", "Vue.js", "TypeScript", "TailwindCSS"]
                                    },
                                    {
                                        icon: <Smartphone className="size-6" />,
                                        area: "Mobile & Tablets",
                                        desc: "Offline-first shop floor mobile apps and rugged tablet workstations.",
                                        stack: ["React Native", "Android Tablets", "Offline Sync", "PWA Support"]
                                    },
                                    {
                                        icon: <Cpu className="size-6" />,
                                        area: "IoT & Integrations",
                                        desc: "Real-time hardware machine telemetry and bi-directional ERP synchronization.",
                                        stack: ["PLC Sensors", "SAP / Tally Bridge", "IoT Gateways", "Webhooks"]
                                    },
                                    {
                                        icon: <Cloud className="size-6" />,
                                        area: "Cloud Infrastructure",
                                        desc: "99.9% uptime SLA with automatic failover, containerization, and scaling.",
                                        stack: ["AWS", "DigitalOcean", "Docker", "CI/CD Pipelines", "Redis"]
                                    },
                                    {
                                        icon: <ShieldCheck className="size-6" />,
                                        area: "Security & Governance",
                                        desc: "Bank-grade data encryption, granular role permissions, and immutable audit logs.",
                                        stack: ["Role-Based ACL", "SSL 256-Bit", "Audit Trails", "Automated Backups"]
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                                        <div className="relative z-10">
                                            {/* Header with Icon & Category */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="size-13 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-[#00477b] leading-tight">
                                                        {item.area}
                                                    </h3>
                                                    <span className="text-[11px] font-black text-zinc-400 uppercase tracking-wider">
                                                        LAYER 0{i + 1}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-6">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Tech Badges / Pills */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60 relative z-10">
                                            {item.stack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-white/90 border border-blue-100/80 text-[12px] font-bold text-zinc-700 shadow-sm hover:bg-blue-50 hover:text-[#00477b] transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Engagement Models */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            ENGAGEMENT MODELS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Transparent Engagement, Flexible Scope
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: <FileCode className="size-7" />, 
                                        title: "Fixed-Scope Project", 
                                        desc: "For clearly defined web or app development projects with set milestones, delivery dates, and transparent budgets.",
                                        btn: "Get A Proposal"
                                    },
                                    { 
                                        icon: <Users className="size-7" />, 
                                        title: "Dedicated Tech Partner", 
                                        desc: "An extended engineering squad working exclusively with your factory to continuously develop and iterate systems.",
                                        btn: "Discuss Partnership"
                                    },
                                    { 
                                        icon: <CheckCircle className="size-7" />, 
                                        title: "Process Consulting", 
                                        desc: "A comprehensive on-site audit of your shop floor workflows to architect the ideal digital roadmap before building.",
                                        btn: "Book Process Review"
                                    }
                                ].map((model, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white p-9 rounded-[2.25rem] shadow-sm flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden">
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            {model.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3">{model.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium mb-8 leading-relaxed flex-grow">{model.desc}</p>
                                        <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold w-full shadow-md transition-all mt-auto">
                                            {model.btn}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Bottom CTA */}
                <section className="py-32 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            DIGITIZE YOUR SHOP FLOOR
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            Your Factory, Digitized By Engineers Who Understand Manufacturing
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop running modern production on paper job cards. Get a tailored shop floor nervous system with Gnosys Digital.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                Talk To Our Tech Expert
                            </Button>
                            <Button className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-14 text-base font-semibold shadow-sm transition-all w-full sm:w-auto">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

