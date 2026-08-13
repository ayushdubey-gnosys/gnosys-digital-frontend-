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

                <div className="w-full bg-white/40 backdrop-blur-md shadow-sm border-y border-white/60 py-8 lg:py-10 mt-8 lg:mt-10">
                    <div className="container mx-auto px-4 max-w-7xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { title: "Clear Scope & Timeline", desc: "Fixed deliverables and deadlines you can count on.", icon: Clock },
                            { title: "Agile Delivery", desc: "Iterative sprints ensure you get value faster.", icon: Truck },
                            { title: "Transparent Reporting", desc: "Full visibility into task progress and billable hours.", icon: BarChart3 },
                            { title: "Direct Communication", desc: "Work directly with developers and project managers.", icon: MessageSquare },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/70 shadow-sm hover:shadow-xl hover:border-white/90 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full text-left">
                                <div className="p-3.5 bg-blue-50/50 text-blue-600 rounded-2xl inline-flex mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100/50 w-fit">
                                    <item.icon className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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

                <div className="w-full bg-white/40 backdrop-blur-md shadow-sm border-y border-white/60 py-8 lg:py-10">
                    <div className="w-full px-4 lg:px-10 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                        
                        {/* 1. Fixed Scope */}
                        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/70 border-t-[6px] border-t-[#00477b] p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">1. Fixed Scope Projects</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Startups and businesses with strict budgets and clear requirements (Websites, Apps, Integrations).
                            </p>
                            
                            <div className="mb-8">
                                <h4 className="font-bold text-[#00477b] mb-4 text-sm uppercase tracking-wide">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#00477b] mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Fixed deliverables and pre-agreed milestones.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#00477b] mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Detailed project plan with specific deadlines.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#00477b] mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Upfront estimate – no hidden percentage.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-white/60">
                                <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-zinc-800">Budget:</span> ₹50K to ₹1.5L</p>
                                <p className="text-sm text-gray-600 mb-8"><span className="font-bold text-zinc-800">Best for:</span> MVP Development, Marketing Websites, Digital Products</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-md w-fit font-semibold transition-transform hover:-translate-y-0.5">
                                    Get A Fixed Scope Quote
                                </Button>
                            </div>
                        </div>

                        {/* 2. Retainer Based */}
                        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/70 border-t-[6px] border-t-emerald-500 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">2. Retainer Based Engagements</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Ongoing maintenance, continuous improvement, and steady team extensions (Design, Development, SEO).
                            </p>
                            
                            <div className="mb-8">
                                <h4 className="font-bold text-[#00477b] mb-4 text-sm uppercase tracking-wide">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Block of hours (e.g., 40, 80) per month.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Flexibility to prioritize and shift tasks.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Weekly reporting – complete control.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-white/60">
                                <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-zinc-800">Budget:</span> ₹30K/mo – ₹1L+/mo (Retainer)</p>
                                <p className="text-sm text-gray-600 mb-8"><span className="font-bold text-zinc-800">Best for:</span> Ongoing Marketing, SEO, App Maintenance</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-md w-fit font-semibold transition-transform hover:-translate-y-0.5">
                                    Hire On Retainer
                                </Button>
                            </div>
                        </div>

                        {/* 3. Hybrid Model */}
                        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/70 border-t-[6px] border-t-amber-500 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">3. Hybrid Model</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Businesses that need a foundational project built first, followed by continuous monthly support (Growth, Management).
                            </p>
                            
                            <div className="mb-8">
                                <h4 className="font-bold text-[#00477b] mb-4 text-sm uppercase tracking-wide">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Phase 1: Fixed-scope build (Clarity and alignment).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Phase 2: Retainer model (Ongoing improvements and growth).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Seamless transition from launch to daily operations.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-white/60">
                                <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-zinc-800">Budget:</span> ₹1L Build + ₹30K/mo Retainer (Example)</p>
                                <p className="text-sm text-gray-600 mb-8"><span className="font-bold text-zinc-800">Best for:</span> Custom SaaS, E-commerce, Marketing Campaigns</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-md w-fit font-semibold transition-transform hover:-translate-y-0.5">
                                    Explore Hybrid Model
                                </Button>
                            </div>
                        </div>

                        {/* 4. Task-Based */}
                        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/70 border-t-[6px] border-t-purple-500 p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">4. Task-Based / Mini-Engagements</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Quick fixes, small feature additions, and one-off integrations.
                            </p>
                            
                            <div className="mb-8">
                                <h4 className="font-bold text-[#00477b] mb-4 text-sm uppercase tracking-wide">Key Benefits:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Pay-as-you-go, fast execution (1-2 weeks).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">Specialized expertise on demand.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed">No long-term contracts.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-white/60">
                                <p className="text-sm text-gray-600 mb-8"><span className="font-bold text-zinc-800">Best for:</span> Bug fixes, UI updates, API Integrations, Migrations (₹10K - ₹50K)</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-md w-fit font-semibold transition-transform hover:-translate-y-0.5">
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

                <div className="w-full bg-white/40 backdrop-blur-md shadow-sm border-y border-white/60 py-12 lg:py-16">
                    <div className="w-full px-4 lg:px-10 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                        <div className="bg-white/60 backdrop-blur-md border border-white/70 rounded-[2rem] p-6 lg:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-50/50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100/50">
                                <Handshake className="size-8" />
                            </div>
                            <h4 className="font-bold text-xl text-[#00477b] mb-3">Discovery & Scoping</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">We understand your goals and define the exact scope of the project.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md border border-white/70 rounded-[2rem] p-6 lg:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-50/50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100/50">
                                <FileText className="size-8" />
                            </div>
                            <h4 className="font-bold text-xl text-[#00477b] mb-3">Proposal & Agreement</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Detailed plan, timeline, and a completely transparent cost breakdown.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md border border-white/70 rounded-[2rem] p-6 lg:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-50/50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100/50">
                                <Rocket className="size-8" />
                            </div>
                            <h4 className="font-bold text-xl text-[#00477b] mb-3">Kickoff & Execution</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Dedicated team begins work with full transparency and regular updates.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md border border-white/70 rounded-[2rem] p-6 lg:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-50/50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100/50">
                                <SearchCheck className="size-8" />
                            </div>
                            <h4 className="font-bold text-xl text-[#00477b] mb-3">Review & Feedback</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Weekly check-ins, testing, and continuous progress reviews.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md border border-white/70 rounded-[2rem] p-6 lg:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 bg-blue-50/50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100/50">
                                <PackageCheck className="size-8" />
                            </div>
                            <h4 className="font-bold text-xl text-[#00477b] mb-3">Delivery & Handover</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Final delivery, robust training, and transition to ongoing support.</p>
                        </div>
                    </div>

                    <div className="text-center mt-10 lg:mt-12">
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-10 h-14 shadow-lg text-base font-semibold hover:-translate-y-0.5 transition-all">
                            Start Your Project Now
                        </Button>
                    </div>
                </div>
                </div>
            </section>

            {/* 6. Scales Growth Section */}
            <section className="py-12 lg:py-16 relative">
                <div className="w-full bg-white/40 backdrop-blur-md shadow-sm border-y border-white/60 overflow-hidden relative">
                    <div className="w-full relative z-10">
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="w-full lg:w-1/2 py-12 lg:py-16 px-4 lg:pl-12 xl:pl-24 lg:pr-12 xl:pr-16 flex flex-col justify-center">
                            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50 w-fit">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">See How It Works</span>
                            </div>
                            <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">How Our Delivery Model Scales Growth</h2>
                            
                            <ul className="space-y-6 mb-12">
                                {[
                                    "Predictable costs for budget-conscious projects (50K to 3L).",
                                    "Fast deployment, keeping you ahead of the curve.",
                                    "Dedicated resources to ensure long-term stability.",
                                    "Scale up or down effortlessly as your business needs evolve."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 text-blue-600 bg-blue-50/50 p-2 rounded-xl border border-blue-100/50">
                                            <CheckCircle2 className="size-5" />
                                        </div>
                                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-10 h-14 shadow-lg text-base font-semibold hover:-translate-y-0.5 transition-all w-fit mt-2">
                                Discuss Your Project
                            </Button>
                        </div>
                    </div>
                    </div>
                    
                    {/* Absolute Image on the right half of the screen */}
                    <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0">
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-l-[3rem] shadow-[-15px_0_40px_-10px_rgba(0,71,123,0.3)]" style={{ backgroundImage: 'url("/assets/office-story.webp")' }}></div>
                    </div>
                    
                    {/* Mobile Image */}
                    <div className="block lg:hidden w-full min-h-[400px] relative z-0">
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-b-[2rem] shadow-[-15px_0_40px_-10px_rgba(0,71,123,0.3)]" style={{ backgroundImage: 'url("/assets/office-story.webp")' }}></div>
                    </div>
                </div>
            </section>

            {/* 7. Combined Transparency & Contact Section */}
            <section className="py-12 lg:py-16 relative">
                <div className="w-full px-4 lg:px-12 xl:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-12 items-start relative">
                        {/* Left Column Group */}
                        <div className="flex flex-col lg:contents z-10">
                            <div className="lg:col-start-1 lg:row-start-1">
                                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">No hidden fees, no surprises</span>
                                </div>
                                <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Our Transparency Promise</h2>
                            </div>
                            
                            <div className="bg-white/40 backdrop-blur-md p-8 lg:p-10 rounded-[3rem] shadow-sm border border-white/60 hover:shadow-xl transition-all lg:col-start-1 lg:row-start-2">
                                <ul className="space-y-6">
                                    {[
                                        "Detailed proposals that outline exactly what you pay for.",
                                        "Clear communication and fast response times.",
                                        "Direct access to developers — no middle managers.",
                                        "Monthly progress reports.",
                                        "Flexible contracts tailored to your requirements."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0 text-blue-600 bg-blue-50/50 p-2 rounded-xl border border-blue-100/50">
                                                <CheckSquare className="size-5" />
                                            </div>
                                            <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column Group */}
                        <div className="flex flex-col lg:contents">
                            <div className="lg:col-start-2 lg:row-start-1">
                                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Start Finding What You Need</span>
                                </div>
                                <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Let's Discuss Your Project</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                    Fill out the form below and let us know about your project, your timeline, and your budget requirements.
                                </p>
                            </div>

                            <form className="bg-white/40 backdrop-blur-md p-8 lg:p-10 border border-white/60 rounded-[3rem] shadow-sm hover:shadow-xl transition-all lg:col-start-2 lg:row-start-2">
                                <div className="space-y-6 mb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="name" className="text-[#00477b] font-bold text-sm">Name *</Label>
                                            <Input id="name" className="h-14 rounded-2xl border-white/60 bg-white/50 focus:border-[#00477b] focus:ring-[#00477b] shadow-sm" />
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <Label htmlFor="email" className="text-[#00477b] font-bold text-sm">Email *</Label>
                                            <Input id="email" type="email" className="h-14 rounded-2xl border-white/60 bg-white/50 focus:border-[#00477b] focus:ring-[#00477b] shadow-sm" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="budget" className="text-[#00477b] font-bold text-sm">Budget *</Label>
                                            <select id="budget" className="w-full h-14 rounded-2xl border border-white/60 bg-white/50 focus:border-[#00477b] focus:ring-[#00477b] shadow-sm px-4 text-gray-700">
                                                <option>Select Budget</option>
                                                <option>₹10K - ₹50K</option>
                                                <option>₹50K - ₹1.5L</option>
                                                <option>₹1.5L - ₹3L</option>
                                                <option>₹3L+</option>
                                            </select>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <Label htmlFor="projectType" className="text-[#00477b] font-bold text-sm">Project Type *</Label>
                                            <select id="projectType" className="w-full h-14 rounded-2xl border border-white/60 bg-white/50 focus:border-[#00477b] focus:ring-[#00477b] shadow-sm px-4 text-gray-700">
                                                <option>Select Project Type</option>
                                                <option>Website / E-commerce</option>
                                                <option>Web App / SaaS</option>
                                                <option>ERP Implementation</option>
                                                <option>SEO / Digital Marketing</option>
                                                <option>Ongoing Maintenance</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <Label htmlFor="message" className="text-[#00477b] font-bold text-sm">Message</Label>
                                        <Textarea id="message" className="min-h-[120px] rounded-2xl border-white/60 bg-white/50 focus:border-[#00477b] focus:ring-[#00477b] shadow-sm resize-none p-4" />
                                    </div>
                                </div>

                                <Button className="w-full sm:w-auto bg-[#00477b] hover:bg-[#00335e] text-white px-10 h-14 rounded-full shadow-lg text-base font-semibold transition-all hover:-translate-y-0.5">
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
