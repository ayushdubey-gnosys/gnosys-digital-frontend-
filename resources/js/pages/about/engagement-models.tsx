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
                {/* Very light dark gradient just for text readability, keeping the image natural and bright */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/30 via-[#022c54]/10 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Smart, Scalable Delivery Models For Every Business
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Whether you're launching your first website or optimizing an existing digital ecosystem — our flexible engagement models guarantee control, scale, and clear ROI.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <div className="border border-white/40 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md font-medium text-sm md:text-base mb-2 inline-block">
                            Find The Model That Fits Your Business (Budget: 50K - 3L)
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-white text-[#00477b] hover:bg-gray-100 rounded-sm px-8 h-12 text-base font-bold shadow-lg">
                                Get a Fixed Price Quote
                            </Button>
                            <Button className="bg-white text-[#00477b] hover:bg-gray-100 rounded-sm px-8 h-12 text-base font-bold shadow-lg">
                                Hire Dedicated Team
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Built For Clarity */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Built For Clarity, Speed, And Control</span>
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">Built For Clarity, Speed, And Control</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
                        We don't do hidden fees, vague scopes, or "wait and see" development. Every project, big or small, is structured for maximum transparency and agility. Choose from our standard models or contact us to build a custom approach for your 50K to 3L project.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Clear Scope & Timeline", desc: "Fixed deliverables and deadlines you can count on.", icon: Clock },
                            { title: "Agile Delivery", desc: "Iterative sprints ensure you get value faster.", icon: Truck },
                            { title: "Transparent Reporting", desc: "Full visibility into task progress and billable hours.", icon: BarChart3 },
                            { title: "Direct Communication", desc: "Work directly with developers and project managers.", icon: MessageSquare },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/50 backdrop-blur-xl border border-white/80 p-6 rounded-2xl text-left shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1 transition-all">
                                <div className="mb-4 text-[#00477b]">
                                    <item.icon className="size-8 stroke-[1.5]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-[13px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Our Delivery Models */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Choose Your Engagement Route</span>
                        <h2 className="text-3xl font-bold text-[#00477b]">Our Delivery Models</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* 1. Fixed Scope */}
                        <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/80 border-t-[6px] border-t-[#00477b] p-8 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1 transition-all flex flex-col">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">1. Fixed Scope Projects</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Startups and businesses with strict budgets and clear requirements (Websites, Apps, Integrations).
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-[#00477b] mb-3 text-sm">Key Benefits:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00477b] mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Fixed deliverables and pre-agreed milestones.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00477b] mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Detailed project plan with specific deadlines.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00477b] mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Upfront estimate – no hidden percentage.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-zinc-800">Budget:</span> ₹50K to ₹1.5L</p>
                                <p className="text-sm text-gray-600 mb-6"><span className="font-bold text-zinc-800">Best for:</span> MVP Development, Marketing Websites, Digital Products</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-6 h-10">
                                    Get A Fixed Scope Quote
                                </Button>
                            </div>
                        </div>

                        {/* 2. Retainer Based */}
                        <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/80 border-t-[6px] border-t-emerald-500 p-8 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1 transition-all flex flex-col">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">2. Retainer Based Engagements</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Ongoing maintenance, continuous improvement, and steady team extensions (Design, Development, SEO).
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-[#00477b] mb-3 text-sm">Key Benefits:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Block of hours (e.g., 40, 80) per month.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Flexibility to prioritize and shift tasks.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Weekly reporting – complete control.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-zinc-800">Budget:</span> ₹30K/mo – ₹1L+/mo (Retainer)</p>
                                <p className="text-sm text-gray-600 mb-6"><span className="font-bold text-zinc-800">Best for:</span> Ongoing Marketing, SEO, App Maintenance</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-6 h-10">
                                    Hire On Retainer
                                </Button>
                            </div>
                        </div>

                        {/* 3. Hybrid Model */}
                        <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/80 border-t-[6px] border-t-amber-500 p-8 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1 transition-all flex flex-col">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">3. Hybrid Model</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Businesses that need a foundational project built first, followed by continuous monthly support (Growth, Management).
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-[#00477b] mb-3 text-sm">Key Benefits:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Phase 1: Fixed-scope build (Clarity and alignment).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Phase 2: Retainer model (Ongoing improvements and growth).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Seamless transition from launch to daily operations.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-600 mb-2"><span className="font-bold text-zinc-800">Budget:</span> ₹1L Build + ₹30K/mo Retainer (Example)</p>
                                <p className="text-sm text-gray-600 mb-6"><span className="font-bold text-zinc-800">Best for:</span> Custom SaaS, E-commerce, Marketing Campaigns</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-6 h-10">
                                    Explore Hybrid Model
                                </Button>
                            </div>
                        </div>

                        {/* 4. Task-Based */}
                        <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/80 border-t-[6px] border-t-purple-500 p-8 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1 transition-all flex flex-col">
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">4. Task-Based / Mini-Engagements</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                <span className="font-bold text-zinc-800">Ideal For:</span> Quick fixes, small feature additions, and one-off integrations.
                            </p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-[#00477b] mb-3 text-sm">Key Benefits:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Pay-as-you-go, fast execution (1-2 weeks).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">Specialized expertise on demand.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                                        <span className="text-[13px] text-gray-700">No long-term contracts.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-600 mb-6"><span className="font-bold text-zinc-800">Best for:</span> Bug fixes, UI updates, API Integrations, Migrations (₹10K - ₹50K)</p>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-6 h-10">
                                    View Tasks
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Our Delivery Process */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">How We Approach Every Project From Start To Finish</span>
                        <h2 className="text-3xl font-bold text-[#00477b]">Our Delivery Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
                        <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-transform">
                            <Handshake className="size-6 text-[#00477b] mx-auto mb-3" />
                            <h4 className="font-bold text-[#00477b] mb-2">Discovery & Scoping</h4>
                            <p className="text-xs text-gray-500">We understand your goals and define the scope.</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-transform">
                            <FileText className="size-6 text-[#00477b] mx-auto mb-3" />
                            <h4 className="font-bold text-[#00477b] mb-2">Proposal & Agreement</h4>
                            <p className="text-xs text-gray-500">Detailed plan, timeline, and cost breakdown.</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-transform">
                            <Rocket className="size-6 text-[#00477b] mx-auto mb-3" />
                            <h4 className="font-bold text-[#00477b] mb-2">Kickoff & Execution</h4>
                            <p className="text-xs text-gray-500">Dedicated team begins work with full transparency.</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
                        <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-transform">
                            <SearchCheck className="size-6 text-[#00477b] mx-auto mb-3" />
                            <h4 className="font-bold text-[#00477b] mb-2">Review & Feedback</h4>
                            <p className="text-xs text-gray-500">Weekly check-ins and progress reviews.</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 text-center shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-transform">
                            <PackageCheck className="size-6 text-[#00477b] mx-auto mb-3" />
                            <h4 className="font-bold text-[#00477b] mb-2">Delivery & Handover</h4>
                            <p className="text-xs text-gray-500">Final delivery, training, and transition to maintenance/support.</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-8 h-12 shadow-md">
                            Start Your Project Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. Our Transparency Promise */}
            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">No hidden fees, no surprises. Just great work and a great process.</span>
                    <h2 className="text-3xl font-bold text-[#00477b] mb-10">Our Transparency Promise</h2>
                    
                    <div className="bg-white/50 backdrop-blur-xl p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-white/80 text-left max-w-2xl mx-auto">
                        <ul className="space-y-4">
                            {[
                                "Detailed proposals that outline exactly what you pay for.",
                                "Clear communication and fast response times.",
                                "Direct access to developers — no middle managers.",
                                "Monthly progress reports.",
                                "Flexible contracts tailored to your requirements."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-[#00477b]">
                                        <CheckSquare className="size-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. Scales Growth Section */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">See How The Right Model Works</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#00477b] mb-8">How Our Delivery Model Scales Growth</h2>
                            
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Predictable costs for budget-conscious projects (50K to 3L).",
                                    "Fast deployment, keeping you ahead of the curve.",
                                    "Dedicated resources to ensure long-term stability.",
                                    "Scale up or down effortlessly as your business needs evolve."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 bg-blue-100 text-[#00477b] rounded p-0.5">
                                            <CheckCircle2 className="size-4" />
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-8 h-12 shadow-md">
                                Discuss Your Project
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
                                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Let's Discuss Form */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Start Finding What You Need To Accelerate Your Work</span>
                        <h2 className="text-3xl font-bold text-[#00477b] mb-4">Let's Discuss The Right Model For Your Project</h2>
                        <p className="text-gray-600 text-sm">
                            Fill out the form below and let us know about your project, your timeline, and your budget requirements. We will get back to you with the perfect engagement model to help you succeed.
                        </p>
                    </div>

                    <form className="bg-white/50 backdrop-blur-xl p-8 md:p-10 border border-white/80 rounded-3xl shadow-xl shadow-blue-900/5">
                        <div className="space-y-4 mb-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-gray-700 font-bold">Name *</Label>
                                <Input id="name" className="h-12 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b] bg-slate-50" />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-700 font-bold">Email *</Label>
                                <Input id="email" type="email" className="h-12 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b] bg-slate-50" />
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="budget" className="text-gray-700 font-bold">Budget *</Label>
                                <select id="budget" className="w-full h-12 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b] bg-slate-50 px-3 text-sm">
                                    <option>Select Budget</option>
                                    <option>₹10K - ₹50K</option>
                                    <option>₹50K - ₹1.5L</option>
                                    <option>₹1.5L - ₹3L</option>
                                    <option>₹3L+</option>
                                </select>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="projectType" className="text-gray-700 font-bold">Project Type *</Label>
                                <select id="projectType" className="w-full h-12 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b] bg-slate-50 px-3 text-sm">
                                    <option>Select Project Type</option>
                                    <option>Website / E-commerce</option>
                                    <option>Web App / SaaS</option>
                                    <option>ERP Implementation</option>
                                    <option>SEO / Digital Marketing</option>
                                    <option>Ongoing Maintenance</option>
                                </select>
                            </div>
                            
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-gray-700 font-bold">Message</Label>
                                <Textarea id="message" className="min-h-[150px] rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b] bg-slate-50" />
                            </div>
                        </div>

                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 rounded-sm shadow-md">
                            Submit
                        </Button>
                    </form>

                    <div className="mt-12 flex justify-center gap-4 border-t border-gray-200 pt-12">
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-6 h-10 text-xs font-bold uppercase tracking-wide">
                            Get In Touch
                        </Button>
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm px-6 h-10 text-xs font-bold uppercase tracking-wide">
                            Explore Our Services
                        </Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
