import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    CheckSquare, Search, Settings, Database, MonitorPlay,
    Rocket, Briefcase, Clock, LineChart, Users, Receipt,
    TrendingUp, Layers, CheckCircle2, ChevronDown, Check,
    ArrowRight, ShieldCheck, Trophy, Target, Award, ArrowUpRight,
    Laptop, Building2, BookOpen
} from 'lucide-react';
import { useState } from 'react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextProfessionalServices() {
    const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

    const toggleChallenge = (item: string) => {
        setSelectedChallenges((prev) =>
            prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
        );
    };

    return (
        <MainLayout>
            <Head title="ERPNext For Professional Services" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-professi.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none lg:w-1/2" />
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
                                Professional Services ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                A Unified System To Manage <br />
                                <span className="text-blue-100 font-normal">Projects, People, And Profitability</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Deliver projects on time, improve utilization, and prevent revenue leakage. Run your entire services business from a single platform designed for billable work.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Book Free Operations Assessment <ArrowUpRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Challenges Faced By Professional Services Firms */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Challenges Faced By Professional Services Firms
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    icon: Clock,
                                    title: "Lost Billable Hours",
                                    desc: "Uncaptured time and delayed manual timesheet submissions causing direct revenue loss each billing cycle."
                                },
                                {
                                    icon: LineChart,
                                    title: "No Real-Time Visibility",
                                    desc: "Lack of project burn rate visibility, milestone progress tracking, and accurate gross profit margins."
                                },
                                {
                                    icon: Users,
                                    title: "Resource Misallocation",
                                    desc: "Sub-optimal bench management, mismatched skill assignments, and inaccurate team capacity planning."
                                },
                                {
                                    icon: Receipt,
                                    title: "Delayed Client Invoicing",
                                    desc: "Slow time-to-invoice cycles due to disconnected systems, directly hitting cash flow and collections."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Unpredictable Pipeline",
                                    desc: "Poor deal stage tracking and disconnected CRM resulting in revenue forecasting inaccuracies."
                                },
                                {
                                    icon: Layers,
                                    title: "Communication Silos",
                                    desc: "Disjointed handoffs between sales, project delivery, billing, and client communication channels."
                                }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
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

            {/* 3. How ERPNext Transforms Your Firm */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Transformation
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            How ERPNext Transforms Your Firm
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[78rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 text-left">
                            {[
                                { 
                                    title: 'Project Delivery & Ops', 
                                    icon: Briefcase, 
                                    points: [
                                        'Gantt charts with milestone & task dependencies',
                                        'Real-time automated time & expense tracking',
                                        'Task-level profitability and burn rate tracking',
                                        'Automated milestone alerts & progress reports'
                                    ] 
                                },
                                { 
                                    title: 'Resource Management', 
                                    icon: Users, 
                                    points: [
                                        'Skill & availability-based team allocation',
                                        'Real-time utilization analytics across teams',
                                        'Capacity planning and bench management',
                                        'Pipeline-driven resource demand forecasting'
                                    ] 
                                },
                                { 
                                    title: 'Financial Control & Billing', 
                                    icon: Receipt, 
                                    points: [
                                        'Flexible billing: T&M, milestone, retainer',
                                        'Automated invoice sync from approved timesheets',
                                        'Revenue recognition & client margin analysis',
                                        'Direct synchronization with general ledger'
                                    ] 
                                },
                                { 
                                    title: 'CRM & BD Pipeline', 
                                    icon: Target, 
                                    points: [
                                        'Pipeline visibility with deal win probabilities',
                                        'Instant proposal and quote generation',
                                        'Client engagement history & health scoring',
                                        '1-Click transition from won deal to project'
                                    ] 
                                }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div>
                                            <div className="size-14 mb-5 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <mod.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                            <ul className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed space-y-2 relative z-10">
                                                {mod.points.map((pt, j) => (
                                                    <li key={j} className="flex items-start gap-2">
                                                        <CheckCircle2 className="size-3.5 text-[#00477b] mt-0.5 shrink-0" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Modules */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Core Modules
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Core ERPNext Modules For Services
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 text-left">
                            {[
                                { mod: 'Project & Task Management', cap: 'Gantt charts, task dependencies, progress analytics, milestone tracking', icon: Briefcase },
                                { mod: 'Time & Expense Tracking', cap: 'Mobile timesheets, automated multi-level approvals, multi-currency expenses', icon: Clock },
                                { mod: 'Resource Planning', cap: 'Skills mapping, team utilization tracking, bench management & capacity forecasting', icon: Users },
                                { mod: 'Billing & Accounting', cap: 'Automated invoicing, milestone billing, revenue recognition, GST compliance', icon: Receipt },
                                { mod: 'CRM & Pipeline', cap: 'Lead-to-contract workflow, proposal generation, win-probability dashboards', icon: Target },
                                { mod: 'Client Collaboration Portal', cap: 'Transparent client collaboration, deliverable sharing, live progress updates', icon: Laptop },
                                { mod: 'HR & Talent Payroll', cap: 'Talent hiring, onboarding, leaves, attendance, automated multi-tier payroll', icon: Award },
                                { mod: 'Reporting & Profit Analytics', cap: 'Real-time project margins, client profitability, utilization rates, cash-flow', icon: LineChart }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={50 * (idx + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-2xl p-5 shadow-[0_8px_25px_rgb(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-400 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-400 pointer-events-none"></div>
                                        <div className="size-12 mb-3.5 rounded-xl bg-white shadow-md shadow-blue-900/5 border border-white text-[#00477b] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                                            <item.icon className="size-6 text-[#00477b]" />
                                        </div>
                                        <h4 className="text-base font-normal text-[#00477b] mb-1.5 leading-snug tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {item.mod}
                                        </h4>
                                        <p className="text-xs text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {item.cap}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Industries We Support */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Industries
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Industries We Support
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: 'IT Services & Software Development', desc: 'Sprints, agile task management, developer timesheets & retainer billing.', icon: Laptop },
                                { title: 'Marketing & Creative Agencies', desc: 'Campaign tracking, creative asset reviews, freelance expense management.', icon: Rocket },
                                { title: 'Management & Strategy Consulting', desc: 'Milestone billing, partner utilization, strategic advisory deliverables.', icon: LineChart },
                                { title: 'Accounting & Legal Firms', desc: 'Matter management, trust accounting, compliance & billable hour tracking.', icon: Building2 },
                                { title: 'Engineering & Technical Services', desc: 'Project budgets, site visits, technical documentation & vendor billing.', icon: Settings },
                                { title: 'Training & Certification Providers', desc: 'Batch scheduling, trainer allocations, student certification & course invoicing.', icon: BookOpen }
                            ].map((industry, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div 
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <industry.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{industry.title}</h3>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{industry.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Implementation Roadmap */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Roadmap
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            5-Week Services ERP Implementation Roadmap
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="relative max-w-[86rem] mx-auto">
                        
                        {/* Horizontal Roadmap Connector Track for Desktop */}
                        <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
                            {[
                                { step: "01", week: "Week 1", title: "Requirement Discovery", desc: "Analyze workflows, gather requirements, and map billing processes.", icon: Search },
                                { step: "02", week: "Week 2", title: "System Configuration", desc: "Set up templates, roles, permissions, rate cards, and dashboards.", icon: Settings },
                                { step: "03", week: "Week 3", title: "Data Migration", desc: "Import client lists, active projects, timesheet logs, and resource data.", icon: Database },
                                { step: "04", week: "Week 4", title: "Testing & Validation", desc: "Conduct user acceptance testing and validate invoice generation workflows.", icon: MonitorPlay },
                                { step: "05", week: "Week 5", title: "Training & Go-Live", desc: "Train delivery and billing teams, launch the system, and optimize operations.", icon: Rocket }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="group relative flex flex-col items-center">
                                    
                                    {/* Top Roadmap Node sitting on the track */}
                                    <div className="relative mb-6">
                                        <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        {/* Step Number Tag */}
                                        <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                            {item.step}
                                        </span>
                                    </div>

                                    {/* Roadmap Content Card */}
                                    <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[11px] uppercase tracking-wider mb-2.5 relative z-10">
                                            {item.week}
                                        </span>

                                        <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Why Choose Gnosys Digital */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Why Gnosys
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Choose Gnosys Digital
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                {
                                    title: "45+ Services Deployments",
                                    desc: "45+ successful ERP implementations tailored for IT, agency, and consulting firms.",
                                    icon: Briefcase
                                },
                                {
                                    title: "Billable Hour Expertise",
                                    desc: "Deep knowledge in time tracking, milestone billing, and revenue recognition models.",
                                    icon: Clock
                                },
                                {
                                    title: "Rapid Deployment Framework",
                                    desc: "Standardized templates and automated importers for go-live in under 5 weeks.",
                                    icon: Rocket
                                },
                                {
                                    title: "Measurable ROI Support",
                                    desc: "Transparent fixed pricing with dedicated post-launch optimization and training.",
                                    icon: Trophy
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

            {/* 8. Pricing and Contact Form Combined */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[1450px]">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            {/* Left Side: Pricing (5 cols) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 text-left flex flex-col items-start">
                                <span className="w-fit inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Pricing & Packages
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                    Services ERP Package
                                </h2>
                                <p className="text-zinc-600 mb-6 text-sm sm:text-base leading-relaxed font-normal">
                                    Complete professional services transformation package covering timesheets, billing, project operations, and resource scheduling.
                                </p>

                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-xl overflow-hidden w-full">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold text-[#00477b]">₹</span>
                                        <p className="text-5xl font-extrabold text-[#00477b] tracking-tight">1,25,000</p>
                                        <span className="text-xs text-zinc-500 font-medium ml-2">/ complete package</span>
                                    </div>

                                    <div className="bg-white/60 rounded-2xl p-4 border border-white mb-6">
                                        <h4 className="text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2.5">
                                            Special Launch Inclusions:
                                        </h4>
                                        <ul className="space-y-2 text-xs text-zinc-700 font-normal">
                                            {[
                                                "Free mobile time-tracking & GPS setup",
                                                "Free client collaboration portal configuration",
                                                "3 Months comprehensive extended warranty support",
                                                "2 Custom executive KPI dashboard developments"
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <Check className="size-3.5 text-[#00477b] shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-2 text-xs text-zinc-600 font-normal">
                                        <p className="font-medium text-[#00477b]">Includes All Core Modules:</p>
                                        <div className="grid grid-cols-2 gap-2 text-zinc-700">
                                            <span>• Project Management</span>
                                            <span>• Timesheets & T&M</span>
                                            <span>• Resource Planning</span>
                                            <span>• Invoicing & CRM</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Side: Contact Form (7 cols) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl relative z-10">
                                    <div className="text-left mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Get Started
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal text-[#00477b] tracking-tight mb-1">
                                            Tell Us About Your Services Firm
                                        </h3>
                                        <p className="text-zinc-600 text-xs sm:text-sm font-normal">
                                            Fill in your details and our professional services ERP architect will prepare a tailored audit.
                                        </p>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="fullName" className="text-xs font-medium text-[#00477b]">Full Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-xs font-medium text-[#00477b]">Official Email *</Label>
                                                <Input id="email" type="email" placeholder="Enter your official email" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="phone" className="text-xs font-medium text-[#00477b]">Phone Number *</Label>
                                                <Input id="phone" placeholder="+91 98765 43210" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="companyName" className="text-xs font-medium text-[#00477b]">Company / Agency Name *</Label>
                                                <Input id="companyName" placeholder="e.g. Apex Tech Solutions" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="teamSize" className="text-xs font-medium text-[#00477b]">Team Size</Label>
                                                <div className="relative">
                                                    <select id="teamSize" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">1 - 15 consultants / devs</option>
                                                        <option className="bg-white">16 - 50 employees</option>
                                                        <option className="bg-white">51 - 200 employees</option>
                                                        <option className="bg-white">200+ consultants</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="primaryServices" className="text-xs font-medium text-[#00477b]">Primary Domain</Label>
                                                <div className="relative">
                                                    <select id="primaryServices" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">IT Services & Software Development</option>
                                                        <option className="bg-white">Marketing & Creative Agencies</option>
                                                        <option className="bg-white">Management & Strategy Consulting</option>
                                                        <option className="bg-white">Accounting & Legal Firms</option>
                                                        <option className="bg-white">Engineering & Technical Services</option>
                                                        <option className="bg-white">Training & Education Providers</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <Label className="text-xs font-medium text-[#00477b]">Current Operational Priorities</Label>
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {[
                                                    "Billable Time Leakage",
                                                    "Resource Bench Utilization",
                                                    "Invoicing & Milestone Sync",
                                                    "Project Profit Margins"
                                                ].map((challenge, cIdx) => (
                                                    <label key={cIdx} className="flex items-center gap-2 cursor-pointer bg-white/50 p-2.5 rounded-xl border border-white/70 hover:bg-white/80 transition-colors">
                                                        <Checkbox className="border-white/80 bg-white/70 data-[state=checked]:bg-[#00477b] data-[state=checked]:text-white data-[state=checked]:border-[#00477b]" />
                                                        <span className="text-xs text-zinc-700 font-normal leading-tight">{challenge}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button type="button" className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 font-bold w-full shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2">
                                                Request Free Operations Assessment <ArrowRight className="size-4" />
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
