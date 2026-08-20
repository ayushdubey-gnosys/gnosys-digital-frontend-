import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PackageOpen, Clock, Network, Search, Zap, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    ArrowRight, Boxes, Truck, MapPin, TabletSmartphone, Code, Settings, Warehouse,
    ShieldCheck, BarChart3, RotateCcw, ScanLine, Layers, Workflow, ShoppingCart,
    Server, Layout, Smartphone, Cpu, Cloud, Handshake, Compass
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
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/warehouse.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                Every Warehouse Is Different. Your Software Should Be Too.
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Your Stock Process Is Unique. <br />
                                <span className="text-blue-100 font-normal">Your System Should Match It — Not Fight It.</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                From inbound goods to final dispatch, no two warehouses operate the same way. Gnosys Digital builds custom Warehouse & Inventory Management Systems that mirror your workflow — not a generic template.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={280}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300 w-full sm:w-auto">
                                    <Link href="/free-digital-consultation">
                                        <span className="relative z-10 flex items-center gap-2">Talk to a Warehouse Solutions Expert <ArrowRight className="size-5" /></span>
                                        <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                    </Link>
                                </Button>
                                <Button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 rounded-full px-8 h-14 text-sm sm:text-base font-bold shadow-lg transition-all w-full sm:w-auto">
                                    Explore Our Work
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why Off-The-Shelf Software Doesn't Work (5 Cards) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Why Off-The-Shelf Software Doesn't Work
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            You've Tried Excel. You've Seen ERPs. <br className="hidden sm:inline" />
                            But Neither Fits How Your Warehouse Actually Runs.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <PackageOpen className="size-7" />, title: "Too Generic", desc: "Ready-made systems force you to follow their structure." },
                                    { icon: <Settings className="size-7" />, title: "Too Manual", desc: "Excel sheets break every time there's a new SKU or batch." },
                                    { icon: <Network className="size-7" />, title: "Too Isolated", desc: "Tally, stores, and dispatch all speak different languages." },
                                    { icon: <MapPin className="size-7" />, title: "No Real Insights", desc: "You track stock, but not efficiency or movement trends." },
                                    { icon: <Clock className="size-7" />, title: "Too Slow to Adapt", desc: "One change in process = chaos in data." }
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
                                You don't need more software — <span className="font-bold text-[#00477b]">you need software that understands your warehouse.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Balanced 4-Column 8-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            WHAT WE BUILD
                        </span>
                        <p className="text-sm font-bold text-[#00477b] uppercase tracking-widest mb-2">
                            From Racks To Reconciliation
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Design Your Digital Warehouse, Your Way.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            At Gnosys Digital, we custom-build Warehouse & Inventory Management Systems for SME manufacturers. Every module, workflow, and report is designed around your physical space, your stock types, and your process logic.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <ScanLine className="size-6" />, f: "Inbound & GRN", c: "Receive material, verify quantities, auto-update stock." },
                                    { icon: <MapPin className="size-6" />, f: "Bin & Location Management", c: "Assign unique bin IDs, map real warehouse layout." },
                                    { icon: <Boxes className="size-6" />, f: "Stock Movement Tracking", c: "Record internal transfers, returns, and consumption." },
                                    { icon: <TabletSmartphone className="size-6" />, f: "Barcode / QR Integration", c: "Label and scan items for instant traceability." },
                                    { icon: <Warehouse className="size-6" />, f: "Multi-Warehouse Control", c: "Manage central + branch warehouses in one system." },
                                    { icon: <Workflow className="size-6" />, f: "Dispatch Sync", c: "Link finished goods with orders for dispatch planning." },
                                    { icon: <RotateCcw className="size-6" />, f: "Inventory Audits", c: "Cycle counting, reconciliation, and variance reporting." },
                                    { icon: <Network className="size-6" />, f: "Tally / ERP Integration", c: "Auto-sync purchase, sale, and stock ledgers." }
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

                {/* 4. Warehouse Flow Pipeline (5 Stages) */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WORKFLOW PIPELINE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Logistics & Inventory Flow
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Seamless inventory flow from inward gate receipt to final customer delivery.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="hidden lg:block absolute top-[6.5rem] left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 z-0"></div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[90rem] mx-auto relative z-10">
                                    {[
                                        {
                                            step: "01",
                                            tag: "Inbound Flow",
                                            icon: <Boxes className="size-7" />,
                                            title: "Inbound",
                                            desc: "Receives and logs incoming goods."
                                        },
                                        {
                                            step: "02",
                                            tag: "Storage Flow",
                                            icon: <Warehouse className="size-7" />,
                                            title: "Storage",
                                            desc: "Stores products in organized sections."
                                        },
                                        {
                                            step: "03",
                                            tag: "Internal Flow",
                                            icon: <RotateCcw className="size-7" />,
                                            title: "Movement",
                                            desc: "Transfers items within the facility."
                                        },
                                        {
                                            step: "04",
                                            tag: "Outward Flow",
                                            icon: <Truck className="size-7" />,
                                            title: "Dispatch",
                                            desc: "Prepares and ships outgoing orders."
                                        },
                                        {
                                            step: "05",
                                            tag: "Analytics Flow",
                                            icon: <BarChart3 className="size-7" />,
                                            title: "Reports",
                                            desc: "Generates data for performance tracking."
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Stage {node.step}</span>
                                                </div>

                                                <div className="size-16 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                                                    {node.tag}
                                                </span>

                                                <h3 className="font-bold text-[#00477b] text-xl mb-3 tracking-tight">
                                                    {node.title}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mt-auto">
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

                {/* 5. Our Development Process */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            Our Development Process
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Don’t Sell Software. We Engineer It Around You.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Process Mapping & Discovery", desc: "We study how your warehouse operates — racks, bins, item types, approval steps." },
                                    { icon: <TabletSmartphone className="size-7" />, title: "Blueprint & Design", desc: "We visualize your process digitally: screens, data flow, and reports before development begins." },
                                    { icon: <Code className="size-7" />, title: "Development & Integration", desc: "Built on Laravel full stack, with APIs, role management, and modular structure." },
                                    { icon: <Zap className="size-7" />, title: "Training & Deployment", desc: "We onboard your staff, integrate with Tally or ERP, and provide long-term support." }
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
                                It's not &quot;plug &amp; play&quot; — <span className="font-bold text-[#00477b]">it's &quot;plan &amp; perfect.&quot;</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Why Custom Warehouse Software Wins (Full Width Edge-to-Edge Split Layout) */}
                <section className="pt-24 pb-12 relative z-10">
                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[540px]">
                                
                                {/* Left Content: Text & Points */}
                                <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center max-w-2xl lg:max-w-none lg:ml-auto">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6 w-fit">
                                        Why Custom Warehouse Software Wins
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                        Because No Ready-Made Tool Can Match Your Real-World Operations.
                                    </h2>
                                    
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Custom workflows built around your team, not generic templates.",
                                            "Scalable architecture — start small, expand later.",
                                            "Easy integration with existing accounting tools (Tally, Excel, Zoho, SAP B1).",
                                            "Role-based access and audit trails for complete accountability.",
                                            "Localized support — Indian developers, Indian warehouse realities."
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
                                                Book a Free Process Audit
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Content: Edge-to-Edge Image with No Radius and No Padding */}
                                <div className="relative w-full h-[400px] lg:h-full min-h-[460px] overflow-hidden">
                                    <img 
                                        src="/assets/warehourse.png" 
                                        alt="Warehouse Operations" 
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
                            We Use Enterprise Technology — Sized For SME Scale.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Modern, resilient, and battle-tested frameworks built to handle high-frequency logistics data.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                                {[
                                    {
                                        icon: <Server className="size-6" />,
                                        area: "Backend Engine",
                                        desc: "High-concurrency data processing, custom business logic, and transactional integrity.",
                                        stack: ["Laravel", "Node.js", "Python", "REST APIs", "PostgreSQL"]
                                    },
                                    {
                                        icon: <Layout className="size-6" />,
                                        area: "Frontend & UI",
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for floor staff & managers.",
                                        stack: ["React.js", "Next.js", "Vue.js", "TypeScript", "TailwindCSS"]
                                    },
                                    {
                                        icon: <Smartphone className="size-6" />,
                                        area: "Mobile & Tablets",
                                        desc: "Offline-first shop floor mobile apps and rugged handheld barcode workstations.",
                                        stack: ["React Native", "Android Tablets", "Offline Sync", "PWA Support"]
                                    },
                                    {
                                        icon: <Cpu className="size-6" />,
                                        area: "IoT & Integrations",
                                        desc: "Real-time barcode scanners, weighbridge telemetry, and bi-directional ERP sync.",
                                        stack: ["PLC Sensors", "SAP / Tally Bridge", "IoT Gateways", "Webhooks"]
                                    },
                                    {
                                        icon: <Cloud className="size-6" />,
                                        area: "Cloud Infrastructure",
                                        desc: "99.9% uptime SLA with automatic failover, containerization, and scaling.",
                                        stack: ["AWS", "DigitalOcean", "Docker", "CI/CD Pipelines", "Redis"]
                                    },
                                    {
                                        icon: <ShieldCheck className="size-6" />,
                                        area: "Security & Governance",
                                        desc: "Bank-grade data encryption, granular role permissions, and immutable audit logs.",
                                        stack: ["Role-Based ACL", "SSL 256-Bit", "Audit Trails", "Automated Backups"]
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
                            We Fit Into Your Process — And Your Budget.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
                                {[
                                    {
                                        icon: <Settings className="size-7" />,
                                        title: "Fixed-Scope Project",
                                        desc: "Have a clear idea? We'll build exactly what you define — with timeline, milestones, and cost clarity.",
                                        btn: "Get Proposal"
                                    },
                                    {
                                        icon: <Handshake className="size-7" />,
                                        title: "Long-Term Development Partner",
                                        desc: "Need an ongoing partner? Hire our dedicated Laravel team to evolve your system continuously.",
                                        btn: "Discuss Partnership"
                                    },
                                    {
                                        icon: <Compass className="size-7" />,
                                        title: "Process + Tech Consulting",
                                        desc: "Unsure where to start? We'll map your warehouse flow and design a system blueprint before you invest.",
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
                            We Bring Enterprise Thinking To SME Warehouses.
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
                                {[
                                    "10+ years in building systems for manufacturing & logistics.",
                                    "Deep domain understanding of SME-scale warehouse ops.",
                                    "Strong Laravel expertise for scalable, maintainable systems.",
                                    "Transparent pricing and agile delivery.",
                                    "Full training, support, and future enhancements built-in."
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
                            DIGITIZE YOUR WAREHOUSE
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            We Bring Enterprise Thinking To SME Warehouses
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop losing money to lost stock and manual entry. Build a custom warehouse management system with Gnosys Digital.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button asChild className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                <Link href="/free-digital-consultation">
                                    Talk To A Supply Chain Expert
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
