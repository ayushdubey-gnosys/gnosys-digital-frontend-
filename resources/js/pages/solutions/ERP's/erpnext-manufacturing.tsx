import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    CheckCircle, Factory, Settings, Database, Server,
    FileText, Search, ClipboardList, MapPin, Building,
    Activity, ShieldCheck, HelpCircle, ArrowRight, Cog,
    PhoneCall, FileCheck, Layers, Boxes, CircleDollarSign, Headset,
    ArrowUpRight, Users, Rocket, Wrench, Check, ChevronDown
} from 'lucide-react';
import React, { useState } from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextManufacturing() {
    return (
        <MainLayout>
            <Head title="ERPNext Solutions for Manufacturing SMEs" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-manufacturing.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none lg:w-1/2" />
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
                                Manufacturing ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Tailored Digital Systems <br />
                                <span className="text-blue-100 font-normal">For Indian Factories</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Streamline production, manage shop-floor BOMs, track machine efficiency, and calculate accurate job profitability with ERPNext.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Get Free Factory Assessment <ArrowUpRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Common Manufacturing Challenges */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Common Manufacturing Bottlenecks
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: ClipboardList, title: "Delayed Manual Job Cards", desc: "Paper-based job sheets causing shop-floor delays, missed deadlines, and lost production logs." },
                                { icon: Boxes, title: "Inventory Halting Production", desc: "Raw material stockouts stopping active assembly lines due to lack of automated reorder planning." },
                                { icon: Cog, title: "Unscheduled Machine Breakdowns", desc: "Unplanned equipment downtime and reactive repairs disrupting weekly production targets." },
                                { icon: CircleDollarSign, title: "Unclear Job Costing", desc: "Inability to calculate exact scrap loss, operator overhead, and real-time product gross margins." },
                                { icon: FileText, title: "Slow Paper Audits", desc: "Scattered paper records slowing customer compliance inspections and ISO certification audits." },
                                { icon: ShieldCheck, title: "Untraceable Quality Defects", desc: "Difficulty tracing defective batches back to raw material suppliers or specific machine shifts." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. How ERPNext Helps / Manufacturing Solutions */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Transformation
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            How ERPNext Transforms Your Factory
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: ClipboardList, title: "Digital Work Orders", desc: "Automate digital work order generation with real-time workstation status and operator logs." },
                                { icon: Boxes, title: "Automated Material Planning", desc: "Automated BOM-based MRP, procurement triggers, and live inventory reserve tracking." },
                                { icon: Cog, title: "Preventive Maintenance", desc: "Automate machine calibration, scheduled maintenance alerts, and spare parts inventory." },
                                { icon: CircleDollarSign, title: "Accurate Job Costing", desc: "Real-time calculation of material, labor, electricity overheads, and true profit margins." },
                                { icon: FileCheck, title: "GST-Ready Compliance", desc: "1-Click automated E-way bills, GST tax invoices, and compliant audit trails." },
                                { icon: ShieldCheck, title: "Quality & Batch Traceability", desc: "End-to-end multi-stage inspection checklists, non-conformance logs, and serial tracking." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Key ERPNext Modules For Manufacturers */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key ERPNext Modules For Manufacturers
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    icon: ClipboardList,
                                    title: "Production & Planning",
                                    items: [
                                        "Multi-level Bill of Materials (BOM) & nested assemblies",
                                        "Material Requirement Planning (MRP) and capacity scheduling",
                                        "Work order dispatching with automated material issue triggers"
                                    ]
                                },
                                {
                                    icon: Cog,
                                    title: "Shop Floor Execution",
                                    items: [
                                        "Digital Job Cards with barcode/QR scanning",
                                        "Workstation utilization logs & operator timesheets",
                                        "Real-time WIP (Work-In-Progress) and scrap monitoring"
                                    ]
                                },
                                {
                                    icon: Boxes,
                                    title: "Inventory & Quality",
                                    items: [
                                        "Multi-location raw material and finished goods warehouses",
                                        "Batch & serial number tracking with FEFO/FIFO rules",
                                        "Incoming, in-process, and final quality inspection plans"
                                    ]
                                },
                                {
                                    icon: CircleDollarSign,
                                    title: "Costing & Compliance",
                                    items: [
                                        "Accurate job costing, scrap overheads & gross margin reports",
                                        "1-Click GST invoicing, E-Way bills & GSTR 1/3B sync",
                                        "Complete audit trail logs for ISO compliance"
                                    ]
                                }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <mod.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {mod.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <CheckCircle className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Roadmap - Connected Roadmap Style */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Roadmap
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Factory Implementation Roadmap
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="relative max-w-[80rem] mx-auto">

                        {/* Horizontal Roadmap Connector Track */}
                        <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
                            {[
                                {
                                    step: "01",
                                    week: "Weeks 1-2",
                                    title: "Discovery & Process Mapping",
                                    desc: "Audit shop floor workflows, BOM structures, machine stations, and raw material stores.",
                                    icon: Search
                                },
                                {
                                    step: "02",
                                    week: "Weeks 3-4",
                                    title: "System & BOM Configuration",
                                    desc: "Configure multi-level BOMs, quality inspection criteria, and job card routing rules.",
                                    icon: Settings
                                },
                                {
                                    step: "03",
                                    week: "Weeks 5-6",
                                    title: "Floor Training & Parallel Run",
                                    desc: "Role-based training for shift supervisors, storekeepers, and finance controllers.",
                                    icon: Users
                                },
                                {
                                    step: "04",
                                    week: "Weeks 7-8",
                                    title: "Go-Live & Production Support",
                                    desc: "Execute complete live manufacturing runs with dedicated on-site support.",
                                    icon: Rocket
                                }
                            ].map((phase, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div className="group relative flex flex-col items-center">

                                        {/* Top Roadmap Node */}
                                        <div className="relative mb-6">
                                            <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                <phase.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            {/* Step Number Tag */}
                                            <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                                {phase.step}
                                            </span>
                                        </div>

                                        {/* Content Card */}
                                        <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[11px] uppercase tracking-wider mb-2.5 relative z-10">
                                                {phase.week}
                                            </span>

                                            <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                {phase.title}
                                            </h3>

                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                                {phase.desc}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Success Stories */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Stories
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Manufacturing Success Stories
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            <ScrollReveal animation="fade-up" delay={100} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-3 w-fit">
                                        Auto Components • Pune
                                    </span>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                        Planning Slashed to 3 Hours
                                    </h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                        Automated production planning cycle reduced from 2 full days to 3 hours, while material shortage bottlenecks dropped by 60%.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={150} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-3 w-fit">
                                        Furniture Unit • Rajasthan
                                    </span>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                        35% Higher Throughput
                                    </h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                        Real-time shop floor WIP tracking increased plant throughput by 35%, while precision job costing enabled competitive export pricing.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={200} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-3 w-fit">
                                        Food Processing • Gujarat
                                    </span>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight">
                                        25% Less Scrap & Waste
                                    </h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                        Batch expiry alerts cut raw material waste by 25%, while automated GST invoicing saved 20+ accounting hours every month.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Why Manufacturers Choose Gnosys Digital */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Why Gnosys
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Manufacturers Choose Gnosys Digital
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { title: "50+ Factory Deployments", desc: "50+ successful shop-floor implementations across automotive, plastics, and engineering units.", icon: Factory },
                                { title: "Tailored Shop-Floor Workflows", desc: "Customized BOMs, routing, and machine logging aligned to your plant layout.", icon: Settings },
                                { title: "Clear Predictable ROI", desc: "Transparent rollout packages starting at ₹50,000 with zero recurring licensing lock-ins.", icon: CircleDollarSign },
                                { title: "Full Handholding & Support", desc: "Local vernacular floor training, barcode hardware setup, and 24/7 technical assistance.", icon: Headset }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Industries We Serve */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Industries
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Manufacturing Sectors We Serve
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { title: "Discrete Manufacturing", desc: "Auto parts, machinery, electronics, fabricated metal, and modular furniture.", icon: Cog },
                                { title: "Process Manufacturing", desc: "Food & beverages, specialty chemicals, cosmetics, and pharmaceuticals.", icon: Layers },
                                { title: "Textile & Garments", desc: "Yarn spinning, fabric weaving, dyeing houses, and apparel manufacturing.", icon: Boxes },
                                { title: "Job Work & Contracting", desc: "Custom precision engineering, metal stamping, sheet bending, and contract assembly.", icon: Wrench }
                            ].map((ind, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <ind.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{ind.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{ind.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Take The First Step / Engagement Options */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Engage
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                            Take The First Step
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-xl mx-auto">
                            Choose how you want to begin transforming your manufacturing operations.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    option: "Option 01",
                                    title: "Free Process Assessment",
                                    desc: "30-minute expert review of your plant pain points and preliminary ROI recommendations."
                                },
                                {
                                    option: "Option 02",
                                    title: "Custom Live Demo",
                                    desc: "Interactive demonstration of ERPNext configured for your exact BOM and job card workflows."
                                },
                                {
                                    option: "Option 03",
                                    title: "Factory Site Visit",
                                    desc: "On-ground floor study, machine interface blueprint, and complete deployment roadmap."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-start overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[11px] uppercase tracking-wider mb-3 w-fit relative z-10">
                                            {item.option}
                                        </span>
                                        <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. FAQs + Contact Form Combined */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[1450px]">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            {/* Left Column: FAQs (5 cols) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 text-left flex flex-col items-start">
                                <span className="w-fit inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    FAQ
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                    Manufacturing FAQs
                                </h2>
                                <p className="text-zinc-600 mb-6 text-sm sm:text-base leading-relaxed font-normal">
                                    Common questions factory owners ask before modernizing shop floor operations.
                                </p>

                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-xl overflow-hidden w-full">
                                    <div className="relative z-10">
                                        <FaqAccordion
                                            items={[
                                                {
                                                    q: "Can ERPNext handle complex customized BOMs?",
                                                    a: "Yes, ERPNext supports multi-level BOMs with scrap calculation, sub-assemblies, and alternative raw materials."
                                                },
                                                {
                                                    q: "How soon do we see measurable ROI?",
                                                    a: "Most manufacturing plants see material wastage drop within 30 days and full production synchronization in 60-90 days."
                                                },
                                                {
                                                    q: "Can shop floor workers easily adopt the system?",
                                                    a: "Yes, simple touch screens, barcode scanning, vernacular languages, and on-ground floor training ensure seamless adoption."
                                                }
                                            ]}
                                            containerClassName="border-0 bg-transparent shadow-none"
                                            itemClassName="border-b border-zinc-200/60 last:border-b-0 py-2.5"
                                            buttonClassName="flex w-full items-center justify-between gap-3 px-2 py-3 text-left font-bold text-zinc-900 focus:outline-none hover:text-[#00477b] transition-colors text-sm rounded-xl"
                                            iconColorClass="text-[#00477b] font-bold"
                                            answerClassName="px-2 pb-3 pt-1 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column: Contact Form (7 cols) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl relative z-10">
                                    <div className="text-left mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Get Started
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal text-[#00477b] tracking-tight mb-1">
                                            Request Factory ERP Consultation
                                        </h3>
                                        <p className="text-zinc-600 text-xs sm:text-sm font-normal">
                                            Tell us about your production setup and our manufacturing architect will connect with you.
                                        </p>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="fullName" className="text-xs font-medium text-[#00477b]">Full Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-xs font-medium text-[#00477b]">Email Address *</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="phone" className="text-xs font-medium text-[#00477b]">Phone Number *</Label>
                                                <Input id="phone" placeholder="+91 98765 43210" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="companyName" className="text-xs font-medium text-[#00477b]">Plant / Company Name *</Label>
                                                <Input id="companyName" placeholder="e.g. Apex Engineering Works" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="industryType" className="text-xs font-medium text-[#00477b]">Manufacturing Sector</Label>
                                                <div className="relative">
                                                    <select id="industryType" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Discrete Manufacturing</option>
                                                        <option className="bg-white">Process Manufacturing</option>
                                                        <option className="bg-white">Textiles & Apparel</option>
                                                        <option className="bg-white">Job Work & Fabrication</option>
                                                        <option className="bg-white">Other Manufacturing Unit</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="employees" className="text-xs font-medium text-[#00477b]">Workforce Size</Label>
                                                <div className="relative">
                                                    <select id="employees" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">1 - 25 Workers</option>
                                                        <option className="bg-white">25 - 75 Workers</option>
                                                        <option className="bg-white">75 - 200 Workers</option>
                                                        <option className="bg-white">200+ Factory Workers</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <Label className="text-xs font-medium text-[#00477b]">Key Focus Areas</Label>
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {[
                                                    "BOM & Material Planning",
                                                    "Job Card & WIP Tracking",
                                                    "Machine Maintenance",
                                                    "True Costing & Margins"
                                                ].map((challenge, idx) => (
                                                    <label key={idx} className="flex items-center gap-2 cursor-pointer bg-white/50 p-2.5 rounded-xl border border-white/70 hover:bg-white/80 transition-colors">
                                                        <Checkbox className="border-white/80 bg-white/70 data-[state=checked]:bg-[#00477b] data-[state=checked]:text-white data-[state=checked]:border-[#00477b]" />
                                                        <span className="text-xs text-zinc-700 font-normal leading-tight">{challenge}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button type="button" className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 font-bold w-full shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2">
                                                Request Free Assessment <ArrowRight className="size-4" />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
