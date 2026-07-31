import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckSquare, Shield, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ErpnextFinance() {
    return (
        <MainLayout>
            <Head title="ERPNext For Financial Services" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[75vh]">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
                        style={{ backgroundImage: "url('/assets/finance-hero.webp')", backgroundColor: '#021024' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#021024]/90 via-[#021024]/80 to-[#021024]"></div>
                    {/* Abstract tech rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/10 shadow-[0_0_100px_rgba(59,130,246,0.1)_inset]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-blue-500/5 shadow-[0_0_150px_rgba(59,130,246,0.05)_inset]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <div className="mb-6 flex justify-center opacity-80">
                        <Shield className="size-16 text-blue-400" strokeWidth={1.5} />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                        One Secure Platform To Manage Operations, Compliance, And Client Portfolios
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-10 max-w-4xl mx-auto">
                        Streamline client onboarding, investment management, regulatory reporting, and fee tracking. Reduce risk and improve efficiency—all in a single platform designed for financial services.
                    </p>
                    <Button className="bg-white text-[#021024] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all">
                        Book Free Assessment
                    </Button>
                </div>
            </section>

            {/* 2. Challenges */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#054388] mb-4">
                        Challenges Faced By Financial Services Firms
                    </h2>
                    <p className="text-zinc-600 mb-12 text-sm font-medium">
                        Managing client portfolios, operations, and compliance is complex with un-unified systems.
                    </p>
                    
                    <div className="text-left bg-slate-50 border border-slate-100 rounded-xl p-8 shadow-sm">
                        <h3 className="font-bold text-[#054388] mb-6 text-lg border-b border-slate-200 pb-3">Common Problems:</h3>
                        <div className="space-y-4">
                            {[
                                "Fragmented client data across CRM, spreadsheets, and legacy tools",
                                "Manual reconciliation of transactions and portfolios",
                                "Increasing regulatory pressures from SEBI, RBI, IRDAI, and GST",
                                "Fee and commission calculation errors affecting profitability",
                                "Delays in client communications and personalized recommendations",
                                "Data security and audit trail inconsistencies"
                            ].map((problem, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="bg-[#054388] rounded-sm p-0.5 mt-0.5 shrink-0 text-white">
                                        <CheckSquare className="size-4" />
                                    </div>
                                    <span className="text-zinc-700 font-medium text-sm">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ERPNext Solution Grid */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#054388] mb-4">
                            ERPNext Solution For Financial Services
                        </h2>
                        <p className="text-zinc-600 text-sm font-medium">
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
                            <div key={i} className="bg-[#054388] rounded-sm p-8 shadow-lg text-white">
                                <h3 className="text-lg font-bold mb-5">{mod.title}</h3>
                                <ul className="space-y-3">
                                    {mod.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-blue-50/90 leading-relaxed">
                                            <span className="shrink-0 mt-1 size-1.5 rounded-full bg-white opacity-60"></span>
                                            {pt}
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
                            <div key={i} className="bg-[#054388] rounded-sm p-8 shadow-lg text-white">
                                <h3 className="text-lg font-bold mb-5">{mod.title}</h3>
                                <ul className="space-y-3">
                                    {mod.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-blue-50/90 leading-relaxed">
                                            <span className="shrink-0 mt-1 size-1.5 rounded-full bg-white opacity-60"></span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Measurable Business Impact */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-[#054388] mb-12">
                        Measurable Business Impact
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Operational Efficiency", desc: "60-70% reduction in manual reconciliation, faster onboarding" },
                            { title: "Revenue & Profitability", desc: "20-30% improvement in fee collection and cross-selling" },
                            { title: "Risk & Compliance", desc: "100% audit trail, zero regulatory delays" },
                            { title: "Client Experience", desc: "90% satisfaction score, say customers empowered with insights" }
                        ].map((impact, i) => (
                            <div key={i} className="border-2 border-[#e0eaf5] rounded-xl p-6 bg-white shadow-sm hover:border-[#054388]/30 hover:shadow-md transition-all">
                                <h3 className="text-sm font-bold text-[#054388] mb-3">{impact.title}</h3>
                                <p className="text-xs text-zinc-600 font-medium leading-relaxed">{impact.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Success Stories */}
            <section className="py-24 bg-[#054388] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:20px_20px]"></div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16">
                        Success Stories
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="pb-8 md:pb-0 md:px-6">
                            <h3 className="text-lg font-bold mb-4">Wealth Management Firm</h3>
                            <p className="text-sm text-blue-100/80 leading-relaxed">Automated AUM calculation and fee billing across 500+ HNI clients, reducing month-end closing time by 5 days.</p>
                        </div>
                        <div className="py-8 md:py-0 md:px-6">
                            <h3 className="text-lg font-bold mb-4">Stock Broking Company</h3>
                            <p className="text-sm text-blue-100/80 leading-relaxed">Streamlined sub-broker commissions and consolidated multi-exchange data into a single compliance-ready dashboard.</p>
                        </div>
                        <div className="pt-8 md:pt-0 md:px-6">
                            <h3 className="text-lg font-bold mb-4">Financial Advisory</h3>
                            <p className="text-sm text-blue-100/80 leading-relaxed">Replaced 4 legacy systems with a single platform, cutting IT costs by 40% and providing clients with self-service portals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Gnosys Digital */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#054388] mb-12">
                        Why Gnosys Digital
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "50+ financial services implementations across India",
                            "Regulatory expertise (SEBI, RBI, IRDAI, GST)",
                            "Bank-grade security and audit-ready operations",
                            "Dedicated financial services consultants",
                            "Proven ROI and efficiency gains"
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-5 w-full sm:w-auto sm:max-w-xs rounded-sm text-sm font-medium text-zinc-700 shadow-sm flex items-center justify-center text-center">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Contact Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="border border-[#e0eaf5] rounded-lg p-8 md:p-12 shadow-xl shadow-blue-900/5">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-[#054388]">
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
                                            <input type="checkbox" className="mt-1 rounded text-[#054388] focus:ring-[#054388] border-gray-300" />
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
                                <Button className="bg-[#054388] text-white hover:bg-[#032954] px-10 h-12 font-bold w-full sm:w-auto shadow-md rounded-sm">
                                    Request Free Assessment
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="py-24 bg-[#f8fafc] text-center border-t border-[#e0eaf5]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#054388] mb-4">
                        Ready To Transform Your Financial Operations?
                    </h2>
                    <p className="text-zinc-500 mb-10 text-sm font-medium">Choose Your Next Step.</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#054388] text-white hover:bg-[#032954] h-12 px-8 font-bold shadow-md rounded-sm">
                            Book Assessment
                        </Button>
                        <Button className="bg-[#054388] text-white hover:bg-[#032954] h-12 px-8 font-bold shadow-md rounded-sm">
                            Speak To An Expert
                        </Button>
                    </div>
                </div>
            </section>
            
        </MainLayout>
    );
}
