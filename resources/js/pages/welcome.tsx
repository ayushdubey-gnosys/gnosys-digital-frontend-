import { Link, usePage, Head } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import MainLayout from '@/layouts/main-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

            <MainLayout>
                    {/* Hero Section */}
                    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 flex items-start justify-start text-left min-h-[85vh]">

                        {/* Background Container */}
                        <div className="absolute inset-0 z-0">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('/assets/gnosys-hero.webp')" }}
                            ></div>
                            {/* Overlay: Gradient from left to right */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-100/80 to-transparent"></div>
                            {/* Bottom fade out */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-100 to-transparent"></div>
                        </div>

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

                        {/* Curved Wave Divider (Right side more curved) */}
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none drop-shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] lg:h-[180px] scale-x-[-1]">
                                <path fill="currentColor" className="text-blue-200/80 " d="M0,120 C300,120 500,250 1440,100 L1440,250 L0,250 Z" />
                                <path fill="currentColor" className="text-blue-100" d="M0,160 C400,160 600,250 1440,140 L1440,250 L0,250 Z" />
                            </svg>
                        </div>
                    </section>

                    {/* 1. Core Offerings */}
                    <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
                        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-12">
                            <div className="text-center lg:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">What We Do</span>
                                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900">Our Core Offerings</h2>
                            </div>
                        </div>

                        {/* Edge-to-edge split grid */}
                        <div className="grid lg:grid-cols-2 w-full">
                            {/* Left Side: Cards (No gap, no rounded corners) */}
                            <div className="grid sm:grid-cols-2">
                                {/* Card 1 */}
                                <div className="border border-white/60 border-l-0 p-8 lg:p-12 transition-colors duration-300 hover:bg-white/60 bg-white/40 backdrop-blur-lg flex flex-col items-center text-center">
                                    <div className="size-14 lg:size-16 bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                        <Briefcase className="size-7 lg:size-8" />
                                    </div>
                                    <h4 className="text-xl lg:text-2xl font-bold text-zinc-900 mb-2">In-House Gigs</h4>
                                    <p className="text-xs lg:text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Ready-To-Use Digital Services</p>
                                    <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                                        Web development, SEO, eCommerce, server management, and marketing automation - delivered end-to-end by our team.
                                    </p>
                                    <Button className="mt-auto bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-6 h-12 font-bold w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-zinc-900/30">
                                        View All Gigs
                                    </Button>
                                </div>

                                {/* Card 2 */}
                                <div className="border border-white/60 border-l-0 sm:border-l-0 border-r-0 lg:border-r p-8 lg:p-12 transition-colors duration-300 hover:bg-white/60 bg-white/40 backdrop-blur-lg flex flex-col items-center text-center">
                                    <div className="size-14 lg:size-16 bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                        <Package className="size-7 lg:size-8" />
                                    </div>
                                    <h4 className="text-xl lg:text-2xl font-bold text-zinc-900 mb-2">Digital Products</h4>
                                    <p className="text-xs lg:text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Ready-To-Use Digital Assets</p>
                                    <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                                        Templates, workflows, themes, UI kits, and proven frameworks built to accelerate your business workflows.
                                    </p>
                                    <Button className="mt-auto bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-6 h-12 font-bold w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-zinc-900/30">
                                        Shop Products
                                    </Button>
                                </div>
                            </div>

                            {/* Right Side: Image (No rounded corners) */}
                            <div className="relative border-y border-white/60 overflow-hidden min-h-[400px] lg:min-h-full">
                                <img
                                    src="/assets/mountain.webp"
                                    alt="Digital Offerings"
                                    className="absolute inset-0 w-full h-full object-cover "
                                />
                            </div>
                        </div>
                    </section>

                    {/* 2. Why Choose Gnosys */}
                    <section className="py-24 bg-transparent text-center border-t border-white/40">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">Why Gnosys</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 mb-12">Why Businesses Choose Gnosys Digital</h2>

                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {[
                                    { icon: Users, title: "100% In-House Team", desc: "Designers, developers, and marketers under one roof." },
                                    { icon: Award, title: "Quality Over Volume", desc: "We never outsource. Pure global vendors." },
                                    { icon: Zap, title: "Speed & Precision", desc: "Our agile process ensures 30-70% turnarounds." },
                                    { icon: TrendingUp, title: "Performance First", desc: "Hosting and codebase is tested for maximum scale & speed." },
                                    { icon: Globe, title: "Global Expertise", desc: "Delivering projects across 3 continents." },
                                    { icon: ShieldCheck, title: "Full Ownership", desc: "You get complete control — no hidden fees or lock-ins." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 flex flex-col items-center hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1 transition-all duration-300">
                                        <div className="size-14 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                            <item.icon className="size-6" />
                                        </div>
                                        <h4 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. Culture of Change */}
                    <section className="border-t border-white/40 relative overflow-hidden text-zinc-900" style={{ minHeight: '480px' }}>
                        <div className="flex items-center justify-center w-full min-h-[480px]">
                            {/* Center Text */}
                            <div className="flex-1 flex flex-col items-center justify-center text-center py-24 px-8 lg:px-12 relative z-10">
                                <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 mb-6">Our Culture Of Change</h2>
                                <p className="text-gray-600 font-medium text-md leading-relaxed mb-8 max-w-4xl">
                                    Change isn't a campaign for us - it's our culture. We constantly evolve our tools, design, and strategies to help our clients grow faster in a world that changes every day. At Gnosys Digital, we experiment boldly, execute precisely, and learn endlessly - because progress never stands still.
                                </p>
                                <Button className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                    Read Our Story
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* 4. Featured Gigs */}
                    <section className="py-24 bg-transparent text-left border-t border-white/40">
                        <div className="w-full px-4 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">Featured Gigs</span>
                                <h2 className=" text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 ">Our Top Gigs - Built & Delivered By Experts</h2>
                            </div>
                            <div className="shrink-0">
                                <Button className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                    View All Gigs
                                </Button>
                            </div>
                        </div>

                        <div className="container mx-auto px-4 lg:px-8">
                            <div className="grid md:grid-cols-3 gap-8 w-full">
                                {[
                                    { icon: Code, title: "Laravel", desc: "Expert development & APIs", img: "/assets/larawel.webp" },
                                    { icon: Cpu, title: "AI Automation", desc: "Smart workflow integration", img: "/assets/ai-automation.jpg" },
                                    { icon: Server, title: "Server Setup", desc: "Cloud deployment & scaling", img: "/assets/server-setup.jpg" },
                                ].map((gig, i) => (
                                    <div key={i} className="group relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-4 hover:bg-white/60 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col overflow-hidden">

                                        {/* Image Container with Glow/Glass */}
                                        <div className="relative h-[340px] w-full rounded-3xl overflow-hidden shadow-inner">
                                            {/* Subtle gradient overlay for depth */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                            <img src={gig.img} alt={gig.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />

                                            {/* Icon Floating Badge */}
                                            <div className="absolute top-4 right-4 z-20 size-12 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/40 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                <gig.icon className="size-6 drop-shadow-md" />
                                            </div>

                                            {/* Floating Title over image (optional touch of class) */}
                                            <div className="absolute bottom-4 left-4 right-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 flex justify-between items-end">
                                                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                                    Learn More
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-8 pb-4 px-2 flex flex-col items-center text-center">
                                            <div className="size-12 bg-zinc-100 rounded-2xl flex items-center justify-center shadow-sm border border-zinc-200 text-zinc-800 mb-4 group-hover:scale-110 transition-transform duration-500">
                                                <gig.icon className="size-6" />
                                            </div>
                                            <h4 className="text-2xl font-extrabold text-zinc-900 leading-tight mb-3">{gig.title}</h4>
                                            <p className="text-base text-zinc-600 font-medium leading-relaxed">{gig.desc}</p>
                                        </div>

                                        {/* Hover line indicator */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-full group-hover:w-1/2 transition-all duration-500 ease-out"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 5. Featured Digital Products */}
                    <section className="py-24 bg-transparent text-center border-t border-white/40">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">Featured Digital Products</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 mb-12">Ready-To-Use Digital Products</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="group relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-3 hover:bg-white/60 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col overflow-hidden">

                                        {/* Product Image Placeholder (Gradient Glass) */}
                                        <div className="relative h-48 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 border border-white/50 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Center Icon */}
                                            <div className="size-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/60 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                                <Package className="size-7" />
                                            </div>
                                            <span className="text-[11px] font-bold text-blue-900/50 uppercase tracking-widest relative z-10">Digital Asset</span>

                                            {/* Bestseller Badge (Removed) */}
                                        </div>

                                        {/* Content */}
                                        <div className="pt-6 pb-2 px-3 flex flex-col items-center text-center flex-1">
                                            <h4 className="font-extrabold text-[15px] text-zinc-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                                Premium Digital Product Template {item}
                                            </h4>

                                            {/* Pricing */}
                                            <div className="flex items-end gap-2 mb-6 mt-auto">
                                                <span className="text-gray-400 text-sm line-through font-semibold">$79.00</span>
                                                <span className="font-black text-zinc-900 text-xl tracking-tight">$19.00</span>
                                            </div>

                                            {/* Action Button */}
                                            <Button size="sm" className="w-full bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 border border-gray-200 hover:border-zinc-900 rounded-full h-11 font-bold transition-all duration-300 shadow-sm group-hover:shadow-md">
                                                Add to cart
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button asChild className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-8 h-14 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1">
                                <Link href="/digital-products">Browse All Products</Link>
                            </Button>
                        </div>
                    </section>

                    {/* 6. Solutions by Goal */}
                    <section className="py-24 bg-transparent text-center border-t border-white/40">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">Solutions by Goal</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 mb-12">Solutions Built For Every Digital Goal</h2>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
                                {[
                                    { icon: Rocket, title: "Launch Fast", desc: "For startups & new businesses" },
                                    { icon: TrendingUp, title: "Scale Online Sales", desc: "For eCommerce brands" },
                                    { icon: Settings, title: "Automate Workflows", desc: "For agencies & B2B founders" },
                                    { icon: Eye, title: "Grow Visibility", desc: "For SEO & content-driven teams" },
                                ].map((sol, i) => (
                                    <div key={i} className="flex flex-col items-center group cursor-pointer p-6 rounded-2xl hover:bg-white/40 transition-colors">
                                        <div className="size-16 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300">
                                            <sol.icon className="size-7" />
                                        </div>
                                        <h4 className="font-bold text-zinc-900 mb-1">{sol.title}</h4>
                                        <p className="text-sm font-medium text-gray-600">{sol.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Explore Solutions
                            </Button>
                        </div>
                    </section>

                    {/* 7. Proof & Impact */}
                    <section className="py-24 bg-transparent text-center border-t border-white/40">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">Proof & Impact</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 mb-12">Proven Results. Real Impact.</h2>

                            <div className="flex flex-wrap justify-center divide-x divide-gray-200/50 max-w-4xl mx-auto mb-10 py-10 bg-white/40 backdrop-blur-lg border border-white/60 rounded-3xl shadow-xl shadow-zinc-900/5">
                                {[
                                    { num: "500+", label: "Projects Delivered" },
                                    { num: "90%", label: "Client Retention Rate" },
                                    { num: "3", label: "Global Offices" },
                                    { num: "38%", label: "Avg Increase In Client Conversions" },
                                ].map((stat, i) => (
                                    <div key={i} className="px-6 sm:px-10 flex flex-col items-center">
                                        <div className="text-4xl font-extrabold text-zinc-900 mb-2 drop-shadow-sm">{stat.num}</div>
                                        <div className="text-xs font-bold text-gray-600 uppercase tracking-wider text-center max-w-[120px]">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                View Case Studies
                            </Button>
                        </div>
                    </section>

                    {/* 8. Testimonials */}
                    <section className="py-24 bg-transparent text-center border-t border-white/40">
                        <div className="container mx-auto px-4 lg:px-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-zinc-800 uppercase tracking-wider mb-4">Testimonials</span>
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 mb-12">What Our Clients Say</h2>

                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                                {[
                                    { name: "Daniel Kim", role: "UX Designer", quote: "Elegant design, smooth experience, and incredible flexibility — everything a modern professional needs." },
                                    { name: "Priya Menon", role: "Product Manager", quote: "This platform transformed the way our team collaborates. Intuitive, fast, and reliable!" },
                                    { name: "Arjun Desai", role: "CTO", quote: "We've scaled 3x since adopting this, and I can honestly say it's been the best technical decision we've made." },
                                ].map((test, i) => (
                                    <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 text-left hover:shadow-2xl hover:shadow-zinc-900/10 transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="size-12 rounded-full bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center">
                                                <User className="size-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-zinc-900 text-sm">{test.name}</div>
                                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{test.role}</div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed italic font-medium">"{test.quote}"</p>
                                    </div>
                                ))}
                            </div>
                            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg shadow-zinc-900/20 border border-zinc-800 rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Client Videos
                            </Button>
                        </div>
                    </section>

                    {/* 9. CTA */}
                    <section className="py-28 relative overflow-hidden text-center text-zinc-900 bg-transparent border-t border-white/40">
                        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
                            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-6 text-zinc-900">Ready To Start Something Great?</h2>
                            <p className="text-gray-700 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                                Whether you want to launch a store, scale marketing, or streamline your workflows — Gnosys Digital is your in-house growth partner.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-8 h-14 w-full sm:w-auto font-extrabold shadow-lg shadow-zinc-900/20 border border-zinc-800 hover:-translate-y-1 transition-all duration-300">
                                    Get Started
                                </Button>
                                <Button variant="outline" className="bg-white/60 backdrop-blur-md border border-white/80 text-zinc-900 hover:bg-white rounded-full px-8 h-14 w-full sm:w-auto font-extrabold hover:-translate-y-1 transition-all duration-300 shadow-sm">
                                    Book a Free Consultation
                                </Button>
                            </div>
                        </div>
                    </section>
            </MainLayout>

        </>
    );
}
