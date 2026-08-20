import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Activity, Clock, FileCheck, Target, Heart, Search, FileText, CheckCircle2, ChevronDown,
    Stethoscope, Pill, Hospital, Microscope, Truck, HeartPulse, ShoppingBag,
    Calendar, Building2, CreditCard, Users2, Wrench, BarChart3, ShieldCheck
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
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-28 lg:pb-44 flex items-center justify-center text-center min-h-[92vh] lg:min-h-[100vh]">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/healthcare.webp')", backgroundColor: '#00477b' }}
                    ></div>
                    {/* Subtle, soft gradient so the image stays 100% sharp and clear while keeping text readable */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-4xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                            Healthcare ERP Solution
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                            ERPNext For Healthcare
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={180}>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-100 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            Digital Systems For Clinics, Hospitals & Labs
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={280}>
                        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/95 leading-relaxed font-medium mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                            Transform your healthcare operations with one unified, open-source platform. From patient registration to pharmacy inventory, labs to billing — ERPNext turns your medical practice into a streamlined, compliant, and data-driven institution.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={380}>
                        <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 h-12 text-sm sm:text-base font-bold shadow-lg transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">Book a Free Healthcare-ERP Discovery Call <span className="text-xl">&rarr;</span></span>
                            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                        </Button>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Why Healthcare Businesses Choose ERPNext */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Why Choose ERPNext
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Healthcare Businesses Choose ERPNext
                        </h2>
                    </div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Target, title: "Complete Workflow Coverage", desc: "OPD, IPD, lab, pharmacy, billing, HR, inventory & more — all modules integrated under one roof." },
                                { icon: FileCheck, title: "No Licensing Fee", desc: "ERPNext is open-source (GPL-licensed), reducing upfront software costs and avoiding recurring license fees." },
                                { icon: Activity, title: "Customizable & Scalable", desc: "Adjust the system to your clinic/hospital size; from small clinics to large multi-department hospitals; add or remove modules as needed." },
                                { icon: Heart, title: "Compliance & Data Safety", desc: "Manage patient records, clinical data, billing, and employee data — with audit trails, role-based access, and compliance readiness for healthcare regulations." },
                                { icon: Clock, title: "All-in-One ERP + HMS", desc: "Not just a Healthcare Management System; you get ERP features for accounting, payroll, inventory, asset management, purchasing — useful for hospitals/clinics running multiple functions." },
                                { icon: Search, title: "Global & Local", desc: "Affordable implementation — As a Gnosys Digital offering, you get expert implementation, customization & support — priced for small/mid-size to large healthcare businesses." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-lg border border-white/80 rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1 transition-all duration-300">
                                    <div className="size-14 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                        <item.icon className="size-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What ERPNext Healthcare Can Manage (Table) */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Capabilities & Scope
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            What ERPNext Healthcare Can Manage
                        </h2>
                        <p className="mt-4 text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base font-normal">
                            Explore full-stack clinical, inventory, financial, and compliance modules engineered for modern medical facilities.
                        </p>
                    </div>
                    
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
                                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00477b]/10 to-[#00477b]/5 text-[#00477b] border border-[#00477b]/15 flex items-center justify-center shrink-0 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 shadow-2xs mt-0.5">
                                                        <row.icon className="size-5" />
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
                </div>
            </section>

            {/* 4. Payroll Management */}
            <section className="py-20 bg-transparent text-center">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Payroll
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Payroll Management Hassle-Free & Accurate
                        </h2>
                        <p className="text-zinc-600 font-medium">
                            ERPNext Payroll simplifies salary management for hospitals, clinics, and labs:
                        </p>
                    </div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-12 pb-12 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="w-full px-4 md:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {[
                                { icon: FileText, title: "Automated Calculations", desc: "wages, overtime, deductions, bonuses — all calculated accurately." },
                                { icon: Clock, title: "Integrate Attendance & Leave", desc: "payroll reflects real-time shifts and leave balances." },
                                { icon: FileCheck, title: "Compliance & Reporting", desc: "maintain audit-ready records and comply with local labor laws." },
                                { icon: Target, title: "Employee Self-Service", desc: "staff can view payslips, leave, and salary history online." },
                                { icon: Activity, title: "Scalable for Any Facility", desc: "works for small clinics to multi-department hospitals." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-lg border border-white/85 rounded-2xl shadow-sm p-6 text-left hover:-translate-y-1 transition-transform w-full">
                                    <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-4">
                                        <item.icon className="size-5" />
                                    </div>
                                    <h3 className="font-bold text-[#00477b] mb-2">{item.title}</h3>
                                    <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 max-w-5xl mt-8">
                    <p className="text-sm text-zinc-800 font-medium">
                        <strong>Outcome:</strong> Reduce errors, save HR time, and ensure staff are paid correctly and on time.
                    </p>
                </div>
            </section>

            {/* 5. What You Get With Gnosys Digital */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Deliverables
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            What You Get With Gnosys Digital + ERPNext Healthcare
                        </h2>
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 p-0 shadow-lg shadow-blue-900/5 my-8 flex flex-col lg:flex-row items-stretch overflow-hidden">
                    {/* Left Side: Graphic Image (Flushed to left side) */}
                    <div className="w-full lg:w-[55%] relative min-h-[350px] lg:min-h-0">
                        <img 
                            src="/assets/helalth.webp" 
                            alt="What You Get With Gnosys Digital" 
                            className="absolute inset-0 w-full h-full object-cover rounded-r-[2rem] lg:rounded-r-[3rem] shadow-[15px_0_40px_-10px_rgba(0,71,123,0.15)]" 
                        />
                    </div>
                    
                    {/* Right Side: Professional Checklist */}
                    <div className="w-full lg:w-[45%] py-12 px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
                        <ul className="space-y-6">
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
                                    <li key={i} className="flex items-start gap-4 p-3 hover:bg-white/30 rounded-2xl transition-colors duration-200">
                                        <div className="size-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-[#00477b] mt-1">
                                            <CheckCircle2 className="size-4" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[#00477b] font-bold text-[15px] sm:text-base leading-snug">{title.trim()}</span>
                                            {desc && <span className="text-sm text-zinc-600 leading-relaxed font-medium">{desc.trim()}</span>}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. Key Benefits Grid */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Benefits
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key Benefits Of ERPNext For Healthcare
                        </h2>
                    </div>
                    
                    <div className="relative max-w-5xl mx-auto mt-20">
                        {/* Central vertical line (Trunk) */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00477b]/20 via-[#00477b]/60 to-[#00477b]/20 -translate-x-1/2 rounded-full"></div>

                        <div className="space-y-12">
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
                                    <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                        
                                        {/* Content Box (Alternating Left/Right) */}
                                        <div className="w-full md:w-[calc(50%-40px)] pl-12 md:pl-0">
                                            <div className="p-6 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left">
                                                <h3 className="font-bold text-[#00477b] text-base sm:text-lg leading-snug">{title.trim()}</h3>
                                                {desc && <p className="text-sm text-zinc-600 mt-2 leading-relaxed font-medium">{desc.trim()}</p>}
                                            </div>
                                        </div>

                                        {/* Central Node (Leaf on trunk) */}
                                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-5 rounded-full bg-white border-[4px] border-[#00477b] shadow-md z-10 transition-transform duration-300 hover:scale-125"></div>

                                        {/* Horizontal Branch Connector Line */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#00477b]/30 w-[calc(50%-40px)] ${isEven ? 'right-[calc(50%+10px)]' : 'left-[calc(50%+10px)]'}`}></div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Let's Turn Search Into Sales (CTA) */}
            <section className="py-20 bg-white/40 backdrop-blur-xl border-y border-white/60 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                        Let's Turn Search Into Sales
                    </h2>
                    <p className="text-zinc-600 font-medium mb-8">
                        Your customers are searching. Let's make sure they find you — and choose you.
                    </p>
                    <Button asChild className="bg-[#00477b] hover:bg-[#003862] text-white font-bold h-12 px-8 shadow-lg">
                        <Link href="/free-digital-consultation">
                            Book a Free Consultation
                        </Link>
                    </Button>
                </div>
            </section>

            {/* 8. Who This Is For */}
            <section className="pt-16 pb-4 bg-transparent text-center">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Target Audience
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Who This Is For</h2>
                    </div>
                    <p className="text-zinc-600 mb-8 max-w-2xl mx-auto font-medium">
                        This solution fits a wide range of healthcare organizations, tailored to streamline operational workflows and improve patient care.
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-8 pb-8 px-0 shadow-lg shadow-blue-900/5 mt-4 mb-0">
                    <div className="w-full px-4 md:px-8">
                        {/* First Row: 4 Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-6">
                            {[
                                { title: "Small clinics & polyclinics", desc: "Single or multi-doctor practices seeking digital patient records, scheduling, and billing.", icon: Stethoscope },
                                { title: "Pharmacies & supply chains", desc: "Manage multi-store inventories, batch numbers, stock replenishment, and billing logs.", icon: Truck },
                                { title: "Pharmacies & dispensaries", desc: "Speed up retail point-of-sale operations, prescription handling, and stock audits.", icon: Pill },
                                { title: "Multi-specialty hospitals", desc: "Unify complete OPD/IPD workflows, bed allocation, department lists, and clinical notes.", icon: Hospital }
                            ].map((item, i) => (
                                <div 
                                    key={i} 
                                    className="bg-white/60 backdrop-blur-lg border border-white/80 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-5 w-full min-h-[220px]"
                                >
                                    <div className="size-14 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center shrink-0">
                                        <item.icon className="size-6" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bold text-[#00477b] text-lg sm:text-xl leading-snug">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Row: 3 Cards Centered */}
                        <div className="flex flex-wrap justify-center gap-6 text-left">
                            {[
                                { title: "Nursing homes & rehab centers", desc: "Track long-term patient records, vitals logging, ward logs, and nurse shift schedules.", icon: HeartPulse },
                                { title: "Diagnostic labs & pathology", desc: "Ensure sample tracking accuracy, test templates, automatic reports, and order records.", icon: Microscope },
                                { title: "Medical device stores", desc: "Support device sales, equipment rentals, serial tracking, and inventory logs.", icon: ShoppingBag }
                            ].map((item, i) => (
                                <div 
                                    key={i} 
                                    className="bg-white/60 backdrop-blur-lg border border-white/80 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-h-[220px]"
                                >
                                    <div className="size-14 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center shrink-0">
                                        <item.icon className="size-6" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-bold text-[#00477b] text-lg sm:text-xl leading-snug">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQ & Final CTA Side-by-Side Section */}
            <section className="pt-10 pb-20 bg-transparent border-t border-white/40">
                <div className="w-full px-4 md:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Side: FAQ (Columns: 7/12) */}
                        <div className="lg:col-span-7">
                            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">FAQ</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-8 leading-tight">
                                FAQ (Healthcare ERP Edition)
                            </h2>
                            
                            <FaqAccordion 
                                items={[
                                    { q: "Does ERPNext require license fees?", a: "No — ERPNext is open-source (GPL). You pay only implementation and hosting costs." },
                                    { q: "Can we start small and scale later (add more modules)?", a: "Absolutely. ERPNext is modular. You can start with core modules (OPD, Pharmacy, Accounting) and expand as needed." },
                                    { q: "Is patient data secure?", a: "Yes — ERPNext supports role-based access, audit trails, and secure storage. We can also help with additional hosting/security setup." },
                                    { q: "Can we integrate with third-party labs/pharmacy systems/insurance software?", a: "Yes. Because ERPNext is open-source and flexible, integrations are possible. We'll assess during the consultation." },
                                    { q: "What about training and support?", a: "Gnosys Digital handles training of doctors, staff, admin, lab technicians — plus post-launch support, updates, and customizations." }
                                ]}
                                containerClassName="bg-white/40 backdrop-blur-lg border border-white/60 rounded-[2rem] shadow-sm overflow-hidden"
                                itemClassName="border-b border-white/40 last:border-0"
                                buttonClassName="text-zinc-900 hover:bg-white/20 px-6 py-5 text-[15px] sm:text-base font-bold"
                                iconColorClass="text-zinc-500"
                                answerClassName="text-zinc-600 px-6 pb-5 leading-relaxed text-sm sm:text-[15px]"
                            />
                        </div>

                        {/* Right Side: Final CTA Box (Columns: 5/12) */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-start">
                            <div className="hidden lg:block h-[116px]"></div>
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 text-center flex flex-col items-center flex-grow">
                                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Next Step</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                    Book Your Healthcare ERP Consultation
                                </h2>
                                <p className="text-zinc-600 font-medium mb-8 text-sm sm:text-base leading-relaxed">
                                    Let's understand your facility — its size, workflows, and goals — and propose a tailored implementation plan. No obligation. Just clarity, practicality, and the right system.
                                </p>
                                <Button className="bg-[#00477b] hover:bg-[#003862] text-white font-bold h-14 px-8 w-full rounded-xl shadow-lg transition-all hover:scale-102">
                                    Schedule My Healthcare ERP Discovery Call
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
