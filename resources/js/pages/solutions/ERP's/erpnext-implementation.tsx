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
    Star
} from 'lucide-react';
import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextImplementation() {

    const faqs = [
        {
            question: "How long does it take to implement ERPNext?",
            answer: "Typically 3–6 weeks depending on scope and customization."
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

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32 flex flex-col items-center justify-center text-center min-h-[60vh] text-white">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/erp-imp.webp')", backgroundColor: '#09090b' }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Simplify Your Operations With ERPNext Fully Implemented, Configured, And Supported
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <p className="text-lg md:text-xl text-zinc-200/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Automate accounting, inventory, CRM, and HR — all in one open-source platform. We help SMEs deploy ERPNext fast, affordably, and with zero chaos.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                                <Link href="/free-digital-consultation">
                                    <span className="relative z-10 flex items-center gap-2">Book a free consultation <span className="text-xl">&rarr;</span></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Link>
                            </Button>
                            <Button className="bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white rounded-full px-8 h-14 text-base font-bold shadow-lg transition-all duration-300">
                                Request a Quote
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={380}>
                        <div className="mt-12 text-sm text-zinc-300 font-medium tracking-wide">
                            Trusted by growing manufacturers, distributors and service providers across India.
                        </div>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Why ERPNext Grid */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <span className="inline-block w-fit mx-auto px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Why ERPNext</span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Why ERPNext — One Platform For Your Entire Business</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        ERPNext helps you run your entire business from one place — with zero recurring license costs. It's open-source, modular, and designed for SMEs who want control, scalability, and savings.
                    </p>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
                        {[
                            { icon: Calculator, title: 'Accounting & Finance', desc: 'Manage invoices, ledgers, and reports in real-time.' },
                            { icon: Package, title: 'Inventory & Warehouse', desc: 'Track stock levels, batches, and transfers effortlessly.' },
                            { icon: Factory, title: 'Manufacturing', desc: 'Manage production planning, BOMs, and material lists.' },
                            { icon: Briefcase, title: 'CRM & Sales', desc: 'Automate leads, quotes, and follow-ups.' },
                            { icon: Users, title: 'HR & Payroll', desc: 'Employee records, attendance, and salary slips – all in one place.' },
                            { icon: Cloud, title: 'Cloud-Based Access', desc: 'Work from anywhere with role-based permissions.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-zinc-100 text-zinc-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="size-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Gnosys Digital */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <span className="inline-block w-fit mx-auto px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Why Gnosys Digital</span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Your Implementation Partner For ERPNext — Done Right</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We're not just ERP implementers — we're a digital transformation partner who understands SMEs.
                    </p>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
                        {[
                            { icon: Search, title: 'Business Understanding First', desc: 'We start with your workflows, not just modules. Every setup is aligned with how your business runs.' },
                            { icon: Settings, title: 'End-to-End Implementation', desc: 'From installation and configuration to training and hosting - everything handled in-house.' },
                            { icon: IndianRupee, title: 'Affordable & Transparent', desc: 'Fixed-cost packages designed for small businesses - no enterprise pricing traps.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white shadow-sm text-zinc-700 rounded-full flex items-center justify-center">
                                        <item.icon className="size-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#00477b]">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SWOT Analysis */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Client-Side SWOT Analysis</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A clear understanding of the client's strengths, weaknesses, opportunities, and threats helps us deliver a tailored ERP solution that drives efficiency and growth.
                    </p>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                        {/* Strengths */}
                        <div className="relative overflow-hidden p-8 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <span className="absolute -bottom-10 -right-4 text-[10rem] font-extrabold text-zinc-950/[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2">S</span>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm text-zinc-800 flex items-center justify-center border border-zinc-100">
                                    <Zap className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] uppercase tracking-wider">Strengths</h3>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                {["Centralized data", "Real-time insights", "Automated workflows"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-zinc-600 text-sm font-medium">
                                        <Check className="size-4 text-zinc-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Weaknesses */}
                        <div className="relative overflow-hidden p-8 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <span className="absolute -bottom-10 -right-4 text-[10rem] font-extrabold text-zinc-950/[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2">W</span>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm text-zinc-800 flex items-center justify-center border border-zinc-100">
                                    <Search className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] uppercase tracking-wider">Weaknesses</h3>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                {["Learning curve", "Initial setup effort", "Reliance on support"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-zinc-600 text-sm font-medium">
                                        <Check className="size-4 text-zinc-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Opportunities */}
                        <div className="relative overflow-hidden p-8 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <span className="absolute -bottom-10 -right-4 text-[10rem] font-extrabold text-zinc-950/[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2">O</span>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm text-zinc-800 flex items-center justify-center border border-zinc-100">
                                    <Rocket className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] uppercase tracking-wider">Opportunities</h3>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                {["Business growth", "System integrations", "Data-driven decisions"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-zinc-600 text-sm font-medium">
                                        <Check className="size-4 text-zinc-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Threats */}
                        <div className="relative overflow-hidden p-8 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <span className="absolute -bottom-10 -right-4 text-[10rem] font-extrabold text-zinc-950/[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2">T</span>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm text-zinc-800 flex items-center justify-center border border-zinc-100">
                                    <Database className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] uppercase tracking-wider">Threats</h3>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                {["Implementation disruption", "Employee resistance", "Migration risks"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-zinc-600 text-sm font-medium">
                                        <Check className="size-4 text-zinc-400 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Process */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <span className="inline-block w-fit mx-auto px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Implementation Process</span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Our ERPNext Implementation Process</h2>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto w-full">
                            {[
                                { icon: Search, title: "Requirement Analysis", desc: "Identify workflows, pain points & modules." },
                                { icon: Settings, title: "System Setup", desc: "Configure modules, roles & permissions." },
                                { icon: Database, title: "Data Migration", desc: "Clean and import existing database details." },
                                { icon: CheckCircle2, title: "Customization", desc: "Build custom fields, workflows & approvals." },
                                { icon: GraduationCap, title: "Training & Testing", desc: "Validate system features with end users." },
                                { icon: Rocket, title: "Go-Live & Support", desc: "Deploy system and provide continuous support." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white/40 border border-zinc-200/80 p-5 rounded-2xl flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center justify-between w-full mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/60 text-zinc-800 flex items-center justify-center">
                                            <step.icon className="size-5" />
                                        </div>
                                        <span className="text-xs font-bold text-zinc-400">0{idx + 1}</span>
                                    </div>
                                    <h4 className="font-bold text-[#00477b] text-sm mb-2 leading-snug">{step.title}</h4>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <Button className="bg-[#00477b] hover:bg-[#003355] text-white px-8 h-12 text-sm font-bold shadow-md border-none transition-all">
                                Start Your Implementation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Packages */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <span className="inline-block w-fit mx-auto px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Engagement Models / Packages</span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Flexible Plans For Every Stage Of Your ERP Journey</h2>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="max-w-5xl mx-auto w-full">
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl shadow-sm overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#00477b] text-white">
                                        <th className="py-5 px-6 font-bold w-1/4">Plan</th>
                                        <th className="py-5 px-6 font-bold w-1/4 border-l border-white/20">Ideal For</th>
                                        <th className="py-5 px-6 font-bold w-1/3 border-l border-white/20">What's Included</th>
                                        <th className="py-5 px-6 font-bold w-1/6 border-l border-white/20">Starting From</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/40 hover:bg-white/40 transition-colors">
                                        <td className="py-5 px-6 font-bold text-zinc-900">Starter Implementation</td>
                                        <td className="py-5 px-6 text-gray-600 border-l border-white/40">Small business (1-2 modules)</td>
                                        <td className="py-5 px-6 text-gray-600 border-l border-white/40">Basic setup, 5 users, core training</td>
                                        <td className="py-5 px-6 text-zinc-900 font-semibold border-l border-white/40">₹50,000</td>
                                    </tr>
                                    <tr className="border-b border-white/40 hover:bg-white/40 transition-colors bg-white/30">
                                        <td className="py-5 px-6 font-bold text-zinc-900">Standard Implementation</td>
                                        <td className="py-5 px-6 text-gray-600 border-l border-white/40">SMEs (3-5 modules)</td>
                                        <td className="py-5 px-6 text-gray-600 border-l border-white/40">Full configuration, minor customization, data migration</td>
                                        <td className="py-5 px-6 text-zinc-900 font-semibold border-l border-white/40">₹1,25,000</td>
                                    </tr>
                                    <tr className="hover:bg-white/40 transition-colors">
                                        <td className="py-5 px-6 font-bold text-zinc-900">Advanced Setup</td>
                                        <td className="py-5 px-6 text-gray-600 border-l border-white/40">Growing businesses</td>
                                        <td className="py-5 px-6 text-gray-600 border-l border-white/40">Multi-company setup, advanced workflows, integrations</td>
                                        <td className="py-5 px-6 text-zinc-900 font-semibold border-l border-white/40">₹2,50,000+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl p-6 text-center shadow-sm">
                        <p className="text-gray-700 font-medium text-lg">
                            Need something custom? We also offer on-premise deployment, self-hosting, and extended AMC support.
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <Button className="bg-[#00477b] hover:bg-[#003355] text-white px-8 h-12 text-sm font-bold shadow-md border-none transition-all">
                            Get a Detailed Quote
                        </Button>
                    </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Add-Ons */}
            <section className="py-24 bg-transparent border-t border-white/40 overflow-hidden">
                <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative overflow-hidden shadow-2xl ring-1 ring-zinc-200/50 aspect-[4/3] lg:aspect-[16/10] bg-white rounded-r-[2rem]">
                            <img src="/assets/erp-cycle.png" alt="ERP Next Cycle Workflow" width="800" height="600" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-12 lg:pr-24">
                        <span className="inline-block w-fit px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-6">Powerful Extensions</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">ERPNext Add-Ons We Offer</h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                            Extend your ERP with modules and automations designed for your industry. Scale without limits using our custom integrations.
                        </p>
                        
                        <ul className="space-y-4 mb-12">
                            {[
                                "API Integrations (CRM, Shopify, WooCommerce)",
                                "WhatsApp & Email Automation",
                                "Advanced Reporting Dashboards",
                                "Custom Workflows & Approval Systems",
                                "Server Setup & Cloud Hosting (AWS, DigitalOcean)",
                                "Mobile App Enablement"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-zinc-200/60 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-200/60 hover:-translate-y-0.5 transition-all duration-300 group">
                                    <div className="bg-blue-50 text-blue-600 rounded-full p-2 shadow-sm group-hover:bg-[#00477b] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <Check className="size-4 stroke-[3]" />
                                    </div>
                                    <span className="text-zinc-800 font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button className="bg-[#00477b] hover:bg-[#003355] text-white px-8 h-14 rounded-xl text-base font-bold shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 border-none">
                            Explore Custom Solutions
                        </Button>
                    </div>
                </div>
            </section>

            {/* 8. FAQs & Case Study */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-20 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="max-w-[90rem] mx-auto w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        
                        {/* Left: Case Study */}
                        <div className="flex flex-col h-full lg:pr-8">
                            <span className="inline-block w-fit px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Case Study</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">ERPNext In Action</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                See how a real SME transformed their business operations, streamlined workflows, and boosted efficiency using our tailored ERPNext solutions.
                            </p>
                            
                            <div className="relative bg-transparent backdrop-blur-sm border border-white/60 rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-900/5 text-zinc-900 overflow-hidden group flex-grow">
                                <div className="absolute -top-4 -right-4 p-6 opacity-30 text-blue-200 group-hover:scale-110 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-zinc-200"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
                                </div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-2 mb-6 text-[#00477b]">
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                        <Star className="size-5 fill-current" />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-normal leading-relaxed mb-8 text-zinc-800">
                                        "Implementing ERPNext with Gnosys Digital was a game-changer. We reduced operational costs by 30% and improved delivery times significantly within the first quarter."
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-zinc-200/80">
                                        <h4 className="font-bold text-lg text-[#00477b]">Rajesh Kumar</h4>
                                        <p className="text-zinc-500 text-sm font-medium">CEO, Manufacturing Solutions Pvt. Ltd.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: FAQs */}
                        <div className="flex flex-col h-full mt-10 lg:mt-0">
                            <span className="inline-block w-fit px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Support & Queries</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-8 leading-tight">Implementation FAQs</h2>
                            
                            <div className="flex-grow">
                                <FaqAccordion 
                                    items={faqs}
                                    iconPosition="right"
                                    iconSize={5}
                                    iconColorClass="text-[#00477b]"
                                    containerClassName="bg-white/60 backdrop-blur-xl border border-zinc-200/60 rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden"
                                    itemClassName="border-b border-zinc-200/60 last:border-0"
                                    buttonClassName="text-zinc-900 font-medium px-6 sm:px-8 py-6 text-left hover:bg-white/80 transition-colors"
                                    answerClassName="px-6 sm:px-8 pb-8 text-gray-600 bg-white/40 pt-2 leading-relaxed"
                                />
                            </div>
                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Contact Form */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="w-full">
                    <div className="py-20 px-4 lg:px-12 xl:px-24">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 items-center">
                                
                                {/* Left: Text Content */}
                                <div className="flex flex-col lg:pr-8">
                                    <span className="inline-block w-fit px-5 py-2 rounded-full bg-white text-[13px] font-bold text-[#00477b] uppercase tracking-[0.1em] shadow-sm mb-4">Get Started</span>
                                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">Let's Simplify Your Operations With ERPNext</h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                        Tell us about your business — we'll recommend the right modules, timeline, and cost. Start your digital transformation journey today.
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
                                </div>

                                {/* Right: Form */}
                                <div>
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}