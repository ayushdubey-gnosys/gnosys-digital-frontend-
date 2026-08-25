import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    CheckSquare, Search, Settings,
    Database, MonitorPlay, Rocket, Users, HandHeart,
    PieChart, ClipboardList, ShieldCheck, HeartPulse, GraduationCap,
    Tractor, Droplets, Users2, Trees, ArrowUpRight, CheckCircle2,
    ChevronDown, Check, ArrowRight, Trophy, Target
} from 'lucide-react';
import React, { useState } from 'react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextNgo() {
    const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

    const toggleChallenge = (item: string) => {
        setSelectedChallenges((prev) =>
            prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
        );
    };

    return (
        <MainLayout>
            <Head title="ERPNext For Non-Profits & NGOs" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-ngo.webp')", backgroundColor: '#020b18' }}
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
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                ERPNext For NGOs
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Maximize Impact While <br />
                                <span className="text-blue-100 font-normal">Streamlining Operations</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Manage donors, programs, compliance, and finances efficiently on one open-source ERP platform.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2">Request Free Assessment <ArrowUpRight className="size-5" /></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Challenges Faced By Non-Profits */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Challenges Faced By Non-Profits
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 text-left">
                            {[
                                {
                                    icon: HandHeart,
                                    title: "Funding & Donor Management",
                                    items: [
                                        "Multiple funding sources tracked in separate systems",
                                        "Manual communication and acknowledgment processes",
                                        "No unified view of donor engagement history"
                                    ]
                                },
                                {
                                    icon: ClipboardList,
                                    title: "Program & Project Delivery",
                                    items: [
                                        "Multiple projects with varying reporting requirements",
                                        "Manual beneficiary tracking and impact measurement",
                                        "Field staff coordination without real-time data"
                                    ]
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Compliance & Statutory Audits",
                                    items: [
                                        "FCRA, 12A, 80G, and GST compliance complexity",
                                        "Manual preparation of donor and statutory reports",
                                        "Audit preparation consuming significant staff time"
                                    ]
                                }
                            ].map((col, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <col.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{col.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {col.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
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
                                    icon: PieChart,
                                    title: "Financial & Grant Management",
                                    items: [
                                        "Fragmented fund allocation tracking across grants",
                                        "Restricted vs. unrestricted fund monitoring challenges",
                                        "Budget vs. actual reporting across programs"
                                    ]
                                },
                                {
                                    icon: Users,
                                    title: "Volunteer & Staff Coordination",
                                    items: [
                                        "Manual volunteer matching, shift tracking, and onboarding",
                                        "Paper-based field staff attendance and expense reimbursements",
                                        "Disconnected performance metrics from mission outcomes"
                                    ]
                                }
                            ].map((col, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <col.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-xl font-normal text-[#00477b] mb-4 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{col.title}</h3>
                                        <ul className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed space-y-2.5 relative z-10">
                                            {col.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
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

            {/* 3. ERPNext Solution For NGOs */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Our Solution
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            ERPNext Solution For Non-Profits
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    title: "Donor & Fundraising Management",
                                    icon: HandHeart,
                                    points: [
                                        "360° donor view across grants, donations, and CSR",
                                        "Automated acknowledgment emails and tax receipts (80G)",
                                        "Grant lifecycle management from proposal to compliance"
                                    ]
                                },
                                {
                                    title: "Program & Beneficiary Tracking",
                                    icon: ClipboardList,
                                    points: [
                                        "Beneficiary profiles with ID, household, and service logs",
                                        "Real-time project monitoring with milestone & KPI tracking",
                                        "Mobile-friendly field updates and offline survey collection"
                                    ]
                                },
                                {
                                    title: "Fund & Grant Accounting",
                                    icon: PieChart,
                                    points: [
                                        "Fund accounting for restricted vs. unrestricted allocations",
                                        "Multi-grant budget planning and utilization tracking",
                                        "Mobile-enabled expense submission & reimbursement logs"
                                    ]
                                },
                                {
                                    title: "HR & Volunteer Management",
                                    icon: Users,
                                    points: [
                                        "Volunteer profiles with skill mapping, shifts, and history",
                                        "Biometric/mobile field staff attendance and payroll",
                                        "Performance metrics linked directly to social outcomes"
                                    ]
                                },
                                {
                                    title: "Compliance & Impact Reporting",
                                    icon: ShieldCheck,
                                    points: [
                                        "Automated FCRA, 12A, 80G, and statutory audit exports",
                                        "Real-time impact dashboards visualizing outcome metrics",
                                        "Customizable donor-specific grant utilization templates"
                                    ]
                                },
                                {
                                    title: "Inventory & Relief Distribution",
                                    icon: Database,
                                    points: [
                                        "Relief material distribution tracking with barcode scans",
                                        "Centralized inventory across district and regional warehouses",
                                        "Asset maintenance registry for medical & camp equipment"
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

            {/* 4. Tailored For Social Sector Domains */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Domain Expertise
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Tailored For Social Sector Domains
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                { title: "Healthcare & Medical NGOs", desc: "Patient registration, medicine distribution, health camp logistics & EHR records.", icon: HeartPulse },
                                { title: "Education & Literacy", desc: "Student enrollment, learning outcome tracking, teacher attendance & scholarship funds.", icon: GraduationCap },
                                { title: "Livelihood & Rural Development", desc: "SHG federations, vocational training batches, micro-grant disbursals & craft sales.", icon: Tractor },
                                { title: "WASH Projects", desc: "Water source GPS mapping, sanitation infrastructure & hygiene behavior data.", icon: Droplets },
                                { title: "Child & Women Welfare", desc: "Case management workflows, shelter allotment, legal aid logs & welfare tracking.", icon: Users2 },
                                { title: "Environment & Conservation", desc: "Reforestation site audits, wildlife tracking, carbon offset reporting & community drives.", icon: Trees }
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

            {/* 5. Non-Profit ERP Implementation Roadmap */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Implementation
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            12-Week Non-Profit ERP Roadmap
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { step: "01", week: "Week 1-2", title: "Mission Alignment", desc: "Stakeholder discovery, program logic mapping & statutory compliance setup.", icon: Search },
                                { step: "02", week: "Week 3-5", title: "System Configuration", desc: "Configure donor hierarchy, beneficiary data structures, projects, and budgets.", icon: Settings },
                                { step: "03", week: "Week 6-7", title: "Data Migration", desc: "Import legacy donor records, configure mobile apps, and link payment gateways.", icon: Database },
                                { step: "04", week: "Week 8", title: "Testing & Training", desc: "Role-based training for field staff, program managers, and accounts teams.", icon: MonitorPlay },
                                { step: "05", week: "Week 9-12", title: "Go-Live & Support", desc: "Pilot rollout across key field centers, feedback review, and full deployment.", icon: Rocket }
                            ].map((item, i) => (
                                <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                    <div
                                        className="group relative bg-white/40 backdrop-blur-xl p-8 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                        <div className="size-16 mb-5 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                            <item.icon className="size-7 text-[#00477b]" />
                                        </div>
                                        <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-1 relative z-10">{item.week}</div>
                                        <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Measurable Impact */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Social Impact
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Measurable Impact On Operations
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { impact: "+40%", suffix: "RETENTION", title: "Donor Relations", desc: "+40% donor renewal rates with 50% faster grant utilization reporting." },
                                { impact: "60%", suffix: "FASTER", title: "Program Delivery", desc: "60% faster beneficiary data registration with offline-capable mobile field apps." },
                                { impact: "100%", suffix: "VISIBILITY", title: "Fund Transparency", desc: "100% real-time fund tracking with zero manual discrepancies during FCRA audits." },
                                { impact: "70%", suffix: "AUTOMATION", title: "Staff Efficiency", desc: "70% less manual administrative paperwork, saving 500+ hours yearly." }
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

            {/* 7. Success Stories */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                            Case Studies
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Success Stories From The Field
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto max-w-[90rem]">
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-left">
                            {[
                                {
                                    icon: GraduationCap,
                                    title: "Education NGO",
                                    loc: "Rajasthan",
                                    desc: "15,000+ students tracked across 40 learning centers with 65% reduction in donor report generation time."
                                },
                                {
                                    icon: HeartPulse,
                                    title: "Healthcare NGO",
                                    loc: "Tamil Nadu",
                                    desc: "Connected 200+ rural clinics, achieving 85% patient follow-up rate with zero essential medicine stockouts."
                                },
                                {
                                    icon: Tractor,
                                    title: "Rural Development NGO",
                                    loc: "Odisha",
                                    desc: "5,000+ Self-Help Group (SHG) women members managed with automated grant disbursals and 25% better repayment."
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
                                        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">"{story.desc}"</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Why Gnosys Digital */}
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
                                    title: "25+ NGO Implementations",
                                    desc: "Proven track record across leading trusts, societies, and Section 8 non-profits in India.",
                                    icon: HandHeart
                                },
                                {
                                    title: "Social Sector Understanding",
                                    desc: "Domain consultants who understand field realities, volunteer coordination, and grants.",
                                    icon: Users
                                },
                                {
                                    title: "FCRA & 80G Expertise",
                                    desc: "Built-in statutory compliance to simplify annual returns and foreign contribution reports.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Impact-Driven Support",
                                    desc: "Subsidized non-profit licensing options and dedicated post go-live training support.",
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

            {/* 9. Pricing and Assessment Contact Form */}
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
                                    Non-Profit ERP Package
                                </h2>
                                <p className="text-zinc-600 mb-6 text-sm sm:text-base leading-relaxed font-normal">
                                    Special subsidized implementation packages crafted specifically for registered trusts, societies, and Section 8 institutions.
                                </p>

                                <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-7 shadow-xl overflow-hidden">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold text-[#00477b]">₹</span>
                                        <p className="text-5xl font-extrabold text-[#00477b] tracking-tight">75,000</p>
                                        <span className="text-xs text-zinc-500 font-medium ml-2">/ complete rollout</span>
                                    </div>

                                    <div className="bg-white/60 rounded-2xl p-4 border border-white mb-6">
                                        <h4 className="text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2.5">
                                            Special Non-Profit Inclusions:
                                        </h4>
                                        <ul className="space-y-2 text-xs text-zinc-700 font-normal">
                                            {[
                                                "50% subsidized rollout for registered NGOs",
                                                "Free mobile field survey & offline collection app",
                                                "Built-in FCRA & 80G tax receipt generator",
                                                "Interactive donor impact dashboard",
                                                "12 months comprehensive post-launch support"
                                            ].map((bonus, bIdx) => (
                                                <li key={bIdx} className="flex items-center gap-2">
                                                    <Check className="size-3.5 text-[#00477b] shrink-0" />
                                                    <span>{bonus}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-2 text-xs text-zinc-600 font-normal">
                                        <p className="font-medium text-[#00477b]">Includes 10 User Licenses & Full Setup:</p>
                                        <div className="grid grid-cols-2 gap-2 text-zinc-700">
                                            <span>• Donor & CRM</span>
                                            <span>• Grant Accounting</span>
                                            <span>• Beneficiary Tracking</span>
                                            <span>• HR & Volunteers</span>
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
                                            Request Free Impact Assessment
                                        </h3>
                                        <p className="text-zinc-600 text-xs sm:text-sm font-normal">
                                            Fill in your details and our social sector ERP specialist will prepare a customized assessment.
                                        </p>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="fullName" className="text-xs font-medium text-[#00477b]">Full Name *</Label>
                                                <Input id="fullName" placeholder="Enter your full name" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="email" className="text-xs font-medium text-[#00477b]">Work Email *</Label>
                                                <Input id="email" type="email" placeholder="Enter your email" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="phone" className="text-xs font-medium text-[#00477b]">Phone Number *</Label>
                                                <Input id="phone" placeholder="+91 98765 43210" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="orgName" className="text-xs font-medium text-[#00477b]">Organization Name *</Label>
                                                <Input id="orgName" placeholder="e.g. Hope Foundation" className="h-11 rounded-xl border-white/80 bg-white/60 focus:bg-white focus:border-[#00477b] text-sm text-[#00477b] font-medium placeholder:text-zinc-400" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="orgType" className="text-xs font-medium text-[#00477b]">Registration Type</Label>
                                                <div className="relative">
                                                    <select id="orgType" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Section 8 Company</option>
                                                        <option className="bg-white">Public / Private Trust</option>
                                                        <option className="bg-white">Registered Society</option>
                                                        <option className="bg-white">International NGO Branch</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="focusArea" className="text-xs font-medium text-[#00477b]">Primary Focus Area</Label>
                                                <div className="relative">
                                                    <select id="focusArea" className="w-full h-11 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-sm text-[#00477b] font-medium focus:bg-white focus:border-[#00477b] focus-visible:outline-none transition-all appearance-none">
                                                        <option className="bg-white">Education & Skill Training</option>
                                                        <option className="bg-white">Healthcare & Medical Camps</option>
                                                        <option className="bg-white">Livelihood & SHG Federations</option>
                                                        <option className="bg-white">WASH & Infrastructure</option>
                                                        <option className="bg-white">Child & Women Welfare</option>
                                                        <option className="bg-white">Environment & Conservation</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#00477b] pointer-events-none" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 pt-1">
                                            <Label className="text-xs font-medium text-[#00477b]">Key Operational Priorities</Label>
                                            <div className="grid grid-cols-2 gap-2.5">
                                                {[
                                                    "Donor & Grant Tracking",
                                                    "Beneficiary & Field Data",
                                                    "FCRA & 80G Compliance",
                                                    "Restricted Fund Accounting"
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
                                                Submit Free Assessment <ArrowRight className="size-4" />
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
