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
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh] bg-[#1e3a5f]">
                <div className="absolute inset-0 z-0 overflow-hidden opacity-30 flex justify-around items-center">
                    <Cloud className="size-[400px] text-white/5 absolute -left-20 bottom-0" />
                    <Cloud className="size-[300px] text-white/5 absolute -right-10 bottom-20" />
                    <TrendingUp className="size-[600px] text-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20" />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                        Maximize Impact While Streamlining Operations
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-10 max-w-3xl mx-auto drop-shadow-sm">
                        Manage donors, projects, compliance, and finances efficiently on one open-source ERP platform.
                    </p>
                    <Button className="bg-white text-[#1e3a5f] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Request Free Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Challenges Faced By Non-Profits */}
            <section className="py-24 bg-[#f4f7fa] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                        Challenges Faced By Non-Profits
                    </h2>
                    <p className="text-zinc-600 mb-14 text-sm font-medium">
                        Balancing impact with admin tasks is hard when working in silos.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-left mb-6">
                        <div className="bg-[#1e3a5f] p-8 rounded-sm shadow-md text-white border-t-4 border-[#3b82f6]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><HandHeart className="size-5 text-[#60a5fa]"/> Funding & Donor Management</h3>
                            <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed list-disc pl-5">
                                <li>Multiple spreadsheets for tracking grants and donations.</li>
                                <li>Delayed receipt generation (80G).</li>
                                <li>No 360-degree view of donor interactions.</li>
                            </ul>
                        </div>
                        <div className="bg-[#1e3a5f] p-8 rounded-sm shadow-md text-white border-t-4 border-[#10b981]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><ClipboardList className="size-5 text-[#34d399]"/> Program & Project Delivery</h3>
                            <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed list-disc pl-5">
                                <li>Hard to track real-time fund utilization against budgets.</li>
                                <li>Manual beneficiary tracking and impact assessment.</li>
                                <li>Disconnected field teams without mobile data capture.</li>
                            </ul>
                        </div>
                        <div className="bg-[#1e3a5f] p-8 rounded-sm shadow-md text-white border-t-4 border-[#f59e0b]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><ShieldCheck className="size-5 text-[#fbbf24]"/> Compliance & Reporting</h3>
                            <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed list-disc pl-5">
                                <li>Difficulty adhering to FCRA, CSR rules and 80G norms.</li>
                                <li>Manual preparation of utilization certificates.</li>
                                <li>Last-minute scrambles for regulatory audit reports.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                        <div className="bg-[#1e3a5f] p-8 rounded-sm shadow-md text-white border-t-4 border-[#ec4899]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><PieChart className="size-5 text-[#f472b6]"/> Financial Management</h3>
                            <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed list-disc pl-5">
                                <li>Fragmented chart of accounts.</li>
                                <li>Inefficient consolidation of branch/chapter data.</li>
                                <li>Lack of real-time project profitability.</li>
                            </ul>
                        </div>
                        <div className="bg-[#1e3a5f] p-8 rounded-sm shadow-md text-white border-t-4 border-[#8b5cf6]">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Users className="size-5 text-[#a78bfa]"/> Volunteer & Staff Coordination</h3>
                            <ul className="space-y-3 text-sm text-blue-100/90 leading-relaxed list-disc pl-5">
                                <li>Manual roster management & scheduling.</li>
                                <li>Decentralized onboarding and document tracking.</li>
                                <li>No central directory for skills and availability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ERPNext Solution For NGOs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
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
                            <div key={i} className="bg-white border border-[#e2e8f0] hover:border-[#1e3a5f]/30 rounded-sm p-8 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">{mod.title}</h3>
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
            <section className="py-20 bg-[#f4f7fa] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12">
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
                            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-transparent hover:border-[#1e3a5f]/20 transition-all text-center">
                                <h3 className="text-[#1e3a5f] font-bold text-lg mb-2">{type.title}</h3>
                                <p className="text-zinc-500 text-xs uppercase tracking-wide font-semibold">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Non-Profit ERP Implementation Roadmap */}
            <section className="py-24 bg-white text-center overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                        Non-Profit ERP Implementation Roadmap
                    </h2>
                    <p className="text-zinc-600 text-sm font-medium mb-16">
                        A complete 5-Step blueprint to modernize your operations.
                    </p>
                    
                    {/* Custom Timeline Layout */}
                    <div className="relative max-w-5xl mx-auto py-10">
                        {/* Horizontal Line */}
                        <div className="hidden md:block absolute top-[50%] left-0 w-full h-3 bg-zinc-700 rounded-full border-t-2 border-dashed border-zinc-400 z-0"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a5f] text-sm">Week 1-2</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Discovery & Plan</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Gather requirements, map processes, establish KPIs.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#1e40af] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Search className="size-6" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a5f] text-sm">Week 3-4</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">System Config</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Setup modules, workflows, roles, & access levels.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#4338ca] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <Settings className="size-6" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a5f] text-sm">Week 5</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Data Migration</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Clean and import historical donor/beneficiary data.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0369a1] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Database className="size-6" />
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="md:order-3 mt-4 md:mt-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a5f] text-sm">Week 6</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Training & Testing</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">Hands-on training for HQ and field staff.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#059669] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto md:order-2">
                                    <MonitorPlay className="size-6" />
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 md:mb-14 text-center md:h-20">
                                    <h4 className="font-bold text-[#1e3a5f] text-sm">Week 7+</h4>
                                    <h5 className="font-bold text-[#0284c7] text-xs uppercase tracking-wider mb-1">Go Live & Support</h5>
                                    <p className="text-[10px] text-zinc-500 max-w-[120px] mx-auto leading-tight">System launch and ongoing hyper-care support.</p>
                                </div>
                                <div className="size-16 rounded-full bg-[#0f766e] border-4 border-white shadow-md flex items-center justify-center text-white relative z-10 mx-auto">
                                    <Rocket className="size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Measurable Impact */}
            <section className="py-20 bg-[#f4f7fa]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-12">
                        Measurable Impact
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Funding & Donor Relations", desc: "Faster receipt generation and 360-degree donor reporting." },
                            { title: "Program Delivery", desc: "Real-time tracking of funds against program KPIs." },
                            { title: "Financial Transparency", desc: "Audit-ready financials and automated fund utilization tracking." },
                            { title: "Operational Efficiency", desc: "40%+ reduction in admin time and manual reporting." }
                        ].map((impact, i) => (
                            <div key={i} className="border border-[#dbeafe] rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-sm font-bold text-[#1e3a5f] mb-3">{impact.title}</h3>
                                <p className="text-xs text-zinc-600 font-medium leading-relaxed">{impact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Success Stories */}
            <section className="py-24 bg-[#1e3a5f] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:20px_20px]"></div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Stories
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20 text-left">
                        <div className="pb-8 md:pb-0 md:px-8">
                            <h3 className="text-lg font-bold mb-1">Education NGO</h3>
                            <p className="text-xs text-blue-200/60 font-semibold mb-4 uppercase tracking-wider">Rajasthan</p>
                            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">Scaled to 500+ schools with one centralized reporting system, eliminating manual data entry.</p>
                        </div>
                        <div className="py-8 md:py-0 md:px-8">
                            <h3 className="text-lg font-bold mb-1">Healthcare NGO</h3>
                            <p className="text-xs text-blue-200/60 font-semibold mb-4 uppercase tracking-wider">Maharashtra</p>
                            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">Digitized 1M+ patient records across 50 rural clinics with offline-first mobile forms.</p>
                        </div>
                        <div className="pt-8 md:pt-0 md:px-8">
                            <h3 className="text-lg font-bold mb-1">Rural Development NGO</h3>
                            <p className="text-xs text-blue-200/60 font-semibold mb-4 uppercase tracking-wider">Odisha</p>
                            <p className="text-sm text-blue-50/90 leading-relaxed font-medium">Achieved 100% compliance in FCRA audits and transparent fund tracking for global donors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Non-Profit ERP Package - Special Offer */}
            <section className="py-24 bg-white text-center border-b border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12">
                        Non-Profit ERP Package - Special Offer
                    </h2>
                    
                    <div className="flex flex-col md:flex-row border border-[#e0eaf5] rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                        <div className="md:w-1/3 bg-[#f4f7fa] p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#e0eaf5]">
                            <h3 className="text-lg font-bold text-zinc-600 mb-2">Starts At</h3>
                            <p className="text-4xl font-bold text-[#1e3a5f] mb-2">₹75,000</p>
                            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">Special NGO Rate</span>
                            <p className="text-xs text-zinc-500 font-medium text-center">Up to 50% discount vs commercial implementations.</p>
                        </div>
                        <div className="md:w-2/3 p-8 text-left bg-white">
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
            <section className="py-20 bg-[#f4f7fa]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#1e3a5f] mb-12">
                        Why Gnosys Digital
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "10+ NGO implementations across India.",
                            "Deep understanding of FCRA & CSR compliance.",
                            "Dedicated project managers with social sector experience.",
                            "Post-launch support that understands NGO urgency."
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e0eaf5] p-6 rounded-sm shadow-sm flex items-center justify-center min-h-[100px]">
                                <p className="text-sm font-bold text-[#1e3a5f]">{item}</p>
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
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">
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
                                    <Label htmlFor="orgName" className="text-xs font-bold text-zinc-700">Organization Name</Label>
                                    <Input id="orgName" placeholder="Enter your organization name" className="h-11 rounded-sm border-gray-300" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="orgType" className="text-xs font-bold text-zinc-700">Organization Type / Registration</Label>
                                    <select id="orgType" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                        <option>Select Registration Type</option>
                                        <option>Section 8 Company</option>
                                        <option>Trust</option>
                                        <option>Society</option>
                                        <option>International NGO</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="focusArea" className="text-xs font-bold text-zinc-700">Primary Focus Area</Label>
                                    <select id="focusArea" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                        <option>Select Focus Area</option>
                                        <option>Education</option>
                                        <option>Health & Medical</option>
                                        <option>Environment</option>
                                        <option>Livelihood</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="annualBudget" className="text-xs font-bold text-zinc-700">Annual Budget</Label>
                                    <select id="annualBudget" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                        <option>Select Budget</option>
                                        <option>Under 1Cr</option>
                                        <option>1Cr - 5Cr</option>
                                        <option>5Cr - 20Cr</option>
                                        <option>20Cr+</option>
                                    </select>
                                </div>
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
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="existingErp" className="text-xs font-bold text-zinc-700">Are you existing ERP users?</Label>
                                <select id="existingErp" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300">
                                    <option>Select Option</option>
                                    <option>Yes - Legacy System</option>
                                    <option>No - Spreadsheets/Manual</option>
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
                                            <input type="checkbox" className="mt-1 rounded text-[#1e3a5f] focus:ring-[#1e3a5f] border-gray-300" />
                                            <span className="text-xs text-zinc-600">{challenge}</span>
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
                                <Button className="bg-[#1e3a5f] text-white hover:bg-[#13253c] px-10 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA */}
            <section className="py-24 bg-[#f4f7fa] text-center border-t border-[#e0eaf5]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-10">
                        Ready To Transform?
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#1e3a5f] text-white hover:bg-[#13253c] h-12 px-8 font-bold shadow-md rounded-sm">
                            Book Assessment
                        </Button>
                        <Button className="bg-[#1e3a5f] text-white hover:bg-[#13253c] h-12 px-8 font-bold shadow-md rounded-sm">
                            Talk To An Expert
                        </Button>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
