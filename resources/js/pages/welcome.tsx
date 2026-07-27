import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    ChevronDown, Search, User, ShoppingBag,
    Briefcase, Package, Users, Award, Zap, TrendingUp,
    Globe, ShieldCheck, Code, Cpu, Server, Rocket, Settings, Eye
} from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage().props as any;

    return (
        <>
            <Head title="Gnosys Digital" />

            <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-200 via-white to-pink-200 text-gray-900 font-sans">
                {/* Header Container */}
                <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 relative">
                    {/* Unified Header Row */}
                    <div>
                        <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4 lg:gap-6">
                            {/* Logo */}
                            <Link href="/" className="shrink-0 transition-transform hover:scale-105">
                                <img src="/gnosysLogo.png" alt="Gnosys Digital" className="h-9 lg:h-10 object-contain" />
                            </Link>

                            {/* Right Side: Links & Icons */}
                            <div className="flex items-center gap-6 xl:gap-8">
                                {/* Navigation Links */}
                                <nav className="hidden xl:flex items-center gap-6 font-medium text-gray-600 text-[14px]">
                                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors py-1 relative group">
                                        Products <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors py-1 relative group">
                                        Services <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors py-1 relative group">
                                        Solutions <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors py-1 relative group">
                                        About Us <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </button>
                                </nav>

                                {/* User & Cart Icons */}
                                <div className="flex items-center gap-2 shrink-0">
                                    <Link href={auth.user ? dashboard() : login()}>
                                        <Button size="icon" className="size-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 shadow-sm transition-all">
                                            <User className="size-4" />
                                            <span className="sr-only">Account</span>
                                        </Button>
                                    </Link>
                                    <Button size="icon" className="size-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 shadow-sm transition-all relative group">
                                        <ShoppingBag className="size-4 group-hover:scale-110 transition-transform" />
                                        <span className="absolute -top-1 -right-1 flex size-[20px] items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                                            0
                                        </span>
                                        <span className="sr-only">Cart</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* True Dual-color outset box-shadow glow */}
                    <div className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500/10 via-pink-200/30 to-blue-500/10 blur-[4px] pointer-events-none z-[-1]"></div>
                </header>

                <main className="flex-1">
                    {/* Hero Section */}
                    <section
                        className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 flex items-start justify-start text-left min-h-[85vh] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/assets/gnosys-hero.webp')" }}
                    >

                        {/* Overlay: Gradient from top-left, masked to fade out after 45% */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 via-green-100 to-white opacity-95 [mask-image:linear-gradient(to_right,black_45%,transparent_100%)]"></div>

                        {/* Bottom fade to seamlessly merge with the next section */}
                        <div className="absolute inset-x-0 bottom-0 h-16 lg:h-24 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>

                        <div className="container relative z-10 mx-auto px-4 lg:px-8">
                            <div className="max-w-3xl space-y-8 flex flex-col items-start">
                                <h1 className="text-5xl font-medium tracking-tight text-zinc-900 sm:text-6xl lg:text-[64px] leading-[1.1] drop-shadow-sm">
                                    Expert-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600/80 to-blue-400">Digital Solutions</span><br />
                                    No Freelancers. <br /> No Outsourcing.
                                </h1>

                                <p className="max-w-xl text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                                    From high-performing websites and automation setups to ready-to-use digital products - we build everything in-house so you can grow with confidence.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto">
                                    <Button size="lg" className="group relative bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/20 rounded-full px-8 h-14 text-[15px] font-semibold w-full sm:w-auto overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-zinc-900/30 border border-zinc-800">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                        <span className="flex items-center gap-2">
                                            Explore Our Gigs
                                            <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </span>
                                    </Button>
                                    <Button size="lg" className="bg-white/80 backdrop-blur-md text-zinc-800 border border-zinc-200/80 hover:bg-white hover:border-zinc-300 hover:text-zinc-950 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 rounded-full px-8 h-14 text-[15px] font-medium w-full sm:w-auto transition-all duration-300 hover:-translate-y-1">
                                        Shop Digital Products
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 1. Core Offerings */}
                    <section className="py-24 bg-white text-center">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">What We Do</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Our Core Offerings</h2>

                            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {/* Card 1 */}
                                <div className="border-2 border-gray-100 rounded-2xl p-10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col items-center">
                                    <div className="size-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                                        <Briefcase className="size-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">In-House Gigs</h4>
                                    <p className="text-sm font-semibold text-blue-500 mb-4 uppercase tracking-wide">Ready-To-Use Digital Services</p>
                                    <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
                                        Web development, SEO, eCommerce, server management, and marketing automation - delivered end-to-end by our team.
                                    </p>
                                    <Button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold w-full sm:w-auto">
                                        View All Gigs
                                    </Button>
                                </div>

                                {/* Card 2 */}
                                <div className="border-2 border-gray-100 rounded-2xl p-10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col items-center">
                                    <div className="size-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                                        <Package className="size-8" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Digital Products</h4>
                                    <p className="text-sm font-semibold text-blue-500 mb-4 uppercase tracking-wide">Ready-To-Use Digital Assets</p>
                                    <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
                                        Templates, workflows, themes, UI kits, and proven frameworks built to accelerate your business workflows.
                                    </p>
                                    <Button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold w-full sm:w-auto">
                                        Shop Products
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Why Choose Gnosys */}
                    <section className="py-24 bg-slate-50 text-center border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200/50 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Why Gnosys</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Why Businesses Choose Gnosys Digital</h2>

                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {[
                                    { icon: Users, title: "100% In-House Team", desc: "Designers, developers, and marketers under one roof." },
                                    { icon: Award, title: "Quality Over Volume", desc: "We never outsource. Pure global vendors." },
                                    { icon: Zap, title: "Speed & Precision", desc: "Our agile process ensures 30-70% turnarounds." },
                                    { icon: TrendingUp, title: "Performance First", desc: "Hosting and codebase is tested for maximum scale & speed." },
                                    { icon: Globe, title: "Global Expertise", desc: "Delivering projects across 3 continents." },
                                    { icon: ShieldCheck, title: "Full Ownership", desc: "You get complete control — no hidden fees or lock-ins." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
                                        <div className="size-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                                            <item.icon className="size-6" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. Culture of Change */}
                    <section className="py-24 bg-white text-center text-gray-900 relative overflow-hidden border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Culture Of Change</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Change is the oxygen for us. It’s our culture. We constantly evolve our tools, design, and strategies to help our clients grow faster in a world that changes every day. At Gnosys Digital, we experiment boldly, execute precisely, and learn endlessly — because progress never stands still.
                            </p>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold shadow-md shadow-blue-500/20">
                                Read Our Story
                            </Button>
                        </div>
                    </section>

                    {/* 4. Featured Gigs */}
                    <section className="py-24 bg-white text-center">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Featured Gigs</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Our Top Gigs — Built & Delivered By Experts</h2>

                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                                {[
                                    { icon: Code, title: "Laravel" },
                                    { icon: Cpu, title: "AI Workflow Automation" },
                                    { icon: Server, title: "Server Setup & Optimization" },
                                ].map((gig, i) => (
                                    <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                                        <div className="size-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                                            <gig.icon className="size-8" />
                                        </div>
                                        <h4 className="font-bold text-lg text-gray-900">{gig.title}</h4>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold shadow-md shadow-blue-500/20">
                                View All Gigs
                            </Button>
                        </div>
                    </section>

                    {/* 5. Featured Digital Products */}
                    <section className="py-24 bg-slate-50 text-center border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200/50 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Featured Digital Products</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Ready-To-Use Digital Products</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="bg-white border-2 border-transparent hover:border-blue-100 rounded-2xl overflow-hidden text-left hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                                        <div className="bg-gray-100 h-40 w-full flex items-center justify-center text-gray-400 text-xs">
                                            [Product Image]
                                        </div>
                                        <div className="p-5 flex flex-col items-center text-center">
                                            <h4 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">Premium Digital Product Template {item}</h4>
                                            <div className="text-gray-400 text-xs line-through">$79.00</div>
                                            <div className="font-extrabold text-blue-500 text-lg mb-4">$19.00</div>
                                            <Button size="sm" className="bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 w-full rounded-full font-bold transition-colors">
                                                Add to cart
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold shadow-md shadow-blue-500/20">
                                Browse All Products
                            </Button>
                        </div>
                    </section>

                    {/* 6. Solutions by Goal */}
                    <section className="py-24 bg-white text-center border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Solutions by Goal</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Solutions Built For Every Digital Goal</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
                                {[
                                    { icon: Rocket, title: "Launch Fast", desc: "For startups & new businesses" },
                                    { icon: TrendingUp, title: "Scale Online Sales", desc: "For eCommerce brands" },
                                    { icon: Settings, title: "Automate Workflows", desc: "For agencies & B2B founders" },
                                    { icon: Eye, title: "Grow Visibility", desc: "For SEO & content-driven teams" },
                                ].map((sol, i) => (
                                    <div key={i} className="flex flex-col items-center group cursor-pointer p-6 rounded-2xl hover:bg-blue-50 transition-colors">
                                        <div className="size-16 rounded-full bg-white border border-blue-100 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                            <sol.icon className="size-7" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-1">{sol.title}</h4>
                                        <p className="text-sm text-gray-500">{sol.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold shadow-md shadow-blue-500/20">
                                Explore Solutions
                            </Button>
                        </div>
                    </section>

                    {/* 7. Proof & Impact */}
                    <section className="py-24 bg-slate-50 text-center border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Proof & Impact</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Proven Results. Real Impact.</h2>

                            <div className="flex flex-wrap justify-center divide-x divide-gray-200 max-w-4xl mx-auto mb-10 border-y border-gray-200 py-10 bg-white rounded-3xl shadow-sm">
                                {[
                                    { num: "500+", label: "Projects Delivered" },
                                    { num: "90%", label: "Client Retention Rate" },
                                    { num: "3", label: "Global Offices" },
                                    { num: "38%", label: "Avg Increase In Client Conversions" },
                                ].map((stat, i) => (
                                    <div key={i} className="px-6 sm:px-10 flex flex-col items-center">
                                        <div className="text-4xl font-extrabold text-blue-500 mb-2 drop-shadow-sm">{stat.num}</div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center max-w-[120px]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 h-12 font-bold shadow-md shadow-blue-500/20">
                                View Case Studies
                            </Button>
                        </div>
                    </section>

                    {/* 8. Testimonials */}
                    <section className="py-24 bg-white text-center border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Testimonials</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>

                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                                {[
                                    { name: "Daniel Kim", role: "UX Designer", quote: "Elegant design, smooth experience, and incredible flexibility — everything a modern professional needs." },
                                    { name: "Priya Menon", role: "Product Manager", quote: "This platform transformed the way our team collaborates. Intuitive, fast, and reliable!" },
                                    { name: "Arjun Desai", role: "CTO", quote: "We've scaled 3x since adopting this, and I can honestly say it's been the best technical decision we've made." },
                                ].map((test, i) => (
                                    <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-left hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="size-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                                                <User className="size-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 text-sm">{test.name}</div>
                                                <div className="text-xs font-medium text-blue-500">{test.role}</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed italic">"{test.quote}"</p>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold rounded-full px-8 h-12 transition-colors">
                                Client Videos
                            </Button>
                        </div>
                    </section>

                    {/* 9. CTA */}
                    <section className="py-28 relative overflow-hidden text-center text-gray-900 bg-white border-t border-gray-100">
                        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready To Start Something Great?</h2>
                            <p className="text-gray-600 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                                Whether you want to launch a store, scale marketing, or streamline your workflows — Gnosys Digital is your in-house growth partner.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-8 h-14 w-full sm:w-auto font-extrabold shadow-md shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="border-2 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-full px-8 h-14 w-full sm:w-auto font-extrabold hover:-translate-y-1 transition-all duration-300">
                                    Book a Free Consultation
                                </Button>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-white pt-16 pb-0 flex flex-col mt-auto text-gray-900 border-t border-gray-100">
                    <div className="container mx-auto px-4 lg:px-8 pb-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1 md:col-span-1">
                                <img src="/gnosysLogo.png" alt="Gnosys Digital" className="h-10 object-contain mb-8 opacity-90" />
                                <div className="text-[13px] text-gray-600 space-y-2.5 leading-relaxed">
                                    <p><strong className="text-gray-900 font-bold">[Address-CA]:</strong> 1664, 225 The East Mall,<br />Toronto, ON, M9B 0A9</p>
                                    <p><strong className="text-gray-900 font-bold">[Address-UK]:</strong> 20-22 Wenlock Road, London<br />N1 7GU, United Kingdom.</p>
                                    <p><strong className="text-gray-900 font-bold">[Phone]:</strong> +1 647 947 9546</p>
                                    <p><strong className="text-gray-900 font-bold">[E-Mail]:</strong> connect@gnosysdigital.com</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-6 text-[15px] uppercase tracking-wider">Digital Services</h4>
                                <ul className="text-[14px] text-gray-600 space-y-3">
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">ERPNext Implementation</a></li>
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">Ai Automation Data Services</a></li>
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">SEO & Growth Services</a></li>
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">Managed WordPress Services</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-6 text-[15px] uppercase tracking-wider">Quick Links</h4>
                                <ul className="text-[14px] text-gray-600 space-y-3">
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">Explore Custom Development</a></li>
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">Explore eCommerce Solutions</a></li>
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us Today</a></li>
                                    <li><a href="#" className="hover:text-blue-500 transition-colors">Mailchimp Newsletter Landing Page</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 mb-6 text-[15px] uppercase tracking-wider">Follow Us</h4>
                                <div className="flex gap-3">
                                    {/* FB */}
                                    <a href="#" className="size-9 bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors rounded-full flex items-center justify-center">
                                        <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    {/* X */}
                                    <a href="#" className="size-9 bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors rounded-full flex items-center justify-center">
                                        <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                    </a>
                                    {/* IG */}
                                    <a href="#" className="size-9 bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white transition-colors rounded-full flex items-center justify-center">
                                        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                    </a>
                                    {/* Pinterest */}
                                    <a href="#" className="size-9 bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-colors rounded-full flex items-center justify-center">
                                        <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z" /></svg>
                                    </a>
                                    {/* LinkedIn */}
                                    <a href="#" className="size-9 bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors rounded-full flex items-center justify-center">
                                        <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Copyright Bar */}
                    <div className="bg-slate-50 text-gray-500 py-4 relative w-full border-t border-gray-200">
                        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center relative">
                            {/* Cookie icon */}
                            <div className="absolute left-4 -top-8 size-[38px] rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-lg border-[3px] border-white">
                                <svg className="size-[20px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 12.5v.01" /><path d="M12 16v.01" /><path d="M11 11v.01" /><path d="M8 14v.01" /></svg>
                            </div>
                            <div className="text-[12px] md:text-sm font-medium">© {new Date().getFullYear()} Gnosys Digital. All rights reserved.</div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
