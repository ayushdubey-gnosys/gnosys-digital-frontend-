import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { CheckSquare, Search, PenTool, Layout, Target, Settings, Globe, Award, User, MapPin } from 'lucide-react';

export default function CultureOfChange() {
    return (
        <MainLayout>
            <Head title="About Gnosys Digital - The Studio Behind The Change" />

            {/* 1. Hero Section */}
            <section className="relative bg-[#00477b] text-white overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                        About Gnosys Digital<br/>The Studio Behind The Change
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
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-bold text-[#00477b] mb-4">Our Mission - Simplifying Digital Growth</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Technology is complex. Business growth doesn't have to be. We exist to simplify digital execution for startups, brands and digital agencies.
                            </p>
                            <h3 className="text-2xl font-bold text-[#00477b] mb-4">Our Mission is Simple</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver top-tier digital assets and development resources to you — with out the typical tech headaches.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            {/* Placeholder for the image */}
                            <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/9] bg-slate-200">
                                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. What We Do */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">What We Do</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        We operate on two distinct, structured models — ready-to-use digital products and custom done-for-you digital services.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                            <div className="p-3 bg-blue-50 text-[#00477b] rounded-lg mb-6">
                                <Layout className="size-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Ready-to-Use Digital Products</h3>
                            <p className="text-gray-600 mb-8 flex-grow text-sm leading-relaxed">
                                Pre-built UI templates, code snippets, and UI kits designed to accelerate your development process.
                            </p>
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-6">View Digital Products</Button>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                            <div className="p-3 bg-blue-50 text-[#00477b] rounded-lg mb-6">
                                <Settings className="size-6" />
                            </div>
                            <h3 className="text-xl font-bold text-[#00477b] mb-3">Done-for-You Services</h3>
                            <p className="text-gray-600 mb-8 flex-grow text-sm leading-relaxed">
                                From consulting to custom Web Apps, SaaS development, React Native app development, API integration and backend architecture — we build everything from scratch, focusing on performance.
                            </p>
                            <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-6">Explore Services</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Culture Of Change */}
            <section className="py-20 bg-white border-t border-gray-50">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-6">Our Culture Of Change</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        At Gnosys Digital, innovation is not a buzzword; it's our daily practice. We constantly explore new frameworks, refine our codebases, and embrace agility in a rapidly evolving digital world. We call it "Culture of Change."
                    </p>
                    
                    <div className="bg-white p-8 md:p-12 text-left">
                        <h3 className="text-xl font-bold text-zinc-900 mb-6">What It Means:</h3>
                        <div className="space-y-4">
                            {[
                                "Staying current: We proactively upgrade our tech stack before it's a necessity.",
                                "Designing with purpose: We prioritize clarity, performance, and user-centric design.",
                                "Data-driven decisions: Every pixel, every interaction is backed by data, ensuring maximum impact for our clients.",
                                "Working together: We emphasize open communication, continuous learning, and collaborative problem-solving."
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-[#00477b] bg-blue-50 p-1 rounded">
                                        <CheckSquare className="size-4" />
                                    </div>
                                    <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 mt-10 text-sm italic border-t border-gray-100 pt-6">
                            Our culture empowers everyone to ask questions, challenge assumptions, and constantly evolve — not just because it's good for business, but because it pushes the boundaries of what's possible, keeping us connected, engaged, and ahead of the curve.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Our Approach */}
            <section className="py-20 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">Our Approach — The Gnosys Way</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        We don't do "one-size-fits-all." We follow a structured, phased process that ensures predictability, transparency, and top-tier quality from start to launch.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Discover", desc: "We listen. We learn. We define your core challenges and business objectives to create a tailored strategy.", icon: Search },
                            { title: "Design", desc: "We map user journeys, create wireframes, and design UI/UX that aligns with your brand and converts.", icon: PenTool },
                            { title: "Build", desc: "We code. We build robust, scalable architectures using cutting-edge technologies.", icon: Layout },
                            { title: "Deliver", desc: "We test. We launch. We ensure flawless deployment, optimize for speed, and support your ongoing success.", icon: Target },
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-left hover:-translate-y-1 transition-transform">
                                <h3 className="text-lg font-bold text-[#00477b] mb-3 flex items-center gap-2">
                                    <step.icon className="size-5 text-[#00477b]" />
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-[13px] leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Choose */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-12">Why Choose Gnosys Digital</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Experts At What We Do", desc: "Our team consists of highly skilled developers, designers, and strategists. We don't settle for average.", icon: Award },
                            { title: "Experience & Requirements", desc: "We bring a deep understanding of multiple industries and technology stacks.", icon: Settings },
                            { title: "Global Resources", desc: "A talented, distributed workforce that allows for round-the-clock progress.", icon: Globe },
                            { title: "Real Results", desc: "We focus on outcomes. We don't just build products; we build tools that drive revenue and efficiency.", icon: Target },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-blue-50 text-left hover:border-blue-200 transition-colors">
                                <div className="p-2.5 bg-white text-[#00477b] rounded-md inline-block shadow-sm mb-4">
                                    <item.icon className="size-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-[13px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Story */}
            <section className="py-24 bg-[#00477b] text-white relative overflow-hidden">
                {/* Decorative puzzle pieces background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,0 L100,0 L100,100 L0,100 Z M20,20 C30,20 30,10 40,10 C50,10 50,20 60,20 L80,20 L80,40 C80,50 90,50 90,60 C90,70 80,70 80,80 L80,100 L60,100 C50,100 50,90 40,90 C30,90 30,100 20,100 L0,100 L0,80 C10,80 10,70 0,60 C-10,50 0,40 0,40 L0,20 Z" fill="currentColor" transform="scale(1.5) translate(-10, -10)" />
                    </svg>
                </div>
                
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
                    <p className="text-lg text-blue-100 leading-relaxed font-medium mb-6">
                        Gnosys Digital started with a simple premise: bridging the gap between innovative technology and real business success. We realized that many companies struggled with fragmented digital services—agencies that promised everything but delivered very little value or concrete results.
                    </p>
                    <p className="text-lg text-blue-100 leading-relaxed font-medium">
                        We wanted to build an ecosystem where design meets code, strategy meets execution—a unified digital journey that drives growth.
                    </p>
                </div>
            </section>

            {/* 8. Meet The People */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-4">Meet The People Behind The Work</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-16">
                        Our strength lies in our people. We are a diverse, highly-skilled team that thrives on challenges and is united by a shared passion for delivering exceptional digital solutions.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Priya Menon", role: "Creative Director", desc: "Priya shapes the visual direction and user experience of our projects. She blends aesthetics with strategy." },
                            { name: "Arjun Desai", role: "Lead Developer", desc: "Arjun leads the development team, ensuring robust architecture and seamless integrations." },
                            { name: "Daniel Kim", role: "UI/UX Designer", desc: "Daniel crafts intuitive and engaging interfaces, focusing on user journeys and interaction design." },
                        ].map((person, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-left">
                                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                                    <div className="w-14 h-14 bg-[#00477b]/10 text-[#00477b] rounded-full flex items-center justify-center shrink-0">
                                        <User className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900">{person.name}</h3>
                                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{person.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{person.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Global Presence */}
            <section className="py-24 bg-[#082f49] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")'}}></div>
                <div className="absolute inset-0 bg-[#082f49]/80 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16 text-white">Our Global Presence</h2>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-32">
                        {[
                            { country: "Canada", desc: "HQ & Strategy" },
                            { country: "Switzerland", desc: "European Reach" },
                            { country: "India", desc: "Development Hub" },
                        ].map((loc, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <MapPin className="size-10 text-blue-300 mb-4" />
                                <h3 className="text-xl font-bold mb-1 text-white">{loc.country}</h3>
                                <p className="text-sm text-blue-200">{loc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. CTA */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#00477b] mb-6">Ready To Work With Us?</h2>
                    <p className="text-gray-600 mb-10 text-lg">
                        Whether you are looking to launch a new digital product, scale your e-commerce operations, or automate your marketing, Gnosys Digital is your partner for digital success.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 rounded-sm shadow-md">Digital Strategy</Button>
                        <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 rounded-sm shadow-md">Digital Products</Button>
                        <Button className="bg-white text-[#00477b] border-2 border-[#00477b] hover:bg-blue-50 px-8 h-12 rounded-sm font-semibold">Explore Services</Button>
                        <Button className="bg-white text-[#00477b] border-2 border-[#00477b] hover:bg-blue-50 px-8 h-12 rounded-sm font-semibold">Get In Touch</Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
