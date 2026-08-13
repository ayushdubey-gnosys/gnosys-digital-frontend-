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
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                        One Platform For Academic Excellence And Administrative Efficiency
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
                        Stop managing scattered data. Unify admissions, fees, academics, and HR in one seamless digital campus.
                    </p>
                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-xl px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Talk to an Expert
                    </Button>
                </div>
            </section>

            {/* 2. The Challenge Modern Institutions Face */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20 text-center">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-4 tracking-tight">
                        The Challenge Modern Institutions Face
                    </h2>
                    <p className="text-zinc-600 mb-14 text-base max-w-2xl mx-auto">
                        Education organizations are trying to balance legacy systems with rising digital expectations. Common issues include:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-lg font-bold mb-4 text-[#00477b]">Operational Inefficiency</h3>
                            <ul className="text-sm text-zinc-600 leading-relaxed list-disc pl-4 space-y-2">
                                <li>Manual admission handling is causing delays</li>
                                <li>Paper-based communication and approvals</li>
                                <li>Unreliable attendance and grading processes</li>
                                <li>Timetable conflicts across classrooms, labs, and faculty</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-lg font-bold mb-4 text-[#00477b]">Financial & Compliance Pressure</h3>
                            <ul className="text-sm text-zinc-600 leading-relaxed list-disc pl-4 space-y-2">
                                <li>Complex fee collection and reconciliation</li>
                                <li>Scholarship and concession tracking errors</li>
                                <li>Reporting for UGC, AICTE, NAAC, and other bodies</li>
                                <li>Limited visibility into budgets and expenditure</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-lg font-bold mb-4 text-[#00477b]">Academic Quality Gaps</h3>
                            <ul className="text-sm text-zinc-600 leading-relaxed list-disc pl-4 space-y-2">
                                <li>Multiple versions of syllabi and course documents</li>
                                <li>Non-standardized assessments</li>
                                <li>Difficulty tracking academic outcomes</li>
                                <li>Poor research and publication management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Complete Digital Campus Solution */}
            <section className="py-24 bg-transparent relative z-10 border-t border-white/20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SOLUTION
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#00477b] mb-4 tracking-tight">
                            The Complete Digital Campus Solution
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
                            ERPNext connects every part of your institution to a single system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {/* Column 1 */}
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-bold text-[#1a4464] text-lg mb-6 border-b border-white/60 pb-3">Streamlined Administration</h3>
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
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-bold text-[#1a4464] text-lg mb-6 border-b border-white/60 pb-3">Academic Delivery & Learning</h3>
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
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-bold text-[#1a4464] text-lg mb-6 border-b border-white/60 pb-3">Financial and Control</h3>
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
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 h-full flex flex-col">
                            <h3 className="font-bold text-[#1a4464] text-lg mb-6 border-b border-white/60 pb-3">Data-Driven Leadership</h3>
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

                    <div className="text-center">
                        <h3 className="text-xl font-bold text-[#00477b] mb-8">Core Modules</h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                            {[
                                "Student Information System", "Admissions & Enrollment", "Placement and Alumni", 
                                "Fee & Accounting", "HR & Payroll", "Library & Inventory", "Hostel & Transport",
                                "Mobile App", "LMS & Assignments", "Examination & Assessment"
                            ].map((module, i) => (
                                <div key={i} className="border border-white/60 text-zinc-700 font-medium text-sm px-5 py-2.5 shadow-sm bg-white/40 backdrop-blur-md hover:bg-white/60 transition-colors cursor-default rounded-full">
                                    {module}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Who We Serve */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHO WE SERVE
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-12 tracking-tight">
                        Who We Serve
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-[#00477b] font-bold text-lg mb-3">Schools (K-12)</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Parent portal, homework tracking, and co-curricular assessment</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-[#00477b] font-bold text-lg mb-3">Colleges & Universities</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Credit systems, research tracking, placement management</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-[#00477b] font-bold text-lg mb-3">Coaching & Training Institutes</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Batch scheduling, test analytics, franchise management</p>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-[#00477b] font-bold text-lg mb-3">Professional & Technical Institutions</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Lab booking, internship tracking, and industry collaboration</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Journey (Timeline) */}
            <section className="py-24 bg-transparent text-center overflow-hidden relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        IMPLEMENTATION
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-4 tracking-tight">
                        Education ERP Implementation Journey
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16 max-w-2xl mx-auto">
                        Structured 5-phase rollout for smooth adoption across your institution
                    </p>
                    
                    {/* Custom Timeline Layout */}
                    <div className="relative max-w-5xl mx-auto py-10">
                        {/* Horizontal Line */}
                        <div className="hidden md:block absolute top-[50%] left-0 w-full h-3 bg-zinc-700 rounded-full border-t-2 border-dashed border-zinc-400 z-0"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 1-2</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Discovery</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Review academic workflows and identify core requirements.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#1e40af] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Search className="size-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 3-4</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Configuration</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Set up courses, fees, roles, and dashboards.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#5b21b6] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <Settings className="size-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 5</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Migration</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Import student and staff data and connect integrations.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0369a1] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Database className="size-6" />
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 6</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Training</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Train admin, faculty, and support teams for launch.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#059669] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <MonitorPlay className="size-6" />
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 7-8</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Optimization</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Refine workflows and provide ongoing support.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0f766e] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Rocket className="size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Results You Can Expect */}
            <section className="py-20 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        EXPECTED RESULTS
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-12 tracking-tight">
                        Results You Can Expect
                    </h2>
                    
                    <div className="overflow-x-auto bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl border border-white/60">
                        <table className="w-full text-sm sm:text-base border-collapse text-left">
                            <thead>
                                <tr className="bg-zinc-800 text-white border-b border-zinc-700">
                                    <th className="py-5 px-6 font-bold w-1/2 uppercase tracking-wider text-xs border-r border-zinc-700">Area</th>
                                    <th className="py-5 px-6 font-bold w-1/2 uppercase tracking-wider text-xs">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { area: "Administrative processing", impact: "80% faster" },
                                    { area: "Attendance and grading accuracy", impact: "90%" },
                                    { area: "Fee collection efficiency", impact: "70% increase" },
                                    { area: "Statutory reporting", impact: "100% compliance" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/60 transition-colors">
                                        <td className="py-5 px-6 font-medium text-zinc-700 border-r border-white/60">{row.area}</td>
                                        <td className="py-5 px-6 font-bold text-[#29628d]">{row.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 7. Success Highlights */}
            <section className="py-24 bg-transparent relative z-10 overflow-hidden border-b border-white/20">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:30px_30px]"></div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        SUCCESS HIGHLIGHTS
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-16 tracking-tight">
                        Success Highlights
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-1 text-[#00477b]">CBSE school group</h3>
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
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-1 text-[#00477b]">Engineering College</h3>
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
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-1 text-[#00477b]">Coaching institute network</h3>
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

            {/* 8. Education ERP Package (Pricing) */}
            <section className="py-24 bg-transparent text-center relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        PRICING & PACKAGES
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-12 tracking-tight">
                        Education ERP Package
                    </h2>
                    
                    <div className="flex flex-col md:flex-row border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden max-w-4xl mx-auto bg-white/40 backdrop-blur-xl">
                        <div className="md:w-1/3 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/60 bg-white/20">
                            <h3 className="text-lg font-bold text-[#00477b] mb-2">Starting At</h3>
                            <p className="text-4xl font-extrabold text-zinc-900">₹1,50,000*</p>
                        </div>
                        <div className="md:w-2/3 p-10 text-left">
                            <p className="text-sm mb-6 text-zinc-700">
                                Includes all modules, data migration, training, and support
                            </p>
                            
                            <h4 className="font-bold text-[#00477b] mb-2 text-sm">Bonus items for a limited period:</h4>
                            <ul className="space-y-2 mb-6 list-disc pl-5">
                                <li className="text-sm text-zinc-600">
                                    Order & Inventory Management, 2 Marketplace Integrations, Automated Shipping & GST, 5 User Licenses, Training & Go-Live Support.
                                </li>
                            </ul>
                            
                            <h4 className="font-bold text-[#00477b] mb-2 text-sm">Limited time bonuses:</h4>
                            <ul className="space-y-2 list-disc pl-5">
                                <li className="text-sm text-zinc-600">NAAC / NBA compliance</li>
                                <li className="text-sm text-zinc-600">Mobile app</li>
                                <li className="text-sm text-zinc-600">Online exam system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Why Partner With Gnosys Digital */}
            <section className="py-20 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHY GNOSYS
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-12 tracking-tight">
                        Why Partner With Gnosys Digital
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "20+ institutions transformed",
                            "Strong knowledge of Indian academic and accreditation needs",
                            "Dedicated education ERP experts",
                            "Proven support and training framework"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center min-h-[100px] hover:-translate-y-1 hover:bg-white/50 transition-all duration-300">
                                <p className="text-sm font-bold text-zinc-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Contact Form */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="text-center mb-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                GET STARTED
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#00477b] mb-3 tracking-tight">
                                Request Your Digital Campus Assessment
                            </h2>
                            <p className="text-sm text-zinc-500">
                                Tell us more about your institution, and our team will design a customized roadmap.
                            </p>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                    <Input id="fullName" placeholder="Enter your full name" className="h-12 rounded-xl border-white/60 bg-white/40 backdrop-blur-md shadow-sm focus:bg-white/60 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-12 rounded-xl border-white/60 bg-white/40 backdrop-blur-md shadow-sm focus:bg-white/60 transition-all" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-12 rounded-xl border-white/60 bg-white/40 backdrop-blur-md shadow-sm focus:bg-white/60 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="institutionName" className="text-xs font-bold text-zinc-700">Institution Name</Label>
                                    <Input id="institutionName" placeholder="Enter your institution name" className="h-12 rounded-xl border-white/60 bg-white/40 backdrop-blur-md shadow-sm focus:bg-white/60 transition-all" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="typeOfInstitution" className="text-xs font-bold text-zinc-700">Type of Institution</Label>
                                <select id="typeOfInstitution" className="w-full h-12 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/60 transition-all">
                                    <option>Select Type</option>
                                    <option>School (K-12)</option>
                                    <option>College / University</option>
                                    <option>Coaching Institute</option>
                                    <option>Professional / Technical Institution</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="studentStrength" className="text-xs font-bold text-zinc-700">Student Strength</Label>
                                    <select id="studentStrength" className="w-full h-12 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/60 transition-all">
                                        <option>Select Option</option>
                                        <option>Under 500</option>
                                        <option>500 - 2,000</option>
                                        <option>2,000 - 5,000</option>
                                        <option>5,000+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="currentSystems" className="text-xs font-bold text-zinc-700">Current Systems</Label>
                                    <select id="currentSystems" className="w-full h-12 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/60 transition-all">
                                        <option>Select Option</option>
                                        <option>Legacy ERP</option>
                                        <option>Spreadsheets & Manual</option>
                                        <option>Multiple Disconnected Tools</option>
                                        <option>No dedicated system</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="primaryChallenges" className="text-xs font-bold text-zinc-700">Primary Challenges</Label>
                                <select id="primaryChallenges" className="w-full h-12 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white/60 transition-all">
                                    <option>Select Option</option>
                                    <option>Admissions & Enrollment</option>
                                    <option>Fee Collection & Finance</option>
                                    <option>Academics & Grading</option>
                                    <option>Compliance & Reporting</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="digitalGoals" className="text-xs font-bold text-zinc-700">Your Digital Goals (Optional)</Label>
                                <Textarea id="digitalGoals" placeholder="What are you hoping to achieve with a new ERP system?" className="min-h-[100px] rounded-xl border-white/60 bg-white/40 backdrop-blur-md shadow-sm p-4 focus:bg-white/60 transition-all" />
                            </div>
                            
                            <div className="pt-6 text-center">
                                <Button className="bg-[#00477b] text-white hover:bg-[#00477b] px-10 h-14 font-bold w-full shadow-lg rounded-xl transition-all">
                                    Request Digital Campus Audit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <section className="py-24 bg-transparent text-center border-t border-white/20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        NEXT STEPS
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00477b] mb-10 tracking-tight">
                        Ready To Transform?
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] h-14 px-10 font-bold shadow-xl rounded-xl transition-all">
                            Book Assessment
                        </Button>
                        <Button className="bg-white text-zinc-900 border border-slate-200 hover:bg-slate-50 h-14 px-10 font-bold shadow-sm rounded-xl transition-all">
                            Talk To An Expert
                        </Button>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
