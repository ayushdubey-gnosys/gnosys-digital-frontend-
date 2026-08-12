import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    CheckSquare, Cloud, TrendingUp, Search, Settings,
    Database, MonitorPlay, Rocket, Users, HandHeart,
    PieChart, ClipboardList, ShieldCheck
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextNgo() {
    return (
        <MainLayout>
            <Head title="ERPNext For NGOs" />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-100/60 via-purple-50/50 to-pink-100/60 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[80vh]">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-ngo.webp')" }}
                    ></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                        Maximize Impact While Streamlining Operations
                    </h1>

                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
                        Manage donors, projects, compliance, and finances efficiently on one open-source ERP platform.
                    </p>
                    <Button size="lg" className="group relative bg-zinc-200/20 backdrop-blur-md text-white border-0 hover:bg-zinc-200/30 shadow-[0_8px_30px_rgba(0,0,0,0.4)] rounded-2xl px-10 h-16 text-[16px] font-bold w-full sm:w-auto overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="flex items-center gap-3">
                            Request Free Assessment
                            <svg className="size-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </span>
                    </Button>
                </div>
            </section>

            {/* 2. Challenges Faced By Non-Profits */}
            <section className="py-24 bg-transparent text-center relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                        Challenges Faced By Non-Profits
                    </h2>
                    <p className="text-zinc-600 mb-14 text-sm font-medium">
                        Balancing impact with admin tasks is hard when working in silos.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left mb-6">
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-zinc-900 border border-white/60 border-t-4 border-t-[#3b82f6]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><HandHeart className="size-5 text-[#3b82f6]" /> Funding & Donor Management</h3>
                            <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5">
                                <li>Multiple spreadsheets for tracking grants and donations.</li>
                                <li>Delayed receipt generation (80G).</li>
                                <li>No 360-degree view of donor interactions.</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-zinc-900 border border-white/60 border-t-4 border-t-[#10b981]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><ClipboardList className="size-5 text-[#10b981]" /> Program & Project Delivery</h3>
                            <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5">
                                <li>Hard to track real-time fund utilization against budgets.</li>
                                <li>Manual beneficiary tracking and impact assessment.</li>
                                <li>Disconnected field teams without mobile data capture.</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-zinc-900 border border-white/60 border-t-4 border-t-[#f59e0b]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><ShieldCheck className="size-5 text-[#f59e0b]" /> Compliance & Reporting</h3>
                            <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5">
                                <li>Difficulty adhering to FCRA, CSR rules and 80G norms.</li>
                                <li>Manual preparation of utilization certificates.</li>
                                <li>Last-minute scrambles for regulatory audit reports.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-zinc-900 border border-white/60 border-t-4 border-t-[#ec4899]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><PieChart className="size-5 text-[#ec4899]" /> Financial Management</h3>
                            <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5">
                                <li>Fragmented chart of accounts.</li>
                                <li>Inefficient consolidation of branch/chapter data.</li>
                                <li>Lack of real-time project profitability.</li>
                            </ul>
                        </div>
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-zinc-900 border border-white/60 border-t-4 border-t-[#8b5cf6]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Users className="size-5 text-[#8b5cf6]" /> Volunteer & Staff Coordination</h3>
                            <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5">
                                <li>Manual roster management & scheduling.</li>
                                <li>Decentralized onboarding and document tracking.</li>
                                <li>No central directory for skills and availability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ERPNext Solution For NGOs */}
            <section className="py-24 bg-transparent relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                            ERPNext Solution For NGOs
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
                            A fully integrated suite that brings your field operations, back-office, and donors onto a single platform.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Donor & Fundraising Management", points: ["Automated donation receipting (80G/12A/CSR).", "Track pledges and recurring giving.", "360-degree donor portals."] },
                            { title: "Program & Beneficiary Management", points: ["Custom intake forms and case tracking.", "Mobile-ready for field teams to record impact data.", "Real-time dashboards."] },
                            { title: "Financial Management", points: ["Project accounting & branch consolidation.", "Automated fund tracking & allocation.", "Grant-wise budget vs actual reports."] },
                            { title: "HR & Volunteer Management", points: ["Streamline onboarding, leaves & attendance.", "Skills database for matching volunteers.", "Shift & roster management."] },
                            { title: "Analytics & Reporting", points: ["1-click generation of Utilization Certificates.", "Board-ready MIS dashboards.", "Custom compliance reports."] },
                            { title: "Inventory & Asset Management", points: ["Track donations in kind (medicines, books, etc.).", "Multi-warehouse inventory tracking.", "Asset lifecycle management."] }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 hover:border-white rounded-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all">
                                <h3 className="text-lg font-bold text-[#00477b] mb-4">{mod.title}</h3>
                                <ul className="space-y-3">
                                    {mod.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-zinc-600 leading-relaxed">
                                            <div className="bg-[#e0f2fe] rounded-sm p-0.5 mt-0.5 shrink-0 text-[#0284c7]">
                                                <CheckSquare className="size-3" />
                                            </div>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Tailored For Social Sector Domains */}
            <section className="py-20 bg-transparent text-center border-y border-[#e2e8f0] relative z-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-12">
                        Tailored For Social Sector Domains
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Healthcare & Medical Relief", desc: "Clinics, camps, mobile units" },
                            { title: "Education & Skilling", desc: "Schools, vocational centers, ed-tech" },
                            { title: "Livelihood & Rural Development", desc: "SHGs, microfinance, skill centers" },
                            { title: "Public Projects", desc: "Water, sanitation, infrastructure" },
                            { title: "Child & Women Welfare", desc: "Shelters, legal aid, rehabilitation" },
                            { title: "Environment & Conservation", desc: "Reforestation, renewable energy" }
                        ].map((type, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-white/60 hover:border-white transition-all text-center">
                                <h3 className="text-[#00477b] font-bold text-lg mb-2">{type.title}</h3>
                                <p className="text-zinc-500 text-xs uppercase tracking-wide font-semibold">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Non-Profit ERP Implementation Roadmap */}
            <section className="py-24 bg-transparent text-center overflow-hidden relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">
                        Non-Profit ERP Implementation Roadmap
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-20">
                        A complete 5-Step blueprint to modernize your operations.
                    </p>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Gradient Line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 -translate-y-1/2 rounded-full"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                            {[
                                { step: "01", week: "Week 1-2", title: "Discovery", desc: "Gather requirements, map processes, establish KPIs.", color: "from-blue-500 to-cyan-500", icon: <Search className="size-6 text-white" /> },
                                { step: "02", week: "Week 3-4", title: "System Config", desc: "Setup modules, workflows, roles, & access levels.", color: "from-indigo-500 to-blue-500", icon: <Settings className="size-6 text-white" /> },
                                { step: "03", week: "Week 5", title: "Data Migration", desc: "Clean and import historical donor/beneficiary data.", color: "from-purple-500 to-indigo-500", icon: <Database className="size-6 text-white" /> },
                                { step: "04", week: "Week 6", title: "Training", desc: "Hands-on training for HQ and field staff.", color: "from-pink-500 to-rose-500", icon: <MonitorPlay className="size-6 text-white" /> },
                                { step: "05", week: "Week 7+", title: "Go Live", desc: "System launch and ongoing hyper-care support.", color: "from-emerald-500 to-teal-500", icon: <Rocket className="size-6 text-white" /> }
                            ].map((item, i) => (
                                <div key={i} className={`group relative bg-white/60 backdrop-blur-md border border-white/80 p-6 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 aspect-square flex flex-col justify-center ${i % 2 === 0 ? 'lg:-mt-6' : 'lg:mt-6'}`}>
                                    {/* Number Badge */}
                                    <div className="absolute top-2 right-4 text-5xl font-extrabold text-zinc-800/15 drop-shadow-sm pointer-events-none">{item.step}</div>
                                    
                                    {/* Icon Circle */}
                                    <div className={`size-14 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    
                                    <h4 className="font-bold text-[#00477b] text-sm mb-1">{item.week}</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-3">{item.title}</h5>
                                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Measurable Impact */}
            <section className="py-20 bg-transparent relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#00477b] mb-12">
                        Measurable Impact
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Funding & Donor Relations", desc: "Faster receipt generation and 360-degree donor reporting." },
                            { title: "Program Delivery", desc: "Real-time tracking of funds against program KPIs." },
                            { title: "Financial Transparency", desc: "Audit-ready financials and automated fund utilization tracking." },
                            { title: "Operational Efficiency", desc: "40%+ reduction in admin time and manual reporting." }
                        ].map((impact, i) => (
                            <div key={i} className="border border-white/60 rounded-xl p-6 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-md transition-all">
                                <h3 className="text-sm font-bold text-[#00477b] mb-3">{impact.title}</h3>
                                <p className="text-xs text-zinc-600 font-medium leading-relaxed">{impact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Success Stories */}
            <section className="py-24 bg-transparent text-zinc-900 relative z-10">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-300 via-transparent to-transparent bg-[size:20px_20px]"></div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Stories
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {/* Card 1 */}
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] relative hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all">
                            <div className="absolute top-6 right-6 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#00477b]">Education NGO</h3>
                            <div className="mb-6">
                                <span className="text-[10px] text-[#0284c7] font-bold uppercase tracking-wider bg-blue-100/50 px-2 py-1 rounded">Rajasthan</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">"Scaled to 500+ schools with one centralized reporting system, eliminating manual data entry."</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] relative hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all">
                            <div className="absolute top-6 right-6 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#00477b]">Healthcare NGO</h3>
                            <div className="mb-6">
                                <span className="text-[10px] text-[#10b981] font-bold uppercase tracking-wider bg-emerald-100/50 px-2 py-1 rounded">Maharashtra</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">"Digitized 1M+ patient records across 50 rural clinics with offline-first mobile forms."</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] relative hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all">
                            <div className="absolute top-6 right-6 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#00477b]">Rural Dev NGO</h3>
                            <div className="mb-6">
                                <span className="text-[10px] text-[#8b5cf6] font-bold uppercase tracking-wider bg-purple-100/50 px-2 py-1 rounded">Odisha</span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">"Achieved 100% compliance in FCRA audits and transparent fund tracking for global donors."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Non-Profit ERP Package - Special Offer */}
            <section className="py-24 bg-transparent text-center relative z-10 border-b border-[#e2e8f0]/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-12">
                        Non-Profit ERP Package - Special Offer
                    </h2>

                    <div className="flex flex-col md:flex-row border border-white/60 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden max-w-4xl mx-auto">
                        <div className="md:w-1/3 bg-white/20 backdrop-blur-md p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/40">
                            <h3 className="text-lg font-bold text-[#00477b] mb-2">Starts At</h3>
                            <p className="text-4xl font-bold text-zinc-900 mb-2">₹75,000</p>
                            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">Special NGO Rate</span>
                            <p className="text-xs text-zinc-500 font-medium text-center">Up to 50% discount vs commercial implementations.</p>
                        </div>
                        <div className="md:w-2/3 p-8 text-left bg-white/40 backdrop-blur-md">
                            <p className="font-semibold text-zinc-800 text-sm mb-6 bg-[#f0f9ff] inline-block px-3 py-1 rounded text-[#0284c7]">
                                Includes core modules: Donor, Program, Finance, HR
                            </p>

                            <h4 className="font-bold text-[#10b981] mb-4 uppercase tracking-wider text-xs">Included:</h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    1 Year Cloud Hosting included
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    Custom Intake Forms for Beneficiaries
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    80G/12A Receipt Generation Workflow
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-600">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    Donor and Beneficiary Portals
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Why Gnosys Digital */}
            <section className="py-20 bg-transparent relative z-10">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-12">
                        Why Gnosys Digital
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "10+ NGO implementations across India.",
                            "Deep understanding of FCRA & CSR compliance.",
                            "Dedicated project managers with social sector experience.",
                            "Post-launch support that understands NGO urgency."
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex items-center justify-center min-h-[100px]">
                                <p className="text-sm font-bold text-zinc-900">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Contact Form */}
            <section className="py-24 bg-transparent relative z-10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#00477b] mb-2">
                                Request Your Free Impact Assessment
                            </h2>
                            <p className="text-sm text-zinc-500">
                                Let's review your operations and show you exactly how ERPNext can scale your impact.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                    <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-sm border-gray-300 bg-white/40 backdrop-blur-sm" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-sm border-gray-300 bg-white/40 backdrop-blur-sm" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-11 rounded-sm border-gray-300 bg-white/40 backdrop-blur-sm" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="orgName" className="text-xs font-bold text-zinc-700">Organization Name</Label>
                                    <Input id="orgName" placeholder="Enter your organization name" className="h-11 rounded-sm border-gray-300 bg-white/40 backdrop-blur-sm" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="orgType" className="text-xs font-bold text-zinc-700">Organization Type / Registration</Label>
                                    <select id="orgType" className="w-full h-11 rounded-sm border border-gray-300 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <option value="" className="bg-white">Select Registration Type</option>
                                        <option value="Section 8" className="bg-white">Section 8 Company</option>
                                        <option value="Trust" className="bg-white">Trust</option>
                                        <option value="Society" className="bg-white">Society</option>
                                        <option value="Intl NGO" className="bg-white">International NGO</option>
                                        <option value="Other" className="bg-white">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="focusArea" className="text-xs font-bold text-zinc-700">Primary Focus Area</Label>
                                    <select id="focusArea" className="w-full h-11 rounded-sm border border-gray-300 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <option value="" className="bg-white">Select Focus Area</option>
                                        <option value="Education" className="bg-white">Education</option>
                                        <option value="Health" className="bg-white">Health & Medical</option>
                                        <option value="Environment" className="bg-white">Environment</option>
                                        <option value="Livelihood" className="bg-white">Livelihood</option>
                                        <option value="Other" className="bg-white">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="annualBudget" className="text-xs font-bold text-zinc-700">Annual Budget</Label>
                                    <select id="annualBudget" className="w-full h-11 rounded-sm border border-gray-300 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <option value="" className="bg-white">Select Budget</option>
                                        <option value="Under 1Cr" className="bg-white">Under 1Cr</option>
                                        <option value="1Cr - 5Cr" className="bg-white">1Cr - 5Cr</option>
                                        <option value="5Cr - 20Cr" className="bg-white">5Cr - 20Cr</option>
                                        <option value="20Cr+" className="bg-white">20Cr+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="teamSize" className="text-xs font-bold text-zinc-700">Team Size</Label>
                                    <select id="teamSize" className="w-full h-11 rounded-sm border border-gray-300 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <option value="" className="bg-white">Select Team Size</option>
                                        <option value="1-10" className="bg-white">1-10</option>
                                        <option value="11-50" className="bg-white">11-50</option>
                                        <option value="51-200" className="bg-white">51-200</option>
                                        <option value="200+" className="bg-white">200+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="existingErp" className="text-xs font-bold text-zinc-700">Are you existing ERP users?</Label>
                                <select id="existingErp" className="w-full h-11 rounded-sm border border-gray-300 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    <option value="" className="bg-white">Select Option</option>
                                    <option value="Yes" className="bg-white">Yes - Legacy System</option>
                                    <option value="No" className="bg-white">No - Spreadsheets/Manual</option>
                                </select>
                            </div>

                            <div className="space-y-3 pt-2">
                                <Label className="text-xs font-bold text-zinc-700">Key Operational Challenges</Label>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {[
                                        "Funding / Donation Tracking",
                                        "Program Delivery & Beneficiary Tracking",
                                        "Financial / Grant Management",
                                        "Compliance / Audit Readiness",
                                        "Volunteer / Staff Management",
                                        "Operational Inefficiencies",
                                        "Other"
                                    ].map((challenge, i) => (
                                        <label key={i} className="flex items-start gap-2 cursor-pointer">
                                            <input type="checkbox" className="mt-1 h-4 w-4 appearance-none rounded border border-gray-300 bg-white checked:bg-[#1e3a5f] checked:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f] focus:outline-none focus:ring-offset-2 relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45" />
                                            <span className="text-xs text-zinc-600">{challenge}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 pt-2">
                                <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700">Preferred Contact Method</Label>
                                <select id="contactMethod" className="w-full h-11 rounded-sm border border-gray-300 bg-white/40 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    <option value="" className="bg-white">Choose an option</option>
                                    <option value="Email" className="bg-white">Email</option>
                                    <option value="Phone" className="bg-white">Phone Call</option>
                                </select>
                            </div>

                            <div className="pt-6 text-center">
                                <Button className="bg-[#00477b] text-white hover:bg-[#00335e] px-10 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            {/* 11. Final CTA */}
            <section className="py-24 bg-transparent relative z-10 mb-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-12 md:p-16 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">

                        {/* Decorative circles inside the card */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-300/30 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zinc-400/20 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00477b] mb-6 tracking-tight">
                                Ready To Transform?
                            </h2>
                            <p className="text-zinc-600 mb-10 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                                Take the first step towards modernizing your non-profit operations and maximizing your social impact today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button className="bg-[#00477b] text-white hover:bg-[#00335e] h-14 px-10 text-lg font-bold shadow-xl shadow-blue-900/20 rounded-full transition-all duration-300 hover:-translate-y-1">
                                    Book Assessment
                                </Button>
                                <Button className="bg-white/80 backdrop-blur-sm text-zinc-800 border-2 border-white hover:border-zinc-800 hover:bg-white h-14 px-10 text-lg font-bold shadow-lg rounded-full transition-all duration-300 hover:-translate-y-1">
                                    Talk To An Expert
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
