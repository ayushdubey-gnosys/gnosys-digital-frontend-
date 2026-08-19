import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { CheckSquare, Search, Settings, Database, MonitorPlay, Rocket, Briefcase } from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextProfessionalServices() {
    return (
        <MainLayout>
            <Head title="ERPNext For Professional Services" />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-100/60 via-purple-50/50 to-pink-100/60 pointer-events-none"></div>

            <div className="w-full">
                <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pb-20 pt-20 text-center">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/erp-professi.webp')" }} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#071a2b]/85 via-[#0b2038]/65 to-[#0b2038]/20" />
                    </div>

                    <div className="container-brand relative z-10 max-w-5xl">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <h1 className="mb-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                                A Unified System To Manage <span className="text-blue-300">Projects, People, And Profitability</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="mx-auto mb-10 max-w-3xl text-lg text-blue-50/90 sm:text-xl">
                                Connect project planning, resource allocation, and financials on one platform so you can focus on delivering value.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Request A Consultation <span className="text-xl">&rarr;</span></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>

                    {/* Curved Wave Divider */}
                    <HeroWaveDivider />
                </section>

                <section className="pt-24 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Challenges
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Challenges Faced By Professional Services Firms
                        </h2>
                        <p className="brand-subheading mx-auto mb-12 max-w-2xl text-slate-600">
                            When your primary asset is time, disconnected systems drain profitability and cause client dissatisfaction.
                        </p>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/30 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="w-full max-w-[95%] mx-auto">
                                <div className="bg-white/20 backdrop-blur-xl border border-white/40 shadow-sm rounded-[2.5rem] sm:rounded-[3rem] relative overflow-hidden p-8 sm:p-12 lg:p-16 xl:p-20 text-left group transition-all duration-500 hover:bg-white/30 hover:shadow-lg hover:-translate-y-1">
                                    
                                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32 items-start">
                                        {/* Left Side: Heading */}
                                        <div className="lg:w-1/3 shrink-0 lg:sticky lg:top-32">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/60 border border-white/80 shadow-sm text-[#123b61] mb-6">
                                                <Briefcase className="h-8 w-8" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#123b61] mb-5">
                                                Common Problems
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed text-lg lg:text-xl">
                                                Identify the key bottlenecks holding back your firm's growth and profitability.
                                            </p>
                                        </div>

                                        {/* Right Side: Tree Branching Structure */}
                                        <div className="lg:w-2/3 relative py-2 w-full">
                                            {/* Main vertical tree trunk */}
                                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#123b61]/30 via-[#123b61]/20 to-transparent hidden sm:block" />
                                            
                                            <div className="flex flex-col gap-5 relative">
                                                {[
                                                    'Unpredictable resource availability and bench time.',
                                                    'Disconnected time tracking leading to delayed billing.',
                                                    'Difficulty tracking project profitability and cost overruns.',
                                                    'Sales pipelines not integrated with project delivery.',
                                                    'Managing multiple vendor/sub-contractor invoices and payments.',
                                                    'Complicated manual revenue recognition processes.',
                                                ].map((problem, i) => (
                                                    <div key={i} className="relative sm:pl-16 group/item">
                                                        {/* Horizontal branch line */}
                                                        <div className="absolute left-6 top-1/2 w-10 h-0.5 bg-[#123b61]/20 -translate-y-1/2 hidden sm:block group-hover/item:bg-[#123b61]/40 transition-colors duration-300" />
                                                        
                                                        {/* Node Dot on the trunk */}
                                                        <div className="absolute left-[22px] top-1/2 w-2.5 h-2.5 rounded-full bg-white border-[2.5px] border-[#123b61]/40 -translate-y-1/2 hidden sm:block group-hover/item:border-[#123b61] group-hover/item:scale-150 transition-all duration-300 shadow-sm" />

                                                        {/* The Problem Card */}
                                                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 shadow-sm w-full">
                                                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/70 text-[#123b61] shadow-inner group-hover/item:scale-110 transition-transform duration-300 border border-white/60">
                                                                <CheckSquare className="h-3.5 w-3.5" />
                                                            </div>
                                                            <span className="text-[15px] font-medium text-slate-700 leading-relaxed pt-0.5">{problem}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-24 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="mb-12 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                Transformation
                            </span>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                How ERPNext Transforms Your Firm
                            </h2>
                            <p className="brand-subheading mx-auto max-w-3xl text-slate-600">
                                A 360-degree view of your entire business—from pipeline to project delivery and invoicing.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/30 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="container mx-auto max-w-6xl">
                                <div className="grid gap-4 lg:gap-5 md:grid-cols-2">
                                    {[
                                        { title: 'Project Delivery & Operations', icon: Briefcase, points: ['Streamline planning, task management, and task dependencies.', 'Track milestones vs actual progress.', 'Real-time dashboards on project health.', 'Centralized document storage.'] },
                                        { title: 'Resource Management', icon: Database, points: ['Skill-based search and allocation.', 'Utilization rates, capacity, and bench management.', 'Capacity planning across projects.'] },
                                        { title: 'Project Financials & Billing', icon: Settings, points: ['Activity-based costing, timesheets, and direct/indirect expenses.', 'Automated invoicing from timesheets and milestones.', 'Profitability tracking by project, client, or team member.', 'Flexible revenue recognition processes.'] },
                                        { title: 'CRM & Pipeline Management', icon: Search, points: ['360-degree view of client communications.', 'Track leads, opportunities, and pipeline value.', 'Estimate to project conversion workflows.'] },
                                    ].map((mod, i) => (
                                        <div key={i} className="bg-white/50 backdrop-blur-md px-5 lg:px-7 py-8 rounded-[2rem] border border-white/80 shadow-sm hover:bg-white/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                            <div className="relative z-10 w-full flex flex-col items-center">
                                                <div className="p-4 bg-white/60 text-[#123b61] rounded-2xl border border-white/80 inline-flex mb-6 group-hover:bg-[#123b61] group-hover:text-white transition-colors duration-300 shadow-sm">
                                                    <mod.icon className="size-6" />
                                                </div>
                                                <h3 className="mb-5 text-xl font-semibold text-[#123b61]">{mod.title}</h3>
                                                <ul className="space-y-3 text-left w-full">
                                                    {mod.points.map((point, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                                                            <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-[#123b61] shrink-0">
                                                                <CheckSquare className="h-2.5 w-2.5" />
                                                            </span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-24 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Core Modules</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-12">Core ERPNext Modules For Professional Services</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/30 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="container mx-auto max-w-5xl">
                                <div className="bg-white/50 backdrop-blur-md border border-white/80 shadow-sm rounded-[2.5rem] overflow-hidden p-6 sm:p-10 lg:p-12">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                            <thead>
                                                <tr>
                                                    <th className="px-6 py-5 text-xs font-bold tracking-[0.1em] uppercase text-sky-600 border-b-2 border-sky-100/50">Module</th>
                                                    <th className="px-6 py-5 text-xs font-bold tracking-[0.1em] uppercase text-sky-600 border-b-2 border-sky-100/50">Key Capabilities</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-sky-100/30">
                                                {[
                                                    { mod: 'Project & Task Management', cap: 'Gantt charts, dependencies, progress analytics' },
                                                    { mod: 'Time & Expense', cap: 'Mobile entries, approvals, reimbursements' },
                                                    { mod: 'Resource Planning', cap: 'Skills mapping, utilization tracking, forecasting' },
                                                    { mod: 'Billing & Accounting', cap: 'Automated invoicing, revenue recognition, GST compliance' },
                                                    { mod: 'CRM & Pipeline', cap: 'Lead-to-contract workflow, proposals, dashboards' },
                                                    { mod: 'Client Portal', cap: 'Collaboration, file sharing, updates, approvals' },
                                                    { mod: 'HR & Payroll', cap: 'Hiring, onboarding, attendance, payroll' },
                                                    { mod: 'Reporting & Analytics', cap: 'Project margins, utilization, forecasting' },
                                                ].map((row) => (
                                                    <tr key={row.mod} className="group hover:bg-white/60 transition-colors duration-300">
                                                        <td className="px-6 py-6 w-1/3">
                                                            <div className="font-semibold text-base text-[#1a4464] group-hover:text-sky-700 transition-colors">
                                                                {row.mod}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-6 w-2/3">
                                                            <div className="text-sm font-medium text-slate-600 leading-relaxed bg-white/40 group-hover:bg-white/60 p-3 rounded-xl border border-white/50 transition-colors">
                                                                {row.cap}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-24 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Industries</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-12">Industries We Support</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/30 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">
                                {[
                                    'IT & Technology Services / Software',
                                    'Advertising, PR & Marketing Agencies',
                                    'Management & Strategy Consulting',
                                    'Architecture & Engineering Firms',
                                    'Legal & Accounting Practices',
                                    'Research & Development Services',
                                ].map((industry) => (
                                    <div key={industry} className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 hover:bg-white/20 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-300 text-center hover:-translate-y-1 flex items-center justify-center min-h-[108px] group">
                                        <h3 className="text-[#1a4464] font-semibold text-base leading-snug group-hover:text-sky-700 transition-colors">{industry}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-24 bg-transparent border-t border-white/40">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Roadmap</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Professional Services ERP Implementation Roadmap</h2>
                        <p className="mt-6 text-slate-600 max-w-2xl mx-auto brand-subheading">A complete 5-step blueprint to modernize your operations.</p>
                    </div>

                    <div className="w-full mt-12">
                        <div className="bg-white/30 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="grid gap-4 lg:gap-5 md:grid-cols-5 max-w-6xl mx-auto w-full">
                                {[
                                    { phase: 'Discovery', period: 'Week 1-2', note: 'Requirements gathering, process mapping.', icon: Search },
                                    { phase: 'Configuration', period: 'Week 3-4', note: 'Setup projects, billing rules, workflows.', icon: Settings },
                                    { phase: 'Migration', period: 'Week 5', note: 'Import historical projects and client data.', icon: Database },
                                    { phase: 'Training', period: 'Week 6', note: 'Role-based training for PMs, Finance, HR.', icon: MonitorPlay },
                                    { phase: 'Go Live', period: 'Week 7+', note: 'System launch and ongoing hyper-care.', icon: Rocket },
                                ].map((step, i) => (
                                    <div key={step.phase} className="bg-white/10 backdrop-blur-xl border border-white/40 px-4 lg:px-5 py-7 rounded-[2rem] shadow-sm hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                                        <div className="p-4 bg-white/30 text-[#123b61] rounded-2xl border border-white/50 inline-flex mb-5 group-hover:bg-[#123b61] group-hover:text-white transition-colors duration-300 shadow-sm">
                                            <step.icon className="size-6" />
                                        </div>
                                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#123b61] opacity-80 mb-2">{step.period}</p>
                                        <h3 className="text-lg font-semibold text-[#123b61]">{step.phase}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-24 pb-24 bg-transparent border-t border-white/40">
                    <div className="w-full">
                        <div className="px-4 sm:px-8 lg:px-12 text-center">
                            <div className="p-10 sm:p-14 max-w-4xl mx-auto">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Results</span>
                                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Ready To Modernize Your Professional Services Business?
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                                    Connect planning, resources, and profitability in one operating system built for growth.
                                </p>

                                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                                    <Button className="bg-[#00477b] hover:bg-[#003355] text-white h-14 rounded-full px-8 text-base shadow-md transition-all">
                                        Request A Consultation
                                    </Button>
                                    <Button className="bg-white text-[#00477b] border border-[#00477b]/20 hover:bg-zinc-50 h-14 rounded-full px-8 text-base shadow-sm transition-all">
                                        Talk To An Expert
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
