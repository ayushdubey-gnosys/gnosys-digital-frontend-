import React, { useState } from 'react';
import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
    Briefcase, 
    Settings, 
    Clock, 
    Milestone, 
    Users, 
    Rocket, 
    CheckSquare, 
    TrendingUp, 
    Globe, 
    ShieldCheck, 
    CheckCircle2, 
    ChevronDown, 
    Lock,
    Sparkles
} from 'lucide-react';

export default function GrowthSystemsDiscoveryCall() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const scrollToForm = () => {
        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const faqs = [
        {
            q: "Is there any cost for this call?",
            a: "No, it is 100% free with zero obligation to hire us. We use this session to understand your business and provide an initial high-level architecture roadmap."
        },
        {
            q: "Do I need to have a written project scope?",
            a: "Not at all. Just tell us what problem you want to solve, what your current tools are, and what your revenue/scaling goals look like. We will help you define the exact technical scope."
        },
        {
            q: "What happens after the call?",
            a: "We summarize the key takeaways into an actionable mini-roadmap and send it to you. You are free to implement it in-house, work with other vendors, or partner with Gnosys Digital for full execution."
        },
        {
            q: "How long is the session?",
            a: "It is a focused 30-minute session designed to respect your time while digging straight into architecture and business bottlenecks."
        }
    ];

    return (
        <MainLayout>
            <Head title="Growth Systems Discovery Call - Gnosys Digital" />

            {/* 1. Hero Section */}
            <section 
                className="relative text-white overflow-hidden min-h-[calc(100vh-76px)] flex items-center justify-center py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/growtt.webp")' }}
            >
                {/* Clean transparent overlay for 100% crystal clear image */}
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-5 py-2 border border-white/20 shadow-sm">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-100">Growth Systems Discovery Call</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
                        A 30-Minute Session To Get Absolute Clarity On The Right Digital System For Your Business.
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                        A zero-pressure exploratory session to uncover where your website, custom software, ERP, or sales funnel is leaking revenue — and show you how to turn digital bottlenecks into scalable growth machines.
                    </p>

                    <p className="text-xs sm:text-sm text-blue-200/80 mb-10 max-w-2xl mx-auto font-medium">
                        No generic pitches. Just a custom, actionable blueprint tailored to where you are today.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <Button 
                            onClick={scrollToForm}
                            className="bg-white text-[#00477b] hover:bg-blue-50 rounded-full px-8 sm:px-10 h-14 text-base font-bold shadow-2xl shadow-blue-950/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            Book Your Growth Systems Discovery Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why We Offer This Call */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Why We Offer This Call</span>
                    </div>
                    <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Why We Offer This Call
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-6">
                        Too many businesses waste months and lakhs of rupees on the wrong digital systems. This call helps you understand exactly what you need BEFORE you write a single line of code.
                    </p>

                    <h3 className="text-xl font-bold text-[#00477b]">What You'll Walk Away With:</h3>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            {[
                                "A clear architecture plan for your actual needs",
                                "Honest technology guidance (MERN, Python, Next.js, ERPNext)",
                                "Accurate cost & timeline benchmarks",
                                "Actionable, prioritized steps you can execute right away"
                            ].map((point, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-md border border-white/90 rounded-[2rem] p-6 sm:p-7 shadow-sm hover:shadow-md hover:bg-white transition-all flex flex-col justify-start"
                                >
                                    <div className="size-8 rounded-full bg-blue-50 text-[#00477b] flex items-center justify-center mb-4 border border-blue-100 font-medium text-sm">
                                        ✓
                                    </div>
                                    <p className="text-[#00477b] text-sm sm:text-base font-normal leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mt-6">
                    <p className="text-sm text-zinc-500 font-medium max-w-2xl mx-auto">
                        We don't do hard selling. If we're not the right fit, we'll tell you honestly and point you in the right direction.
                    </p>
                </div>
            </section>

            {/* 3. Who This Session Is Designed For */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Target Audience</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Who This Session Is Designed For
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-6">
                        This session is tailored for business owners, founders, and leaders who want clarity on digital execution before committing:
                    </p>

                    <h3 className="text-xl font-bold text-[#00477b] text-left max-w-5xl mx-auto">
                        You Should Book If You're:
                    </h3>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {[
                                "Planning a custom web application or portal (B2B, SaaS, Custom CRM, Client Portal)",
                                "Replacing an outdated legacy system (Spreadsheets, slow software, unintegrated tools)",
                                "Looking to automate operations & workflows (Inventory, Invoicing, Billing, Team Tasks)",
                                "Seeking high-performance UI/UX & Web Development to scale conversions",
                                "Frustrated by previous agencies that delivered buggy, non-scalable code",
                                "Need an expert tech partner who understands business ROI, not just code syntax",
                                "Scaling operations & needing cloud-native infrastructure that won't crash under load",
                                "Building a digital-first brand looking for high-converting marketing & web architecture"
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:bg-white transition-all flex items-start gap-3.5"
                                >
                                    <CheckCircle2 className="size-5 text-[#00477b]/80 shrink-0 mt-0.5" />
                                    <span className="text-[#00477b] text-sm sm:text-base font-normal leading-relaxed">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center mt-6">
                    <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100">
                        <p className="text-sm sm:text-base text-[#00477b] font-semibold">
                            ✨ If you're unsure which digital path to take, this 30-minute session will give you the exact answer.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. What We Cover In 30 Minutes */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Session Agenda</span>
                    </div>
                    <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        What We Cover In 30 Minutes
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        A structured breakdown of our 30-minute technical discovery session.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            {[
                                {
                                    icon: Briefcase,
                                    title: "Business Understanding",
                                    desc: "Your goals, current blockers, and growth target."
                                },
                                {
                                    icon: Settings,
                                    title: "System Fit Assessment",
                                    desc: "Identify which architecture best solves your business problem."
                                },
                                {
                                    icon: Clock,
                                    title: "Budget & Timeline Planning",
                                    desc: "Realistic cost estimates based on your investment budget."
                                },
                                {
                                    icon: Milestone,
                                    title: "Your Actionable Mini-Roadmap",
                                    desc: "A step-by-step recommendation covering:\n1. Immediate quick wins\n2. Core system architecture\n3. Tech stack & tools\n4. Projected ROI timeline"
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="group bg-white/80 backdrop-blur-md border border-white/90 rounded-[2rem] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <item.icon className="size-7" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-3 tracking-tight">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mt-8">
                    <Button 
                        onClick={scrollToForm}
                        className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 sm:px-10 h-14 text-base font-bold shadow-xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        Schedule Discovery Call
                    </Button>
                </div>
            </section>

            {/* 5. Why Businesses Choose Gnosys Digital */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Why Businesses Choose Gnosys Digital</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        We Don't Just Build Websites Or Tools — We Build Small-Business Growth Systems.
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        Gnosys Digital is not an agency; we are digital systems architects who deliver production-ready code on time. All built in-house for clients in India, US, Canada, and Europe.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {[
                                { icon: Users, title: "100% In-House Expertise", desc: "No outsourcing. Every developer, UI/UX designer, and strategist is on our payroll." },
                                { icon: Rocket, title: "Business-First Approach", desc: "We measure success by revenue, speed, and efficiency — not just lines of code." },
                                { icon: CheckSquare, title: "Clear Pricing for SME Projects", desc: "Fair pricing for quality code. Zero hidden fees or scope creep surprises." },
                                { icon: TrendingUp, title: "Proven, Scalable Systems", desc: "Modern stacks engineered for high uptime, clean structure, and effortless scaling." },
                                { icon: Globe, title: "International Quality, SME-Friendly", desc: "Enterprise-grade code standards, accessible pricing, global communication quality." },
                                { icon: ShieldCheck, title: "Ownership, Clarity & Support", desc: "Full IP and code ownership transferred to you. No vendor lock-in ever." }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="group bg-white/80 backdrop-blur-md border border-white/90 rounded-[2rem] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-5 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                        <item.icon className="size-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mt-8">
                    <Button 
                        onClick={scrollToForm}
                        className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-blue-900/20"
                    >
                        Explore Options
                    </Button>
                </div>
            </section>

            {/* 6. Success Stories */}
            <section className="py-20 lg:py-28 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Success Stories</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Success Stories From Past Discovery Calls
                    </h2>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            {[
                                {
                                    client: "Manufacturing & Supply Client",
                                    quote: "“We thought we needed a custom CRM. Gnosys helped us customize ERPNext and saved us ₹4.5L & 3 months of dev time.”"
                                },
                                {
                                    client: "Professional Services Firm",
                                    quote: "“Their roadmap helped us build a client portal in 4 weeks. Automated our entire client billing.”"
                                },
                                {
                                    client: "Trading & Distribution Company",
                                    quote: "“We finally understood which processes to automate first. Immediate 30% cost reduction in our operations.”"
                                }
                            ].map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-md border border-white/90 rounded-[2rem] p-7 sm:p-8 shadow-sm hover:shadow-lg hover:bg-white transition-all flex flex-col justify-between"
                                >
                                    <p className="text-zinc-700 text-sm sm:text-base italic leading-relaxed mb-6">
                                        {item.quote}
                                    </p>
                                    <div>
                                        <h4 className="font-bold text-[#00477b] text-base">{item.client}</h4>
                                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-1">✓ Verified Outcome</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mt-8">
                    <Button 
                        onClick={scrollToForm}
                        className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-lg shadow-blue-900/20"
                    >
                        Book Your Discovery Call
                    </Button>
                </div>
            </section>

            {/* 7. Combined Booking Form & FAQ Section */}
            <section id="booking-form" className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1550px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Side: FAQ */}
                        <div className="lg:col-span-5">
                            <div className="mb-8 text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">FAQ</span>
                                </div>
                                <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600">
                                    Quick answers to common questions about our discovery call.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, idx) => {
                                    const isOpen = faqOpen === idx;
                                    return (
                                        <div 
                                            key={idx}
                                            className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl overflow-hidden shadow-sm transition-all"
                                        >
                                            <button 
                                                onClick={() => setFaqOpen(isOpen ? null : idx)}
                                                className="w-full py-4 px-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-[#00477b] focus:outline-none"
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown className={`size-4 transition-transform duration-300 text-zinc-500 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#00477b]' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-5 pb-5 pt-1 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side: Booking Form */}
                        <div className="lg:col-span-7">
                            <div className="mb-8 text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Reserve Your Slot</span>
                                </div>
                                <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Book Your Growth Systems Discovery Call
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600">
                                    No hard sales pitch. Just honest advice on what system fits your business stage.
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl shadow-blue-900/10">
                                {formSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="size-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#00477b] mb-2">Discovery Call Request Received!</h3>
                                        <p className="text-zinc-600 max-w-md mx-auto mb-6">
                                            We'll review your details and email you calendar slots within 24 hours.
                                        </p>
                                        <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full">
                                            Submit Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-bold text-zinc-700">
                                                Name *
                                            </Label>
                                            <Input 
                                                id="name" 
                                                required 
                                                placeholder="Your Name" 
                                                className="h-12 rounded-xl bg-white/80 border-gray-200 focus:border-[#00477b]"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-bold text-zinc-700">
                                                Email *
                                            </Label>
                                            <Input 
                                                id="email" 
                                                type="email" 
                                                required 
                                                placeholder="yourname@company.com" 
                                                className="h-12 rounded-xl bg-white/80 border-gray-200 focus:border-[#00477b]"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-bold text-zinc-700">
                                                Phone Number *
                                            </Label>
                                            <Input 
                                                id="phone" 
                                                type="tel" 
                                                required 
                                                placeholder="+91 98765 43210" 
                                                className="h-12 rounded-xl bg-white/80 border-gray-200 focus:border-[#00477b]"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="brief" className="text-sm font-bold text-zinc-700">
                                                Business / Project Brief & Current Bottlenecks
                                            </Label>
                                            <Textarea 
                                                id="brief" 
                                                rows={4} 
                                                placeholder="Tell us a little about your business, the systems you currently use, and what you're trying to solve..." 
                                                className="rounded-xl bg-white/80 border-gray-200 focus:border-[#00477b]"
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <Button 
                                                type="submit" 
                                                className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-14 text-base font-bold shadow-xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                Book Discovery Session Now
                                            </Button>
                                        </div>

                                        <div className="text-center pt-2 flex items-center justify-center gap-2 text-xs text-zinc-500 font-medium">
                                            <Lock className="size-3.5 text-zinc-400" />
                                            <span>We respect your privacy. No spam, ever. Only actionable guidance.</span>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
