import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    Truck, FileText, Clock, Network, Settings, 
    CheckCircle2, FileCode, Users, CheckCircle, 
    Search, TabletSmartphone, Code, Zap
} from 'lucide-react';
import React from 'react';

export default function SupplyChain() {
    return (
        <MainLayout>
            <Head title="Supply Chain Logistics Software Development" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-[#022c54]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#022c54]/75 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#011428] via-[#022c54] to-[#011428]"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay blur-[2px]"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <p className="text-sm sm:text-base font-bold text-blue-300 uppercase tracking-widest mb-6">
                        Your Supply Chain Is Unique. Your Software Should Be Too.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        You Don't Need Another Off-The-Shelf ERP.<br/>You Need Software That Fits The Way Your Business Actually Runs.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        From custom dispatch logic to specialized packing rules and dealer portals. We build custom Supply Chain & Logistics software that maps to your exact physical workflows—not someone else's.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Book a Strategy Call
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Explore Solutions
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. The Reality of SME Supply Chains */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        The Reality of SME Supply Chains
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16 max-w-3xl mx-auto leading-tight">
                        No Two Manufacturers Are The Same — So Why Use The Same Software?
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <Truck className="size-6 text-[#0369a1]" />, title: "Different Dispatch Models", desc: "Your routing is complicated. Standard software can't handle it." },
                            { icon: <FileText className="size-6 text-[#0369a1]" />, title: "Manual LR & Paper Processes", desc: "Proof of delivery relies on physical documents." },
                            { icon: <Clock className="size-6 text-[#0369a1]" />, title: "No Real-Time Tracking", desc: "Sales is always calling to check on dispatches." },
                            { icon: <Network className="size-6 text-[#0369a1]" />, title: "Disconnected Tools", desc: "Tally, WhatsApp, and Excel never talk in real-time." },
                            { icon: <Settings className="size-6 text-[#0369a1]" />, title: "ERP Overkill", desc: "Rigid, confusing, and forces you to change how you work." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-8 rounded-sm shadow-sm flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-sm font-bold text-[#022c54] mb-2">{item.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                        You don't need a tool with 1,000 features. You need a tool that does your 10 features perfectly.
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
                        From Warehouse To Dealer — We Design Your Digital Backbone.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-12 max-w-3xl mx-auto">
                        We design and develop custom supply chain solutions tailored to your unique dispatch logic, dealer portals, and tracking workflows.
                    </p>
                    
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full text-left border-collapse bg-white shadow-sm border border-[#e2e8f0] rounded-sm overflow-hidden">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3">Function</th>
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Custom Solutions We Can Build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { f: "Dispatch Management", c: "Custom logic for routing, grouping, and vehicle tracking" },
                                    { f: "Transport Integration", c: "API integration with transport services and portals" },
                                    { f: "Multi-Branch Sync", c: "Stock consolidation across multiple locations" },
                                    { f: "Dealer / Distributor Portal", c: "Order portals, block orders, invoice tracking" },
                                    { f: "Inventory Sync", c: "Real-time sync with dispatch and warehouse" },
                                    { f: "LR / E-way Bills", c: "Auto-generation based on your invoice & dispatch rules" },
                                    { f: "ERP / Tally Integration", c: "Seamless flow to accounts and ledgers" },
                                    { f: "Data Analytics", c: "Delivery tracking, cost analysis, margin reports" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.f}</td>
                                        <td className="py-4 px-6 text-[14px] text-zinc-700 font-medium">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-12 text-sm font-bold shadow-md">
                        Discuss Your Requirements
                    </Button>
                </div>
            </section>

            {/* 4. How We Work */}
            <section className="py-24 bg-white text-center border-b border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        How We Work
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        From Process Mapping To Deployment — End-To-End Custom Development.
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Search className="size-6 text-white" />, title: "Discovery & Process Mapping", desc: "We study your physical supply chain to exactly map out your dispatch logic and volume." },
                            { icon: <TabletSmartphone className="size-6 text-white" />, title: "Blueprint & UI Design", desc: "We design wireframes, approve logic, and demonstrate how your system will look." },
                            { icon: <Code className="size-6 text-white" />, title: "Development & Integration", desc: "We build custom backends, API integrations, and robust web portals." },
                            { icon: <Zap className="size-6 text-white" />, title: "Training & Go-Live", desc: "We deploy the code, train your staff, and provide full tech support." }
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
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto">
                        Built agile. Delivered iteratively. Designed for your specific workflow.
                    </p>
                </div>
            </section>

            {/* 5. Why Custom Development Wins for SMEs */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4 text-center lg:text-left">
                        Why Custom Development Wins for SMEs
                    </p>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-[#022c54] mb-8 leading-tight">
                                Because One-Size Software Never Fits Indian Manufacturing.
                            </h2>
                            
                            <ul className="space-y-5 mb-10">
                                {[
                                    "Maps exactly to existing processes—no disruption to operations.",
                                    "Custom vendor and dealer integration tailored to your partners.",
                                    "Built-in logic for multi-stops, route clubs, or Tally-based ledgers.",
                                    "No per-user licensing fees—own your code and scale indefinitely.",
                                    "Easy-to-use screens for your dispatch boys and drivers."
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
                                Schedule a Consultation
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            {/* SVG Graphic representation of the computer screen from the design */}
                            <div className="w-full bg-[#0369a1] rounded-sm overflow-hidden shadow-xl aspect-video relative flex items-center justify-center p-8">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <svg viewBox="0 0 400 300" className="w-full h-full max-w-sm relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="50" y="50" width="300" height="200" rx="8" fill="#e2e8f0" stroke="white" strokeWidth="4"/>
                                    <rect x="60" y="60" width="280" height="180" rx="4" fill="#0ea5e9"/>
                                    <path d="M160 250 L240 250 L250 280 L150 280 Z" fill="#cbd5e1" stroke="white" strokeWidth="2"/>
                                    <rect x="120" y="280" width="160" height="10" rx="4" fill="#94a3b8"/>
                                    
                                    {/* Bubbles */}
                                    <circle cx="120" cy="110" r="30" fill="white" opacity="0.9"/>
                                    <path d="M110 100 L130 100 L130 115 L120 115 L115 125 L115 115 L110 115 Z" fill="#0ea5e9"/>
                                    
                                    <circle cx="120" cy="190" r="30" fill="white" opacity="0.9"/>
                                    <path d="M110 180 L130 180 L130 195 L120 195 L115 205 L115 195 L110 195 Z" fill="#0ea5e9"/>
                                    
                                    <circle cx="280" cy="110" r="40" fill="white" opacity="0.9"/>
                                    <circle cx="280" cy="100" r="5" fill="#0ea5e9"/>
                                    <circle cx="265" cy="120" r="5" fill="#0ea5e9"/>
                                    <circle cx="295" cy="120" r="5" fill="#0ea5e9"/>
                                    <path d="M280 105 L265 115 M280 105 L295 115 M265 120 L295 120" stroke="#0ea5e9" strokeWidth="2"/>
                                    
                                    <circle cx="280" cy="200" r="35" fill="white" opacity="0.9"/>
                                    <rect x="260" y="185" width="40" height="10" rx="2" fill="#0ea5e9"/>
                                    <rect x="260" y="200" width="40" height="10" rx="2" fill="#0ea5e9"/>
                                    <rect x="260" y="215" width="40" height="10" rx="2" fill="#0ea5e9"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Technology & Capabilities (Stack Table) */}
            <section className="py-24 bg-white border-y border-[#e2e8f0] text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Technology & Capabilities
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        Modern Tech, Tailored To Your Business.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-12 max-w-3xl mx-auto">
                        We leverage modern tech stacks to build supply chain solutions that run securely, scale seamlessly, and are easy to use for all levels of your staff—from dispatch boys to management.
                    </p>
                    
                    <div className="overflow-hidden shadow-sm border border-[#e2e8f0] rounded-sm">
                        <table className="w-full text-left border-collapse bg-[#f8fafc]">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-1/3">Area</th>
                                    <th className="py-5 px-8 font-bold text-sm uppercase tracking-wider w-2/3 border-l border-[#02498b]">Tech Stack</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { area: "Backend", tech: "Laravel (PHP) & Node.js for robust APIs" },
                                    { area: "Frontend", tech: "React, Vue, HTML/CSS" },
                                    { area: "Mobile Apps", tech: "Progressive Web Apps (PWAs) & React Native" },
                                    { area: "Integrations", tech: "Tally Prime APIs, WhatsApp API, SMS APIs" },
                                    { area: "Hosting", tech: "AWS & DigitalOcean for fast performance" },
                                    { area: "Security", tech: "Role-based access controls, data encryption" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white transition-colors bg-white">
                                        <td className="py-4 px-8 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.area}</td>
                                        <td className="py-4 px-8 text-[14px] text-zinc-700 font-medium">{row.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <p className="mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Your Custom Supply Chain Platform — From Architecture to Execution
                    </p>
                </div>
            </section>

            {/* 7. Engagement Models */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Engagement Models
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        Flexible Engagement. Real Partnership.
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: <FileCode className="size-6 text-[#0369a1]" />, 
                                title: "Fixed-Scope Project", 
                                desc: "We map out your requirements, agree on features, and deliver for a set price."
                            },
                            { 
                                icon: <Users className="size-6 text-[#0369a1]" />, 
                                title: "Dedicated Development Partner", 
                                desc: "A dedicated engineering team to iteratively develop, scale, and maintain your custom platform."
                            },
                            { 
                                icon: <CheckCircle className="size-6 text-[#0369a1]" />, 
                                title: "Process & Tech Consulting", 
                                desc: "We audit your dispatch and inventory flow, mapping out bottlenecks and a tech strategy."
                            }
                        ].map((model, i) => (
                            <div key={i} className="bg-white border border-[#bae6fd] p-10 rounded-sm shadow-sm flex flex-col items-center hover:border-[#38bdf8] transition-colors group">
                                <div className="mb-6 bg-[#f0f9ff] p-4 rounded-full border border-[#bae6fd] group-hover:bg-[#e0f2fe] transition-colors">{model.icon}</div>
                                <h3 className="text-lg font-bold text-[#022c54] mb-4">{model.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium flex-grow">{model.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Why Gnosys Digital */}
            <section className="py-24 bg-white text-center border-t border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why Gnosys Digital
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        We Bring Enterprise Thinking To SME Manufacturing.
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            "10+ years of experience mapping physical logistics to digital solutions.",
                            "In-house Laravel & React development teams.",
                            "Deep understanding of Indian supply chain challenges.",
                            "Strong focus on UX, ensuring adoption from dispatch boys to MDs.",
                            "Transparent pricing, robust architecture, and full IP handover."
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f8fafc] border border-[#e2e8f0] p-6 rounded-sm shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] flex items-center justify-center min-h-[140px]">
                                <p className="text-sm font-bold text-[#0369a1] leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-10 h-14 text-base font-bold shadow-md">
                        Talk To Our Tech Expert
                    </Button>
                </div>
            </section>

        </MainLayout>
    );
}
