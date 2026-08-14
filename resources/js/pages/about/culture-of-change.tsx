import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { CheckSquare, Search, PenTool, Layout, Target, Settings, Globe, Award, User, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CultureOfChange() {
    return (
        <MainLayout>
            <Head title="About Gnosys Digital - The Studio Behind The Change" />

            {/* 1. Hero Section */}
            <section
                className="relative text-white overflow-hidden py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/about.webp")' }}
            >
                {/* Lighter blue overlay to make the image clearly visible */}
                <div className="absolute inset-0 bg-[#00477b]/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#022c54]/40 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight tracking-tight">
                        About Gnosys Digital<br />The Studio Behind The Change
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        At Gnosys Digital, we don't just develop software; we build digital ecosystems. We are a digital product studio driven by high-impact execution and ready-to-use digital products, all designed 100% in-house by our expert team.
                    </p>
                    <p className="text-lg text-blue-100 max-w-3xl mx-auto font-medium">
                        No freelancers. No outsourcing. Just a focused team obsessed with helping brands launch faster, scale smarter, and grow stronger.
                    </p>
                </div>
            </section>

            {/* 2. Mission Section */}
            <section className="relative overflow-hidden bg-white/20 backdrop-blur-md flex flex-col lg:flex-row items-stretch mt-12 lg:mt-16">
                <div className="w-full lg:w-1/2 flex justify-end border-y border-white/40">
                    <div className="w-full max-w-[800px] py-24 lg:py-32 px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-col justify-center space-y-12">
                        <div>
                            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Our Mission</span>
                            </div>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                Simplifying Digital Growth
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Technology is complex. Business growth doesn't have to be. We exist to simplify digital execution for startups, brands, and digital agencies.
                            </p>
                        </div>

                        <div className="border-l-4 border-blue-400 pl-6">
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#00477b]">Our Vision is Simple</h3>
                            <p className="text-lg leading-relaxed text-gray-600">
                                To deliver top-tier digital assets and development resources to you — without the typical tech headaches.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
                    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-t-[2rem] lg:rounded-t-none lg:rounded-l-[3rem] shadow-[-15px_0_40px_-10px_rgba(0,71,123,0.3)]" style={{ backgroundImage: 'url("/assets/growth.webp")' }}></div>
                </div>
            </section>

            {/* 3. What We Do */}
            <section className="bg-white/10 py-24 lg:py-32">
                <div className="mx-auto max-w-[1600px] px-0">
                    <div className="mx-auto mb-16 max-w-3xl px-4 text-center lg:mb-20 sm:px-6 lg:px-8">
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Core Expertise</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">What We Do</h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            We operate on two distinct, structured models — ready-to-use digital products and custom done-for-you digital services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12 lg:px-8 xl:px-12">
                        <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-10 shadow-[0_18px_40px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-12">
                            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 p-8 opacity-5 transition-opacity duration-300 group-hover:opacity-10">
                                <Layout className="size-32 text-[#00477b]" />
                            </div>
                            <div className="mb-8 flex w-fit rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                <Layout className="size-7" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#00477b]">Ready-to-Use Digital Products</h3>
                            <p className="mb-10 flex-grow text-base leading-relaxed text-gray-600">
                                Pre-built UI templates, code snippets, and UI kits designed to accelerate your development process.
                            </p>
                            <Button className="w-fit bg-transparent p-0 text-base font-semibold text-[#00477b] hover:bg-transparent hover:text-blue-700">
                                View Digital Products
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </div>

                        <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-10 shadow-[0_18px_40px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-12">
                            <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 p-8 opacity-5 transition-opacity duration-300 group-hover:opacity-10">
                                <Settings className="size-32 text-[#00477b]" />
                            </div>
                            <div className="mb-8 flex w-fit rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                <Settings className="size-7" />
                            </div>
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#00477b]">Done-for-You Services</h3>
                            <p className="mb-10 flex-grow text-base leading-relaxed text-gray-600">
                                From consulting to custom Web Apps, SaaS development, React Native app development, API integration and backend architecture — we build everything from scratch, focusing on performance.
                            </p>
                            <Button className="w-fit bg-transparent p-0 text-base font-semibold text-[#00477b] hover:bg-transparent hover:text-blue-700">
                                Explore Services
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Culture Of Change */}
            <section className="py-24 lg:py-32 bg-white/20 backdrop-blur-md border-y border-white/40">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Our Mindset</span>
                            </div>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Our Culture Of Change</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                At Gnosys Digital, innovation is not a buzzword; it's our daily practice. We constantly explore new frameworks, refine our codebases, and embrace agility in a rapidly evolving digital world. We call it "Culture of Change."
                            </p>
                            <p className="text-base text-gray-500 italic bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm leading-relaxed">
                                Our culture empowers everyone to ask questions, challenge assumptions, and constantly evolve — not just because it's good for business, but because it pushes the boundaries of what's possible.
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 lg:p-12 shadow-sm border border-white/60">
                                <h3 className="text-2xl font-bold text-[#00477b] tracking-tight mb-8">What It Means:</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "Staying current", desc: "We proactively upgrade our tech stack before it's a necessity." },
                                        { title: "Designing with purpose", desc: "We prioritize clarity, performance, and user-centric design." },
                                        { title: "Data-driven decisions", desc: "Every pixel, every interaction is backed by data, ensuring maximum impact for our clients." },
                                        { title: "Working together", desc: "We emphasize open communication, continuous learning, and collaborative problem-solving." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-5 p-4 hover:bg-gray-50 rounded-2xl transition-colors duration-200">
                                            <div className="mt-1 flex-shrink-0 text-blue-600 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/50">
                                                <CheckCircle2 className="size-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-[#00477b] mb-1">{item.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Our Approach */}
            <section className="py-24 lg:py-32 bg-white/10 backdrop-blur-md overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Our Process</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Our Approach — The Gnosys Way</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We don't do "one-size-fits-all." We follow a structured, phased process that ensures predictability, transparency, and top-tier quality from start to launch.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gray-100 z-0">
                            <div className="h-full bg-blue-600/20 w-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                            {[
                                { title: "Discover", desc: "We listen. We learn. We define your core challenges and business objectives to create a tailored strategy.", icon: Search },
                                { title: "Design", desc: "We map user journeys, create wireframes, and design UI/UX that aligns with your brand and converts.", icon: PenTool },
                                { title: "Build", desc: "We code. We build robust, scalable architectures using cutting-edge technologies.", icon: Layout },
                                { title: "Deliver", desc: "We test. We launch. We ensure flawless deployment, optimize for speed, and support your ongoing success.", icon: Target },
                            ].map((step, idx) => (
                                <div key={idx} className="group relative pt-8 lg:pt-0">
                                    <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-transparent items-center justify-center -mt-12 z-10">
                                        <div className="w-16 h-16 bg-white/70 backdrop-blur-md border-4 border-white/60 rounded-full flex items-center justify-center shadow-sm group-hover:border-blue-100 group-hover:scale-110 transition-all duration-300">
                                            <span className="text-xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors">0{idx + 1}</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 h-full lg:mt-16 group-hover:-translate-y-2">
                                        <div className="w-12 h-12 bg-blue-50/50 text-blue-600 rounded-xl flex items-center justify-center mb-6 lg:mx-auto border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <step.icon className="size-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#00477b] mb-4 tracking-tight lg:text-center">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed lg:text-center">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Choose */}
            <section className="py-24 lg:py-32 bg-white/20 backdrop-blur-md">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Why Gnosys</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Why Businesses Choose Gnosys Digital</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { title: "Experts At What We Do", desc: "Our team consists of highly skilled developers, designers, and strategists. We don't settle for average.", icon: Award },
                            { title: "Experience & Requirements", desc: "We bring a deep understanding of multiple industries and technology stacks.", icon: Settings },
                            { title: "Global Resources", desc: "A talented, distributed workforce that allows for round-the-clock progress.", icon: Globe },
                            { title: "Real Results", desc: "We focus on outcomes. We don't just build products; we build tools that drive revenue and efficiency.", icon: Target },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:border-white/80 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                                <div className="p-3.5 bg-blue-50/50 text-blue-600 rounded-2xl inline-flex mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100/50 w-fit">
                                    <item.icon className="size-6" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Story */}
            <section className="py-24 lg:py-32 bg-white/40 backdrop-blur-md border-y border-white/60 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">How It Started</span>
                    </div>
                    <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Our Story</h2>
                    <div className="space-y-8 text-left">
                        <p className="text-xl md:text-2xl text-[#00477b] leading-relaxed font-light text-center lg:text-left">
                            Gnosys Digital started with a simple premise: bridging the gap between innovative technology and real business success.
                        </p>
                        <div className="h-px w-16 bg-blue-200 mx-auto lg:mx-0"></div>
                        <p className="text-lg text-gray-600 leading-relaxed font-normal text-center lg:text-left">
                            We realized that many companies struggled with fragmented digital services—agencies that promised everything but delivered very little value or concrete results. We wanted to build an ecosystem where design meets code, strategy meets execution—a unified digital journey that drives growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* 8. Meet The People */}
            <section className="py-24 lg:py-32 bg-white/10 backdrop-blur-md">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 shadow-sm border border-blue-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#00477b]">Our Team</span>
                        </div>
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Meet The People Behind The Work</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our strength lies in our people. We are a diverse, highly-skilled team that thrives on challenges and is united by a shared passion for delivering exceptional digital solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Priya Menon", role: "Creative Director", desc: "Priya shapes the visual direction and user experience of our projects. She blends aesthetics with strategy." },
                            { name: "Arjun Desai", role: "Lead Developer", desc: "Arjun leads the development team, ensuring robust architecture and seamless integrations." },
                            { name: "Daniel Kim", role: "UI/UX Designer", desc: "Daniel crafts intuitive and engaging interfaces, focusing on user journeys and interaction design." },
                        ].map((person, idx) => (
                            <div key={idx} className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="flex items-center gap-5 mb-6 pb-6 border-b border-gray-200/60">
                                    <div className="w-16 h-16 bg-white border border-gray-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <User className="size-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#00477b] tracking-tight">{person.name}</h3>
                                        <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">{person.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed">{person.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Global Presence & CTA */}
            <section className="flex flex-col lg:flex-row items-stretch border-t border-white/40">
                {/* Left Side: 60% Map Image */}
                <div className="w-full lg:w-[60%] bg-[#082f49] flex items-center justify-center relative overflow-hidden group">
                    <img src="/assets/global-work.webp" alt="Our Global Presence" className="w-full h-auto block object-cover" />
                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
                        <h3 className="text-white/70 text-2xl md:text-3xl lg:text-5xl font-medium  tracking-tight">Global Preference</h3>
                    </div>
                </div>

                {/* Right Side: 40% CTA Text */}
                <div className="w-full lg:w-[40%] bg-white/20 backdrop-blur-md flex flex-col items-center justify-center p-8 lg:p-12 xl:p-16">
                    <div className="w-full max-w-lg text-center">
                        <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">Ready To Work With Us?</h2>
                        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                            Whether you are looking to launch a new digital product, scale your e-commerce operations, or automate your marketing, Gnosys Digital is your partner for digital success.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base font-semibold">
                                Get In Touch
                            </Button>
                            <Button className="bg-white text-[#00477b] border-2 border-gray-200 hover:border-[#00477b] hover:bg-gray-50 px-8 h-14 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-base font-semibold">
                                Explore Services
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
