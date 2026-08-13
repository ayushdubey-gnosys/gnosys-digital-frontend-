import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckSquare, Shield, CheckCircle2, AlertTriangle, TrendingUp, Trophy, Target } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextFinance() {
    return (
        <MainLayout>
            <Head title="ERPNext For Financial Services" />

            {/* Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-blue-100/60 via-purple-50/50 to-pink-100/60 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 flex items-center justify-center text-center min-h-[85vh]">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-finance.webp')" }}
                    ></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl space-y-8 flex flex-col items-center relative z-20 mx-auto">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.05] drop-shadow-lg mt-12">
                            One Secure Platform To Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300">Operations, Compliance</span><br />
                            And Client Portfolios
                        </h1>

                        <p className="max-w-2xl text-lg sm:text-xl text-zinc-300/90 leading-relaxed font-medium mx-auto">
                            Streamline client onboarding, investment management, regulatory reporting, and fee tracking. Reduce risk and improve efficiency—all in a single platform designed for financial services.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-5 pt-8 w-full sm:w-auto">
                            <Button size="lg" className="group relative bg-zinc-200/20 backdrop-blur-md border border-zinc-200/50 text-white hover:bg-zinc-200/30 hover:border-zinc-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.1)] rounded-2xl px-10 h-16 text-[16px] font-bold w-full sm:w-auto overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="flex items-center gap-3">
                                    Book Free Assessment
                                    <svg className="size-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Challenges */}
            <section className="py-24 bg-transparent text-center relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-4 tracking-tight">
                        Challenges Faced By Financial Services Firms
                    </h2>
                    <p className="text-zinc-600 mb-12 text-base max-w-2xl mx-auto">
                        Managing client portfolios, operations, and compliance is complex with un-unified systems.
                    </p>

                    <div className="text-left bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="flex items-center gap-3 mb-8 border-b border-white/60 pb-4">
                            <div className="bg-red-100/50 p-2 rounded-full">
                                <AlertTriangle className="size-6 text-red-500" strokeWidth={2} />
                            </div>
                            <h3 className="font-extrabold text-[#00477b] text-xl tracking-tight">Common Problems</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Fragmented client data across CRM, spreadsheets, and legacy tools",
                                "Manual reconciliation of transactions and portfolios",
                                "Increasing regulatory pressures from SEBI, RBI, IRDAI, and GST",
                                "Fee and commission calculation errors affecting profitability",
                                "Delays in client communications and personalized recommendations",
                                "Data security and audit trail inconsistencies"
                            ].map((problem, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white/50 border border-white/60 p-4 rounded-2xl hover:bg-white/70 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                                    <div className="bg-red-50 rounded-full p-1 mt-0.5 shrink-0 text-red-400">
                                        <AlertTriangle className="size-4" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-zinc-700 font-medium text-sm leading-snug">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ERPNext Solution Grid */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SOLUTION
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#00477b] mb-4 tracking-tight">
                            ERPNext Solution For Financial Services
                        </h2>
                        <p className="text-zinc-600 text-base max-w-2xl mx-auto">
                            A fully integrated platform that connects client management, investment operations, billing, and compliance.
                        </p>
                    </div>

                    {/* Top Row - 3 Cards */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-6">
                        {[
                            { title: "Client Management", points: ["Unified CRM / client profiles across all products", "Automated onboarding workflows and document management", "Secure client portals for statements and portfolio insights"] },
                            { title: "Investment Operations", points: ["Multi-asset portfolio tracking in real time", "Transaction processing and automated reconciliation", "Performance analytics and benchmark comparisons"] },
                            { title: "Financial Control", points: ["Flexible fee structures and automated billing", "Commission tracking for advisors and channels", "Revenue recognition and profitability analytics"] }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 h-full flex flex-col">
                                <h3 className="text-xl font-bold text-[#00477b] mb-5">{mod.title}</h3>
                                <ul className="space-y-4">
                                    {mod.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row - 2 Wide Cards */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: "Compliance & Risk Management", points: ["Automated regulatory reporting (KYC, AML)", "Audit-ready transaction logs and access controls", "Risk assessment workflows and limit monitoring"] },
                            { title: "Analytics & Insights", points: ["Custom dashboards for management reporting", "Predictive analytics for client behavior", "Data consolidation for single source of truth"] }
                        ].map((mod, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 h-full flex flex-col">
                                <h3 className="text-xl font-bold text-[#00477b] mb-5">{mod.title}</h3>
                                <ul className="space-y-4">
                                    {mod.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-700 leading-snug">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Measurable Business Impact */}
            <section className="py-20 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        BUSINESS IMPACT
                    </span>
                    <h2 className="text-3xl font-extrabold text-center text-[#00477b] mb-12 tracking-tight">
                        Measurable Business Impact
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Operational Efficiency", desc: "60-70% reduction in manual reconciliation, faster onboarding" },
                            { title: "Revenue & Profitability", desc: "20-30% improvement in fee collection and cross-selling" },
                            { title: "Risk & Compliance", desc: "100% audit trail, zero regulatory delays" },
                            { title: "Client Experience", desc: "90% satisfaction score, say customers empowered with insights" }
                        ].map((impact, i) => (
                            <div key={i} className="bg-white/20 backdrop-blur-3xl border border-white/80 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:bg-white/30 transition-all duration-300">
                                <h3 className="text-sm font-bold text-[#1a4464] mb-3">{impact.title}</h3>
                                <p className="text-xs text-zinc-700 font-medium leading-relaxed">{impact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Success Stories */}
            <section className="py-24 bg-transparent text-zinc-900 relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <div className="text-center mb-16 relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            SUCCESS STORIES
                        </span>
                        <h2 className="text-3xl font-extrabold mb-16 tracking-tight">
                            Success Stories
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/60 transition-all duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all"></div>
                            <div className="bg-blue-100 text-blue-600 size-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <TrendingUp className="size-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#1a4464]">Wealth Management Firm</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed font-medium">Automated AUM calculation and fee billing across 500+ HNI clients, reducing month-end closing time by 5 days.</p>
                        </div>

                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/60 transition-all duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-3xl group-hover:bg-indigo-400/20 transition-all"></div>
                            <div className="bg-indigo-100 text-indigo-600 size-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Target className="size-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#1a4464]">Stock Broking Company</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed font-medium">Streamlined sub-broker commissions and consolidated multi-exchange data into a single compliance-ready dashboard.</p>
                        </div>

                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:bg-white/60 transition-all duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all"></div>
                            <div className="bg-purple-100 text-purple-600 size-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Trophy className="size-6" strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#1a4464]">Financial Advisory</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed font-medium">Replaced 4 legacy systems with a single platform, cutting IT costs by 40% and providing clients with self-service portals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Gnosys Digital */}
            <section className="py-20 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHY GNOSYS
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#00477b] mb-12 tracking-tight">
                        Why Gnosys Digital
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "50+ financial services implementations across India",
                            "Regulatory expertise (SEBI, RBI, IRDAI, GST)",
                            "Bank-grade security and audit-ready operations",
                            "Dedicated financial services consultants",
                            "Proven ROI and efficiency gains"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 w-full sm:w-auto sm:max-w-xs rounded-2xl text-sm font-bold text-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:bg-white/50 transition-all duration-300 flex items-center justify-center text-center leading-relaxed">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Contact Form */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="text-center mb-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                GET STARTED
                            </span>
                            <h2 className="text-3xl font-extrabold text-[#00477b] tracking-tight">
                                Request Your Confidential Assessment
                            </h2>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                <Input id="phone" placeholder="Enter your phone number" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-xs font-bold text-zinc-700">Company Name</Label>
                                <Input id="company" placeholder="Enter your company name" className="h-11 rounded-sm border-gray-300" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="teamSize" className="text-xs font-bold text-zinc-700">Team Size</Label>
                                    <select id="teamSize" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <option>Select Team Size</option>
                                        <option>1-10</option>
                                        <option>11-50</option>
                                        <option>51-200</option>
                                        <option>200+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="primaryServices" className="text-xs font-bold text-zinc-700">Primary Services Offered</Label>
                                    <select id="primaryServices" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        <option>Select Primary Services Offered</option>
                                        <option>Wealth Management</option>
                                        <option>Stock Broking</option>
                                        <option>NBFC / Lending</option>
                                        <option>Insurance</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <Label className="text-xs font-bold text-zinc-700">Current Challenges</Label>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {[
                                        "Data fragmentation & data silos",
                                        "Manual reconciliation & reporting",
                                        "Regulatory compliance & audit risks",
                                        "Inefficient client onboarding",
                                        "Billing and fee calculation errors",
                                        "Lack of management insights & dashboards",
                                        "Legacy system limitations",
                                        "Other"
                                    ].map((challenge, i) => (
                                        <label key={i} className="flex items-start gap-2 cursor-pointer">
                                            <Checkbox className="mt-1 border-gray-300 bg-white data-[state=checked]:bg-zinc-800 data-[state=checked]:text-white data-[state=checked]:border-zinc-800" />
                                            <span className="text-xs text-zinc-600">{challenge}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 pt-2">
                                <Label htmlFor="contactMethod" className="text-xs font-bold text-zinc-700">Preferred Contact Method</Label>
                                <select id="contactMethod" className="w-full h-11 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    <option>Choose an option</option>
                                    <option>Email</option>
                                    <option>Phone Call</option>
                                </select>
                            </div>

                            <div className="pt-6 text-center">
                                <Button className="bg-white text-zinc-800 hover:bg-zinc-100 px-10 h-14 text-base font-bold w-full sm:w-auto shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="py-24 bg-transparent relative z-10 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        NEXT STEPS
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00477b] mb-6 tracking-tight">
                        Ready To Transform Your Financial Operations?
                    </h2>
                    <p className="text-zinc-600 mb-10 text-base font-medium">Choose Your Next Step.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <Button className="bg-white text-zinc-800 hover:bg-zinc-100 h-14 px-8 text-base font-bold shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                            Book Assessment
                        </Button>
                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] h-14 px-8 text-base font-bold shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                            Speak To An Expert
                        </Button>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
