import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Truck, FileText, Clock, Network, Settings, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    Search, TabletSmartphone, Code, Zap, ShieldCheck,
    Boxes, Warehouse, BarChart3,
    Server, Layout, Smartphone, Cpu, Cloud, Package
} from 'lucide-react';
import React from 'react';

export default function SupplyChain() {
    return (
        <MainLayout>
            <Head title="Supply Chain Logistics Software Development" />
            
            {/* 1. Hero Section (Clear Background) */}
            <section 
                className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/supply-chain.webp')" }}
            >
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <p className="text-[13px] font-extrabold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
                        YOUR SUPPLY CHAIN IS UNIQUE. YOUR SOFTWARE SHOULD BE TOO.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        You Don't Need Another Off-The-Shelf ERP.<br className="hidden sm:block" /> You Need Software Built For How Your Factory Ships.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        From custom dispatch logic to specialized packing rules and dealer portals. We build custom Supply Chain & Logistics software that maps to your exact physical workflows.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-full px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Book a Strategy Call
                        </Button>
                        <Button className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore Solutions
                        </Button>
                    </div>
                </div>
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. The Reality of SME Supply Chains (Balanced 6 Cards) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            THE REALITY OF SME SUPPLY CHAINS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            No Two Manufacturers Are The Same — So Why Settle For Generic Tools?
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Truck className="size-7" />, title: "Complex Dispatch Models", desc: "Multi-stop routing, partial shipments, and depot transfers that standard ERPs can't handle." },
                                    { icon: <FileText className="size-7" />, title: "Manual LR & Paperwork", desc: "Proof of delivery relies on physical paper copies that get misplaced and delay billing." },
                                    { icon: <Clock className="size-7" />, title: "No Real-Time Tracking", desc: "Sales teams and dealers constantly call the dispatch room just to check consignment status." },
                                    { icon: <Network className="size-7" />, title: "Disconnected Tools", desc: "Tally, WhatsApp groups, spreadsheets, and transporter portals never talk to each other." },
                                    { icon: <Settings className="size-7" />, title: "ERP Overkill", desc: "Rigid commercial ERPs force your staff into 15 unnecessary clicks for a single gate pass." },
                                    { icon: <ShieldCheck className="size-7" />, title: "In-Transit Leakage", desc: "No automated reconciliation between factory gate dispatches and actual dealer receipts." }
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
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Balanced 8-Card Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            From Warehouse To Dealer — Your Digital Backbone
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            Custom modules tailored to your unique dispatch logic, dealer portals, and real-time tracking workflows.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <Truck className="size-6" />, f: "Dispatch & Route Planning", c: "Custom logic for multi-drop routing, load grouping, and vehicle assignment." },
                                    { icon: <Network className="size-6" />, f: "Transporter API Integration", c: "Direct API bridges with logistics partners, GPS trackers, and freight portals." },
                                    { icon: <Warehouse className="size-6" />, f: "Multi-Depot Sync", c: "Centralized inventory consolidation across regional hubs and factory depots." },
                                    { icon: <Users className="size-6" />, f: "Dealer & Distributor Portal", c: "Self-service order booking, credit allocation, invoice history, and delivery tracking." },
                                    { icon: <Boxes className="size-6" />, f: "Live Inventory Allocation", c: "Real-time stock reservation connected seamlessly to sales pipelines." },
                                    { icon: <FileText className="size-6" />, f: "Automated LR & E-Way Bills", c: "Instant digital generation of dispatch slips, E-Way bills, and packing lists." },
                                    { icon: <Cpu className="size-6" />, f: "Tally & ERP Synchronization", c: "Two-way automated sync to accounting ledgers, invoices, and payment terms." },
                                    { icon: <BarChart3 className="size-6" />, f: "Supply Chain Analytics", c: "Turnaround time dashboards, route freight cost analysis, and SLA audits." }
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
                            DEVELOPMENT PROCESS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            From Process Mapping To Deployment — End-To-End Development
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto">
                            Built agile. Delivered iteratively. Designed specifically around your unique supply chain.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Discovery & Process Mapping", desc: "We study your physical supply chain to map out dispatch logic, transporter SLAs, and volume." },
                                    { icon: <TabletSmartphone className="size-7" />, title: "Blueprint & UI Design", desc: "We design high-speed operator screens and interactive portals for dealers and drivers." },
                                    { icon: <Code className="size-7" />, title: "Development & Integration", desc: "Robust backend logic, direct Tally/SAP sync, and scalable API bridges with carriers." },
                                    { icon: <Zap className="size-7" />, title: "Training & Go-Live", desc: "Hands-on floor deployment, driver onboarding, and continuous enterprise maintenance." }
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
                                        WHY CUSTOM LOGISTICS WINS
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                                        Because One-Size Software Never Fits Indian Manufacturing.
                                    </h2>
                                    <p className="text-zinc-600 font-medium text-sm sm:text-base mb-8 leading-relaxed">
                                        Indian transport and dealer operations have unique realities—unorganized fleets, multi-stop drop rules, and credit holds. Custom software adapts to you, not the other way around.
                                    </p>
                                    
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Maps exactly to your existing dispatch flows with zero operational friction.",
                                            "Custom vendor, dealer, and transporter portals with granular permissions.",
                                            "Automated generation of E-Way bills, LRs, and multi-location Tally sync.",
                                            "100% intellectual property ownership — zero recurring user license fees."
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
                                        <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-sm font-bold shadow-lg shadow-blue-900/15 transition-all">
                                            Schedule a Consultation
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
                            TECH STACK & ARCHITECTURE
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Enterprise Tech, Applied To SME Logistics
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
                                        desc: "Ultra-fast, touch-responsive interfaces designed specifically for plant operators & managers.",
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
                                        desc: "Real-time barcode scanners, GPS vehicle telemetry, and bi-directional ERP sync.",
                                        stack: ["GPS Telemetry", "SAP / Tally Bridge", "IoT Gateways", "Webhooks"]
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
                            ENGAGEMENT MODELS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Transparent Engagement, Flexible Scope
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: <FileCode className="size-7" />, 
                                        title: "Fixed-Scope Project", 
                                        desc: "Defined scope and timelines. Ideal for clearly outlined custom supply chain builds.",
                                        btn: "Get A Proposal"
                                    },
                                    { 
                                        icon: <Users className="size-7" />, 
                                        title: "Dedicated Tech Partner", 
                                        desc: "An extended engineering team that grows and scales your logistics platform alongside your business.",
                                        btn: "Discuss Partnership"
                                    },
                                    { 
                                        icon: <CheckCircle className="size-7" />, 
                                        title: "Process & Tech Consulting", 
                                        desc: "We audit your dispatch and inventory flow, mapping out bottlenecks and a phased tech strategy.",
                                        btn: "Book Consultation"
                                    }
                                ].map((model, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/85 to-white/45 backdrop-blur-md border border-white p-9 rounded-[2.25rem] shadow-sm flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden">
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            {model.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-3">{model.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium mb-8 leading-relaxed flex-grow">{model.desc}</p>
                                        <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-bold w-full shadow-md transition-all mt-auto">
                                            {model.btn}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Bottom CTA */}
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
                            <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-10 h-14 text-base font-bold shadow-md transition-all w-full sm:w-auto">
                                Talk To Our Tech Expert
                            </Button>
                            <Button className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-14 text-base font-semibold shadow-sm transition-all w-full sm:w-auto">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
