import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Activity, Clock, FileCheck, Target, Heart, Search, FileText, CheckCircle2, ChevronDown,
    Stethoscope, Pill, Hospital, Microscope, Truck, HeartPulse, ShoppingBag
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import FaqAccordion from '@/components/FaqAccordion';

export default function ErpnextForHealthcare() {

    return (
        <MainLayout>
            <Head title="ERPNext For Healthcare" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 flex items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/healthcare.webp')", backgroundColor: '#00477b' }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                        ERPNext For Healthcare
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-100 mb-6">
                        Digital Systems For Clinics, Hospitals & Labs
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-blue-50 leading-relaxed font-medium mb-10">
                        Transform your healthcare operations with one unified, open-source platform. From patient registration to pharmacy inventory, labs to billing — ERPNext turns your medical practice into a streamlined, compliant, and data-driven institution.
                    </p>
                    <Button className="bg-white text-[#00477b] hover:bg-gray-100 rounded-full px-8 h-14 text-base font-bold shadow-xl transition-all hover:scale-105">
                        Book a Free Healthcare-ERP Discovery Call
                    </Button>
                </div>
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
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Complete Workflow Coverage", desc: "OPD, IPD, lab, pharmacy, billing, HR, inventory & more — all modules integrated under one roof." },
                            { icon: FileCheck, title: "No Licensing Fee", desc: "ERPNext is open-source (GPL-licensed), reducing upfront software costs and avoiding recurring license fees." },
                            { icon: Activity, title: "Customizable & Scalable", desc: "Adjust the system to your clinic/hospital size; from small clinics to large multi-department hospitals; add or remove modules as needed." },
                            { icon: Heart, title: "Compliance & Data Safety", desc: "Manage patient records, clinical data, billing, and employee data — with audit trails, role-based access, and compliance readiness for healthcare regulations." },
                            { icon: Clock, title: "All-in-One ERP + HMS", desc: "Not just a Healthcare Management System; you get ERP features for accounting, payroll, inventory, asset management, purchasing — useful for hospitals/clinics running multiple functions." },
                            { icon: Search, title: "Global & Local", desc: "Affordable implementation — As a Gnosys Digital offering, you get expert implementation, customization & support — priced for small/mid-size to large healthcare businesses." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1 transition-all duration-300">
                                <div className="size-14 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                    <item.icon className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. What ERPNext Healthcare Can Manage (Table) */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Capabilities
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            What ERPNext Healthcare Can Manage
                        </h2>
                    </div>
                    
                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl overflow-hidden">
                        <table className="w-full text-left border-collapse text-sm sm:text-base">
                            <thead>
                                <tr className="bg-zinc-900 text-white">
                                    <th className="py-5 px-6 font-bold w-[65%] border-r border-zinc-800 text-xs sm:text-sm uppercase tracking-wider">Module / Functionality</th>
                                    <th className="py-5 px-6 font-bold w-[35%] text-xs sm:text-sm uppercase tracking-wider">Ideal For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/60 text-zinc-800">
                                {[
                                    { mod: "Patient Management: registration, patient master data, patient history & medical records, encounter management", ideal: "Clinics, hospitals, multi-doctor practices" },
                                    { mod: "Appointment Scheduling & Practitioner Calendars", ideal: "OPD clinics, multi-doctor hospitals, diagnostic centers" },
                                    { mod: "OPD / IPD Workflow: admissions, bed management, discharge processes, inpatient tracking", ideal: "Hospitals, multi-specialty centers" },
                                    { mod: "Laboratory & Radiology Module: sample tracking, test requests, report generation, lab order management", ideal: "Labs, diagnostic centers, hospitals with in-house labs" },
                                    { mod: "Pharmacy & Inventory Management: drug stock, expiry tracking, reorder alerts, billing, integration with pharmacy & store", ideal: "Hospitals, clinics with pharmacy, drug store, dispensary" },
                                    { mod: "Billing & Financials: patient billing, insurance/ insurance claims (if needed), expense tracking, accounting integration", ideal: "Clinics, hospitals, diagnostic centers, multi-branch facilities" },
                                    { mod: "HR & Staff Management: doctor/nurse scheduling, payroll, leave/attendance, staff records, compliance & certification tracking", ideal: "Hospitals, clinics, labs, healthcare centers" },
                                    { mod: "Asset & Equipment Management: manage medical equipment, maintenance schedules, asset tracking, depreciation / maintenance history", ideal: "Hospitals, labs, diagnostic centers, clinics with equipment" },
                                    { mod: "Reporting & Analytics: dashboards, appointment analytics, financial reports, lab test stats, occupancy, and resource utilization reports", ideal: "Hospital management, admin staff, decision makers" },
                                    { mod: "Compliance & Audit Trail Support: Medical coding support (ICD-10, etc.), record of encounters, medication history, documentation for audits/standards", ideal: "Hospitals, clinics needing regulatory compliance & structured records" }
                                ].map((row, i) => {
                                    const parts = row.mod.split(':');
                                    const title = parts[0];
                                    const desc = parts.slice(1).join(':');

                                    return (
                                        <tr key={i} className="hover:bg-white/20 transition-colors">
                                            <td className="py-5 px-6 border-r border-white/60">
                                                <div className="flex items-start gap-3">
                                                    <span className="mt-2 size-1.5 rounded-full bg-zinc-500 shrink-0 shadow-sm animate-pulse" />
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-zinc-900 text-[15px] sm:text-base leading-snug">{title.trim()}</span>
                                                        {desc && <span className="text-xs sm:text-sm text-zinc-500 mt-1 font-medium leading-relaxed">{desc.trim()}</span>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 px-6">
                                                <div className="flex flex-wrap gap-1.5">
                                    {row.ideal.split(',').map((item, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/60 text-zinc-800 border border-white/80 hover:bg-white/80 transition-colors cursor-default"
                                                        >
                                                            {item.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
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
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {[
                            { icon: FileText, title: "Automated Calculations", desc: "wages, overtime, deductions, bonuses — all calculated accurately." },
                            { icon: Clock, title: "Integrate Attendance & Leave", desc: "payroll reflects real-time shifts and leave balances." },
                            { icon: FileCheck, title: "Compliance & Reporting", desc: "maintain audit-ready records and comply with local labor laws." },
                            { icon: Target, title: "Employee Self-Service", desc: "staff can view payslips, leave, and salary history online." },
                            { icon: Activity, title: "Scalable for Any Facility", desc: "works for small clinics to multi-department hospitals." }
                        ].map((item, i) => (
                            <div key={i} className="w-[300px] bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm p-6 text-left hover:-translate-y-1 transition-transform">
                                <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-4">
                                    <item.icon className="size-5" />
                                </div>
                                <h3 className="font-bold text-[#00477b] mb-2">{item.title}</h3>
                                <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
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
                    
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-[65%]">
                            <div className="">
                                <img 
                                    src="/assets/helalth.webp" 
                                    alt="What You Get With Gnosys Digital" 
                                    className="w-full h-auto object-contain" 
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-[35%]">
                            <ul className="space-y-5">
                                {[
                                    "Requirement analysis & process mapping: we study your existing workflows, pain points, and compliance needs",
                                    "ERPNext installation & configuration (cloud or self-hosted)",
                                    "Module customization — doctor schedules, lab templates, pharmacy workflows, reporting layout, etc.",
                                    "Data migration/legacy data import (if migrating from Excel/Tally/other systems)",
                                    "Training for staff — doctors, lab techs, admin, billing staff",
                                    "Post-launch support — bug fixes, module tweaks, updates",
                                    "Integration with other systems (if required) — e.g., third-party lab, telemedicine, POS, etc."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-zinc-500">
                                            <CheckCircle2 className="size-5" />
                                        </div>
                                        <span className="text-zinc-700 font-medium text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {[
                            { solid: "Unified financial & accounting + hospital operations better insights, less manual reconciliation", outline: "Streamlined inpatient/outpatient workflows — from registration to discharge" },
                            { solid: "Faster patient registration and billing, less paperwork", outline: "Better staff management shifts, payroll, leaves, compliance tracking" },
                            { solid: "Accurate, centralized patient records (medical history, diagnostics, prescriptions)", outline: "Regulatory compliance readiness, audit trails, secure data management" },
                            { solid: "Efficient lab & pharmacy operations — no stockouts, expiry alerts, timely order processing", outline: "Reduced errors, improved resource utilization, and higher operational efficiency" }
                        ].map((row, i) => (
                            <React.Fragment key={i}>
                                <div className={cn(
                                    "p-6 rounded-2xl font-bold text-sm sm:text-base flex items-center min-h-[100px] shadow-sm",
                                    i % 2 === 0 ? "bg-[#02182b] text-white shadow-lg shadow-zinc-900/10" : "bg-white/40 backdrop-blur-lg border border-white/60 text-zinc-900"
                                )}>
                                    {row.solid}
                                </div>
                                <div className={cn(
                                    "p-6 rounded-2xl font-bold text-sm sm:text-base flex items-center min-h-[100px] shadow-sm",
                                    i % 2 === 0 ? "bg-white/40 backdrop-blur-lg border border-white/60 text-zinc-900" : "bg-[#02182b] text-white shadow-lg shadow-zinc-900/10"
                                )}>
                                    {row.outline}
                                </div>
                            </React.Fragment>
                        ))}
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
                    <Button className="bg-[#02182b] hover:bg-[#032b4d] text-white font-bold h-12 px-8 shadow-lg">
                        Book a Free Consultation
                    </Button>
                </div>
            </section>

            {/* 8. Who This Is For */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Target Audience
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Who This Is For</h2>
                    </div>
                    <p className="text-zinc-600 mb-12 max-w-2xl mx-auto font-medium">
                        This solution fits a wide range of healthcare organizations, tailored to streamline operational workflows and improve patient care.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 text-left">
                        {[
                            { title: "Small clinics & polyclinics", desc: "Single or multi-doctor practices seeking digital patient records, scheduling, and billing.", icon: Stethoscope },
                            { title: "Pharmacies & supply chains", desc: "Manage multi-store inventories, batch numbers, stock replenishment, and billing logs.", icon: Truck },
                            { title: "Pharmacies & dispensaries", desc: "Speed up retail point-of-sale operations, prescription handling, and stock audits.", icon: Pill },
                            { title: "Multi-specialty hospitals", desc: "Unify complete OPD/IPD workflows, bed allocation, department lists, and clinical notes.", icon: Hospital },
                            { title: "Nursing homes & rehab centers", desc: "Track long-term patient records, vitals logging, ward logs, and nurse shift schedules.", icon: HeartPulse },
                            { title: "Diagnostic labs & pathology", desc: "Ensure sample tracking accuracy, test templates, automatic reports, and order records.", icon: Microscope },
                            { title: "Medical device stores", desc: "Support device sales, equipment rentals, serial tracking, and inventory logs.", icon: ShoppingBag }
                        ].map((item, i) => (
                            <div 
                                key={i} 
                                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                            >
                                <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center shrink-0">
                                    <item.icon className="size-5" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-[#00477b] text-base leading-snug">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section className="py-20 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            FAQ
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">
                            FAQ (Healthcare ERP Edition)
                        </h2>
                    </div>
                    
                    <FaqAccordion 
                        items={[
                            { q: "Does ERPNext require license fees?", a: "No — ERPNext is open-source (GPL). You pay only implementation and hosting costs." },
                            { q: "Can we start small and scale later (add more modules)?", a: "Absolutely. ERPNext is modular. You can start with core modules (OPD, Pharmacy, Accounting) and expand as needed." },
                            { q: "Is patient data secure?", a: "Yes — ERPNext supports role-based access, audit trails, and secure storage. We can also help with additional hosting/security setup." },
                            { q: "Can we integrate with third-party labs/pharmacy systems/insurance software?", a: "Yes. Because ERPNext is open-source and flexible, integrations are possible. We'll assess during the consultation." },
                            { q: "What about training and support?", a: "Gnosys Digital handles training of doctors, staff, admin, lab technicians — plus post-launch support, updates, and customizations." }
                        ]}
                        containerClassName="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl shadow-sm"
                        itemClassName="border-b border-white/40 last:border-0"
                        buttonClassName="text-zinc-900 hover:bg-white/20"
                        iconColorClass="text-zinc-500"
                        answerClassName="text-zinc-600"
                    />
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Next Step
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                        Book Your Healthcare ERP Consultation
                    </h2>
                    <p className="text-zinc-600 font-medium mb-10">
                        Let's understand your facility — its size, workflows, and goals — and propose a tailored implementation plan. No obligation. Just clarity, practicality, and the right system.
                    </p>
                    <Button className="bg-[#02182b] hover:bg-[#032b4d] text-white font-bold h-14 px-10 shadow-xl transition-all hover:scale-105">
                        Schedule My Healthcare ERP Discovery Call
                    </Button>
                </div>
            </section>
            
        </MainLayout>
    );
}
