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
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh] bg-[#29628d]">
                <div className="absolute inset-0 z-0 overflow-hidden opacity-20 flex justify-around items-end pb-10">
                    {/* Abstract Star Shapes for Background */}
                    <Star className="size-64 text-[#1a4464] fill-[#1a4464] rotate-12 transform -translate-x-10 translate-y-20" />
                    <Star className="size-96 text-[#1a4464] fill-[#1a4464] -rotate-12 transform -translate-y-10" />
                    <Star className="size-64 text-[#1a4464] fill-[#1a4464] rotate-45 transform translate-x-10 translate-y-32" />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                        One Platform For Academic Excellence And Administrative Efficiency
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
                        Stop managing scattered data. Unify admissions, fees, academics, and HR in one seamless digital campus.
                    </p>
                    <Button className="bg-white text-[#29628d] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Talk to an Expert
                    </Button>
                </div>
            </section>

            {/* 2. The Challenge Modern Institutions Face */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1a4464] mb-4">
                        The Challenge Modern Institutions Face
                    </h2>
                    <p className="text-zinc-600 mb-14 text-sm font-medium">
                        Education leaders struggle with fragmented systems that block visibility and prepare double work for staff.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-[#1a4464] p-8 rounded-sm shadow-md text-white border-t-4 border-[#3b82f6]">
                            <h3 className="text-lg font-bold mb-4">Operational Inefficiency</h3>
                            <p className="text-sm text-blue-100/90 leading-relaxed">
                                Manual data entry in spreadsheets causes errors, mismatched fees, and pending salaries. No unified student view from admission to alumni.
                            </p>
                        </div>
                        <div className="bg-[#1a4464] p-8 rounded-sm shadow-md text-white border-t-4 border-[#10b981]">
                            <h3 className="text-lg font-bold mb-4">Unscalable Compliance Practices</h3>
                            <p className="text-sm text-blue-100/90 leading-relaxed">
                                Difficulty adhering to evolving norms (AICTE, NBA, NAAC). Last-minute scrambling for audit reports, consuming staff weeks.
                            </p>
                        </div>
                        <div className="bg-[#1a4464] p-8 rounded-sm shadow-md text-white border-t-4 border-[#8b5cf6]">
                            <h3 className="text-lg font-bold mb-4">Academic Quality Drops</h3>
                            <p className="text-sm text-blue-100/90 leading-relaxed">
                                Difficulty mapping student outcomes (OBE) accurately. Teachers spend more time on admin duties than classroom engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Complete Digital Campus Solution */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1a4464] mb-4">
                            The Complete Digital Campus Solution
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
                            Everything your institution needs built for modern educators.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {/* Column 1 */}
                        <div>
                            <h3 className="font-bold text-[#29628d] mb-4 border-b border-slate-100 pb-2">Streamlined Administration</h3>
                            <ul className="space-y-3">
                                {[
                                    "Automated pre-admission, enrollment workflows",
                                    "Centralized document management",
                                    "Student Lifecycle Management",
                                    "Alumni & placement management"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                                        <div className="bg-[#e0f2fe] rounded-sm p-0.5 mt-0.5 shrink-0 text-[#0284c7]">
                                            <CheckSquare className="size-3" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h3 className="font-bold text-[#29628d] mb-4 border-b border-slate-100 pb-2">Academic Success & Learning</h3>
                            <ul className="space-y-3">
                                {[
                                    "Curriculum planning and lesson tracking",
                                    "Comprehensive grading, marksheets, and transcripts",
                                    "Learning Management System (LMS) integration",
                                    "Outcome-Based Education (OBE) mapping"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                                        <div className="bg-[#e0f2fe] rounded-sm p-0.5 mt-0.5 shrink-0 text-[#0284c7]">
                                            <CheckSquare className="size-3" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h3 className="font-bold text-[#29628d] mb-4 border-b border-slate-100 pb-2">Financial and Control</h3>
                            <ul className="space-y-3">
                                {[
                                    "Automated fee collection and invoicing",
                                    "Real-time expense tracking & budget controls",
                                    "Payroll & leave management",
                                    "Scholarship & grant fund tracking"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                                        <div className="bg-[#e0f2fe] rounded-sm p-0.5 mt-0.5 shrink-0 text-[#0284c7]">
                                            <CheckSquare className="size-3" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div>
                            <h3 className="font-bold text-[#29628d] mb-4 border-b border-slate-100 pb-2">Data-Driven Leadership</h3>
                            <ul className="space-y-3">
                                {[
                                    "Real-time insights into retention and revenue",
                                    "Customizable multi-campus dashboards",
                                    "AI-assisted enrollment projections"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                                        <div className="bg-[#e0f2fe] rounded-sm p-0.5 mt-0.5 shrink-0 text-[#0284c7]">
                                            <CheckSquare className="size-3" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-bold text-[#1a4464] mb-8">Core Modules</h3>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {[
                                "Student Management", "Fees & Accounting", "Examination & Grading", 
                                "Timetable & Scheduling", "HR & Payroll", "Library Management", "Hostel & Transport"
                            ].map((module, i) => (
                                <div key={i} className="border border-[#bae6fd] text-[#0284c7] font-medium text-sm px-6 py-3 rounded-full shadow-sm bg-white hover:bg-[#f0f9ff] transition-colors cursor-default">
                                    {module}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Who We Serve */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1a4464] mb-12">
                        Who We Serve
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-[#e0f2fe] rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-[#1a4464] font-bold text-lg mb-3">Schools (K-12)</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Streamlining daily operations and parent-teacher communication in real-time.</p>
                        </div>
                        <div className="bg-white border border-[#e0f2fe] rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-[#1a4464] font-bold text-lg mb-3">Colleges & Universities</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Managing complex credit systems, multiple departments, and UGC norms.</p>
                        </div>
                        <div className="bg-white border border-[#e0f2fe] rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-[#1a4464] font-bold text-lg mb-3">Coaching & Training Institutes</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Handling rolling admissions, flexible batches, and revenue tracking.</p>
                        </div>
                        <div className="bg-white border border-[#e0f2fe] rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-[#1a4464] font-bold text-lg mb-3">Professional & Technical Institutions</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed">Adhering to strict engineering & medical compliance standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Journey (Timeline) */}
            <section className="py-24 bg-white text-center overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1a4464] mb-4">
                        Education ERP Implementation Journey
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16">
                        Go live in 6 weeks with our battle-tested academic framework.
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
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Requirements gathering and system blueprinting.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#1e40af] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Search className="size-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 3</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Migration</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Data cleanup and historical student record import.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#5b21b6] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <Database className="size-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 4</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">System Setup</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Configuration of fees, grading rules, and workflows.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0369a1] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Settings className="size-6" />
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 5</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Training</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Role-based training for admin, faculty, and staff.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#059669] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <MonitorPlay className="size-6" />
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-16">
                                    <h4 className="font-bold text-[#1a4464] text-sm">Week 6</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Launch & Support</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">System go-live and hyper-care period.</p>
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
            <section className="py-16 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-[#1a4464] mb-12">
                        Results You Can Expect
                    </h2>
                    
                    <div className="overflow-x-auto bg-white shadow-sm border border-slate-200">
                        <table className="w-full text-sm sm:text-base border-collapse text-left">
                            <thead>
                                <tr className="bg-[#1a4464] text-white">
                                    <th className="py-5 px-6 font-bold w-1/2 uppercase tracking-wider text-xs border-r border-white/20">Area</th>
                                    <th className="py-5 px-6 font-bold w-1/2 uppercase tracking-wider text-xs">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    { area: "Administrative processing time", impact: "60% Faster" },
                                    { area: "At-risk student identification rate", impact: "90%" },
                                    { area: "Fee collection efficiency", impact: "25% Increase" },
                                    { area: "Audit prep time", impact: "80% Drop in time" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-5 px-6 font-medium text-zinc-700 border-r border-gray-200">{row.area}</td>
                                        <td className="py-5 px-6 font-bold text-[#29628d]">{row.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 7. Success Highlights */}
            <section className="py-24 bg-[#1a4464] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:30px_30px]"></div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Highlights
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 text-left">
                        <div className="pb-8 md:pb-0 md:px-8">
                            <h3 className="text-lg font-bold mb-1">CBSE school group</h3>
                            <p className="text-xs text-blue-200/60 font-semibold mb-5 uppercase tracking-wider">Mumbai</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    45% decrease in overdue fee accounts
                                </li>
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    1 unified system for 4,000+ students
                                </li>
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    300 hrs saved per month in library ops
                                </li>
                            </ul>
                        </div>
                        <div className="py-8 md:py-0 md:px-8">
                            <h3 className="text-lg font-bold mb-1">Engineering College</h3>
                            <p className="text-xs text-blue-200/60 font-semibold mb-5 uppercase tracking-wider">Pune</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    NBA & AICTE compliance reports generated in 1-click
                                </li>
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    Achieved 100% accurate payroll with bio-metric sync
                                </li>
                            </ul>
                        </div>
                        <div className="pt-8 md:pt-0 md:px-8">
                            <h3 className="text-lg font-bold mb-1">Coaching Institute Network</h3>
                            <p className="text-xs text-blue-200/60 font-semibold mb-5 uppercase tracking-wider">Delhi</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    Scaled from 3 to 12 centers without adding admin head count
                                </li>
                                <li className="flex gap-2 text-sm text-blue-50/90 leading-snug">
                                    <div className="bg-white/20 rounded-sm p-0.5 mt-0.5 shrink-0"><CheckSquare className="size-3" /></div>
                                    5x faster lead to admission conversion
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Education ERP Package (Pricing) */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1a4464] mb-12">
                        Education ERP Package
                    </h2>
                    
                    <div className="flex flex-col md:flex-row border border-[#e0eaf5] rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                        <div className="md:w-1/3 bg-[#f8fafc] p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#e0eaf5]">
                            <h3 className="text-lg font-bold text-zinc-600 mb-2">Starting At</h3>
                            <p className="text-4xl font-bold text-[#1a4464]">₹1,50,000*</p>
                        </div>
                        <div className="md:w-2/3 p-8 text-left bg-white">
                            <p className="font-semibold text-zinc-800 text-sm mb-4 bg-[#f0f9ff] inline-block px-3 py-1 rounded text-[#0284c7]">
                                Includes core modules: Admissions, Student profile, Fees, and Academics
                            </p>
                            
                            <h4 className="font-bold text-[#10b981] mb-2 uppercase tracking-wider text-xs">Bonus Items For a Limited Period:</h4>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    1 Year Cloud Hosting included
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    100 Hours of Setup, Data Migration, and Custom Training
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    VIP 2-Hour Response Time SLA for Critical Issues
                                </li>
                            </ul>
                            
                            <h4 className="font-bold text-[#29628d] mb-2 uppercase tracking-wider text-xs border-t border-slate-100 pt-4">Included in every package:</h4>
                            <div className="flex gap-4 text-xs font-medium text-zinc-500">
                                <div className="flex items-center gap-1"><ArrowRight className="size-3" /> Free Updates</div>
                                <div className="flex items-center gap-1"><ArrowRight className="size-3" /> Daily Backups</div>
                                <div className="flex items-center gap-1"><ArrowRight className="size-3" /> Dedicated Account Manager</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Why Partner With Gnosys Digital */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#1a4464] mb-12">
                        Why Partner With Gnosys Digital
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "10+ education implementations",
                            "Local compliance (AICTE/UGC) experts",
                            "Dedicated education ERP specialists",
                            "Post-launch support that actually answers"
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e0eaf5] p-6 rounded-sm shadow-sm flex items-center justify-center min-h-[100px]">
                                <p className="text-sm font-bold text-[#1a4464]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Contact Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="border border-[#e0eaf5] rounded-lg p-8 md:p-12 shadow-xl shadow-blue-900/5">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#1a4464] mb-2">
                                Request Your Digital Campus Assessment
                            </h2>
                            <p className="text-sm text-zinc-500">
                                We'll do a deep dive of your existing tech stack and show you an optimized blueprint.
                            </p>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                    <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-sm border-gray-300" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-sm border-gray-300" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-11 rounded-sm border-gray-300" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="institutionName" className="text-xs font-bold text-zinc-700">Institution Name</Label>
                                    <Input id="institutionName" placeholder="Enter your institution name" className="h-11 rounded-sm border-gray-300" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="typeOfInstitution" className="text-xs font-bold text-zinc-700">Type of Institution</Label>
                                <select id="typeOfInstitution" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
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
                                    <select id="studentStrength" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                        <option>Select Option</option>
                                        <option>Under 500</option>
                                        <option>500 - 2,000</option>
                                        <option>2,000 - 5,000</option>
                                        <option>5,000+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="currentSystems" className="text-xs font-bold text-zinc-700">Current Systems</Label>
                                    <select id="currentSystems" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
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
                                <select id="primaryChallenges" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
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
                                <Textarea id="digitalGoals" placeholder="What are you hoping to achieve with a new ERP system?" className="min-h-[100px] rounded-sm border-gray-300" />
                            </div>
                            
                            <div className="pt-6 text-center">
                                <Button className="bg-[#1a4464] text-white hover:bg-[#112d42] px-10 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Digital Campus Audit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <section className="py-24 bg-white text-center border-t border-[#e0eaf5]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a4464] mb-10">
                        Ready To Transform?
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#1a4464] text-white hover:bg-[#112d42] h-12 px-8 font-bold shadow-md rounded-sm">
                            Book Assessment
                        </Button>
                        <Button className="bg-[#1a4464] text-white hover:bg-[#112d42] h-12 px-8 font-bold shadow-md rounded-sm">
                            Talk To An Expert
                        </Button>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
