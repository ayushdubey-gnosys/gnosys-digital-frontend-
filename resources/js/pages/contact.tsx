import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact Us" />

            {/* Map Section */}
            <section className="w-full min-h-[400px] md:h-[500px] bg-slate-900 relative overflow-hidden flex items-center py-12 md:py-0">
                <div 
                    className="absolute inset-0 bg-cover bg-[75%_center] md:bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/assets/contact%20us.webp")' }}
                ></div>
                {/* Gradient overlay for text readability on left, image clarity on right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 md:via-black/30 to-transparent"></div>
                
                <div className="w-full px-6 md:px-16 relative z-10">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
                            Let’s Build Something That Moves Your Business Forward
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl font-light text-white/90 drop-shadow-md leading-relaxed">
                            At Gnosys Digital, we help businesses turn ideas into scalable digital solutions. Whether you need to streamline operations with ERPNext, automate workflows with AI and data services, grow your online visibility through SEO, or keep your website fast and secure with Managed WordPress, our team is ready to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Form Side */}
                        <div className="w-full lg:w-3/5">
                            <form className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-900/10 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-gray-700 font-semibold">Your Name <span className="text-red-500">*</span></Label>
                                        <Input id="firstName" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="surname" className="text-gray-700 font-semibold">Your Surname <span className="text-red-500">*</span></Label>
                                        <Input id="surname" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-700 font-semibold">Your Email <span className="text-red-500">*</span></Label>
                                        <Input id="email" type="email" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="website" className="text-gray-700 font-semibold">Website <span className="text-red-500">*</span></Label>
                                        <Input id="website" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject <span className="text-red-500">*</span></Label>
                                    <Input id="subject" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-gray-700 font-semibold">Your Message</Label>
                                    <Textarea id="message" className="min-h-[150px] bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                </div>

                                <div>
                                    <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 text-sm font-bold shadow-lg hover:shadow-xl rounded-full w-full md:w-auto mt-4 transition-all hover:-translate-y-0.5">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Details Side */}
                        <div className="w-full lg:w-2/5">
                            <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-xl h-full flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-[#00477b] mb-6">Let's Talk</h2>
                                
                                <div className="w-16 h-[3px] rounded-full bg-[#00477b] mb-8"></div>
                                
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Whatever are your marketing needs, big or small we are here to help – get in touch with us and see how GnosysDigital can help you to grow your Business.
                                </p>
                                
                                <div className="space-y-3 text-gray-700 text-[15px]">
                                    <p>1664, 225 The East Mall, Toronto, ON, M9B 0A9</p>
                                    <p>
                                        E-Mail:{' '}
                                        <a href="mailto:connect@gnosysdigital.com" className="hover:text-[#00477b] transition-colors">
                                            connect@gnosysdigital.com
                                        </a>
                                    </p>
                                    <p>
                                        Website:{' '}
                                        <a href="https://gnosysdigital.com" target="_blank" rel="noopener noreferrer" className="text-[#00477b] hover:underline">
                                            gnosysdigital.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
