import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Clock,
    Truck,
    BarChart3,
    MessageSquare,
    CheckCircle2,
    Handshake,
    FileText,
    Rocket,
    SearchCheck,
    PackageCheck,
    CheckSquare,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Check
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function EngagementModels() {
    return (
        <MainLayout>
            <Head title="Delivery & Engagement Models - Gnosys Digital" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* 1. Hero Section */}
            <section
                className="relative text-white overflow-hidden py-24 lg:py-36 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/about-engaement.png")' }}
            >
                {/* Lighter blue overlay to make the image clearly visible */}
                <div className="absolute inset-0 bg-[#00477b]/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/50 via-transparent to-[#022c54]/30"></div>

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

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-bold text-white uppercase tracking-wider mb-4">
                            TRANSPARENT ENGAGEMENT
                        </span>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={180}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-tight">
                            Smart, Scalable Delivery Models For <span className="font-normal text-blue-100">Every Business</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={280}>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100/95 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                            Whether you're launching your first digital product or scaling an enterprise ERP - our flexible engagement models guarantee control, agility, and clear ROI.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={380}>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Get a Fixed Price Quote <ArrowRight className="size-5" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                    </Link>
                                </Button>
                                <Button asChild className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/60 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-sm transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Hire Dedicated Team
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">

                {/* 2. Built For Clarity (4 Cards) */}
                <section className="mt-4 sm:mt-6 text-center">
                    <div className="bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <div className="w-full px-4 sm:px-6 mb-5 sm:mb-6 text-center">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                    Transparency First
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                    Built For Clarity, Speed, And Control
                                </h2>
                                <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                    We don't do hidden fees, vague scopes, or "wait and see" development. Every sprint is structured for complete visibility and agility.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-center">
                                {[
                                    { title: "Clear Scope & Timeline", desc: "Fixed deliverables and pre-agreed milestone deadlines you can count on with zero scope creep.", icon: Clock },
                                    { title: "Agile Rapid Delivery", desc: "Bi-weekly sprint demos ensure you review working software early and ship value faster.", icon: Truck },
                                    { title: "Transparent Reporting", desc: "Full visibility into sprint boards, pull requests, automated test runs, and project progress.", icon: BarChart3 },
                                    { title: "Direct Engineer Access", desc: "Collaborate directly with lead software engineers and architects without agency middlemen.", icon: MessageSquare }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} animation="fade-up" delay={80 * (idx + 1)} className="h-full">
                                        <div 
                                            className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.25rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="relative z-10 flex flex-col items-center text-center">
                                                <div className="size-16 mb-5 rounded-2xl bg-white/80 text-[#00477b] border border-white/90 shadow-sm flex items-center justify-center">
                                                    <item.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                <h3 className="text-xl font-normal text-[#00477b] mb-2 leading-tight tracking-tight group-hover:text-[#00335e] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Our Delivery Models (4 Detailed Model Cards matching screenshot) */}
                <section className="mt-4 sm:mt-6 text-center">
                    <div className="bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <div className="w-full px-4 sm:px-6 mb-5 sm:mb-6 text-center">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                    PICK THE MODEL THAT FITS YOUR PROJECT
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                    Our Delivery Models
                                </h2>
                                <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                    Flexible structures designed around your roadmap, budget, and release timelines.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 text-left items-stretch">
                                {/* 1. Fixed Scope */}
                                <ScrollReveal animation="fade-up" delay={100} className="h-full">
                                    <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 xl:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-blue-900/15 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10 flex flex-col flex-grow">
                                            {/* Top Header: Icon + Model Tag */}
                                            <div className="flex items-center justify-between gap-2 mb-5">
                                                <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                    <FileText className="size-6 text-[#00477b]" />
                                                </div>
                                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                    MODEL 01
                                                </span>
                                            </div>

                                            <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">
                                                Fixed Scope Projects
                                            </h3>
                                            
                                            <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    Best Suited For
                                                </div>
                                                <p className="text-zinc-600 font-medium">Projects with clearly defined deliverables, key milestones, and a fixed timeline.</p>
                                            </div>

                                            <div className="mb-6 flex-grow">
                                                <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                    Key Highlights
                                                </div>
                                                <ul className="space-y-2.5">
                                                    {[
                                                        "Fixed deliverables & agreed budget",
                                                        "Guaranteed sprint milestone reviews",
                                                        "Total code ownership & 30-day warranty"
                                                    ].map((perk, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2.5 group/item">
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
                                            <Button asChild className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                                <Link href="/free-digital-consultation" className="flex items-center justify-center gap-2">
                                                    <span>Start a Fixed Scope Project</span>
                                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* 2. Retainer Based */}
                                <ScrollReveal animation="fade-up" delay={180} className="h-full">
                                    <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 xl:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-blue-900/15 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10 flex flex-col flex-grow">
                                            {/* Top Header: Icon + Model Tag */}
                                            <div className="flex items-center justify-between gap-2 mb-5">
                                                <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                    <Clock className="size-6 text-[#00477b]" />
                                                </div>
                                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                    MODEL 02
                                                </span>
                                            </div>

                                            <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">
                                                Retainer Engagements
                                            </h3>
                                            
                                            <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    Best Suited For
                                                </div>
                                                <p className="text-zinc-600 font-medium">Ongoing development, dedicated maintenance, SEO, or continuous feature rollouts.</p>
                                            </div>

                                            <div className="mb-6 flex-grow">
                                                <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                    Key Highlights
                                                </div>
                                                <ul className="space-y-2.5">
                                                    {[
                                                        "Monthly dedicated hours allocation",
                                                        "Priority SLA support & rapid response",
                                                        "Rolling sprint cycle with flexible tasks"
                                                    ].map((perk, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2.5 group/item">
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
                                                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Monthly Retainer</span>
                                                    <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">Dedicated Capacity</span>
                                                </div>
                                                <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">₹25,000 - ₹1,50,000 / mo</div>
                                                <div className="text-[11px] text-zinc-500 font-medium mt-0.5">Continuous SEO, Server Maint., Dev</div>
                                            </div>
                                            <Button asChild className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                                <Link href="/free-digital-consultation" className="flex items-center justify-center gap-2">
                                                    <span>Explore Retainers</span>
                                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* 3. Hybrid Model */}
                                <ScrollReveal animation="fade-up" delay={260} className="h-full">
                                    <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 xl:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-blue-900/15 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10 flex flex-col flex-grow">
                                            {/* Top Header: Icon + Model Tag */}
                                            <div className="flex items-center justify-between gap-2 mb-5">
                                                <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                    <Rocket className="size-6 text-[#00477b]" />
                                                </div>
                                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                    MODEL 03
                                                </span>
                                            </div>

                                            <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">
                                                Hybrid Model
                                            </h3>
                                            
                                            <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    Best Suited For
                                                </div>
                                                <p className="text-zinc-600 font-medium">Projects that start with a defined MVP and transition into continuous agile sprints.</p>
                                            </div>

                                            <div className="mb-6 flex-grow">
                                                <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                    Key Highlights
                                                </div>
                                                <ul className="space-y-2.5">
                                                    {[
                                                        "Phase 1: Fixed-scope core MVP build",
                                                        "Phase 2: Agile sprint retainer for scaling",
                                                        "Cost-effective with low upfront risk"
                                                    ].map((perk, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2.5 group/item">
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
                                                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Hybrid Structure</span>
                                                    <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">Most Popular</span>
                                                </div>
                                                <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">₹75,000+ & Retainer</div>
                                                <div className="text-[11px] text-zinc-500 font-medium mt-0.5">SaaS, Custom ERP, Portals</div>
                                            </div>
                                            <Button asChild className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                                <Link href="/free-digital-consultation" className="flex items-center justify-center gap-2">
                                                    <span>Discuss Hybrid Model</span>
                                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* 4. Mini Engagements */}
                                <ScrollReveal animation="fade-up" delay={340} className="h-full">
                                    <div className="group relative bg-white/20 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-6 sm:p-7 xl:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-blue-900/15 hover:bg-white/35 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10 flex flex-col flex-grow">
                                            {/* Top Header: Icon + Model Tag */}
                                            <div className="flex items-center justify-between gap-2 mb-5">
                                                <div className="size-12 sm:size-13 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 border border-white shadow-sm flex items-center justify-center text-[#00477b] group-hover:scale-105 transition-transform duration-300">
                                                    <PackageCheck className="size-6 text-[#00477b]" />
                                                </div>
                                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00477b] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/90 shadow-2xs">
                                                    MODEL 04
                                                </span>
                                            </div>

                                            <h3 className="text-xl sm:text-[22px] font-bold text-[#00477b] mb-3 tracking-tight">
                                                Mini Engagements
                                            </h3>
                                            
                                            <div className="mb-5 p-3.5 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md text-xs sm:text-[13px] text-zinc-700 leading-relaxed shadow-2xs">
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-[#00477b] mb-1 flex items-center gap-1.5">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    Best Suited For
                                                </div>
                                                <p className="text-zinc-600 font-medium">Quick fixes, performance optimization, integrations, or specific security audits.</p>
                                            </div>

                                            <div className="mb-6 flex-grow">
                                                <div className="text-[11px] font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                    Key Highlights
                                                </div>
                                                <ul className="space-y-2.5">
                                                    {[
                                                        "Completed within 3-7 business days",
                                                        "Zero long-term commitment",
                                                        "High-priority rapid turnaround"
                                                    ].map((perk, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2.5 group/item">
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
                                                    <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Per Task Pricing</span>
                                                    <span className="text-[10px] font-bold text-[#00477b] bg-white/90 border border-white/90 px-2.5 py-0.5 rounded-full shadow-2xs">On-Demand</span>
                                                </div>
                                                <div className="text-lg sm:text-xl font-semibold text-[#00477b] tracking-tight">From ₹5,000 / task</div>
                                                <div className="text-[11px] text-zinc-500 font-medium mt-0.5">API fixes, UI tweaks, Speed boost</div>
                                            </div>
                                            <Button asChild className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-11 sm:h-12 text-xs sm:text-sm font-bold shadow-lg shadow-blue-900/15 hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]">
                                                <Link href="/free-digital-consultation" className="flex items-center justify-center gap-2">
                                                    <span>Hire for a Task</span>
                                                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Our Delivery Process (Connected Horizontal Roadmap Timeline / 5 Steps) */}
                <section className="mt-4 sm:mt-6 text-center">
                    <div className="bg-white/20 backdrop-blur-xl border-y border-white/40 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <div className="w-full px-4 sm:px-6 mb-6 sm:mb-8 text-center">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-2">
                                    EXECUTION ROADMAP
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-2">
                                    Our 5-Stage Delivery Process
                                </h2>
                                <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto">
                                    A structured, milestone-driven approach ensuring zero surprise changes and on-time delivery.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="relative max-w-[88rem] mx-auto">
                            
                            {/* Horizontal Roadmap Connector Track */}
                            <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 relative z-10">
                                {[
                                    { step: "01", title: "Discovery & Scoping", desc: "Audit business objectives and define explicit functional requirements.", icon: Handshake },
                                    { step: "02", title: "Architecture & SOW", desc: "Detailed technical specification, milestones, and fixed pricing breakdown.", icon: FileText },
                                    { step: "03", title: "Kickoff & Sprints", desc: "Dedicated squad begins agile execution with regular staging deployments.", icon: Rocket },
                                    { step: "04", title: "Review & Quality QA", desc: "Continuous integration testing, client reviews, and automated verification.", icon: SearchCheck },
                                    { step: "05", title: "Deployment & SLAs", desc: "Zero-downtime go-live, team onboarding, and ongoing maintenance support.", icon: PackageCheck }
                                ].map((proc, pIdx) => (
                                    <ScrollReveal key={pIdx} animation="fade-up" delay={80 * (pIdx + 1)} className="h-full">
                                        <div className="group relative flex flex-col items-center h-full">
                                            
                                            {/* Top Roadmap Node */}
                                            <div className="relative mb-5">
                                                <div className="size-16 rounded-2xl bg-white/80 shadow-lg shadow-blue-900/10 border-2 border-white/90 ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                    <proc.icon className="size-6 text-[#00477b]" />
                                                </div>
                                                {/* Step Number Tag */}
                                                <span className="absolute -top-2 -right-2 size-5 rounded-full bg-[#00477b] text-white text-[10px] font-bold flex items-center justify-center shadow-md z-20">
                                                    {proc.step}
                                                </span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="w-full h-full bg-white/20 backdrop-blur-xl border border-white/50 p-5 sm:p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/35 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                                <h3 className="text-base font-normal text-[#00477b] mb-1.5 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                    {proc.title}
                                                </h3>

                                                <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                                    {proc.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. How Our Delivery Model Scales Growth (Edge-to-Edge Split Image Section) */}
                <section className="relative z-10 mt-4 sm:mt-6">
                    <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[460px]">
                            
                            {/* Left Side: Checklist Content */}
                            <ScrollReveal animation="fade-right" delay={100} className="h-full">
                                <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white/30 via-white/20 to-white/10 h-full">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3 self-start">
                                        THE IMPACT
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-5">
                                        How Our Delivery Model Scales Growth
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        {[
                                            "Predictable costs and zero budget creep for high-velocity software builds.",
                                            "Fast deployments with bi-weekly release cycles, keeping your product ahead.",
                                            "Senior engineers and Frappe/Laravel architects ensuring production stability.",
                                            "Scale engineering capacity up or down effortlessly as business priorities evolve."
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 bg-white/25 backdrop-blur-md rounded-2xl border border-white/50 shadow-xs">
                                                <div className="mt-0.5 flex-shrink-0 text-[#00477b] bg-white/80 p-1.5 rounded-xl border border-white/90 shadow-xs">
                                                    <CheckCircle2 className="size-4" />
                                                </div>
                                                <span className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-normal">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex">
                                        <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-11 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all">
                                            <Link href="/free-digital-consultation">
                                                Discuss Your Project
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Side: Full-Bleed Image */}
                            <ScrollReveal animation="fade-left" delay={150} className="h-full">
                                <div className="relative min-h-[300px] lg:min-h-full w-full overflow-hidden group h-full">
                                    <img
                                        src="/assets/office-story.webp"
                                        alt="Office Collaboration"
                                        className="absolute inset-0 w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002440]/60 via-transparent to-transparent pointer-events-none"></div>
                                </div>
                            </ScrollReveal>

                        </div>
                    </div>
                </section>

                {/* 6. FAQ & Interactive Transparent Consultation Form */}
                <section className="relative z-10 my-6 sm:my-8">
                    <div className="w-full bg-white/20 backdrop-blur-xl border-y border-white/40 py-8 sm:py-12 px-4 sm:px-6 lg:px-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
                                
                                {/* Left Column: FAQ Accordion */}
                                <div className="lg:col-span-6 space-y-6">
                                    <ScrollReveal animation="fade-up" delay={80}>
                                        <div>
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                FAQ & CLARIFICATIONS
                                            </span>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                                Frequently Asked Questions
                                            </h2>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                                                Everything you need to know about our engagement terms, intellectual property, and delivery process.
                                            </p>
                                        </div>
                                    </ScrollReveal>

                                    <div className="space-y-3">
                                        {[
                                            {
                                                q: "Which delivery model is right for my project?",
                                                a: "If your specifications and deliverables are well-defined, the Fixed Scope model is best. For continuous evolving products, Retainer Squad or Hybrid Model offers maximum sprint flexibility."
                                            },
                                            {
                                                q: "Do I get full ownership of the source code and IP?",
                                                a: "Yes. 100% of the source code, repository commits, databases, and IP rights transfer fully to you with no proprietary vendor lock-in."
                                            },
                                            {
                                                q: "How are payments and milestones structured?",
                                                a: "Fixed-scope projects are split into 3-4 verifiable milestone deliverables with transparent escrow/approval sign-offs. Retainers are billed monthly with clear task tracking."
                                            },
                                            {
                                                q: "What happens if we need changes during development?",
                                                a: "For retainer models, tasks are re-prioritized on the fly in sprint planning. For fixed-scope projects, we provide clear addendum estimates before executing any new feature."
                                            },
                                            {
                                                q: "Is there a post-launch warranty period?",
                                                a: "Yes, every fixed-scope deployment includes a complimentary 30-day post-launch bug-fix warranty and ongoing monitoring support."
                                            }
                                        ].map((faq, fIdx) => (
                                            <ScrollReveal key={fIdx} animation="fade-up" delay={60 * (fIdx + 1)}>
                                                <details 
                                                    className="group bg-white/25 backdrop-blur-xl border border-white/50 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                                                >
                                                    <summary className="flex items-center justify-between cursor-pointer font-medium text-sm sm:text-base text-[#00477b] select-none gap-3">
                                                        <span>{faq.q}</span>
                                                        <span className="shrink-0 size-7 rounded-xl bg-white/80 border border-blue-100 flex items-center justify-center text-[#00477b] transition-transform duration-300 group-open:rotate-180">
                                                            <ChevronDown className="size-4" />
                                                        </span>
                                                    </summary>
                                                    <p className="mt-3 pt-3 border-t border-white/40 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </details>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Transparent Contact Form */}
                                <div className="lg:col-span-6">
                                    <ScrollReveal animation="fade-left" delay={120}>
                                        <div className="mb-6">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                                GET IN TOUCH
                                            </span>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                                Let's Discuss The Right Model For Your Project
                                            </h2>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                                                Whether you need a full turnkey build or dedicated developers - we'll help you choose the best model.
                                            </p>
                                        </div>

                                        <form className="bg-white/20 backdrop-blur-xl p-7 sm:p-9 border border-white/50 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="name" className="text-[#00477b] font-medium text-xs">Full Name *</Label>
                                                    <Input id="name" placeholder="Rahul Sharma" className="h-12 rounded-xl border-white/80 bg-white/60 backdrop-blur-md focus:border-[#00477b] text-sm shadow-xs text-zinc-800" />
                                                </div>

                                                <div className="space-y-1.5">
                                                    <Label htmlFor="email" className="text-[#00477b] font-medium text-xs">Work Email *</Label>
                                                    <Input id="email" type="email" placeholder="rahul@company.com" className="h-12 rounded-xl border-white/80 bg-white/60 backdrop-blur-md focus:border-[#00477b] text-sm shadow-xs text-zinc-800" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="budget" className="text-[#00477b] font-medium text-xs">Estimated Budget *</Label>
                                                    <select id="budget" className="w-full h-12 rounded-xl border border-white/80 bg-white/60 backdrop-blur-md focus:border-[#00477b] text-sm shadow-xs px-3 text-zinc-700">
                                                        <option value="">Select Budget</option>
                                                        <option value="10k-50k">₹10K - ₹50K</option>
                                                        <option value="50k-150k">₹50K - ₹1.5L</option>
                                                        <option value="150k-300k">₹1.5L - ₹3L</option>
                                                        <option value="300k+">₹3L+</option>
                                                    </select>
                                                </div>

                                                <div className="space-y-1.5">
                                                    <Label htmlFor="projectType" className="text-[#00477b] font-medium text-xs">Preferred Model / Project *</Label>
                                                    <select id="projectType" className="w-full h-12 rounded-xl border border-white/80 bg-white/60 backdrop-blur-md focus:border-[#00477b] text-sm shadow-xs px-3 text-zinc-700">
                                                        <option value="">Select Delivery Model</option>
                                                        <option value="fixed">Fixed Scope Project</option>
                                                        <option value="retainer">Retainer Squad</option>
                                                        <option value="hybrid">Hybrid Engagement</option>
                                                        <option value="tasks">Mini Task On-Demand</option>
                                                        <option value="erp">ERP Implementation</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="message" className="text-[#00477b] font-medium text-xs">Project Brief & Requirements</Label>
                                                <Textarea id="message" placeholder="Tell us briefly about your goals, timelines, or technology preferences..." className="min-h-[110px] rounded-xl border-white/80 bg-white/60 backdrop-blur-md focus:border-[#00477b] text-sm shadow-xs resize-none p-3 text-zinc-800" />
                                            </div>

                                            <Button type="button" className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-9 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                                Discuss Project & Get Proposal
                                            </Button>
                                        </form>
                                    </ScrollReveal>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
}
