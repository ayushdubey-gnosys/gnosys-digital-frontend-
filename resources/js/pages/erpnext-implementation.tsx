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
import { useState } from 'react';

export default function ErpnextImplementation() {
    const [openFaq, setOpenFaq] = useState<number>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    const faqs = [
        {
            question: "How long does it take to implement ERPNext?",
            answer: "Typically 3-6 weeks depending on scope and customization."
        },
        {
            question: "Do I need my own server?",
            answer: "No, we can provide cloud hosting on AWS or DigitalOcean, or we can set it up on your existing on-premise infrastructure."
        },
        {
            question: "Can I migrate from Tally or Excel?",
            answer: "Yes! We handle full data migration from your legacy systems including Tally, Excel, or other ERPs."
        },
        {
            question: "What post-launch support do you offer?",
            answer: "We offer continuous guidance, bug fixes, training, and custom feature additions to ensure stable adoption."
        }
    ];

    return (
        <MainLayout>
            <Head title="ERPNext Implementation Partner" />

            {/* 1. Hero Section */}
            <section className="relative bg-[#00477b] text-white overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Simplify Your Operations With ERPNext Fully Implemented, Configured, And Supported
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Automate accounting, inventory, CRM, and HR — all in one open-source platform. We help SMEs deploy ERPNext fast, affordably, and with zero chaos.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#00477b] hover:bg-gray-100 rounded-full px-8 h-12 text-base font-bold shadow-lg">
                            Book a free consultation
                        </Button>
                        <Button className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-full px-8 h-12 text-base font-bold shadow-lg">
                            Request a Quote
                        </Button>
                    </div>
                    <div className="mt-12 text-sm text-blue-200 font-medium tracking-wide">
                        Trusted by growing manufacturers, distributors and service providers across India.
                    </div>
                </div>
            </section>

            {/* 2. Why ERPNext Grid */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Why ERPNext</span>
                        <h2 className="text-3xl font-bold text-zinc-900">Why ERPNext — One Platform For Your Entire Business</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            ERPNext helps you run your entire business from one place — with zero recurring license costs. It's open-source, modular, and designed for SMEs who want control, scalability, and savings.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Calculator, title: 'Accounting & Finance', desc: 'Manage invoices, ledgers, and reports in real-time.' },
                            { icon: Package, title: 'Inventory & Warehouse', desc: 'Track stock levels, batches, and transfers effortlessly.' },
                            { icon: Factory, title: 'Manufacturing', desc: 'Manage production planning, BOMs, and material lists.' },
                            { icon: Briefcase, title: 'CRM & Sales', desc: 'Automate leads, quotes, and follow-ups.' },
                            { icon: Users, title: 'HR & Payroll', desc: 'Employee records, attendance, and salary slips – all in one place.' },
                            { icon: Cloud, title: 'Cloud-Based Access', desc: 'Work from anywhere with role-based permissions.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-50 text-[#00477b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="size-7" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Gnosys Digital */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Why Gnosys Digital</span>
                        <h2 className="text-3xl font-bold text-zinc-900">Your Implementation Partner For ERPNext — Done Right</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We're not just ERP implementers — we're a digital transformation partner who understands SMEs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Search, title: 'Business Understanding First', desc: 'We start with your workflows, not just modules. Every setup is aligned with how your business runs.' },
                            { icon: Settings, title: 'End-to-End Implementation', desc: 'From installation and configuration to training and hosting - everything handled in-house.' },
                            { icon: IndianRupee, title: 'Affordable & Transparent', desc: 'Fixed-cost packages designed for small businesses - no enterprise pricing traps.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white shadow-sm text-[#00477b] rounded-full flex items-center justify-center">
                                        <item.icon className="size-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SWOT Analysis */}
            <section className="py-20 bg-transparent border-t border-white/40">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-zinc-900">Client-Side SWOT Analysis</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            A clear understanding of the client's strengths, weaknesses, opportunities, and threats helps us deliver a tailored ERP solution that drives efficiency and growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-3xl mx-auto bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/60">
                        <div className="p-10 border-b md:border-b-0 md:border-r border-white/40 flex items-start gap-6">
                            <div className="text-6xl font-black text-[#00477b]">S</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                    <Zap className="size-5 text-yellow-500" /> Strengths
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Centralized data</li>
                                    <li>• Real-time insights</li>
                                    <li>• Automated workflows</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-10 bg-white/20 flex items-start gap-6">
                            <div className="text-6xl font-black text-[#00477b]/50">W</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                    <Search className="size-5 text-red-400" /> Weaknesses
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Learning curve</li>
                                    <li>• Initial setup effort</li>
                                    <li>• Reliance on support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-10 bg-white/20 border-t md:border-t-0 md:border-r border-white/40 flex items-start gap-6">
                            <div className="text-6xl font-black text-[#00477b]/50">O</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                    <Rocket className="size-5 text-blue-500" /> Opportunities
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Business growth</li>
                                    <li>• System integrations</li>
                                    <li>• Data-driven decisions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-10 border-t border-white/40 flex items-start gap-6">
                            <div className="text-6xl font-black text-[#00477b]">T</div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2 uppercase tracking-wide flex items-center gap-2">
                                    <Database className="size-5 text-orange-500" /> Threats
                                </h3>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    <li>• Implementation disruption</li>
                                    <li>• Employee resistance</li>
                                    <li>• Migration risks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Implementation Process */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Implementation Process</span>
                        <h2 className="text-3xl font-bold text-[#00477b]">Our ERPNext Implementation Process</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[40%] left-0 w-full h-1 bg-gray-200 -z-10"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { icon: Search, title: "Business Requirement Analysis", desc: "Identify workflows, pain points, and the exact modules your team needs.", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-500" },
                                { icon: Settings, title: "System Setup & Configuration", desc: "Configure modules, permissions, roles, and basic settings based on your processes.", color: "text-green-500", bg: "bg-green-50", border: "border-green-500" },
                                { icon: Database, title: "Data Migration", desc: "Prepare, clean, and import your existing data into ERPNext.", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-500" },
                                { icon: CheckCircle2, title: "Customization & Workflow Setup", desc: "Add custom fields, forms, automation rules, and approvals to match your operations.", color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-500" },
                                { icon: GraduationCap, title: "User Training & Testing", desc: "Train your team, run test scenarios, and validate every function works smoothly.", color: "text-[#00477b]", bg: "bg-blue-50", border: "border-[#00477b]" },
                                { icon: Rocket, title: "Go-Live & Post-Launch Support", desc: "Deploy the system and offer continuous guidance to ensure stable adoption.", color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-500" },
                            ].map((step, idx) => (
                                <div key={idx} className="relative bg-white/40 backdrop-blur-md pt-8 pb-6 px-4 text-center rounded-2xl border border-white/60 shadow-sm md:shadow-none md:border-0 md:bg-transparent md:p-0 flex flex-col items-center">
                                    <div className={`w-16 h-16 rounded-full ${step.bg} ${step.color} border-4 ${step.border} flex items-center justify-center mb-6 shadow-sm mx-auto bg-white`}>
                                        <step.icon className="size-7" />
                                    </div>
                                    <h4 className="font-bold text-zinc-900 mb-2 text-sm md:text-base h-10 flex items-center justify-center">{step.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 text-sm font-bold shadow-md">
                            Start Your Implementation
                        </Button>
                    </div>
                </div>
            </section>

            {/* 6. Pricing Packages */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Engagement Models / Packages</span>
                        <h2 className="text-3xl font-bold text-[#00477b]">Flexible Plans For Every Stage Of Your ERP Journey</h2>
                    </div>

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
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 text-sm font-bold shadow-md">
                            Get a Detailed Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* 7. Add-Ons */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-900 to-[#00477b] p-8 flex items-center justify-center text-white shadow-xl">
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                                <div className="relative z-10 text-center">
                                    <Database className="size-24 mx-auto mb-6 text-blue-200 opacity-80" />
                                    <h3 className="text-2xl font-bold uppercase tracking-widest text-blue-100">ERPNext</h3>
                                    <p className="text-blue-300 mt-2 font-medium">Enterprise Add-ons</p>
                                </div>
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
                                        <div className="mt-1 bg-blue-100 text-blue-600 rounded-sm p-0.5">
                                            <Check className="size-3.5 stroke-[3]" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 text-sm font-bold shadow-md">
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

                    <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl shadow-sm overflow-hidden">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-white/40 last:border-0">
                                <button 
                                    className="w-full text-left px-6 py-5 font-bold text-zinc-900 flex justify-between items-center hover:bg-white/40 focus:outline-none transition-colors"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <span>{faq.question}</span>
                                    <div className="text-gray-400 shrink-0 ml-4">
                                        {openFaq === idx ? <Minus className="size-5" /> : <Plus className="size-5" />}
                                    </div>
                                </button>
                                {openFaq === idx && (
                                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 bg-white/30 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Contact Form */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#00477b]">Let's Simplify Your Operations With ERPNext</h2>
                        <p className="mt-3 text-gray-500">Tell us about your business — we'll recommend the right modules, timeline, and cost.</p>
                    </div>

                    <form className="bg-white border border-white/40 p-8 md:p-10 rounded-2xl shadow-lg">
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
                            <select id="businessType" className="w-full bg-white/60 border border-white/80 rounded-md h-11 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00477b]/20">
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

                        <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white h-12 text-base font-bold rounded-lg shadow-md">
                            Submit Request
                        </Button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}