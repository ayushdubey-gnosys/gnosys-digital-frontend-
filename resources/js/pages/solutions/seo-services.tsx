import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { PieChart, FileText, Target, Wrench, Link, BarChart3, PenTool } from 'lucide-react';

export default function SeoServices() {
    return (
        <MainLayout>
            <Head title="SEO Services | Gnosys Digital" />

            <div className="bg-transparent w-full">
                <section
                    className="relative overflow-hidden flex min-h-[82vh] items-center justify-center pb-20 pt-20 text-center lg:pt-28"
                    style={{ backgroundImage: "url('/assets/seo service.webp')", backgroundPosition: 'center', backgroundSize: 'cover' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#071a2b]/85 via-[#0b2038]/65 to-[#0b2038]/20" />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#eaf3ff] to-transparent opacity-0" />

                    <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                        <h1 className="mb-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                            Be Found. Be Chosen. <span className="text-blue-300">Be Profitable.</span>
                        </h1>

                        <p className="mx-auto mb-16 max-w-4xl text-lg text-blue-50/90 sm:text-xl">
                            We don't just get you on Google — we grow your revenue. At Gnosys Digital, SEO is not about rankings; it's about measurable outcomes — traffic that converts, content that scales, and visibility that drives profit.
                        </p>

                        <div className="mb-16 flex flex-wrap justify-center gap-8 sm:gap-16">
                            {[
                                { value: '300%', label: 'Traffic Growth' },
                                { value: '5X', label: 'ROI within 6 Months' },
                                { value: '50%', label: 'Faster Results' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="mb-2 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">{stat.value}</p>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100/90">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button className="bg-white text-[#022c54] hover:bg-slate-100 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                                Get My SEO Growth Plan
                            </Button>
                            <Button variant="secondary" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-sm px-10 h-14 text-base font-bold shadow-xl transition-all w-full sm:w-auto">
                                Talk to an expert
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="bg-transparent py-20 sm:py-24">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Why SEO Matters Now</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mx-auto mb-6 max-w-4xl">
                            Visibility Is Profit. If You're Not Ranking, You're Not In The Game.
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 font-medium mx-auto mb-12 max-w-4xl">
                            93% of online experiences start with a search — and 75% of users never go past page one. But SEO today is not just about keywords — it's about <strong>data-driven visibility, intent-based optimization</strong>, and <strong>strategic storytelling</strong> that makes search engines and humans trust you.
                        </p>

                        <div className="mb-12 grid gap-6 md:grid-cols-3">
                            {[
                                { icon: PieChart, title: '57% of marketers say SEO drives more sales than paid ads.' },
                                { icon: FileText, title: 'Companies that blog consistently see 13x higher ROI.' },
                                { icon: Target, title: 'Organic leads convert 5x better than outbound ones.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 hover:bg-white/60 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-100 shadow-sm bg-white text-zinc-800">
                                        <item.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#123b61] leading-relaxed">{item.title}</h3>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-[#00477b] text-white hover:bg-[#00477b] rounded-full px-10 h-14 text-[16px] font-bold shadow-lg shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300">Get My SEO Growth Plan</Button>
                    </div>
                </section>

                <section className="bg-transparent py-20 sm:py-24">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Our SEO Framework</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-6">The Gnosys SEO Engine</h2>
                        <p className="text-lg sm:text-xl text-gray-600 font-medium mx-auto mb-12 max-w-3xl">
                            We combine <strong>data intelligence, creative content,</strong> and <strong>technical precision</strong> to deliver growth you can measure in revenue, not vanity metrics.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: Wrench, title: 'Technical SEO', desc: 'Fix what search engines see first — site speed, structure, crawl depth.' },
                                { icon: PenTool, title: 'Content Intelligence', desc: 'We turn keywords into compelling narratives that rank and convert.' },
                                { icon: Link, title: 'Authority Building', desc: 'Acquire contextual, high-trust surge within 90 days.' },
                                { icon: BarChart3, title: 'Performance Analytics', desc: 'Weekly dashboards that tie clicks to revenue.' },
                            ].map((step, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 hover:bg-white/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden text-left">
                                    <div className="absolute -right-5 -top-5 text-[90px] font-black text-slate-200/80">0{i + 1}</div>
                                    <div className="relative z-10 flex h-full flex-col">
                                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 shadow-sm bg-white text-zinc-800">
                                            <step.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold text-[#00477b]">{step.title}</h3>
                                        <p className="text-sm font-medium leading-relaxed text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-transparent py-20 sm:py-24">
                    <div className="container mx-auto px-4 max-w-5xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">Measurable Outcomes</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">We Don't Talk Traffic — We Talk ROI.</h2>

                        <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-[2.5rem] shadow-lg shadow-blue-900/5 mb-16 overflow-hidden">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#0b1f35] text-white">
                                        <th className="px-6 py-5 text-xs font-bold uppercase tracking-[0.18em]">Metric</th>
                                        <th className="border-l border-white/10 px-6 py-5 text-xs font-bold uppercase tracking-[0.18em]">Our Benchmarks</th>
                                        <th className="border-l border-white/10 px-6 py-5 text-xs font-bold uppercase tracking-[0.18em]">Impact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {[
                                        { metric: 'Organic Traffic Growth', benchmark: '250-400%', impact: 'Within 6 months of engagement' },
                                        { metric: 'Conversion Rate Lift', benchmark: '↑ 3-5X', impact: 'Through content and UX optimization' },
                                        { metric: 'Cost Per Lead (CPL)', benchmark: '↓ 30-40%', impact: 'Lower vs. PPC channels' },
                                        { metric: 'Average Ranking Improvement', benchmark: '+20-30 Positions', impact: 'Across 50+ tracked keywords' },
                                        { metric: 'ROI Realization', benchmark: '90 Days', impact: 'Measured through sales-qualified leads' },
                                    ].map((row) => (
                                        <tr key={row.metric} className="bg-white/50 hover:bg-slate-50/80">
                                            <td className="px-6 py-5 text-sm font-semibold text-slate-900">{row.metric}</td>
                                            <td className="border-l border-slate-200 px-6 py-5 text-sm font-bold text-emerald-700">{row.benchmark}</td>
                                            <td className="border-l border-slate-200 px-6 py-5 text-sm text-slate-600">{row.impact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <blockquote className="max-w-4xl border-l-4 border-blue-600 pl-6 text-left text-2xl font-light italic tracking-[-0.03em] text-slate-700 sm:text-3xl">
                            “If SEO doesn't move your business KPIs, it's not SEO — it's noise.”
                        </blockquote>
                    </div>
                </section>

                <section className="bg-transparent py-20 sm:py-24">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">How We Work</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12 text-center">SEO That Starts With Data. Ends With Revenue.</h2>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: 'Discover', desc: 'Deep audit & competitor gap analysis' },
                                { title: 'Define', desc: 'Strategy roadmap with measurable KPIs' },
                                { title: 'Deploy', desc: 'On-page, off-page, and technical rollout' },
                                { title: 'Deliver', desc: 'Transparent weekly reports' },
                                { title: 'Dominate', desc: 'Continuous optimization & authority scaling' },
                            ].map((step, i) => (
                                <div key={step.title} className="bg-white/40 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 hover:bg-white/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden text-left">
                                    <div className="absolute -right-4 -top-5 text-[100px] font-black text-slate-200/90">0{i + 1}</div>
                                    <div className="relative z-10">
                                        <h3 className="mb-3 text-xl font-bold text-[#00477b]">{step.title}</h3>
                                        <p className="text-sm font-medium leading-relaxed text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-transparent pb-24 sm:pb-28">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="bg-[#0b1f35] border border-white/10 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/30 text-white sm:p-14">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider">Ready To Scale?</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mt-6">
                                Let’s Turn Search Into Sales
                            </h2>
                            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                                Your customers are searching. Let’s make sure they find you — and choose you.
                            </p>

                            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                                <Button className="bg-white text-[#0b1f35] hover:bg-slate-100 rounded-full px-10 h-14 text-[16px] font-bold shadow-lg transition-all duration-300">
                                    Request a Free SEO Audit
                                </Button>
                                <Button className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 rounded-full px-10 h-14 text-[16px] font-bold shadow-xl transition-all duration-300">
                                    Schedule a Discovery Call
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
