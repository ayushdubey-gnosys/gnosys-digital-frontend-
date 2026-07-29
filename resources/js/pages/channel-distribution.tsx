import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Users, Boxes, CircleDollarSign, AlertCircle, FileSpreadsheet, 
    Store, Truck, Warehouse, Factory, Package, Cog, Code, 
    Smartphone, Zap, CheckCircle2, FileCode, CheckCircle, ArrowRight, Search
} from 'lucide-react';
import React from 'react';

export default function ChannelDistribution() {
    return (
        <MainLayout>
            <Head title="Channel Distribution Management Software Development" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-[#022c54]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#022c54]/85 mix-blend-multiply z-10"></div>
                    {/* Simulated meeting/collaboration background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#011428] via-[#022c54] to-[#011428]"></div>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/connected.png')]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <p className="text-sm sm:text-base font-bold text-blue-300 uppercase tracking-widest mb-6">
                        Every Manufacturer Has A Different Sales Network. We Build Systems That Fit Yours.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        Your Dealers, Distributors, And Sales Team Deserve A System That Works Your Way.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        Specialized Web Applications, Mobile Apps, And CRM Portals. We map your exact business logic to a custom channel distribution management system. Stop adjusting your process to standard tools. Fit the tool to your process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Talk To An Expert
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore Features
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why Off-the-Shelf CRMs Don't Work */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Off-The-Shelf CRMs Don't Work for Manufacturers
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16 max-w-3xl mx-auto leading-tight">
                        Every Manufacturer's Distribution Model Is Different And That's Why Standard CRMs Fail.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <Users className="size-6 text-[#0369a1]" />, title: "Extensive Dealer Hierarchies", desc: "Standard CRMs struggle with 4-tier routing channels" },
                            { icon: <Boxes className="size-6 text-[#0369a1]" />, title: "Orders vs Allocation", desc: "Stock allocations vs straight approvals" },
                            { icon: <CircleDollarSign className="size-6 text-[#0369a1]" />, title: "Delayed Financials", desc: "No credit-limit holds and accounting visibility" },
                            { icon: <FileSpreadsheet className="size-6 text-[#0369a1]" />, title: "Commission Confusion", desc: "Complex tier-based and product-level commissions" },
                            { icon: <AlertCircle className="size-6 text-[#0369a1]" />, title: "No Territory Insights", desc: "Sales reps can't define pin codes, product or dealer" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-8 rounded-sm shadow-sm flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-sm font-bold text-[#022c54] mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                        You don't need a CRM. You need a custom channel distribution platform built around your supply chain matrix.
                    </p>
                </div>
            </section>

            {/* 3. What We Build For You (Features Table) */}
            <section className="py-24 bg-[#f8fafc] border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        What We Build For You
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        From Order To Payment. Complete Visibility. Built Around Your Channel.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-12 max-w-3xl mx-auto">
                        We design, develop, and implement custom channel software and portals. Give your dealers an app to place orders and give your management a dashboard to track inventory, commissions, and targets in real-time.
                    </p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white shadow-sm border border-[#e2e8f0] rounded-sm overflow-hidden">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3">Function</th>
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Custom Built For Your Complexities</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { f: "Dealer Management", c: "Multi-tier onboarding workflows, KYC & document verification" },
                                    { f: "Order Management", c: "Stock allocations, multi-tier approvals, minimum order limits" },
                                    { f: "Credit Limits", c: "Auto-blocking of orders crossing credit & outstanding limits" },
                                    { f: "Sales Target Tracking", c: "Custom targets defined by territory, dealer, or sales executive" },
                                    { f: "Field Force Tracking", c: "Geo-fenced attendance and optimized visit routes" },
                                    { f: "Returns & Replacements", c: "Approval-based workflows for aging stock or damages" },
                                    { f: "Claims & Margins", c: "Commission logic based on dealer tier or product groups" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.f}</td>
                                        <td className="py-4 px-6 text-[14px] text-zinc-700 font-medium">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-12 text-sm font-bold shadow-md">
                            Discuss Your Requirements
                        </Button>
                    </div>
                </div>
            </section>

            {/* 4. Built for Your Network (Hexagon Flow Diagram) */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Built for Your Network
                    </h2>
                    
                    {/* CSS Hexagon Flow Diagram */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        
                        {/* Dealer */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white mb-4 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Store className="size-10" />
                            </div>
                            <h3 className="font-bold text-[#022c54] text-sm">Dealer</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px]">Places order with primary distributor</p>
                        </div>
                        
                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Distributor */}
                        <div className="flex flex-col items-center md:-mt-24">
                            <h3 className="font-bold text-[#022c54] text-sm mb-1 text-center">Distributor</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px] mb-4">Approves order and checks warehouse stock</p>
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Truck className="size-10" />
                            </div>
                        </div>

                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Warehouse */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white mb-4 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Warehouse className="size-10" />
                            </div>
                            <h3 className="font-bold text-[#022c54] text-sm">Warehouse</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px]">Packs and manages local inventory</p>
                        </div>

                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Factory */}
                        <div className="flex flex-col items-center md:-mt-24">
                            <h3 className="font-bold text-[#022c54] text-sm mb-1 text-center">Factory</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px] mb-4">Pushes inventory to regional warehouses</p>
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Factory className="size-10" />
                            </div>
                        </div>

                        <div className="hidden md:flex text-[#cbd5e1]">
                            <ArrowRight className="size-6" />
                        </div>

                        {/* Depot */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-[110px] bg-[#02498b] flex items-center justify-center text-white mb-4 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] hover:bg-[#0369a1] transition-colors">
                                <Package className="size-10" />
                            </div>
                            <h3 className="font-bold text-[#022c54] text-sm">Depot</h3>
                            <p className="text-xs text-zinc-500 font-medium text-center max-w-[120px]">Tracks sales reports and performance</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. Our Development Process */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Our Development Process
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        We Design Around Your Business — Not Around Software.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-16 max-w-3xl mx-auto">
                        We specialize in custom web apps, mobile apps, and backend dashboards that mirror exactly how your supply chain currently functions.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Search className="size-6 text-white" />, title: "Process Discovery & Mapping", desc: "We map your complete dealer network structure, tier definitions, and commission logic before writing a single line of code." },
                            { icon: <Smartphone className="size-6 text-white" />, title: "UI/UX & Solution Design", desc: "We design intuitive Web interfaces and Mobile apps that your field force and dealers will actually enjoy using." },
                            { icon: <Code className="size-6 text-white" />, title: "Development & Integration", desc: "Built with robust backend architecture (Laravel/Node) and natively integrated with your existing ERP/Tally." },
                            { icon: <Zap className="size-6 text-white" />, title: "Go-Live & Support", desc: "We ensure a smooth rollout across thousands of dealers and provide ongoing server maintenance and feature upgrades." }
                        ].map((step, i) => (
                            <div key={i} className="bg-[#013565] rounded-sm p-8 shadow-md text-left text-white border-t-4 border-[#38bdf8] flex flex-col">
                                <div className="mb-6 bg-white/10 w-fit p-3 rounded-sm border border-white/20">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-4 leading-tight">{step.title}</h3>
                                <p className="text-sm text-blue-50/90 font-medium leading-relaxed mt-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Custom Process Software Outperforms ERPs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                                Why Custom Process Software Outperforms ERPs
                            </p>
                            <h2 className="text-3xl font-bold text-[#022c54] mb-8 leading-tight">
                                Because Your Channel Isn't Generic — It's Your Biggest Competitive Edge.
                            </h2>
                            
                            <ul className="space-y-5 mb-10">
                                {[
                                    "Designed for exactly your distributor network, not a generic template.",
                                    "User-friendly apps ensure maximum adoption by field force and dealers.",
                                    "Seamless integration with your existing ERPs/Tally.",
                                    "Full ownership of the software and data without recurring per-user licensing fees."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="bg-[#0284c7] rounded-sm p-1 mt-0.5 shrink-0">
                                            <CheckCircle2 className="size-4 text-white" />
                                        </div>
                                        <span className="text-zinc-700 font-bold text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-8 h-12 text-sm font-bold shadow-md">
                                Schedule a Discovery Call
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="border-[8px] border-[#f0f9ff] rounded-sm overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Business team analyzing data" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Technology & Capabilities (Stack Table) */}
            <section className="py-24 bg-[#f8fafc] border-y border-[#e2e8f0] text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Technology & Capabilities
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        Modern Technology, Flexible Architecture, Built To Last.
                    </h2>
                    
                    <div className="overflow-hidden shadow-sm border border-[#e2e8f0] rounded-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-1/3">Area</th>
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Tech Stack</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { area: "Backend", tech: "Laravel, Node.js, Python (Django)" },
                                    { area: "Frontend", tech: "React, Vue, Next.js, HTML/CSS" },
                                    { area: "Mobile Apps", tech: "React Native, Flutter (Android & iOS Apps)" },
                                    { area: "Integrations", tech: "Tally, SAP, ERPNext, APIs (REST/SOAP)" },
                                    { area: "Hosting", tech: "AWS, DigitalOcean, Azure (Cloud Hosting)" },
                                    { area: "Security", tech: "SSL, Data Encryption, Role-Based Access Logs" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-8 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.area}</td>
                                        <td className="py-4 px-8 text-[14px] text-zinc-700 font-medium">{row.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <p className="mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        We build custom software engineered for scalability.
                    </p>
                </div>
            </section>

            {/* 8. Engagement Models */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Engagement Models
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Flexible Engagement, Transparent Outcomes.
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: <FileCode className="size-6 text-[#0369a1]" />, 
                                title: "Fixed-Scope Project", 
                                desc: "For clearly defined web or app development projects with set timelines and costs.",
                                btn: "Get A Proposal"
                            },
                            { 
                                icon: <Users className="size-6 text-[#0369a1]" />, 
                                title: "Dedicated Development Partner", 
                                desc: "An extended engineering team working closely with you to iterate on your product.",
                                btn: "Discuss Partnership"
                            },
                            { 
                                icon: <CheckCircle className="size-6 text-[#0369a1]" />, 
                                title: "Process + Tech Consulting", 
                                desc: "A full audit of your supply chain and distributor process to map out a tech strategy.",
                                btn: "Book Process Review"
                            }
                        ].map((model, i) => (
                            <div key={i} className="bg-[#f0f9ff] border border-[#bae6fd] p-10 rounded-sm shadow-sm flex flex-col items-center hover:border-[#38bdf8] transition-colors group">
                                <div className="mb-6 bg-white p-4 rounded-full border border-[#bae6fd] group-hover:bg-[#e0f2fe] transition-colors">{model.icon}</div>
                                <h3 className="text-lg font-bold text-[#022c54] mb-4">{model.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium mb-8 flex-grow">{model.desc}</p>
                                <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-8 h-11 text-sm font-bold w-full">
                                    {model.btn}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Why Gnosys Digital */}
            <section className="py-24 bg-[#f8fafc] text-center border-t border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Gnosys Digital
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        Your Business. Your Channel.<br/>Your Software — Custom-Built.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            "10+ years of experience in custom B2B software development.",
                            "Deep Domain Knowledge of Indian manufacturing distribution networks.",
                            "Strong Laravel & React development teams in-house.",
                            "UI/UX focus to ensure high adoption rates by dealers.",
                            "Rapid delivery with agile project management sprints."
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] p-6 rounded-sm shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex items-center justify-center min-h-[140px]">
                                <p className="text-sm font-bold text-[#0369a1] leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-14 text-base font-bold shadow-md">
                        Book A Free Consultation
                    </Button>
                </div>
            </section>

        </MainLayout>
    );
}
