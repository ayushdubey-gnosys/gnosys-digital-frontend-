import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckSquare, Search, Settings, Database, MonitorPlay, Rocket, Briefcase } from 'lucide-react';
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

            {/* Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-100/60 via-purple-50/50 to-pink-100/60 pointer-events-none"></div>

            <div className="w-full">
                <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                            style={{ backgroundImage: "url('/assets/erp-professi.webp')", backgroundColor: '#020b18' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none lg:w-1/2" />
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
                                    <span className="relative z-10 flex items-center gap-2">Book Free Services Operations Assessment <span className="text-xl">&rarr;</span></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                            </ScrollReveal>
                        </div>
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
                            Most growing service companies struggle with scattered systems and manual workflows that make profitability unpredictable.
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
                                                    'Lost billable hours due to manual timesheets',
                                                    'No real-time visibility into project progress or margins',
                                                    'Inefficient resource allocation and capacity planning',
                                                    'Delayed invoicing impacting cash flow',
                                                    'Poor pipeline forecasting and revenue unpredictability',
                                                    'Communication silos between sales, delivery, finance, and clients',
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
                                A connected ecosystem that supports the full project lifecycle, from proposal to invoice.
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/30 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-8 lg:px-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                            <div className="container mx-auto max-w-6xl">
                                <div className="grid gap-4 lg:gap-5 md:grid-cols-2">
                                    {[
                                        { 
                                            title: 'Project Delivery & Operations', 
                                            icon: Briefcase, 
                                            points: [
                                                'Project planning with milestones and task dependencies',
                                                'Real-time time and expense tracking',
                                                'Task-level profitability and burn rate tracking',
                                                'Automated milestone alerts and progress reporting'
                                            ] 
                                        },
                                        { 
                                            title: 'Resource Management', 
                                            icon: Database, 
                                            points: [
                                                'Skill and availability-based allocation',
                                                'Utilization analytics by team, project, and individual',
                                                'Capacity planning and bench management',
                                                'Forecast hiring needs based on pipeline'
                                            ] 
                                        },
                                        { 
                                            title: 'Financial Control & Billing', 
                                            icon: Settings, 
                                            points: [
                                                'Time & materials, milestone, retainer, or fixed fee billing',
                                                'Automated invoicing from approved timesheets',
                                                'Revenue recognition and project margin analysis',
                                                'Direct integration with general ledger and accounts'
                                            ] 
                                        },
                                        { 
                                            title: 'CRM & Business Development', 
                                            icon: Search, 
                                            points: [
                                                'Pipeline visibility with win probabilities',
                                                'Proposal and quote generation templates',
                                                'Full history of interactions and client health scores',
                                                'Seamless transition from won deal to active project'
                                            ] 
                                        },
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

                {/* 4. Core Modules */}
                <section className="py-24 bg-transparent text-center relative z-10 border-t border-white/40">
                    <div className="w-full px-4 mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Core Modules</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">Core ERPNext Modules For Professional Services</h2>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                            <div className="bg-white rounded-[2rem] border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden p-6 sm:p-10 lg:p-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-blue-100/60">
                                                <th className="px-6 py-5 text-xs font-bold tracking-wider uppercase text-[#00477b]">Module</th>
                                                <th className="px-6 py-5 text-xs font-bold tracking-wider uppercase text-[#00477b]">Key Capabilities</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-blue-50">
                                            {[
                                                { mod: 'Project & Task Management', cap: 'Gantt charts, task dependencies, progress analytics, milestone tracking' },
                                                { mod: 'Time & Expense', cap: 'Mobile timesheets, automated approvals, multi-currency reimbursements' },
                                                { mod: 'Resource Planning', cap: 'Skills mapping, team utilization tracking, bench management & capacity forecasting' },
                                                { mod: 'Billing & Accounting', cap: 'Automated invoicing, milestone billing, revenue recognition, GST compliance' },
                                                { mod: 'CRM & Pipeline', cap: 'Lead-to-contract workflow, proposal generation, win-probability dashboards' },
                                                { mod: 'Client Portal', cap: 'Transparent client collaboration, deliverable sharing, live progress updates, approvals' },
                                                { mod: 'HR & Payroll', cap: 'Talent hiring, onboarding, leaves, attendance, automated multi-tier payroll' },
                                                { mod: 'Reporting & Analytics', cap: 'Real-time project margins, client profitability, utilization rates, cash-flow forecasting' },
                                            ].map((row, idx) => (
                                                <tr key={idx} className="group hover:bg-blue-50/40 transition-colors duration-200">
                                                    <td className="px-6 py-5 font-bold text-sm md:text-base text-[#00477b] w-1/3">
                                                        {row.mod}
                                                    </td>
                                                    <td className="px-6 py-5 text-sm text-zinc-600 font-medium w-2/3">
                                                        <span className="inline-block bg-blue-50/60 p-2.5 px-4 rounded-xl border border-blue-100/50 w-full group-hover:bg-white transition-colors shadow-xs">
                                                            {row.cap}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Industries We Support */}
                <section className="py-24 bg-transparent text-center relative z-10 border-t border-white/40">
                    <div className="w-full px-4 mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Industries</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">Industries We Support</h2>
                        <p className="text-zinc-600 text-sm font-medium max-w-2xl mx-auto">
                            Tailored ERP workflows designed for billable and knowledge-driven organizations.
                        </p>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                                {[
                                    { title: 'IT Services and Software Development', desc: 'Sprints, agile task management, developer timesheets & retainer billing.' },
                                    { title: 'Marketing & Creative Agencies', desc: 'Campaign tracking, creative asset reviews, freelance expense management.' },
                                    { title: 'Management and Strategy Consulting', desc: 'Milestone billing, partner utilization, strategic advisory deliverables.' },
                                    { title: 'Accounting and Legal Firms', desc: 'Matter management, trust accounting, compliance & billable hour tracking.' },
                                    { title: 'Engineering & Technical Services', desc: 'Project budgets, site visits, technical documentation & vendor billing.' },
                                    { title: 'Training and Certification Providers', desc: 'Batch scheduling, trainer allocations, student certification & course invoicing.' },
                                ].map((industry, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 text-left hover:-translate-y-2 flex flex-col group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="p-3 bg-blue-50/50 rounded-2xl mb-5 border border-blue-100/50 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300 self-start">
                                            <Briefcase className="size-6 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-[#00477b] font-bold text-lg mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{industry.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed font-medium">{industry.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Implementation Roadmap */}
                <section className="py-24 bg-transparent text-center overflow-hidden relative z-10 border-t border-white/40">
                    <div className="w-full px-2 sm:px-4 lg:px-6 mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Roadmap</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">Professional Services ERP Implementation Roadmap</h2>
                        <p className="text-zinc-600 text-sm font-medium">5-step plan for quick deployment and smooth operations</p>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8 relative z-10">
                                {[
                                    { step: "01", week: "Week 1", title: "Requirement Discovery", desc: "Analyze workflows, gather requirements, and map processes.", icon: <Search className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                    { step: "02", week: "Week 2", title: "System Configuration", desc: "Set up templates, roles, permissions, and dashboards.", icon: <Settings className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                    { step: "03", week: "Week 3", title: "Data Migration", desc: "Import client, project, and resource data.", icon: <Database className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                    { step: "04", week: "Week 4", title: "Testing & Validation", desc: "Conduct user acceptance testing and validate workflows.", icon: <MonitorPlay className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> },
                                    { step: "05", week: "Week 5", title: "Training & Go-Live", desc: "Train teams, launch the system, and optimize operations.", icon: <Rocket className="size-6 text-[#00477b] group-hover:text-blue-500 transition-colors" /> }
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

                {/* Why Choose Gnosys Digital */}
                <section className="py-20 bg-transparent relative z-10 border-b border-[#e2e8f0]/50">
                    <div className="container mx-auto px-4 max-w-6xl text-center mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            Why Choose Gnosys Digital
                        </h2>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    "45+ successful ERP implementations for services firms",
                                    "Expertise in billable hour-based business models",
                                    "Rapid deployment framework",
                                    "Transparent pricing and measurable ROI"
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

                {/* Pricing and Contact Form Combined */}
                <section className="py-24 bg-transparent relative z-10">
                    <div className="w-full px-4 lg:px-6 2xl:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                            {/* Left Side: Pricing */}
                            <div className="lg:col-span-5 text-center lg:text-left flex flex-col">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 self-center lg:self-start">
                                    PRICING & PACKAGES
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-8">
                                    Services ERP Package
                                </h2>

                                <div className="flex flex-col border border-white/80 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden bg-white/40 backdrop-blur-xl h-full relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                    <div className="p-8 sm:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden border-b border-white/60">
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 relative z-10">Starting At</h3>

                                        <div className="flex items-baseline justify-center gap-1 mb-4 relative z-10">
                                            <span className="text-3xl font-bold text-[#00477b] mt-2">₹</span>
                                            <p className="text-6xl font-extrabold text-[#00477b] tracking-tight drop-shadow-sm">1,25,000</p>
                                        </div>
                                    </div>

                                    <div className="p-6 sm:p-8 text-left flex-1 flex flex-col justify-center relative z-10">
                                        <p className="text-xs text-zinc-600 font-semibold mb-4 italic">
                                            Includes project management, billing, CRM, resource scheduling, and training.
                                        </p>

                                        <h4 className="font-bold text-zinc-400 mb-4 uppercase tracking-widest text-xs flex items-center gap-3">
                                            <div className="h-px bg-zinc-300 flex-1"></div>
                                            Limited-time offer:
                                            <div className="h-px bg-zinc-300 flex-1"></div>
                                        </h4>

                                        <ul className="space-y-3">
                                            {[
                                                "Free mobile time-tracking setup",
                                                "Free client portal configuration",
                                                "3 Months Extended Support",
                                                "2 custom report development"
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700 font-medium bg-white/50 hover:bg-white/80 transition-colors duration-300 p-2.5 rounded-xl border border-white shadow-sm">
                                                    <div className="bg-blue-50/50 p-1 rounded-md text-[#3b82f6] shrink-0 border border-blue-100/50">
                                                        <CheckSquare className="size-3.5" />
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
                                <div className="bg-gradient-to-bl from-white/70 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 h-full">
                                    <div className="text-center lg:text-left mb-10">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                            GET STARTED
                                        </span>
                                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-normal tracking-tight text-[#00477b] mb-4">
                                            Tell Us About Your Business
                                        </h2>
                                    </div>

                                    <form className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Full Name</Label>
                                            <Input id="fullName" placeholder="Enter your full name" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Email Address</Label>
                                            <Input id="email" type="email" placeholder="Enter your Email" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Phone Number</Label>
                                            <Input id="phone" placeholder="Enter your Contact number" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="companyName" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Company Name</Label>
                                            <Input id="companyName" placeholder="Enter your Company name" className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 shadow-sm transition-all duration-300 px-4 text-sm font-medium" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="teamSize" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Team Size</Label>
                                                <select id="teamSize" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                                    <option value="" className="bg-white">Select Team Size</option>
                                                    <option value="1-10" className="bg-white">1–10 employees</option>
                                                    <option value="11-50" className="bg-white">11–50 employees</option>
                                                    <option value="51-200" className="bg-white">51–200 employees</option>
                                                    <option value="200+" className="bg-white">200+ employees</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="primaryServices" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Primary Services Offered</Label>
                                                <select id="primaryServices" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                                    <option value="" className="bg-white">Select Primary Services Offered</option>
                                                    <option value="IT & Software" className="bg-white">IT Services and Software Development</option>
                                                    <option value="Marketing & Creative" className="bg-white">Marketing & Creative Agencies</option>
                                                    <option value="Management Consulting" className="bg-white">Management and Strategy Consulting</option>
                                                    <option value="Accounting & Legal" className="bg-white">Accounting and Legal Firms</option>
                                                    <option value="Engineering & Technical" className="bg-white">Engineering & Technical Services</option>
                                                    <option value="Training & Certification" className="bg-white">Training and Certification Providers</option>
                                                    <option value="Other" className="bg-white">Other Services</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Current Challenges</Label>
                                            <div className="grid sm:grid-cols-2 gap-2 bg-white/70 p-4 rounded-2xl border border-white shadow-sm">
                                                {[
                                                    "Lost billable hours due to manual timesheets",
                                                    "No real-time visibility into project progress or margins",
                                                    "Inefficient resource allocation and capacity planning",
                                                    "Delayed invoicing is impacting cash flow",
                                                    "Poor pipeline forecasting and revenue unpredictability",
                                                    "Communication silos between sales, delivery, finance, and clients",
                                                    "Difficulty tracking project profitability",
                                                    "Limited client collaboration and transparency",
                                                    "Other"
                                                ].map((challenge, cIdx) => {
                                                    const isChecked = selectedChallenges.includes(challenge);
                                                    return (
                                                        <div
                                                            key={cIdx}
                                                            onClick={() => toggleChallenge(challenge)}
                                                            className="flex items-start gap-2.5 text-xs font-medium text-zinc-700 cursor-pointer hover:text-[#00477b] transition-colors p-1.5 rounded-lg hover:bg-white/80 select-none"
                                                        >
                                                            <div className={`mt-0.5 size-4 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${isChecked ? 'bg-[#00477b] border-[#00477b] text-white shadow-xs' : 'bg-white border-zinc-400 hover:border-[#00477b]'}`}>
                                                                {isChecked && (
                                                                    <svg className="size-3 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                            <span className="leading-snug">{challenge}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700 uppercase tracking-wider ml-1">Preferred Contact Method</Label>
                                            <select id="contactMethod" className="w-full h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:border-[#00477b]/50 text-zinc-700">
                                                <option value="" className="bg-white">Choose an Option</option>
                                                <option value="Email" className="bg-white">Email</option>
                                                <option value="Phone" className="bg-white">Phone Call</option>
                                                <option value="WhatsApp" className="bg-white">WhatsApp</option>
                                            </select>
                                        </div>

                                        <div className="pt-4">
                                            <Button type="button" className="w-full md:w-auto bg-[#00477b] hover:bg-[#003355] text-white px-10 py-6 rounded-xl font-bold text-base shadow-lg shadow-blue-900/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
                                                Request Free Assessment
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
