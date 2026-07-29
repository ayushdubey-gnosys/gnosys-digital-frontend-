import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Clock, DollarSign, Target, CheckCircle2,
    BarChart3, FileText, ShoppingCart, HardHat,
    Building2, FileCheck, ArrowRight, Settings, Users, ArrowUpRight
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
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
                        style={{ backgroundImage: "url('/assets/epc-hero.webp')", backgroundColor: '#02182b' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#02182b]/90 via-[#02182b]/80 to-[#02182b]"></div>
                    {/* Concentric circles decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal-500/10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-teal-500/10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-teal-500/10"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-12">
                        EPC Project Control With ERPNext
                    </h1>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10 text-white">
                        <div className="flex flex-col items-center">
                            <Clock className="size-8 mb-2 text-teal-400" />
                            <span className="font-semibold text-lg">Deliver On Time</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DollarSign className="size-8 mb-2 text-teal-400" />
                            <span className="font-semibold text-lg">On Budget</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Target className="size-8 mb-2 text-teal-400" />
                            <span className="font-semibold text-lg">Every Time</span>
                        </div>
                    </div>

                    <p className="max-w-4xl mx-auto text-lg text-blue-100/80 leading-relaxed font-medium mb-10">
                        One intelligent, integrated platform with unified control over engineering, procurement, site execution, billing and finance. All in one platform built for EPC complexity.
                    </p>
                    <Button className="bg-white text-[#02182b] hover:bg-teal-50 rounded-full px-8 h-14 text-base font-bold shadow-xl transition-all hover:scale-105">
                        Book Your EPC Discovery Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Hidden Costs */}
            <section className="py-20 bg-white text-center border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-2">
                        Why EPC Companies Struggle With Spreadsheets & Silos
                    </h3>
                    <h2 className="text-3xl font-bold text-[#02182b] mb-10">
                        The Hidden Costs Disrupting Your Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {[
                            "Costs overruns from delayed visibility into actual vs budget.",
                            "Material stock-outs across the site due to poor supply chain planning.",
                            "Procurement delays affecting project schedules and timelines.",
                            "Profitability leakage due to poor scope and change order control.",
                            "Manual data entry across growing project teams and multiple locations.",
                            "Cash flow traps from delayed billing and unapproved invoices.",
                            "Profitability blind spots across the overall project portfolio."
                        ].map((point, i) => (
                            <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                                <CheckCircle2 className="size-5 text-teal-500 shrink-0 mt-0.5" />
                                <span className="text-zinc-700 text-sm font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. One Platform For Complete Project Visibility */}
            <section className="py-24 bg-slate-50/50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-teal-600 mb-2">
                            Unified Control. Engineering to Final Billing.
                        </h3>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#02182b]">
                            One Platform For Complete Project Visibility
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        {/* Top Row - 3 Cards */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <BarChart3 className="size-10 text-teal-600 mb-5" />
                            <h3 className="text-xl font-bold text-[#02182b] mb-3">Exec. Time Cost Intelligence</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Dashboard for real-time project profitability.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Item-wise cost tracking against budget.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Project performance tracking across portfolio.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <FileText className="size-10 text-teal-600 mb-5" />
                            <h3 className="text-xl font-bold text-[#02182b] mb-3">Engineering & Document Control</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Comprehensive BOQ management linked to items.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Drawing revisions and version control.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Trace document approvals directly in system.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <ShoppingCart className="size-10 text-teal-600 mb-5" />
                            <h3 className="text-xl font-bold text-[#02182b] mb-3">Procurement & Subcontracts</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Automated POs, Indents and vendor approvals.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Subcontractor PO tracking against schedule.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Efficient quality control before issuing items.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        {/* Bottom Row - 2 Cards */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <HardHat className="size-10 text-teal-600 mb-5" />
                            <h3 className="text-xl font-bold text-[#02182b] mb-3">Site Execution & Inventory</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Multi-location material tracking and stock visibility.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Site logging and daily progress reports.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Equipment usage and maintenance logging.</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <Building2 className="size-10 text-teal-600 mb-5" />
                            <h3 className="text-xl font-bold text-[#02182b] mb-3">Financial Control & Compliance</h3>
                            <ul className="text-sm text-zinc-600 space-y-2">
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> AR/AP and automated invoicing.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> GST / tax compliance directly integrated.</li>
                                <li className="flex items-start gap-2"><ArrowRight className="size-4 shrink-0 mt-0.5 text-teal-500" /> Contract billing based on milestones and RA Bills.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button className="bg-[#02182b] text-white hover:bg-[#032b4d] h-12 px-8 font-bold">
                            Schedule A Demo of EPC Workflows
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. Critical Modules Table */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#02182b] mb-12">
                        Critical Modules For EPC Success
                    </h2>

                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm sm:text-base min-w-[800px]">
                            <thead>
                                <tr className="bg-[#02182b] text-white">
                                    <th className="py-4 px-6 text-left font-bold border-r border-white/20">Engineering & Planning</th>
                                    <th className="py-4 px-6 text-left font-bold border-r border-white/20">Procurement & Materials</th>
                                    <th className="py-4 px-6 text-left font-bold border-r border-white/20">Site & Labor</th>
                                    <th className="py-4 px-6 text-left font-bold">Finance & Compliance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Project planning with critical paths</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Purchase planning & indents</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Multi-site inventory tracking</td>
                                    <td className="py-4 px-6 text-zinc-700">Project Billing & Invoicing</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">BOQ & BOM management</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Vendor performance tracking</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Subcontractor work orders</td>
                                    <td className="py-4 px-6 text-zinc-700">GST / compliance tracking</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Drawing/revision control</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Material receipt & inspection</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Timesheets / labor logging</td>
                                    <td className="py-4 px-6 text-zinc-700">AR/AP and project reporting</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Change order management</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">eProcurement / RFQ system for vendor quotes</td>
                                    <td className="py-4 px-6 border-r border-gray-200 text-zinc-700">Equipment utilization tracking</td>
                                    <td className="py-4 px-6 text-zinc-700">Cash flow forecasting</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. Roadmap */}
            <section className="py-24 bg-slate-50/30 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#02182b] mb-3">
                            EPC Implementation Roadmap
                        </h2>
                        <p className="text-zinc-600">Step-by-step path to efficient project execution and digital adoption.</p>
                    </div>

                    <div className="relative py-10">
                        {/* Center Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-3 bg-zinc-700 -translate-y-1/2 hidden md:block rounded-full"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-white -translate-y-1/2 hidden md:block z-10"></div>

                        {/* Timeline Points */}
                        <div className="flex flex-col md:flex-row justify-between relative z-20 gap-8 md:gap-0">
                            {[
                                { step: "Week 1-2", title: "Process Discovery", desc: "Map EPC workflows and configure goals.", color: "bg-teal-500", up: true },
                                { step: "Week 3-4", title: "System Setup", desc: "Configuration of modules and permissions.", color: "bg-[#02182b]", up: false },
                                { step: "Week 5-6", title: "Data Migration & Testing", desc: "Legacy data import and end-to-end testing.", color: "bg-teal-500", up: true },
                                { step: "Week 7", title: "Team Training", desc: "Train on specific modules.", color: "bg-[#02182b]", up: false },
                                { step: "Week 8+", title: "Go-Live & Support", desc: "Launch and post-launch monitoring.", color: "bg-teal-500", up: true },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center w-full md:w-1/5 relative">
                                    {item.up ? (
                                        <div className="md:absolute bottom-full mb-4 md:mb-8 w-full flex flex-col items-center">
                                            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-4 md:mb-2 w-48 z-10 relative">
                                                <div className="text-xs font-bold text-teal-600 mb-1">{item.step}</div>
                                                <div className="text-sm font-bold text-zinc-800 mb-1">{item.title}</div>
                                                <div className="text-xs text-zinc-500 leading-tight">{item.desc}</div>
                                                {/* Arrow down */}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white hidden md:block"></div>
                                            </div>
                                            <div className={`size-8 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-white z-20`}>
                                                {i + 1}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="md:absolute top-full mt-4 md:mt-8 w-full flex flex-col items-center">
                                            <div className={`size-8 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-white z-20`}>
                                                {i + 1}
                                            </div>
                                            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mt-4 md:mt-2 w-48 z-10 relative">
                                                {/* Arrow up */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white hidden md:block"></div>
                                                <div className="text-xs font-bold text-[#02182b] mb-1">{item.step}</div>
                                                <div className="text-sm font-bold text-zinc-800 mb-1">{item.title}</div>
                                                <div className="text-xs text-zinc-500 leading-tight">{item.desc}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries We Serve */}
            <section className="py-24 bg-white text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#02182b] mb-12">
                        Industries We Serve With Specialized Templates
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { title: "Infrastructure & Civil Construction", desc: "Roads, bridges, dams & civil EPC projects" },
                            { title: "Solar & Renewable EPC", desc: "Site audits, planning, procurement, panel tracing & grid synchronization" },
                            { title: "MEP Contractors", desc: "HVAC, plumbing, electrical installations & project maintenance" },
                            { title: "Industrial Plant EPC", desc: "Equipment detailing, commissioning & plant setup" },
                            { title: "Oil & Gas Support", desc: "Pipeline construction, maintenance & rig support" },
                            { title: "Interior & Architecture", desc: "Fit-out projects, space planning & design-build" }
                        ].map((ind, i) => (
                            <div key={i} className="bg-slate-50 border border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-md transition-all">
                                <h3 className="font-bold text-[#02182b] mb-2">{ind.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Measurable Results */}
            <section className="py-20 bg-slate-50/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-[#02182b] mb-12">
                        Measurable Results Our EPC Clients Achieve
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <div className="bg-[#02182b] p-4 text-center text-white font-bold">Operational Efficiency</div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>50% faster PR creation and PO turnarounds.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>Eliminated manual data entry across distributed sites.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>100% visibility into material tracing and dispatch routes.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <div className="bg-[#02182b] p-4 text-center text-white font-bold">Cost Control</div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>30% reduction in material wastage due to strict tracking.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>Prevent cost overruns through real-time budget vs actual tracking.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>Identify scope creep before it damages project margins.</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                            <div className="bg-[#02182b] p-4 text-center text-white font-bold">Financial Health</div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>10% faster billing cycles via automated RA bill generation.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>Consolidated view of cash flows across all active projects.</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-zinc-700">
                                    <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5" />
                                    <span>Ensure vendor and subcontractor compliance.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Success Stories */}
            <section className="py-24 bg-[#02182b] text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        EPC Success Stories
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-teal-400">Solar EPC Company (Gujarat)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-teal-500" />
                                    <span>Achieved operational control across 20+ active projects by streamlining procurement and site material requests.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-teal-500" />
                                    <span>100% trace of panel serials and serial numbering.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-teal-400">MEP Contractor (Hyderabad)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-teal-500" />
                                    <span>Integrated BOQ with billing schedules and site subcontracts in a single platform.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-zinc-300">
                                    <ArrowUpRight className="size-4 shrink-0 mt-0.5 text-teal-500" />
                                    <span>Clear visibility on subcontractor payments vs work completed.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Offer & Pricing */}
            <section className="py-24 bg-slate-50 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-teal-600 mb-2">
                        Limited-Time EPC Implementation Offer
                    </h3>
                    <h2 className="text-3xl font-bold text-[#02182b] mb-10">
                        ERPNext For EPC
                    </h2>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between text-left gap-8">
                        <div className="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                            <div className="text-zinc-500 font-medium mb-1">Starting At</div>
                            <div className="text-4xl lg:text-5xl font-extrabold text-[#02182b]">₹1,20,000</div>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-sm text-zinc-700 mb-4 font-medium">
                                Comprehensive package including project management, BOQ & Billing, procurement, HR & payroll, inventory, & support.
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-600">
                                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-teal-500" /> End-To-End Implementation</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-teal-500" /> 3 months post-go-live AMC</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-teal-500" /> Cloud Hosting Assistance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Why Choose Us */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-2xl font-bold text-[#02182b] mb-10">
                        Why Choose Gnosys Digital As Your Partner?
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "EPC Domain Experts",
                            "Industry-specific templates for faster deployment",
                            "Transparent pricing with no hidden license costs",
                            "Continuous post-launch AMC support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-50 border border-gray-200 px-6 py-4 rounded-lg text-sm font-medium text-zinc-700">
                                <CheckCircle2 className="size-5 text-teal-600 shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Contact Form */}
            <section className="py-24 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl font-bold text-center text-[#02182b] mb-10">
                        Tell Us About Your Requirements
                    </h2>

                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
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
                                <Button className="bg-[#02182b] text-white hover:bg-[#032b4d] w-full md:w-auto px-10 h-12">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 12. Final CTA */}
            <section className="py-20 bg-white text-center border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#02182b] mb-4">
                        Ready To Transform Your EPC Operations?
                    </h2>
                    <p className="text-zinc-500 mb-8">Choose your next step.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#02182b] text-white hover:bg-[#032b4d] h-12 px-8 font-bold shadow-lg">
                            Book Free Assessment
                        </Button>
                        <Button variant="outline" className="h-12 px-8 font-bold border-[#02182b] text-[#02182b] hover:bg-slate-50">
                            See Live Demo
                        </Button>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
