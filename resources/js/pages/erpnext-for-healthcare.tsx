import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Activity, Clock, FileCheck, Target, Heart, Search, FileText, CheckCircle2, ChevronDown, Plus, Minus
} from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextForHealthcare() {
    // FAQ State
    const [openFaq, setOpenFaq] = useState<number>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <MainLayout>
            <Head title="ERPNext For Healthcare" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 flex items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                        style={{ backgroundImage: "url('/assets/healthcare-hero.webp')", backgroundColor: '#00477b' }}
                    ></div>
                    <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-100 to-transparent"></div>
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
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#00477b] mb-12">
                        Why Healthcare Businesses Choose ERPNext
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: "Complete Workflow Coverage", desc: "OPD, IPD, lab, pharmacy, billing, HR, inventory & more — all modules integrated under one roof." },
                            { icon: FileCheck, title: "No Licensing Fee", desc: "ERPNext is open-source (GPL-licensed), reducing upfront software costs and avoiding recurring license fees." },
                            { icon: Activity, title: "Customizable & Scalable", desc: "Adjust the system to your clinic/hospital size; from small clinics to large multi-department hospitals; add or remove modules as needed." },
                            { icon: Heart, title: "Compliance & Data Safety", desc: "Manage patient records, clinical data, billing, and employee data — with audit trails, role-based access, and compliance readiness for healthcare regulations." },
                            { icon: Clock, title: "All-in-One ERP + HMS", desc: "Not just a Healthcare Management System; you get ERP features for accounting, payroll, inventory, asset management, purchasing — useful for hospitals/clinics running multiple functions." },
                            { icon: Search, title: "Global & Local", desc: "Affordable implementation — As a Gnosys Digital offering, you get expert implementation, customization & support — priced for small/mid-size to large healthcare businesses." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300">
                                <item.icon className="size-8 text-[#00477b] mb-4" />
                                <h3 className="text-lg font-bold text-[#00477b] mb-3">{item.title}</h3>
                                <p className="text-sm text-zinc-700 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. What ERPNext Healthcare Can Manage (Table) */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-[#00477b] mb-10">
                        What ERPNext Healthcare Can Manage
                    </h2>
                    
                    <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl overflow-hidden">
                        <table className="w-full text-left border-collapse text-sm sm:text-base">
                            <thead>
                                <tr className="bg-[#00477b] text-white">
                                    <th className="py-5 px-6 font-bold w-1/2 border-r border-white/20">Module / Functionality</th>
                                    <th className="py-5 px-6 font-bold w-1/2">Ideal For</th>
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
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/40 transition-colors">
                                        <td className="py-4 px-6 font-semibold border-r border-white/60">
                                            {row.mod.split(':').map((part, index) => 
                                                index === 0 ? <span key={index}>{part}:</span> : <span key={index} className="font-normal text-zinc-600">{part}</span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-zinc-600">{row.ideal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. Payroll Management */}
            <section className="py-20 bg-transparent text-center border-t border-white/40">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                        Payroll Management Hassle-Free & Accurate
                    </h2>
                    <p className="text-zinc-600 mb-12">
                        ERPNext Payroll simplifies salary management for hospitals, clinics, and labs:
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {[
                            { icon: FileText, title: "Automated Calculations", desc: "wages, overtime, deductions, bonuses — all calculated accurately." },
                            { icon: Clock, title: "Integrate Attendance & Leave", desc: "payroll reflects real-time shifts and leave balances." },
                            { icon: FileCheck, title: "Compliance & Reporting", desc: "maintain audit-ready records and comply with local labor laws." },
                            { icon: Target, title: "Employee Self-Service", desc: "staff can view payslips, leave, and salary history online." },
                            { icon: Activity, title: "Scalable for Any Facility", desc: "works for small clinics to multi-department hospitals." }
                        ].map((item, i) => (
                            <div key={i} className="w-[300px] bg-white/60 backdrop-blur-lg border-t-4 border-[#00477b] rounded-b-xl shadow-md p-6 text-left hover:-translate-y-1 transition-transform">
                                <item.icon className="size-6 text-[#00477b] mb-3" />
                                <h3 className="font-bold text-[#00477b] mb-2">{item.title}</h3>
                                <p className="text-xs text-zinc-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-sm text-zinc-800 font-medium">
                        <strong>Outcome:</strong> Reduce errors, save HR time, and ensure staff are paid correctly and on time.
                    </p>
                </div>
            </section>

            {/* 5. What You Get With Gnosys Digital */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#00477b] mb-12">
                        What You Get With Gnosys Digital + ERPNext Healthcare.
                    </h2>
                    
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#00477b] aspect-video flex items-center justify-center">
                                {/* Placeholder matching the vibe */}
                                <div className="text-white/50 flex flex-col items-center">
                                    <Activity className="size-16 mb-4" />
                                    <span className="font-semibold">Healthcare Implementation</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
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
                                        <div className="mt-1 flex-shrink-0 text-[#00477b]">
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
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-[#00477b] mb-12">
                        Key Benefits Of ERPNext For Healthcare
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {[
                            { solid: "Unified financial & accounting + hospital operations better insights, less manual reconciliation", outline: "Streamlined inpatient/outpatient workflows — from registration to discharge" },
                            { solid: "Faster patient registration and billing, less paperwork", outline: "Better staff management shifts, payroll, leaves, compliance tracking" },
                            { solid: "Accurate, centralized patient records (medical history, diagnostics, prescriptions)", outline: "Regulatory compliance readiness, audit trails, secure data management" },
                            { solid: "Efficient lab & pharmacy operations — no stockouts, expiry alerts, timely order processing", outline: "Reduced errors, improved resource utilization, and higher operational efficiency" }
                        ].map((row, i) => (
                            <React.Fragment key={i}>
                                <div className={cn(
                                    "p-6 rounded-lg font-bold text-sm sm:text-base flex items-center min-h-[100px]",
                                    i % 2 === 0 ? "bg-[#00477b] text-white shadow-lg" : "bg-white/60 backdrop-blur-lg border border-blue-200 text-[#00477b]"
                                )}>
                                    {row.solid}
                                </div>
                                <div className={cn(
                                    "p-6 rounded-lg font-bold text-sm sm:text-base flex items-center min-h-[100px]",
                                    i % 2 === 0 ? "bg-white/60 backdrop-blur-lg border border-blue-200 text-[#00477b]" : "bg-[#00477b] text-white shadow-lg"
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00477b] mb-4">
                        Let's Turn Search Into Sales
                    </h2>
                    <p className="text-zinc-600 font-medium mb-8">
                        Your customers are searching. Let's make sure they find you — and choose you.
                    </p>
                    <Button className="bg-[#00477b] hover:bg-[#00335e] text-white font-bold h-12 px-8 shadow-lg">
                        Book a Free Consultation
                    </Button>
                </div>
            </section>

            {/* 8. Who This Is For */}
            <section className="py-20 bg-transparent text-center">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">Who This Is For</h2>
                    <p className="text-zinc-600 mb-10">This solution fits a wide range of healthcare organizations</p>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Small clinics & polyclinics",
                            "Pharmacies + supply chains",
                            "Pharmacies & dispensaries",
                            "Multi-specialty hospitals",
                            "Nursing homes & rehabilitation centers",
                            "Diagnostic labs & pathology centers",
                            "Medical device stores + inventory-heavy dispensaries"
                        ].map((tag, i) => (
                            <div key={i} className="bg-white/70 backdrop-blur-md border border-white/80 shadow-sm text-zinc-600 text-xs sm:text-sm font-medium px-6 py-3 rounded-lg">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section className="py-20 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00477b] mb-10">
                        FAQ (Healthcare ERP Edition)
                    </h2>
                    
                    <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-xl shadow-lg overflow-hidden">
                        {[
                            { q: "Does ERPNext require license fees?", a: "No — ERPNext is open-source (GPL). You pay only implementation and hosting costs." },
                            { q: "Can we start small and scale later (add more modules)?", a: "Yes, you can easily enable or disable modules as your facility grows." },
                            { q: "Is patient data secure?", a: "Yes, the system supports role-based access, automated backups, and encrypted connections." },
                            { q: "Can we integrate with third-party labs/pharmacy systems/insurance software?", a: "ERPNext has a powerful REST API that allows integration with most modern third-party tools." },
                            { q: "What about training and support?", a: "We provide comprehensive training for your staff and offer ongoing AMC support for smooth operations." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-b border-white/60 last:border-0">
                                <button 
                                    className="w-full text-left px-6 py-5 font-bold text-[#00477b] text-sm sm:text-base flex justify-between items-center hover:bg-white/40 focus:outline-none transition-colors"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-[#00477b]">
                                            {openFaq === idx ? <Minus className="size-4" /> : <Plus className="size-4" />}
                                        </div>
                                        <span>{faq.q}</span>
                                    </div>
                                </button>
                                {openFaq === idx && (
                                    <div className="px-14 pb-5 text-zinc-600 text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00477b] mb-4">
                        Next Step: Book Your Healthcare ERP Consultation
                    </h2>
                    <p className="text-zinc-600 font-medium mb-10">
                        Let's understand your facility — its size, workflows, and goals — and propose a tailored implementation plan. No obligation. Just clarity, practicality, and the right system.
                    </p>
                    <Button className="bg-[#00477b] hover:bg-[#00335e] text-white font-bold h-14 px-10 shadow-xl transition-all hover:scale-105">
                        Schedule My Healthcare ERP Discovery Call
                    </Button>
                </div>
            </section>
            
        </MainLayout>
    );
}
