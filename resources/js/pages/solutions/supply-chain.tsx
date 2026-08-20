import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Truck, FileText, Clock, Network, Settings, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    Search, TabletSmartphone, Code, Zap, ShieldCheck,
    Boxes, Warehouse, BarChart3, ArrowRight, Lightbulb,
    Server, Layout, Smartphone, Cpu, Cloud, Package, Handshake, Compass
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
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/supply-chain.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                Your Supply Chain Is Unique. Your Software Should Be Too.
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                You Don’t Need Another Off-The-Shelf ERP. <br />
                                <span className="text-blue-100 font-normal">You Need Software That Fits The Way Your Business Actually Runs.</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Every manufacturer has its own processes, partners, and pain points. At Gnosys Digital, we build <strong className="text-white font-semibold">custom Supply Chain &amp; Logistics software</strong> designed exactly around your workflow — not someone else’s.
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
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Explore Past Projects
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. The Reality of SME Supply Chains (5 Cards) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            The Reality of SME Supply Chains
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            No Two Manufacturers Are The Same — <br className="hidden sm:inline" />
                            So Why Use The Same Software?
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Truck className="size-7" />, title: "Different Dispatch Models", desc: "Some deliver via transporters, others via distributors." },
                                    { icon: <FileText className="size-7" />, title: "Manual LR & Paper Processes", desc: "Nothing integrates across departments." },
                                    { icon: <Clock className="size-7" />, title: "No Real-Time Tracking", desc: "Once it leaves the gate, visibility disappears." },
                                    { icon: <Network className="size-7" />, title: "Disconnected Data", desc: "Tally, WhatsApp, and Excel — none talk to each other." },
                                    { icon: <Settings className="size-7" />, title: "ERP Overkill", desc: "Big-brand systems cost too much and fit too little." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-tight relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-10">
                                You get a system that feels native to your business — <span className="font-bold text-[#00477b]">because it's built from it.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Balanced 8-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            What We Build for You
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            From Warehouse To Dealer — We Design Your Digital Backbone.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            We design and develop custom supply chain platforms that give you total visibility and control — built around your business logic, your partners, and your workflows.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <Truck className="size-6" />, f: "Dispatch Management", c: "Digital gate pass, dispatch slips, vehicle tracking." },
                                    { icon: <Network className="size-6" />, f: "Transporter Integration", c: "Assign, track, and reconcile shipments." },
                                    { icon: <Warehouse className="size-6" />, f: "Warehouse Sync", c: "Real-time stock across multiple locations." },
                                    { icon: <Users className="size-6" />, f: "Dealer / Distributor Portal", c: "Place orders, track deliveries, manage returns." },
                                    { icon: <CheckCircle className="size-6" />, f: "Delivery Proof", c: "Photo, signature, or QR confirmation." },
                                    { icon: <BarChart3 className="size-6" />, f: "KPI Dashboards", c: "Delivery performance, order turnaround, cost metrics." },
                                    { icon: <Cpu className="size-6" />, f: "ERP / Tally Integration", c: "Live sync for accounts and invoices." },
                                    { icon: <Zap className="size-6" />, f: "Automation", c: "Alerts, escalations, and reporting rules." }
                                ].map((row, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-7 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        
                                        <div className="flex items-center justify-between mb-5 relative z-10">
                                            <div className="size-12 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                {row.icon}
                                            </div>
                                            <span className="text-[11px] font-black text-zinc-400/80 tracking-widest uppercase">
                                                0{i + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-snug relative z-10">
                                            {row.f}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed relative z-10 mt-auto">
                                            {row.c}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold shadow-md transition-all">
                                    <Link href="/free-digital-consultation">
                                        Discuss Your Requirements
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Connected Logistics Pipeline */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WORKFLOW PIPELINE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Seamless Order-to-Delivery Pipeline
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Unified digital checkpoints ensuring zero loss, accurate routing, and faster dealer fulfillment.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="hidden lg:block absolute top-[6.5rem] left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 z-0"></div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                                    {[
                                        {
                                            step: "01",
                                            tag: "Order Entry",
                                            icon: <Package className="size-7" />,
                                            title: "Dealer Portal",
                                            desc: "Direct dealer ordering with credit limits & stock hold."
                                        },
                                        {
                                            step: "02",
                                            tag: "Allocation",
                                            icon: <Warehouse className="size-7" />,
                                            title: "Plant Fulfillment",
                                            desc: "FIFO/FEFO batch allocation & pick-list dispatch."
                                        },
                                        {
                                            step: "03",
                                            tag: "Documentation",
                                            icon: <FileText className="size-7" />,
                                            title: "E-Way & LR",
                                            desc: "Auto-generation of gate passes, E-Way bills & LR."
                                        },
                                        {
                                            step: "04",
                                            tag: "Logistics",
                                            icon: <Truck className="size-7" />,
                                            title: "Transit & Tracking",
                                            desc: "Live GPS updates and automated WhatsApp milestones."
                                        },
                                        {
                                            step: "05",
                                            tag: "Closing",
                                            icon: <CheckCircle className="size-7" />,
                                            title: "Digital POD",
                                            desc: "Instant mobile sign-off & automated ledger settlement."
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Step {node.step}</span>
                                                </div>

                                                <div className="size-18 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                                                    {node.tag}
                                                </span>

                                                <h3 className="font-bold text-[#00477b] text-xl mb-3 tracking-tight">
                                                    {node.title}
                                                </h3>

                                                <p className="text-xs text-zinc-600 font-medium leading-relaxed mt-auto">
                                                    {node.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. How We Work (Development Process) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            How We Work
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            From Process Mapping To Deployment — End-To-End Custom Development.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Discovery & Process Mapping", desc: "We study your current supply chain and identify digital touchpoints." },
                                    { icon: <TabletSmartphone className="size-7" />, title: "Blueprint & UX Design", desc: "You see screen flows, approval logic, and dashboard samples — before we code." },
                                    { icon: <Code className="size-7" />, title: "Development & Integration", desc: "Built on Laravel full stack, API-ready, scalable, and secure." },
                                    { icon: <Zap className="size-7" />, title: "Training & Go-Live", desc: "We deploy, train your staff, and fine-tune post-launch." }
                                ].map((step, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-3 leading-tight relative z-10">{step.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-10">
                                Our approach feels like an IT partner — <span className="font-bold text-[#00477b]">not a software vendor.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Development Wins for SMEs (Full Width Edge-to-Edge Split Layout) */}
                <section className="pt-24 pb-12 relative z-10">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[540px]">
                                
                                {/* Left Content: Text & Points */}
                                <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center max-w-2xl lg:max-w-none lg:ml-auto">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                        Why Custom Development Wins for SMEs
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                        Because One-Size Software Never Fits Indian Manufacturing.
                                    </h2>
                                    
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Tailored to your existing process, not the other way around.",
                                            "Lower cost and faster implementation than ERP platforms.",
                                            "Integrates seamlessly with your current tools — Tally, Excel, WhatsApp.",
                                            "Future-ready — we build it modularly so you can add features later.",
                                            "Local development, support, and training."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3.5">
                                                <div className="size-6 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 mt-0.5 text-[#00477b]">
                                                    <CheckCircle2 className="size-4" />
                                                </div>
                                                <span className="text-zinc-800 font-semibold text-sm sm:text-[15px]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div>
                                        <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-sm font-bold shadow-lg shadow-blue-900/15 transition-all">
                                            <Link href="/free-digital-consultation">
                                                Schedule a Consultation
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Content: Edge-to-Edge Image with No Radius and No Padding */}
                                <div className="relative w-full h-[400px] lg:h-full min-h-[460px] overflow-hidden">
                                    <img 
                                        src="/assets/supply-port.webp" 
                                        alt="Supply Chain Operations" 
                                        className="w-full h-full object-cover object-center rounded-none" 
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Technology & Capabilities (Modern 6-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Technology & Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Modern Tech, Tailored To Your Business.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto">
                            We design and develop custom supply chain platforms that give you total visibility and control — built around your business logic, your partners, and your workflows.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        icon: <Server className="size-6" />,
                                        area: "Backend",
                                        desc: "High-concurrency data processing, custom business logic, and transactional database integrity.",
                                        stack: ["Laravel (PHP 8+)", "MySQL", "Redis", "REST APIs"]
                                    },
                                    {
                                        icon: <Layout className="size-6" />,
                                        area: "Frontend",
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for plant operators and managers.",
                                        stack: ["React", "Vue", "Tailwind CSS"]
                                    },
                                    {
                                        icon: <Smartphone className="size-6" />,
                                        area: "Mobile Access",
                                        desc: "Offline-first shop floor mobile applications and rugged handheld workstations.",
                                        stack: ["Progressive Web App (offline-ready)"]
                                    },
                                    {
                                        icon: <Cpu className="size-6" />,
                                        area: "Integration",
                                        desc: "Real-time barcode scanners, vehicle telemetry, and bi-directional ERP synchronization.",
                                        stack: ["Tally", "SAP B1", "Zoho", "WhatsApp", "SMS Gateways"]
                                    },
                                    {
                                        icon: <Cloud className="size-6" />,
                                        area: "Hosting",
                                        desc: "99.9% uptime SLA with automatic failover, containerization, and flexible cloud environments.",
                                        stack: ["AWS", "DigitalOcean", "On-premise"]
                                    },
                                    {
                                        icon: <ShieldCheck className="size-6" />,
                                        area: "Security",
                                        desc: "Bank-grade data encryption, granular role permissions, and immutable audit logs.",
                                        stack: ["JWT Auth", "Role-based Access", "Data Encryption"]
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                                        <div className="relative z-10">
                                            {/* Header with Icon & Category */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="size-13 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-[#00477b] leading-tight">
                                                        {item.area}
                                                    </h3>
                                                    <span className="text-[11px] font-black text-zinc-400 uppercase tracking-wider">
                                                        LAYER 0{i + 1}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-6">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Tech Badges / Pills */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60 relative z-10">
                                            {item.stack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-white/90 border border-blue-100/80 text-[12px] font-bold text-zinc-700 shadow-sm hover:bg-blue-50 hover:text-[#00477b] transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-10">
                                Built like enterprise software — <span className="font-bold text-[#00477b]">customized for SME realities.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 8. Engagement Models */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Engagement Models
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Flexible Engagement. Real Partnership.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    { 
                                        icon: <Lightbulb className="size-7" />, 
                                        title: "Fixed Scope Project", 
                                        desc: "You have a clear requirement. We build it end-to-end with milestones, pricing, and delivery timelines.",
                                        btn: "Get Proposal"
                                    },
                                    { 
                                        icon: <Handshake className="size-7" />, 
                                        title: "Dedicated Development Partner", 
                                        desc: "You want a long-term tech partner. Hire a Gnosys team to continuously develop, maintain, and evolve your system.",
                                        btn: "Discuss Partnership"
                                    },
                                    { 
                                        icon: <Compass className="size-7" />, 
                                        title: "Process + Tech Consulting", 
                                        desc: "Unsure where to start? We'll map your workflows, define requirements, and recommend the right tech path.",
                                        btn: "Book Consultation"
                                    }
                                ].map((card, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-8 sm:p-9 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center justify-between relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3 leading-tight relative z-10">{card.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-8 flex-1 relative z-10">
                                            {card.desc}
                                        </p>
                                        <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-xl px-6 h-12 text-sm font-bold shadow-md hover:shadow-lg transition-all w-full relative z-10">
                                            <Link href="/free-digital-consultation">
                                                {card.btn}
                                            </Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Why Gnosys Digital */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            Why Gnosys Digital
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4 leading-tight">
                            We Bring Enterprise Thinking To SME Manufacturing.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
                                {[
                                    "10+ years of experience building systems for manufacturing, logistics, and service operations.",
                                    "Proven expertise in Laravel full-stack architecture.",
                                    "Deep understanding of Indian supply chain workflows.",
                                    "Strong focus on ROI, usability, and adoption — not just code.",
                                    "Transparent delivery models and post-launch support."
                                ].map((point, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md p-6 rounded-[1.75rem] border border-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem] pointer-events-none"></div>
                                        <div className="size-10 mb-4 rounded-xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 flex items-center justify-center font-black text-sm relative z-10 group-hover:bg-[#00477b] group-hover:text-white transition-colors">
                                            0{i + 1}
                                        </div>
                                        <p className="text-xs sm:text-sm text-zinc-700 font-semibold leading-relaxed relative z-10">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <Button asChild className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-13 text-sm font-bold shadow-md hover:shadow-xl transition-all">
                                    <Link href="/free-digital-consultation">
                                        Talk to Gnosys Solutions Expert
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Bottom CTA */}
                <section className="py-32 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            DIGITIZE YOUR LOGISTICS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            We Bring Enterprise Thinking To SME Manufacturing
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop running on WhatsApp and paper LRs. Build a custom logistics & supply chain platform with Gnosys Digital.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Talk To Our Tech Expert
                                </Link>
                            </Button>
                            <Button asChild className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-14 text-base font-semibold shadow-sm transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Book a Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
