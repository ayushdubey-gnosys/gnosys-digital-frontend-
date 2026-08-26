import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Truck, FileText, Clock, Network, Settings, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    Search, TabletSmartphone, Code, Zap, ShieldCheck,
    Boxes, Warehouse, BarChart3, ArrowRight, Lightbulb,
    Server, Layout, Smartphone, Cpu, Cloud, Package, Handshake, Compass, Trophy, Sparkles
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function SupplyChain() {
    return (
        <MainLayout>
            <Head title="Supply Chain Logistics Software Development" />
            
            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>
            
            {/* 1. Hero Section (Clear & Full Background Image) */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/supply-chain.webp')", backgroundColor: '#020b18' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none lg:w-1/2" />
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
                                Supply Chain & Logistics Control
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                You Don’t Need Another Rigid ERP. <br />
                                <span className="text-blue-100 font-normal">You Need Software Built For How You Actually Ship.</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Every manufacturer has unique transport models, dealer tiers, and dispatch workflows. Gnosys Digital engineers custom Supply Chain platforms tailored to your physical operations.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Talk to a Solutions Expert <ArrowRight className="size-5" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                    </Link>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                
                {/* 2. The Reality of SME Supply Chains (5 Rectangular Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                The Challenge
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Generic Supply Chain Software Fails
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    { icon: Truck, title: "Complex Dispatch", desc: "Multiple delivery modes: own fleet, market transporters, or dealer self-pickups with no unified hub." },
                                    { icon: FileText, title: "Paper LRs & Gate Passes", desc: "Drivers, security, and billing rely on physical slips leading to transit delays and misplacement." },
                                    { icon: Clock, title: "Zero Live Visibility", desc: "Once a vehicle leaves the plant gate, stock location visibility disappears until delivery complaints arrive." },
                                    { icon: Network, title: "Disconnected Data", desc: "Tally, WhatsApp driver groups, and dispatch spreadsheets never reconcile automatically." },
                                    { icon: Settings, title: "ERP Overkill", desc: "Expensive enterprise software requires too many complex screens and never gets adopted on the floor." }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-14 mb-4 rounded-xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (8 Core Capabilities) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Capabilities
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                From Warehouse To Dealer: Your Digital Logistics Backbone
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                We design custom supply chain platforms that deliver real-time visibility, automated vehicle tracking, and rapid dealer fulfillment.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: Truck, title: "Dispatch Management", desc: "Digital gate passes, multi-item dispatch slips, weight bridge integration, and vehicle load balancing." },
                                    { icon: Network, title: "Transporter & Freight Portal", desc: "Assign freight tenders, track transporter SLAs, compare lane rates, and automate freight billing." },
                                    { icon: Warehouse, title: "Multi-Hub Inventory Sync", desc: "Real-time stock ledger synchronization across central plants, regional CFAs, and transit hubs." },
                                    { icon: Users, title: "Dealer Ordering Portal", desc: "Allow dealers to place orders, check live credit limits, download invoices, and initiate warranty claims." },
                                    { icon: CheckCircle, title: "Digital Proof of Delivery (POD)", desc: "Capture geo-tagged mobile signatures, QR package scans, and damage photos for instant settlement." },
                                    { icon: BarChart3, title: "Logistics KPI Dashboards", desc: "Live turn-around time (TAT), lane freight costs, vehicle idle times, and dispatch fill rates." },
                                    { icon: Cpu, title: "ERP & Tally Integration", desc: "Automated two-way posting of sales orders, tax invoices, and payment receipts with Tally and ERPs." },
                                    { icon: Zap, title: "Automated WhatsApp Alerts", desc: "Trigger instant milestone notifications to dealers and sales managers when shipments are dispatched." }
                                ].map((mod, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * ((i % 4) + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <mod.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{mod.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{mod.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Connected Logistics Pipeline (Roadmap Style) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Pipeline Flow
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Seamless Order-to-Delivery Pipeline
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                Unified digital checkpoints ensuring zero loss, accurate routing, and faster dealer fulfillment.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="relative max-w-[85rem] mx-auto">
                            
                            {/* Horizontal Roadmap Connector Track */}
                            <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 border-t-2 border-dashed border-[#00477b]/40 z-0"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 relative z-10">
                                {[
                                    {
                                        step: "01",
                                        tag: "Order Entry",
                                        icon: Package,
                                        title: "Dealer Portal",
                                        desc: "Direct dealer ordering with credit limits, batch holds, and live delivery ETAs."
                                    },
                                    {
                                        step: "02",
                                        tag: "Allocation",
                                        icon: Warehouse,
                                        title: "Plant Fulfillment",
                                        desc: "FIFO/FEFO batch allocation, automated pick-lists, and staging bay direction."
                                    },
                                    {
                                        step: "03",
                                        tag: "Documentation",
                                        icon: FileText,
                                        title: "E-Way & Digital LR",
                                        desc: "Auto-generation of gate passes, NIC E-Way bills, and QR-coded lorry receipts."
                                    },
                                    {
                                        step: "04",
                                        tag: "Logistics",
                                        icon: Truck,
                                        title: "Transit & Tracking",
                                        desc: "Live GPS updates, FASTag checkpoint sync, and automated WhatsApp milestones."
                                    },
                                    {
                                        step: "05",
                                        tag: "Closing",
                                        icon: CheckCircle,
                                        title: "Digital POD & Settlement",
                                        desc: "Instant mobile sign-off, shortage logging, and automated ledger settlement."
                                    }
                                ].map((node, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div className="group relative flex flex-col items-center h-full">
                                            
                                            {/* Top Roadmap Node */}
                                            <div className="relative mb-6">
                                                <div className="size-18 rounded-2xl bg-white shadow-lg shadow-blue-900/10 border-2 border-white ring-4 ring-blue-100/80 group-hover:ring-[#00477b]/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative z-10 text-[#00477b]">
                                                    <node.icon className="size-7 text-[#00477b]" />
                                                </div>
                                                {/* Step Number Tag */}
                                                <span className="absolute -top-2 -right-2 size-6 rounded-full bg-[#00477b] text-white text-[11px] font-bold flex items-center justify-center shadow-md z-20">
                                                    {node.step}
                                                </span>
                                            </div>

                                            {/* Content Card */}
                                            <div className="w-full h-full bg-white/40 backdrop-blur-xl border border-white/70 p-6 sm:p-7 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:bg-white/60 group-hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center overflow-hidden relative">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-[#00477b] font-bold text-[10px] uppercase tracking-wider mb-2.5 relative z-10">
                                                    {node.tag}
                                                </span>

                                                <h3 className="text-base font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">
                                                    {node.title}
                                                </h3>

                                                <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. How We Work (Development Process) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Methodology
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                From Process Mapping To Deployment: End-To-End Development
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
                                Our systematic 4-phase rollout methodology engineered for zero interruption to ongoing dispatches.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: Search, 
                                        title: "Discovery & Process Mapping", 
                                        desc: "We study your current dispatch points, transporter workflows, and paper bottlenecks." 
                                    },
                                    { 
                                        icon: TabletSmartphone, 
                                        title: "Blueprint & UX Design", 
                                        desc: "We design simple, high-contrast screens for security gate guards, drivers, and accountants." 
                                    },
                                    { 
                                        icon: Code, 
                                        title: "Development & Integration", 
                                        desc: "Engineered on Laravel & React with APIs for GPS telematics, Tally, and WhatsApp gateways." 
                                    },
                                    { 
                                        icon: Zap, 
                                        title: "Training & Phased Go-Live", 
                                        desc: "Hands-on staff onboarding, transporter training, and 24/7 hypercare support post-launch." 
                                    }
                                ].map((step, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-8 sm:p-9 rounded-[2.25rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <step.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{step.title}</h3>
                                            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed relative z-10">{step.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Development Wins for SMEs (Full Width Edge-to-Edge Split Layout) */}
                <section className="relative z-10 my-10 sm:my-12">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[540px]">
                                
                                {/* Left Content: Text & Points */}
                                <ScrollReveal animation="fade-right" delay={100} className="h-full">
                                    <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center max-w-2xl lg:max-w-none lg:ml-auto text-left h-full">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                            Custom Logistics Control
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                            Because One-Size Software Never Fits Indian Manufacturing.
                                        </h2>
                                        
                                        <div className="space-y-3.5 mb-10">
                                            {[
                                                "Tailored to your exact freight settlement rules and multi-tier dealer structures",
                                                "Significantly lower total cost of ownership compared to bloated enterprise ERPs",
                                                "Integrates seamlessly with your current tools - Tally, Excel, FASTag, WhatsApp",
                                                "Modular architecture designed to scale as you add new plants and regional depots",
                                                "Local on-ground engineering support and driver onboarding in regional languages"
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3.5 p-3.5 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xs hover:bg-white transition-all">
                                                    <div className="size-7 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#00477b]">
                                                        <CheckCircle className="size-4" />
                                                    </div>
                                                    <span className="text-zinc-700 font-semibold text-xs sm:text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div>
                                            <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all w-fit">
                                                <Link href="/free-digital-consultation">
                                                    Schedule a Logistics Audit
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right Content: Edge-to-Edge Image */}
                                <ScrollReveal animation="fade-left" delay={150} className="h-full">
                                    <div className="relative w-full h-[400px] lg:h-full min-h-[460px] bg-[#02050f] overflow-hidden flex items-center justify-center">
                                        <img 
                                            src="/assets/supply-port.webp" 
                                            alt="Supply Chain Operations" 
                                            className="w-full h-full object-cover object-center rounded-none" 
                                            loading="lazy"
                                        />
                                    </div>
                                </ScrollReveal>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Technology & Capabilities (6 Architecture Layer Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Tech Stack
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Enterprise Technology, Engineered For High-Volume Logistics
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        icon: Server,
                                        area: "Backend Engine",
                                        desc: "High-concurrency data processing, transactional dispatch locks, and rapid SKU allocation.",
                                        stack: ["Laravel (PHP 8.3)", "MySQL", "Redis Caching"]
                                    },
                                    {
                                        icon: Layout,
                                        area: "Operator & Driver UI",
                                        desc: "Ultra-fast, touch-responsive interfaces designed for security gate staff and dispatchers.",
                                        stack: ["React 19", "Tailwind CSS v4", "Inertia.js"]
                                    },
                                    {
                                        icon: Smartphone,
                                        area: "Mobile & Telematics",
                                        desc: "Offline-first shop floor PWA mobile apps and rugged handheld barcode workstations.",
                                        stack: ["Offline PWA", "GPS Telematics", "Android Handhelds"]
                                    },
                                    {
                                        icon: Cpu,
                                        area: "IoT & Gateway Bridges",
                                        desc: "Weighbridge telemetry, FASTag API checkpoints, and automated WhatsApp/SMS notifications.",
                                        stack: ["Weighbridge API", "FASTag Sync", "WhatsApp Cloud API"]
                                    },
                                    {
                                        icon: Cloud,
                                        area: "Cloud Infrastructure",
                                        desc: "99.9% uptime SLA with automatic failover, containerization, and secure cloud backups.",
                                        stack: ["AWS Cloud", "DigitalOcean", "Docker Pipelines"]
                                    },
                                    {
                                        icon: ShieldCheck,
                                        area: "Security & Governance",
                                        desc: "Bank-grade data encryption, granular role permissions, and immutable delivery audit logs.",
                                        stack: ["Sanctum Auth", "Granular RBAC", "Immutable Audit Trails"]
                                    }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            
                                            <div className="relative z-10">
                                                <div className="size-16 mb-5 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center">
                                                    <item.icon className="size-7 text-[#00477b]" />
                                                </div>

                                                <h3 className="text-xl font-normal text-[#00477b] mb-2 leading-tight tracking-tight">
                                                    {item.area}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60 relative z-10">
                                                {item.stack.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 rounded-full bg-white/90 border border-blue-100 text-[11px] font-bold text-[#00477b] shadow-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Engagement Models */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Engagement
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Transparent Engagement Models
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    {
                                        icon: Lightbulb,
                                        title: "Fixed Scope Project",
                                        desc: "Clear dispatch and logistics requirements built end-to-end with pre-agreed timelines and costs.",
                                        btn: "Get Proposal",
                                        href: "/delivery-engagement-models"
                                    },
                                    {
                                        icon: Handshake,
                                        title: "Dedicated Supply Chain Partner",
                                        desc: "Long-term tech partnership with a dedicated Laravel team evolving your logistics software continuously.",
                                        btn: "Discuss Partnership",
                                        href: "/free-digital-consultation"
                                    },
                                    {
                                        icon: Compass,
                                        title: "Process & Logistics Consulting",
                                        desc: "Comprehensive supply chain workflow audit and technical blueprinting before software investment.",
                                        btn: "Book Consultation",
                                        href: "/growth-systems-discovery-call"
                                    }
                                ].map((card, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={80 * (i + 1)} className="h-full">
                                        <Link
                                            href={card.href}
                                            className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.25rem] p-8 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-between overflow-hidden h-full cursor-pointer block"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-16 mb-6 rounded-2xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10 transition-transform group-hover:scale-105">
                                                <card.icon className="size-7 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-xl font-normal text-[#00477b] mb-3 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e]">{card.title}</h3>
                                            <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6 relative z-10">
                                                {card.desc}
                                            </p>
                                            <div className="w-full relative z-10">
                                                <Button className="bg-[#00477b] group-hover:bg-[#00335e] text-white rounded-full px-6 h-12 text-sm font-bold shadow-md group-hover:shadow-lg transition-all w-full pointer-events-none">
                                                    {card.btn}
                                                </Button>
                                            </div>
                                        </Link>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Why Gnosys Digital (5 Rectangular Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Why Gnosys
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Choose Gnosys Digital
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    { title: "10+ Years Plant Experience", desc: "Proven track record designing production, quality, and shop floor tracking systems.", icon: Trophy },
                                    { title: "Laravel & React Core", desc: "Rock-solid backend and reactive interfaces built for zero latency on rugged floor tablets.", icon: Code },
                                    { title: "Ground-Level Understanding", desc: "Designed for Indian plant supervisors, machine operators, and store keepers.", icon: Warehouse },
                                    { title: "Agile Phased Rollout", desc: "No production stoppages; we deploy line by line with clear progress milestones.", icon: Sparkles },
                                    { title: "Ongoing Support & SLAs", desc: "Transparent pricing, on-ground floor training, and continuous system evolution.", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} animation="fade-up" delay={70 * (i + 1)} className="h-full">
                                        <div
                                            className="group relative bg-white/40 backdrop-blur-xl p-5 sm:p-6 rounded-[2rem] border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                            <div className="size-14 mb-4 rounded-xl bg-white text-[#00477b] border border-white shadow-md shadow-blue-900/5 flex items-center justify-center relative z-10">
                                                <item.icon className="size-6 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-lg font-normal text-[#00477b] mb-2 leading-tight tracking-tight relative z-10 group-hover:text-[#00335e] transition-colors">{item.title}</h3>
                                            <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed relative z-10">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Bottom CTA */}
                <section className="py-20 text-center relative z-10">
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-4">
                                Digitize Your Logistics
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                We Bring Enterprise Thinking To SME Manufacturing
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-700 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
                                Stop running on WhatsApp and paper LRs. Build a custom logistics & supply chain platform with Gnosys Digital.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        Book a Free Consultation
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </MainLayout>
    );
}
