import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    CheckSquare, Cloud, TrendingUp, Search, Settings,
    Database, MonitorPlay, Rocket, Users, HandHeart,
    PieChart, ClipboardList, ShieldCheck, HeartPulse, GraduationCap, Tractor, Building2, Users2, Trees, ArrowUpRight
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextNgo() {
    return (
        <MainLayout>
            <Head title="ERPNext For NGOs" />
            {/* Custom Ambient Background as requested */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section 
                className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh]"
                style={{
                    backgroundImage: "url('/assets/erp-ngo.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 z-0">
                    {/* No overlay, showing full clear image as requested */}
                </div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">
                        ERPNEXT FOR NGOS
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-8">
                        Maximize Impact While Streamlining Operations
                    </h1>
                    
                    <p className="text-lg md:text-xl text-zinc-200 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                        Manage donors, projects, compliance, and finances efficiently on one open-source ERP platform.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-transparent border-2 border-white/60 hover:bg-white/10 text-white rounded-full px-8 py-6 text-base font-bold transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
                            Request Free Assessment <ArrowUpRight className="ml-2 size-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Challenges Faced By Non-Profits */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        Challenges Faced By Non-Profits
                    </h2>
                    <p className="text-zinc-600 mb-14 text-sm font-medium">
                        Balancing impact with admin tasks is hard when working in silos.
                    </p>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-6 text-left mb-6">
                            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                <div className="p-3.5 bg-blue-50/50 text-[#3b82f6] rounded-2xl inline-flex mb-6 border border-blue-100/50">
                                    <HandHeart className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-4 tracking-tight">Funding & Donor Management</h3>
                                <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5 text-left w-full">
                                    <li>Multiple spreadsheets for tracking grants and donations.</li>
                                    <li>Delayed receipt generation (80G).</li>
                                    <li>No 360-degree view of donor interactions.</li>
                                </ul>
                            </div>
                            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                <div className="p-3.5 bg-blue-50/50 text-[#3b82f6] rounded-2xl inline-flex mb-6 border border-blue-100/50">
                                    <ClipboardList className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-4 tracking-tight">Program & Project Delivery</h3>
                                <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5 text-left w-full">
                                    <li>Hard to track real-time fund utilization against budgets.</li>
                                    <li>Manual beneficiary tracking and impact assessment.</li>
                                    <li>Disconnected field teams without mobile data capture.</li>
                                </ul>
                            </div>
                            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                <div className="p-3.5 bg-blue-50/50 text-[#3b82f6] rounded-2xl inline-flex mb-6 border border-blue-100/50">
                                    <ShieldCheck className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-4 tracking-tight">Compliance & Reporting</h3>
                                <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5 text-left w-full">
                                    <li>Difficulty adhering to FCRA, CSR rules and 80G norms.</li>
                                    <li>Manual preparation of utilization certificates.</li>
                                    <li>Last-minute scrambles for regulatory audit reports.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                <div className="p-3.5 bg-blue-50/50 text-[#3b82f6] rounded-2xl inline-flex mb-6 border border-blue-100/50">
                                    <PieChart className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-4 tracking-tight">Financial Management</h3>
                                <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5 text-left w-full">
                                    <li>Fragmented chart of accounts.</li>
                                    <li>Inefficient consolidation of branch/chapter data.</li>
                                    <li>Lack of real-time project profitability.</li>
                                </ul>
                            </div>
                            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                <div className="p-3.5 bg-blue-50/50 text-[#3b82f6] rounded-2xl inline-flex mb-6 border border-blue-100/50">
                                    <Users className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-4 tracking-tight">Volunteer & Staff Coordination</h3>
                                <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc pl-5 text-left w-full">
                                    <li>Manual roster management & scheduling.</li>
                                    <li>Decentralized onboarding and document tracking.</li>
                                    <li>No central directory for skills and availability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ERPNext Solution For NGOs */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl mb-8">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SOLUTION
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            ERPNext Solution For NGOs
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
                            A fully integrated suite that brings your field operations, back-office, and donors onto a single platform.
                        </p>
                    </div>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Donor & Fundraising Management", icon: HandHeart, points: ["Automated donation receipting (80G/12A/CSR).", "Track pledges and recurring giving.", "360-degree donor portals."] },
                                { title: "Program & Beneficiary Management", icon: ClipboardList, points: ["Custom intake forms and case tracking.", "Mobile-ready for field teams to record impact data.", "Real-time dashboards."] },
                                { title: "Financial Management", icon: PieChart, points: ["Project accounting & branch consolidation.", "Automated fund tracking & allocation.", "Grant-wise budget vs actual reports."] },
                                { title: "HR & Volunteer Management", icon: Users, points: ["Streamline onboarding, leaves & attendance.", "Skills database for matching volunteers.", "Shift & roster management."] },
                                { title: "Analytics & Reporting", icon: ShieldCheck, points: ["1-click generation of Utilization Certificates.", "Board-ready MIS dashboards.", "Custom compliance reports."] },
                                { title: "Inventory & Asset Management", icon: Database, points: ["Track donations in kind (medicines, books, etc.).", "Multi-warehouse inventory tracking.", "Asset lifecycle management."] }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                    <div className="p-3.5 bg-blue-50/50 text-[#3b82f6] rounded-2xl inline-flex mb-6 border border-blue-100/50">
                                        <mod.icon className="size-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#00477b] mb-4 tracking-tight">{mod.title}</h3>
                                    <ul className="space-y-3 text-left w-full">
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
                </div>
            </section>

            {/* 4. Tailored For Social Sector Domains */}
            <section className="py-20 bg-transparent text-center relative z-10">
                <div className="container mx-auto px-4 max-w-5xl mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        DOMAIN EXPERTISE
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        Tailored For Social Sector Domains
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Healthcare & Medical Relief", desc: "Clinics, camps, mobile units", icon: <HeartPulse className="size-8 text-[#3b82f6]" /> },
                                { title: "Education & Skilling", desc: "Schools, vocational centers, ed-tech", icon: <GraduationCap className="size-8 text-[#3b82f6]" /> },
                                { title: "Livelihood & Rural Development", desc: "SHGs, microfinance, skill centers", icon: <Tractor className="size-8 text-[#3b82f6]" /> },
                                { title: "Public Projects", desc: "Water, sanitation, infrastructure", icon: <Building2 className="size-8 text-[#3b82f6]" /> },
                                { title: "Child & Women Welfare", desc: "Shelters, legal aid, rehabilitation", icon: <Users2 className="size-8 text-[#3b82f6]" /> },
                                { title: "Environment & Conservation", desc: "Reforestation, renewable energy", icon: <Trees className="size-8 text-[#3b82f6]" /> }
                            ].map((type, i) => (
                                <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 text-center hover:-translate-y-2 flex flex-col items-center group">
                                    <div className="p-4 bg-blue-50/50 rounded-2xl mb-5 border border-blue-100/50 group-hover:scale-110 transition-transform duration-300">
                                        {type.icon}
                                    </div>
                                    <h3 className="text-[#00477b] font-bold text-lg mb-3 tracking-tight">{type.title}</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed font-medium">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Non-Profit ERP Implementation Roadmap */}
            <section className="py-24 bg-transparent text-center overflow-hidden relative z-10">
                <div className="w-full px-2 sm:px-4 lg:px-6 mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        IMPLEMENTATION
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        Non-Profit ERP Implementation Roadmap
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium">
                        A complete 5-Step blueprint to modernize your operations.
                    </p>
                </div>

                {/* Cards Wrapper Band */}
                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8 relative z-10">
                            {[
                                { step: "01", week: "Week 1-2", title: "Discovery", desc: "Gather requirements, map processes, establish KPIs.", icon: <Search className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                { step: "02", week: "Week 3-4", title: "System Config", desc: "Setup modules, workflows, roles, & access levels.", icon: <Settings className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                { step: "03", week: "Week 5", title: "Data Migration", desc: "Clean and import historical donor/beneficiary data.", icon: <Database className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                { step: "04", week: "Week 6", title: "Training", desc: "Hands-on training for HQ and field staff.", icon: <MonitorPlay className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                { step: "05", week: "Week 7+", title: "Go Live", desc: "System launch and ongoing hyper-care support.", icon: <Rocket className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> }
                            ].map((item, i) => (
                                <div key={i} className={`group relative bg-white border border-white/80 p-6 xl:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 aspect-square flex flex-col justify-center ${i % 2 === 0 ? 'lg:-mt-4' : 'lg:mt-4'}`}>
                                    {/* Number Badge */}
                                    <div className="absolute top-4 right-6 text-5xl xl:text-6xl font-extrabold text-[#00477b]/5 drop-shadow-sm pointer-events-none group-hover:text-[#00477b]/10 transition-colors duration-500">{item.step}</div>

                                    {/* Icon Circle */}
                                    <div className="size-14 xl:size-16 rounded-full bg-white/60 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative">
                                        <div className="absolute inset-0 rounded-full bg-[#00477b]/5 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>

                                    <h4 className="font-bold text-[#00477b] text-sm mb-1">{item.week}</h4>
                                    <h5 className="font-bold text-zinc-900 text-xs xl:text-sm uppercase tracking-wider mb-3">{item.title}</h5>
                                    <p className="text-xs xl:text-sm text-zinc-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Measurable Impact */}
            <section className="py-20 bg-transparent relative z-10">
                <div className="container mx-auto px-4 max-w-6xl mb-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        BUSINESS IMPACT
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        Measurable Impact
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: "Funding & Donor Relations", desc: "Faster receipt generation and 360-degree donor reporting.", icon: <HandHeart className="size-6 text-[#3b82f6]" /> },
                                { title: "Program Delivery", desc: "Real-time tracking of funds against program KPIs.", icon: <TrendingUp className="size-6 text-[#3b82f6]" /> },
                                { title: "Financial Transparency", desc: "Audit-ready financials and automated fund utilization tracking.", icon: <PieChart className="size-6 text-[#3b82f6]" /> },
                                { title: "Operational Efficiency", desc: "40%+ reduction in admin time and manual reporting.", icon: <Rocket className="size-6 text-[#3b82f6]" /> }
                            ].map((impact, i) => (
                                <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col group">
                                    <div className="p-3 bg-blue-50/50 rounded-2xl mb-6 inline-flex border border-blue-100/50 self-start group-hover:scale-110 transition-transform duration-300">
                                        {impact.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#00477b] mb-3 tracking-tight">{impact.title}</h3>
                                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">{impact.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Success Stories */}
            <section className="py-24 bg-transparent text-zinc-900 relative z-10">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-300 via-transparent to-transparent bg-[size:20px_20px]"></div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        SUCCESS STORIES
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        Success Stories
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8 relative z-10">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 relative hover:-translate-y-2 group">
                                <div className="absolute top-6 right-6 opacity-20 text-blue-200 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#00477b] relative z-10">Education NGO</h3>
                                <div className="mb-8 relative z-10">
                                    <span className="text-[10px] text-[#3b82f6] font-bold uppercase tracking-widest bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100/50">Rajasthan</span>
                                </div>
                                <p className="text-sm text-zinc-600 leading-relaxed font-medium italic relative z-10">"Scaled to 500+ schools with one centralized reporting system, eliminating manual data entry."</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 relative hover:-translate-y-2 group">
                                <div className="absolute top-6 right-6 opacity-20 text-blue-200 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#00477b] relative z-10">Healthcare NGO</h3>
                                <div className="mb-8 relative z-10">
                                    <span className="text-[10px] text-[#3b82f6] font-bold uppercase tracking-widest bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100/50">Maharashtra</span>
                                </div>
                                <p className="text-sm text-zinc-600 leading-relaxed font-medium italic relative z-10">"Digitized 1M+ patient records across 50 rural clinics with offline-first mobile forms."</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 relative hover:-translate-y-2 group">
                                <div className="absolute top-6 right-6 opacity-20 text-blue-200 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#00477b] relative z-10">Rural Dev NGO</h3>
                                <div className="mb-8 relative z-10">
                                    <span className="text-[10px] text-[#3b82f6] font-bold uppercase tracking-widest bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100/50">Odisha</span>
                                </div>
                                <p className="text-sm text-zinc-600 leading-relaxed font-medium italic relative z-10">"Achieved 100% compliance in FCRA audits and transparent fund tracking for global donors."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Why Gnosys Digital */}
            <section className="py-20 bg-transparent relative z-10 border-b border-[#e2e8f0]/50">
                <div className="container mx-auto px-4 max-w-6xl text-center mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHY GNOSYS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        Why Gnosys Digital
                    </h2>
                </div>

                <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "10+ NGO implementations across India.",
                                "Deep understanding of FCRA & CSR compliance.",
                                "Dedicated project managers with social sector experience.",
                                "Post-launch support that understands NGO urgency."
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center group min-h-[160px] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                    <div className="bg-blue-50/50 p-3 rounded-2xl mb-4 border border-blue-100/50 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300 relative z-10">
                                        <CheckSquare className="size-5" />
                                    </div>
                                    <p className="text-sm font-bold text-[#00477b] leading-relaxed relative z-10">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 & 10. Pricing and Contact Form Combined */}
            <section className="py-24 bg-transparent relative z-10">
                {/* Changed to w-full with minimal padding to stretch to screen edges */}
                <div className="w-full px-4 lg:px-6 2xl:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                        {/* Left Side: Pricing */}
                        <div className="lg:col-span-5 text-center lg:text-left flex flex-col">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 self-center lg:self-start">
                                PRICING & PACKAGES
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-8">
                                Non-Profit ERP Package
                            </h2>

                            {/* Upgraded Premium Pricing Card UI */}
                            <div className="flex flex-col border border-white/80 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden bg-white/40 backdrop-blur-xl h-full relative group">
                                {/* Subtle animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="p-10 flex flex-col justify-center items-center text-center relative overflow-hidden border-b border-white/60">
                                    {/* Decorative glow inside header */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                                    <h3 className="text-lg font-bold text-[#00477b] mb-2 relative z-10">Starts At</h3>

                                    <div className="flex items-baseline justify-center gap-1 mb-4 relative z-10">
                                        <span className="text-3xl font-bold text-[#00477b] mt-2">₹</span>
                                        <p className="text-6xl font-extrabold text-[#00477b] tracking-tight drop-shadow-sm">75,000</p>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4 relative z-10">
                                        <span className="bg-[#00477b]/10 text-[#00477b] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-[#00477b]/20 shadow-sm">
                                            Special NGO Rate
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-600 font-medium relative z-10 max-w-xs">Up to 50% discount compared to commercial implementations.</p>
                                </div>
                                <div className="p-8 md:p-10 text-left flex-1 flex flex-col justify-center relative z-10">
                                    <div className="mb-8 bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white shadow-sm relative overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0284c7] to-[#00477b]"></div>
                                        <p className="font-semibold text-zinc-800 text-sm ml-2">
                                            Includes core modules: <span className="text-[#00477b]">Donor, Program, Finance, HR</span>
                                        </p>
                                    </div>

                                    <h4 className="font-bold text-zinc-400 mb-6 uppercase tracking-widest text-xs flex items-center gap-3">
                                        <div className="h-px bg-zinc-300 flex-1"></div>
                                        What's Included
                                        <div className="h-px bg-zinc-300 flex-1"></div>
                                    </h4>

                                    <ul className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                                        {[
                                            "1 Year Cloud Hosting included",
                                            "Custom Intake Forms for Beneficiaries",
                                            "80G/12A Receipt Generation Workflow",
                                            "Donor and Beneficiary Portals",
                                            "Board-ready MIS Dashboards",
                                            "Role-based Access Control"
                                        ].map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700 font-medium bg-white/50 hover:bg-white/80 transition-colors duration-300 p-3 rounded-xl border border-white shadow-sm">
                                                <div className="bg-blue-50/50 p-1 rounded-md text-[#3b82f6] shrink-0 border border-blue-100/50">
                                                    <CheckSquare className="size-4" />
                                                </div>
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 flex flex-col">
                            {/* Upgraded Form Layout UI */}
                            <div className="bg-gradient-to-bl from-white/70 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 h-full">
                                <div className="text-center lg:text-left mb-10">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                        GET STARTED
                                    </span>
                                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-normal tracking-tight text-[#00477b] mb-4">
                                        Request Your Free Impact Assessment
                                    </h2>
                                    <p className="text-sm text-zinc-600 font-medium">
                                        Let's review your operations and show you exactly how ERPNext can scale your impact.
                                    </p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Full Name</Label>
                                            <Input id="fullName" placeholder="Enter your full name" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Email Address</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Phone Number</Label>
                                            <Input id="phone" placeholder="Enter your phone number" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="orgName" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Organization Name</Label>
                                            <Input id="orgName" placeholder="Enter your organization name" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="orgType" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Organization Type</Label>
                                            <select id="orgType" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                                <option value="" className="bg-white">Select Registration Type</option>
                                                <option value="Section 8" className="bg-white">Section 8 Company</option>
                                                <option value="Trust" className="bg-white">Trust</option>
                                                <option value="Society" className="bg-white">Society</option>
                                                <option value="Intl NGO" className="bg-white">International NGO</option>
                                                <option value="Other" className="bg-white">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="focusArea" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Primary Focus Area</Label>
                                            <select id="focusArea" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
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
                                            <Label htmlFor="annualBudget" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Annual Budget</Label>
                                            <select id="annualBudget" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                                <option value="" className="bg-white">Select Budget</option>
                                                <option value="Under 1Cr" className="bg-white">Under 1Cr</option>
                                                <option value="1Cr - 5Cr" className="bg-white">1Cr - 5Cr</option>
                                                <option value="5Cr - 20Cr" className="bg-white">5Cr - 20Cr</option>
                                                <option value="20Cr+" className="bg-white">20Cr+</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="teamSize" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Team Size</Label>
                                            <select id="teamSize" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                                <option value="" className="bg-white">Select Team Size</option>
                                                <option value="1-10" className="bg-white">1-10</option>
                                                <option value="11-50" className="bg-white">11-50</option>
                                                <option value="51-200" className="bg-white">51-200</option>
                                                <option value="200+" className="bg-white">200+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="existingErp" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Are you existing ERP users?</Label>
                                        <select id="existingErp" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                            <option value="" className="bg-white">Select Option</option>
                                            <option value="Yes" className="bg-white">Yes - Legacy System</option>
                                            <option value="No" className="bg-white">No - Spreadsheets/Manual</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <Label className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Key Operational Challenges</Label>
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
                                                <label key={i} className="flex items-start gap-2 cursor-pointer group">
                                                    <input type="checkbox" className="mt-1 h-4 w-4 appearance-none rounded shadow-sm border border-white/80 bg-white/50 checked:bg-[#00477b] checked:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/30 focus:outline-none focus:ring-offset-2 relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 transition-all" />
                                                    <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">{challenge}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Preferred Contact Method</Label>
                                        <select id="contactMethod" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                            <option value="" className="bg-white">Choose an option</option>
                                            <option value="Email" className="bg-white">Email</option>
                                            <option value="Phone" className="bg-white">Phone Call</option>
                                        </select>
                                    </div>

                                    <div className="pt-6 text-center">
                                        <Button className="bg-[#00477b] text-white hover:bg-[#00335e] px-10 h-14 font-extrabold w-full sm:w-auto rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 text-sm tracking-wide">
                                            Request Free Assessment
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            {/* 11. Final CTA */}
            <section className="py-24 bg-transparent relative z-10 mb-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-12 md:p-16 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">

                        {/* Decorative circles inside the card removed as requested */}

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                NEXT STEPS
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#00477b] mb-6 tracking-tight">
                                Ready To Transform?
                            </h2>
                            <p className="text-zinc-600 mb-10 text-lg md:text-xl font-normal max-w-2xl mx-auto">
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
