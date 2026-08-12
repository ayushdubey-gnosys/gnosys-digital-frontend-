import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
    PieChart, FileText, Target, Wrench, Link, BarChart3, PenTool 
} from 'lucide-react';
import React from 'react';

export default function SeoServices() {
    return (
        <MainLayout>
            <Head title="SEO Services | Gnosys Digital" />
            
            {/* 1. Hero Section */}
            <section 
                className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/seo service.webp')" }}
            >
                <div className="absolute inset-0 z-0">

                </div>
                
                <div className="container relative z-20 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                        Be Found. Be Chosen. Be Profitable.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-medium mb-16 max-w-4xl mx-auto drop-shadow-md">
                        We don't just get you on Google — we grow your revenue. At Gnosys Digital, SEO is not about rankings; it's about measurable outcomes — traffic that converts, content that scales, and visibility that drives profit.
                    </p>
                    
                    {/* Big Metrics */}
                    <div className="flex flex-wrap justify-center gap-12 sm:gap-24 mb-16">
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-medium text-white mb-2 tracking-tight drop-shadow-md">300%</p>
                            <p className="text-sm sm:text-base font-medium text-blue-200 uppercase tracking-widest drop-shadow-md">Traffic Growth</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-medium text-white mb-2 tracking-tight drop-shadow-md">5X</p>
                            <p className="text-sm sm:text-base font-medium text-blue-200 uppercase tracking-widest drop-shadow-md">ROI within 6 Months</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-medium text-white mb-2 tracking-tight drop-shadow-md">50%</p>
                            <p className="text-sm sm:text-base font-medium text-blue-200 uppercase tracking-widest drop-shadow-md">Faster Results</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button className="bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 rounded-full px-10 h-14 text-base font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
                            Get My SEO Growth Plan
                        </Button>
                        <Button className="bg-black/20 backdrop-blur-md border border-white/30 text-white hover:bg-black/30 rounded-full px-10 h-14 text-base font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
                            Talk to an expert
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why SEO Matters Now */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Why SEO Matters Now
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6 max-w-4xl mx-auto leading-tight">
                        Visibility Is Profit. If You're Not Ranking, You're Not In The Game.
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mb-16 max-w-4xl mx-auto leading-relaxed">
                        93% of online experiences start with a search — and 75% of users never go past page one. But SEO today is not just about keywords — it's about <strong>data-driven visibility, intent-based optimization</strong>, and <strong>strategic storytelling</strong> that makes search engines and humans trust you.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            { icon: <PieChart className="size-8 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "57% of marketers say SEO drives more sales than paid ads." },
                            { icon: <FileText className="size-8 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "Companies that blog consistently see 13x higher ROI." },
                            { icon: <Target className="size-8 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "Organic leads convert 5x better than outbound ones." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 p-10 rounded-[2rem] shadow-lg shadow-blue-900/5 flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:-translate-y-2 hover:shadow-xl hover:bg-white/60 transition-all duration-300 group">
                                <div className="mb-6 bg-white rounded-full p-4 shrink-0 shadow-sm border border-gray-100 group-hover:bg-zinc-900 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-[17px] font-bold text-[#00477b] leading-relaxed">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-14 text-[16px] font-bold shadow-xl transition-all duration-300 hover:-translate-y-1">
                        Get My SEO Growth Plan
                    </Button>
                </div>
            </section>

            {/* 3. Our SEO Framework */}
            <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Our SEO Framework - Built For Outcomes
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">
                        The Gnosys SEO Engine
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
                        We combine <strong>data intelligence, creative content,</strong> and <strong>technical precision</strong> to deliver growth you can measure in revenue, not vanity metrics.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Wrench className="size-6 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "Technical SEO", desc: "Fix what search engines see first — site speed, structure, crawl depth." },
                            { icon: <PenTool className="size-6 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "Content Intelligence", desc: "We turn keywords into compelling narratives that rank and convert." },
                            { icon: <Link className="size-6 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "Authority Building", desc: "Acquire contextual, high-trust surge within 90 days." },
                            { icon: <BarChart3 className="size-6 text-zinc-900 group-hover:text-white transition-colors duration-300" />, title: "Performance Analytics", desc: "Weekly dashboards that tie clicks to revenue." }
                        ].map((step, i) => (
                            <div key={i} className="relative bg-white/50 backdrop-blur-xl border border-white/80 p-8 rounded-[2.5rem] shadow-lg shadow-blue-900/5 flex flex-col text-left hover:bg-white/70 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                                <div className="absolute -right-6 -top-6 text-[100px] font-black text-slate-100/60 leading-none select-none z-0 group-hover:scale-110 group-hover:text-blue-50 transition-all duration-500">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 bg-white w-fit p-4 rounded-full shadow-sm border border-gray-100 group-hover:bg-zinc-900 transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-extrabold mb-4 text-[#00477b] leading-tight">{step.title}</h3>
                                    <p className="text-[15px] font-medium text-gray-700 leading-relaxed flex-grow">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Measurable Outcomes (Data Table) */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        Measurable Outcomes — Our Promise
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12 leading-tight">
                        We Don't Talk Traffic — We Talk ROI.
                    </h2>
                    
                    <div className="overflow-hidden shadow-2xl shadow-blue-900/5 border border-white/60 rounded-[2.5rem] bg-white/40 backdrop-blur-xl mb-16">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-900 border-b border-zinc-800 text-white">
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3">Metric</th>
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3 border-l border-zinc-800">Our Benchmarks</th>
                                    <th className="py-6 px-8 font-extrabold text-xs uppercase tracking-wider w-1/3 border-l border-zinc-800">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/40">
                                {[
                                    { metric: "Organic Traffic Growth", benchmark: "250-400%", impact: "Within 6 months of engagement" },
                                    { metric: "Conversion Rate Lift", benchmark: "↑ 3-5X", impact: "Through content and UX optimization" },
                                    { metric: "Cost Per Lead (CPL)", benchmark: "↓ 30-40%", impact: "Lower vs. PPC channels" },
                                    { metric: "Average Ranking Improvement", benchmark: "+20-30 Positions", impact: "Across 50+ tracked keywords" },
                                    { metric: "ROI Realization", benchmark: "90 Days", impact: "Measured through sales-qualified leads" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/60 transition-colors duration-300">
                                        <td className="py-5 px-8 text-[15px] font-extrabold text-zinc-900 border-r border-white/40">{row.metric}</td>
                                        <td className="py-5 px-8 text-[15px] font-black text-green-700 border-r border-white/40">{row.benchmark}</td>
                                        <td className="py-5 px-8 text-[15px] text-zinc-700 font-semibold">{row.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="max-w-4xl mx-auto py-12 px-6">
                        <blockquote className="border-l-4 border-blue-600 pl-8 text-left">
                            <p className="text-2xl sm:text-3xl font-light text-zinc-800 italic leading-relaxed tracking-tight">
                                "If SEO doesn't move your business KPIs, it's not SEO — it's noise."
                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* 5. How We Work (Growth Playbook) */}
            <section className="py-24 bg-transparent text-center relative z-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        How We Work - The Gnosys Growth Playbook
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-16 leading-tight">
                        SEO That Starts With Data.<br />Ends With Revenue.
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Discover", desc: "Deep audit & competitor gap analysis" },
                            { title: "Define", desc: "Strategy roadmap with measurable KPIs" },
                            { title: "Deploy", desc: "On-page, off-page, and technical rollout" },
                            { title: "Deliver", desc: "Transparent weekly reports" },
                            { title: "Dominate", desc: "Continuous optimization & authority scaling" }
                        ].map((step, i) => (
                            <div key={i} className={`relative bg-white/50 backdrop-blur-xl border border-white/80 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 flex flex-col justify-center min-h-[160px] hover:bg-white/70 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group overflow-hidden ${i === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                                <div className="absolute -right-4 -top-6 text-[120px] font-black text-slate-200/50 leading-none select-none z-0 group-hover:scale-110 group-hover:text-blue-100/50 transition-all duration-500">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-extrabold text-[#00477b] mb-3">{step.title}</h3>
                                    <p className="text-[15px] font-semibold text-gray-700 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Final Dark CTA Section */}
            <section className="py-28 bg-transparent text-center relative z-20 overflow-hidden">
                <div className="container relative z-10 mx-auto px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                        Ready To Scale Your Search Success?
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#00477b] mb-6 leading-tight">
                        Let's Turn Search Into Sales
                    </h2>
                    <p className="text-gray-700 font-medium text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Your customers are searching. Let's make sure they find you — and choose you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-16 text-[16px] font-bold w-full sm:w-auto shadow-xl transition-all hover:-translate-y-1 hover:shadow-lg">
                            Request a Free SEO Audit
                        </Button>
                        <Button className="bg-white/50 backdrop-blur-sm border border-zinc-300 text-zinc-900 hover:bg-white/80 rounded-full px-10 h-16 text-[16px] font-bold w-full sm:w-auto shadow-sm transition-all hover:-translate-y-1">
                            Schedule a Discovery Call
                        </Button>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
