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
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] bg-[#02498b]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#02498b]/80 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#01254a] via-[#02498b] to-[#01254a]"></div>
                    {/* Data analytics / Binary code background effect */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
                    {/* Concentric circles effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full pointer-events-none"></div>
                    {/* Faded 'SEO' text behind everything */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black text-white/5 select-none pointer-events-none z-10 tracking-tighter">
                        SEO
                    </div>
                </div>
                
                <div className="container relative z-20 mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-xl">
                        Be Found. Be Chosen. Be Profitable.
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed font-medium mb-16 max-w-4xl mx-auto drop-shadow-md">
                        We don't just get you on Google — we grow your revenue. At Gnosys Digital, SEO is not about rankings; it's about measurable outcomes — traffic that converts, content that scales, and visibility that drives profit.
                    </p>
                    
                    {/* Big Metrics */}
                    <div className="flex flex-wrap justify-center gap-12 sm:gap-24 mb-16">
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tight">300%</p>
                            <p className="text-sm sm:text-base font-bold text-blue-200 uppercase tracking-widest">Traffic Growth</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tight">5X</p>
                            <p className="text-sm sm:text-base font-bold text-blue-200 uppercase tracking-widest">ROI within 6 Months</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tight">50%</p>
                            <p className="text-sm sm:text-base font-bold text-blue-200 uppercase tracking-widest">Faster Results</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#02498b] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Get My SEO Growth Plan
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                            Talk to an expert
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. Why SEO Matters Now */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Why SEO Matters Now
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6 max-w-4xl mx-auto leading-tight">
                        Visibility Is Profit. If You're Not Ranking, You're Not In The Game.
                    </h2>
                    <p className="text-zinc-600 font-medium mb-16 max-w-4xl mx-auto">
                        93% of online experiences start with a search — and 75% of users never go past page one. But SEO today is not just about keywords — it's about <strong>data-driven visibility, intent-based optimization</strong>, and <strong>strategic storytelling</strong> that makes search engines and humans trust you.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {[
                            { icon: <PieChart className="size-8 text-[#022c54]" />, title: "57% of marketers say SEO drives more sales than paid ads." },
                            { icon: <FileText className="size-8 text-[#022c54]" />, title: "Companies that blog consistently see 13x higher ROI." },
                            { icon: <Target className="size-8 text-[#022c54]" />, title: "Organic leads convert 5x better than outbound ones." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] p-10 rounded-sm shadow-sm flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-[17px] font-bold text-[#022c54] leading-relaxed">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    
                    <Button className="bg-[#02498b] text-white hover:bg-[#02498b]/90 rounded-sm px-8 h-12 text-sm font-bold shadow-md">
                        Get My SEO Growth Plan
                    </Button>
                </div>
            </section>

            {/* 3. Our SEO Framework */}
            <section className="py-24 bg-[#f8fafc] text-center border-y border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Our SEO Framework - Built For Outcomes
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-6">
                        The Gnosys SEO Engine — Designed For Measurable Results
                    </h2>
                    <p className="text-zinc-600 font-medium mb-16 max-w-3xl mx-auto">
                        We combine <strong>data intelligence, creative content,</strong> and <strong>technical precision</strong> to deliver growth you can measure in revenue, not vanity metrics.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Wrench className="size-6 text-[#0369a1]" />, title: "Technical SEO Excellence", desc: "Fix what search engines see first — site speed, structure, crawl depth." },
                            { icon: <PenTool className="size-6 text-[#0369a1]" />, title: "Content Intelligence", desc: "We turn keywords into compelling narratives that rank and convert." },
                            { icon: <Link className="size-6 text-[#0369a1]" />, title: "Authority Building & Backlinks", desc: "Acquire contextual, high-trust surge within 90 days." },
                            { icon: <BarChart3 className="size-6 text-[#0369a1]" />, title: "Performance Analytics & Reporting", desc: "Weekly dashboards that tie clicks to revenue." }
                        ].map((step, i) => (
                            <div key={i} className="bg-white rounded-sm p-8 shadow-sm text-left border border-[#bae6fd] hover:border-[#38bdf8] transition-colors flex flex-col">
                                <div className="mb-6 bg-[#f0f9ff] w-fit p-3 rounded-md">
                                    {step.icon}
                                </div>
                                <h3 className="text-[17px] font-bold mb-4 text-[#022c54] leading-tight">{step.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Measurable Outcomes (Data Table) */}
            <section className="py-24 bg-white border-b border-[#e2e8f0]">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        Measurable Outcomes — Our Promise
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-12">
                        We Don't Talk Traffic — We Talk ROI.
                    </h2>
                    
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full text-left border-collapse bg-white shadow-sm border border-[#e2e8f0] rounded-sm overflow-hidden">
                            <thead>
                                <tr className="bg-[#023e7d] text-white">
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3 border-r border-[#02498b]">Metric</th>
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3 border-r border-[#02498b]">Our Benchmarks</th>
                                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider w-1/3">Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e2e8f0]">
                                {[
                                    { metric: "Organic Traffic Growth", benchmark: "250-400%", impact: "Within 6 months of engagement" },
                                    { metric: "Conversion Rate Lift", benchmark: "↑ 3-5X", impact: "Through content and UX optimization" },
                                    { metric: "Cost Per Lead (CPL)", benchmark: "↓ 30-40%", impact: "Lower vs. PPC channels" },
                                    { metric: "Average Ranking Improvement", benchmark: "+20-30 Positions", impact: "Across 50+ tracked keywords" },
                                    { metric: "ROI Realization", benchmark: "90 Days", impact: "Measured through sales-qualified leads" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-[14px] font-bold text-[#022c54] border-r border-[#e2e8f0]">{row.metric}</td>
                                        <td className="py-4 px-6 text-[14px] font-bold text-green-700 border-r border-[#e2e8f0]">{row.benchmark}</td>
                                        <td className="py-4 px-6 text-[14px] text-zinc-700 font-medium">{row.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="max-w-4xl mx-auto border-t-2 border-b-2 border-[#bae6fd] py-8">
                        <p className="text-xl sm:text-2xl font-medium text-[#022c54] italic">
                            "If SEO doesn't move your business KPIs, it's not SEO — it's noise."
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. How We Work (Growth Playbook) */}
            <section className="py-24 bg-[#f8fafc] text-center">
                <div className="container mx-auto px-4 max-w-6xl">
                    <p className="text-sm font-bold text-[#0369a1] uppercase tracking-wider mb-4">
                        How We Work - The Gnosys Growth Playbook
                    </p>
                    <h2 className="text-3xl font-bold text-[#022c54] mb-16">
                        SEO That Starts With Data. Ends With Revenue.
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { title: "Discover", desc: "Deep audit & competitor gap analysis" },
                            { title: "Define", desc: "Strategy roadmap with measurable KPIs" },
                            { title: "Deploy", desc: "On-page, off-page, and technical rollout" },
                            { title: "Deliver", desc: "Transparent weekly reports" },
                            { title: "Dominate", desc: "Continuous optimization & authority scaling" }
                        ].map((step, i) => (
                            <div key={i} className="bg-white border border-[#e2e8f0] border-t-4 border-t-[#02498b] p-6 rounded-sm shadow-sm flex flex-col items-center text-center col-span-1 last:col-span-2 md:last:col-span-1">
                                <h3 className="text-lg font-black text-[#022c54] mb-3">{step.title}</h3>
                                <p className="text-sm text-zinc-600 font-medium leading-snug">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Final Dark CTA Section */}
            <section className="py-24 bg-[#27272a] text-center border-t-4 border-[#02498b]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                        Ready To Scale Your Search Success?
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                        Let's Turn Search Into Sales
                    </h2>
                    <p className="text-[#a1a1aa] font-medium text-lg mb-12 max-w-2xl mx-auto">
                        Your customers are searching. Let's make sure they find you — and choose you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-white text-[#27272a] hover:bg-zinc-100 rounded-sm px-8 h-12 text-sm font-bold w-full sm:w-auto shadow-xl">
                            Request a Free SEO Audit
                        </Button>
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-8 h-12 text-sm font-bold w-full sm:w-auto shadow-xl">
                            Schedule a Discovery Call
                        </Button>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
