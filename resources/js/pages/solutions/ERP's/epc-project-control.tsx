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
    AlertCircle, Boxes, TrendingDown, Coins, EyeOff,
    Sun, Flame, Layers, Factory, Wrench
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
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Why EPC Companies Struggle With Spreadsheets & Silos
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            The Hidden Costs Disrupting Your Projects
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        {/* First Row: 4 Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-6">
                            {[
                                {
                                    title: "Cost Overruns",
                                    desc: "Delayed visibility into actual vs budget leads to unexpected project losses and budget breaches.",
                                    icon: AlertCircle
                                },
                                {
                                    title: "Material Stock-Outs",
                                    desc: "Poor supply chain and inventory planning causes stock-outs, disrupting active site operations.",
                                    icon: Boxes
                                },
                                {
                                    title: "Procurement Delays",
                                    desc: "Unsynchronized purchasing schedules directly stall project execution and push back timelines.",
                                    icon: Clock
                                },
                                {
                                    title: "Profitability Leakage",
                                    desc: "Weak scope control and undocumented change orders bleed margins across the project lifecycle.",
                                    icon: TrendingDown
                                }
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

                        {/* Second Row: 3 Cards Centered */}
                        <div className="flex flex-wrap justify-center gap-6 text-center">
                            {[
                                {
                                    title: "Manual Data Silos",
                                    desc: "Information scattered across growing project teams leads to massive delays and entry errors.",
                                    icon: Users
                                },
                                {
                                    title: "Cash Flow Traps",
                                    desc: "Delayed milestone billing and unapproved invoices lock up crucial working capital.",
                                    icon: Coins
                                },
                                {
                                    title: "Portfolio Blind Spots",
                                    desc: "Lack of centralized, multi-project visibility leaves managers blind to creeping performance issues.",
                                    icon: EyeOff
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] h-full">
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

            {/* 3. One Platform For Complete Project Visibility */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Unified Control. Engineering to Final Billing.
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            One Platform For Complete Project Visibility
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                            {/* Top Row - 3 Cards */}
                            <ScrollReveal animation="fade-up" delay={80} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <BarChart3 className="size-7 text-[#00477b]" />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">Exec. Time Cost Intelligence</h3>
                                    <ul className="text-sm sm:text-[15px] text-zinc-600 space-y-2.5 mt-auto text-left relative z-10 w-full">
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Dashboard for real-time project profitability.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Item-wise cost tracking against budget.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Project performance tracking across portfolio.</span></li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={160} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <FileText className="size-7 text-[#00477b]" />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">Engineering & Document Control</h3>
                                    <ul className="text-sm sm:text-[15px] text-zinc-600 space-y-2.5 mt-auto text-left relative z-10 w-full">
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Comprehensive BOQ management linked to items.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Drawing revisions and version control.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Trace document approvals directly in system.</span></li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={240} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <ShoppingCart className="size-7 text-[#00477b]" />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">Procurement & Subcontracts</h3>
                                    <ul className="text-sm sm:text-[15px] text-zinc-600 space-y-2.5 mt-auto text-left relative z-10 w-full">
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Automated POs, Indents and vendor approvals.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Subcontractor PO tracking against schedule.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Efficient quality control before issuing items.</span></li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-10">
                            {/* Bottom Row - 2 Cards */}
                            <ScrollReveal animation="fade-up" delay={80} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <HardHat className="size-7 text-[#00477b]" />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">Site Execution & Inventory</h3>
                                    <ul className="text-sm sm:text-[15px] text-zinc-600 space-y-2.5 mt-auto text-left relative z-10 w-full">
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Multi-location material tracking and stock visibility.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Site logging and daily progress reports.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Equipment usage and maintenance logging.</span></li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={160} className="h-full">
                                <div className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <Building2 className="size-7 text-[#00477b]" />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">Financial Control & Compliance</h3>
                                    <ul className="text-sm sm:text-[15px] text-zinc-600 space-y-2.5 mt-auto text-left relative z-10 w-full">
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>AR/AP and automated invoicing.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>GST / tax compliance directly integrated.</span></li>
                                        <li className="flex items-start gap-2.5"><ArrowRight className="size-4 shrink-0 mt-1 text-[#00477b]" /> <span>Contract billing based on milestones and RA Bills.</span></li>
                                    </ul>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="text-center">
                            <Button className="bg-[#00477b] hover:bg-[#003355] text-white h-12 px-8 font-bold rounded-full shadow-lg">
                                Schedule A Demo of EPC Workflows
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Unified Capabilities & Roadmap Section */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                {/* Headers (Outside/Above the glass background) */}
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 md:px-8 lg:px-10 mb-7 sm:mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
                            <div className="lg:col-span-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Capabilities
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b]">
                                    Critical Modules For EPC Success
                                </h2>
                            </div>
                            <div className="lg:col-span-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Roadmap
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b]">
                                    EPC Implementation Roadmap
                                </h2>
                                <p className="text-zinc-600 font-normal text-sm leading-relaxed mt-2">
                                    Step-by-step path to efficient project execution and digital adoption.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Content (Inside the glass background) */}
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            {/* Left Side: Capabilities Cards (Columns: 6/12) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-6 space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Engineering & Planning</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Project planning with critical paths</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>BOQ & BOM management</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Drawing/revision control</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Change order management</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Procurement & Materials</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Purchase planning & indents</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Vendor performance tracking</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Material receipt & inspection</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>eProcurement / RFQ system</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Site & Labor</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Multi-site inventory tracking</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Subcontractor work orders</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Timesheets / labor logging</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Equipment utilization tracking</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Finance & Compliance</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Project Billing & Invoicing</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>GST / compliance tracking</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>AR/AP and project reporting</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Cash flow forecasting</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Side: Roadmap (Columns: 6/12) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 space-y-6">

                                <div className="relative border-l-2 border-zinc-300 ml-4 md:ml-20 space-y-6 py-2">
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
                                                <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">{item.step}</span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="bg-white/60 backdrop-blur-lg border border-white/70 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                                {/* Mobile-only time label */}
                                                <span className="inline-block md:hidden text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-1">{item.step}</span>
                                                <h3 className="text-base font-normal text-[#00477b] mb-1">{item.title}</h3>
                                                <p className="text-zinc-600 text-xs leading-relaxed font-normal">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries We Serve */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Industries
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Industries We Serve With Specialized Templates
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: "Infrastructure & Civil Construction", desc: "Roads, bridges, dams & civil EPC projects with critical path tracking.", icon: Building2 },
                                { title: "Solar & Renewable EPC", desc: "Site audits, planning, procurement, panel tracing & grid synchronization.", icon: Sun },
                                { title: "MEP Contractors", desc: "HVAC, plumbing, electrical installations & recurring project maintenance.", icon: Wrench },
                                { title: "Industrial Plant EPC", desc: "Equipment detailing, heavy commissioning & structured plant setup.", icon: Factory },
                                { title: "Oil & Gas Support", desc: "Pipeline construction, safety tracking, maintenance & rig support operations.", icon: Flame },
                                { title: "Interior & Architecture", desc: "Fit-out projects, space planning, bill of quantities & design-build workflows.", icon: Layers }
                            ].map((ind, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <ind.icon className="size-7 text-[#00477b]" />
                                        </div>

                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {ind.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {ind.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Success Stories */}
            <section className="relative overflow-hidden py-14 sm:py-16 text-white border-t border-white/40">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/epc-success.webp')", backgroundColor: '#09090b' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-10 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Side: Content aligned left */}
                        <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-6 space-y-6 text-left">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-3">
                                    Case Stories
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                                    EPC Success Stories
                                </h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-black/45 backdrop-blur-lg border border-white/15 p-6 sm:p-7 rounded-2xl shadow-xl">
                                    <h3 className="text-xl font-normal mb-3 text-white">Solar EPC Company (Gujarat)</h3>
                                    <ul className="space-y-2.5">
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
                                <div className="bg-black/45 backdrop-blur-lg border border-white/15 p-6 sm:p-7 rounded-2xl shadow-xl">
                                    <h3 className="text-xl font-normal mb-3 text-white">MEP Contractor (Hyderabad)</h3>
                                    <ul className="space-y-2.5">
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
                        </ScrollReveal>

                        {/* Right Side: Empty space to show the background image */}
                        <div className="lg:col-span-6 hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* 9. Unified Outcomes & Pricing Section */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            {/* Left Column: Pricing / Offer (5/12) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
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
                            </ScrollReveal>

                            {/* Right Column: Measurable Results (7/12) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 space-y-6">
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                        Outcomes
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-4">
                                        Measurable Results Our EPC Clients Achieve
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Operational Efficiency</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>50% faster PR creation and PO turnarounds.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Eliminated manual data entry across distributed sites.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>100% visibility into material tracing and dispatch routes.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Cost Control</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>30% reduction in material wastage due to strict tracking.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Prevent cost overruns through real-time budget vs actual tracking.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Identify scope creep before it damages project margins.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                                        <div className="bg-[#00477b] py-3 px-6 text-white font-normal text-sm sm:text-base">Financial Health</div>
                                        <div className="p-5 space-y-3">
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>10% faster billing cycles via automated RA bill generation.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Consolidated view of cash flows across all active projects.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                <CheckCircle2 className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                                <span>Ensure vendor and subcontractor compliance.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Why Choose Us */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Why Partner With Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Choose Gnosys Digital As Your Partner?
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    text: "40+ successful EPC implementations with custom workflows",
                                    icon: HardHat,
                                },
                                {
                                    text: "Industry-specific templates for rapid 8-week deployment",
                                    icon: FileCheck,
                                },
                                {
                                    text: "Transparent pricing with guaranteed milestone deliverables",
                                    icon: Coins,
                                },
                                {
                                    text: "Dedicated domain support team familiar with site operations",
                                    icon: Settings,
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <p className="text-base sm:text-lg font-normal text-[#00477b] leading-snug relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {item.text}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Unified Transform & Contact Section */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                            {/* Left Side: CTA Content (Columns: 5/12) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 flex flex-col justify-start">
                                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Get Started</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                                    Ready To Transform Your EPC Operations?
                                </h2>
                                <p className="text-zinc-600 font-normal mb-6 text-sm sm:text-base leading-relaxed">
                                    Let's map your workflows, discuss custom templates, and design a deployment plan that matches your project timelines. Speak directly to our domain experts.
                                </p>

                                {/* Bullet indicators to fill space professionally */}
                                <div className="space-y-3.5">
                                    <div className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#00477b]">
                                            <CheckCircle2 className="size-3.5" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-700">Detailed Workflow Assessment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#00477b]">
                                            <CheckCircle2 className="size-3.5" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-700">Platform Demonstration & Sandbox Access</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#00477b]">
                                            <CheckCircle2 className="size-3.5" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-700">Custom Implementation Pricing</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 lg:flex lg:justify-end w-full">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-8 rounded-[2rem] shadow-xl w-full">
                                    <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-6">Tell Us About Your Requirements</h3>
                                    <form className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName" className="text-[#00477b] font-medium text-xs sm:text-sm">Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-[#00477b] font-medium text-xs sm:text-sm">Email *</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl h-11 transition-all" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <Label htmlFor="budget" className="text-[#00477b] font-medium text-xs sm:text-sm">Budget *</Label>
                                                <select id="budget" className="flex h-11 w-full rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium ring-offset-background placeholder:text-muted-foreground focus:bg-white focus:border-[#00477b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                                    <option>Select Budget</option>
                                                    <option>₹1L - ₹5L</option>
                                                    <option>₹5L - ₹15L</option>
                                                    <option>₹15L+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="projectType" className="text-[#00477b] font-medium text-xs sm:text-sm">Project Type *</Label>
                                                <select id="projectType" className="flex h-11 w-full rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium ring-offset-background placeholder:text-muted-foreground focus:bg-white focus:border-[#00477b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                                                    <option>Select Project Type</option>
                                                    <option>Solar EPC</option>
                                                    <option>Civil Construction</option>
                                                    <option>MEP</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="challenges" className="text-[#00477b] font-medium text-xs sm:text-sm">Message</Label>
                                            <Textarea id="challenges" placeholder="Tell us about the issues you are facing..." className="min-h-[90px] bg-white/60 border-white/80 focus:bg-white focus:border-[#00477b] text-[#00477b] font-medium placeholder:text-zinc-400 rounded-xl transition-all" />
                                        </div>

                                        <div className="pt-1">
                                            <Button className="bg-[#00477b] text-white hover:bg-[#003862] font-bold h-12 px-8 rounded-full shadow-lg transition-all hover:scale-102 flex items-center gap-2">
                                                Submit Request <ArrowRight className="size-4" />
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
