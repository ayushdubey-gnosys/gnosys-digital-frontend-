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
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

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
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-tight drop-shadow-lg">
                            Tailored Digital Systems <br className="hidden sm:block" /> For Indian Factories
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-12 max-w-2xl mx-auto drop-shadow-md">
                            Streamline production, manage supply chains, and track profitability with ERPNext tailored for the Indian manufacturing industry.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">Get A Free Assessment <span className="text-xl">&rarr;</span></span>
                            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                        </Button>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* Main Content Wrapper */}
            <div className="bg-transparent">

                {/* 2. Common Manufacturing Challenges */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            CHALLENGES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Common Manufacturing Challenges
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <FileText className="size-7" />, title: "WIP Spreadsheets", desc: "Disconnected sheets for tracking shop-floor work-in-progress." },
                                    { icon: <Boxes className="size-7" />, title: "Stockout Blindspots", desc: "No real-time visibility on inventory shortages and raw material." },
                                    { icon: <Activity className="size-7" />, title: "Untracked Wastage", desc: "Unmonitored scrap, rejection, and yield loss during production." },
                                    { icon: <CircleDollarSign className="size-7" />, title: "Inaccurate Costing", desc: "Complex overheads leading to flawed product costing and pricing." },
                                    { icon: <Server className="size-7" />, title: "Legacy Dependency", desc: "Fragile desktop tools that fail to scale with modern plant growth." },
                                    { icon: <ShieldCheck className="size-7" />, title: "Slow Quality Control", desc: "Manual inspection logs delaying finished goods dispatch." }
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

                {/* 3. How ERPNext Helps */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            TRANSFORMATION
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            How ERPNext Helps
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Settings className="size-7" />, title: "Unified Platform", desc: "Single source of truth from procurement to final accounting." },
                                    { icon: <ClipboardList className="size-7" />, title: "Automated BOM & Work Orders", desc: "Multi-level BOMs with automated job card & dispatch generation." },
                                    { icon: <Activity className="size-7" />, title: "Shop Floor Tracking", desc: "Live production logs, machine downtime & worker output tracking." },
                                    { icon: <CircleDollarSign className="size-7" />, title: "Accurate Product Costing", desc: "Real-time landed cost, labour, and batch-wise profitability." },
                                    { icon: <CheckCircle className="size-7" />, title: "Approval Workflows", desc: "Role-based purchase, variance, and dispatch signoffs." },
                                    { icon: <FileCheck className="size-7" />, title: "GST & E-Way Compliance", desc: "100% compliant Indian tax invoicing & instant bill generation." }
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

                {/* 4. Key ERPNext Modules For Manufacturers */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            MODULES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key ERPNext Modules
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    {
                                        icon: <ClipboardList className="size-7" />,
                                        title: "Production & Planning",
                                        items: ["Bill of Materials (BOM)", "Capacity Planning", "Work Order Management", "Subcontracting workflows"]
                                    },
                                    {
                                        icon: <Cog className="size-7" />,
                                        title: "Shop Floor Execution",
                                        items: ["Digital Job Cards", "Machine downtime tracking", "Real-time status tracking", "Operator productivity"]
                                    },
                                    {
                                        icon: <Boxes className="size-7" />,
                                        title: "Inventory & Quality",
                                        items: ["Multi-warehouse & batch tracking", "Quality Inspection workflows", "Scrap & wastage tracking", "Automated reorder alerts"]
                                    },
                                    {
                                        icon: <CircleDollarSign className="size-7" />,
                                        title: "Finance & Compliance",
                                        items: ["Automated GST billing & E-Way bills", "Landed costing & profitability", "Bank reconciliation", "Payables & receivables"]
                                    }
                                ].map((mod, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {mod.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-4 relative z-10">{mod.title}</h3>
                                        <ul className="space-y-2.5 mt-auto text-left w-full relative z-10">
                                            {mod.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium leading-relaxed">
                                                    <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                        <div className="size-1.5 bg-[#00477b] rounded-full"></div>
                                                    </div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Implementation Approach */}
                <section className="pt-24 pb-12 text-center overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            ROADMAP
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Implementation Approach
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { step: "01", phase: "Phase 1", title: "Discovery & Configuration", desc: ["Factory audit & process mapping", "Custom dashboards & workflows", "Role & permission design"] },
                                    { step: "02", phase: "Phase 2", title: "Training & Go-Live", desc: ["Role-based shop floor training", "Phased rollout across units", "Pilot batch testing"] },
                                    { step: "03", phase: "Phase 3", title: "Ongoing Support", desc: ["Post-implementation stabilization", "Continuous system refinement", "Dedicated account manager"] }
                                ].map((phase, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <span className="inline-flex items-center justify-center bg-blue-100/60 text-[#00477b] font-extrabold text-[11px] px-3.5 py-1 rounded-full mb-5 tracking-widest uppercase relative z-10">
                                            {phase.phase}
                                        </span>
                                        <div className="size-16 mb-5 rounded-full bg-white text-[#00477b] border-2 border-blue-100 shadow-md flex items-center justify-center font-black text-xl group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {phase.step}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-4 relative z-10">{phase.title}</h3>
                                        <ul className="space-y-2.5 mt-auto text-left w-full relative z-10">
                                            {phase.desc.map((pt, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium leading-relaxed">
                                                    <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                        <div className="size-1.5 bg-[#00477b] rounded-full"></div>
                                                    </div>
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Success Stories */}
                <section className="py-32 text-center relative z-10 bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center"
                    style={{ backgroundImage: "url('/assets/worldmap.webp')" }}
                >
                    <div className="absolute inset-0 bg-[#0a2540]/40 z-0"></div>
                    <div className="container relative z-10 mx-auto px-4 max-w-[90rem]">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">
                            STORIES
                        </span>
                        <h2 className="mb-16 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white drop-shadow-md">
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
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Manufacturers Choose Us
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Factory className="size-7" />, title: "50+ Factory Deployments", desc: "Proven implementation track record across diverse manufacturing clusters in India." },
                                    { icon: <Settings className="size-7" />, title: "Tailored Workflows", desc: "Engineered specifically for discrete, process, job-work, and batch operations." },
                                    { icon: <CircleDollarSign className="size-7" />, title: "Transparent Pricing", desc: "Clear packages from ₹75,000 - ₹3,00,000 with zero hidden consultation charges." },
                                    { icon: <Headset className="size-7" />, title: "Dedicated SLA Support", desc: "Local Indian presence with rapid response times and dedicated ERP consultants." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-snug relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Industries We Serve */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            INDUSTRIES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Industries We Serve
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { title: "Discrete Manufacturing", desc: "Auto parts, machinery, precision engineering & finished goods factories." },
                                    { title: "Process Manufacturing", desc: "Food & beverage, chemicals, cosmetics, and pharmaceuticals." },
                                    { title: "Textile & Apparel", desc: "Yarn, fabric, garment manufacturing units, and textile processing mills." },
                                    { title: "Tech & Electronics", desc: "Light assembly, PCB manufacturing, consumer electronics & medical devices." }
                                ].map((ind, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-3 relative z-10">{ind.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{ind.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9 & 10. FAQs + Contact Form Combined */}
                <section className="pt-24 pb-12 relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            GET STARTED
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Manufacturing ERP Consultation & FAQs
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 lg:px-6 2xl:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">

                                {/* Left Column: Top FAQs */}
                                <div className="lg:col-span-5 lg:sticky lg:top-24">
                                    <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                                        <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50/80 text-[#00477b] text-[11px] font-extrabold uppercase tracking-widest border border-blue-100/50 mb-4">
                                            FAQ
                                        </span>
                                        <h3 className="text-2xl font-bold text-[#00477b] mb-6 relative z-10">Frequently Asked Questions</h3>

                                        <div className="relative z-10">
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
                                                itemClassName="border-b border-zinc-200/60 last:border-b-0 py-2"
                                                buttonClassName="flex w-full items-center justify-between gap-3 px-3 py-3.5 text-left font-bold text-zinc-900 focus:outline-none hover:text-[#00477b] transition-colors text-sm rounded-xl"
                                                iconColorClass="text-[#00477b] font-bold"
                                                answerClassName="px-3 pb-4 pt-1 text-sm text-zinc-600 font-medium leading-relaxed"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Contact Form */}
                                <div className="lg:col-span-7">
                                    <div className="bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                                        <h3 className="text-2xl font-bold text-[#00477b] mb-2 relative z-10">Tell Us About Your Manufacturing Needs</h3>
                                        <p className="text-sm text-zinc-500 font-medium mb-8 relative z-10">Fill out the form below and we'll get back to you with a personalized consultation.</p>

                                        <form className="space-y-5 relative z-10">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="fullName" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Full Name</Label>
                                                    <Input id="fullName" placeholder="Enter your full name" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="email" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Email Address</Label>
                                                    <Input id="email" type="email" placeholder="Enter your email" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="phone" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Phone Number</Label>
                                                    <Input id="phone" placeholder="Enter your phone number" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="companyName" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Company Name</Label>
                                                    <Input id="companyName" placeholder="Enter your company name" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="industryType" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Industry / Manufacturing Type</Label>
                                                    <select id="industryType" className="w-full h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-2 text-sm text-zinc-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white">
                                                        <option>Select Option</option>
                                                        <option>Discrete Manufacturing</option>
                                                        <option>Process Manufacturing</option>
                                                        <option>Textile & Apparel</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="employees" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Number of Employees</Label>
                                                    <select id="employees" className="w-full h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-2 text-sm text-zinc-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white">
                                                        <option>Select Option</option>
                                                        <option>1-10</option>
                                                        <option>11-50</option>
                                                        <option>51-200</option>
                                                        <option>200+</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="challenges" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">ERP Challenges</Label>
                                                <textarea id="challenges" rows={3} placeholder="Please describe the challenges you are facing..." className="w-full rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white"></textarea>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="contactMethod" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Preferred Contact Method</Label>
                                                <select id="contactMethod" className="w-full h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-2 text-sm text-zinc-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white">
                                                    <option>Choose an option</option>
                                                    <option>Email</option>
                                                    <option>Phone Call</option>
                                                </select>
                                            </div>

                                            <div className="pt-4">
                                                <button type="submit" className="w-full bg-gradient-to-r from-[#00477b] to-[#0063a7] text-white font-bold py-4 rounded-2xl shadow-[0_8px_30px_rgba(0,71,123,0.25)] hover:shadow-[0_12px_40px_rgba(0,71,123,0.35)] hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider">
                                                    Request Consultation →
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div> {/* End Main Content Wrapper */}

        </MainLayout>
    );
}
