import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { CheckSquare, Search, Settings, Database, MonitorPlay, Rocket, Briefcase } from 'lucide-react';

export default function ErpnextProfessionalServices() {
    return (
        <MainLayout>
            <Head title="ERPNext For Professional Services" />

            <div className="brand-shell">
                <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden pb-20 pt-20 text-center">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/erp-professi.webp')" }} />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#071a2b]/85 via-[#0b2038]/65 to-[#0b2038]/20" />
                    </div>

                    <div className="container-brand relative z-10 max-w-5xl">
                        <h1 className="mb-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                            A Unified System To Manage <span className="text-blue-300">Projects, People, And Profitability</span>
                        </h1>

                        <p className="mx-auto mb-10 max-w-3xl text-lg text-blue-50/90 sm:text-xl">
                            Connect project planning, resource allocation, and financials on one platform so you can focus on delivering value.
                        </p>

                        <Button className="brand-button h-14 rounded-full bg-white px-8 text-base text-[#0b1f35] hover:bg-slate-100">
                            Request A Consultation
                        </Button>
                    </div>
                </section>

                <section className="section-brand py-20 sm:py-24">
                    <div className="container-brand max-w-4xl text-center">
                        <span className="brand-badge mb-6">Challenges</span>
                        <h2 className="brand-heading mb-4">Challenges Faced By Professional Services Firms</h2>
                        <p className="brand-subheading mx-auto mb-12 max-w-2xl">
                            When your primary asset is time, disconnected systems drain profitability and cause client dissatisfaction.
                        </p>

                        <div className="brand-card relative overflow-hidden p-8 text-left sm:p-10">
                            <div className="absolute -inset-x-20 -top-20 h-40 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-[#123b61]">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600">
                                        <Briefcase className="h-5 w-5" />
                                    </span>
                                    Common Problems
                                </h3>

                                <ul className="space-y-4">
                                    {[
                                        'Unpredictable resource availability and bench time.',
                                        'Disconnected time tracking leading to delayed billing.',
                                        'Difficulty tracking project profitability and cost overruns.',
                                        'Sales pipelines not integrated with project delivery.',
                                        'Managing multiple vendor/sub-contractor invoices and payments.',
                                        'Complicated manual revenue recognition processes.',
                                    ].map((problem, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                                                <CheckSquare className="h-3.5 w-3.5" />
                                            </span>
                                            <span className="text-sm leading-relaxed sm:text-base">{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-brand py-20 sm:py-24">
                    <div className="container-brand max-w-6xl">
                        <div className="mb-12 text-center">
                            <span className="brand-badge mb-6">Transformation</span>
                            <h2 className="brand-heading mb-4">How ERPNext Transforms Your Firm</h2>
                            <p className="brand-subheading mx-auto max-w-3xl">
                                A 360-degree view of your entire business—from pipeline to project delivery and invoicing.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {[
                                { title: 'Project Delivery & Operations', points: ['Streamline planning, task management, and task dependencies.', 'Track milestones vs actual progress.', 'Real-time dashboards on project health.', 'Centralized document storage.'] },
                                { title: 'Resource Management', points: ['Skill-based search and allocation.', 'Utilization rates, capacity, and bench management.', 'Capacity planning across projects.'] },
                                { title: 'Project Financials & Billing', points: ['Activity-based costing, timesheets, and direct/indirect expenses.', 'Automated invoicing from timesheets and milestones.', 'Profitability tracking by project, client, or team member.', 'Flexible revenue recognition processes.'] },
                                { title: 'CRM & Pipeline Management', points: ['360-degree view of client communications.', 'Track leads, opportunities, and pipeline value.', 'Estimate to project conversion workflows.'] },
                            ].map((mod, i) => (
                                <div key={i} className="brand-card border-l-4 border-l-blue-500 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
                                    <h3 className="mb-5 text-xl font-semibold text-[#123b61]">{mod.title}</h3>
                                    <ul className="space-y-3">
                                        {mod.points.map((point, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                                                <span className="mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                                                    <CheckSquare className="h-2.5 w-2.5" />
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-brand py-20 sm:py-24">
                    <div className="container-brand max-w-5xl text-center">
                        <span className="brand-badge mb-6">Core Modules</span>
                        <h2 className="brand-heading mb-12">Core ERPNext Modules For Professional Services</h2>

                        <div className="brand-card overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 text-[#123b61]">
                                        <th className="px-6 py-4 text-sm font-semibold">Module</th>
                                        <th className="border-l border-slate-200 px-6 py-4 text-sm font-semibold">Key Capabilities</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
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
                                        <tr key={row.mod} className="bg-white/60 hover:bg-slate-50/80">
                                            <td className="px-6 py-4 text-sm font-semibold text-[#123b61]">{row.mod}</td>
                                            <td className="border-l border-slate-200 px-6 py-4 text-sm text-slate-600">{row.cap}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="section-brand py-20 sm:py-24">
                    <div className="container-brand max-w-6xl text-center">
                        <span className="brand-badge mb-6">Industries</span>
                        <h2 className="brand-heading mb-12">Industries We Support</h2>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                'IT & Technology Services / Software',
                                'Advertising, PR & Marketing Agencies',
                                'Management & Strategy Consulting',
                                'Architecture & Engineering Firms',
                                'Legal & Accounting Practices',
                                'Research & Development Services',
                            ].map((industry) => (
                                <div key={industry} className="brand-card flex min-h-[108px] items-center justify-center p-6 text-center">
                                    <h3 className="text-sm font-semibold leading-snug text-[#123b61] sm:text-base">{industry}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-brand py-20 sm:py-24">
                    <div className="container-brand max-w-6xl text-center">
                        <span className="brand-badge mb-6">Roadmap</span>
                        <h2 className="brand-heading mb-4">Professional Services ERP Implementation Roadmap</h2>
                        <p className="brand-subheading mx-auto mb-12 max-w-2xl">A complete 5-step blueprint to modernize your operations.</p>

                        <div className="grid gap-6 md:grid-cols-5">
                            {[
                                { phase: 'Discovery', period: 'Week 1-2', note: 'Requirements gathering, process mapping.', icon: Search },
                                { phase: 'Configuration', period: 'Week 3-4', note: 'Setup projects, billing rules, workflows.', icon: Settings },
                                { phase: 'Migration', period: 'Week 5', note: 'Import historical projects and client data.', icon: Database },
                                { phase: 'Training', period: 'Week 6', note: 'Role-based training for PMs, Finance, HR.', icon: MonitorPlay },
                                { phase: 'Go Live', period: 'Week 7+', note: 'System launch and ongoing hyper-care.', icon: Rocket },
                            ].map((step, i) => (
                                <div key={step.phase} className="brand-card flex flex-col items-center p-6 text-center">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1f35] text-white shadow-lg shadow-[#0b1f35]/15">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-600">{step.period}</p>
                                    <h3 className="mt-3 text-lg font-semibold text-[#123b61]">{step.phase}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-brand pb-24 sm:pb-28">
                    <div className="container-brand max-w-4xl text-center">
                        <div className="brand-card bg-[#0b1f35] p-10 text-white shadow-[0_24px_60px_rgba(11,31,53,0.18)] sm:p-14">
                            <span className="brand-badge border-white/10 bg-white/10 text-white">Results</span>
                            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                                Ready To Modernize Your Professional Services Business?
                            </h2>
                            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                                Connect planning, resources, and profitability in one operating system built for growth.
                            </p>

                            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                                <Button className="brand-button h-14 rounded-full bg-white px-8 text-base text-[#0b1f35] hover:bg-slate-100">
                                    Request A Consultation
                                </Button>
                                <Button className="brand-button-secondary h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10">
                                    Talk To An Expert
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}

                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                            Proven Business Outcomes
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "15%+ Improvement in billable utilization",
                                "20% Increase in overall project profitability",
                                "100% Accurate invoicing and billing",
                                "Reduced bench time and optimized resource allocation",
                                "Improved cash flow with faster invoice generation"
                            ].map((outcome, i) => (
                                <div key={i} className="bg-white/60 border border-white/50 text-blue-700 font-semibold text-sm px-6 py-4 rounded-full shadow-sm hover:bg-white/80 transition-colors backdrop-blur-md">
                                    {outcome}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Success Snapshot */}
                <section className="py-24 bg-white/40 backdrop-blur-md border-y border-white/50 text-[#1e3a8a] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a] via-transparent to-transparent bg-[size:20px_20px]"></div>

                    <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                        <h2 className="text-3xl font-bold mb-16">
                            Success Snapshot
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/50 text-left">
                            <div className="pb-8 md:pb-0 md:px-8">
                                <h3 className="text-xl font-bold mb-2">IT Consulting Firm</h3>
                                <p className="text-xs text-blue-700 font-bold mb-6 uppercase tracking-wider">Bengaluru</p>
                                <p className="text-base text-slate-700 leading-relaxed font-medium">Increased billable utilization by 18% and reduced invoice generation time from 5 days to 4 hours.</p>
                            </div>
                            <div className="pt-8 md:pt-0 md:px-8">
                                <h3 className="text-xl font-bold mb-2">Digital Agency</h3>
                                <p className="text-xs text-blue-700 font-bold mb-6 uppercase tracking-wider">Delhi</p>
                                <p className="text-base text-slate-700 leading-relaxed font-medium">Scaled operations across 4 cities with 1 unified system. Improved profitability on fixed-price projects by 22%.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Services ERP Package */}
                <section className="py-24 bg-transparent text-center border-b border-white/50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                            Services ERP Package
                        </h2>

                        <div className="flex flex-col md:flex-row border border-white/50 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto backdrop-blur-md">
                            <div className="md:w-1/3 bg-white/40 p-10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-white/50">
                                <h3 className="text-lg font-bold text-slate-600 mb-2">Starting At</h3>
                                <p className="text-4xl font-bold text-[#1e3a8a]">₹1,25,000</p>
                            </div>
                            <div className="md:w-2/3 p-10 text-left bg-white/60">
                                <p className="font-bold text-blue-700 text-sm mb-6 bg-blue-100 inline-block px-4 py-2 rounded-sm border border-blue-200">
                                    Includes core professional services modules (Projects, CRM, HR, Timesheets, Billing, Accounting)
                                </p>

                                <h4 className="font-bold text-[#1e3a8a] mb-4 uppercase tracking-wider text-xs">Included in this package:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                        <CheckSquare className="size-4 text-blue-600 mt-0.5 shrink-0" />
                                        Up to 50 users (can scale up easily with open-source licensing)
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                        <CheckSquare className="size-4 text-blue-600 mt-0.5 shrink-0" />
                                        Standard implementation support
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                        <CheckSquare className="size-4 text-blue-600 mt-0.5 shrink-0" />
                                        Extensive reporting and dashboards
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Why Choose Gnosys Digital */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                            Why Choose Gnosys Digital
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "15+ years experience implementing ERPs",
                                "Deep understanding of services business models",
                                "Agile implementation methodology",
                                "Comprehensive training & post-launch support"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 border border-white/50 p-6 rounded-xl shadow-sm flex items-center justify-center min-h-[100px] backdrop-blur-md">
                                    <p className="text-sm font-bold text-[#1e3a8a]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. Contact Form */}
                <section className="py-24 bg-transparent">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="border border-white/50 bg-white/60 rounded-xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] backdrop-blur-md">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">
                                    Tell Us About Your Business
                                </h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName" className="text-xs font-bold text-slate-700">Full Name</Label>
                                        <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-sm border-white/50 bg-white/80 text-slate-900 placeholder-slate-400 focus:bg-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-xs font-bold text-slate-700">Email Address</Label>
                                        <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-sm border-white/50 bg-white/80 text-slate-900 placeholder-slate-400 focus:bg-white" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-xs font-bold text-slate-700">Phone Number</Label>
                                        <Input id="phone" placeholder="Enter your phone number" className="h-11 rounded-sm border-white/50 bg-white/80 text-slate-900 placeholder-slate-400 focus:bg-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="companyName" className="text-xs font-bold text-slate-700">Company Name</Label>
                                        <Input id="companyName" placeholder="Enter your company name" className="h-11 rounded-sm border-white/50 bg-white/80 text-slate-900 placeholder-slate-400 focus:bg-white" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="teamSize" className="text-xs font-bold text-slate-700">Team Size</Label>
                                        <select id="teamSize" className="w-full h-11 rounded-sm border border-white/50 bg-white/80 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white">
                                            <option>Select Team Size</option>
                                            <option>1-10</option>
                                            <option>11-50</option>
                                            <option>51-200</option>
                                            <option>200+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="primaryService" className="text-xs font-bold text-slate-700">Primary Service Offered</Label>
                                        <select id="primaryService" className="w-full h-11 rounded-sm border border-white/50 bg-white/80 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white">
                                            <option>Select Primary Service</option>
                                            <option>IT Consulting</option>
                                            <option>Marketing Agency</option>
                                            <option>Engineering / Architecture</option>
                                            <option>Legal / Accounting</option>
                                            <option>Management Consulting</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Label className="text-xs font-bold text-slate-700">Current Challenges</Label>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {[
                                            "Time tracking / Timesheets",
                                            "Resource allocation & utilization",
                                            "Project profitability tracking",
                                            "Invoicing & billing delays",
                                            "Disconnected systems",
                                            "Other"
                                        ].map((challenge, i) => (
                                            <label key={i} className="flex items-start gap-2 cursor-pointer">
                                                <input type="checkbox" className="mt-1 rounded text-blue-600 focus:ring-blue-500 border-slate-300 bg-white" />
                                                <span className="text-xs font-medium text-slate-700">{challenge}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <Label htmlFor="contactMethod" className="text-xs font-bold text-slate-700">Preferred Contact Method</Label>
                                    <select id="contactMethod" className="w-full h-11 rounded-sm border border-white/50 bg-white/80 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white">
                                        <option>Choose an option</option>
                                        <option>Email</option>
                                        <option>Phone Call</option>
                                    </select>
                                </div>

                                <div className="pt-6 text-center">
                                    <Button className="bg-blue-600 text-white hover:bg-blue-700 px-12 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                        Request Consultation
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* 12. Final CTA */}
                <section className="py-24 bg-transparent text-center border-t border-white/50">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-10">
                            Ready To Transform?
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 font-bold shadow-md rounded-sm">
                                Book Assessment
                            </Button>
                            <Button className="bg-white/60 text-[#1e3a8a] border border-white/50 hover:bg-white/80 h-12 px-8 font-bold shadow-sm rounded-sm">
                                Talk To An Expert
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
