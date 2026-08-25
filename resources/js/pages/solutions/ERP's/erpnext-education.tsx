import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    GraduationCap, Users, BookOpen, Building2,
    CheckSquare, Search, Database, Settings,
    MonitorPlay, Rocket, ArrowRight, CheckCircle2,
    Calculator, LineChart, ShieldCheck, Clock, Check, ChevronDown,
    UserCheck, ClipboardCheck, Briefcase, Receipt, Bus,
    Smartphone, Laptop, FileCheck2
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextEducation() {
    return (
        <MainLayout>
            <Head title="ERPNext For Education Institutions" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-36 lg:pt-36 lg:pb-48 flex items-center min-h-[92vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-education.webp')", backgroundColor: '#001a30' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none lg:w-1/2"></div>
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
                                Education ERP Solution
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                One Platform For Academic Excellence And Administrative Efficiency
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Streamline admissions, academics, finance, HR, and operations. Let your institution focus on education while we handle the complexity.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Get Free Assessment <span className="text-xl">&rarr;</span></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. The Challenge Modern Institutions Face */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            The Challenge Modern Institutions Face
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    icon: Clock,
                                    title: "Operational Inefficiency",
                                    points: [
                                        "Manual admission handling causing massive delays",
                                        "Paper-based communication and slow approvals",
                                        "Unreliable attendance and manual grading processes",
                                        "Timetable conflicts across classrooms, labs, and faculty"
                                    ]
                                },
                                {
                                    icon: Calculator,
                                    title: "Financial & Compliance Pressure",
                                    points: [
                                        "Complex fee collection and manual reconciliation",
                                        "Scholarship and concession tracking errors",
                                        "Reporting burden for UGC, AICTE, NAAC, and CBSE",
                                        "Limited visibility into department budgets and expenditure"
                                    ]
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Academic Quality Gaps",
                                    points: [
                                        "Multiple versions of syllabi and course documents",
                                        "Non-standardized assessment & outcome tracking",
                                        "Difficulty measuring student learning outcomes",
                                        "Poor research and publication repository management"
                                    ]
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {item.points.map((pt, pIdx) => (
                                                <li key={pIdx} className="flex items-start gap-2.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00477b] mt-2 shrink-0"></div>
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Complete Digital Campus Solution */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Our Solution
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            The Complete Digital Campus Solution
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 text-left">
                            {[
                                {
                                    icon: Building2,
                                    title: "Streamlined Administration",
                                    items: [
                                        "Automated online admissions",
                                        "Centralized parent/student portal",
                                        "Facility, asset & library control",
                                        "Transport & hostel operations"
                                    ]
                                },
                                {
                                    icon: GraduationCap,
                                    title: "Academic Delivery",
                                    items: [
                                        "Curriculum & smart timetable setup",
                                        "Digital exams & grade books",
                                        "Assignment & content repository",
                                        "Student performance analytics"
                                    ]
                                },
                                {
                                    icon: Calculator,
                                    title: "Financial Control",
                                    items: [
                                        "End-to-end fee cycle automation",
                                        "Scholarship & concession tracking",
                                        "Payroll & vendor payment system",
                                        "Built-in statutory & audit reports"
                                    ]
                                },
                                {
                                    icon: LineChart,
                                    title: "Data-Driven Leadership",
                                    items: [
                                        "Real-time dashboards for executives",
                                        "Student and faculty performance",
                                        "Automated NAAC / NBA reports",
                                        "Multi-campus governance"
                                    ]
                                }
                            ].map((col, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <col.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{col.title}</h3>
                                        <ul className="text-sm sm:text-[15px] text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {col.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. All Included Campus Modules */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Campus Ecosystem
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            All Included Campus Modules
                        </h2>
                        <p className="text-zinc-600 text-sm font-normal mt-2 max-w-2xl mx-auto">
                            A fully unified open-source ecosystem connecting students, faculty, administration, and accounts.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
                            {[
                                { icon: UserCheck, title: "Student SIS", desc: "Profiles, enrollment, batch tracking & lifecycle records" },
                                { icon: ClipboardCheck, title: "Admissions Portal", desc: "Online application forms, merit lists & automated document checks" },
                                { icon: Briefcase, title: "Placement & Alumni", desc: "Campus drive management, interview rounds & alumni directory" },
                                { icon: Receipt, title: "Fee & Accounting", desc: "Online payment sync, installments & automated GST receipts" },
                                { icon: Users, title: "HR & Payroll", desc: "Biometric attendance, faculty workload & auto salary processing" },
                                { icon: BookOpen, title: "Library & Inventory", desc: "Barcode book cataloging, circulation & campus asset registry" },
                                { icon: Bus, title: "Hostel & Fleet", desc: "Room allotment, route optimization & GPS live transport tracking" },
                                { icon: Smartphone, title: "Mobile Apps", desc: "Dedicated iOS & Android apps for students, parents & staff" },
                                { icon: Laptop, title: "LMS & Classroom", desc: "Digital study material, quiz portals & assignment submissions" },
                                { icon: FileCheck2, title: "Exams & Grading", desc: "Hall ticket generation, mark sheet publishing & CBCS credits" }
                            ].map((module, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={50 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/45 backdrop-blur-xl border border-white/75 hover:border-white rounded-2xl p-4 sm:p-5 shadow-[0_8px_25px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/10 hover:bg-white/70 hover:-translate-y-1.5 transition-all duration-400 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-400 pointer-events-none"></div>
                                        <div className="size-12 mb-3 rounded-xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                                            <module.icon className="size-6 text-[#00477b]" />
                                        </div>
                                        <h4 className="text-sm sm:text-[15px] font-normal text-[#00477b] mb-1.5 leading-snug tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {module.title}
                                        </h4>
                                        <p className="text-[11px] sm:text-xs text-zinc-500 font-normal leading-relaxed relative z-10">
                                            {module.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Who We Serve */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Who We Serve
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Tailored For Every Education Format
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { icon: BookOpen, title: "Schools (K-12)", desc: "Parent portal, homework tracking, fee collection and co-curricular assessments." },
                                { icon: GraduationCap, title: "Colleges & Universities", desc: "CBCS credit systems, research repositories, alumni & placement management." },
                                { icon: Users, title: "Coaching & Training", desc: "Batch scheduling, test analytics, fee installments & multi-center management." },
                                { icon: Building2, title: "Technical Institutions", desc: "Lab booking, internship tracking, accreditation reporting & industry tie-ups." }
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
                    </div>
                </div>
            </section>

            {/* 5. Implementation Journey */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Implementation
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Education ERP Implementation Journey
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {[
                                { step: "Phase 1", icon: Search, title: "Discovery", desc: "Review academic workflows and identify core department requirements." },
                                { step: "Phase 2", icon: Settings, title: "Configuration", desc: "Set up courses, fees, roles, grading rules, and admin dashboards." },
                                { step: "Phase 3", icon: Database, title: "Migration", desc: "Import legacy student, staff, and financial data with QA verification." },
                                { step: "Phase 4", icon: MonitorPlay, title: "Training", desc: "Comprehensive hands-on training for faculty, admin, and management." },
                                { step: "Phase 5", icon: Rocket, title: "Go-Live & Support", desc: "Smooth campus launch followed by dedicated operational handholding." },
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-7 sm:p-8 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-5 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-xs uppercase tracking-wider mb-2.5 relative z-10">
                                            {item.step}
                                        </span>
                                        <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-snug tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Results You Can Expect */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Expected Results
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Results You Can Expect
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { area: "Administrative processing speed", impact: "80%", suffix: "FASTER" },
                                { area: "Attendance & grading accuracy", impact: "90%", suffix: "ACCURACY" },
                                { area: "On-time fee collections", impact: "70%", suffix: "INCREASE" },
                                { area: "Statutory & NAAC compliance", impact: "100%", suffix: "COMPLIANCE" }
                            ].map((stat, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="text-4xl sm:text-5xl font-extrabold text-[#00477b] mb-1 relative z-10">
                                            {stat.impact}
                                        </div>
                                        <div className="text-[11px] font-bold text-[#00477b] tracking-[0.2em] uppercase mb-3 relative z-10">
                                            {stat.suffix}
                                        </div>
                                        <div className="h-0.5 w-10 bg-blue-200 mb-3 relative z-10"></div>
                                        <p className="text-sm text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {stat.area}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Success Highlights */}
            <section className="relative overflow-hidden py-14 sm:py-16 text-white border-t border-white/40">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/edu-erp.webp" alt="Education ERP Highlights" width="1200" height="600" loading="lazy" decoding="async" className="w-full h-full object-cover object-bottom" />
                    <div className="absolute inset-0 bg-[#00477b]/40 backdrop-blur-xs"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-bold text-white uppercase tracking-wider mb-3">
                            Case Studies
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-center mb-10 text-white">
                            Success Highlights Across Institutions
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            {
                                name: "CBSE School Group",
                                loc: "Mumbai",
                                points: [
                                    "95% of administrative workflows automated",
                                    "70% reduction in parent inquiry calls",
                                    "98% on-time fee collection efficiency"
                                ]
                            },
                            {
                                name: "Engineering College",
                                loc: "Pune",
                                points: [
                                    "60% faster NAAC document preparation",
                                    "30% increase in faculty research tracking",
                                    "Automated digital grade book publishing"
                                ]
                            },
                            {
                                name: "Coaching Institute Network",
                                loc: "Delhi",
                                points: [
                                    "Scaled from 500 to 5,000 students smoothly",
                                    "Integrated app for real-time exam reports",
                                    "Multi-branch billing & centralized fees"
                                ]
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                <div className="bg-black/35 backdrop-blur-lg border border-white/20 p-7 sm:p-8 rounded-[2rem] shadow-xl transition-all flex flex-col h-full">
                                    <h3 className="text-xl font-normal text-white mb-1">{item.name}</h3>
                                    <p className="text-xs text-blue-200 font-bold mb-4 uppercase tracking-wider">{item.loc}</p>
                                    <ul className="space-y-2.5 list-none text-sm text-zinc-100 font-normal leading-relaxed">
                                        {item.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2.5">
                                                <CheckCircle2 className="size-4 text-blue-300 mt-0.5 shrink-0" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Why Partner With Gnosys Digital */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Why Gnosys
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Partner With Gnosys Digital
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                {
                                    title: "35+ Institutions",
                                    desc: "35+ schools and colleges transformed and digitized across India.",
                                    icon: Building2
                                },
                                {
                                    title: "Academic & Compliance",
                                    desc: "Deep knowledge of Indian academic governance, NAAC, NBA, and CBSE.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Dedicated Experts",
                                    desc: "Domain specialists who understand daily campus operations.",
                                    icon: Users
                                },
                                {
                                    title: "Proven Support",
                                    desc: "Dedicated training and AMC support for long-term operational success.",
                                    icon: CheckCircle2
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
                    </div>
                </div>
            </section>

            {/* 9. Pricing & Campus Assessment Form */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
                            
                            {/* Left Side: Pricing Card (5 cols) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 flex flex-col justify-start">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3 w-fit">
                                    Pricing & Packages
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-normal text-[#00477b] tracking-tight mb-4">
                                    Education ERP Package
                                </h2>
                                <p className="text-zinc-600 font-normal mb-6 text-sm sm:text-base leading-relaxed">
                                    Complete campus digital transformation package with zero hidden costs.
                                </p>

                                {/* Pricing Box */}
                                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/80 p-6 sm:p-7 flex flex-col gap-5 relative group overflow-hidden mb-5">
                                    <div className="border-b border-blue-100/80 pb-4">
                                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Starting At</div>
                                        <div className="text-4xl sm:text-5xl font-extrabold text-[#00477b] tracking-tight">
                                            ₹1,50,000
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-[#00477b] uppercase tracking-wider text-xs">Included Core Modules:</h4>
                                        <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                                            Student Lifecycle, Fee Collection & Accounts, Attendance & Timetable, 5 User Licenses, Data Migration, Staff Training & Dedicated Go-Live Support.
                                        </p>
                                    </div>
                                </div>

                                {/* Bonus Box */}
                                <div className="bg-blue-50/70 backdrop-blur-md rounded-2xl p-5 border border-blue-100/90 shadow-sm relative overflow-hidden">
                                    <h4 className="font-bold text-[#00477b] mb-2.5 uppercase tracking-wider text-xs flex items-center gap-2">
                                        Limited Time Campus Bonuses:
                                    </h4>
                                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-normal">
                                        <li className="flex items-center gap-2">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                            <span>NAAC / NBA Compliance Document Engine</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                            <span>Student & Parent Mobile App Setup</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="size-1.5 rounded-full bg-[#00477b] shrink-0" />
                                            <span>RFID & Biometric Sync Configuration</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* Right Side: Contact Form Card (7 cols) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7 w-full">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-8 rounded-[2rem] shadow-xl w-full">
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Get Started
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b] mb-2">
                                            Request Campus Assessment
                                        </h3>
                                        <p className="text-zinc-600 text-sm font-normal">
                                            Fill in your institution details for a customized digital readiness roadmap and cost estimate.
                                        </p>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="fullName" className="text-xs font-medium text-[#00477b]">Full Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-xs font-medium text-[#00477b]">Email Address *</Label>
                                                <Input id="email" type="email" placeholder="Enter your official email" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="phone" className="text-xs font-medium text-[#00477b]">Phone Number *</Label>
                                                <Input id="phone" placeholder="+91 98765 43210" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="institutionName" className="text-xs font-medium text-[#00477b]">Institution Name *</Label>
                                                <Input id="institutionName" placeholder="Enter school / college name" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="typeOfInstitution" className="text-xs font-medium text-[#00477b]">Institution Type</Label>
                                                <div className="relative">
                                                    <select id="typeOfInstitution" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">School (K-12)</option>
                                                        <option className="bg-white">College / Higher Education</option>
                                                        <option className="bg-white">University / Multi-Campus Group</option>
                                                        <option className="bg-white">Coaching & Training Institute</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="studentStrength" className="text-xs font-medium text-[#00477b]">Student Strength</Label>
                                                <div className="relative">
                                                    <select id="studentStrength" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Under 500 Students</option>
                                                        <option className="bg-white">500 - 2,000 Students</option>
                                                        <option className="bg-white">2,000 - 5,000 Students</option>
                                                        <option className="bg-white">5,000+ Students</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="primaryChallenges" className="text-xs font-medium text-[#00477b]">Primary Digitisation Priority</Label>
                                            <div className="relative">
                                                <select id="primaryChallenges" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium placeholder:text-zinc-400 focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                    <option className="bg-white">Admissions & Fee Collection Automation</option>
                                                    <option className="bg-white">Online Exams & Grading Governance</option>
                                                    <option className="bg-white">NAAC / NIRF Compliance & Reporting</option>
                                                    <option className="bg-white">Complete Multi-Campus ERP Overhaul</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 font-bold w-full shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2">
                                                Request Digital Campus Audit <ArrowRight className="size-4" />
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
