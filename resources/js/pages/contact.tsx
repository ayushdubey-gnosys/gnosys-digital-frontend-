import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Globe, Clock, Send, Sparkles, MessageSquare, PhoneCall, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import HeroWaveDivider from '@/components/hero-wave-divider';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us - Gnosys Digital" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="w-full min-h-[440px] md:min-h-[520px] bg-slate-950 relative overflow-hidden flex items-center py-16 md:py-24">
                <div
                    className="absolute inset-0 bg-cover bg-[75%_center] md:bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/assets/contact%20us.webp")' }}
                ></div>

                {/* Subtle soft gradient overlay so text on left is sharp and image on right remains crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 md:via-black/25 to-transparent"></div>

                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px] mx-auto relative z-10 pb-12 md:pb-16">
                    <div className="max-w-3xl text-left space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-blue-200 uppercase">
                            GET IN TOUCH
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white drop-shadow-sm leading-tight tracking-tight">
                            Let’s Build Something That Moves Your Business Forward
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-normal text-zinc-300 drop-shadow-sm leading-relaxed max-w-2xl">
                            At Gnosys Digital, we help businesses turn ideas into scalable digital solutions. Whether you need to streamline operations with ERPNext, automate workflows with AI and data services, grow your online visibility through SEO, or keep your website fast and secure with Managed WordPress, our team is ready to help.
                        </p>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* Contact Content Section */}
            <section className="py-20 lg:py-28 relative">
                <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">

                        {/* Form Side */}
                        <div className="lg:col-span-7">
                            <form className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 transition-all duration-500 h-full flex flex-col justify-between space-y-8 overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                            SEND US A MESSAGE
                                        </span>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#00477b]">
                                            Tell Us About Your Project
                                        </h2>
                                        <p className="text-zinc-600 text-sm sm:text-base mt-2 font-normal">
                                            We'll get back to you with custom insights and a clear path forward within 24 hours.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2.5">
                                                <Label htmlFor="firstName" className="text-[#00477b] font-medium text-sm">Your Name <span className="text-rose-500">*</span></Label>
                                                <Input id="firstName" placeholder="John" className="h-14 bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-800" />
                                            </div>
                                            <div className="space-y-2.5">
                                                <Label htmlFor="surname" className="text-[#00477b] font-medium text-sm">Your Surname <span className="text-rose-500">*</span></Label>
                                                <Input id="surname" placeholder="Doe" className="h-14 bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-800" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2.5">
                                                <Label htmlFor="email" className="text-[#00477b] font-medium text-sm">Your Email <span className="text-rose-500">*</span></Label>
                                                <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-800" />
                                            </div>
                                            <div className="space-y-2.5">
                                                <Label htmlFor="website" className="text-[#00477b] font-medium text-sm">Website URL</Label>
                                                <Input id="website" placeholder="https://example.com" className="h-14 bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-800" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label htmlFor="subject" className="text-[#00477b] font-medium text-sm">Subject <span className="text-rose-500">*</span></Label>
                                            <Input id="subject" placeholder="e.g. ERPNext Implementation or Custom Web App" className="h-14 bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 text-zinc-800" />
                                        </div>

                                        <div className="space-y-2.5">
                                            <Label htmlFor="message" className="text-[#00477b] font-medium text-sm">Your Message <span className="text-rose-500">*</span></Label>
                                            <Textarea id="message" placeholder="Briefly describe your requirements, timeline, and goals..." className="min-h-[140px] bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl shadow-sm focus:border-[#00477b] focus:ring-2 focus:ring-[#00477b]/10 resize-none p-4 text-zinc-800" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-10 h-14 text-base font-semibold shadow-lg shadow-blue-900/10 rounded-full w-full sm:w-auto transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                        <span>Send Message</span>
                                        <Send className="size-4" />
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Details Side */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                            <div className="group relative bg-white/40 backdrop-blur-xl border border-white/70 rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 transition-all duration-500 h-full flex flex-col justify-between space-y-8 overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                <div className="relative z-10">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                        DIRECT CONTACT
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-normal text-[#00477b] mb-4 tracking-tight">
                                        Let's Talk
                                    </h2>
                                    <p className="text-zinc-600 text-base leading-relaxed font-normal mb-8">
                                        Whatever are your digital transformation or marketing needs, big or small, we are here to help. Get in touch with us and discover how Gnosys Digital can scale your business.
                                    </p>

                                    <div className="space-y-4">
                                        {/* Address Card */}
                                        <div className="group relative flex items-start gap-4 p-5 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shrink-0 shadow-md shadow-blue-900/5 relative z-10">
                                                <MapPin className="size-5 text-[#00477b]" strokeWidth={1.5} />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-xs uppercase tracking-wider font-bold text-[#00477b] mb-1">Office Location</h4>
                                                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                                                    1664, 225 The East Mall, Toronto, ON, M9B 0A9
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email Card */}
                                        <div className="group relative flex items-start gap-4 p-5 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shrink-0 shadow-md shadow-blue-900/5 relative z-10">
                                                <Mail className="size-5 text-[#00477b]" strokeWidth={1.5} />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-xs uppercase tracking-wider font-bold text-[#00477b] mb-1">Direct Email</h4>
                                                <a
                                                    href="mailto:connect@gnosysdigital.com"
                                                    className="text-zinc-700 hover:text-[#00477b] font-medium text-sm sm:text-base transition-colors"
                                                >
                                                    connect@gnosysdigital.com
                                                </a>
                                            </div>
                                        </div>

                                        {/* Website Card */}
                                        <div className="group relative flex items-start gap-4 p-5 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shrink-0 shadow-md shadow-blue-900/5 relative z-10">
                                                <Globe className="size-5 text-[#00477b]" strokeWidth={1.5} />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-xs uppercase tracking-wider font-bold text-[#00477b] mb-1">Official Website</h4>
                                                <a
                                                    href="https://gnosysdigital.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-zinc-700 hover:text-[#00477b] font-medium text-sm sm:text-base transition-colors"
                                                >
                                                    gnosysdigital.com
                                                </a>
                                            </div>
                                        </div>

                                        {/* Portfolio Card */}
                                        <a
                                            href="https://portfolio.gnosysdigital.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex items-start gap-4 p-5 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-400 overflow-hidden cursor-pointer"
                                        >
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shrink-0 shadow-md shadow-blue-900/5 relative z-10">
                                                <Briefcase className="size-5 text-[#00477b]" strokeWidth={1.5} />
                                            </div>
                                            <div className="flex-1 relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#00477b] mb-1">Our Portfolio</h4>
                                                    <ExternalLink className="size-3.5 text-[#00477b] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-zinc-700 group-hover:text-[#00477b] font-medium text-sm sm:text-base transition-colors block">
                                                    portfolio.gnosysdigital.com
                                                </span>
                                            </div>
                                        </a>

                                        {/* Response Time Card */}
                                        <div className="group relative flex items-start gap-4 p-5 sm:p-6 bg-white/40 backdrop-blur-xl border border-white/70 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/60 hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
                                            <div className="size-12 rounded-2xl bg-white border border-white flex items-center justify-center text-[#00477b] shrink-0 shadow-md shadow-blue-900/5 relative z-10">
                                                <Clock className="size-5 text-[#00477b]" strokeWidth={1.5} />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="text-xs uppercase tracking-wider font-bold text-[#00477b] mb-1">Working Hours & Response</h4>
                                                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                                                    Mon - Sat | Response within 24 hours
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Dedicated Portfolio Showcase Section */}
            <section className="pb-24 lg:pb-32 relative">
                <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 mx-auto">
                    <div className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl transition-all duration-400 relative overflow-hidden">

                        {/* Ambient subtle glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                            {/* Left Text */}
                            <div className="lg:col-span-8 space-y-6 text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider">
                                    PROVEN TRACK RECORD
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] leading-tight">
                                    Explore Our Work & Digital Craft
                                </h2>
                                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal max-w-3xl">
                                    Discover how we help enterprises and fast-growing businesses design bespoke applications, automate complex ERP workflows, and scale digital products with precision.
                                </p>

                                {/* Feature Badges */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {["ERPNext Implementations", "Custom Web & Mobile Apps", "AI & Workflow Automation", "High-Performance SEO"].map((item, idx) => (
                                        <span key={idx} className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-md border border-white/90 text-[#00477b] shadow-2xs">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Button */}
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                                <a
                                    href="https://portfolio.gnosysdigital.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden bg-[#00477b] hover:bg-[#00335e] text-white px-8 sm:px-10 h-16 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-blue-900/15 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Live Portfolio
                                        <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </a>
                                <span className="text-xs text-zinc-500 mt-3 font-medium text-center">
                                    Opens in new tab &bull; portfolio.gnosysdigital.com
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
