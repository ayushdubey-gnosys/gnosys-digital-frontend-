import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    CheckSquare, Shield, CheckCircle2, AlertTriangle,
    TrendingUp, Trophy, Target, ArrowRight, Database,
    RefreshCw, ShieldAlert, Calculator, Clock, Lock,
    Users, LineChart, Briefcase, ChevronDown, Check
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextFinance() {
    return (
        <MainLayout>
            <Head title="ERPNext For Financial Services" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-finance.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none lg:w-1/2"></div>
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
                    <div className="max-w-2xl lg:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                Financial Services ERP
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                One Secure Platform To Manage Operations, Compliance <br />
                                <span className="text-blue-100 font-normal">And Client Portfolios</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Streamline client onboarding, investment management, regulatory reporting, and fee tracking. Reduce risk and improve efficiency - all in a single platform designed for financial services.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Book Free Assessment <span className="text-xl">&rarr;</span></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Challenges */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Challenges Faced By Financial Services Firms
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    icon: Database,
                                    title: "Fragmented Client Data",
                                    desc: "Customer data scattered across CRM, spreadsheets, and disconnected legacy tools without a unified view."
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Manual Reconciliation",
                                    desc: "Hours spent daily reconciling transactions, multi-asset portfolios, and bank/broker statements manually."
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Regulatory Pressure",
                                    desc: "Mounting compliance mandates from SEBI, RBI, IRDAI, and GST with strict audit and reporting requirements."
                                },
                                {
                                    icon: Calculator,
                                    title: "Fee & Commission Errors",
                                    desc: "Complex advisor commission structures leading to calculation mistakes and revenue leakage."
                                },
                                {
                                    icon: Clock,
                                    title: "Client Service Delays",
                                    desc: "Slow report generation, delayed portfolio insights, and lack of self-service investor portals."
                                },
                                {
                                    icon: Lock,
                                    title: "Security & Audit Risks",
                                    desc: "Inconsistent permission models and incomplete audit trails creating data privacy and regulatory risks."
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

            {/* 3. ERPNext Solution Grid */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Our Solution
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            ERPNext Solution For Financial Services
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 text-left">
                            {[
                                {
                                    icon: Users,
                                    title: "Client Management",
                                    points: [
                                        "Unified CRM / client profiles across all financial products",
                                        "Automated onboarding workflows and digital KYC verification",
                                        "Secure client self-service portal for portfolio statements"
                                    ]
                                },
                                {
                                    icon: Briefcase,
                                    title: "Investment Operations",
                                    points: [
                                        "Multi-asset portfolio tracking in real time (Equity, Debt, MF)",
                                        "Automated trade reconciliation with exchanges and depositories",
                                        "Benchmark comparisons and NAV performance analytics"
                                    ]
                                },
                                {
                                    icon: Calculator,
                                    title: "Financial Control & Billing",
                                    points: [
                                        "Flexible fee structures (AUM-based, advisory, transaction)",
                                        "Automated sub-broker and channel commission tracking",
                                        "Automated GST billing, revenue recognition, and ledger sync"
                                    ]
                                }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <mod.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {mod.points.map((pt, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto text-left">
                            {[
                                {
                                    icon: Shield,
                                    title: "Compliance & Risk Management",
                                    points: [
                                        "Automated regulatory reporting for SEBI, RBI, and IRDAI",
                                        "Immutable audit trails, versioning, and role-based access control",
                                        "Pre-trade risk limit monitoring and automated compliance alerts"
                                    ]
                                },
                                {
                                    icon: LineChart,
                                    title: "Analytics & Executive Insights",
                                    points: [
                                        "Real-time executive dashboards for AUM and branch performance",
                                        "Client churn prediction and cross-selling opportunity scoring",
                                        "Consolidated multi-entity P&L and balance sheet reporting"
                                    ]
                                }
                            ].map((mod, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <mod.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {mod.points.map((pt, j) => (
                                                <li key={j} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Measurable Business Impact */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Business Impact
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Measurable Business Impact
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { impact: "70%", suffix: "FASTER", title: "Operational Speed", desc: "60-70% reduction in manual reconciliation and client onboarding time." },
                                { impact: "30%", suffix: "INCREASE", title: "Revenue Optimization", desc: "20-30% improvement in fee collection efficiency and cross-selling." },
                                { impact: "100%", suffix: "COMPLIANCE", title: "Audit Readiness", desc: "100% complete digital audit trails with zero regulatory penalties." },
                                { impact: "90%", suffix: "SATISFACTION", title: "Client Retention", desc: "90%+ client satisfaction through transparent, real-time portal reporting." }
                            ].map((stat, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="text-4xl sm:text-5xl font-extrabold text-[#00477b] mb-1 relative z-10">
                                            {stat.impact}
                                        </div>
                                        <div className="text-[11px] font-bold text-[#00477b] tracking-[0.2em] uppercase mb-2 relative z-10">
                                            {stat.suffix}
                                        </div>
                                        <div className="h-0.5 w-10 bg-blue-200 mb-3 relative z-10"></div>
                                        <h3 className="text-lg font-normal text-[#00477b] mb-1.5 relative z-10">{stat.title}</h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed relative z-10">
                                            {stat.desc}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Success Stories */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Case Studies
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Success Stories in Financial Services
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: "Wealth Management Firm",
                                    loc: "Mumbai",
                                    desc: "Automated AUM calculation and fee billing across 500+ HNI clients, reducing month-end closing time by 5 working days."
                                },
                                {
                                    icon: Target,
                                    title: "Stock Broking Company",
                                    loc: "Ahmedabad",
                                    desc: "Streamlined sub-broker commissions and consolidated multi-exchange settlement data into a single compliance dashboard."
                                },
                                {
                                    icon: Trophy,
                                    title: "Financial Advisory",
                                    loc: "Bengaluru",
                                    desc: "Replaced 4 legacy tools with a unified ERPNext platform, cutting software IT costs by 40% with client self-service."
                                }
                            ].map((story, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <story.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-1 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{story.title}</h3>
                                        <span className="text-xs font-bold text-[#00477b]/80 uppercase tracking-wider mb-3 relative z-10">{story.loc}</span>
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{story.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Gnosys Digital */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Why Gnosys
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Partner With Gnosys Digital
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                {
                                    title: "50+ Financial Deployments",
                                    desc: "50+ financial services implementations across wealth, broking, and NBFC sectors in India.",
                                    icon: Briefcase
                                },
                                {
                                    title: "Regulatory Expertise",
                                    desc: "Deep knowledge of SEBI, RBI, IRDAI, and GST statutory compliance frameworks.",
                                    icon: Shield
                                },
                                {
                                    title: "Bank-Grade Security",
                                    desc: "Enterprise-grade encryption, audit trails, and strict data confidentiality protocols.",
                                    icon: Lock
                                },
                                {
                                    title: "Dedicated Specialists",
                                    desc: "Domain consultants who understand financial accounting and reconciliation.",
                                    icon: Users
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

            {/* 7. CTA & Contact Form Split Section */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 md:px-8 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[1450px]">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                            {/* Left Column: CTA Text (5 cols) */}
                            <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                    Next Steps
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#00477b] mb-4 tracking-tight leading-tight">
                                    Ready To Transform Your Financial Operations?
                                </h2>
                                <p className="text-zinc-600 mb-6 text-sm sm:text-base leading-relaxed font-normal">
                                    Partner with Gnosys Digital to build a scalable, compliant, and efficient financial ecosystem. Take the first step by requesting a confidential assessment.
                                </p>

                                <div className="space-y-3.5">
                                    {[
                                        { title: "Free Compliance & Process Audit", desc: "Identify manual bottlenecks in your reconciliation and portfolio reporting." },
                                        { title: "Tailored Architecture Roadmap", desc: "Get a clear scope, integration timeline, and transparent ROI estimate." }
                                    ].map((feat, fIdx) => (
                                        <div key={fIdx} className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-2xl p-4.5 shadow-xs flex items-start gap-3.5">
                                            <div className="size-10 rounded-xl bg-white text-[#00477b] flex items-center justify-center shrink-0 shadow-xs border border-white">
                                                <Check className="size-4 text-[#00477b]" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-normal text-[#00477b] mb-0.5">{feat.title}</h4>
                                                <p className="text-xs text-zinc-600 font-normal leading-relaxed">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            {/* Right Column: Contact Form (7 cols) */}
                            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
                                <div className="bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl relative z-10">
                                    <div className="text-left mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-xs text-[10px] font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                            Get In Touch
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-normal text-[#00477b] tracking-tight mb-1">
                                            Request Confidential Assessment
                                        </h3>
                                        <p className="text-zinc-600 text-xs sm:text-sm font-normal">
                                            Fill in your details below and our financial solutions architect will connect with you.
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
                                                <Label htmlFor="company" className="text-xs font-medium text-[#00477b]">Company / Firm Name *</Label>
                                                <Input id="company" placeholder="e.g. Acme Capital Partners" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="teamSize" className="text-xs font-medium text-[#00477b]">Firm Category / Size</Label>
                                            <div className="relative">
                                                <select id="teamSize" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                    <option className="bg-white">Wealth Management / RIA</option>
                                                    <option className="bg-white">Stock Broker / Sub-Broker Network</option>
                                                    <option className="bg-white">NBFC / Microfinance</option>
                                                    <option className="bg-white">Asset Management / Mutual Funds</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <Label className="text-xs font-medium text-[#00477b]">Primary Operational Priorities</Label>
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {[
                                                    "Portfolio Reconciliation",
                                                    "SEBI / RBI Compliance",
                                                    "Client Portal & Statements",
                                                    "Sub-broker Commission Sync"
                                                ].map((challenge, i) => (
                                                    <label key={i} className="flex items-center gap-2 cursor-pointer bg-white/50 p-2.5 rounded-xl border border-white/70 hover:bg-white/80 transition-colors">
                                                        <Checkbox className="border-white/80 bg-white/70 data-[state=checked]:bg-[#00477b] data-[state=checked]:text-white data-[state=checked]:border-[#00477b]" />
                                                        <span className="text-xs text-zinc-700 font-normal leading-tight">{challenge}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 font-bold w-full shadow-lg shadow-blue-900/10 hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2">
                                                Submit Assessment Request <ArrowRight className="size-4" />
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
