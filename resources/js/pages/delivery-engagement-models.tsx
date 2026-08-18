import React, { useState } from 'react';
import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
    Clock, 
    Rocket, 
    BarChart3, 
    MessageSquare, 
    CheckCircle2, 
    FileText, 
    Handshake, 
    SearchCheck, 
    PackageCheck,
    CheckSquare,
    DollarSign,
    ShieldCheck,
    ChevronDown,
    Lock
} from 'lucide-react';

export default function DeliveryEngagementModels() {
    const [faqOpen, setFaqOpen] = useState<number | null>(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const scrollToContact = () => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToModels = () => {
        document.getElementById('delivery-models')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const faqs = [
        {
            q: "Which delivery model is right for my project?",
            a: "If your requirements and features are 100% defined, Fixed Scope is ideal. For evolving products, SaaS startups, or fast iteration, the Hybrid or Retainer models offer maximum flexibility and speed."
        },
        {
            q: "Do I get full ownership of the source code and IP?",
            a: "Yes, 100%. All intellectual property, repository access, and code assets are transferred directly to you upon milestone completion and project handover."
        },
        {
            q: "How are payments and milestones structured?",
            a: "For fixed-scope projects, payments are linked to verified milestone deliveries (e.g. 30% kickoff, 40% demo, 30% final sign-off). Retainers are billed monthly with dedicated hour allocations."
        },
        {
            q: "What happens if we need changes during development?",
            a: "We follow agile change-management. Minor tweaks are accommodated inside current sprints; larger scope expansions are scoped into subsequent milestones transparently."
        },
        {
            q: "Is there a post-launch warranty period?",
            a: "Yes! All fixed-scope and turnkey builds include a complimentary 30-day bug-fix and stabilization warranty after handover."
        }
    ];

    return (
        <MainLayout>
            <Head title="Smart, Scalable Delivery Models - Gnosys Digital" />

            {/* 1. Hero Section */}
            <section 
                className="relative text-white overflow-hidden min-h-[calc(100vh-76px)] flex items-center justify-center py-20 lg:py-24 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/delevery.webp")' }}
            >
                {/* Clean transparent overlay for 100% crystal clear image */}
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
                        Smart, Scalable Delivery Models For Every Business
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                        Whether you're launching your first website or optimizing an existing digital ecosystem — our flexible engagement models guarantee control, scale, and clear ROI.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <div className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-7 py-2.5 rounded-full font-medium text-xs sm:text-sm inline-block shadow-sm">
                            Transparent pricing and deliverables. Total accountability.
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                onClick={scrollToContact}
                                className="bg-white text-[#00477b] hover:bg-gray-50 rounded-full px-8 h-14 text-base font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Talk to a Delivery Expert
                            </Button>
                            <Button 
                                onClick={scrollToModels}
                                className="bg-transparent text-white hover:bg-white/10 border-2 border-white/60 rounded-full px-8 h-14 text-base font-bold shadow-sm transition-all duration-300"
                            >
                                Explore All Models
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Built For Clarity, Speed, And Control */}
            <section className="py-20 lg:py-24 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Predictable Delivery. Zero Headaches.</span>
                    </div>
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Built For Clarity, Speed, And Control
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-6">
                        Our delivery models are structured for high agility and clear execution. Every engagement comes with structured milestones, clear communication, and full code ownership.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
                            {[
                                { title: "Fixed Scope. No Surprises", desc: "Defined deliverables and fixed timelines so you know exactly what to expect from day one.", icon: Clock },
                                { title: "Agile Delivery", desc: "Sprints with continuous updates, feedback loops, and iterative rollouts without delays.", icon: Rocket },
                                { title: "Transparent Reporting", desc: "Direct visibility into task progress, burndown charts, and weekly sprints.", icon: BarChart3 },
                                { title: "Direct Communication", desc: "Talk directly to the engineers and tech leads working on your project on Slack.", icon: MessageSquare },
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-white/80 backdrop-blur-md border border-white/90 rounded-[2.2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <item.icon className="size-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3 tracking-tight">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Delivery Models */}
            <section id="delivery-models" className="py-20 lg:py-24 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-6">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Pick the Model That Fits Your Project</span>
                    </div>
                    <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Our Delivery Models
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
                        Flexible structures designed around your roadmap, budget, and release timelines.
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                            {/* 1. Fixed Scope Projects */}
                            <div className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.5rem] p-7 sm:p-8 lg:p-9 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <FileText className="size-6" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#00477b] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-100">
                                            Model 01
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-[#00477b] mb-3 tracking-tight">Fixed Scope Projects</h3>
                                    <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                        <span className="font-semibold text-[#00477b]">Best For:</span> Projects with clearly defined deliverables, key milestones, and a fixed timeline.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <h4 className="font-bold text-[#00477b] mb-3.5 text-xs uppercase tracking-wider">Key Perks:</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Fixed deliverables & agreed budget",
                                                "Guaranteed sprint milestone reviews",
                                                "Total code ownership & 30-day warranty"
                                            ].map((perk, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-zinc-700 leading-relaxed font-normal">{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-zinc-200/80 mt-auto">
                                    <div className="mb-4">
                                        <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-1">Budget Range</div>
                                        <div className="text-lg font-bold text-[#00477b]">₹50,000 - ₹3,00,000+</div>
                                        <div className="text-xs text-zinc-500 mt-1">Websites, Custom Web Apps, MVPs</div>
                                    </div>
                                    <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-bold shadow-md">
                                        Start a Fixed Scope Project
                                    </Button>
                                </div>
                            </div>

                            {/* 2. Retainer-Based Engagements */}
                            <div className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.5rem] p-7 sm:p-8 lg:p-9 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <Clock className="size-6" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#00477b] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-100">
                                            Model 02
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#00477b] mb-3 tracking-tight">Retainer Engagements</h3>
                                    <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                        <span className="font-semibold text-[#00477b]">Best For:</span> Ongoing development, dedicated maintenance, SEO, or continuous feature rollouts.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <h4 className="font-bold text-[#00477b] mb-3.5 text-xs uppercase tracking-wider">Key Perks:</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Monthly dedicated hours allocation",
                                                "Priority SLA support & rapid response",
                                                "Rolling sprint cycle with flexible tasks"
                                            ].map((perk, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-zinc-700 leading-relaxed font-normal">{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-zinc-200/80 mt-auto">
                                    <div className="mb-4">
                                        <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-1">Monthly Retainer</div>
                                        <div className="text-lg font-bold text-[#00477b]">₹25,000 - ₹1,50,000 / mo</div>
                                        <div className="text-xs text-zinc-500 mt-1">Continuous SEO, Server Maint., Dev</div>
                                    </div>
                                    <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-bold shadow-md">
                                        Explore Retainers
                                    </Button>
                                </div>
                            </div>

                            {/* 3. Hybrid Model */}
                            <div className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.5rem] p-7 sm:p-8 lg:p-9 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <Rocket className="size-6" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#00477b] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-100">
                                            Model 03
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#00477b] mb-3 tracking-tight">Hybrid Model</h3>
                                    <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                        <span className="font-semibold text-[#00477b]">Best For:</span> Projects that start with a defined MVP and transition into continuous agile sprints.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <h4 className="font-bold text-[#00477b] mb-3.5 text-xs uppercase tracking-wider">Key Perks:</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Phase 1: Fixed-scope core MVP build",
                                                "Phase 2: Agile sprint retainer for scaling",
                                                "Cost-effective with low upfront risk"
                                            ].map((perk, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-zinc-700 leading-relaxed font-normal">{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-zinc-200/80 mt-auto">
                                    <div className="mb-4">
                                        <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-1">Hybrid Structure</div>
                                        <div className="text-lg font-bold text-[#00477b]">₹75,000+ & Retainer</div>
                                        <div className="text-xs text-zinc-500 mt-1">SaaS, Custom ERP, Portals</div>
                                    </div>
                                    <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-bold shadow-md">
                                        Discuss Hybrid Model
                                    </Button>
                                </div>
                            </div>

                            {/* 4. Task-Based Mini Engagements */}
                            <div className="group bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.5rem] p-7 sm:p-8 lg:p-9 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="size-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <PackageCheck className="size-6" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#00477b] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-100">
                                            Model 04
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#00477b] mb-3 tracking-tight">Mini Engagements</h3>
                                    <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                        <span className="font-semibold text-[#00477b]">Best For:</span> Quick fixes, performance optimization, integrations, or specific security audits.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <h4 className="font-bold text-[#00477b] mb-3.5 text-xs uppercase tracking-wider">Key Perks:</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Completed within 3–7 business days",
                                                "Zero long-term commitment",
                                                "High-priority rapid turnaround"
                                            ].map((perk, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="size-4 text-[#00477b] mt-0.5 shrink-0" />
                                                    <span className="text-sm text-zinc-700 leading-relaxed font-normal">{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-zinc-200/80 mt-auto">
                                    <div className="mb-4">
                                        <div className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-1">Per Task Pricing</div>
                                        <div className="text-lg font-bold text-[#00477b]">From ₹5,000 / task</div>
                                        <div className="text-xs text-zinc-500 mt-1">API fixes, UI tweaks, Speed boost</div>
                                    </div>
                                    <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-bold shadow-md">
                                        Hire for a Task
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Delivery Process */}
            <section className="py-20 lg:py-24 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-6">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">How Your Approach is Managed from Day One</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Our Delivery Process
                    </h2>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
                            {[
                                { step: "01", title: "Discovery & Scoping", desc: "Deep dive into requirements, architecture, and milestones.", icon: SearchCheck },
                                { step: "02", title: "Proposal & Agreement", desc: "Transparent scope, clear timeline, and fixed deliverables.", icon: FileText },
                                { step: "03", title: "Kickoff & Execution", desc: "Dedicated team assigned, weekly sprint milestones start.", icon: Rocket },
                                { step: "04", title: "Review & Feedback", desc: "Weekly sprint demos, real-time testing, and continuous feedback.", icon: CheckSquare },
                                { step: "05", title: "Delivery & Handover", desc: "Full code handover, documentation, training, and 30-day warranty.", icon: PackageCheck }
                            ].map((proc, pIdx) => (
                                <div key={pIdx} className="bg-white/80 backdrop-blur-md border border-white/90 rounded-[2.2rem] p-7 lg:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all flex flex-col justify-between h-full">
                                    <div>
                                        <div className="size-14 bg-blue-50/80 border border-blue-100 text-[#00477b] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                                            <proc.icon className="size-6" />
                                        </div>
                                        <div className="text-xs font-black text-[#00477b] uppercase tracking-widest mb-1.5">Step {proc.step}</div>
                                        <h4 className="font-bold text-lg text-[#00477b] mb-2.5">{proc.title}</h4>
                                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">{proc.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Button onClick={scrollToContact} className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-10 h-14 shadow-xl shadow-blue-900/20 text-base font-bold transition-all hover:-translate-y-0.5">
                        Get Started In 48 Hours
                    </Button>
                </div>
            </section>

            {/* 5. Our Transparency Promise */}
            <section className="py-20 lg:py-24 bg-transparent">
                <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-8">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Built on Trust: High Quality Delivery and Structure</span>
                    </div>
                    <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                        Our Transparency Promise
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                        We believe contracts should create confidence, not confusion. Every Gnosys Digital project includes:
                    </p>
                </div>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/40 backdrop-blur-xl border-y border-white/60 py-10 sm:py-14 my-4">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
                            {[
                                {
                                    title: "Zero Vague Clauses",
                                    desc: "Detailed scope document with clearly defined deliverables, edge cases, and milestones before kickoff.",
                                    icon: FileText
                                },
                                {
                                    title: "Demo-Driven Sprints",
                                    desc: "Structured sprint cycles with live staging demos and verified sign-offs so you always see progress.",
                                    icon: CheckSquare
                                },
                                {
                                    title: "Milestone-Based Billing",
                                    desc: "Payments are linked directly to approved deliverables — zero hidden costs or surprise change fees.",
                                    icon: DollarSign
                                },
                                {
                                    title: "Direct Engineer Access",
                                    desc: "Collaborate directly with your technical leads via dedicated Slack channels — no communication bottlenecks.",
                                    icon: MessageSquare
                                },
                                {
                                    title: "100% Code & IP Ownership",
                                    desc: "Full source code, repositories, documentation, and intellectual property transferred upon completion.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "30-Day Bug Warranty",
                                    desc: "Complimentary bug-fixing and stabilization support after handover to guarantee flawless launch.",
                                    icon: Handshake
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-5 shadow-sm">
                                            <item.icon className="size-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2.5">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How Our Delivery Model Scales Growth */}
            <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch border-y border-white/60 my-16 bg-white/30 backdrop-blur-md">
                {/* Left Side: Content aligned to left edge */}
                <div className="w-full lg:w-1/2 flex justify-start">
                    <div className="w-full py-16 lg:py-20 pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-8 lg:pr-10 flex flex-col justify-center space-y-6">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                Real Proof That These Models Work.
                            </span>
                            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                How Our Delivery Model Scales Growth
                            </h2>
                        </div>
                        
                        <div className="space-y-3.5">
                            {[
                                "Faster time-to-market with zero-overhead sprints",
                                "Direct engineer communication — no middlemen",
                                "100% in-house execution",
                                "Scalable code architectures engineered for high concurrency"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3.5 p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80">
                                    <CheckCircle2 className="size-5 text-[#00477b] mt-0.5 shrink-0" />
                                    <span className="text-zinc-700 text-sm sm:text-base font-normal leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Button onClick={scrollToContact} className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-lg text-sm font-bold transition-all hover:-translate-y-0.5 w-fit">
                                Talk to a Delivery Expert
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Right Side: Office Image without shadow and radius */}
                <div className="relative w-full lg:w-1/2 min-h-[380px] lg:min-h-[480px] overflow-hidden">
                    <img 
                        src="/assets/office-story.webp" 
                        alt="Gnosys Digital Team at Work" 
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-zinc-900/15"></div>
                </div>
            </section>

            {/* 7. Combined Booking Form & FAQ Section */}
            <section id="contact-section" className="py-20 lg:py-28 bg-transparent">
                <div className="w-full px-3 sm:px-5 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        {/* Left Side: FAQ */}
                        <div className="lg:col-span-5">
                            <div className="mb-8 text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">FAQ & Clarifications</span>
                                </div>
                                <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600">
                                    Everything you need to know about our engagement terms and delivery process.
                                </p>
                            </div>

                            <div className="space-y-3.5">
                                {faqs.map((faq, idx) => {
                                    const isOpen = faqOpen === idx;
                                    return (
                                        <div 
                                            key={idx}
                                            className="bg-white/85 backdrop-blur-xl border border-white/95 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                                        >
                                            <button 
                                                onClick={() => setFaqOpen(isOpen ? null : idx)}
                                                className="w-full py-4.5 px-5 text-left flex items-center justify-between font-semibold text-sm sm:text-base text-[#00477b] focus:outline-none"
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown className={`size-4 transition-transform duration-300 text-zinc-500 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#00477b]' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-5 pb-5 pt-1 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 font-normal">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side: Contact / Inquiry Form */}
                        <div className="lg:col-span-7">
                            <div className="mb-8 text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Get In Touch</span>
                                </div>
                                <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Let's Discuss The Right Model For Your Project
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600">
                                    Whether you need a full turnkey build or dedicated developers — we'll help you choose the best model.
                                </p>
                            </div>

                            <div className="bg-white/85 backdrop-blur-2xl border border-white/95 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-xl shadow-blue-900/5">
                                {formSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="size-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#00477b] mb-2">Inquiry Submitted Successfully!</h3>
                                        <p className="text-zinc-600 max-w-md mx-auto mb-6 font-normal">
                                            Our technical lead will review your project requirements and get back to you within 24 hours.
                                        </p>
                                        <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full">
                                            Submit Another Request
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-sm font-semibold text-zinc-700">Full Name *</Label>
                                                <Input id="name" placeholder="Rahul Sharma" required className="h-12 rounded-xl border-gray-200 bg-white/90 focus:border-[#00477b]" />
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-semibold text-zinc-700">Work Email *</Label>
                                                <Input id="email" type="email" placeholder="rahul@company.com" required className="h-12 rounded-xl border-gray-200 bg-white/90 focus:border-[#00477b]" />
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="budget" className="text-sm font-semibold text-zinc-700">Estimated Budget *</Label>
                                                <select id="budget" className="w-full h-12 rounded-xl border border-gray-200 bg-white/90 focus:border-[#00477b] px-4 text-sm text-zinc-700">
                                                    <option value="">Select Budget</option>
                                                    <option value="under50k">Under ₹50K</option>
                                                    <option value="50k-100k">₹50K - ₹1L</option>
                                                    <option value="100k-300k">₹1L - ₹3L</option>
                                                    <option value="300k+">₹3L+</option>
                                                </select>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Label htmlFor="projectType" className="text-sm font-semibold text-zinc-700">Preferred Model / Project *</Label>
                                                <select id="projectType" className="w-full h-12 rounded-xl border border-gray-200 bg-white/90 focus:border-[#00477b] px-4 text-sm text-zinc-700">
                                                    <option value="">Select Delivery Model</option>
                                                    <option value="fixed">Fixed Scope Project</option>
                                                    <option value="retainer">Retainer-Based Engagement</option>
                                                    <option value="hybrid">Hybrid Model (MVP + Retainer)</option>
                                                    <option value="task">Task-Based Mini Engagement</option>
                                                    <option value="custom">Custom Architecture Solution</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm font-semibold text-zinc-700">Project Brief & Requirements</Label>
                                            <Textarea id="message" rows={4} placeholder="Tell us briefly about your goals, timelines, or technology preferences..." className="rounded-xl border-gray-200 bg-white/90 focus:border-[#00477b] p-4 text-sm text-zinc-800" />
                                        </div>

                                        <div className="pt-2">
                                            <Button type="submit" className="w-full bg-[#00477b] hover:bg-[#00335e] text-white h-13 rounded-full shadow-lg shadow-blue-900/15 text-base font-bold transition-all duration-300 hover:-translate-y-0.5">
                                                Submit Inquiry
                                            </Button>
                                        </div>

                                        <div className="text-center pt-2 flex items-center justify-center gap-2 text-xs text-zinc-500 font-medium">
                                            <Lock className="size-3.5 text-zinc-400" />
                                            <span>Your information is 100% secure. We never share your data or spam.</span>
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
