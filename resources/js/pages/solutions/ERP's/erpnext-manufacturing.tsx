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

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-manufacturing.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                MANUFACTURING ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Tailored Digital Systems <br />
                                <span className="text-blue-100 font-normal">For Indian Factories</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Streamline production, manage supply chains, and track profitability with ERPNext tailored for the Indian manufacturing industry.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Get A Free Assessment <ArrowRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
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
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    "Manual job cards are causing delays",
                                    "Inventory shortages are halting production",
                                    "Machine breakdowns disrupting schedules",
                                    "Unclear production costs affecting pricing",
                                    "Paper records slowing audits",
                                    "Hard-to-trace quality issues"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center h-full group relative overflow-hidden min-h-[140px]">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <p className="text-sm font-semibold text-[#00477b] leading-relaxed relative z-10">{item}</p>
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
                                    { icon: <ClipboardList className="size-7" />, title: "Digital Work Orders", desc: "Digital work orders with real-time tracking" },
                                    { icon: <Boxes className="size-7" />, title: "Material Planning", desc: "Automated material planning and alerts" },
                                    { icon: <Cog className="size-7" />, title: "Preventive Maintenance", desc: "Preventive maintenance scheduling" },
                                    { icon: <CircleDollarSign className="size-7" />, title: "Accurate Job Costing", desc: "Accurate job costing and profitability" },
                                    { icon: <FileCheck className="size-7" />, title: "GST-Ready Documentation", desc: "GST-ready digital documentation" },
                                    { icon: <ShieldCheck className="size-7" />, title: "Quality Traceability", desc: "Complete batch and quality traceability" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center h-full group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
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
                            Key ERPNext Modules For Manufacturers
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    {
                                        icon: <ClipboardList className="size-6 text-[#00477b]" />,
                                        title: "Production & Planning",
                                        items: [
                                            "Bill of Materials, Material & Capacity Planning",
                                            "Work Order Management from creation to completion"
                                        ]
                                    },
                                    {
                                        icon: <Cog className="size-6 text-[#00477b]" />,
                                        title: "Shop Floor Execution",
                                        items: [
                                            "Digital Job Cards, Machine Logging, Operator Efficiency",
                                            "Material Consumption Tracking"
                                        ]
                                    },
                                    {
                                        icon: <Boxes className="size-6 text-[#00477b]" />,
                                        title: "Inventory & Quality Management",
                                        items: [
                                            "Multi-Warehouse Control, Batch & Serial Tracking",
                                            "Inspection Plans, Non-Conformance Tracking, Supplier Rating"
                                        ]
                                    },
                                    {
                                        icon: <CircleDollarSign className="size-6 text-[#00477b]" />,
                                        title: "Costing & Compliance",
                                        items: [
                                            "Job Costing, Production Variance, Profitability Reports",
                                            "GST Invoicing, E-Way Bills, Audit Trails"
                                        ]
                                    }
                                ].map((mod, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-start text-left h-full group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="p-3.5 bg-blue-50/50 rounded-2xl mb-6 border border-blue-100/50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {mod.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-4 relative z-10">{mod.title}</h3>
                                        <ul className="space-y-3 mt-auto text-left w-full relative z-10">
                                            {mod.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-600 font-medium leading-relaxed">
                                                    <span className="text-[#00477b] font-bold mt-0.5">•</span>
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
                                    { 
                                        step: "1", 
                                        title: "Discovery & Configuration", 
                                        desc: [
                                            "Workflow analysis, requirement mapping",
                                            "Custom BOM, quality parameters, dashboards"
                                        ] 
                                    },
                                    { 
                                        step: "2", 
                                        title: "Training & Go-Live", 
                                        desc: [
                                            "Role-based training for managers, operators, and the accounts team",
                                            "Parallel run support, process optimization"
                                        ] 
                                    },
                                    { 
                                        step: "3", 
                                        title: "Ongoing Support", 
                                        desc: [
                                            "Monthly system health checks",
                                            "New feature training, scalability planning"
                                        ] 
                                    }
                                ].map((phase, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col text-left relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="size-11 rounded-full border border-blue-100 bg-blue-50/70 flex items-center justify-center mb-6 text-[#00477b] font-bold text-base shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {phase.step}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-4 relative z-10">{phase.title}</h3>
                                        <ul className="space-y-3.5 mt-auto w-full relative z-10">
                                            {phase.desc.map((pt, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-600 font-medium leading-relaxed">
                                                    <span className="text-[#00477b] font-bold mt-0.5">•</span>
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
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            STORIES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Success Stories
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[#00477b] mb-1">Auto Components</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Pune</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Production planning cut from 2 days to 3 hours; material shortage issues down 60%.</p>
                                </div>
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[#00477b] mb-1">Furniture Unit</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Rajasthan</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Real-time WIP tracking improved throughput by 35%; accurate costing enabled competitive pricing.</p>
                                </div>
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[#00477b] mb-1">Food Processing</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Gujarat</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Batch expiry alerts reduced waste by 25%; integrated accounting saved 20 hours monthly.</p>
                                </div>
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
                            Why Manufacturers Choose Gnosys Digital
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Factory className="size-6 text-[#00477b]" />, desc: "50+ factory implementations across India" },
                                    { icon: <Settings className="size-6 text-[#00477b]" />, desc: "Tailored ERPNext workflows to match your processes" },
                                    { icon: <CircleDollarSign className="size-6 text-[#00477b]" />, desc: "Clear pricing ₹50,000 – ₹3,00,000; ROI-focused" },
                                    { icon: <Headset className="size-6 text-[#00477b]" />, desc: "Full support: Local language & 24/7 help" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center group min-h-[160px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="p-3.5 bg-blue-50/50 rounded-2xl mb-4 border border-blue-100/50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <p className="text-sm font-bold text-[#00477b] leading-relaxed relative z-10">{item.desc}</p>
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
                                    { title: "Discrete Manufacturing", desc: "Auto, machinery, electrical goods, furniture" },
                                    { title: "Process Manufacturing", desc: "Food & beverages, chemicals, pharmaceuticals" },
                                    { title: "Textile & Apparel", desc: "Fabric, garments, dyeing, made-to-order units" },
                                    { title: "Job Work & Contract Manufacturing", desc: "Engineering, fabrication, assembly" }
                                ].map((ind, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center group min-h-[160px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <h3 className="text-base font-bold text-[#00477b] mb-2 relative z-10">{ind.title}</h3>
                                        <p className="text-xs text-zinc-600 font-medium leading-relaxed relative z-10">{ind.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Take The First Step */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            ENGAGE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Take The First Step
                        </h2>
                        <p className="text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Choose how you want to engage with our experts:
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        option: "Option 1 :",
                                        title: "Free Manufacturing Process Assessment",
                                        desc: "30-minute consultation, improvement areas, preliminary recommendations."
                                    },
                                    {
                                        option: "Option 2 :",
                                        title: "Customized Live Demo",
                                        desc: "See ERPNext in action, get workflows mapped, receive proposal."
                                    },
                                    {
                                        option: "Option 3 :",
                                        title: "Factory Site Visit",
                                        desc: "Detailed process mapping, blueprint, cost & timeline proposal."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col justify-start relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <span className="text-base font-bold text-[#00477b] mb-3 relative z-10">{item.option}</span>
                                        <p className="text-sm text-zinc-700 font-normal leading-relaxed relative z-10">
                                            <span className="font-semibold text-zinc-900">{item.title}</span> – {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. FAQs + Contact Form Combined */}
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
