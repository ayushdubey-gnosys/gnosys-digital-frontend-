import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
    Clock, 
    Truck, 
    BarChart3, 
    MessageSquare, 
    CheckCircle2, 
    Handshake, 
    FileText, 
    Rocket, 
    SearchCheck, 
    PackageCheck,
    CheckSquare
} from 'lucide-react';

export default function EngagementModels() {
    return (
        <MainLayout>
            <Head title="Delivery & Engagement Models - Gnosys Digital" />

            {/* 1. Hero Section */}
            <section 
                className="relative text-white overflow-hidden py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/about-engaement.png")' }}
            >
                {/* Lighter blue overlay to make the image clearly visible */}
                <div className="absolute inset-0 bg-[#00477b]/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/40 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
                        Smart, Scalable Delivery Models For Every Business
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Whether you're launching your first website or optimizing an existing digital ecosystem — our flexible engagement models guarantee control, scale, and clear ROI.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <div className="border border-white/40 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium text-sm md:text-base mb-2 inline-block shadow-sm">
                            Find The Model That Fits Your Business (Budget: 50K - 3L)
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-white text-[#00477b] hover:bg-gray-50 rounded-full px-8 h-14 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-2 border-transparent">
                                Get a Fixed Price Quote
                            </Button>
                            <Button className="bg-transparent text-white hover:bg-white/10 border-2 border-white/60 rounded-full px-8 h-14 text-base font-semibold shadow-sm transition-all duration-300">
                                Hire Dedicated Team
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Built For Clarity */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Built For Clarity, Speed, And Control</span>
                    </div>
                    <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Built For Clarity, Speed, And Control</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We don't do hidden fees, vague scopes, or "wait and see" development. Every project, big or small, is structured for maximum transparency and agility. Choose from our standard models or contact us to build a custom approach for your 50K to 3L project.
                    </p>
                </div>

                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-8 lg:mt-10">
                    <div className="w-full px-4 lg:px-10 mx-auto max-w-[1600px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { title: "Clear Scope & Timeline", desc: "Fixed deliverables and deadlines you can count on.", icon: Clock },
                                { title: "Agile Delivery", desc: "Iterative sprints ensure you get value faster.", icon: Truck },
                                { title: "Transparent Reporting", desc: "Full visibility into task progress and billable hours.", icon: BarChart3 },
                                { title: "Direct Communication", desc: "Work directly with developers and project managers.", icon: MessageSquare },
                            ].map((item, idx) => (
                                <div key={idx} className="group bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl p-7 sm:p-8 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between h-full text-left">
                                    <div>
                                        <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <item.icon className="size-5" />
                                        </div>
                                        <h3 className="text-lg font-medium text-[#00477b] mb-3 tracking-tight">{item.title}</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Delivery Models */}
            <section className="py-12 lg:py-16">
                <div className="w-full px-4 lg:px-10 mx-auto">
                    <div className="text-center mb-8 lg:mb-10">
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Choose Your Engagement Route</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Our Delivery Models</h2>
                    </div>
                </div>

                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6 xl:gap-8">
                        
                        {/* 1. Fixed Scope */}
                        <div className="group relative bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-9 xl:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between h-full min-h-[620px]">
                            <div>
                                <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                    <FileText className="size-5" />
                                </div>
                                <h3 className="text-2xl font-normal text-[#00477b] mb-3 tracking-tight">1. Fixed Scope Projects</h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                    <span className="font-medium text-zinc-800">Ideal For:</span> Startups and businesses with strict budgets and clear requirements (Websites, Apps, Integrations).
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="font-medium text-[#00477b] mb-4 text-xs uppercase tracking-wider">Key Benefits:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Fixed deliverables and pre-agreed milestones.",
                                            "Detailed project plan with specific deadlines.",
                                            "Upfront estimate – no hidden percentage."
                                        ].map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="size-4 text-[#00477b] mt-1 shrink-0" />
                                                <span className="text-sm text-zinc-600 leading-relaxed font-normal">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-zinc-200/60 mt-auto">
                                <p className="text-sm text-zinc-600 mb-1 font-normal"><span className="font-medium text-zinc-800">Budget:</span> ₹50K to ₹1.5L</p>
                                <p className="text-xs text-zinc-500 mb-6 font-normal"><span className="font-medium text-zinc-700">Best for:</span> MVP Development, Marketing Websites, Digital Products</p>
                                <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-medium shadow-md shadow-blue-900/10 transition-all">
                                    Get A Fixed Scope Quote
                                </Button>
                            </div>
                        </div>

                        {/* 2. Retainer Based */}
                        <div className="group relative bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-9 xl:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between h-full min-h-[620px]">
                            <div>
                                <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                    <Clock className="size-5" />
                                </div>
                                <h3 className="text-2xl font-normal text-[#00477b] mb-3 tracking-tight">2. Retainer Engagements</h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                    <span className="font-medium text-zinc-800">Ideal For:</span> Ongoing maintenance, continuous improvement, and steady team extensions.
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="font-medium text-[#00477b] mb-4 text-xs uppercase tracking-wider">Key Benefits:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Block of hours (e.g., 40, 80) per month.",
                                            "Flexibility to prioritize and shift tasks.",
                                            "Weekly reporting – complete control."
                                        ].map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="size-4 text-[#00477b] mt-1 shrink-0" />
                                                <span className="text-sm text-zinc-600 leading-relaxed font-normal">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-zinc-200/60 mt-auto">
                                <p className="text-sm text-zinc-600 mb-1 font-normal"><span className="font-medium text-zinc-800">Budget:</span> ₹30K/mo – ₹1L+/mo</p>
                                <p className="text-xs text-zinc-500 mb-6 font-normal"><span className="font-medium text-zinc-700">Best for:</span> Ongoing Marketing, SEO, App Maintenance</p>
                                <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-medium shadow-md shadow-blue-900/10 transition-all">
                                    Hire On Retainer
                                </Button>
                            </div>
                        </div>

                        {/* 3. Hybrid Model */}
                        <div className="group relative bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-9 xl:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between h-full min-h-[620px]">
                            <div>
                                <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                    <Rocket className="size-5" />
                                </div>
                                <h3 className="text-2xl font-normal text-[#00477b] mb-3 tracking-tight">3. Hybrid Model</h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                    <span className="font-medium text-zinc-800">Ideal For:</span> Businesses that need a foundational project built first, followed by continuous monthly support.
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="font-medium text-[#00477b] mb-4 text-xs uppercase tracking-wider">Key Benefits:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Phase 1: Fixed-scope build (Clarity and alignment).",
                                            "Phase 2: Retainer model (Ongoing improvements).",
                                            "Seamless transition from launch to daily operations."
                                        ].map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="size-4 text-[#00477b] mt-1 shrink-0" />
                                                <span className="text-sm text-zinc-600 leading-relaxed font-normal">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-zinc-200/60 mt-auto">
                                <p className="text-sm text-zinc-600 mb-1 font-normal"><span className="font-medium text-zinc-800">Budget:</span> ₹1L Build + ₹30K/mo Retainer</p>
                                <p className="text-xs text-zinc-500 mb-6 font-normal"><span className="font-medium text-zinc-700">Best for:</span> Custom SaaS, E-commerce, Marketing Campaigns</p>
                                <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-medium shadow-md shadow-blue-900/10 transition-all">
                                    Explore Hybrid Model
                                </Button>
                            </div>
                        </div>

                        {/* 4. Task-Based */}
                        <div className="group relative bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-9 xl:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between h-full min-h-[620px]">
                            <div>
                                <div className="size-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                    <PackageCheck className="size-5" />
                                </div>
                                <h3 className="text-2xl font-normal text-[#00477b] mb-3 tracking-tight">4. Task-Based Mini</h3>
                                <p className="text-zinc-600 text-sm mb-6 leading-relaxed font-normal">
                                    <span className="font-medium text-zinc-800">Ideal For:</span> Quick fixes, small feature additions, and one-off integrations.
                                </p>
                                
                                <div className="mb-8">
                                    <h4 className="font-medium text-[#00477b] mb-4 text-xs uppercase tracking-wider">Key Benefits:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Pay-as-you-go, fast execution (1-2 weeks).",
                                            "Specialized expertise on demand.",
                                            "No long-term contracts."
                                        ].map((benefit, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3">
                                                <CheckCircle2 className="size-4 text-[#00477b] mt-1 shrink-0" />
                                                <span className="text-sm text-zinc-600 leading-relaxed font-normal">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-zinc-200/60 mt-auto">
                                <p className="text-sm text-zinc-600 mb-1 font-normal"><span className="font-medium text-zinc-800">Budget:</span> ₹10K - ₹50K</p>
                                <p className="text-xs text-zinc-500 mb-6 font-normal"><span className="font-medium text-zinc-700">Best for:</span> Bug fixes, UI updates, API Integrations</p>
                                <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-full h-12 text-sm font-medium shadow-md shadow-blue-900/10 transition-all">
                                    View Tasks
                                </Button>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Our Delivery Process */}
            <section className="py-12 lg:py-16 border-y border-white/40">
                <div className="w-full px-4 lg:px-10 mx-auto">
                    <div className="text-center mb-8 lg:mb-10">
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">How We Approach Every Project</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Our Delivery Process</h2>
                    </div>
                </div>

                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="w-full px-4 lg:px-10 mx-auto max-w-[1600px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                            {[
                                { step: "01", title: "Discovery & Scoping", desc: "We understand your goals and define the exact scope of the project.", icon: Handshake },
                                { step: "02", title: "Proposal & Agreement", desc: "Detailed plan, timeline, and a completely transparent cost breakdown.", icon: FileText },
                                { step: "03", title: "Kickoff & Execution", desc: "Dedicated team begins work with full transparency and regular updates.", icon: Rocket },
                                { step: "04", title: "Review & Feedback", desc: "Weekly check-ins, testing, and continuous progress reviews.", icon: SearchCheck },
                                { step: "05", title: "Delivery & Handover", desc: "Final delivery, robust training, and transition to ongoing support.", icon: PackageCheck }
                            ].map((proc, pIdx) => (
                                <div key={pIdx} className="group bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2rem] p-6 lg:p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="size-14 bg-blue-50/80 border border-blue-100 text-[#00477b] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300">
                                            <proc.icon className="size-6" />
                                        </div>
                                        <h4 className="font-medium text-lg text-[#00477b] mb-2 tracking-tight">{proc.title}</h4>
                                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">{proc.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12 lg:mt-14">
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-10 h-14 shadow-lg text-base font-semibold hover:-translate-y-0.5 transition-all">
                                Start Your Project Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Scales Growth Section */}
            <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] my-16">
                {/* Left Side: Content */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <div className="w-full max-w-[800px] py-16 lg:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center space-y-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                SEE HOW IT WORKS
                            </span>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                How Our Delivery Model Scales Growth
                            </h2>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                "Predictable costs for budget-conscious projects (50K to 3L).",
                                "Fast deployment, keeping you ahead of the curve.",
                                "Dedicated resources to ensure long-term stability.",
                                "Scale up or down effortlessly as your business needs evolve."
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-white/60 hover:bg-white/80 transition-all duration-200">
                                    <div className="mt-0.5 flex-shrink-0 text-[#00477b] bg-blue-50/80 p-2.5 rounded-xl border border-blue-100 shadow-sm">
                                        <CheckCircle2 className="size-5" />
                                    </div>
                                    <span className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-10 h-14 shadow-lg text-base font-semibold hover:-translate-y-0.5 transition-all w-fit">
                                Discuss Your Project
                            </Button>
                        </div>
                    </div>
                </div>
                
                {/* Right Side: Seamless Image with NO border radius */}
                <div className="relative w-full lg:w-1/2 min-h-[420px] lg:min-h-0">
                    <div 
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat shadow-[-15px_0_40px_-10px_rgba(0,71,123,0.15)]" 
                        style={{ backgroundImage: 'url("/assets/office-story.webp")' }}
                    ></div>
                </div>
            </section>

            {/* 7. Combined Transparency & Contact Section */}
            <section className="py-20 lg:py-28 my-12 relative">
                <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
                        {/* Left Column: Transparency Promise */}
                        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                    NO HIDDEN FEES, NO SURPRISES
                                </span>
                                <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Our Transparency Promise
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                                    Every engagement is backed by transparent workflows, direct communication with developers, and zero surprise invoices.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Detailed proposals outlining exactly what you pay for.",
                                    "Clear communication and fast response times.",
                                    "Direct access to engineers — no middlemen.",
                                    "Structured weekly progress & sprint reports.",
                                    "Flexible contracts tailored to your requirements."
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-sm hover:shadow-md transition-all duration-200">
                                        <div className="mt-0.5 flex-shrink-0 text-[#00477b] bg-blue-50/80 p-2.5 rounded-xl border border-blue-100 shadow-sm">
                                            <CheckSquare className="size-5" />
                                        </div>
                                        <span className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="mb-8">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                    START FINDING WHAT YOU NEED
                                </span>
                                <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    Let's Discuss Your Project
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                                    Fill out the form below and let us know about your project, your timeline, and your budget requirements.
                                </p>
                            </div>

                            <form className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl p-8 sm:p-10 lg:p-12 border border-white/80 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl transition-all duration-400">
                                <div className="space-y-6 mb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="name" className="text-[#00477b] font-medium text-sm">Full Name *</Label>
                                            <Input id="name" placeholder="John Doe" className="h-14 rounded-2xl border-white/80 bg-white/80 focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 shadow-sm text-zinc-800" />
                                        </div>
                                        
                                        <div className="space-y-2.5">
                                            <Label htmlFor="email" className="text-[#00477b] font-medium text-sm">Email Address *</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" className="h-14 rounded-2xl border-white/80 bg-white/80 focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 shadow-sm text-zinc-800" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="budget" className="text-[#00477b] font-medium text-sm">Estimated Budget *</Label>
                                            <select id="budget" className="w-full h-14 rounded-2xl border border-white/80 bg-white/80 focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 shadow-sm px-4 text-zinc-700">
                                                <option value="">Select Budget</option>
                                                <option value="10k-50k">₹10K - ₹50K</option>
                                                <option value="50k-150k">₹50K - ₹1.5L</option>
                                                <option value="150k-300k">₹1.5L - ₹3L</option>
                                                <option value="300k+">₹3L+</option>
                                            </select>
                                        </div>
                                        
                                        <div className="space-y-2.5">
                                            <Label htmlFor="projectType" className="text-[#00477b] font-medium text-sm">Project Type *</Label>
                                            <select id="projectType" className="w-full h-14 rounded-2xl border border-white/80 bg-white/80 focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 shadow-sm px-4 text-zinc-700">
                                                <option value="">Select Project Type</option>
                                                <option value="web">Website / E-commerce</option>
                                                <option value="saas">Web App / SaaS</option>
                                                <option value="erp">ERP Implementation</option>
                                                <option value="seo">SEO / Digital Marketing</option>
                                                <option value="maintenance">Ongoing Maintenance</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2.5">
                                        <Label htmlFor="message" className="text-[#00477b] font-medium text-sm">Project Details</Label>
                                        <Textarea id="message" placeholder="Tell us briefly about your project goals and timeline..." className="min-h-[130px] rounded-2xl border-white/80 bg-white/80 focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 shadow-sm resize-none p-4 text-zinc-800" />
                                    </div>
                                </div>

                                <Button className="w-full sm:w-auto bg-[#00477b] hover:bg-[#00335e] text-white px-10 h-14 rounded-full shadow-lg shadow-blue-900/10 text-base font-semibold transition-all hover:-translate-y-0.5">
                                    Submit Request
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
