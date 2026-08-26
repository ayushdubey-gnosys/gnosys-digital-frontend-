import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PackageOpen, Clock, Network, Search, Zap, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    ArrowRight, Boxes, Truck, MapPin, TabletSmartphone, Code, Settings, Warehouse,
    ShieldCheck, BarChart3, RotateCcw, ScanLine, Layers, Workflow, ShoppingCart,
    Server, Layout, Smartphone, Cpu, Cloud, Handshake, Compass, Trophy, Sparkles
} from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';
import React from 'react';

export default function CustomWarehouse() {
    return (
        <MainLayout>
            <Head title="Custom Warehouse & Inventory Management Software Development" />
            
            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>
            
            {/* 1. Hero Section (Clear & Full Background Image) */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/warehouse.webp')", backgroundColor: '#020b18' }}
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
                                Warehouse & Inventory WMS
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Your Stock Process Is Unique. <br />
                                <span className="text-blue-100 font-normal">Your System Should Match It - Not Fight It.</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                From inbound goods to multi-bin dispatch, no two warehouses operate identically. Gnosys Digital engineers custom Warehouse & Inventory Management Systems tailored to your exact floor topology.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Talk to a Warehouse Expert <ArrowRight className="size-5" /></span>
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
                
                {/* 2. Why Off-The-Shelf Software Doesn't Work (5 Rectangular Cards) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                The Challenge
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Why Generic Software Fails Indian Warehouses
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-3 sm:px-4 lg:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[95rem]">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                                {[
                                    { icon: PackageOpen, title: "Too Generic", desc: "Off-the-shelf software forces you into rigid shelf structures that don't match your physical bins." },
                                    { icon: Settings, title: "Fragile Excel Sheets", desc: "Spreadsheets break every time there's a new SKU variation, batch number, or multi-location transfer." },
                                    { icon: Network, title: "Disconnected Data", desc: "Tally, production store rooms, and final dispatch operate in silos with zero live sync." },
                                    { icon: MapPin, title: "Blind Inventory", desc: "You count quantity, but have zero visibility into stock aging, pick velocity, or dead capital." },
                                    { icon: Clock, title: "Slow to Adapt", desc: "One slight change in inward or outward logistics causes severe inventory reconciliation lag." }
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
                                Complete Floor-to-Cloud Warehouse Control
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-3xl mx-auto leading-relaxed">
                                We design custom warehouse management software that fits your facility layout, scanning hardware, and fulfillment speed.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: Warehouse, title: "Multi-Bin Layout Mapping", desc: "Map your exact warehouse topology: aisles, racks, levels, and bins for directed put-away and picking." },
                                    { icon: ScanLine, title: "Barcode & QR Inwarding", desc: "Mobile scanner integration for receiving, GRN generation, quality inspection, and automated vendor returns." },
                                    { icon: Boxes, title: "Batch & Expiry Management", desc: "Enforce automated FIFO/FEFO allocation rules to eliminate near-expiry stock losses and scrap." },
                                    { icon: Workflow, title: "Pick-Pack-Ship Automation", desc: "Generate zone-wise pick-lists, box packing slips, weigh-scale verification, and carrier label printing." },
                                    { icon: RotateCcw, title: "Cycle Counting & Audits", desc: "Perform continuous physical inventory counts without halting operations, with live variance reports." },
                                    { icon: BarChart3, title: "Inventory Aging Analytics", desc: "Visual heatmaps of fast vs slow-moving stock, holding cost breakdowns, and dead capital alerts." },
                                    { icon: ShieldCheck, title: "ERP & Tally Integration", desc: "Seamless two-way sync with Tally Prime, Zoho Books, SAP, or custom ERP systems via secure REST APIs." },
                                    { icon: Zap, title: "Low Stock & Reorder Triggers", desc: "Automated replenishment alerts sent via WhatsApp/SMS to purchase teams when items hit safety thresholds." }
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

                {/* 4. Connected Warehouse Pipeline (Roadmap Style) */}
                <section className="pt-10 sm:pt-12 bg-transparent border-t border-white/40 text-center">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <div className="w-full px-4 sm:px-6 mb-7 sm:mb-8 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-wider mb-3">
                                Physical Flow
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                Seamless Inward-to-Dispatch Flow
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto">
                                Every physical touchpoint mapped to digital checkpoints with zero latency.
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
                                        tag: "Inward Gate",
                                        icon: Truck,
                                        title: "Gate In & Unloading",
                                        desc: "PO matching, vehicle weighbridge logging, and ASN barcode check-in."
                                    },
                                    {
                                        step: "02",
                                        tag: "Quality Check",
                                        icon: ShieldCheck,
                                        title: "QC & GRN Creation",
                                        desc: "Sample testing, damage photo logging, and instant GRN generation."
                                    },
                                    {
                                        step: "03",
                                        tag: "Put-Away",
                                        icon: Layers,
                                        title: "Directed Storage",
                                        desc: "System recommends optimal bin locations based on item velocity and weight."
                                    },
                                    {
                                        step: "04",
                                        tag: "Order Pick",
                                        icon: ShoppingCart,
                                        title: "Wave & Batch Pick",
                                        desc: "Route-optimized picking routes on handheld mobile scanners."
                                    },
                                    {
                                        step: "05",
                                        tag: "Outward",
                                        icon: ScanLine,
                                        title: "Pack, Weigh & Ship",
                                        desc: "Box weight verification, e-way bill generation, and transporter manifest."
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
                                Development Process
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-3">
                                From Site Survey To Go-Live: End-To-End Development
                            </h2>
                            <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
                                A systematic 4-phase rollout methodology engineered for zero downtime in your active warehouse.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: Search, 
                                        title: "On-Site Warehouse Audit", 
                                        desc: "We study your rack layout, stock movements, and identify paper bottlenecks directly on the floor." 
                                    },
                                    { 
                                        icon: TabletSmartphone, 
                                        title: "UX & Scanner Architecture", 
                                        desc: "We design simple, high-contrast screens for handheld scanner devices and touch tablets." 
                                    },
                                    { 
                                        icon: Code, 
                                        title: "Custom Laravel & React Build", 
                                        desc: "Built on high-performance PHP 8.3 & React with offline-capable PWA support." 
                                    },
                                    { 
                                        icon: Zap, 
                                        title: "Staff Training & Phased Go-Live", 
                                        desc: "Hands-on floor staff onboarding with parallel-run support before full cutover." 
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

                {/* 6. Why Custom Warehouse Software Wins (Full Width Edge-to-Edge Split Layout) */}
                <section className="relative z-10 my-10 sm:my-12">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[540px]">
                                
                                {/* Left Content: Text & Points */}
                                <ScrollReveal animation="fade-right" delay={100} className="h-full">
                                    <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center max-w-2xl lg:max-w-none lg:ml-auto text-left h-full">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                            Why Custom WMS Wins
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                            Because No Ready-Made Tool Can Match Your Real-World Operations.
                                        </h2>
                                        
                                        <div className="space-y-3.5 mb-10">
                                            {[
                                                "Custom workflows built around your specific warehouse teams and bin racks",
                                                "Scalable architecture - deploy in one facility and expand nationwide",
                                                "Automated 2-way sync with accounting tools (Tally, Zoho, SAP B1, Excel)",
                                                "Granular role-based permissions and immutable cycle audit logs",
                                                "Localized support tailored for Indian warehouse realities and ground staff"
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
                                                    Book a Free Process Audit
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Right Content: Edge-to-Edge Image */}
                                <ScrollReveal animation="fade-left" delay={150} className="h-full">
                                    <div className="relative w-full h-[400px] lg:h-full min-h-[460px] bg-[#02050f] overflow-hidden flex items-center justify-center">
                                        <img 
                                            src="/assets/warehourse.png" 
                                            alt="Warehouse Operations" 
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
                                        desc: "High-concurrency data processing, transactional inventory locks, and ultra-fast SKU lookup.",
                                        stack: ["Laravel (PHP 8.3)", "MySQL", "Redis Caching"]
                                    },
                                    {
                                        icon: Layout,
                                        area: "Picker & Manager UI",
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for floor pickers and supervisors.",
                                        stack: ["React 19", "Tailwind CSS v4", "Inertia.js"]
                                    },
                                    {
                                        icon: Smartphone,
                                        area: "Mobile & Rugged Tablets",
                                        desc: "Offline-first shop floor PWA mobile apps and rugged handheld barcode workstations.",
                                        stack: ["Offline PWA", "Barcode Scanner SDK", "Android Touch"]
                                    },
                                    {
                                        icon: Cpu,
                                        area: "IoT & Barcode Telemetry",
                                        desc: "Real-time 2D barcode scanners, weighbridge sensor telemetry, and automated ERP bridges.",
                                        stack: ["Tally Prime", "Zoho Books", "SAP B1", "Weighbridge API"]
                                    },
                                    {
                                        icon: Cloud,
                                        area: "Cloud & Local Edge Hubs",
                                        desc: "99.9% uptime SLA with local warehouse edge server failover and redundant cloud backups.",
                                        stack: ["AWS Cloud", "DigitalOcean", "Local Edge Servers"]
                                    },
                                    {
                                        icon: ShieldCheck,
                                        area: "Security & Audit Governance",
                                        desc: "Bank-grade data encryption, granular role permissions, and immutable inventory transaction logs.",
                                        stack: ["Sanctum Auth", "Granular RBAC", "Immutable Audit Logs"]
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
                                        icon: Settings,
                                        title: "Fixed-Scope Project",
                                        desc: "Defined warehouse modules, pre-agreed deliverables, and clear rollout timelines.",
                                        btn: "Get Proposal",
                                        href: "/delivery-engagement-models"
                                    },
                                    {
                                        icon: Handshake,
                                        title: "Dedicated Logistics Partner",
                                        desc: "Continuous WMS enhancement working as your dedicated in-house engineering wing.",
                                        btn: "Discuss Partnership",
                                        href: "/free-digital-consultation"
                                    },
                                    {
                                        icon: Compass,
                                        title: "Process & Topology Consulting",
                                        desc: "Warehouse flow audit, rack coordinate mapping, and blueprinting before coding begins.",
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
                                    { title: "10+ Years Logistics Experience", desc: "Proven track record designing inventory, packing, and dispatch software.", icon: Trophy },
                                    { title: "Deep Domain Understanding", desc: "Tailored specifically for Indian SME warehouses, transit hubs, and stores.", icon: Warehouse },
                                    { title: "Laravel & React Masters", desc: "Ultra-fast, high-throughput architectures built for zero-lag scanner lookup.", icon: Code },
                                    { title: "Transparent Agile Delivery", desc: "Clear milestone-based delivery with continuous feedback and staging demos.", icon: Sparkles },
                                    { title: "Full Training & SLAs", desc: "On-ground floor staff training, long-term SLAs, and continuous optimization.", icon: ShieldCheck }
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
                                Digitize Your Warehouse
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                                We Bring Enterprise Thinking To SME Warehouses
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-700 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
                                Stop losing money to lost stock and manual entry. Build a custom warehouse management system with Gnosys Digital.
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
