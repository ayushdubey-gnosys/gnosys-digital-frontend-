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
    Lock,
    Check,
    ArrowRight
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

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

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section 
                className="relative text-white overflow-hidden min-h-[calc(100vh-76px)] lg:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 pb-28 sm:pb-36 lg:pb-40 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/delevery.webp")' }}
            >
                {/* Crisp subtle dark gradient overlay so the photo is 100% clear and vibrant */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/30 to-slate-950/50"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 border border-white/25 shadow-sm">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-100">Tailored Partnerships for Every Scale</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={180}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4 leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                            Delivery & Engagement Models Built For Clarity, Speed, And Control
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <p className="text-sm sm:text-base md:text-lg text-blue-50/95 mb-4 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                            Whether you need a fixed-scope product build, a dedicated engineering squad, or agile task sprints - our transparent models guarantee zero surprise costs and predictable milestones.
                        </p>

                        <p className="text-xs sm:text-sm text-blue-200 mb-6 max-w-2xl mx-auto font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                            Full code ownership, transparent pricing, and direct engineer communication on every project.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={380}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button 
                                onClick={scrollToContact}
                                className="bg-white text-[#00477b] hover:bg-blue-50 rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold shadow-2xl shadow-blue-950/40 transition-all duration-300 hover:-translate-y-1"
                            >
                                Get a Scope & Quote
                            </Button>
                            <Button 
                                onClick={() => {
                                    document.getElementById('delivery-models')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                variant="outline"
                                className="bg-white/15 hover:bg-white/25 text-white border-white/30 rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-bold backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                            >
                                Explore Models
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Built For Clarity, Speed, And Control */}
            <section className="pt-10 sm:pt-14 pb-4 sm:pb-6 bg-transparent">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-4 sm:mb-5">
                        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Predictable Delivery. Zero Headaches.</span>
                        </div>
                        <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Built For Clarity, Speed, And Control
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                            Our delivery models are structured for high agility and clear execution. Every engagement comes with structured milestones, clear communication, and full code ownership.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 my-2">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
                            {[
                                { title: "Fixed Scope. No Surprises", desc: "Defined deliverables and fixed timelines so you know exactly what to expect from day one.", icon: Clock },
                                { title: "Agile Delivery", desc: "Sprints with continuous updates, feedback loops, and iterative rollouts without delays.", icon: Rocket },
                                { title: "Transparent Reporting", desc: "Direct visibility into task progress, burndown charts, and weekly sprints.", icon: BarChart3 },
                                { title: "Direct Communication", desc: "Talk directly to the engineers and tech leads working on your project on Slack.", icon: MessageSquare }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                    <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.2rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="size-12 sm:size-14 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center text-[#00477b] mb-4 sm:mb-5 shadow-sm">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#00477b] mb-2 tracking-tight">{item.title}</h3>
                                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Delivery Models */}
            <section id="delivery-models" className="pt-10 sm:pt-14 pb-4 sm:pb-6 bg-transparent">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-4 sm:mb-5">
                        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Pick the Model That Fits Your Project</span>
                        </div>
                        <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Our Delivery Models
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
                            Flexible structures designed around your roadmap, budget, and release timelines.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 my-2">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
                            {/* Model 01 */}
                            <ScrollReveal animation="fade-up" delay={100} className="h-full">
                                <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                <FileText className="size-6 text-[#00477b]" />
                                            </div>
                                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                Model 01
                                            </span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">Fixed Scope Projects</h3>
                                        
                                        {/* Best For Box */}
                                        <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                Best Suited For
                                            </div>
                                            <p className="text-zinc-600 font-medium">Projects with clearly defined deliverables, key milestones, and a fixed timeline.</p>
                                        </div>
                                        
                                        {/* Key Perks */}
                                        <div className="mb-6 flex-grow">
                                            <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                Key Highlights
                                            </div>
                                            <ul className="space-y-2.5">
                                                {[
                                                    "Fixed deliverables & agreed budget",
                                                    "Guaranteed sprint milestone reviews",
                                                    "Total code ownership & 30-day warranty"
                                                ].map((perk, bIdx) => (
                                                    <li key={bIdx} className="flex items-start gap-2.5 group/item">
                                                        <div className="size-5 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#00477b] group-hover/item:text-white transition-colors duration-200">
                                                            <Check className="size-3 text-[#00477b] group-hover/item:text-white transition-colors" />
                                                        </div>
                                                        <span className="text-xs sm:text-[13px] text-zinc-700 leading-snug font-medium">{perk}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom Pricing & CTA */}
                                    <div className="pt-2 mt-auto relative z-10">
                                        <div className="p-4 rounded-2xl bg-white/45 backdrop-blur-md border border-white/70 shadow-2xs mb-3.5">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Budget Range</span>
                                                <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">Milestone-Based</span>
                                            </div>
                                            <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">₹50,000 - ₹3,00,000+</div>
                                            <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Websites, Custom Web Apps, MVPs</div>
                                        </div>
                                        <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                            <span>Start Fixed Scope Project</span>
                                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Model 02 */}
                            <ScrollReveal animation="fade-up" delay={200} className="h-full">
                                <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                <Clock className="size-6 text-[#00477b]" />
                                            </div>
                                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                Model 02
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">Retainer Engagements</h3>
                                        
                                        {/* Best For Box */}
                                        <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                Best Suited For
                                            </div>
                                            <p className="text-zinc-600 font-medium">Ongoing development, dedicated maintenance, SEO, or continuous feature rollouts.</p>
                                        </div>
                                        
                                        {/* Key Perks */}
                                        <div className="mb-6 flex-grow">
                                            <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                Key Highlights
                                            </div>
                                            <ul className="space-y-2.5">
                                                {[
                                                    "Monthly dedicated hours allocation",
                                                    "Priority SLA support & rapid response",
                                                    "Rolling sprint cycle with flexible tasks"
                                                ].map((perk, bIdx) => (
                                                    <li key={bIdx} className="flex items-start gap-2.5 group/item">
                                                        <div className="size-5 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#00477b] group-hover/item:text-white transition-colors duration-200">
                                                            <Check className="size-3 text-[#00477b] group-hover/item:text-white transition-colors" />
                                                        </div>
                                                        <span className="text-xs sm:text-[13px] text-zinc-700 leading-snug font-medium">{perk}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Bottom Pricing & CTA */}
                                    <div className="pt-2 mt-auto relative z-10">
                                        <div className="p-4 rounded-2xl bg-white/45 backdrop-blur-md border border-white/70 shadow-2xs mb-3.5">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Monthly Pricing</span>
                                                <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">Dedicated Capacity</span>
                                            </div>
                                            <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">₹35,000 - ₹1,50,000/mo</div>
                                            <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Maintenance, Feature Sprints, SEO</div>
                                        </div>
                                        <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                            <span>Book Dedicated Capacity</span>
                                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Model 03 */}
                            <ScrollReveal animation="fade-up" delay={300} className="h-full">
                                <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                <Rocket className="size-6 text-[#00477b]" />
                                            </div>
                                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                Model 03
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">Hybrid MVP + Retainer</h3>
                                        
                                        {/* Best For Box */}
                                        <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                Best Suited For
                                            </div>
                                            <p className="text-zinc-600 font-medium">Startups launching an MVP and immediately transitioning into scaling & product optimization.</p>
                                        </div>
                                        
                                        {/* Key Perks */}
                                        <div className="mb-6 flex-grow">
                                            <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                Key Highlights
                                            </div>
                                            <ul className="space-y-2.5">
                                                {[
                                                    "Fixed MVP kickoff sprint at discounted rate",
                                                    "Smooth transition into continuous feature releases",
                                                    "Architecture reviews & scalability audits"
                                                ].map((perk, bIdx) => (
                                                    <li key={bIdx} className="flex items-start gap-2.5 group/item">
                                                        <div className="size-5 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#00477b] group-hover/item:text-white transition-colors duration-200">
                                                            <Check className="size-3 text-[#00477b] group-hover/item:text-white transition-colors" />
                                                        </div>
                                                        <span className="text-xs sm:text-[13px] text-zinc-700 leading-snug font-medium">{perk}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Bottom Pricing & CTA */}
                                    <div className="pt-2 mt-auto relative z-10">
                                        <div className="p-4 rounded-2xl bg-white/45 backdrop-blur-md border border-white/70 shadow-2xs mb-3.5">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Pricing Structure</span>
                                                <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">Most Popular</span>
                                            </div>
                                            <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">₹1,20,000 + ₹45,000/mo</div>
                                            <div className="text-[11px] text-zinc-500 font-medium mt-0.5">SaaS, Enterprise Portals, Products</div>
                                        </div>
                                        <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                            <span>Launch With Hybrid Model</span>
                                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Model 04 */}
                            <ScrollReveal animation="fade-up" delay={400} className="h-full">
                                <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                <SearchCheck className="size-6 text-[#00477b]" />
                                            </div>
                                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                Model 04
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">Task-Based Mini Sprints</h3>
                                        
                                        {/* Best For Box */}
                                        <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                Best Suited For
                                            </div>
                                            <p className="text-zinc-600 font-medium">Quick fixes, performance optimizations, third-party API integrations, or bug hunting.</p>
                                        </div>
                                        
                                        {/* Key Perks */}
                                        <div className="mb-6 flex-grow">
                                            <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                Key Highlights
                                            </div>
                                            <ul className="space-y-2.5">
                                                {[
                                                    "Fast turnaround within 48 to 72 hours",
                                                    "No long-term contracts required",
                                                    "Fixed quote provided upfront before start"
                                                ].map((perk, bIdx) => (
                                                    <li key={bIdx} className="flex items-start gap-2.5 group/item">
                                                        <div className="size-5 rounded-full bg-blue-50/90 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#00477b] group-hover/item:text-white transition-colors duration-200">
                                                            <Check className="size-3 text-[#00477b] group-hover/item:text-white transition-colors" />
                                                        </div>
                                                        <span className="text-xs sm:text-[13px] text-zinc-700 leading-snug font-medium">{perk}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Bottom Pricing & CTA */}
                                    <div className="pt-2 mt-auto relative z-10">
                                        <div className="p-4 rounded-2xl bg-white/45 backdrop-blur-md border border-white/70 shadow-2xs mb-3.5">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Pricing Structure</span>
                                                <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">On-Demand</span>
                                            </div>
                                            <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">₹15,000 - ₹40,000</div>
                                            <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Speed Optimization, Integrations, Fixes</div>
                                        </div>
                                        <Button onClick={scrollToContact} className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                            <span>Request a Quick Sprint</span>
                                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The 5-Stage Delivery Process */}
            <section className="pt-10 sm:pt-14 pb-4 sm:pb-6 bg-transparent">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-4 sm:mb-5">
                        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Transparent Phasing</span>
                        </div>
                        <h2 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            The 5-Stage Delivery Process
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
                            Every engagement follows a proven, structured lifecycle to ensure predictable quality and timelines.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 my-2">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                            {[
                                { step: "01", title: "Discovery & Scope", desc: "Requirements mapping, architecture planning, and fixed deliverables definition." },
                                { step: "02", title: "UI/UX & Prototypes", desc: "High-fidelity wireframing and clickable Figma prototypes for user validation." },
                                { step: "03", title: "Iterative Build", desc: "Bi-weekly sprint demos with staging builds and direct engineer collaboration." },
                                { step: "04", title: "QA & Hardening", desc: "Automated regression testing, performance profiling, and security auditing." },
                                { step: "05", title: "Handover & Scale", desc: "Full code & IP transfer, deployment to your cloud, and 30-day warranty." }
                            ].map((stage, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={70 * (idx + 1)} className="h-full">
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2rem] p-5 sm:p-6 shadow-sm hover:shadow-lg hover:bg-white/35 transition-all flex flex-col justify-between h-full">
                                        <div>
                                            <div className="text-2xl sm:text-3xl font-extrabold text-[#00477b]/30 mb-2">{stage.step}</div>
                                            <h3 className="text-base sm:text-lg font-bold text-[#00477b] mb-1.5">{stage.title}</h3>
                                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">{stage.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                <ScrollReveal animation="fade-up" delay={200}>
                    <div className="text-center mt-4 sm:mt-5">
                        <Button onClick={scrollToContact} className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 shadow-xl shadow-blue-900/20 text-sm sm:text-base font-bold transition-all hover:-translate-y-0.5">
                            Get Started In 48 Hours
                        </Button>
                    </div>
                </ScrollReveal>
            </section>

            {/* 5. Our Transparency Promise */}
            <section className="pt-10 sm:pt-14 pb-4 sm:pb-6 bg-transparent">
                <ScrollReveal animation="fade-up" delay={80}>
                    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-4 sm:mb-5">
                        <div className="mb-3 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Built on Trust: High Quality Delivery and Structure</span>
                        </div>
                        <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Our Transparency Promise
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                            We believe contracts should create confidence, not confusion. Every Gnosys Digital project includes:
                        </p>
                    </div>
                </ScrollReveal>

                {/* Full-width strip wrapping only the cards */}
                <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 my-2">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 text-left">
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
                                    desc: "Payments are linked directly to approved deliverables - zero hidden costs or surprise change fees.",
                                    icon: DollarSign
                                },
                                {
                                    title: "Direct Engineer Access",
                                    desc: "Collaborate directly with your technical leads via dedicated Slack channels - no communication bottlenecks.",
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
                                <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.2rem] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="size-11 sm:size-12 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center text-[#00477b] mb-4 shadow-sm">
                                                <item.icon className="size-5" />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-[#00477b] mb-2">{item.title}</h3>
                                            <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How Our Delivery Model Scales Growth */}
            <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch border-y border-white/60 my-6 sm:my-8 bg-white/20 backdrop-blur-md">
                {/* Left Side: Content aligned to left edge */}
                <div className="w-full lg:w-1/2 flex justify-start">
                    <ScrollReveal animation="fade-right" delay={100} className="w-full">
                        <div className="w-full py-10 sm:py-14 pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-8 lg:pr-10 flex flex-col justify-center space-y-4 sm:space-y-5">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-3">
                                    Real Proof That These Models Work.
                                </span>
                                <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    How Our Delivery Model Scales Growth
                                </h2>
                            </div>
                            
                            <div className="space-y-3">
                                {[
                                    "Faster time-to-market with zero-overhead sprints",
                                    "Direct engineer communication - no middlemen",
                                    "100% in-house execution",
                                    "Scalable code architectures engineered for high concurrency"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-white/25 backdrop-blur-md rounded-2xl border border-white/50">
                                        <CheckCircle2 className="size-5 text-[#00477b] mt-0.5 shrink-0" />
                                        <span className="text-zinc-700 text-xs sm:text-sm font-normal leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-1">
                                <Button onClick={scrollToContact} className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-lg text-sm font-bold transition-all hover:-translate-y-0.5 w-fit">
                                    Talk to a Delivery Expert
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                
                {/* Right Side: Office Image without shadow and radius */}
                <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[440px] overflow-hidden">
                    <ScrollReveal animation="fade-left" delay={150} className="w-full h-full">
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
                    </ScrollReveal>
                </div>
            </section>

            {/* 7. Combined Booking Form & FAQ Section */}
            <section id="contact-section" className="pt-10 sm:pt-14 pb-14 sm:pb-18 bg-transparent">
                {/* Headers row outside background strip */}
                <div className="w-full px-3 sm:px-5 lg:px-6 mb-6 sm:mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                        {/* Left Side Header: FAQ */}
                        <div className="lg:col-span-5">
                            <ScrollReveal animation="fade-right" delay={100}>
                                <div className="text-left">
                                    <div className="mb-3 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">FAQ & Clarifications</span>
                                    </div>
                                    <h2 className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                        Frequently Asked Questions
                                    </h2>
                                    <p className="text-sm sm:text-base text-zinc-600">
                                        Everything you need to know about our engagement terms and delivery process.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Side Header: Contact Form */}
                        <div className="lg:col-span-7">
                            <ScrollReveal animation="fade-left" delay={150}>
                                <div className="text-left">
                                    <div className="mb-3 inline-flex items-center rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00477b]">Get In Touch</span>
                                    </div>
                                    <h2 className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                        Let's Discuss The Right Model For Your Project
                                    </h2>
                                    <p className="text-sm sm:text-base text-zinc-600">
                                        Whether you need a full turnkey build or dedicated developers - we'll help you choose the best model.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                {/* Full-width strip wrapping ONLY the cards (FAQ list & Contact Form) */}
                <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-8 sm:py-12 my-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full px-3 sm:px-5 lg:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                            {/* Left Side: FAQ Cards */}
                            <div className="lg:col-span-5">
                                <ScrollReveal animation="fade-right" delay={100}>
                                    <div className="space-y-3">
                                        {faqs.map((faq, idx) => {
                                            const isOpen = faqOpen === idx;
                                            return (
                                                <div 
                                                    key={idx}
                                                    className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                                                >
                                                    <button 
                                                        onClick={() => setFaqOpen(isOpen ? null : idx)}
                                                        className="w-full py-3.5 px-4 sm:px-5 text-left flex items-center justify-between font-semibold text-xs sm:text-sm text-[#00477b] focus:outline-none"
                                                    >
                                                        <span>{faq.q}</span>
                                                        <ChevronDown className={`size-4 transition-transform duration-300 text-zinc-500 shrink-0 ml-3 ${isOpen ? 'rotate-180 text-[#00477b]' : ''}`} />
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-4 sm:px-5 pb-3.5 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed border-t border-white/40 pt-2.5">
                                                            {faq.a}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Right Side: Contact / Inquiry Form */}
                            <div className="lg:col-span-7">
                                <ScrollReveal animation="fade-left" delay={150}>
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-8 lg:p-9 shadow-xl shadow-blue-900/5">
                                        {formSubmitted ? (
                                            <div className="text-center py-10">
                                                <div className="size-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                                                    <CheckCircle2 className="size-7" />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-[#00477b] mb-2">Inquiry Submitted Successfully!</h3>
                                                <p className="text-zinc-600 text-sm max-w-md mx-auto mb-5 font-normal">
                                                    Our technical lead will review your project requirements and get back to you within 24 hours.
                                                </p>
                                                <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full">
                                                    Submit Another Request
                                                </Button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="name" className="text-xs sm:text-sm font-semibold text-zinc-700">Full Name *</Label>
                                                        <Input id="name" placeholder="Rahul Sharma" required className="h-11 sm:h-12 rounded-xl bg-white/60 backdrop-blur-md border-white/80 focus:border-[#00477b]" />
                                                    </div>
                                                    
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-zinc-700">Work Email *</Label>
                                                        <Input id="email" type="email" placeholder="rahul@company.com" required className="h-11 sm:h-12 rounded-xl bg-white/60 backdrop-blur-md border-white/80 focus:border-[#00477b]" />
                                                    </div>
                                                </div>
                                                
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="budget" className="text-xs sm:text-sm font-semibold text-zinc-700">Estimated Budget *</Label>
                                                        <select id="budget" className="w-full h-11 sm:h-12 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 focus:border-[#00477b] px-4 text-xs sm:text-sm text-zinc-700">
                                                            <option value="">Select Budget</option>
                                                            <option value="under50k">Under ₹50K</option>
                                                            <option value="50k-100k">₹50K - ₹1L</option>
                                                            <option value="100k-300k">₹1L - ₹3L</option>
                                                            <option value="300k+">₹3L+</option>
                                                        </select>
                                                    </div>
                                                    
                                                    <div className="space-y-1.5">
                                                        <Label htmlFor="projectType" className="text-xs sm:text-sm font-semibold text-zinc-700">Preferred Model / Project *</Label>
                                                        <select id="projectType" className="w-full h-11 sm:h-12 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 focus:border-[#00477b] px-4 text-xs sm:text-sm text-zinc-700">
                                                            <option value="">Select Delivery Model</option>
                                                            <option value="fixed">Fixed Scope Project</option>
                                                            <option value="retainer">Retainer-Based Engagement</option>
                                                            <option value="hybrid">Hybrid Model (MVP + Retainer)</option>
                                                            <option value="task">Task-Based Mini Engagement</option>
                                                            <option value="custom">Custom Architecture Solution</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="message" className="text-xs sm:text-sm font-semibold text-zinc-700">Project Brief & Requirements</Label>
                                                    <Textarea id="message" rows={3} placeholder="Tell us briefly about your goals, timelines, or technology preferences..." className="rounded-xl bg-white/60 backdrop-blur-md border-white/80 focus:border-[#00477b] p-3 sm:p-4 text-xs sm:text-sm text-zinc-800" />
                                                </div>

                                                <div className="pt-2">
                                                    <Button type="submit" className="w-full bg-[#00477b] hover:bg-[#00335e] text-white h-12 sm:h-13 rounded-full shadow-lg shadow-blue-900/15 text-sm sm:text-base font-bold transition-all duration-300 hover:-translate-y-0.5">
                                                        Submit Inquiry
                                                    </Button>
                                                </div>

                                                <div className="text-center pt-1 flex items-center justify-center gap-2 text-xs text-zinc-500 font-medium">
                                                    <Lock className="size-3.5 text-zinc-400" />
                                                    <span>Your information is 100% secure. We never share your data or spam.</span>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
