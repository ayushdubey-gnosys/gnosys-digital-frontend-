import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    Users, Boxes, CircleDollarSign, AlertCircle, FileSpreadsheet,
    Store, Truck, Warehouse, Factory, Package, Cog, Code,
    Smartphone, Zap, CheckCircle2, FileCode, CheckCircle, ArrowRight, Search,
    Globe, Activity, ShieldCheck
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
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY STANDARD CRMs FAIL
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-3xl mx-auto leading-tight">
                            Every Manufacturer's Distribution Model Is Different.
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: <Users />, title: "Extensive Dealer Hierarchies", desc: "Standard CRMs struggle with 4-tier routing channels" },
                                { icon: <Boxes />, title: "Orders vs Allocation", desc: "Stock allocations vs straight approvals" },
                                { icon: <CircleDollarSign />, title: "Delayed Financials", desc: "No credit-limit holds and accounting visibility" },
                                { icon: <FileSpreadsheet />, title: "Commission Confusion", desc: "Complex tier-based and product-level commissions" },
                                { icon: <AlertCircle />, title: "No Territory Insights", desc: "Sales reps can't define pin codes, product or dealer" },
                                { icon: <CheckCircle2 />, title: "Generic Workflows", desc: "Forcing your process to fit software limitations" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className="bg-white/80 rounded-full size-14 flex items-center justify-center mb-6 text-zinc-800">
                                        {React.cloneElement(item.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-3">{item.title}</h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. What We Build For You (Features Table alternative as Cards) */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHAT WE BUILD
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            From Order To Payment. Complete Visibility.
                        </h2>
                        <p className="text-zinc-600 font-normal mb-16 max-w-3xl mx-auto leading-relaxed">
                            We design, develop, and implement custom channel software and portals. Give your dealers an app to place orders and give your management a dashboard to track inventory, commissions, and targets in real-time.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 text-left">
                            {[
                                { f: "Dealer Management", c: "Multi-tier onboarding workflows, KYC & document verification" },
                                { f: "Order Management", c: "Stock allocations, multi-tier approvals, minimum order limits" },
                                { f: "Credit Limits", c: "Auto-blocking of orders crossing credit & outstanding limits" },
                                { f: "Sales Target Tracking", c: "Custom targets defined by territory, dealer, or sales executive" },
                                { f: "Field Force Tracking", c: "Geo-fenced attendance and optimized visit routes" },
                                { f: "Returns & Replacements", c: "Approval-based workflows for aging stock or damages" },
                                { f: "Claims & Margins", c: "Commission logic based on dealer tier or product groups" }
                            ].map((row, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <h3 className="text-base font-semibold text-[#00477b] mb-2">{row.f}</h3>
                                    <p className="text-sm text-zinc-600 font-normal">{row.c}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-8 h-12 text-sm font-semibold shadow-md transition-all">
                                Discuss Your Requirements
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 4. Built for Your Network (Hexagon Flow Diagram) -> modernized */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-[90rem]">
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-20">
                            Built for Your Network
                        </h2>

                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mx-auto">
                            {[
                                { icon: <Store />, title: "Dealer", desc: "Places order with primary distributor" },
                                { icon: <Truck />, title: "Distributor", desc: "Approves order and checks warehouse stock" },
                                { icon: <Warehouse />, title: "Warehouse", desc: "Packs and manages local inventory" },
                                { icon: <Factory />, title: "Factory", desc: "Pushes inventory to regional warehouses" },
                                { icon: <Package />, title: "Depot", desc: "Tracks sales reports and performance" }
                            ].map((node, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex flex-col items-center w-full sm:w-auto">
                                        <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center w-full sm:w-56 min-h-[240px] justify-center hover:-translate-y-2 hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                                            <div className="bg-white/90 rounded-full size-16 flex items-center justify-center mb-5 text-zinc-800 shadow-sm border border-white/80">
                                                {React.cloneElement(node.icon, { className: "size-6" })}
                                            </div>
                                            <h3 className="font-semibold text-[#00477b] text-[17px] mb-3">{node.title}</h3>
                                            <p className="text-[13px] text-zinc-600 font-medium leading-relaxed">{node.desc}</p>
                                        </div>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden lg:flex text-zinc-400 shrink-0">
                                            <ArrowRight className="size-6" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Our Development Process */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            DEVELOPMENT PROCESS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                            We Design Around Your Business
                        </h2>
                        <p className="text-zinc-600 font-normal mb-16 max-w-3xl mx-auto">
                            We specialize in custom web apps, mobile apps, and backend dashboards that mirror exactly how your supply chain currently functions.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: <Search />, title: "Process Discovery", desc: "We map your complete dealer network structure, tier definitions, and commission logic." },
                                { icon: <Smartphone />, title: "UI/UX Design", desc: "We design intuitive Web interfaces and Mobile apps for your field force and dealers." },
                                { icon: <Code />, title: "Development", desc: "Built with robust backend architecture and natively integrated with your ERP/Tally." },
                                { icon: <Zap />, title: "Go-Live & Support", desc: "We ensure a smooth rollout across thousands of dealers and provide ongoing support." }
                            ].map((step, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-8 shadow-sm text-center flex flex-col items-center hover:-translate-y-1 hover:bg-white transition-all duration-300">
                                    <div className="bg-white rounded-full size-14 flex items-center justify-center mb-6 shadow-sm text-zinc-800">
                                        {React.cloneElement(step.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-3 leading-tight">{step.title}</h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Why Businesses Choose Gnosys Digital */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16">
                            Why Businesses Choose Gnosys Digital
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: <Users />, title: "100% In-House Team", desc: "Designers, developers, and marketers under one roof." },
                                { icon: <Search />, title: "Quality Over Volume", desc: "We never outsource. Pure global vendors." },
                                { icon: <Zap />, title: "Speed & Precision", desc: "Our agile process ensures 30-70% turnarounds." },
                                { icon: <Activity />, title: "Performance First", desc: "Hosting and codebase is tested for maximum scale & speed." },
                                { icon: <Globe />, title: "Global Expertise", desc: "Delivering projects across 3 continents." },
                                { icon: <ShieldCheck />, title: "Full Ownership", desc: "You get complete control — no hidden fees or lock-ins." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[220px]">
                                    <div className="bg-white/80 rounded-full size-12 flex items-center justify-center mb-6 text-zinc-800">
                                        {React.cloneElement(item.icon, { className: "size-5" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-3">{item.title}</h3>
                                    <p className="text-sm text-zinc-600 font-normal leading-relaxed max-w-[250px]">{item.desc}</p>
                                </div>
                            ))}
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
                            <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-8 h-12 text-sm font-semibold shadow-md transition-all w-full sm:w-auto">
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
