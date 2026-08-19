import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckSquare, Shield, CheckCircle2, AlertTriangle, TrendingUp, Trophy, Target } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

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
                        <ScrollReveal animation="fade-up" delay={80}>
                            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.05] drop-shadow-lg mt-12">
                                One Secure Platform To Manage Operations, Compliance<br />
                                And Client Portfolios
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="max-w-2xl text-lg sm:text-xl text-zinc-300/90 leading-relaxed font-medium mx-auto">
                                Streamline client onboarding, investment management, regulatory reporting, and fee tracking. Reduce risk and improve efficiency—all in a single platform designed for financial services.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-8 w-full sm:w-auto">
                                <Button className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">Book Free Assessment <span className="text-xl">&rarr;</span></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Challenges */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="w-full px-4 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
                        {/* Left Column: Headings */}
                        <div className="text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                THE CHALLENGE
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-6 tracking-tight">
                                Challenges Faced By Financial Services Firms
                            </h2>
                            <p className="text-zinc-600 text-lg leading-relaxed max-w-lg">
                                Managing client portfolios, operations, and compliance is complex with un-unified systems.
                            </p>
                        </div>

                        {/* Right Column: Problems Box */}
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
                </div>
            </section>

            {/* 3. ERPNext Solution Grid */}
            <section className="pt-24 pb-12 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            OUR SOLUTION
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] mb-4 tracking-tight">
                            ERPNext Solution For Financial Services
                        </h2>
                        <p className="text-zinc-600 text-base max-w-2xl mx-auto">
                            A fully integrated platform that connects client management, investment operations, billing, and compliance.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        {/* Top Row - 3 Cards */}
                        <div className="grid lg:grid-cols-3 gap-6 mb-6">
                            {[
                                { title: "Client Management", points: ["Unified CRM / client profiles across all products", "Automated onboarding workflows and document management", "Secure client portals for statements and portfolio insights"] },
                                { title: "Investment Operations", points: ["Multi-asset portfolio tracking in real time", "Transaction processing and automated reconciliation", "Performance analytics and benchmark comparisons"] },
                                { title: "Financial Control", points: ["Flexible fee structures and automated billing", "Commission tracking for advisors and channels", "Revenue recognition and profitability analytics"] }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl group-hover:bg-sky-200/50 transition-colors duration-500"></div>
                                    <h3 className="text-xl font-bold text-[#00477b] mb-6 relative z-10 flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-[#00477b] rounded-full"></div>
                                        {mod.title}
                                    </h3>
                                    <ul className="space-y-4 relative z-10">
                                        {mod.points.map((pt, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed font-medium">
                                                <div className="w-5 h-5 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-100 transition-colors">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </div>
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
                                <div key={i} className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl group-hover:bg-sky-200/50 transition-colors duration-500"></div>
                                    <h3 className="text-xl font-bold text-[#00477b] mb-6 relative z-10 flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-[#00477b] rounded-full"></div>
                                        {mod.title}
                                    </h3>
                                    <ul className="space-y-4 relative z-10">
                                        {mod.points.map((pt, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed font-medium">
                                                <div className="w-5 h-5 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-100 transition-colors">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
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

            {/* 4. Measurable Business Impact */}
            <section className="pt-24 pb-12 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        BUSINESS IMPACT
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] tracking-tight">
                        Measurable Business Impact
                    </h2>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Operational Efficiency", desc: "60-70% reduction in manual reconciliation, faster onboarding" },
                                { title: "Revenue & Profitability", desc: "20-30% improvement in fee collection and cross-selling" },
                                { title: "Risk & Compliance", desc: "100% audit trail, zero regulatory delays" },
                                { title: "Client Experience", desc: "90% satisfaction score, say customers empowered with insights" }
                            ].map((impact, i) => (
                                <div key={i} className="relative overflow-hidden bg-white/70 backdrop-blur-md border border-white p-8 sm:p-10 rounded-3xl shadow-[0_10px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-300 group flex flex-col justify-center min-h-[220px]">
                                    {/* Decorative number */}
                                    <div className="absolute -right-2 -bottom-6 text-[120px] leading-none font-black text-[#00477b]/[0.03] group-hover:text-[#00477b]/[0.08] group-hover:-translate-y-2 transition-all duration-500 pointer-events-none select-none">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#00477b] mb-4 relative z-10">{impact.title}</h3>
                                    <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed relative z-10">{impact.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Success Stories */}
            <section className="pt-24 pb-12 bg-transparent text-zinc-900 relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        SUCCESS STORIES
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] tracking-tight">
                        Success Stories
                    </h2>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-500 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl group-hover:bg-sky-200/50 transition-all"></div>
                                <div className="bg-sky-50 text-sky-600 size-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform border border-sky-100">
                                    <TrendingUp className="size-6" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#00477b]">Wealth Management Firm</h3>
                                <p className="text-base text-zinc-600 leading-relaxed font-medium">Automated AUM calculation and fee billing across 500+ HNI clients, reducing month-end closing time by 5 days.</p>
                            </div>

                            <div className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-500 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl group-hover:bg-sky-200/50 transition-all"></div>
                                <div className="bg-sky-50 text-sky-600 size-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform border border-sky-100">
                                    <Target className="size-6" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#00477b]">Stock Broking Company</h3>
                                <p className="text-base text-zinc-600 leading-relaxed font-medium">Streamlined sub-broker commissions and consolidated multi-exchange data into a single compliance-ready dashboard.</p>
                            </div>

                            <div className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:bg-white/90 transition-all duration-500 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl group-hover:bg-sky-200/50 transition-all"></div>
                                <div className="bg-sky-50 text-sky-600 size-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform border border-sky-100">
                                    <Trophy className="size-6" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-[#00477b]">Financial Advisory</h3>
                                <p className="text-base text-zinc-600 leading-relaxed font-medium">Replaced 4 legacy systems with a single platform, cutting IT costs by 40% and providing clients with self-service portals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Gnosys Digital */}
            <section className="pt-24 pb-12 bg-transparent relative z-10 border-b border-white/20">
                <div className="container mx-auto px-4 max-w-6xl text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        WHY GNOSYS
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal text-[#00477b] tracking-tight">
                        Why Gnosys Digital
                    </h2>
                </div>

                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                "50+ financial services implementations across India",
                                "Regulatory expertise (SEBI, RBI, IRDAI, GST)",
                                "Bank-grade security and audit-ready operations",
                                "Dedicated financial services consultants",
                                "Proven ROI and efficiency gains"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-md border border-white p-6 rounded-3xl shadow-[0_10px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] hover:bg-white/90 transition-all duration-300 flex items-start gap-4 text-left max-w-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group">
                                    <div className="w-6 h-6 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-100 transition-colors border border-sky-100">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm font-bold text-zinc-800 leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA & Contact Form Split Section */}
            <section className="py-24 bg-transparent relative z-10 border-b border-white/20">
                <div className="w-full px-4 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        
                        {/* Left Column: CTA Text */}
                        <div className="text-left lg:pt-12 xl:pr-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                NEXT STEPS
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#00477b] mb-6 tracking-tight leading-tight">
                                Ready To Transform Your Financial Operations?
                            </h2>
                            <p className="text-zinc-600 mb-10 text-lg leading-relaxed max-w-lg">
                                Partner with Gnosys Digital to build a scalable, compliant, and efficient financial ecosystem. Take the first step by requesting a confidential assessment.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-5">
                                <Button className="bg-[#00477b] text-white hover:bg-[#003866] h-14 px-8 text-base font-bold shadow-[0_8px_25px_rgba(0,71,123,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                                    Book Assessment
                                </Button>
                                <Button className="bg-white text-zinc-800 hover:bg-zinc-50 h-14 px-8 text-base font-bold shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 rounded-2xl border border-zinc-100">
                                    Speak To An Expert
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 md:p-12 shadow-[0_15px_50px_rgb(0,0,0,0.05)] relative z-10">
                            <div className="text-left mb-10 border-b border-white/60 pb-8">
                                <h3 className="text-3xl sm:text-4xl font-normal text-[#00477b] tracking-tight">
                                    Request Your Confidential Assessment
                                </h3>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-xs font-bold text-zinc-700">Full Name</Label>
                                    <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-xl border-white/80 bg-white/50 focus:bg-white transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold text-zinc-700">Email Address</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-xl border-white/80 bg-white/50 focus:bg-white transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs font-bold text-zinc-700">Phone Number</Label>
                                    <Input id="phone" placeholder="Enter your phone number" className="h-11 rounded-xl border-white/80 bg-white/50 focus:bg-white transition-colors" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-xs font-bold text-zinc-700">Company Name</Label>
                                        <Input id="company" placeholder="Company name" className="h-11 rounded-xl border-white/80 bg-white/50 focus:bg-white transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="teamSize" className="text-xs font-bold text-zinc-700">Team Size</Label>
                                        <select id="teamSize" className="w-full h-11 rounded-xl border border-white/80 bg-white/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00477b]/20 focus:bg-white transition-colors">
                                            <option>Select Size</option>
                                            <option>1-10</option>
                                            <option>11-50</option>
                                            <option>51-200</option>
                                            <option>200+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <Label className="text-xs font-bold text-zinc-700">Current Challenges</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            "Data fragmentation",
                                            "Manual reconciliation",
                                            "Regulatory compliance",
                                            "Inefficient onboarding"
                                        ].map((challenge, i) => (
                                            <label key={i} className="flex items-start gap-2 cursor-pointer">
                                                <Checkbox className="mt-1 border-white/80 bg-white/50 data-[state=checked]:bg-[#00477b] data-[state=checked]:text-white data-[state=checked]:border-[#00477b]" />
                                                <span className="text-xs text-zinc-600 font-medium leading-snug">{challenge}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button className="bg-[#00477b] text-white hover:bg-[#003866] h-14 text-base font-bold w-full shadow-[0_8px_25px_rgba(0,71,123,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                                        Submit Request
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
