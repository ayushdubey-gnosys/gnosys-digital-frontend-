import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
    Calculator, 
    Package, 
    Factory, 
    Users, 
    Briefcase, 
    Cloud, 
    CheckCircle2, 
    Settings, 
    IndianRupee, 
    Search,
    Database,
    Zap,
    GraduationCap,
    Rocket,
    Plus,
    Minus,
    Check,
    Star,
    Wrench,
    ArrowRight
} from 'lucide-react';
import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextImplementation() {

    const faqs = [
        {
            question: "How long does it take to implement ERPNext?",
            answer: "Typically 3-6 weeks depending on scope and customization."
        },
        {
            question: "Do I need my own server?",
            answer: "We offer both cloud and self-hosted deployments."
        },
        {
            question: "Can I migrate from Tally or Excel?",
            answer: "Yes, we provide data import and structure mapping."
        },
        {
            question: "What post-launch support do you offer?",
            answer: "All packages include free 30-day support and optional AMC plans."
        }
    ];

    return (
        <MainLayout>
            <Head title="ERPNext Implementation Partner" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-implememtion.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    {/* Soft gradient on the left to ensure text is 100% readable while the office graphic on the right remains crystal clear */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none lg:w-3/5"></div>
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
                                ERPNEXT IMPLEMENTATION PARTNER
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Simplify Your Operations <br />
                                <span className="text-blue-100 font-normal">With Fully Implemented ERPNext</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Automate accounting, inventory, CRM, and HR - all in one open-source platform. We help SMEs deploy ERPNext fast, affordably, and with zero chaos.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Book a Free Consultation <ArrowRight className="size-5" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                    </Link>
                                </Button>
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Request a Quote
                                </Button>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={380}>
                            <div className="mt-8 text-xs sm:text-sm text-blue-100/80 font-medium tracking-wide">
                                Trusted by growing manufacturers, distributors, and service providers across India.
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Why ERPNext Grid */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block w-fit mx-auto px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3">
                            Why ERPNext
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            One Platform For Your Entire Business
                        </h2>
                        <p className="mt-3 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
                            ERPNext helps you run your entire business from one place - with zero recurring license costs. Open-source, modular, and built for scalable SME growth.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="w-full">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">
                        {[
                            { icon: Calculator, title: 'Accounting & Finance', desc: 'Manage invoices, ledgers, tax returns, and real-time cashflow reports with automated reconciliation.' },
                            { icon: Package, title: 'Inventory & Warehouse', desc: 'Track multi-location stock levels, batch/serial tracking, reorder triggers, and transfers effortlessly.' },
                            { icon: Factory, title: 'Manufacturing & Production', desc: 'Manage production planning, multi-level BOMs, capacity scheduling, and job cards seamlessly.' },
                            { icon: Briefcase, title: 'CRM & Sales Automation', desc: 'Capture leads, automate pipelines, manage quotation approvals, and track deal closures.' },
                            { icon: Users, title: 'HR & Payroll Management', desc: 'Digital employee lifecycle, biometric attendance, tax deduction, and automated salary slip dispatch.' },
                            { icon: Cloud, title: 'Cloud & Secure Access', desc: 'Access your ERP securely from any device with granular, role-based permission controls.' },
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                <div 
                                    className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <item.icon className="size-7 text-[#00477b]" />
                                    </div>

                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Gnosys Digital */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block w-fit mx-auto px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3">
                            Why Gnosys Digital
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Your Implementation Partner - Done Right
                        </h2>
                        <p className="mt-3 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
                            We're not just ERP implementers - we're a digital transformation partner that translates complex operations into streamlined digital workflows.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="w-full">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">
                        {[
                            { 
                                number: '01',
                                icon: Search, 
                                title: 'Business Understanding First', 
                                desc: 'We start with your operational workflows, not just pre-built modules. Every single configuration is tuned to mirror how your business actually runs.'
                            },
                            { 
                                number: '02',
                                icon: Settings, 
                                title: 'End-to-End Implementation', 
                                desc: 'From cloud architecture, system setup, data migration, and custom scripts to team training and go-live assistance - everything is handled in-house.'
                            },
                            { 
                                number: '03',
                                icon: IndianRupee, 
                                title: 'Affordable & Transparent', 
                                desc: 'Transparent milestone pricing and fixed packages tailored for SMEs. No hidden vendor lock-in fees or recurring per-user enterprise licensing traps.'
                            },
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                <div 
                                    className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                    <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                        <item.icon className="size-7 text-[#00477b]" />
                                    </div>

                                    <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">
                                        {item.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SWOT Analysis */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block w-fit mx-auto px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3">
                            Strategic Evaluation
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Client-Side SWOT Analysis
                        </h2>
                        <p className="mt-3 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
                            A structured assessment of strengths, weaknesses, opportunities, and threats to deliver an ERP deployment that drives real ROI.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 shadow-lg shadow-blue-900/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-7xl mx-auto w-full">
                        {/* Strengths */}
                        <ScrollReveal animation="fade-right" delay={100} className="h-full">
                            <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/90 bg-white/75 hover:bg-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.08)] transition-all duration-300 hover:-translate-y-1 group h-full">
                                <span className="absolute -bottom-8 -right-3 text-[9rem] sm:text-[11rem] font-black text-[#00477b]/[0.03] select-none pointer-events-none font-mono">S</span>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="size-11 rounded-2xl bg-[#00477b]/5 text-[#00477b] border border-[#00477b]/10 flex items-center justify-center">
                                            <Zap className="size-5 text-[#00477b]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Internal Advantage</span>
                                            <h3 className="text-xl font-bold text-[#00477b] tracking-tight">Strengths</h3>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-[#00477b] bg-[#00477b]/5 px-3 py-1 rounded-full border border-[#00477b]/10">High Impact</span>
                                </div>
                                <div className="grid grid-cols-1 gap-2.5 relative z-10">
                                    {[
                                        { title: "Centralized Single Source of Truth", sub: "Unified database eliminating manual data silos across departments." },
                                        { title: "Real-Time Operational Insights", sub: "Live financial, inventory, and production metrics at a glance." },
                                        { title: "Automated Multi-Step Workflows", sub: "Eliminates repetitive tasks and cuts approval bottlenecks." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-2xs">
                                            <div className="size-5 rounded-full bg-[#00477b]/10 text-[#00477b] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 stroke-[2.5]" />
                                            </div>
                                            <div>
                                                <div className="text-zinc-800 text-sm font-semibold">{item.title}</div>
                                                <div className="text-zinc-500 text-xs mt-0.5">{item.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Weaknesses */}
                        <ScrollReveal animation="fade-left" delay={150} className="h-full">
                            <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/90 bg-white/75 hover:bg-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.08)] transition-all duration-300 hover:-translate-y-1 group h-full">
                                <span className="absolute -bottom-8 -right-3 text-[9rem] sm:text-[11rem] font-black text-[#00477b]/[0.03] select-none pointer-events-none font-mono">W</span>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="size-11 rounded-2xl bg-[#00477b]/5 text-[#00477b] border border-[#00477b]/10 flex items-center justify-center">
                                            <Search className="size-5 text-[#00477b]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Mitigated by Us</span>
                                            <h3 className="text-xl font-bold text-[#00477b] tracking-tight">Weaknesses</h3>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-[#00477b] bg-[#00477b]/5 px-3 py-1 rounded-full border border-[#00477b]/10">Manageable</span>
                                </div>
                                <div className="grid grid-cols-1 gap-2.5 relative z-10">
                                    {[
                                        { title: "Initial Learning Curve", sub: "Addressed via hands-on interactive role-based team training." },
                                        { title: "Upfront Setup & Mapping Effort", sub: "Fully managed data cleanup and import handled by Gnosys." },
                                        { title: "Initial Dependency on Technical Support", sub: "30-day post-launch hypercare included to ensure complete self-reliance." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-2xs">
                                            <div className="size-5 rounded-full bg-[#00477b]/10 text-[#00477b] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 stroke-[2.5]" />
                                            </div>
                                            <div>
                                                <div className="text-zinc-800 text-sm font-semibold">{item.title}</div>
                                                <div className="text-zinc-500 text-xs mt-0.5">{item.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Opportunities */}
                        <ScrollReveal animation="fade-right" delay={200} className="h-full">
                            <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/90 bg-white/75 hover:bg-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.08)] transition-all duration-300 hover:-translate-y-1 group h-full">
                                <span className="absolute -bottom-8 -right-3 text-[9rem] sm:text-[11rem] font-black text-[#00477b]/[0.03] select-none pointer-events-none font-mono">O</span>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="size-11 rounded-2xl bg-[#00477b]/5 text-[#00477b] border border-[#00477b]/10 flex items-center justify-center">
                                            <Rocket className="size-5 text-[#00477b]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Growth Enablers</span>
                                            <h3 className="text-xl font-bold text-[#00477b] tracking-tight">Opportunities</h3>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-[#00477b] bg-[#00477b]/5 px-3 py-1 rounded-full border border-[#00477b]/10">Scale Up</span>
                                </div>
                                <div className="grid grid-cols-1 gap-2.5 relative z-10">
                                    {[
                                        { title: "Rapid Multi-Branch Scalability", sub: "Easily open new warehouses, locations, and companies with zero license friction." },
                                        { title: "Ecosystem Integrations", sub: "Connect seamlessly with Shopify, WhatsApp, banks, and payment gateways." },
                                        { title: "Data-Driven Strategic Decisions", sub: "Accurate forecasting and cost control backed by real-time analytics." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-2xs">
                                            <div className="size-5 rounded-full bg-[#00477b]/10 text-[#00477b] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 stroke-[2.5]" />
                                            </div>
                                            <div>
                                                <div className="text-zinc-800 text-sm font-semibold">{item.title}</div>
                                                <div className="text-zinc-500 text-xs mt-0.5">{item.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Threats */}
                        <ScrollReveal animation="fade-left" delay={250} className="h-full">
                            <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/90 bg-white/75 hover:bg-white backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.08)] transition-all duration-300 hover:-translate-y-1 group h-full">
                                <span className="absolute -bottom-8 -right-3 text-[9rem] sm:text-[11rem] font-black text-[#00477b]/[0.03] select-none pointer-events-none font-mono">T</span>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="size-11 rounded-2xl bg-[#00477b]/5 text-[#00477b] border border-[#00477b]/10 flex items-center justify-center">
                                            <Database className="size-5 text-[#00477b]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Risk Protection</span>
                                            <h3 className="text-xl font-bold text-[#00477b] tracking-tight">Threats</h3>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-[#00477b] bg-[#00477b]/5 px-3 py-1 rounded-full border border-[#00477b]/10">De-Risked</span>
                                </div>
                                <div className="grid grid-cols-1 gap-2.5 relative z-10">
                                    {[
                                        { title: "Operational Downtime During Migration", sub: "Prevented via parallel running and staged phase rollouts." },
                                        { title: "Employee Resistance to New Systems", sub: "Overcome through user-friendly UI presets and dedicated training." },
                                        { title: "Legacy Data Inconsistencies", sub: "Pre-validated with strict schema checks prior to live database import." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 border border-white/80 shadow-2xs">
                                            <div className="size-5 rounded-full bg-[#00477b]/10 text-[#00477b] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 stroke-[2.5]" />
                                            </div>
                                            <div>
                                                <div className="text-zinc-800 text-sm font-semibold">{item.title}</div>
                                                <div className="text-zinc-500 text-xs mt-0.5">{item.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Process */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block w-fit mx-auto px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3">
                            Implementation Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Our ERPNext Implementation Process
                        </h2>
                        <p className="mt-3 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
                            Our battle-tested implementation framework ensures on-time delivery with zero business disruption.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 shadow-lg shadow-blue-900/5">
                        <div className="max-w-4xl mx-auto w-full">
                            <div className="space-y-4 sm:space-y-5">
                                {[
                                    { 
                                        week: 'WEEK 1-2', 
                                        step: '1', 
                                        tag: 'Phase 1: Discovery',
                                        title: 'Process Discovery & Scoping', 
                                        desc: 'Comprehensive operational mapping, identifying bottlenecks, and defining module requirements.',
                                        deliverables: ['Workflow Blueprint', 'Gap Analysis', 'Module Scope']
                                    },
                                    { 
                                        week: 'WEEK 3-4', 
                                        step: '2', 
                                        tag: 'Phase 2: Configuration',
                                        title: 'System Setup & Architecture', 
                                        desc: 'Configuring company structures, permissions, chart of accounts, master data templates, and user roles.',
                                        deliverables: ['Chart of Accounts', 'User Role Matrix', 'Company Hierarchy']
                                    },
                                    { 
                                        week: 'WEEK 5-6', 
                                        step: '3', 
                                        tag: 'Phase 3: Migration',
                                        title: 'Data Migration & Customization', 
                                        desc: 'Cleansing legacy records, automated master data import, and building bespoke print formats and workflows.',
                                        deliverables: ['Data Validation', 'Custom Print Formats', 'Automation Rules']
                                    },
                                    { 
                                        week: 'WEEK 7',   
                                        step: '4', 
                                        tag: 'Phase 4: Validation',
                                        title: 'User Acceptance Testing & Training', 
                                        desc: 'Simulating end-to-end departmental scenarios and delivering interactive, role-based staff training.',
                                        deliverables: ['UAT Sign-off', 'Role-Based Workshops', 'Standard SOPs']
                                    },
                                    { 
                                        week: 'WEEK 8+',  
                                        step: '5', 
                                        tag: 'Phase 5: Launch',
                                        title: 'Go-Live & Hypercare Support', 
                                        desc: 'Seamless production cutover with zero downtime, continuous monitoring, and dedicated 30-day hypercare.',
                                        deliverables: ['Production Switchover', '30-Day Hypercare', 'Dedicated SLA']
                                    }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)}>
                                        <div className="relative flex items-center gap-3 sm:gap-6 group">
                                            {/* Left: Week Tag */}
                                            <div className="w-18 sm:w-24 shrink-0 text-right">
                                                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-500 uppercase font-mono">
                                                    {item.week}
                                                </span>
                                            </div>

                                            {/* Middle: Number Badge + Centered Connecting Line */}
                                            <div className="relative flex items-center justify-center shrink-0 self-stretch">
                                                {idx !== 0 && (
                                                    <div className="absolute -top-3.5 sm:-top-4 bottom-1/2 w-[2px] bg-zinc-200" />
                                                )}
                                                {idx !== 4 && (
                                                    <div className="absolute top-1/2 -bottom-3.5 sm:-bottom-4 w-[2px] bg-zinc-200" />
                                                )}
                                                <div className="size-9 sm:size-10 rounded-full bg-gradient-to-b from-[#00477b] to-[#00335e] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-blue-900/10 ring-4 ring-white/95 z-10">
                                                    {item.step}
                                                </div>
                                            </div>

                                            {/* Right: Content Card */}
                                            <div className="flex-1 bg-white/85 hover:bg-white backdrop-blur-xl border border-white/90 hover:border-[#00477b]/25 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,71,123,0.08)] transition-all duration-300 hover:-translate-y-0.5">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                                                    <h3 className="text-base sm:text-lg font-bold text-[#00477b] tracking-tight">
                                                        {item.title}
                                                    </h3>
                                                    <span className="w-fit text-[11px] font-semibold text-[#00477b] bg-[#00477b]/5 border border-[#00477b]/10 px-2.5 py-0.5 rounded-full">
                                                        {item.tag}
                                                    </span>
                                                </div>

                                                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal mb-3.5">
                                                    {item.desc}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-100">
                                                    <span className="text-[11px] font-medium text-zinc-400 mr-1">Deliverables:</span>
                                                    {item.deliverables.map((deliv, dIdx) => (
                                                        <span key={dIdx} className="inline-flex items-center gap-1.5 text-xs text-zinc-700 bg-zinc-50 border border-zinc-200/70 px-2.5 py-1 rounded-lg">
                                                            <Check className="size-3 text-[#00477b]" />
                                                            {deliv}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                            
                            <div className="mt-8 sm:mt-10 text-center">
                                <Button asChild className="bg-[#00477b] hover:bg-[#003355] text-white px-8 h-12 text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer border-none">
                                    <Link href="/free-digital-consultation">
                                        <span>Start Your Implementation</span>
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Packages */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                        <span className="inline-block w-fit mx-auto px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3">
                            Engagement Models / Packages
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Flexible Plans For Every Stage of ERP Journey
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 shadow-lg shadow-blue-900/5">
                        <div className="max-w-7xl mx-auto w-full">
                            <ScrollReveal animation="fade-up" delay={100}>
                                <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.05)] overflow-hidden mb-6">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-[#00477b] to-[#003862] text-white">
                                                    <th className="py-5 px-6 sm:px-8 font-bold text-sm uppercase tracking-wider w-1/4">Plan</th>
                                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/4">Ideal For</th>
                                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3">What's Included</th>
                                                    <th className="py-5 px-6 sm:px-8 font-bold text-sm uppercase tracking-wider w-1/6 text-right sm:text-left">Starting From</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-zinc-200/50 text-sm">
                                                <tr className="hover:bg-white/80 transition-colors">
                                                    <td className="py-5 px-6 sm:px-8 font-bold text-zinc-900 text-base">Starter Implementation</td>
                                                    <td className="py-5 px-6 text-zinc-600 font-medium">Small business (1-2 modules)</td>
                                                    <td className="py-5 px-6 text-zinc-600 font-medium">Basic setup, 5 users, core training</td>
                                                    <td className="py-5 px-6 sm:px-8 text-zinc-900 font-bold text-base text-right sm:text-left">₹50,000</td>
                                                </tr>
                                                <tr className="hover:bg-white/80 transition-colors bg-blue-50/20">
                                                    <td className="py-5 px-6 sm:px-8 font-bold text-zinc-900 text-base">Standard Implementation</td>
                                                    <td className="py-5 px-6 text-zinc-600 font-medium">SMEs (3-5 modules)</td>
                                                    <td className="py-5 px-6 text-zinc-600 font-medium">Full configuration, minor customization, data migration</td>
                                                    <td className="py-5 px-6 sm:px-8 text-zinc-900 font-bold text-base text-right sm:text-left">₹1,25,000</td>
                                                </tr>
                                                <tr className="hover:bg-white/80 transition-colors">
                                                    <td className="py-5 px-6 sm:px-8 font-bold text-zinc-900 text-base">Advanced Setup</td>
                                                    <td className="py-5 px-6 text-zinc-600 font-medium">Growing businesses</td>
                                                    <td className="py-5 px-6 text-zinc-600 font-medium">Multi-company setup, advanced workflows, integrations</td>
                                                    <td className="py-5 px-6 sm:px-8 text-zinc-900 font-bold text-base text-right sm:text-left">₹2,50,000+</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal animation="fade-up" delay={150}>
                                <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl p-5 text-center shadow-sm max-w-4xl mx-auto">
                                    <p className="text-zinc-700 font-medium text-base">
                                        Need something custom? We also offer on-premise deployment, self-hosting, and extended AMC support.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <div className="mt-6 text-center">
                                <Button asChild className="bg-[#00477b] hover:bg-[#003355] text-white px-8 h-12 text-sm font-bold rounded-full shadow-md border-none transition-all cursor-pointer">
                                    <Link href="/free-digital-consultation">Get a Detailed Quote</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Add-Ons */}
            <section className="py-10 sm:py-12 bg-transparent border-t border-white/40 overflow-hidden">
                <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <ScrollReveal animation="fade-right" delay={100} className="w-full lg:w-[57%]">
                        <div className="relative overflow-hidden shadow-[20px_0_50px_-5px_rgba(0,0,0,0.28),_10px_0_25px_-5px_rgba(0,71,123,0.3)] ring-1 ring-zinc-200/50 aspect-[16/10] sm:aspect-[16/9.5] bg-white rounded-r-[2rem] lg:rounded-r-[3rem]">
                            <img 
                                src="/assets/erp-imp.webp" 
                                alt="ERPNext Implementation Add-Ons" 
                                width="900" 
                                height="550" 
                                loading="lazy" 
                                decoding="async" 
                                className="w-full h-full object-cover object-center" 
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-left" delay={150} className="w-full lg:w-[43%] px-4 sm:px-6 lg:px-8 lg:pr-12">
                        <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-white text-[12px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Powerful Extensions</span>
                        <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">ERPNext Add-Ons We Offer</h2>
                        <p className="text-sm sm:text-[15px] text-gray-600 mb-6 leading-relaxed max-w-lg">
                            Extend your ERP with modules and automations designed for your industry. Scale without limits using our custom integrations.
                        </p>
                        
                        <ul className="space-y-2.5 mb-8">
                            {[
                                "API Integrations (CRM, Shopify, WooCommerce)",
                                "WhatsApp & Email Automation",
                                "Advanced Reporting Dashboards",
                                "Custom Workflows & Approval Systems",
                                "Server Setup & Cloud Hosting (AWS, DigitalOcean)",
                                "Mobile App Enablement"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 bg-white/70 backdrop-blur-md border border-white/80 rounded-xl px-3.5 py-2.5 shadow-xs hover:shadow-sm hover:bg-white hover:-translate-y-0.5 transition-all duration-300 group">
                                    <div className="size-6 rounded-full bg-blue-50/80 text-[#00477b] border border-blue-100/60 flex items-center justify-center shrink-0 shadow-2xs">
                                        <Check className="size-3.5 stroke-[2.5]" />
                                    </div>
                                    <span className="text-zinc-800 font-semibold text-[13.5px]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button asChild className="w-fit bg-[#00477b] hover:bg-[#003355] text-white px-7 h-11 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-blue-900/30 hover:-translate-y-0.5 transition-all duration-300 border-none cursor-pointer">
                            <Link href="/free-digital-consultation">Explore Custom Solutions</Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </section>

            {/* 8. FAQs & Case Study */}
            <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40">
                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-12 px-3 sm:px-6 lg:px-8 shadow-lg shadow-blue-900/5">
                        <div className="max-w-7xl mx-auto w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
                        
                        {/* Left: Case Study */}
                        <ScrollReveal animation="fade-right" delay={100} className="flex flex-col h-full">
                            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3.5">
                                Case Study
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3.5 leading-tight">
                                ERPNext In Action
                            </h2>
                            <p className="text-base text-zinc-600 mb-6 leading-relaxed max-w-lg">
                                See how a real SME transformed their business operations, streamlined workflows, and boosted efficiency using our tailored ERPNext solutions.
                            </p>
                            
                            <div className="relative bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl p-7 sm:p-8 shadow-xl shadow-blue-900/5 text-zinc-900 overflow-hidden group flex-grow">
                                <div className="absolute -top-4 -right-4 p-6 opacity-30 text-blue-200 group-hover:scale-110 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-zinc-200"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
                                </div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-2 mb-5 text-amber-500">
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                    </div>
                                    <p className="text-base sm:text-lg font-normal leading-relaxed mb-6 text-zinc-800">
                                        "Implementing ERPNext with Gnosys Digital was a game-changer. We reduced operational costs by 30% and improved delivery times significantly within the first quarter."
                                    </p>
                                    <div className="mt-auto pt-5 border-t border-zinc-200/80">
                                        <h4 className="font-bold text-base text-[#00477b]">Rajesh Kumar</h4>
                                        <p className="text-zinc-500 text-xs font-medium">CEO, Manufacturing Solutions Pvt. Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right: FAQs */}
                        <ScrollReveal animation="fade-left" delay={150} className="flex flex-col h-full mt-8 lg:mt-0">
                            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#00477b] uppercase tracking-[0.15em] shadow-sm border border-white/80 mb-3.5">
                                Support & Queries
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                                Implementation FAQs
                            </h2>
                            
                            <div className="flex-grow">
                                <FaqAccordion 
                                    items={faqs}
                                    iconPosition="right"
                                    iconSize={5}
                                    iconColorClass="text-[#00477b]"
                                    containerClassName="bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden"
                                    itemClassName="border-b border-zinc-200/60 last:border-0"
                                    buttonClassName="text-[#00477b] font-medium px-6 sm:px-8 py-5 text-left hover:bg-white/80 transition-colors text-sm sm:text-base"
                                    answerClassName="px-6 sm:px-8 pb-6 text-gray-600 bg-white/40 pt-2 leading-relaxed text-xs sm:text-sm"
                                />
                            </div>
                        </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Contact Form */}
            <section className="pt-10 sm:pt-12 pb-12 sm:pb-14 bg-transparent border-t border-white/40">
                <div className="w-full">
                    <div className="py-4 sm:py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-14 items-center">
                                
                                {/* Left: Text Content */}
                                <ScrollReveal animation="fade-right" delay={100} className="flex flex-col lg:pr-8">
                                    <span className="inline-block w-fit px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Get Started</span>
                                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">Let's Simplify Your Operations With ERPNext</h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                        Tell us about your business - we'll recommend the right modules, timeline, and cost. Start your digital transformation journey today.
                                    </p>
                                    <div className="space-y-6 mt-4 hidden lg:block">
                                        <div className="flex items-center gap-4 text-zinc-700">
                                            <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-[#00477b] shrink-0 border border-blue-100">
                                                <Check className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#00477b] text-lg">Free Consultation</h4>
                                                <p className="text-sm text-gray-500">Expert advice tailored to your needs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-zinc-700">
                                            <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-[#00477b] shrink-0 border border-blue-100">
                                                <Zap className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#00477b] text-lg">Fast Implementation</h4>
                                                <p className="text-sm text-gray-500">Get up and running in weeks, not months</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right: Form */}
                                <ScrollReveal animation="fade-left" delay={150}>
                                    <form className="bg-white/50 backdrop-blur-md border border-white/50 p-8 md:p-10 rounded-[2rem] shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="firstName" className="text-[#00477b] font-semibold text-[15px] ml-1">Your Name <span className="text-red-500">*</span></Label>
                                                <Input id="firstName" className="bg-white/60 border-none shadow-sm h-14 rounded-[20px] px-5 text-slate-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-[#00477b]/20" />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="lastName" className="text-[#00477b] font-semibold text-[15px] ml-1">Your Surname <span className="text-red-500">*</span></Label>
                                                <Input id="lastName" className="bg-white/60 border-none shadow-sm h-14 rounded-[20px] px-5 text-slate-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-[#00477b]/20" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-[#00477b] font-semibold text-[15px] ml-1">Your Email <span className="text-red-500">*</span></Label>
                                                <Input id="email" type="email" className="bg-white/60 border-none shadow-sm h-14 rounded-[20px] px-5 text-slate-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-[#00477b]/20" />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-[#00477b] font-semibold text-[15px] ml-1">Phone Number <span className="text-red-500">*</span></Label>
                                                <Input id="phone" type="tel" className="bg-white/60 border-none shadow-sm h-14 rounded-[20px] px-5 text-slate-800 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-[#00477b]/20" />
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-8">
                                            <Label htmlFor="businessType" className="text-[#00477b] font-semibold text-[15px] ml-1">Business Type <span className="text-red-500">*</span></Label>
                                            <select id="businessType" className="w-full bg-white/60 border-none shadow-sm text-slate-800 rounded-[20px] h-14 px-5 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#00477b]/20">
                                                <option className="text-zinc-900">--- Select Choice ---</option>
                                                <option className="text-zinc-900">Manufacturing</option>
                                                <option className="text-zinc-900">Retail / E-commerce</option>
                                                <option className="text-zinc-900">Services</option>
                                                <option className="text-zinc-900">Other</option>
                                            </select>
                                        </div>

                                        <div className="mb-8">
                                            <Label className="mb-4 block text-[#00477b] font-semibold text-[15px] ml-1">Modules Needed <span className="text-red-500">*</span></Label>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-1">
                                                {[
                                                    "Accounting",
                                                    "Inventory",
                                                    "Manufacturing",
                                                    "CRM & Sales",
                                                    "HR & Payroll",
                                                    "Cloud Access"
                                                ].map((mod, idx) => (
                                                    <div key={idx} className="flex items-center space-x-3">
                                                        <Checkbox id={`mod-${idx}`} className="border-slate-300 rounded-[6px] data-[state=checked]:bg-[#00477b] data-[state=checked]:border-[#00477b]" />
                                                        <Label htmlFor={`mod-${idx}`} className="font-normal text-[15px] text-slate-700 cursor-pointer">{mod}</Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-10">
                                            <Label htmlFor="message" className="text-[#00477b] font-semibold text-[15px] ml-1">Your Message</Label>
                                            <Textarea id="message" className="bg-white/60 border-none shadow-sm text-slate-800 placeholder:text-gray-500 min-h-[140px] rounded-[20px] p-5 focus-visible:ring-2 focus-visible:ring-[#00477b]/20" />
                                        </div>

                                        <Button className="bg-[#00477b] hover:bg-[#003355] text-white h-[52px] px-8 text-[15px] font-bold rounded-full shadow-md transition-all border-none">
                                            Send Message
                                        </Button>
                                    </form>
                                </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}