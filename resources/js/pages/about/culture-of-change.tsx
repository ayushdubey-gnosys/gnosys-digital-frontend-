import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Search, PenTool, Layout, Target, Settings, Globe, Award, User, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';

export default function CultureOfChange() {
    return (
        <MainLayout>
            <Head title="About Gnosys Digital - The Studio Behind The Change" />

            {/* 1. Hero Section */}
            <section
                className="relative text-white overflow-hidden py-28 lg:py-40 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/about.webp")' }}
            >
                {/* Lighter blue overlay to make the image clearly visible */}
                <div className="absolute inset-0 bg-[#00477b]/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/40 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">
                        ABOUT GNOSYS DIGITAL
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
                        The Studio Behind The Change
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
                        At Gnosys Digital, we don't just develop software; we build digital ecosystems. We are a digital product studio driven by high-impact execution and ready-to-use digital products, all designed 100% in-house by our expert team.
                    </p>
                    <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal">
                        No freelancers. No outsourcing. Just a focused team obsessed with helping brands launch faster, scale smarter, and grow stronger.
                    </p>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* 2. Mission Section */}
            <section className="relative overflow-hidden flex flex-col lg:flex-row items-center my-12 lg:my-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2 flex justify-start">
                    <div className="w-full py-8 lg:py-12 flex flex-col justify-center space-y-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                OUR MISSION
                            </span>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Simplifying Digital Growth
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-normal">
                                Technology is complex. Business growth doesn't have to be. We exist to simplify digital execution for startups, brands, and digital agencies worldwide.
                            </p>
                        </div>

                        {/* Complete Rounded Glass Vision Card */}
                        <div className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border-l-4 border-l-[#00477b]">
                            <h3 className="mb-2 text-xl font-medium tracking-tight text-[#00477b]">Our Vision is Simple</h3>
                            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
                                To deliver top-tier digital assets, engineered systems, and development resources to you - without the typical tech headaches.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-950/20 border border-white/80 group">
                        <div 
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105" 
                            style={{ backgroundImage: 'url("/assets/growth.webp")' }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00477b]/25 via-transparent to-transparent pointer-events-none rounded-[2.5rem]"></div>
                    </div>
                </div>
            </section>

            {/* 3. What We Do */}
            <section className="py-24 lg:py-32 my-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            CORE EXPERTISE
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            What We Do
                        </h2>
                        <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-normal">
                            We operate on two distinct, structured models - ready-to-use digital products and custom done-for-you digital services.
                        </p>
                    </div>
                </div>

                {/* Parent Band Wrapping ONLY Cards */}
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                            {/* Card 1 */}
                            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-white/90 via-white/70 to-white/45 p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="size-16 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shadow-md shadow-blue-900/5">
                                            <Layout className="size-8 text-[#00477b]" />
                                        </div>
                                        <Layout className="size-20 text-zinc-100 absolute right-6 top-6 pointer-events-none" />
                                    </div>
                                    <h3 className="mb-4 text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b]">
                                        Ready-to-Use Digital Products
                                    </h3>
                                    <p className="mb-10 text-base leading-relaxed text-zinc-600 font-normal">
                                        Pre-built UI templates, code snippets, and UI kits designed to accelerate your development process and launch faster.
                                    </p>
                                </div>

                                <div className="relative z-10 pt-6 border-t border-zinc-200/60">
                                    <Button className="inline-flex items-center gap-2 bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-7 h-12 text-sm font-medium shadow-md shadow-blue-900/10 transition-all">
                                        <span>View Digital Products</span>
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-white/90 via-white/70 to-white/45 p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-2xl transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="size-16 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shadow-md shadow-blue-900/5">
                                            <Settings className="size-8 text-[#00477b]" />
                                        </div>
                                        <Settings className="size-20 text-zinc-100 absolute right-6 top-6 pointer-events-none" />
                                    </div>
                                    <h3 className="mb-4 text-2xl sm:text-3xl font-normal tracking-tight text-[#00477b]">
                                        Done-for-You Services
                                    </h3>
                                    <p className="mb-10 text-base leading-relaxed text-zinc-600 font-normal">
                                        From consulting to custom Web Apps, SaaS platforms, React Native mobile apps, ERPNext integrations, and high-performance backend architecture.
                                    </p>
                                </div>

                                <div className="relative z-10 pt-6 border-t border-zinc-200/60">
                                    <Button className="inline-flex items-center gap-2 bg-[#00477b] text-white hover:bg-[#00335e] rounded-full px-7 h-12 text-sm font-medium shadow-md shadow-blue-900/10 transition-all">
                                        <span>Explore Services</span>
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Culture Of Change */}
            <section className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-20 lg:py-28 my-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px]">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left Column */}
                        <div className="lg:col-span-5">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                                OUR MINDSET
                            </span>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Our Culture Of Change
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal mb-8">
                                At Gnosys Digital, innovation is not a buzzword; it's our daily practice. We constantly explore new frameworks, refine our codebases, and embrace agility in a rapidly evolving digital world.
                            </p>
                            <div className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-xl p-6 sm:p-7 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border-l-4 border-l-[#00477b]">
                                <p className="text-sm sm:text-base text-zinc-700 italic leading-relaxed font-normal">
                                    “Our culture empowers everyone to ask questions, challenge assumptions, and constantly evolve - pushing the boundaries of digital execution.”
                                </p>
                            </div>
                        </div>

                        {/* Right Column: 2x2 Grid of Stylish Glassmorphic Cards */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                                {[
                                    { title: "Staying Current", desc: "We proactively upgrade our tech stack and practices before it becomes a necessity.", icon: CheckCircle2 },
                                    { title: "Designing with Purpose", desc: "We prioritize clarity, high performance, and human-centric UI/UX design.", icon: CheckCircle2 },
                                    { title: "Data-Driven Decisions", desc: "Every architecture choice and user interaction is backed by verified business outcomes.", icon: CheckCircle2 },
                                    { title: "Radical Collaboration", desc: "We emphasize open communication, continuous peer learning, and collective problem-solving.", icon: CheckCircle2 }
                                ].map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                        <div className="relative z-10">
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] mb-5 shadow-md shadow-blue-900/5">
                                                <item.icon className="size-5 text-[#00477b]" />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-medium text-[#00477b] mb-2 tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Our Approach */}
            <section className="py-24 lg:py-32 my-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            OUR PROCESS
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Our Approach - The Gnosys Way
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                            We follow a structured, phased process that ensures predictability, transparency, and top-tier quality from day one to launch.
                        </p>
                    </div>
                </div>

                {/* Parent Band Wrapping ONLY Cards */}
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                    <div className="container mx-auto px-4 max-w-7xl relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-8 left-16 right-16 h-0.5 bg-blue-200/50 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                            {[
                                { step: "01", title: "Discover", desc: "We listen and audit your core challenges, mapping business KPIs to create a tailored roadmap.", icon: Search },
                                { step: "02", title: "Design", desc: "We map user journeys, craft clean wireframes, and design UI/UX that looks stunning and converts.", icon: PenTool },
                                { step: "03", title: "Build", desc: "We engineer robust, scalable backend architectures using modern cloud stacks and clean code.", icon: Layout },
                                { step: "04", title: "Deliver", desc: "We test thoroughly, deploy seamlessly, optimize speed, and support your continuous growth.", icon: Target },
                            ].map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                    <div className="flex items-center justify-between mb-6 relative z-10">
                                        <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shadow-md shadow-blue-900/5">
                                            <item.icon className="size-5 text-[#00477b]" />
                                        </div>
                                        <span className="text-2xl font-light text-zinc-300 group-hover:text-[#00477b] transition-colors">
                                            {item.step}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-medium text-[#00477b] mb-3 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Gnosys */}
            <section className="py-24 lg:py-32 my-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            WHY GNOSYS
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Businesses Choose Gnosys Digital
                        </h2>
                    </div>
                </div>

                {/* Parent Band Wrapping ONLY Cards */}
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { title: "Experts At What We Do", desc: "Our team consists of senior engineers, product designers, and technical strategists.", icon: Award },
                                { title: "Deep Domain Knowledge", desc: "We bring rich experience across manufacturing, supply chain, retail, and modern SaaS.", icon: Settings },
                                { title: "Global Resources", desc: "A talented, synchronized workforce providing agility and round-the-clock progress.", icon: Globe },
                                { title: "Measurable Results", desc: "We focus on revenue and efficiency outcomes, building systems that make a lasting impact.", icon: Target },
                            ].map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] mb-6 shadow-md shadow-blue-900/5">
                                            <item.icon className="size-5 text-[#00477b]" />
                                        </div>
                                        <h3 className="text-lg font-medium text-[#00477b] mb-3 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Our Story */}
            <section className="relative overflow-hidden w-full bg-gradient-to-r from-[#002440] via-[#00477b] to-[#001d36] py-24 lg:py-32 my-16 border-y border-white/20 shadow-2xl">
                {/* Top-Left & Top-Right White Ambient Spotlight Lightings */}
                <div className="absolute -top-36 -left-28 w-[550px] h-[550px] bg-gradient-to-br from-white/35 via-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -top-36 -right-28 w-[550px] h-[550px] bg-gradient-to-bl from-white/35 via-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold text-sky-200 tracking-wider uppercase mb-6">
                        HOW IT STARTED
                    </span>

                    <h2 className="mb-10 text-3xl md:text-5xl font-light tracking-tight text-white">
                        Our <span className="font-normal bg-gradient-to-r from-sky-200 via-white to-blue-200 bg-clip-text text-transparent">Story</span>
                    </h2>

                    {/* Story Content Directly on Section Background */}
                    <div className="text-center space-y-8 max-w-3xl mx-auto">
                        <p className="text-xl md:text-3xl text-blue-100/95 leading-relaxed font-light">
                            Gnosys Digital started with a simple premise: bridging the gap between <span className="text-sky-300 font-medium">innovative technology</span> and <span className="text-white font-medium underline decoration-sky-400/40 underline-offset-8">real business success</span>.
                        </p>

                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-sky-300/50 to-transparent mx-auto"></div>

                        <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed font-normal max-w-2xl mx-auto">
                            We realized that many companies struggled with fragmented digital services - agencies that promised everything but delivered very little value. We built an ecosystem where <span className="text-white font-medium">design meets code</span> and <span className="text-white font-medium">strategy meets execution</span> - a unified digital journey that drives sustainable growth.
                        </p>

                        {/* Modern Feature Pills without icons */}
                        <div className="pt-4 flex flex-wrap justify-center gap-3">
                            {["Design Meets Code", "Strategy Meets Execution", "Sustainable Growth"].map((tag, idx) => (
                                <span key={idx} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Industry Collaboration & Workshops */}
            <section className="py-24 lg:py-32 my-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            INDUSTRY COLLABORATION
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Empowering Future Innovators Through Industry Workshops
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                            Collaborating with premier institutes to bridge the gap between academic learning and real-world technology.
                        </p>
                    </div>
                </div>

                {/* Parent Band Wrapping ONLY Cards */}
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        {/* Divider Line with Subtitle */}
                        <div className="flex items-center justify-center gap-4 mb-12 max-w-2xl mx-auto">
                            <div className="h-px bg-blue-200/70 flex-1"></div>
                            <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-[#00477b]/80 uppercase whitespace-nowrap">
                                TRUSTED BY LEADING ACADEMIC INSTITUTIONS
                            </span>
                            <div className="h-px bg-blue-200/70 flex-1"></div>
                        </div>

                        {/* 4 Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            
                            {/* IIT Kharagpur */}
                            <div className="group bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col items-center justify-between text-center min-h-[240px]">
                                <div className="flex-1 flex items-center justify-center w-full py-4 h-28">
                                    <img 
                                        src="/assets/iit-khadkpur.webp" 
                                        alt="IIT Kharagpur" 
                                        width="120"
                                        height="120"
                                        loading="lazy"
                                        decoding="async"
                                        className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-[#00477b] tracking-tight group-hover:text-[#00335e] transition-colors mt-4">
                                    IIT Kharagpur
                                </h3>
                            </div>

                            {/* IIM Raipur */}
                            <div className="group bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col items-center justify-between text-center min-h-[240px]">
                                <div className="flex-1 flex items-center justify-center w-full py-4 h-28">
                                    <img 
                                        src="/assets/iim-raipur.webp" 
                                        alt="IIM Raipur" 
                                        width="120"
                                        height="120"
                                        loading="lazy"
                                        decoding="async"
                                        className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-[#00477b] tracking-tight group-hover:text-[#00335e] transition-colors mt-4">
                                    IIM Raipur
                                </h3>
                            </div>

                            {/* IIT Varanasi */}
                            <div className="group bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col items-center justify-between text-center min-h-[240px]">
                                <div className="flex-1 flex items-center justify-center w-full py-4 h-28">
                                    <img 
                                        src="/assets/iit-vanarasi.webp" 
                                        alt="IIT Varanasi" 
                                        width="120"
                                        height="120"
                                        loading="lazy"
                                        decoding="async"
                                        className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-[#00477b] tracking-tight group-hover:text-[#00335e] transition-colors mt-4">
                                    IIT Varanasi
                                </h3>
                            </div>

                            {/* MDI Gurgaon */}
                            <div className="group bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-400 flex flex-col items-center justify-between text-center min-h-[240px]">
                                <div className="flex-1 flex items-center justify-center w-full py-4 h-28">
                                    <img 
                                        src="/assets/mdi-gurgaon.webp" 
                                        alt="MDI Gurgaon" 
                                        width="150"
                                        height="100"
                                        loading="lazy"
                                        decoding="async"
                                        className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-[#00477b] tracking-tight group-hover:text-[#00335e] transition-colors mt-4">
                                    MDI Gurgaon
                                </h3>
                            </div>

                        </div>

                        {/* Bottom Caption */}
                        <p className="mt-12 text-base text-zinc-600 font-normal max-w-2xl mx-auto text-center leading-relaxed">
                            Collaborating with India's leading academic institutions to inspire innovation, practical learning, and industry readiness.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Meet The People - Horizontal Scroller */}
            <section className="py-20 lg:py-28 my-10 relative z-10 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            OUR EXPERT TEAM
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Meet The People Behind The Work
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                            Our strength lies in our people. We are a diverse, senior-led multidisciplinary team united by a passion for delivering high-performance digital systems.
                        </p>
                    </div>
                </div>

                {/* Full-width Horizontal Scroller Strip */}
                <div className="w-full bg-white/50 backdrop-blur-2xl border-y border-white/60 py-12 lg:py-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
                    {/* Left & Right Gradient Masks */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-blue-100/90 via-blue-50/60 to-transparent z-20"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-pink-100/90 via-pink-50/60 to-transparent z-20"></div>

                    <div className="flex w-max gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused] py-2 px-6">
                        {[
                            { 
                                name: "Priya Menon", 
                                role: "Creative & Brand Director", 
                                exp: "10+ Yrs Exp",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
                                desc: "Priya shapes the visual direction, design systems, and brand experience, blending high-end aesthetics with conversion-focused strategy.",
                                skills: ["Design Systems", "Brand Strategy", "UX Architecture"]
                            },
                            { 
                                name: "Arjun Desai", 
                                role: "Principal System Architect", 
                                exp: "Tech Lead",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
                                desc: "Arjun leads the core engineering team, driving high-concurrency microservices, bank-grade security protocols, and robust Laravel full-stack backbones.",
                                skills: ["Laravel & PHP 8+", "Microservices", "Database Tuning"]
                            },
                            { 
                                name: "Daniel Kim", 
                                role: "Product & UI/UX Designer", 
                                exp: "Interaction Design",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
                                desc: "Daniel crafts frictionless, user-centric interfaces and responsive interactive dashboards for enterprise ERPs and bespoke SaaS tools.",
                                skills: ["Figma Prototyping", "Design Tokens", "User Research"]
                            },
                            { 
                                name: "Sarah Jenkins", 
                                role: "ERP Solutions Architect", 
                                exp: "Frappe / ERPNext",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
                                desc: "Sarah architects enterprise ERPNext implementations for manufacturing, retail, and supply chain enterprises with custom Frappe integrations.",
                                skills: ["Frappe Framework", "Supply Chain ERP", "Workflows"]
                            },
                            { 
                                name: "Marcus Vance", 
                                role: "Cloud & DevOps Lead", 
                                exp: "AWS Certified",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
                                desc: "Marcus manages containerized cloud environments, zero-downtime CI/CD deployment pipelines, and high-availability server clusters.",
                                skills: ["Docker & K8s", "AWS / Cloud", "CI/CD Pipelines"]
                            },
                            { 
                                name: "Elena Rostova", 
                                role: "AI & Workflow Specialist", 
                                exp: "ML & LLMs",
                                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
                                desc: "Elena builds automated intelligent document processing pipelines, conversational AI assistants, and predictive analytics modules.",
                                skills: ["LLM Integration", "Python & PyTorch", "Data Pipelines"]
                            },
                            { 
                                name: "Rohan Mehta", 
                                role: "Senior Full Stack Engineer", 
                                exp: "Inertia + React",
                                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
                                desc: "Rohan specializes in lightning-fast SPAs with Inertia.js, React, Tailwind CSS, and real-time WebSocket communication.",
                                skills: ["Inertia.js", "React & TypeScript", "Tailwind CSS"]
                            },
                            { 
                                name: "Ananya Sharma", 
                                role: "QA & Reliability Lead", 
                                exp: "Automated QA",
                                image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
                                desc: "Ananya ensures zero-defect releases with automated regression suites, stress testing, and continuous integration validations.",
                                skills: ["Pest / PHPUnit", "E2E Testing", "Security Audits"]
                            },
                            /* Duplicate items for seamless continuous looping */
                            { 
                                name: "Priya Menon", 
                                role: "Creative & Brand Director", 
                                exp: "10+ Yrs Exp",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
                                desc: "Priya shapes the visual direction, design systems, and brand experience, blending high-end aesthetics with conversion-focused strategy.",
                                skills: ["Design Systems", "Brand Strategy", "UX Architecture"]
                            },
                            { 
                                name: "Arjun Desai", 
                                role: "Principal System Architect", 
                                exp: "Tech Lead",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
                                desc: "Arjun leads the core engineering team, driving high-concurrency microservices, bank-grade security protocols, and robust Laravel full-stack backbones.",
                                skills: ["Laravel & PHP 8+", "Microservices", "Database Tuning"]
                            },
                            { 
                                name: "Daniel Kim", 
                                role: "Product & UI/UX Designer", 
                                exp: "Interaction Design",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
                                desc: "Daniel crafts frictionless, user-centric interfaces and responsive interactive dashboards for enterprise ERPs and bespoke SaaS tools.",
                                skills: ["Figma Prototyping", "Design Tokens", "User Research"]
                            },
                            { 
                                name: "Sarah Jenkins", 
                                role: "ERP Solutions Architect", 
                                exp: "Frappe / ERPNext",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
                                desc: "Sarah architects enterprise ERPNext implementations for manufacturing, retail, and supply chain enterprises with custom Frappe integrations.",
                                skills: ["Frappe Framework", "Supply Chain ERP", "Workflows"]
                            },
                            { 
                                name: "Marcus Vance", 
                                role: "Cloud & DevOps Lead", 
                                exp: "AWS Certified",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
                                desc: "Marcus manages containerized cloud environments, zero-downtime CI/CD deployment pipelines, and high-availability server clusters.",
                                skills: ["Docker & K8s", "AWS / Cloud", "CI/CD Pipelines"]
                            },
                            { 
                                name: "Elena Rostova", 
                                role: "AI & Workflow Specialist", 
                                exp: "ML & LLMs",
                                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
                                desc: "Elena builds automated intelligent document processing pipelines, conversational AI assistants, and predictive analytics modules.",
                                skills: ["LLM Integration", "Python & PyTorch", "Data Pipelines"]
                            }
                        ].map((person, idx) => (
                            <div 
                                key={idx} 
                                className="group relative w-[340px] sm:w-[380px] bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.5rem] p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden shrink-0 select-none"
                            >
                                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>

                                <div>
                                    {/* Top Profile Header with Real Avatar */}
                                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-zinc-200/60 relative z-10">
                                        <div className="relative size-16 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-md shadow-blue-900/5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                                            <img 
                                                src={person.image} 
                                                alt={person.name} 
                                                className="w-full h-full object-cover object-center" 
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <h3 className="text-lg font-bold text-[#00477b] tracking-tight truncate">{person.name}</h3>
                                                <span className="shrink-0 bg-blue-50 text-[#00477b] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-blue-100/80">
                                                    {person.exp}
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-600 font-semibold mt-0.5 truncate">{person.role}</p>
                                        </div>
                                    </div>

                                    {/* Bio Description */}
                                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal mb-6 relative z-10">
                                        {person.desc}
                                    </p>
                                </div>

                                {/* Skills / Expertise Pills */}
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/50 relative z-10 mt-auto">
                                    {person.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="bg-white/80 border border-white text-zinc-700 text-[11px] font-semibold px-2.5 py-1 rounded-xl shadow-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Global Presence & CTA */}
            <section className="flex flex-col lg:flex-row items-stretch border-t border-white/60 my-0">
                {/* Left Side: 60% Map Image */}
                <div className="w-full lg:w-[60%] bg-[#082f49] flex items-center justify-center relative overflow-hidden group">
                    <img src="/assets/global-work.webp" alt="Our Global Presence" width="1200" height="700" loading="lazy" decoding="async" className="w-full h-auto block object-cover" />
                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
                        <h3 className="text-white/80 text-2xl md:text-3xl lg:text-5xl font-light tracking-tight">Global Presence</h3>
                    </div>
                </div>

                {/* Right Side: 40% CTA Text */}
                <div className="w-full lg:w-[40%] bg-white/50 backdrop-blur-2xl flex flex-col items-center justify-center p-8 lg:p-12 xl:p-16 border-l border-white/60">
                    <div className="w-full max-w-lg text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WORK WITH US
                        </span>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Ready To Work With Us?
                        </h2>
                        <p className="text-zinc-600 mb-10 text-base sm:text-lg leading-relaxed font-normal">
                            Whether you are looking to launch a new digital product, scale your operations, or automate your workflows, Gnosys Digital is your partner for digital success.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-14 rounded-full shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base font-semibold">
                                Get In Touch
                            </Button>
                            <Button className="bg-white text-[#00477b] border border-white/80 hover:bg-zinc-50 px-8 h-14 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-base font-semibold">
                                Explore Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
