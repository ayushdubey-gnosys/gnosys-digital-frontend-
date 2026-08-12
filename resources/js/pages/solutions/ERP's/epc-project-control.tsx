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

export default function EpcProjectControl() {
    return (
        <MainLayout>
            <Head title="EPC Project Control With ERPNext" />

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-32 flex flex-col items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-imp.webp')", backgroundColor: '#09090b' }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-12">
                        EPC Project Control With ERPNext
                    </h1>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10 text-white">
                        <div className="flex flex-col items-center">
                            <Clock className="size-8 mb-2 text-white" />
                            <span className="font-semibold text-lg">Deliver On Time</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DollarSign className="size-8 mb-2 text-white" />
                            <span className="font-semibold text-lg">On Budget</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Target className="size-8 mb-2 text-white" />
                            <span className="font-semibold text-lg">Every Time</span>
                        </div>
                    </div>

                    <p className="max-w-4xl mx-auto text-lg text-zinc-200/80 leading-relaxed font-medium mb-10">
                        One intelligent, integrated platform with unified control over engineering, procurement, site execution, billing and finance. All in one platform built for EPC complexity.
                    </p>
                    <Button className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full px-8 h-14 text-base font-bold shadow-xl transition-all hover:scale-105">
                        Book Your EPC Discovery Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Hidden Costs */}
            <section className="py-20 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why EPC Companies Struggle With Spreadsheets & Silos
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                        The Hidden Costs Disrupting Your Projects
                    </h2>

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
                            <div key={i} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-start bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                                <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shrink-0">
                                    <item.icon className={cn("size-5", item.iconColor.split(" ")[0])} />
                                </div>
                                <h4 className="font-bold text-[#00477b] text-lg mb-2">{item.title}</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. One Platform For Complete Project Visibility */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Unified Control. Engineering to Final Billing.
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">
                            One Platform For Complete Project Visibility
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        {/* Top Row - 3 Cards */}
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <BarChart3 className="size-10 text-zinc-800 mb-5" />
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Exec. Time Cost Intelligence</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Dashboard for real-time project profitability.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Item-wise cost tracking against budget.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Project performance tracking across portfolio.</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <FileText className="size-10 text-zinc-800 mb-5" />
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Engineering & Document Control</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Comprehensive BOQ management linked to items.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Drawing revisions and version control.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Trace document approvals directly in system.</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <ShoppingCart className="size-10 text-zinc-800 mb-5" />
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Procurement & Subcontracts</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Automated POs, Indents and vendor approvals.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Subcontractor PO tracking against schedule.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Efficient quality control before issuing items.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        {/* Bottom Row - 2 Cards */}
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <HardHat className="size-10 text-zinc-800 mb-5" />
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Site Execution & Inventory</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Multi-location material tracking and stock visibility.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Site logging and daily progress reports.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Equipment usage and maintenance logging.</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <Building2 className="size-10 text-zinc-800 mb-5" />
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Financial Control & Compliance</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> AR/AP and automated invoicing.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> GST / tax compliance directly integrated.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-zinc-500" /> Contract billing based on milestones and RA Bills.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] h-12 px-8 font-bold">
                            Schedule A Demo of EPC Workflows
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. Critical Modules Table */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Capabilities
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Critical Modules For EPC Success
                        </h2>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-white/60 bg-white/40 backdrop-blur-lg shadow-sm">
                        <table className="w-full text-sm sm:text-base min-w-[800px]">
                            <thead>
                                <tr className="bg-zinc-900 text-white">
                                    <th className="py-4 px-6 text-left font-bold border-r border-zinc-800">Engineering & Planning</th>
                                    <th className="py-4 px-6 text-left font-bold border-r border-zinc-800">Procurement & Materials</th>
                                    <th className="py-4 px-6 text-left font-bold border-r border-zinc-800">Site & Labor</th>
                                    <th className="py-4 px-6 text-left font-bold">Finance & Compliance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/20">
                                <tr className="hover:bg-white/20 transition-colors">
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Project planning with critical paths</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Purchase planning & indents</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Multi-site inventory tracking</td>
                                    <td className="py-4 px-6 text-zinc-700">Project Billing & Invoicing</td>
                                </tr>
                                <tr className="hover:bg-white/20 transition-colors">
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">BOQ & BOM management</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Vendor performance tracking</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Subcontractor work orders</td>
                                    <td className="py-4 px-6 text-zinc-700">GST / compliance tracking</td>
                                </tr>
                                <tr className="hover:bg-white/20 transition-colors">
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Drawing/revision control</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Material receipt & inspection</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Timesheets / labor logging</td>
                                    <td className="py-4 px-6 text-zinc-700">AR/AP and project reporting</td>
                                </tr>
                                <tr className="hover:bg-white/20 transition-colors">
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Change order management</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">eProcurement / RFQ system for vendor quotes</td>
                                    <td className="py-4 px-6 border-r border-white/20 text-zinc-700">Equipment utilization tracking</td>
                                    <td className="py-4 px-6 text-zinc-700">Cash flow forecasting</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. Roadmap */}
            <section className="py-24 bg-transparent overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Roadmap
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            EPC Implementation Roadmap
                        </h2>
                        <p className="text-zinc-600 font-medium max-w-2xl mx-auto">Step-by-step path to efficient project execution and digital adoption.</p>
                    </div>

                    <div className="relative border-l-2 border-zinc-300 ml-4 md:ml-32 space-y-12 py-4">
                        {[
                            { step: "Week 1-2", title: "Process Discovery", desc: "Map EPC workflows and configure goals.", color: "bg-zinc-700" },
                            { step: "Week 3-4", title: "System Setup", desc: "Configuration of modules and permissions.", color: "bg-zinc-900" },
                            { step: "Week 5-6", title: "Data Migration & Testing", desc: "Legacy data import and end-to-end testing.", color: "bg-zinc-700" },
                            { step: "Week 7", title: "Team Training", desc: "Train on specific modules.", color: "bg-zinc-900" },
                            { step: "Week 8+", title: "Go-Live & Support", desc: "Launch and post-launch monitoring.", color: "bg-zinc-700" },
                        ].map((item, i) => (
                            <div key={i} className="relative pl-8 md:pl-12 group">
                                {/* Timeline Dot */}
                                <span className={cn(
                                    "absolute -left-[17px] top-1.5 size-8 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg ring-4 ring-white z-10 transition-transform group-hover:scale-110",
                                    item.color
                                )}>
                                    {i + 1}
                                </span>

                                {/* Left Side Time label (desktop only) */}
                                <div className="hidden md:block absolute right-full mr-12 top-2 text-right">
                                    <span className="text-sm font-extrabold text-zinc-600 uppercase tracking-wider">{item.step}</span>
                                </div>

                                {/* Content Card */}
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    {/* Mobile-only time label */}
                                    <span className="inline-block md:hidden text-xs font-bold text-zinc-600 uppercase tracking-wider mb-1">{item.step}</span>
                                    <h3 className="text-xl font-bold text-[#00477b] mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
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

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: "Infrastructure & Civil Construction", desc: "Roads, bridges, dams & civil EPC projects" },
                            { title: "Solar & Renewable EPC", desc: "Site audits, planning, procurement, panel tracing & grid synchronization" },
                            { title: "MEP Contractors", desc: "HVAC, plumbing, electrical installations & project maintenance" },
                            { title: "Industrial Plant EPC", desc: "Equipment detailing, commissioning & plant setup" },
                            { title: "Oil & Gas Support", desc: "Pipeline construction, maintenance & rig support" },
                            { title: "Interior & Architecture", desc: "Fit-out projects, space planning & design-build" }
                        ].map((ind, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-6 hover:border-zinc-400 hover:shadow-md transition-all">
                                <h3 className="font-bold text-[#00477b] mb-2">{ind.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Measurable Results */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Outcomes
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Measurable Results Our EPC Clients Achieve
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-zinc-900 p-4 text-center text-white font-bold">Operational Efficiency</div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>50% faster PR creation and PO turnarounds.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>Eliminated manual data entry across distributed sites.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>100% visibility into material tracing and dispatch routes.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-zinc-900 p-4 text-center text-white font-bold">Cost Control</div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>30% reduction in material wastage due to strict tracking.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>Prevent cost overruns through real-time budget vs actual tracking.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>Identify scope creep before it damages project margins.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-zinc-900 p-4 text-center text-white font-bold">Financial Health</div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>10% faster billing cycles via automated RA bill generation.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>Consolidated view of cash flows across all active projects.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-zinc-600 shrink-0 mt-0.5" />
                                    <span>Ensure vendor and subcontractor compliance.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Success Stories */}
            <section className="py-24 bg-zinc-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Case Studies
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white">
                            EPC Success Stories
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-[#00477b]">Solar EPC Company (Gujarat)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-zinc-500" />
                                    <span>Achieved operational control across 20+ active projects by streamlining procurement and site material requests.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-zinc-500" />
                                    <span>100% trace of panel serials and serial numbering.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-[#00477b]">MEP Contractor (Hyderabad)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-zinc-500" />
                                    <span>Integrated BOQ with billing schedules and site subcontracts in a single platform.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-zinc-500" />
                                    <span>Clear visibility on subcontractor payments vs work completed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Offer & Pricing */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Limited-Time EPC Implementation Offer
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-10">
                        ERPNext For EPC
                    </h2>

                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between text-left gap-8">
                        <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                            <div className="text-zinc-500 font-medium mb-1">Starting At</div>
                            <div className="text-4xl lg:text-5xl font-extrabold text-zinc-900">₹1,20,000</div>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-sm text-zinc-700 mb-4 font-medium">
                                Comprehensive package including project management, BOQ & Billing, procurement, HR & payroll, inventory, & support.
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-zinc-500" /> End-To-End Implementation</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-zinc-500" /> 3 months post-go-live AMC</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-zinc-500" /> Cloud Hosting Assistance</li>
                            </ul>
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

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "EPC Domain Experts",
                            "Industry-specific templates for faster deployment",
                            "Transparent pricing with no hidden license costs",
                            "Continuous post-launch AMC support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/40 backdrop-blur-lg border border-white/60 px-6 py-4 rounded-lg text-sm font-medium text-zinc-700">
                                <CheckCircle2 className="size-5 text-zinc-600 shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Contact Form */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Tell Us About Your Requirements
                        </h2>
                    </div>

                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input id="fullName" placeholder="Enter your full name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name</Label>
                                    <Input id="company" placeholder="Enter your company name" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="projectType">Project Type</Label>
                                    <select id="projectType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>Select Type...</option>
                                        <option>Solar EPC</option>
                                        <option>Civil Construction</option>
                                        <option>MEP</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teamSize">Number of Active Sites</Label>
                                    <select id="teamSize" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>1-5</option>
                                        <option>5-15</option>
                                        <option>15+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="challenges">Current Challenges</Label>
                                <Textarea id="challenges" placeholder="Tell us about the issues you are facing..." className="min-h-[100px]" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                                <select id="contactMethod" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>Email</option>
                                    <option>Phone Call</option>
                                    <option>WhatsApp</option>
                                </select>
                            </div>

                            <div className="pt-4 text-center">
                                <Button className="bg-[#00477b] text-white hover:bg-[#00477b] w-full md:w-auto px-10 h-12">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 12. Final CTA */}
            <section className="py-20 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Get Started
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                        Ready To Transform Your EPC Operations?
                    </h2>
                    <p className="text-zinc-500 mb-8">Choose your next step.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] h-12 px-8 font-bold shadow-lg">
                            Book Free Assessment
                        </Button>
                        <Button variant="outline" className="h-12 px-8 font-bold border-zinc-900 text-zinc-900 hover:bg-zinc-50">
                            See Live Demo
                        </Button>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
