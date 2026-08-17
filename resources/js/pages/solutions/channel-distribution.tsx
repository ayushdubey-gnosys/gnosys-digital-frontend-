import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Users, Boxes, CircleDollarSign, AlertCircle, FileSpreadsheet,
    Store, Truck, Warehouse, Factory, Package, Cog, Code,
    Smartphone, Zap, CheckCircle2, FileCode, CheckCircle, ArrowRight, Search,
    Globe, Activity, ShieldCheck, TrendingUp, BarChart3, MapPin, RotateCcw,
    BadgePercent, UserCheck, ShoppingCart
} from 'lucide-react';
import React from 'react';

export default function ChannelDistribution() {
    return (
        <MainLayout>
            <Head title="Channel Distribution Management Software Development" />

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh]"
                style={{
                    backgroundImage: "url('/assets/channel-distribution.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-[#022c54]/20 z-0"></div>

                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <p className="text-[13px] font-extrabold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
                        EVERY MANUFACTURER HAS A DIFFERENT SALES NETWORK. WE BUILD SYSTEMS THAT FIT YOURS.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Your Dealers, Distributors, And Sales Team Deserve A System That Works Your Way.
                    </h1>

                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-normal mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Specialized Web Applications, Mobile Apps, And CRM Portals. We map your exact business logic to a custom channel distribution management system. Stop adjusting your process to standard tools. Fit the tool to your process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-zinc-900 hover:bg-slate-100 rounded-full px-8 h-12 text-sm font-semibold shadow-xl transition-all w-full sm:w-auto">
                            Talk To An Expert
                        </Button>
                        <Button className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full px-8 h-12 text-sm font-semibold shadow-xl transition-all w-full sm:w-auto">
                            Explore Features
                        </Button>
                    </div>
                </div>
            </section>

            <div className="relative z-10 w-full bg-transparent">
                {/* 2. Why Off-the-Shelf CRMs Don't Work */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY STANDARD CRMs FAIL
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] max-w-3xl mx-auto leading-tight">
                            Every Manufacturer's Distribution Model Is Different
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Users className="size-7" />, title: "Extensive Dealer Hierarchies", desc: "Standard CRMs struggle with 4-tier routing channels" },
                                    { icon: <Boxes className="size-7" />, title: "Orders vs Allocation", desc: "Stock allocations vs straight approvals" },
                                    { icon: <CircleDollarSign className="size-7" />, title: "Delayed Financials", desc: "No credit-limit holds and accounting visibility" },
                                    { icon: <FileSpreadsheet className="size-7" />, title: "Commission Confusion", desc: "Complex tier-based and product-level commissions" },
                                    { icon: <AlertCircle className="size-7" />, title: "No Territory Insights", desc: "Sales reps can't define pin codes, product or dealer" },
                                    { icon: <CheckCircle2 className="size-7" />, title: "Generic Workflows", desc: "Forcing your process to fit software limitations" }
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

                {/* 3. What We Build For You (Balanced 4-Column Grid) */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            From Order To Payment. Complete Visibility.
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto leading-relaxed">
                            We design, develop, and implement custom channel software and portals. Give your dealers an app to place orders and give your management a dashboard to track inventory, commissions, and targets in real-time.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                                {[
                                    { icon: <UserCheck className="size-6" />, f: "Dealer Management", c: "Multi-tier onboarding workflows, KYC & document verification." },
                                    { icon: <ShoppingCart className="size-6" />, f: "Order Management", c: "Stock allocations, multi-tier approvals & minimum order limits." },
                                    { icon: <CircleDollarSign className="size-6" />, f: "Credit Limit Control", c: "Auto-blocking of orders crossing credit & outstanding overdue limits." },
                                    { icon: <Zap className="size-6" />, f: "Sales Target Tracking", c: "Custom targets defined by territory, dealer, or sales executive." },
                                    { icon: <MapPin className="size-6" />, f: "Field Force Tracking", c: "Geo-fenced attendance, live tracking & optimized visit routes." },
                                    { icon: <RotateCcw className="size-6" />, f: "Returns & Replacements", c: "Approval-based workflows for aging stock, transit damages & credit notes." },
                                    { icon: <BadgePercent className="size-6" />, f: "Claims & Margins", c: "Dynamic commission logic based on dealer tier or product groups." },
                                    { icon: <TrendingUp className="size-6" />, f: "Real-Time Reports & BI", c: "Executive dashboards for secondary sales, aging stock & territory insights." }
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

                {/* 4. Built for Your Network (Stylish Enterprise Pipeline) */}
                <section className="pt-24 pb-16 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            NETWORK FLOW
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Built for Your Connected Network
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
                            Seamless data flow connecting every tier of your supply chain in real-time.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[92rem]">
                            
                            {/* Workflow Grid with Connections */}
                            <div className="relative">
                                {/* Background connecting track line on desktop */}
                                <div className="hidden lg:block absolute top-[6.5rem] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-200 via-[#00477b]/30 to-blue-200 z-0"></div>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 items-stretch relative z-10">
                                    {[
                                        {
                                            step: "01",
                                            tag: "Order Entry",
                                            icon: <Store className="size-7" />,
                                            title: "Dealer",
                                            desc: "Places orders directly via dedicated mobile app or dealer portal with instant pricing."
                                        },
                                        {
                                            step: "02",
                                            tag: "Allocation",
                                            icon: <Truck className="size-7" />,
                                            title: "Distributor",
                                            desc: "Validates credit limits, approves orders & locks stock allocation automatically."
                                        },
                                        {
                                            step: "03",
                                            tag: "Fulfillment",
                                            icon: <Warehouse className="size-7" />,
                                            title: "Warehouse",
                                            desc: "Packs batch-coded inventory, auto-generates E-Way bills & schedules dispatch."
                                        },
                                        {
                                            step: "04",
                                            tag: "Production",
                                            icon: <Factory className="size-7" />,
                                            title: "Factory",
                                            desc: "Triggered on reorder levels to push manufactured stock to regional depots."
                                        },
                                        {
                                            step: "05",
                                            tag: "Intelligence",
                                            icon: <Package className="size-7" />,
                                            title: "Depot / HQ",
                                            desc: "Real-time visibility into secondary sales, dealer targets, and commission analytics."
                                        }
                                    ].map((node, i) => (
                                        <div key={i} className="flex flex-col h-full group">
                                            <div className="bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-xl border border-white rounded-[2.25rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,123,0.12)] hover:-translate-y-2.5 transition-all duration-500 flex flex-col items-center text-center h-full relative overflow-hidden">
                                                
                                                {/* Top Glow on Hover */}
                                                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#00477b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2.25rem]"></div>
                                                
                                                {/* Step Number Badge */}
                                                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-inner">
                                                    <span className="size-1.5 rounded-full bg-[#00477b]"></span>
                                                    <span className="text-[11px] font-black text-[#00477b] tracking-wider uppercase">Step {node.step}</span>
                                                </div>

                                                {/* Soft Light Icon Container */}
                                                <div className="size-18 mb-5 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                                    {node.icon}
                                                </div>

                                                {/* Node Tag */}
                                                <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1.5">
                                                    {node.tag}
                                                </span>

                                                {/* Node Title */}
                                                <h3 className="font-bold text-[#00477b] text-xl mb-3 tracking-tight">
                                                    {node.title}
                                                </h3>

                                                {/* Description */}
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

                {/* 5. Our Development Process */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            DEVELOPMENT PROCESS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            We Design Around Your Business
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-3xl mx-auto">
                            We specialize in custom web apps, mobile apps, and backend dashboards that mirror exactly how your supply chain currently functions.
                        </p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { icon: <Search className="size-7" />, title: "Process Discovery", desc: "We map your complete dealer network structure, tier definitions, and commission logic." },
                                    { icon: <Smartphone className="size-7" />, title: "UI/UX Design", desc: "We design intuitive Web interfaces and Mobile apps for your field force and dealers." },
                                    { icon: <Code className="size-7" />, title: "Development", desc: "Built with robust backend architecture and natively integrated with your ERP/Tally." },
                                    { icon: <Zap className="size-7" />, title: "Go-Live & Support", desc: "We ensure a smooth rollout across thousands of dealers and provide ongoing support." }
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

                {/* 6. Why Businesses Choose Gnosys Digital */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Businesses Choose Gnosys Digital
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: <Users className="size-7" />, title: "100% In-House Team", desc: "Designers, developers, and marketers under one roof." },
                                    { icon: <Search className="size-7" />, title: "Quality Over Volume", desc: "We never outsource. Pure global delivery standards." },
                                    { icon: <Zap className="size-7" />, title: "Speed & Precision", desc: "Our agile process ensures 30-70% faster turnarounds." },
                                    { icon: <Activity className="size-7" />, title: "Performance First", desc: "Hosting and codebase is tested for maximum scale & speed." },
                                    { icon: <Globe className="size-7" />, title: "Global Expertise", desc: "Delivering projects across 3 continents." },
                                    { icon: <ShieldCheck className="size-7" />, title: "Full Ownership", desc: "You get complete control — no hidden fees or lock-ins." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden min-h-[220px]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-2 leading-snug relative z-10">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Ready To Start Something Great? */}
                <section className="py-32 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            Ready To Start Something Great?
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                            Whether you want to launch a store, scale marketing, or streamline your workflows — Gnosys Digital is your in-house growth partner.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-8 h-12 text-sm font-semibold shadow-md transition-all w-full sm:w-auto">
                                Get Started
                            </Button>
                            <Button className="bg-white border border-white/80 text-zinc-900 hover:bg-white/80 rounded-full px-8 h-12 text-sm font-semibold shadow-sm transition-all w-full sm:w-auto">
                                Book a Free Consultation
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </MainLayout>
    );
}
