import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Activity, Clock, FileCheck, Target, Heart, Search, FileText, CheckCircle2, ChevronDown,
    Stethoscope, Pill, Hospital, Microscope, Truck, HeartPulse, ShoppingBag,
    Calendar, Building2, CreditCard, Users2, Wrench, BarChart3, ShieldCheck, ArrowRight
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import FaqAccordion from '@/components/FaqAccordion';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextForHealthcare() {

    return (
        <MainLayout>
            <Head title="ERPNext For Healthcare" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/hospital-erp.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none lg:w-3/5"></div>
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
                                HEALTHCARE ERP SOLUTION
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                ERPNext For Healthcare <br />
                                <span className="text-blue-100 font-normal">Digital Systems For Clinics, Hospitals & Labs</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Transform your healthcare operations with one unified, open-source platform. From patient registration to pharmacy inventory, labs to billing - ERPNext turns your medical practice into a streamlined, compliant, and data-driven institution.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <span className="relative z-10 flex items-center gap-2">Talk To An Expert <ArrowRight className="size-5" /></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Explore Features
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Why Healthcare Businesses Choose ERPNext */}
            <section className="pt-16 pb-10 text-center relative z-10">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="container mx-auto px-4 max-w-5xl mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            WHY CHOOSE ERPNEXT
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Healthcare Businesses Choose ERPNext
                        </h2>
                    </div>
                </ScrollReveal>
                
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { icon: Target, title: "Complete Workflow Coverage", desc: "OPD, IPD, lab, pharmacy, billing, HR, inventory & more - all modules integrated under one roof." },
                                { icon: FileCheck, title: "No Licensing Fee", desc: "ERPNext is open-source (GPL-licensed), reducing upfront software costs and avoiding recurring license fees." },
                                { icon: Activity, title: "Customizable & Scalable", desc: "Adjust the system to your clinic/hospital size; from small clinics to large multi-department hospitals; add or remove modules as needed." },
                                { icon: Heart, title: "Compliance & Data Safety", desc: "Manage patient records, clinical data, billing, and employee data - with audit trails, role-based access, and compliance readiness for healthcare regulations." },
                                { icon: Clock, title: "All-in-One ERP + HMS", desc: "Not just a Healthcare Management System; you get ERP features for accounting, payroll, inventory, asset management, purchasing - useful for hospitals/clinics running multiple functions." },
                                { icon: Search, title: "Global & Local", desc: "Affordable implementation - As a Gnosys Digital offering, you get expert implementation, customization & support - priced for small/mid-size to large healthcare businesses." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        
                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What ERPNext Healthcare Can Manage (Table) */}
            <section className="py-14 sm:py-16 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-3">
                                Capabilities & Scope
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                                What ERPNext Healthcare Can Manage
                            </h2>
                            <p className="mt-3 text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
                                Explore full-stack clinical, inventory, financial, and compliance modules engineered for modern medical facilities.
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal animation="fade-up" delay={120}>
                        <div className="bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl shadow-[0_16px_40px_rgba(0,50,110,0.06)] overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-[#00477b] to-[#003355] text-white">
                                            <th className="py-5 px-6 sm:px-8 font-bold w-[62%] text-xs sm:text-sm uppercase tracking-wider border-r border-white/10">
                                                <div className="flex items-center gap-2.5">
                                                    <Activity className="size-4 text-blue-200" />
                                                    <span>Module / Functionality</span>
                                                </div>
                                            </th>
                                            <th className="py-5 px-6 sm:px-8 font-bold w-[38%] text-xs sm:text-sm uppercase tracking-wider">
                                                <div className="flex items-center gap-2.5">
                                                    <Building2 className="size-4 text-blue-200" />
                                                    <span>Ideal For</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-200/60 text-zinc-800">
                                        {[
                                            { icon: HeartPulse, title: "Patient Management", desc: "Registration, patient master data, patient history & medical records, encounter management.", ideal: ["Clinics", "Hospitals", "Multi-doctor practices"] },
                                            { icon: Calendar, title: "Appointment Scheduling & Practitioner Calendars", desc: "Online booking, slot allocation, queue management, and SMS/WhatsApp notifications.", ideal: ["OPD clinics", "Multi-doctor hospitals", "Diagnostic centers"] },
                                            { icon: Hospital, title: "OPD / IPD Workflow", desc: "Admissions, bed management, discharge processes, and inpatient clinical tracking.", ideal: ["Hospitals", "Multi-specialty centers"] },
                                            { icon: Microscope, title: "Laboratory & Radiology Module", desc: "Sample tracking, test requests, report generation, and lab order management.", ideal: ["Labs", "Diagnostic centers", "In-house hospital labs"] },
                                            { icon: Pill, title: "Pharmacy & Inventory Management", desc: "Drug stock, expiry tracking, reorder alerts, billing, and pharmacy POS integration.", ideal: ["Hospitals", "Dispensaries", "Pharmacy retail stores"] },
                                            { icon: CreditCard, title: "Billing & Financials", desc: "Patient billing, insurance claims, expense tracking, and real-time accounting integration.", ideal: ["Clinics", "Hospitals", "Diagnostic centers", "Multi-branch facilities"] },
                                            { icon: Users2, title: "HR & Staff Management", desc: "Doctor/nurse scheduling, payroll, leave/attendance, staff records, and compliance tracking.", ideal: ["Hospitals", "Clinics", "Labs", "Healthcare centers"] },
                                            { icon: Wrench, title: "Asset & Equipment Management", desc: "Medical equipment maintenance schedules, asset tracking, depreciation, and calibration history.", ideal: ["Hospitals", "Diagnostic labs", "Clinics with devices"] },
                                            { icon: BarChart3, title: "Reporting & Analytics", desc: "Interactive dashboards, appointment stats, revenue analytics, lab test metrics, and occupancy reports.", ideal: ["Hospital leadership", "Admin staff", "Decision makers"] },
                                            { icon: ShieldCheck, title: "Compliance & Audit Trail Support", desc: "Medical coding support (ICD-10), record of encounters, medication history, and audit readiness.", ideal: ["Regulatory healthcare", "Accredited hospitals", "Clinics"] }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/40 transition-colors group">
                                                <td className="py-4.5 sm:py-5 px-6 sm:px-8 border-r border-zinc-200/60">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center shrink-0 mt-0.5">
                                                            <row.icon className="size-5 text-[#00477b]" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-[#00477b] text-[15px] sm:text-base leading-snug group-hover:text-[#003355]">
                                                                {row.title}
                                                            </span>
                                                            <span className="text-xs sm:text-[13px] text-zinc-600 mt-1 font-normal leading-relaxed">
                                                                {row.desc}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4.5 sm:py-5 px-6 sm:px-8 align-middle">
                                                    <div className="flex flex-wrap gap-2">
                                                        {row.ideal.map((item, idx) => (
                                                            <span 
                                                                key={idx} 
                                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#00477b] border border-blue-200/80 shadow-2xs group-hover:border-[#00477b]/40 hover:bg-[#00477b] hover:text-white transition-all duration-200 cursor-default"
                                                            >
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. Payroll Management */}
            <section className="py-14 sm:py-16 bg-transparent text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-3">
                                Payroll
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Payroll Management Hassle-Free & Accurate
                            </h2>
                            <p className="text-zinc-600 font-normal text-sm sm:text-base">
                                ERPNext Payroll simplifies salary management for hospitals, clinics, and labs:
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
                
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] my-6">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                            {[
                                { icon: FileText, title: "Automated Calculations", desc: "wages, overtime, deductions, bonuses - all calculated accurately." },
                                { icon: Clock, title: "Integrate Attendance & Leave", desc: "payroll reflects real-time shifts and leave balances." },
                                { icon: FileCheck, title: "Compliance & Reporting", desc: "maintain audit-ready records and comply with local labor laws." },
                                { icon: Target, title: "Employee Self-Service", desc: "staff can view payslips, leave, and salary history online." },
                                { icon: Activity, title: "Scalable for Any Facility", desc: "works for small clinics to multi-department hospitals." }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        
                                        <div className="size-14 mb-4 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-6 text-[#00477b]" />
                                        </div>
                                        <h3 className="font-normal text-[#00477b] text-base mb-2 text-center tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed text-center font-normal relative z-10">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 max-w-5xl mt-6">
                    <p className="text-sm text-zinc-800 font-medium">
                        <strong>Outcome:</strong> Reduce errors, save HR time, and ensure staff are paid correctly and on time.
                    </p>
                </div>
            </section>

            {/* 5. What You Get With Gnosys Digital */}
            <section className="py-14 sm:py-16 bg-transparent">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-3">
                                Deliverables
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                                What You Get With Gnosys Digital + ERPNext Healthcare
                            </h2>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={120}>
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 p-0 shadow-lg shadow-blue-900/5 my-6 flex flex-col lg:flex-row items-stretch overflow-hidden">
                        {/* Left Side: Graphic Image (Flushed to left side) */}
                        <div className="w-full lg:w-[55%] relative min-h-[350px] lg:min-h-0">
                            <img 
                                src="/assets/helalth.webp" 
                                alt="What You Get With Gnosys Digital" 
                                className="absolute inset-0 w-full h-full object-cover rounded-r-[2rem] lg:rounded-r-[3rem] shadow-[15px_0_40px_-10px_rgba(0,71,123,0.15)]" 
                            />
                        </div>
                        
                        {/* Right Side: Professional Checklist */}
                        <div className="w-full lg:w-[45%] py-10 px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
                            <ul className="space-y-4">
                                {[
                                    "Requirement analysis & process mapping: we study your existing workflows, pain points, and compliance needs",
                                    "ERPNext installation & configuration: cloud or self-hosted",
                                    "Module customization: doctor schedules, lab templates, pharmacy workflows, reporting layout, etc.",
                                    "Data migration/legacy data import: if migrating from Excel/Tally/other systems",
                                    "Training for staff: doctors, lab techs, admin, billing staff",
                                    "Post-launch support: bug fixes, module tweaks, updates",
                                    "Integration with other systems (if required): e.g., third-party lab, telemedicine, POS, etc."
                                ].map((item, i) => {
                                    const parts = item.split(':');
                                    const title = parts[0];
                                    const desc = parts.slice(1).join(':');

                                    return (
                                        <li key={i} className="flex items-start gap-3.5 p-2.5 hover:bg-white/40 rounded-2xl transition-colors duration-200">
                                            <div className="size-7 rounded-full bg-white shadow-xs border border-zinc-100 flex items-center justify-center shrink-0 text-[#00477b] mt-0.5">
                                                <CheckCircle2 className="size-4" />
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[#00477b] font-bold text-[14.5px] leading-snug">{title.trim()}</span>
                                                {desc && <span className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">{desc.trim()}</span>}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 6. Key Benefits Grid */}
            <section className="py-14 sm:py-16 bg-transparent">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                        <div className="text-center mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-3">
                                Benefits
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                                Key Benefits Of ERPNext For Healthcare
                            </h2>
                        </div>
                    </div>
                </ScrollReveal>
                
                <div className="relative max-w-5xl mx-auto mt-12">
                    {/* Central vertical line (Trunk) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00477b]/20 via-[#00477b]/60 to-[#00477b]/20 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-8">
                        {[
                            "Unified financial & accounting + hospital operations: better insights, less manual reconciliation",
                            "Streamlined inpatient/outpatient workflows: from registration to discharge",
                            "Faster patient registration and billing: less paperwork",
                            "Better staff management: shifts, payroll, leaves, compliance tracking",
                            "Accurate, centralized patient records: medical history, diagnostics, prescriptions",
                            "Regulatory compliance readiness: audit trails, secure data management",
                            "Efficient lab & pharmacy operations: no stockouts, expiry alerts, timely order processing",
                            "Reduced errors: improved resource utilization, and higher operational efficiency"
                        ].map((text, i) => {
                            const parts = text.split(':');
                            const title = parts[0];
                            const desc = parts.slice(1).join(':');
                            const isEven = i % 2 === 0;

                            return (
                                <ScrollReveal key={i} animation={isEven ? "fade-left" : "fade-right"} delay={60 * (i + 1)}>
                                    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                        
                                        {/* Content Box (Alternating Left/Right) */}
                                        <div className="w-full md:w-[calc(50%-40px)] pl-12 md:pl-0">
                                            <div className="p-5 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left">
                                                <h3 className="font-bold text-[#00477b] text-base leading-snug">{title.trim()}</h3>
                                                {desc && <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed font-normal">{desc.trim()}</p>}
                                            </div>
                                        </div>

                                        {/* Central Node (Leaf on trunk) */}
                                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-5 rounded-full bg-white border-[4px] border-[#00477b] shadow-md z-10 transition-transform duration-300 hover:scale-125"></div>

                                        {/* Horizontal Branch Connector Line */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#00477b]/30 w-[calc(50%-40px)] ${isEven ? 'right-[calc(50%+10px)]' : 'left-[calc(50%+10px)]'}`}></div>

                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. Let's Turn Search Into Sales (CTA) */}
            <section className="py-14 sm:py-16 bg-white/40 backdrop-blur-xl border-y border-white/60 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                            Let's Transform Your Healthcare Operations
                        </h2>
                        <p className="text-zinc-600 font-normal mb-6 max-w-xl mx-auto text-sm sm:text-base">
                            Get a modern, unified ERP + HMS system built for clinical precision and operational ease.
                        </p>
                        <Button asChild className="bg-[#00477b] hover:bg-[#003862] text-white font-bold h-12 px-8 shadow-lg rounded-full">
                            <Link href="/free-digital-consultation">
                                Book a Free Consultation
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </section>

            {/* 8. Who This Is For */}
            <section className="pt-12 pb-4 bg-transparent text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                        <div className="text-center mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-3">
                                Target Audience
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Who This Is For</h2>
                        </div>
                        <p className="text-zinc-600 mb-6 max-w-2xl mx-auto font-normal text-sm sm:text-base">
                            This solution fits a wide range of healthcare organizations, tailored to streamline operational workflows and improve patient care.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-4 mb-0">
                    <div className="w-full max-w-7xl mx-auto">
                        {/* First Row: 4 Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-6">
                            {[
                                { title: "Small clinics & polyclinics", desc: "Single or multi-doctor practices seeking digital patient records, scheduling, and billing.", icon: Stethoscope },
                                { title: "Pharmacies & supply chains", desc: "Manage multi-store inventories, batch numbers, stock replenishment, and billing logs.", icon: Truck },
                                { title: "Pharmacies & dispensaries", desc: "Speed up retail point-of-sale operations, prescription handling, and stock audits.", icon: Pill },
                                { title: "Multi-specialty hospitals", desc: "Unify complete OPD/IPD workflows, bed allocation, department lists, and clinical notes.", icon: Hospital }
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
                                { title: "Nursing homes & rehab centers", desc: "Track long-term patient records, vitals logging, ward logs, and nurse shift schedules.", icon: HeartPulse },
                                { title: "Diagnostic labs & pathology", desc: "Ensure sample tracking accuracy, test templates, automatic reports, and order records.", icon: Microscope },
                                { title: "Medical device stores", desc: "Support device sales, equipment rentals, serial tracking, and inventory logs.", icon: ShoppingBag }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
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

            {/* 9. FAQ & Final CTA Side-by-Side Section */}
            <section className="pt-10 pb-16 bg-transparent border-t border-white/40">
                <div className="w-full px-4 md:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        
                        {/* Left Side: FAQ (Columns: 7/12) */}
                        <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-7">
                            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">FAQ</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                FAQ (Healthcare ERP Edition)
                            </h2>
                            
                            <FaqAccordion 
                                items={[
                                    { q: "Does ERPNext require license fees?", a: "No - ERPNext is open-source (GPL). You pay only implementation and hosting costs." },
                                    { q: "Can we start small and scale later (add more modules)?", a: "Absolutely. ERPNext is modular. You can start with core modules (OPD, Pharmacy, Accounting) and expand as needed." },
                                    { q: "Is patient data secure?", a: "Yes - ERPNext supports role-based access, audit trails, and secure storage. We can also help with additional hosting/security setup." },
                                    { q: "Can we integrate with third-party labs/pharmacy systems/insurance software?", a: "Yes. Because ERPNext is open-source and flexible, integrations are possible. We'll assess during the consultation." },
                                    { q: "What about training and support?", a: "Gnosys Digital handles training of doctors, staff, admin, lab technicians - plus post-launch support, updates, and customizations." }
                                ]}
                                containerClassName="bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden"
                                itemClassName="border-b border-zinc-200/60 last:border-0"
                                buttonClassName="text-[#00477b] font-medium px-6 sm:px-8 py-5 text-left hover:bg-white/80 transition-colors text-sm sm:text-base"
                                iconColorClass="text-[#00477b]"
                                answerClassName="px-6 sm:px-8 pb-6 text-gray-600 bg-white/40 pt-2 leading-relaxed text-xs sm:text-sm"
                            />
                        </ScrollReveal>

                        {/* Right Side: Final CTA Box (Columns: 5/12) */}
                        <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-start">
                            <div className="hidden lg:block h-[116px]"></div>
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 text-center flex flex-col items-center flex-grow">
                                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Next Step</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                    Book Your Healthcare ERP Consultation
                                </h2>
                                <p className="text-zinc-600 font-medium mb-8 text-sm sm:text-base leading-relaxed">
                                    Let's understand your facility - its size, workflows, and goals - and propose a tailored implementation plan. No obligation. Just clarity, practicality, and the right system.
                                </p>
                                <Button className="bg-[#00477b] hover:bg-[#003862] text-white font-bold h-14 px-8 w-full rounded-xl shadow-lg transition-all hover:scale-102">
                                    Schedule My Healthcare ERP Discovery Call
                                </Button>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
