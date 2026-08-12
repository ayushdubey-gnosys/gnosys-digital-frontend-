import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
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
    Check
} from 'lucide-react';
import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';

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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Simplify Your Operations With ERPNext Fully Implemented, Configured, And Supported
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-200/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Automate accounting, inventory, CRM, and HR — all in one open-source platform. We help SMEs deploy ERPNext fast, affordably, and with zero chaos.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full px-8 h-12 text-base font-bold shadow-lg">
                            Book a free consultation
                        </Button>
                        <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full px-8 h-12 text-base font-bold shadow-lg">
                            Request a Quote
                        </Button>
                    </div>
                    <div className="mt-12 text-sm text-zinc-300 font-medium tracking-wide">
                        Trusted by growing manufacturers, distributors and service providers across India.
                    </div>
                </div>
            </section>

            {/* 2. Why ERPNext Grid */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Why ERPNext</span>
                    <h2 className="text-3xl font-bold text-[#00477b]">Why ERPNext — One Platform For Your Entire Business</h2>
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
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Why Gnosys Digital</span>
                    <h2 className="text-3xl font-bold text-[#00477b]">Your Implementation Partner For ERPNext — Done Right</h2>
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
                    <h2 className="text-3xl font-bold text-[#00477b]">Client-Side SWOT Analysis</h2>
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
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Implementation Process</span>
                    <h2 className="text-3xl font-bold text-[#00477b]">Our ERPNext Implementation Process</h2>
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
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white px-8 h-12 text-sm font-bold shadow-md">
                                Start Your Implementation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Packages */}
            <section className="pt-24 bg-transparent border-t border-white/40">
                <div className="w-full px-4 lg:px-8 mb-12 text-center">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Engagement Models / Packages</span>
                    <h2 className="text-3xl font-bold text-[#00477b]">Flexible Plans For Every Stage Of Your ERP Journey</h2>
                </div>

                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                        <div className="max-w-5xl mx-auto w-full">
                            <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl shadow-sm overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-zinc-900 text-white">
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
                        <Button className="bg-[#00477b] hover:bg-[#00477b] text-white px-8 h-12 text-sm font-bold shadow-md">
                            Get a Detailed Quote
                        </Button>
                    </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Add-Ons */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-zinc-200/50">
                                <img src="/assets/erp-cycle.png" alt="ERP Cycle" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-[#00477b] mb-4">ERPNext Add-Ons We Offer</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Extend your ERP with modules and automations designed for your industry.
                            </p>
                            
                            <ul className="space-y-4 mb-8">
                                {[
                                    "API Integrations (CRM, Shopify, WooCommerce)",
                                    "WhatsApp & Email Automation",
                                    "Advanced Reporting Dashboards",
                                    "Custom Workflows & Approval Systems",
                                    "Server Setup & Cloud Hosting (AWS, DigitalOcean)",
                                    "Mobile App Enablement"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-zinc-100 text-zinc-700 rounded-sm p-0.5">
                                            <Check className="size-3.5 stroke-[3]" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white px-8 h-12 text-sm font-bold shadow-md">
                                Explore Custom Solutions
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQs & Case Study */}
            <section className="py-24 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 max-w-3xl">
                    
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Case Study</span>
                        <h2 className="text-3xl font-bold text-[#00477b]">ERPNext In Action — Real SME Success Story</h2>
                        <div className="mt-6 bg-white/40 backdrop-blur-lg p-6 rounded-xl border border-white/60 shadow-sm text-zinc-600 font-medium text-sm">
                            [Case study placeholder - add relevant customer success story here]
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#00477b]">ERPNext Implementation FAQs</h2>
                    </div>

                    <FaqAccordion 
                        items={faqs}
                        iconPosition="right"
                        iconSize={5}
                        iconColorClass="text-gray-400"
                        containerClassName="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl shadow-sm"
                        itemClassName="border-b border-white/40 last:border-0"
                        buttonClassName="text-zinc-900 font-bold px-6 py-5 hover:bg-white/40"
                        answerClassName="px-6 pb-5 text-gray-600 border-t border-gray-50 bg-white/30 pt-4"
                    />
                </div>
            </section>

            {/* 9. Contact Form */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#00477b]">Let's Simplify Your Operations With ERPNext</h2>
                        <p className="mt-3 text-gray-500">Tell us about your business — we'll recommend the right modules, timeline, and cost.</p>
                    </div>

                    <form className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">Name *</Label>
                                <Input id="firstName" placeholder="First" className="bg-white/60 border-white/80 h-11" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">&nbsp;</Label>
                                <Input id="lastName" placeholder="Last" className="bg-white/60 border-white/80 h-11" />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6">
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" className="bg-white/60 border-white/80 h-11" />
                        </div>

                        <div className="space-y-2 mb-6">
                            <Label htmlFor="phone">Phone *</Label>
                            <Input id="phone" type="tel" className="bg-white/60 border-white/80 h-11" />
                        </div>

                        <div className="space-y-2 mb-8">
                            <Label htmlFor="businessType">Business Type *</Label>
                            <select id="businessType" className="w-full bg-white/60 border border-white/80 rounded-md h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20">
                                <option>--- Select Choice ---</option>
                                <option>Manufacturing</option>
                                <option>Retail / E-commerce</option>
                                <option>Services</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <Label className="mb-4 block">Modules Needed *</Label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    "Accounting & Finance",
                                    "Inventory & Warehouse",
                                    "Manufacturing",
                                    "CRM & Sales",
                                    "HR & Payroll",
                                    "Cloud-Based Access"
                                ].map((mod, idx) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <Checkbox id={`mod-${idx}`} />
                                        <Label htmlFor={`mod-${idx}`} className="font-normal text-sm cursor-pointer">{mod}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" className="bg-white/60 border-white/80 min-h-[120px]" />
                        </div>

                        <Button className="w-full bg-[#00477b] hover:bg-[#00477b] text-white h-12 text-base font-bold rounded-lg shadow-md">
                            Submit Request
                        </Button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}