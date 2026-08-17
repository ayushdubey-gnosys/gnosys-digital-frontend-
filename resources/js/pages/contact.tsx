import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Globe, Clock, Send, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us - Gnosys Digital" />

            {/* Hero Section */}
            <section className="w-full min-h-[440px] md:min-h-[520px] bg-slate-950 relative overflow-hidden flex items-center py-16 md:py-24">
                <div 
                    className="absolute inset-0 bg-cover bg-[75%_center] md:bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/assets/contact%20us.webp")' }}
                ></div>
                
                {/* Subtle soft gradient overlay so text on left is sharp and image on right remains crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 md:via-black/25 to-transparent"></div>
                
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px] mx-auto relative z-10">
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
            </section>

            {/* Contact Content Section */}
            <section className="py-20 lg:py-28 relative">
                <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
                        
                        {/* Form Side */}
                        <div className="lg:col-span-7">
                            <form className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl transition-all duration-400 h-full flex flex-col justify-between space-y-8">
                                <div>
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
                            <div className="bg-gradient-to-br from-white/90 via-white/70 to-white/45 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-2xl transition-all duration-400 h-full flex flex-col justify-between space-y-8">
                                <div>
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
                                        <div className="flex items-start gap-4 p-4 sm:p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:bg-white/80 transition-all">
                                            <div className="size-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shrink-0 shadow-sm">
                                                <MapPin className="size-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#00477b] mb-1">Office Location</h4>
                                                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                                                    1664, 225 The East Mall, Toronto, ON, M9B 0A9
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email Card */}
                                        <div className="flex items-start gap-4 p-4 sm:p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:bg-white/80 transition-all">
                                            <div className="size-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shrink-0 shadow-sm">
                                                <Mail className="size-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#00477b] mb-1">Direct Email</h4>
                                                <a 
                                                    href="mailto:connect@gnosysdigital.com" 
                                                    className="text-zinc-700 hover:text-[#00477b] font-medium text-sm sm:text-base transition-colors"
                                                >
                                                    connect@gnosysdigital.com
                                                </a>
                                            </div>
                                        </div>

                                        {/* Website Card */}
                                        <div className="flex items-start gap-4 p-4 sm:p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:bg-white/80 transition-all">
                                            <div className="size-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shrink-0 shadow-sm">
                                                <Globe className="size-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#00477b] mb-1">Official Website</h4>
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

                                        {/* Response Time Card */}
                                        <div className="flex items-start gap-4 p-4 sm:p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:bg-white/80 transition-all">
                                            <div className="size-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shrink-0 shadow-sm">
                                                <Clock className="size-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#00477b] mb-1">Working Hours & Response</h4>
                                                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                                                    Mon - Fri | Response within 24 hours
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
        </MainLayout>
    );
}
