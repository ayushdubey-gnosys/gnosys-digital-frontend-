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
            <section className="w-full h-[400px] bg-gray-100">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2887.828551408892!2d-79.55835692381273!3d43.6309257711036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37803e1e479d%3A0xc32a41dc563e414c!2s225%20The%20East%20Mall%2C%20Etobicoke%2C%20ON%20M9B%200A9%2C%20Canada!5e0!3m2!1sen!2sin!4v1714470164871!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gnosys Digital Location Map"
                ></iframe>
            </section>

            {/* Contact Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Form Side */}
                        <div className="w-full lg:w-3/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-gray-700">Your Name <span className="text-red-500">*</span></Label>
                                        <Input id="firstName" className="h-11 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b]" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="surname" className="text-gray-700">Your Surname <span className="text-red-500">*</span></Label>
                                        <Input id="surname" className="h-11 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b]" />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-700">Your Email <span className="text-red-500">*</span></Label>
                                        <Input id="email" type="email" className="h-11 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b]" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="website" className="text-gray-700">Website <span className="text-red-500">*</span></Label>
                                        <Input id="website" className="h-11 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b]" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-gray-700">Subject <span className="text-red-500">*</span></Label>
                                    <Input id="subject" className="h-11 rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b]" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-gray-700">Your Message</Label>
                                    <Textarea id="message" className="min-h-[150px] rounded-sm border-gray-300 focus:border-[#00477b] focus:ring-[#00477b]" />
                                </div>

                                <div>
                                    <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 text-sm font-bold shadow-md rounded-sm">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Details Side */}
                        <div className="w-full lg:w-2/5">
                            <div className="lg:pl-10">
                                <h2 className="text-3xl font-bold text-[#00477b] mb-6">Let's Talk</h2>
                                
                                <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
                                
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
