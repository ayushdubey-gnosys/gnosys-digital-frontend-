import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Factory, Clock, Activity, Settings, BarChart3, 
    FileText, Zap, Search, Cog, CheckCircle2, FileCode, Users, CheckCircle, ArrowRight, Boxes, Truck, Code,
    ShieldCheck, Layers, Cpu, TrendingUp, ClipboardCheck, Smartphone, Server, Workflow, Gauge, RotateCcw, Box,
    Cloud, Database, Layout, Handshake, Compass, Lightbulb
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function CustomManufacturing() {
    return (
        <MainLayout>
            <Head title="Custom Manufacturing Software Development" />
            
            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/custom-manufacturing.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                YOUR FACTORY DOES NOT NEED A SYSTEM. IT NEEDS A NERVOUS SYSTEM.
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Your Production Runs Daily. <br />
                                <span className="text-blue-100 font-normal">But Your Visibility Stops At Paperwork.</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Custom Web Applications, Mobile Apps, And Shop Floor Management Systems. We digitize the dirty, messy, undocumented workflows that off-the-shelf ERPs just can't handle.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <span className="relative z-10 flex items-center gap-2">Talk to a manufacturing expert <ArrowRight className="size-5" /></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Explore our implementations
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why Generic ERP Systems Fail For SMEs */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GENERIC ERP SYSTEMS FAIL FOR SMES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            Your Process Isn't Standard — So Why Use Standard Software?
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Settings className="size-7" />, title: "Rigid ERP Systems", desc: "Too complex, too expensive, and full of unused features." },
                                    { icon: <FileText className="size-7" />, title: "Manual Job Cards", desc: "Operators track production on paper or WhatsApp." },
                                    { icon: <Clock className="size-7" />, title: "Unlogged Downtime", desc: "Machines stop, no one records why." },
                                    { icon: <Factory className="size-7" />, title: "Disconnected Departments", desc: "Production, store, and quality don't share live data." },
                                    { icon: <BarChart3 className="size-7" />, title: "Delayed Reporting", desc: "You only see yesterday's data — today." }
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

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-10">
                                You don't need “ERP.” You need <span className="font-bold text-[#00477b]">your own control system</span> — built for how you manufacture.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Balanced 4-Column 8-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD FOR YOU
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Design Your Factory's Digital Nervous System.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Every manufacturing unit operates differently. We develop custom Manufacturing & Operations Control Systems that digitize your unique process — from raw material to dispatch — without disrupting how your team already works.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <Workflow className="size-6" />, f: "Production Planning", c: "Job scheduling, load balancing, shift assignment" },
                                    { icon: <Smartphone className="size-6" />, f: "Job Card System", c: "Operator-wise job creation, tracking & status updates" },
                                    { icon: <Gauge className="size-6" />, f: "Machine Monitoring", c: "Downtime logging, utilization reports, reason codes" },
                                    { icon: <ClipboardCheck className="size-6" />, f: "Quality & Inspection", c: "Stage-wise QC forms, rejection tagging, NCR workflow" },
                                    { icon: <Box className="size-6" />, f: "Material Traceability", c: "Batch and part tracking through production stages" },
                                    { icon: <Clock className="size-6" />, f: "WIP Tracking", c: "Real-time visibility of what's in process and where" },
                                    { icon: <Boxes className="size-6" />, f: "Dispatch Sync", c: "Production-to-dispatch linkage, order fulfillment dashboard" },
                                    { icon: <TrendingUp className="size-6" />, f: "Analytics & KPIs", c: "OEE, productivity, output, and downtime analysis" }
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
                                            desc: "Sources quality inputs for production"
                                        },
                                        {
                                            step: "02",
                                            tag: "Shop Floor",
                                            icon: <Factory className="size-7" />,
                                            title: "Production",
                                            desc: "Transforms raw materials into products"
                                        },
                                        {
                                            step: "03",
                                            tag: "Inspection",
                                            icon: <CheckCircle className="size-7" />,
                                            title: "Quality Check",
                                            desc: "Ensures every product meets standards"
                                        },
                                        {
                                            step: "04",
                                            tag: "Logistics",
                                            icon: <Truck className="size-7" />,
                                            title: "Dispatch",
                                            desc: "Packages and ships finished goods"
                                        },
                                        {
                                            step: "05",
                                            tag: "Management",
                                            icon: <BarChart3 className="size-7" />,
                                            title: "Analytics",
                                            desc: "Tracks performance and efficiency metrics"
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
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Discovery & Process Mapping", desc: "We visit your factory (physically or virtually) to study how jobs, materials, and machines flow." },
                                    { icon: <Cog className="size-7" />, title: "System Blueprint & UI Design", desc: "You'll see screen mockups, process diagrams, and data flow before a single line of code is written." },
                                    { icon: <Code className="size-7" />, title: "Development & Integration", desc: "Built using Laravel full-stack architecture with modules for roles, reports, and automation." },
                                    { icon: <Zap className="size-7" />, title: "Training, Deployment & Support", desc: "We train your staff, roll out the system in phases, and stay onboard for refinements." }
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

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                                Your process. Your terminology. Your control — <span className="font-bold text-[#00477b]">now digital.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Manufacturing Systems Make Sense */}
                <section className="pt-20 pb-16 relative z-10">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                        <div className="w-full">
                            <div className="grid lg:grid-cols-12 items-stretch">
                                
                                {/* Left Side: Text Content */}
                                <div className="lg:col-span-6 px-6 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-20 flex flex-col justify-center">
                                    <div className="max-w-2xl">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                            WHY CUSTOM MANUFACTURING SYSTEMS MAKE SENSE
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                            Because Efficiency Comes From Alignment, Not Adoption.
                                        </h2>
                                        
                                        <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed mb-8">
                                            Generic off-the-shelf software forces factory workers to change their routines. Custom shop floor software fits your established machinery and line-workers seamlessly.
                                        </p>
                                        
                                        <ul className="space-y-4 mb-10">
                                            {[
                                                "Built around your machines, people, and workflows.",
                                                "Lower investment than full-scale ERPs.",
                                                "Works offline (PWA) — perfect for shop floors.",
                                                "Integrates with Tally, Excel, or your existing systems."
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
                                            <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                                <Link href="/free-digital-consultation">
                                                    Book a Discovery Call
                                                </Link>
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
                                        loading="lazy"
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
                            Technology & Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Enterprise-Grade Tech, Applied To SME-Scale Manufacturing.
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
                                        area: "Backend",
                                        desc: "High-concurrency data processing, custom business logic, and transactional database integrity.",
                                        stack: ["Laravel (PHP 8+)", "MySQL", "Redis"]
                                    },
                                    {
                                        icon: <Layout className="size-6" />,
                                        area: "Frontend",
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for plant operators and supervisors.",
                                        stack: ["Vue", "React", "Tailwind CSS"]
                                    },
                                    {
                                        icon: <Smartphone className="size-6" />,
                                        area: "Mobile Access",
                                        desc: "Offline-first shop floor mobile applications and rugged tablet workstations.",
                                        stack: ["PWA", "Offline-ready for shop floor"]
                                    },
                                    {
                                        icon: <Cpu className="size-6" />,
                                        area: "Integrations",
                                        desc: "Real-time hardware machine telemetry and bi-directional ERP & communication synchronization.",
                                        stack: ["Tally", "Zoho", "SAP B1", "WhatsApp", "Email Alerts"]
                                    },
                                    {
                                        icon: <Cloud className="size-6" />,
                                        area: "Hosting",
                                        desc: "99.9% uptime SLA with automatic failover, containerization, and flexible cloud environments.",
                                        stack: ["AWS", "DigitalOcean", "On-premise"]
                                    },
                                    {
                                        icon: <ShieldCheck className="size-6" />,
                                        area: "Security",
                                        desc: "Bank-grade data encryption, granular role-based permissions, and immutable audit trails.",
                                        stack: ["JWT Auth", "Role-based Access", "Backups", "Logs"]
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
                            Engagement Models
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Transparent Engagement, Flexible Scope.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    {
                                        icon: <Settings className="size-7" />,
                                        title: "Fixed-Scope Project",
                                        desc: "You know what you need. We build it with defined modules, timelines, and costs.",
                                        btn: "Request a Proposal"
                                    },
                                    {
                                        icon: <Handshake className="size-7" />,
                                        title: "Long-Term Technology Partner",
                                        desc: "You want a digital growth partner. We act as your in-house tech team, continuously evolving your system.",
                                        btn: "Discuss Partnership"
                                    },
                                    {
                                        icon: <Compass className="size-7" />,
                                        title: "Process & Tech Consulting",
                                        desc: "Unsure where to start? We map your manufacturing process and prepare a digital blueprint first.",
                                        btn: "Book a Discovery Call"
                                    }
                                ].map((card, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-8 sm:p-9 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center justify-between relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3 leading-tight relative z-10">{card.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-8 flex-1 relative z-10">
                                            {card.desc}
                                        </p>
                                        <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-xl px-6 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full relative z-10">
                                            <Link href="/free-digital-consultation">
                                                {card.btn}
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Why Gnosys Digital */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Why Gnosys Digital
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                            Your Factory, Digitized By Engineers <br className="hidden sm:inline" />
                            Who Understand Manufacturing.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10 text-left">
                                {[
                                    { step: "01", text: "10+ years in building systems for production, logistics, and operations." },
                                    { step: "02", text: "Laravel full-stack expertise for scalability and security." },
                                    { step: "03", text: "Ground-level understanding of SME factory environments." },
                                    { step: "04", text: "Agile delivery and transparent project management." },
                                    { step: "05", text: "Long-term support, training, and evolution." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-start min-h-[160px] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <span className="text-[11px] font-black text-zinc-400/80 tracking-widest uppercase mb-3 relative z-10">
                                            {item.step}
                                        </span>
                                        <p className="text-xs sm:text-sm text-zinc-700 font-semibold leading-relaxed relative z-10">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-lg px-8 h-12 text-sm font-bold shadow-md transition-all">
                                <Link href="/free-digital-consultation">
                                    Talk to Gnosys Solutions Expert
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 10. Bottom CTA */}
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
                            <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Talk To Our Tech Expert
                                </Link>
                            </Button>
                            <Button asChild className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-14 text-base font-semibold shadow-sm transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Book a Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

