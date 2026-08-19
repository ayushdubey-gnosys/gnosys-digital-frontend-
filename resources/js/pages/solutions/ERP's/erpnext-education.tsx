import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    GraduationCap, Users, BookOpen, Building2,
    CheckSquare, Star, Search, Database, Settings,
    MonitorPlay, Rocket, ArrowRight
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextEducation() {
    return (
        <MainLayout>
            <Head title="ERPNext For Education Institutions" />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-100/60 via-purple-50/50 to-pink-100/60 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-education.webp')" }}
                    ></div>
                    <div className="absolute inset-0 bg-[#29628d]/80 mix-blend-multiply"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                            One Platform For Academic Excellence And Administrative Efficiency
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
                            Stop managing scattered data. Unify admissions, fees, academics, and HR in one seamless digital campus.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">Talk to an Expert <span className="text-xl">&rarr;</span></span>
                            <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                        </Button>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. The Challenge Modern Institutions Face */}
            <section className="pt-24 bg-transparent relative z-10 text-center">
                <div className="container mx-auto px-4 max-w-6xl relative z-10 mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-4xl font-normal text-[#00477b] mb-4 tracking-tight">
                        The Challenge Modern Institutions Face
                    </h2>
                    <p className="text-zinc-600 text-base max-w-2xl mx-auto">
                        Education organizations are trying to balance legacy systems with rising digital expectations. Common issues include:
                    </p>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full text-left">
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-xl font-normal mb-4 text-[#00477b]">Operational Inefficiency</h3>
                            <ul className="text-sm text-zinc-600 leading-relaxed list-disc pl-4 space-y-2">
                                <li>Manual admission handling is causing delays</li>
                                <li>Paper-based communication and approvals</li>
                                <li>Unreliable attendance and grading processes</li>
                                <li>Timetable conflicts across classrooms, labs, and faculty</li>
                            </ul>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-xl font-normal mb-4 text-[#00477b]">Financial & Compliance Pressure</h3>
                            <ul className="text-sm text-zinc-600 leading-relaxed list-disc pl-4 space-y-2">
                                <li>Complex fee collection and reconciliation</li>
                                <li>Scholarship and concession tracking errors</li>
                                <li>Reporting for UGC, AICTE, NAAC, and other bodies</li>
                                <li>Limited visibility into budgets and expenditure</li>
                            </ul>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-xl font-normal mb-4 text-[#00477b]">Academic Quality Gaps</h3>
                            <ul className="text-sm text-zinc-600 leading-relaxed list-disc pl-4 space-y-2">
                                <li>Multiple versions of syllabi and course documents</li>
                                <li>Non-standardized assessments</li>
                                <li>Difficulty tracking academic outcomes</li>
                                <li>Poor research and publication management</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Complete Digital Campus Solution */}
            <section className="pt-24 bg-transparent relative z-10 border-t border-white/20">
                <div className="container mx-auto px-4 max-w-6xl mb-12">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SOLUTION
                        </span>
                        <h2 className="text-4xl font-normal text-[#00477b] mb-4 tracking-tight">
                            The Complete Digital Campus Solution
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
                            ERPNext connects every part of your institution to a single system.
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
                        {/* Column 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-normal text-[#1a4464] text-xl mb-6">Streamlined Administration</h3>
                            <ul className="space-y-4">
                                {[
                                    "Automated online admissions",
                                    "Centralized communication (portal, mobile app, SMS, email)",
                                    "Facility, asset, and library management",
                                    "Transport and hostel operations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                                        <div className="bg-zinc-100 rounded p-0.5 mt-0.5 shrink-0 text-zinc-600">
                                            <CheckSquare className="size-3.5" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-normal text-[#1a4464] text-xl mb-6">Academic Delivery & Learning</h3>
                            <ul className="space-y-4">
                                {[
                                    "Curriculum planning and smart timetable scheduling",
                                    "Digital exams and automated grade books",
                                    "Assignment and learning content management",
                                    "Student performance insights"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                                        <div className="bg-zinc-100 rounded p-0.5 mt-0.5 shrink-0 text-zinc-600">
                                            <CheckSquare className="size-3.5" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-normal text-[#1a4464] text-xl mb-6">Financial and Control</h3>
                            <ul className="space-y-4">
                                {[
                                    "End-to-end fee cycle automation",
                                    "Scholarship and concession management",
                                    "Payroll and vendor payments",
                                    "Built-in statutory and audit reports"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                                        <div className="bg-zinc-100 rounded p-0.5 mt-0.5 shrink-0 text-zinc-600">
                                            <CheckSquare className="size-3.5" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-normal text-[#1a4464] text-xl mb-6">Data-Driven Leadership</h3>
                            <ul className="space-y-4">
                                {[
                                    "Real-time dashboards for all stakeholders",
                                    "Student and faculty analytics",
                                    "Accreditation reporting automation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                                        <div className="bg-zinc-100 rounded p-0.5 mt-0.5 shrink-0 text-zinc-600">
                                            <CheckSquare className="size-3.5" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl mt-16 pb-24">
                    <div className="text-center">
                        <h3 className="text-4xl tracking-tight font-normal text-[#00477b] mb-12">Core Modules</h3>
                        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                            {[
                                "Student Information System", "Admissions & Enrollment", "Placement and Alumni",
                                "Fee & Accounting", "HR & Payroll", "Library & Inventory", "Hostel & Transport",
                                "Mobile App", "LMS & Assignments", "Examination & Assessment"
                            ].map((module, i) => (
                                <div key={i} className="border border-white/60 text-[#1a4464] font-medium text-base px-6 py-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)] bg-white/80 backdrop-blur-md hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all cursor-default rounded-full">
                                    {module}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Who We Serve */}
            <section className="py-24 bg-white/40 backdrop-blur-xl border-y border-white/60 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
                <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[100rem] relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHO WE SERVE
                    </span>
                    <h2 className="text-4xl font-normal text-[#00477b] mb-12 tracking-tight">
                        Who We Serve
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-[#00477b] font-normal text-xl mb-3">Schools (K-12)</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Parent portal, homework tracking, and co-curricular assessment</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-[#00477b] font-normal text-xl mb-3">Colleges & Universities</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Credit systems, research tracking, placement management</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-[#00477b] font-normal text-xl mb-3">Coaching & Training Institutes</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Batch scheduling, test analytics, franchise management</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-[#00477b] font-normal text-xl mb-3">Professional & Technical Institutions</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Lab booking, internship tracking, and industry collaboration</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Journey (Timeline) */}
            <section className="py-24 bg-transparent text-center overflow-hidden relative z-10">
                <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[100rem]">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        IMPLEMENTATION
                    </span>
                    <h2 className="text-4xl font-normal text-[#00477b] mb-4 tracking-tight">
                        Education ERP Implementation Journey
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mx-auto max-w-2xl">
                        Structured 5-phase rollout for smooth adoption across your institution
                    </p>
                </div>

                {/* Custom Timeline Layout */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-12 md:py-16 mt-16">
                    <div className="w-full px-6 lg:px-12 xl:px-20 mx-auto max-w-[100rem] flex flex-col md:flex-row items-stretch justify-between gap-3 lg:gap-5 relative z-10">
                            
                            {/* Step 1 */}
                            <div className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex-1 w-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)]">
                                <div className="size-16 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#00477b] mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Search className="size-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-[#00477b] text-base lg:text-lg mb-3">Discovery</h4>
                                <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed">Review academic workflows and identify core requirements.</p>
                            </div>

                            {/* Arrow 1 */}
                            <div className="flex items-center justify-center shrink-0 text-slate-400 rotate-90 md:rotate-0 py-2 md:py-0">
                                <ArrowRight className="size-6 lg:size-7" strokeWidth={1.5} />
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex-1 w-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)]">
                                <div className="size-16 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#00477b] mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Settings className="size-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-[#00477b] text-base lg:text-lg mb-3">Configuration</h4>
                                <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed">Set up courses, fees, roles, and dashboards.</p>
                            </div>

                            {/* Arrow 2 */}
                            <div className="flex items-center justify-center shrink-0 text-slate-400 rotate-90 md:rotate-0 py-2 md:py-0">
                                <ArrowRight className="size-6 lg:size-7" strokeWidth={1.5} />
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex-1 w-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)]">
                                <div className="size-16 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#00477b] mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Database className="size-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-[#00477b] text-base lg:text-lg mb-3">Migration</h4>
                                <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed">Import student and staff data and connect integrations.</p>
                            </div>

                            {/* Arrow 3 */}
                            <div className="flex items-center justify-center shrink-0 text-slate-400 rotate-90 md:rotate-0 py-2 md:py-0">
                                <ArrowRight className="size-6 lg:size-7" strokeWidth={1.5} />
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex-1 w-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)]">
                                <div className="size-16 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#00477b] mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <MonitorPlay className="size-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-[#00477b] text-base lg:text-lg mb-3">Training</h4>
                                <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed">Train admin, faculty, and support teams for launch.</p>
                            </div>

                            {/* Arrow 4 */}
                            <div className="flex items-center justify-center shrink-0 text-slate-400 rotate-90 md:rotate-0 py-2 md:py-0">
                                <ArrowRight className="size-6 lg:size-7" strokeWidth={1.5} />
                            </div>

                            {/* Step 5 */}
                            <div className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex-1 w-full relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)]">
                                <div className="size-16 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#00477b] mb-6 transition-transform duration-300 group-hover:scale-110">
                                    <Rocket className="size-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-[#00477b] text-base lg:text-lg mb-3">Optimization</h4>
                                <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed">Refine workflows and provide ongoing support.</p>
                            </div>

                        </div>
                    </div>
            </section>

            {/* 6. Results You Can Expect */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        EXPECTED RESULTS
                    </span>
                    <h2 className="text-4xl font-normal text-[#00477b] mb-12 tracking-tight">
                        Results You Can Expect
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
                        {[
                            { area: "Administrative processing", impact: "80%", suffix: "FASTER" },
                            { area: "Attendance & grading", impact: "90%", suffix: "ACCURACY" },
                            { area: "Fee collection", impact: "70%", suffix: "INCREASE" },
                            { area: "Statutory reporting", impact: "100%", suffix: "COMPLIANCE" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/80 backdrop-blur-xl rounded-[24px] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default">
                                <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#00477b] to-sky-400 mb-2 group-hover:scale-110 transition-transform duration-500">
                                    {stat.impact}
                                </div>
                                <div className="text-[11px] font-black text-sky-600 tracking-[0.2em] uppercase mb-5">
                                    {stat.suffix}
                                </div>
                                <div className="h-[2px] w-8 bg-sky-100 mb-5 group-hover:w-16 group-hover:bg-sky-400 transition-all duration-500"></div>
                                <p className="text-[13px] lg:text-sm text-zinc-600 font-medium leading-relaxed">
                                    {stat.area}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Success Highlights */}
            <section className="pt-28 pb-40 relative z-10 overflow-hidden border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/assets/edu-erp.webp" alt="Education ERP Highlights" width="1200" height="600" loading="lazy" decoding="async" className="w-full h-full object-cover object-bottom opacity-100" />
                </div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        SUCCESS HIGHLIGHTS
                    </span>
                    <h2 className="text-4xl font-normal text-[#00477b] mb-16 tracking-tight">
                        Success Highlights
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-2xl font-normal mb-1 text-[#00477b]">CBSE school group</h3>
                            <p className="text-xs text-indigo-600 font-bold mb-6 uppercase tracking-wider">Mumbai</p>
                            <ul className="space-y-3 list-none text-sm text-zinc-700 leading-snug">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>95% of processes are automated</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>70% reduction in parent inquiry calls</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>98% fee collection efficiency</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-2xl font-normal mb-1 text-[#00477b]">Engineering College</h3>
                            <p className="text-xs text-indigo-600 font-bold mb-6 uppercase tracking-wider">Pune</p>
                            <ul className="space-y-3 list-none text-sm text-zinc-700 leading-snug">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>60% faster NAAC document automation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>30% increase in research publications</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/90 transition-all duration-300">
                            <h3 className="text-2xl font-normal mb-1 text-[#00477b]">Coaching institute network</h3>
                            <p className="text-xs text-indigo-600 font-bold mb-6 uppercase tracking-wider">Delhi</p>
                            <ul className="space-y-3 list-none text-sm text-zinc-700 leading-snug">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>Scaled from 500 to 5000 students without expanding staff</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                                    <span>25% improvement in results</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Why Partner With Gnosys Digital */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHY GNOSYS
                    </span>
                    <h2 className="text-4xl font-normal text-[#00477b] mb-16 tracking-tight">
                        Why Partner With Gnosys Digital
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "20+ Institutions",
                                desc: "Successfully transformed and digitized across India.",
                                icon: (
                                    <svg className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                )
                            },
                            {
                                title: "Local Expertise",
                                desc: "Deep knowledge of Indian academic & accreditation needs.",
                                icon: (
                                    <svg className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Dedicated Experts",
                                desc: "Specialized team of education ERP professionals.",
                                icon: (
                                    <svg className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Proven Support",
                                desc: "Robust support and training framework for success.",
                                icon: (
                                    <svg className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 border border-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-3">{item.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 & 10. Pricing and Assessment Form Combined */}
            <section className="py-24 bg-white/40 backdrop-blur-xl border-y border-white/60 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-full px-4 lg:px-8 xl:px-12 mx-auto max-w-[100rem]">
                    
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-stretch">
                        
                        {/* Left Side: Pricing Card */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_15px_50px_rgb(0,0,0,0.05)] border border-white/60 overflow-hidden flex flex-col justify-center p-8 lg:p-12 xl:p-16 h-full transition-transform hover:-translate-y-1 duration-300">
                            <div className="mb-10 text-center lg:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                    PRICING & PACKAGES
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-normal text-[#00477b] tracking-tight">
                                    Education ERP Package
                                </h2>
                            </div>

                            <div className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 transition-transform hover:-translate-y-1 duration-300">
                                <h3 className="text-base font-bold text-[#00477b] mb-2">Starting At</h3>
                                {/* Changed Amount Color to Gradient */}
                                <p className="text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#00477b] to-sky-400">₹1,50,000*</p>
                            </div>
                            
                            <p className="text-sm mb-6 text-zinc-700 leading-relaxed">
                                Includes all modules, data migration, training, and support
                            </p>

                            <h4 className="font-normal text-[#00477b] mb-3 text-sm tracking-wide">Bonus items for a limited period:</h4>
                            <ul className="space-y-3 mb-8 list-none">
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></div>
                                    <span>Order & Inventory Management, 2 Marketplace Integrations, Automated Shipping & GST, 5 User Licenses, Training & Go-Live Support.</span>
                                </li>
                            </ul>

                            <h4 className="font-normal text-[#00477b] mb-3 text-sm tracking-wide">Limited time bonuses:</h4>
                            <ul className="space-y-3 list-none">
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></div>
                                    <span>NAAC / NBA compliance</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></div>
                                    <span>Mobile app</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></div>
                                    <span>Online exam system</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Side: Contact Form Card */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_15px_50px_rgb(0,0,0,0.05)] border border-white/60 overflow-hidden flex flex-col justify-center p-8 lg:p-12 xl:p-16 h-full transition-transform hover:-translate-y-1 duration-300">
                            <div className="mb-10 text-center lg:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                    GET STARTED
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-normal text-[#00477b] tracking-tight">
                                    Request Campus Assessment
                                </h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                        <Input id="fullName" placeholder="Enter your full name" className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 shadow-none focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                        <Input id="email" type="email" placeholder="Enter your email" className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 shadow-none focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all text-sm" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                        <Input id="phone" placeholder="Enter your phone number" className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 shadow-none focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="institutionName" className="text-xs font-bold text-zinc-700">Institution Name</Label>
                                        <Input id="institutionName" placeholder="Enter your institution name" className="h-12 rounded-xl border-zinc-200 bg-zinc-50/50 shadow-none focus:bg-white focus:border-[#00477b] focus:ring-4 focus:ring-[#00477b]/10 transition-all text-sm" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="typeOfInstitution" className="text-xs font-bold text-zinc-700">Type of Institution</Label>
                                        <select id="typeOfInstitution" className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2 text-sm shadow-none focus:outline-none focus:ring-4 focus:ring-[#00477b]/10 focus:border-[#00477b] focus:bg-white transition-all text-zinc-700">
                                            <option>Select Type</option>
                                            <option>School (K-12)</option>
                                            <option>College / University</option>
                                            <option>Coaching Institute</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="studentStrength" className="text-xs font-bold text-zinc-700">Student Strength</Label>
                                        <select id="studentStrength" className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2 text-sm shadow-none focus:outline-none focus:ring-4 focus:ring-[#00477b]/10 focus:border-[#00477b] focus:bg-white transition-all text-zinc-700">
                                            <option>Select Option</option>
                                            <option>Under 500</option>
                                            <option>500 - 2,000</option>
                                            <option>2,000 - 5,000</option>
                                            <option>5,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="primaryChallenges" className="text-xs font-bold text-zinc-700">Primary Challenges</Label>
                                    <select id="primaryChallenges" className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2 text-sm shadow-none focus:outline-none focus:ring-4 focus:ring-[#00477b]/10 focus:border-[#00477b] focus:bg-white transition-all text-zinc-700">
                                        <option>Select Option</option>
                                        <option>Admissions & Enrollment</option>
                                        <option>Fee Collection & Finance</option>
                                        <option>Academics & Grading</option>
                                        <option>Compliance & Reporting</option>
                                    </select>
                                </div>

                                <div className="pt-4">
                                    <Button className="bg-[#00477b] text-white hover:bg-[#00365d] px-8 h-14 font-bold w-full shadow-[0_8px_20px_rgb(0,71,123,0.2)] hover:shadow-[0_12px_25px_rgb(0,71,123,0.3)] hover:-translate-y-0.5 rounded-xl transition-all">
                                        Request Digital Campus Audit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <section className="py-24 relative z-10 border-t border-white/20 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-300/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                
                <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
                    <span className="inline-block px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-black text-[#00477b] uppercase tracking-widest mb-8">
                        NEXT STEPS
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00477b] via-sky-600 to-[#00477b] mb-6 tracking-tight leading-tight bg-[length:200%_auto] animate-gradient">
                        Ready To Transform?
                    </h2>
                    
                    <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto font-medium">
                        Take the first step towards a fully digitized, compliant, and efficient campus today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                        <Button className="bg-[#00477b] text-white hover:bg-[#00365d] h-14 px-10 font-bold shadow-[0_8px_20px_rgb(0,71,123,0.2)] hover:shadow-[0_12px_25px_rgb(0,71,123,0.3)] hover:-translate-y-0.5 rounded-xl transition-all w-full sm:w-auto text-base">
                            Book Assessment
                        </Button>
                        <Button className="bg-white text-zinc-900 border-2 border-slate-200 hover:border-[#00477b] hover:bg-slate-50 h-14 px-10 font-bold shadow-sm hover:shadow-md rounded-xl transition-all w-full sm:w-auto text-base group">
                            Talk To An Expert
                            <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Button>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
