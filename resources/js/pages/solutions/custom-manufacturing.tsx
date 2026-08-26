import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Factory, Clock, Activity, Settings, BarChart3, 
    FileText, Zap, Search, Cog, CheckCircle2, FileCode, Users, CheckCircle, ArrowRight, Boxes, Truck, Code,
    ShieldCheck, Layers, Cpu, TrendingUp, ClipboardCheck, Smartphone, Server, Workflow, Gauge, RotateCcw, Box,
    Cloud, Database, Layout, Handshake, Compass, Lightbulb, Trophy, Sparkles
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
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/custom-manufacturing.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none lg:w-1/2" />
                </div>

                {/* Dynamic Shining Ambient Light Beam Sweep & Pulse Glows */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-85">
                    <div 
                        className="absolute -inset-y-32 -left-1/3 w-[55%] bg-gradient-to-r from-transparent via-cyan-400/15 via-blue-500/10 to-transparent animate-[beamSweep_8s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-3xl opacity-0" 
                        style={{ animationDelay: '1.4s', animationFillMode: 'backwards' }}
                    />
                    <div 
                        className="absolute -inset-y-32 -left-1/3 w-[28%] bg-gradient-to-r from-transparent via-white/12 to-transparent animate-[beamSweep_8s_cubic-bezier(0.4,0,0.2,1)_infinite] blur-xl opacity-0" 
                        style={{ animationDelay: '1.65s', animationFillMode: 'backwards' }}
                    />
                    <div className="absolute top-1/4 left-1/4 size-72 bg-blue-500/10 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />
                    <div className="absolute top-1/2 right-1/3 size-80 bg-teal-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6.5s', animationDelay: '1s' }} />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                Shop Floor & Operations MES
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Your Production Runs Daily. <br />
                                <span className="text-blue-100 font-normal">Your Visibility Shouldn't Stop At Paper.</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Custom Web Applications, Mobile Apps, and Shop Floor Control Systems. We digitize complex, unstandardized factory workflows that off-the-shelf ERPs cannot handle.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Talk to an expert <ArrowRight className="size-5" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                
                {/* 2. Why Generic ERP Systems Fail For SMEs (5 Square Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                The Problem
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Off-The-Shelf ERPs Fail Modern Factories
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    { icon: Settings, title: "Rigid ERP Modules", desc: "Excessively complex, overpriced, and loaded with features your factory never uses." },
                                    { icon: FileText, title: "Paper Job Cards", desc: "Operators log machine output on paper or WhatsApp groups leading to data gaps." },
                                    { icon: Clock, title: "Unlogged Downtime", desc: "Lines stop without reason codes, leaving root-cause bottleneck analysis impossible." },
                                    { icon: Factory, title: "Siloed Departments", desc: "Stores, production floor, and quality control operate without live shared visibility." },
                                    { icon: BarChart3, title: "Yesterday's Reports", desc: "Plant managers only discover output deficits and scrap spikes the following day." }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-14 mb-4 rounded-xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (8 Core Capabilities) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                What We Build
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                We Design Your Factory's Digital Nervous System
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                Custom Shop Floor Management Systems that digitize your unique workflows - from raw material inward to dispatch - without disrupting factory routines.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: Workflow, title: "Production Planning", desc: "Dynamic job scheduling, machine capacity balancing, and shift-wise operator assignments." },
                                    { icon: Smartphone, title: "Digital Job Cards", desc: "Touch-friendly tablet & mobile job creation, stage completion, and worker time logs." },
                                    { icon: Gauge, title: "Machine OEE Monitoring", desc: "Automated machine status logging, downtime reason codes, and utilization heatmaps." },
                                    { icon: ClipboardCheck, title: "Quality & Inspection", desc: "Multi-stage QA check forms, batch rejection tagging, and automated NCR resolution." },
                                    { icon: Box, title: "Batch & Part Traceability", desc: "End-to-end QR/barcode tracking from raw heat number to finished assembled product." },
                                    { icon: Clock, title: "Real-Time WIP Visibility", desc: "Live plant-floor status showing exactly what component is at which workstation." },
                                    { icon: Boxes, title: "Dispatch & Packing Sync", desc: "Auto packing list generation, batch validation, and instant ERP invoice sync." },
                                    { icon: TrendingUp, title: "Executive KPI Dashboards", desc: "Real-time OEE metrics, shift output velocity, scrap percentages, and true job costs." }
                                ].map((mod, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * ((i % 4) + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <mod.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{mod.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Custom Manufacturing Flow (Connected Horizontal Roadmap Timeline) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Production Pipeline
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Integrated Factory Flow
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                End-to-end operational visibility across your factory floor in five connected stages.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="relative max-w-[85rem] mx-auto">
                            
                            {/* Horizontal Roadmap Connector Track */}
                            <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
                                {[
                                    {
                                        step: "01",
                                        tag: "Inward Gate",
                                        icon: Boxes,
                                        title: "Raw Material",
                                        desc: "Barcode inwarding, supplier test certificate linkage, and stock bin allocation."
                                    },
                                    {
                                        step: "02",
                                        tag: "Shop Floor",
                                        icon: Factory,
                                        title: "Production Routing",
                                        desc: "Work orders, machine allocation, job cards, and real-time scrap tracking."
                                    },
                                    {
                                        step: "03",
                                        tag: "Quality Inspection",
                                        icon: CheckCircle,
                                        title: "Stage-Wise QA",
                                        desc: "Dimensional checks, tolerance validation, and digital sign-off approvals."
                                    },
                                    {
                                        step: "04",
                                        tag: "Warehouse Gate",
                                        icon: Truck,
                                        title: "Packing & Dispatch",
                                        desc: "Batch packaging, automated dispatch notes, and integrated freight tracking."
                                    },
                                    {
                                        step: "05",
                                        tag: "Plant Control",
                                        icon: BarChart3,
                                        title: "Plant Intelligence",
                                        desc: "Live OEE metrics, operator efficiency rankings, and machine maintenance alerts."
                                    }
                                ].map((node, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div className="group relative flex flex-col items-center h-full">
                                            
                                            {/* Top Roadmap Node */}
                                            <div className="relative mb-6">
                                                <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                    <node.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                {/* Step Number Tag */}
                                                <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                                    {node.step}
                                                </span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-2.5 relative z-10">
                                                    {node.tag}
                                                </span>

                                                <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                    {node.title}
                                                </h3>

                                                <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Our Approach */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Our Methodology
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                We Design Software Around Your Plant - Not The Other Way Around
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
                                We build touch interfaces and backend dashboards that mirror exactly how your plant supervisors and workers operate.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: Search, 
                                        title: "Plant Process Audit", 
                                        desc: "We study your production layout, machine cycles, and operator shift routines on-site or virtually." 
                                    },
                                    { 
                                        icon: Cog, 
                                        title: "Blueprint & UI Wireframing", 
                                        desc: "You review interactive prototypes and simplified shop-floor touch screens before we code." 
                                    },
                                    { 
                                        icon: Code, 
                                        title: "Custom Development & Sync", 
                                        desc: "Engineered on modern Laravel & React with bi-directional Tally, ERP, or PLC telemetry connectors." 
                                    },
                                    { 
                                        icon: Zap, 
                                        title: "Line Testing & Staff Training", 
                                        desc: "Pilot launch on a single manufacturing line, worker training, and phased plant-wide deployment." 
                                    }
                                ].map((step, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <step.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{step.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{step.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Manufacturing Systems Make Sense (Edge-to-Edge Split Layout) */}
                <section className="relative z-10 my-10 sm:my-12">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid lg:grid-cols-12 items-stretch">
                                
                                {/* Left Side: Checklist Content */}
                                <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-6 h-full">
                                    <div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-14 flex flex-col justify-center text-left h-full">
                                        <div className="max-w-xl">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-5">
                                                Strategic Alignment
                                            </span>
                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                                                Because Manufacturing Efficiency Comes From Alignment, Not Compromise.
                                            </h2>
                                            
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-6">
                                                Generic software forces workers to alter established habits. Custom shop floor systems mold seamlessly to your lines, jigs, and machines.
                                            </p>
                                            
                                            <div className="space-y-3 mb-6">
                                                {[
                                                    "Built specifically for your machines, line workers, and plant layout",
                                                    "Significantly lower total cost of ownership than bloated legacy ERPs",
                                                    "Works offline via robust PWA workstations for zero plant downtime",
                                                    "Seamless 2-way data bridge with Tally, SAP B1, or ERPNext"
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xs hover:bg-white transition-all">
                                                        <div className="shrink-0 size-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#00477b]">
                                                            <CheckCircle className="size-4" />
                                                        </div>
                                                        <span className="text-zinc-700 text-xs sm:text-sm font-semibold leading-snug">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div>
                                                <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                                    <Link href="/free-digital-consultation">
                                                        Book a Discovery Call
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right Side: Edge-to-Edge Image */}
                                <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 h-full">
                                    <div className="min-h-[380px] lg:min-h-[480px] h-full relative bg-[#02050f] overflow-hidden flex items-center justify-center">
                                        <img 
                                            src="/assets/custom-manufact.webp" 
                                            alt="Custom Manufacturing" 
                                            className="w-full h-full object-cover object-center rounded-none" 
                                            loading="lazy"
                                        />
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Technology & Capabilities (6 Architecture Layer Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Architecture
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Enterprise-Grade Tech, Engineered For Plant Reliability
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        icon: Server,
                                        area: "Backend Engine",
                                        desc: "High-concurrency data ingestion, transactional data integrity, and lightning-fast job status queries.",
                                        stack: ["Laravel (PHP 8.3)", "MySQL", "Redis Queues"]
                                    },
                                    {
                                        icon: Layout,
                                        area: "Operator UI",
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for plant operators and supervisors.",
                                        stack: ["React 19", "Tailwind CSS v4", "Inertia.js"]
                                    },
                                    {
                                        icon: Smartphone,
                                        area: "Mobile & Tablet Access",
                                        desc: "Offline-first shop floor PWA mobile apps and ruggedized tablet workstations.",
                                        stack: ["Offline PWA", "Barcode Scanner SDK", "Touch Mode"]
                                    },
                                    {
                                        icon: Cpu,
                                        area: "Telemetry & Sync",
                                        desc: "Machine signal capture, PLC counters, and automated two-way ERP / accounting sync.",
                                        stack: ["Tally Prime", "Zoho Books", "SAP B1", "WhatsApp API"]
                                    },
                                    {
                                        icon: Cloud,
                                        area: "Cloud & On-Premise",
                                        desc: "Flexible deployment options including private on-premise local plant servers or redundant cloud.",
                                        stack: ["AWS Cloud", "DigitalOcean", "Local Plant Servers"]
                                    },
                                    {
                                        icon: ShieldCheck,
                                        area: "Plant Security",
                                        desc: "Role-based permissions, shift operator authentication, 256-bit encryption, and audit trails.",
                                        stack: ["Sanctum Auth", "Granular RBAC", "Audit Trails"]
                                    }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            
                                            <div className="relative z-10">
                                                <div className="size-16 mb-5 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center">
                                                    <item.icon className="size-7 text-[#00477b]" />
                                                </div>

                                                <h3 className="text-xl font-normal text-[#00477b] mb-2 leading-tight tracking-tight">
                                                    {item.area}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60 relative z-10">
                                                {item.stack.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 rounded-full bg-white/90 border border-blue-100 text-[11px] font-bold text-[#00477b] shadow-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Engagement Models */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Engagement
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Transparent Engagement Models
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    {
                                        icon: Settings,
                                        title: "Fixed-Scope Project",
                                        desc: "Clear production modules, pre-agreed deliverables, and defined deployment timelines.",
                                        btn: "Request a Proposal",
                                        href: "/delivery-engagement-models"
                                    },
                                    {
                                        icon: Handshake,
                                        title: "Long-Term Tech Partner",
                                        desc: "Continuous shop-floor digital transformation working as your dedicated in-house software wing.",
                                        btn: "Discuss Partnership",
                                        href: "/free-digital-consultation"
                                    },
                                    {
                                        icon: Compass,
                                        title: "Process & Tech Consulting",
                                        desc: "Shop floor workflow audit, line diagram mapping, and blueprinting before coding begins.",
                                        btn: "Book Discovery Session",
                                        href: "/growth-systems-discovery-call"
                                    }
                                ].map((card, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <Link
                                            href={card.href}
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden h-full cursor-pointer block"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10 transition-transform group-hover:scale-105">
                                                <card.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e]">{card.title}</h3>
                                            <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6 relative z-10">
                                                {card.desc}
                                            </p>
                                            <div className="w-full relative z-10">
                                                <Button className="bg-[#00477b] group-hover:bg-[#00335e] text-white rounded-full px-6 h-12 text-sm font-bold shadow-md group-hover:shadow-lg transition-all w-full pointer-events-none">
                                                    {card.btn}
                                                </Button>
                                            </div>
                                        </Link>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Why Gnosys Digital */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Why Gnosys
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Choose Gnosys Digital
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    { title: "10+ Years Plant Experience", desc: "Proven track record designing production, quality, and shop floor tracking systems.", icon: Trophy },
                                    { title: "Laravel & React Core", desc: "Rock-solid backend and reactive interfaces built for zero latency on rugged floor tablets.", icon: Code },
                                    { title: "Ground-Level Understanding", desc: "Designed for Indian plant supervisors, machine operators, and store keepers.", icon: Factory },
                                    { title: "Agile Phased Rollout", desc: "No production stoppages; we deploy line by line with clear progress milestones.", icon: Sparkles },
                                    { title: "Ongoing Support & SLAs", desc: "Transparent pricing, on-ground floor training, and continuous system evolution.", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-5 sm:p-6 rounded-[2rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-14 mb-4 rounded-xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Bottom CTA */}
                <section className="py-20 text-center relative z-10">
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-4">
                                Digitize Your Plant
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                Your Factory, Digitized By Engineers Who Understand Manufacturing
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-700 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
                                Stop running modern production on paper job cards. Build a tailored shop floor nervous system with Gnosys Digital.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Book a Free Consultation
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </MainLayout>
    );
}

