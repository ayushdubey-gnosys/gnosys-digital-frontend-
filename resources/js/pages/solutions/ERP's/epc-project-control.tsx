import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Clock, DollarSign, Target, CheckCircle2,
    BarChart3, FileText, ShoppingCart, HardHat,
    Building2, FileCheck, ArrowRight, Settings, Users, ArrowUpRight,
    AlertCircle, Boxes, TrendingDown, Coins, EyeOff
} from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function EpcProjectControl() {
    return (
        <MainLayout>
            <Head title="EPC Project Control With ERPNext" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/epc-page.png')", backgroundColor: '#020b18' }}
                    ></div>
                    {/* Soft gradient on the left to ensure text is 100% readable while the image on the right remains crystal clear */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none lg:w-3/5"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                EPC PROJECT CONTROL ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                EPC Project Control <br />
                                <span className="text-blue-100 font-normal">With ERPNext</span>
                            </h1>
                        </ScrollReveal>

                        {/* 3 Key Highlights */}
                        <ScrollReveal animation="fade-up" delay={140}>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 text-white">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-sm">
                                    <Clock className="size-4 text-blue-300" />
                                    <span className="font-medium text-xs sm:text-sm">Deliver On Time</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-sm">
                                    <DollarSign className="size-4 text-emerald-300" />
                                    <span className="font-medium text-xs sm:text-sm">On Budget</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-sm">
                                    <Target className="size-4 text-cyan-300" />
                                    <span className="font-medium text-xs sm:text-sm">Every Time</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                One intelligent, integrated platform with unified control over engineering, procurement, site execution, billing and finance. All in one platform built for EPC complexity.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <span className="relative z-10 flex items-center gap-2">Book EPC Discovery Assessment <ArrowRight className="size-5" /></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Explore Modules
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Hidden Costs */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-7xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why EPC Companies Struggle With Spreadsheets & Silos
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                        The Hidden Costs Disrupting Your Projects
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto max-w-7xl px-4 md:px-8">
                        <div className="flex flex-wrap justify-center gap-6 text-left">
                            {[
                                {
                                    title: "Cost Overruns",
                                    desc: "Delayed visibility into actual vs budget leads to unexpected project losses and budget breaches.",
                                    icon: AlertCircle,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                },
                                {
                                    title: "Material Stock-Outs",
                                    desc: "Poor supply chain and inventory planning causes stock-outs, disrupting active site operations.",
                                    icon: Boxes,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                },
                                {
                                    title: "Procurement Delays",
                                    desc: "Unsynchronized purchasing schedules directly stall project execution and push back timelines.",
                                    icon: Clock,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                },
                                {
                                    title: "Profitability Leakage",
                                    desc: "Weak scope control and undocumented change orders bleed margins across the project lifecycle.",
                                    icon: TrendingDown,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                },
                                {
                                    title: "Manual Data Silos",
                                    desc: "Information scattered across growing project teams leads to massive delays and entry errors.",
                                    icon: Users,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                },
                                {
                                    title: "Cash Flow Traps",
                                    desc: "Delayed milestone billing and unapproved invoices lock up crucial working capital.",
                                    icon: Coins,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                },
                                {
                                    title: "Portfolio Blind Spots",
                                    desc: "Lack of centralized, multi-project visibility leaves managers blind to creeping performance issues.",
                                    icon: EyeOff,
                                    iconColor: "text-zinc-700 bg-zinc-100",
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-full sm:w-[calc(50%-12px)] flex flex-col items-start bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group",
                                        i < 4 ? "lg:w-[calc(25%-18px)]" : "lg:w-[calc(33.333%-16px)]"
                                    )}
                                >
                                    <div className="size-12 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-4 shrink-0 text-[#00477b]">
                                        <item.icon className="size-5 text-[#00477b]" />
                                    </div>
                                    <h4 className="font-bold text-[#00477b] text-lg mb-2">{item.title}</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. One Platform For Complete Project Visibility */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Unified Control. Engineering to Final Billing.
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                            One Platform For Complete Project Visibility
                        </h2>
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto max-w-7xl px-4 md:px-8">
                        <div className="grid lg:grid-cols-3 gap-6 mb-6">
                            {/* Top Row - 3 Cards */}
                            <div className="bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 rounded-[2rem] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                                <div className="size-13 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-6 text-[#00477b]">
                                    <BarChart3 className="size-6 text-[#00477b]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-3 tracking-tight">Exec. Time Cost Intelligence</h3>
                                <ul className="text-sm text-zinc-600 space-y-2.5 mt-auto">
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Dashboard for real-time project profitability.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Item-wise cost tracking against budget.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Project performance tracking across portfolio.</span></li>
                                </ul>
                            </div>
                            <div className="bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 rounded-[2rem] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                                <div className="size-13 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-6 text-[#00477b]">
                                    <FileText className="size-6 text-[#00477b]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-3 tracking-tight">Engineering & Document Control</h3>
                                <ul className="text-sm text-zinc-600 space-y-2.5 mt-auto">
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Comprehensive BOQ management linked to items.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Drawing revisions and version control.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Trace document approvals directly in system.</span></li>
                                </ul>
                            </div>
                            <div className="bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 rounded-[2rem] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                                <div className="size-13 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-6 text-[#00477b]">
                                    <ShoppingCart className="size-6 text-[#00477b]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-3 tracking-tight">Procurement & Subcontracts</h3>
                                <ul className="text-sm text-zinc-600 space-y-2.5 mt-auto">
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Automated POs, Indents and vendor approvals.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Subcontractor PO tracking against schedule.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Efficient quality control before issuing items.</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                            {/* Bottom Row - 2 Cards */}
                            <div className="bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 rounded-[2rem] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                                <div className="size-13 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-6 text-[#00477b]">
                                    <HardHat className="size-6 text-[#00477b]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-3 tracking-tight">Site Execution & Inventory</h3>
                                <ul className="text-sm text-zinc-600 space-y-2.5 mt-auto">
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Multi-location material tracking and stock visibility.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Site logging and daily progress reports.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Equipment usage and maintenance logging.</span></li>
                                </ul>
                            </div>
                            <div className="bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 rounded-[2rem] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                                <div className="size-13 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-6 text-[#00477b]">
                                    <Building2 className="size-6 text-[#00477b]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-3 tracking-tight">Financial Control & Compliance</h3>
                                <ul className="text-sm text-zinc-600 space-y-2.5 mt-auto">
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>AR/AP and automated invoicing.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>GST / tax compliance directly integrated.</span></li>
                                    <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-[#00477b]/70" strokeWidth={1.5} /> <span>Contract billing based on milestones and RA Bills.</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00477b] h-12 px-8 font-bold">
                                Schedule A Demo of EPC Workflows
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Unified Capabilities & Roadmap Section */}
            <section className="py-24 bg-transparent">
                {/* Headers (Outside/Above the glass background) */}
                <div className="w-full px-4 md:px-8 lg:px-10 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                Capabilities
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b]">
                                Critical Modules For EPC Success
                            </h2>
                        </div>
                        <div className="lg:col-span-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                Roadmap
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b]">
                                EPC Implementation Roadmap
                            </h2>
                            <p className="text-zinc-600 font-medium text-sm leading-relaxed mt-2">
                                Step-by-step path to efficient project execution and digital adoption.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content (Inside the glass background) */}
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="w-full px-4 md:px-8 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Side: Capabilities Cards (Columns: 6/12) */}
                            <div className="lg:col-span-6 space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Engineering & Planning</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Project planning with critical paths</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>BOQ & BOM management</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Drawing/revision control</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Change order management</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Procurement & Materials</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Purchase planning & indents</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Vendor performance tracking</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Material receipt & inspection</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>eProcurement / RFQ system</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Site & Labor</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Multi-site inventory tracking</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Subcontractor work orders</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Timesheets / labor logging</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Equipment utilization tracking</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Finance & Compliance</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Project Billing & Invoicing</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>GST / compliance tracking</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>AR/AP and project reporting</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Cash flow forecasting</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Roadmap (Columns: 6/12) */}
                            <div className="lg:col-span-6 space-y-6">

                                <div className="relative border-l-2 border-zinc-300 ml-4 md:ml-20 space-y-8 py-4">
                                    {[
                                        { step: "Week 1-2", title: "Process Discovery", desc: "Map EPC workflows and configure goals.", color: "bg-[#00477b]" },
                                        { step: "Week 3-4", title: "System Setup", desc: "Configuration of modules and permissions.", color: "bg-[#00477b]" },
                                        { step: "Week 5-6", title: "Data Migration & Testing", desc: "Legacy data import and end-to-end testing.", color: "bg-[#00477b]" },
                                        { step: "Week 7", title: "Team Training", desc: "Train on specific modules.", color: "bg-[#00477b]" },
                                        { step: "Week 8+", title: "Go-Live & Support", desc: "Launch and post-launch monitoring.", color: "bg-[#00477b]" },
                                    ].map((item, i) => (
                                        <div key={i} className="relative pl-8 md:pl-10 group">
                                            {/* Timeline Dot */}
                                            <span className={cn(
                                                "absolute -left-[17px] top-1 size-8 rounded-full flex items-center justify-center font-bold text-xs text-white shadow-lg ring-4 ring-white z-10",
                                                item.color
                                            )}>
                                                {i + 1}
                                            </span>

                                            {/* Left Side Time label (desktop only) */}
                                            <div className="hidden md:block absolute right-full mr-8 top-1.5 text-right whitespace-nowrap">
                                                <span className="text-xs font-extrabold text-zinc-600 uppercase tracking-wider">{item.step}</span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                {/* Mobile-only time label */}
                                                <span className="inline-block md:hidden text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-1">{item.step}</span>
                                                <h3 className="text-base font-bold text-[#00477b] mb-1">{item.title}</h3>
                                                <p className="text-zinc-600 text-xs leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries We Serve */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Industries
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Industries We Serve With Specialized Templates
                        </h2>
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto max-w-7xl px-4 md:px-8">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { title: "Infrastructure & Civil Construction", desc: "Roads, bridges, dams & civil EPC projects" },
                                { title: "Solar & Renewable EPC", desc: "Site audits, planning, procurement, panel tracing & grid synchronization" },
                                { title: "MEP Contractors", desc: "HVAC, plumbing, electrical installations & project maintenance" },
                                { title: "Industrial Plant EPC", desc: "Equipment detailing, commissioning & plant setup" },
                                { title: "Oil & Gas Support", desc: "Pipeline construction, maintenance & rig support" },
                                { title: "Interior & Architecture", desc: "Fit-out projects, space planning & design-build" }
                            ].map((ind, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-6 hover:border-zinc-400 hover:shadow-md transition-all text-left">
                                    <h3 className="font-bold text-[#00477b] mb-2">{ind.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{ind.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>




            {/* 8. Success Stories */}
            <section className="relative overflow-hidden py-24 text-white">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/epc-success.webp')", backgroundColor: '#09090b' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-10 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Side: Content aligned left */}
                        <div className="lg:col-span-6 space-y-8 text-left">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-4">
                                    Case Studies
                                </span>
                                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
                                    EPC Success Stories
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-black/45 backdrop-blur-lg border border-white/15 p-8 rounded-2xl shadow-xl">
                                    <h3 className="text-xl font-bold mb-4 text-white">Solar EPC Company (Gujarat)</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-zinc-200">
                                            <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-blue-400" />
                                            <span>Achieved operational control across 20+ active projects by streamlining procurement and site material requests.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-zinc-200">
                                            <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-blue-400" />
                                            <span>100% trace of panel serials and serial numbering.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-black/45 backdrop-blur-lg border border-white/15 p-8 rounded-2xl shadow-xl">
                                    <h3 className="text-xl font-bold mb-4 text-white">MEP Contractor (Hyderabad)</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-zinc-200">
                                            <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-blue-400" />
                                            <span>Integrated BOQ with billing schedules and site subcontracts in a single platform.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-zinc-200">
                                            <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-blue-400" />
                                            <span>Clear visibility on subcontractor payments vs work completed.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Empty space to show the background image */}
                        <div className="lg:col-span-6 hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* 9. Unified Outcomes & Pricing Section */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="w-full px-4 md:px-8 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Column: Pricing / Offer (5/12) */}
                            <div className="lg:col-span-5">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                    Limited-Time EPC Implementation Offer
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-6">
                                    ERPNext For EPC
                                </h2>

                                <div className="bg-white/70 backdrop-blur-xl border border-white/80 p-6 sm:p-7 rounded-3xl shadow-xl space-y-6">
                                    <div className="bg-white/90 border border-blue-100/80 rounded-2xl p-5 text-center sm:text-left shadow-2xs">
                                        <div className="text-zinc-500 font-bold mb-1 text-xs uppercase tracking-wider">Starting At</div>
                                        <div className="text-4xl sm:text-5xl font-extrabold text-[#00477b] tracking-tight">₹1,20,000</div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                                            Complete package including project management, BOQ & billing, procurement, dashboards, training & support
                                        </p>

                                        <div className="bg-blue-50/60 border border-blue-100/80 rounded-2xl p-5">
                                            <div className="text-sm font-bold text-[#00477b] mb-3">
                                                First 10 Implementations Receive:
                                            </div>
                                            <ul className="space-y-2.5 text-xs sm:text-[13px] text-zinc-700 font-medium">
                                                <li className="flex items-center gap-2.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                                    <span>Custom Project Control Dashboard</span>
                                                </li>
                                                <li className="flex items-center gap-2.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                                    <span>2 Additional User Licenses Free</span>
                                                </li>
                                                <li className="flex items-center gap-2.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                                    <span>3 Months Extended Support</span>
                                                </li>
                                                <li className="flex items-center gap-2.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                                    <span>Priority Go-Live Assistance</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Measurable Results (7/12) */}
                            <div className="lg:col-span-7 space-y-6">
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                        Outcomes
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-6">
                                        Measurable Results Our EPC Clients Achieve
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Operational Efficiency</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>50% faster PR creation and PO turnarounds.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Eliminated manual data entry across distributed sites.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>100% visibility into material tracing and dispatch routes.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Cost Control</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>30% reduction in material wastage due to strict tracking.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Prevent cost overruns through real-time budget vs actual tracking.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Identify scope creep before it damages project margins.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-bold text-sm sm:text-base">Financial Health</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>10% faster billing cycles via automated RA bill generation.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Consolidated view of cash flows across all active projects.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                                <span>Ensure vendor and subcontractor compliance.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Why Choose Us */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Why Partner With Us
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Choose Gnosys Digital As Your Partner?
                        </h2>
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto max-w-7xl px-4 md:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    text: "40+ successful EPC implementations",
                                    icon: HardHat,
                                },
                                {
                                    text: "Industry-specific templates for faster deployment",
                                    icon: FileCheck,
                                },
                                {
                                    text: "Transparent pricing with guaranteed deliverables",
                                    icon: Coins,
                                },
                                {
                                    text: "Dedicated support team familiar with EPC workflows",
                                    icon: Settings,
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center justify-center bg-white/80 hover:bg-white backdrop-blur-md border border-white/90 p-7 sm:p-8 rounded-[2rem] shadow-[0_4px_24px_rgba(0,40,90,0.04)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.12)] hover:-translate-y-1.5 transition-all duration-300 group min-h-[170px]">
                                    <div className="size-14 rounded-2xl bg-white shadow-md shadow-blue-900/5 border border-white flex items-center justify-center mb-5 shrink-0 text-[#00477b]">
                                        <item.icon className="size-6 text-[#00477b]" strokeWidth={1.5} />
                                    </div>
                                    <p className="font-bold text-[#00477b] text-sm sm:text-[15px] leading-relaxed group-hover:text-[#002f52]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Unified Transform & Contact Section */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="w-full px-4 md:px-8 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            {/* Left Side: CTA Content (Columns: 5/12) */}
                            <div className="lg:col-span-5 flex flex-col justify-start">
                                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Get Started</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                    Ready To Transform Your EPC Operations?
                                </h2>
                                <p className="text-zinc-600 font-medium mb-8 text-sm sm:text-base leading-relaxed">
                                    Let's map your workflows, discuss custom templates, and design a deployment plan that matches your project timelines. Speak directly to our domain experts.
                                </p>

                                {/* Bullet indicators to fill space professionally */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#00477b]">
                                            <CheckCircle2 className="size-3.5" />
                                        </div>
                                        <span className="text-sm font-semibold text-zinc-700">Detailed Workflow Assessment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#00477b]">
                                            <CheckCircle2 className="size-3.5" />
                                        </div>
                                        <span className="text-sm font-semibold text-zinc-700">Platform Demonstration & Sandbox Access</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#00477b]">
                                            <CheckCircle2 className="size-3.5" />
                                        </div>
                                        <span className="text-sm font-semibold text-zinc-700">Custom Implementation Pricing</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 lg:flex lg:justify-end w-full">
                                <div className="bg-white/25 backdrop-blur-md border border-white/50 p-6 sm:p-8 rounded-2xl shadow-xl w-full">
                                    <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-6">Tell Us About Your Requirements</h3>
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName" className="text-[#00477b] font-semibold text-xs sm:text-sm">Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="bg-white/45 border-white/60 focus:bg-white/70 focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-[#00477b] font-semibold text-xs sm:text-sm">Email *</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="bg-white/45 border-white/60 focus:bg-white/70 focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="budget" className="text-[#00477b] font-semibold text-xs sm:text-sm">Budget *</Label>
                                                <select id="budget" className="flex h-11 w-full rounded-xl border border-white/60 bg-white/45 px-3 py-2 text-sm text-[#00477b] font-medium ring-offset-background placeholder:text-muted-foreground focus:bg-white/70 focus:border-[#00477b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                                    <option>Select Budget</option>
                                                    <option>₹1L - ₹5L</option>
                                                    <option>₹5L - ₹15L</option>
                                                    <option>₹15L+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="projectType" className="text-[#00477b] font-semibold text-xs sm:text-sm">Project Type *</Label>
                                                <select id="projectType" className="flex h-11 w-full rounded-xl border border-white/60 bg-white/45 px-3 py-2 text-sm text-[#00477b] font-medium ring-offset-background placeholder:text-muted-foreground focus:bg-white/70 focus:border-[#00477b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                                    <option>Select Project Type</option>
                                                    <option>Solar EPC</option>
                                                    <option>Civil Construction</option>
                                                    <option>MEP</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="challenges" className="text-[#00477b] font-semibold text-xs sm:text-sm">Message</Label>
                                            <Textarea id="challenges" placeholder="Tell us about the issues you are facing..." className="min-h-[100px] bg-white/45 border-white/60 focus:bg-white/70 focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl transition-all" />
                                        </div>

                                        <div className="pt-2">
                                            <Button className="bg-[#00477b] text-white hover:bg-[#003862] font-bold h-12 px-8 rounded-full shadow-lg transition-all hover:scale-102 flex items-center gap-2">
                                                Submit Request <ArrowRight className="size-4" />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
