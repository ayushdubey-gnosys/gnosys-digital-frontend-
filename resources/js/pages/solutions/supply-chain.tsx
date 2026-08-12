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
            <section 
                className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/supply-chain.webp')" }}
            >
                <div className="absolute inset-0 z-0">
                    {/* Gradient overlay: slightly darker at bottom to blend, clearer in middle for image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/30 via-[#022c54]/10 to-[#022c54]/50 z-10"></div>
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <p className="text-sm sm:text-base font-bold text-blue-200 uppercase tracking-widest mb-6 drop-shadow-md">
                        Your Supply Chain Is Unique. Your Software Should Be Too.
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-xl">
                        You Don't Need Another Off-The-Shelf ERP.<br/>You Need Software That Fits The Way Your Business Actually Runs.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                        From custom dispatch logic to specialized packing rules and dealer portals. We build custom Supply Chain & Logistics software that maps to your exact physical workflows—not someone else's.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-zinc-900 hover:bg-slate-100 rounded-full px-10 h-14 text-[16px] font-bold shadow-xl transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
                            Book a Strategy Call
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-[16px] font-bold shadow-xl transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
                            Explore Solutions
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. The Reality of SME Supply Chains */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        The Reality of SME Supply Chains
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-4xl mx-auto leading-tight">
                        No Two Manufacturers Are The Same — So Why Use The Same Software?
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <Truck className="size-6 text-zinc-800" />, title: "Different Dispatch Models", desc: "Your routing is complicated. Standard software can't handle it." },
                            { icon: <FileText className="size-6 text-zinc-800" />, title: "Manual LR & Paper Processes", desc: "Proof of delivery relies on physical documents." },
                            { icon: <Clock className="size-6 text-zinc-800" />, title: "No Real-Time Tracking", desc: "Sales is always calling to check on dispatches." },
                            { icon: <Network className="size-6 text-zinc-800" />, title: "Disconnected Tools", desc: "Tally, WhatsApp, and Excel never talk in real-time." },
                            { icon: <Settings className="size-6 text-zinc-800" />, title: "ERP Overkill", desc: "Rigid, confusing, and forces you to change how you work." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group hover:bg-white/60 hover:shadow-xl transition-all duration-300">
                                <div className="mb-6 bg-white w-fit p-4 rounded-full border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-4 leading-tight">{item.title}</h3>
                                <p className="text-[15px] text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto uppercase tracking-widest">
                        You don't need a tool with 1,000 features. You need a tool that does your 10 features perfectly.
                    </p>
                </div>
            </section>

            {/* 3. What We Build For You (Features Table) */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        What We Build For You
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 max-w-4xl mx-auto leading-tight">
                        From Warehouse To Dealer — We Design Your Digital Backbone.
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                        We design and develop custom supply chain solutions tailored to your unique dispatch logic, dealer portals, and tracking workflows.
                    </p>
                    
                    <div className="overflow-x-auto mb-12 pb-4">
                        <table className="w-full text-left bg-white/10 backdrop-blur-md shadow-lg shadow-blue-900/5 border border-white/40 rounded-[2.5rem] overflow-hidden">
                            <thead>
                                <tr className="bg-zinc-800 border-b border-zinc-700 text-white">
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3">Function</th>
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-2/3 border-l border-zinc-700">Custom Solutions We Can Build</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
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
                                    <tr key={i} className="hover:bg-white/30 transition-colors bg-white/20">
                                        <td className="py-5 px-8 text-[15px] font-bold text-zinc-900 border-r border-white/30">{row.f}</td>
                                        <td className="py-5 px-8 text-[15px] text-zinc-800 font-medium">{row.c}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-14 text-[16px] font-bold shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Discuss Your Requirements
                    </Button>
                </div>
            </section>

            {/* 4. How We Work */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        How We Work
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-4xl mx-auto leading-tight">
                        From Process Mapping To Deployment — End-To-End Custom Development.
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Search className="size-6 text-white" />, title: "Discovery & Process Mapping", desc: "We study your physical supply chain to exactly map out your dispatch logic and volume." },
                            { icon: <TabletSmartphone className="size-6 text-white" />, title: "Blueprint & UI Design", desc: "We design wireframes, approve logic, and demonstrate how your system will look." },
                            { icon: <Code className="size-6 text-white" />, title: "Development & Integration", desc: "We build custom backends, API integrations, and robust web portals." },
                            { icon: <Zap className="size-6 text-white" />, title: "Training & Go-Live", desc: "We deploy the code, train your staff, and provide full tech support." }
                        ].map((step, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 p-10 rounded-[2rem] shadow-lg shadow-blue-900/5 hover:bg-white/60 hover:shadow-xl transition-all duration-300 group flex flex-col text-left">
                                <div className="mb-8 bg-zinc-900 w-fit p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-4 leading-tight">{step.title}</h3>
                                <p className="text-[15px] text-gray-600 font-medium leading-relaxed mt-auto">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <p className="mt-16 text-sm text-zinc-500 font-bold max-w-2xl mx-auto uppercase tracking-widest">
                        Built agile. Delivered iteratively. Designed for your specific workflow.
                    </p>
                </div>
            </section>

            {/* 5. Why Custom Development Wins for SMEs */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why Custom Development Wins for SMEs
                    </span>
                    <div className="flex flex-col lg:flex-row items-center gap-10 mt-6">
                        <div className="lg:w-[45%] flex flex-col justify-center">
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-8 leading-tight">
                                Because One-Size Software Never Fits Indian Manufacturing.
                            </h2>
                            
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Maps exactly to existing processes—no disruption.",
                                    "Custom vendor and dealer integration.",
                                    "Built-in logic for multi-stops or Tally ledgers.",
                                    "No per-user licensing fees—own your code.",
                                    "Easy-to-use screens for your drivers."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-2xl shadow-sm hover:bg-white/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="bg-white rounded-full p-2 shrink-0 shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-zinc-900 transition-all duration-300">
                                            <CheckCircle2 className="size-5 text-zinc-900 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-zinc-800 font-bold text-[15px] leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-14 text-[16px] font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 w-fit">
                                Schedule a Consultation
                            </Button>
                        </div>
                        <div className="lg:w-[55%] w-full">
                            <div className="w-full aspect-[16/10] sm:aspect-video bg-white/40 backdrop-blur-lg border border-white/60 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 relative group">
                                <img 
                                    src="/assets/supply-port.webp" 
                                    alt="Supply Chain Operations" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#022c54]/80 via-[#022c54]/20 to-transparent mix-blend-multiply pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Technology & Capabilities (Stack Table) */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Technology & Capabilities
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 max-w-4xl mx-auto leading-tight">
                        Modern Tech, Tailored To Your Business.
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                        We leverage modern tech stacks to build supply chain solutions that run securely, scale seamlessly, and are easy to use for all levels of your staff—from dispatch boys to management.
                    </p>
                    
                    <div className="overflow-hidden shadow-lg shadow-blue-900/5 border border-white/40 rounded-[2.5rem] bg-white/10 backdrop-blur-md pb-4">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-800 border-b border-zinc-700 text-white">
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3">Area</th>
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-2/3 border-l border-zinc-700">Tech Stack</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/30">
                                {[
                                    { area: "Backend", tech: "Laravel (PHP) & Node.js for robust APIs" },
                                    { area: "Frontend", tech: "React, Vue, HTML/CSS" },
                                    { area: "Mobile Apps", tech: "Progressive Web Apps (PWAs) & React Native" },
                                    { area: "Integrations", tech: "Tally Prime APIs, WhatsApp API, SMS APIs" },
                                    { area: "Hosting", tech: "AWS & DigitalOcean for fast performance" },
                                    { area: "Security", tech: "Role-based access controls, data encryption" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/30 transition-colors bg-white/20">
                                        <td className="py-5 px-8 text-[15px] font-bold text-zinc-900 border-r border-white/30">{row.area}</td>
                                        <td className="py-5 px-8 text-[15px] text-zinc-800 font-medium">{row.tech}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <p className="mt-12 text-sm text-zinc-500 font-bold max-w-2xl mx-auto uppercase tracking-widest">
                        Your Custom Supply Chain Platform — From Architecture to Execution

                    </p>
                </div>
            </section>

            {/* 7. Engagement Models */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Engagement Models
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-4xl mx-auto leading-tight">
                        Flexible Engagement. Real Partnership.
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { 
                                icon: <FileCode className="size-6 text-zinc-900" />, 
                                title: "Fixed-Scope Project", 
                                desc: "We map out your requirements, agree on features, and deliver for a set price."
                            },
                            { 
                                icon: <Users className="size-6 text-zinc-900" />, 
                                title: "Dedicated Development Partner", 
                                desc: "A dedicated engineering team to iteratively develop, scale, and maintain your custom platform."
                            },
                            { 
                                icon: <CheckCircle className="size-6 text-zinc-900" />, 
                                title: "Process & Tech Consulting", 
                                desc: "We audit your dispatch and inventory flow, mapping out bottlenecks and a tech strategy."
                            }
                        ].map((model, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 p-10 rounded-[2rem] shadow-lg shadow-blue-900/5 flex flex-col items-center hover:bg-white/60 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                                <div className="mb-8 bg-white w-fit p-4 rounded-full border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {model.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#00477b] mb-4">{model.title}</h3>
                                <p className="text-[15px] text-gray-600 font-medium flex-grow">{model.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Why Gnosys Digital */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why Gnosys Digital
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 max-w-4xl mx-auto leading-tight">
                        We Bring Enterprise Thinking To SME Manufacturing.
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { title: "Experience", text: "10+ years of experience mapping physical logistics to digital solutions." },
                            { title: "In-House Team", text: "In-house Laravel & React development teams." },
                            { title: "Local Expertise", text: "Deep understanding of Indian supply chain challenges." },
                            { title: "User Adoption", text: "Strong focus on UX, ensuring adoption from dispatch boys to MDs." },
                            { title: "Transparency", text: "Transparent pricing, robust architecture, and full IP handover." }
                        ].map((item, i) => (
                            <div key={i} className={`relative bg-white/50 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 flex flex-col justify-center min-h-[160px] hover:bg-white/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group overflow-hidden ${i === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                                <div className="absolute -right-4 -top-6 text-[120px] font-black text-slate-200/50 leading-none select-none z-0 group-hover:scale-110 group-hover:text-blue-100/50 transition-all duration-500">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-lg font-extrabold text-[#00477b] mb-3">{item.title}</h3>
                                    <p className="text-[15px] font-medium text-gray-700 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-12 h-16 text-[16px] font-bold shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Talk To Our Tech Expert
                    </Button>
                </div>
            </section>

        </MainLayout>
    );
}
