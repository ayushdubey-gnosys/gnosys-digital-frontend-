import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    CheckSquare, TrendingUp, Search, Settings, 
    Database, MonitorPlay, Rocket, ArrowUp, Briefcase
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextProfessionalServices() {
    return (
        <MainLayout>
            <Head title="ERPNext For Professional Services" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh] bg-[#111827]">
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30 flex justify-around items-end pb-10">
                    {/* Abstract Arrow Shapes for Background */}
                    {[...Array(8)].map((_, i) => (
                        <ArrowUp key={i} className={`size-${Math.floor(Math.random() * 32) + 32} text-[#3b82f6] opacity-${Math.floor(Math.random() * 40) + 10} transform -translate-y-${Math.floor(Math.random() * 20) * 4}`} />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-[#111827]/50"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                        A Unified System To Manage Projects, People, And Profitability
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
                        Connect project planning, resource allocation, and financials on one platform so you can focus on delivering value.
                    </p>
                    <Button className="bg-white text-[#1e3a8a] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Request A Consultation
                    </Button>
                </div>
            </section>

            {/* 2. Challenges Faced By Professional Services Firms */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                        Challenges Faced By Professional Services Firms
                    </h2>
                    <p className="text-zinc-600 mb-10 text-sm font-medium">
                        When your primary asset is time, disconnected systems drain profitability and cause client dissatisfaction.
                    </p>
                    
                    <div className="bg-white p-10 rounded-sm shadow-md border border-[#e2e8f0] text-left">
                        <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
                            <Briefcase className="size-6 text-[#3b82f6]" /> Common Problems:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Unpredictable resource availability and bench time.",
                                "Disconnected time tracking leading to delayed billing.",
                                "Difficulty tracking project profitability and cost overruns.",
                                "Sales pipelines not integrated with project delivery.",
                                "Managing multiple vendor/sub-contractor invoices and payments.",
                                "Complicated manual revenue recognition processes."
                            ].map((prob, i) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-700 font-medium">
                                    <div className="bg-[#eff6ff] rounded-sm p-1 mt-0.5 shrink-0 text-[#2563eb]">
                                        <CheckSquare className="size-4" />
                                    </div>
                                    <span>{prob}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. How ERPNext Transforms Your Firm */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                            How ERPNext Transforms Your Firm
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
                            A 360-degree view of your entire business—from pipeline to project delivery and invoicing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "Project Delivery & Operations", points: ["Streamline planning, task management, and task dependencies.", "Track milestones vs actual progress.", "Real-time dashboards on project health.", "Centralized document storage."] },
                            { title: "Resource Management", points: ["Skill-based search and allocation.", "Utilization rates, capacity, and bench management.", "Capacity planning across projects."] },
                            { title: "Project Financials & Billing", points: ["Activity-based costing, timesheets, and direct/indirect expenses.", "Automated invoicing from timesheets and milestones.", "Profitability tracking by project, client, or team member.", "Flexible revenue recognition processes."] },
                            { title: "CRM & Pipeline Management", points: ["360-degree view of client communications.", "Track leads, opportunities, and pipeline value.", "Estimate to project conversion workflows."] }
                        ].map((mod, i) => (
                            <div key={i} className="bg-[#1e3a8a] rounded-sm p-8 shadow-md text-white border-l-4 border-[#3b82f6]">
                                <h3 className="text-xl font-bold mb-5">{mod.title}</h3>
                                <ul className="space-y-3">
                                    {mod.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-blue-50/90 leading-relaxed">
                                            <div className="bg-white/10 rounded-sm p-0.5 mt-0.5 shrink-0">
                                                <CheckSquare className="size-3 text-[#93c5fd]" />
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
            
            {/* 4. Core ERPNext Modules For Professional Services */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                        Core ERPNext Modules For Professional Services
                    </h2>
                    
                    <div className="overflow-x-auto bg-white shadow-md border border-[#e2e8f0] rounded-sm">
                        <table className="w-full text-sm sm:text-base border-collapse text-left">
                            <thead className="bg-[#034d80] text-white">
                                <tr>
                                    <th className="py-4 px-6 font-bold text-left w-1/3 border-r border-white/20">Module</th>
                                    <th className="py-4 px-6 font-bold text-left w-2/3">Key Capabilities</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 border-x border-b border-gray-200">
                                {[
                                    { mod: "Project & Task Management", cap: "Gantt charts, dependencies, progress analytics" },
                                    { mod: "Time & Expense", cap: "Mobile entries, approvals, reimbursements" },
                                    { mod: "Resource Planning", cap: "Skills mapping, utilization tracking, forecasting" },
                                    { mod: "Billing & Accounting", cap: "Automated invoicing, revenue recognition, GST compliance" },
                                    { mod: "CRM & Pipeline", cap: "Lead-to-contract workflow, proposals, dashboards" },
                                    { mod: "Client Portal", cap: "Collaboration, file sharing, updates, approvals" },
                                    { mod: "HR & Payroll", cap: "Hiring, onboarding, attendance, payrol" },
                                    { mod: "Reporting & Analytics", cap: "Project margins, utilization, forecasting" }
                                ].map((row, i) => (
                                    <tr key={i} className="bg-white hover:bg-slate-50">
                                        <td className="py-4 px-6 text-sm text-zinc-800 border-r border-gray-200">{row.mod}</td>
                                        <td className="py-4 px-6 text-sm text-zinc-800">{row.cap}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5. Industries We Support */}
            <section className="py-20 bg-white text-center border-b border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                        Industries We Support
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "IT & Technology Services / Software",
                            "Advertising, PR & Marketing Agencies",
                            "Management & Strategy Consulting",
                            "Architecture & Engineering Firms",
                            "Legal & Accounting Practices",
                            "Research & Development Services"
                        ].map((ind, i) => (
                            <div key={i} className="bg-white rounded-sm p-6 shadow-sm border border-[#e2e8f0] flex items-center justify-center min-h-[100px]">
                                <h3 className="text-[#2563eb] font-bold text-sm leading-snug">{ind}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Professional Services ERP Implementation Roadmap */}
            <section className="py-24 bg-[#f8fafc] text-center overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                        Professional Services ERP Implementation Roadmap
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16">
                        A complete 5-Step blueprint to modernize your operations.
                    </p>
                    
                    {/* Custom Timeline Layout */}
                    <div className="relative max-w-5xl mx-auto py-10">
                        {/* Horizontal Line */}
                        <div className="hidden md:block absolute top-[50%] left-0 w-full h-3 bg-zinc-300 rounded-full border-t-2 border-dashed border-zinc-500 z-0"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a8a] text-sm">Week 1-2</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Discovery</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Requirements gathering, process mapping.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#1e40af] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Search className="size-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a8a] text-sm">Week 3-4</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Configuration</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Setup projects, billing rules, workflows.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#4338ca] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <Settings className="size-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a8a] text-sm">Week 5</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Migration</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Import historical projects and client data.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0369a1] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Database className="size-6" />
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a8a] text-sm">Week 6</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Training</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Role-based training for PMs, Finance, HR.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#059669] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <MonitorPlay className="size-6" />
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a8a] text-sm">Week 7+</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Go Live</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">System launch and ongoing hyper-care.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0f766e] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Rocket className="size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Proven Business Outcomes */}
            <section className="py-20 bg-white">
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
                            <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] text-[#0284c7] font-semibold text-sm px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-shadow">
                                {outcome}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Success Snapshot */}
            <section className="py-24 bg-[#1e3a8a] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:20px_20px]"></div>
                
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Snapshot
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20 text-left">
                        <div className="pb-8 md:pb-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">IT Consulting Firm</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Bengaluru</p>
                            <p className="text-base text-blue-50/90 leading-relaxed font-medium">Increased billable utilization by 18% and reduced invoice generation time from 5 days to 4 hours.</p>
                        </div>
                        <div className="pt-8 md:pt-0 md:px-8">
                            <h3 className="text-xl font-bold mb-2">Digital Agency</h3>
                            <p className="text-xs text-blue-300 font-bold mb-6 uppercase tracking-wider">Delhi</p>
                            <p className="text-base text-blue-50/90 leading-relaxed font-medium">Scaled operations across 4 cities with 1 unified system. Improved profitability on fixed-price projects by 22%.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Services ERP Package */}
            <section className="py-24 bg-white text-center border-b border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                        Services ERP Package
                    </h2>
                    
                    <div className="flex flex-col md:flex-row border border-[#e0eaf5] rounded-sm shadow-lg overflow-hidden max-w-4xl mx-auto">
                        <div className="md:w-1/3 bg-[#f8fafc] p-10 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#e0eaf5]">
                            <h3 className="text-lg font-bold text-zinc-600 mb-2">Starting At</h3>
                            <p className="text-4xl font-bold text-[#1e3a8a]">₹1,25,000</p>
                        </div>
                        <div className="md:w-2/3 p-10 text-left bg-white">
                            <p className="font-bold text-[#0284c7] text-sm mb-6 bg-[#f0f9ff] inline-block px-4 py-2 rounded-sm border border-[#bae6fd]">
                                Includes core professional services modules (Projects, CRM, HR, Timesheets, Billing, Accounting)
                            </p>
                            
                            <h4 className="font-bold text-[#1e3a8a] mb-4 uppercase tracking-wider text-xs">Included in this package:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    Up to 50 users (can scale up easily with open-source licensing)
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    Standard implementation support
                                </li>
                                <li className="flex items-start gap-2 text-sm text-zinc-700 font-medium">
                                    <CheckSquare className="size-4 text-[#10b981] mt-0.5 shrink-0" />
                                    Extensive reporting and dashboards
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Why Choose Gnosys Digital */}
            <section className="py-20 bg-[#f8fafc]">
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
                            <div key={i} className="bg-white border border-[#e2e8f0] p-6 rounded-sm shadow-sm flex items-center justify-center min-h-[100px]">
                                <p className="text-sm font-bold text-[#1e3a8a]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Contact Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="border border-[#e0eaf5] rounded-sm p-8 md:p-12 shadow-xl shadow-blue-900/5">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">
                                Tell Us About Your Business
                            </h2>
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
                                    <Label htmlFor="companyName" className="text-xs font-bold text-zinc-700">Company Name</Label>
                                    <Input id="companyName" placeholder="Enter your company name" className="h-11 rounded-sm border-gray-300" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="teamSize" className="text-xs font-bold text-zinc-700">Team Size</Label>
                                    <select id="teamSize" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                        <option>Select Team Size</option>
                                        <option>1-10</option>
                                        <option>11-50</option>
                                        <option>51-200</option>
                                        <option>200+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="primaryService" className="text-xs font-bold text-zinc-700">Primary Service Offered</Label>
                                    <select id="primaryService" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
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
                                <Label className="text-xs font-bold text-zinc-700">Current Challenges</Label>
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
                                            <input type="checkbox" className="mt-1 rounded text-[#1e3a8a] focus:ring-[#1e3a8a] border-gray-300" />
                                            <span className="text-xs font-medium text-zinc-700">{challenge}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="space-y-2 pt-2">
                                <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700">Preferred Contact Method</Label>
                                <select id="contactMethod" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Choose an option</option>
                                    <option>Email</option>
                                    <option>Phone Call</option>
                                </select>
                            </div>
                            
                            <div className="pt-6 text-center">
                                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 px-12 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Consultation
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 12. Final CTA */}
            <section className="py-24 bg-[#f8fafc] text-center border-t border-[#e0eaf5]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-10">
                        Ready To Transform?
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-12 px-8 font-bold shadow-md rounded-sm">
                            Book Assessment
                        </Button>
                        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-12 px-8 font-bold shadow-md rounded-sm">
                            Talk To An Expert
                        </Button>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
