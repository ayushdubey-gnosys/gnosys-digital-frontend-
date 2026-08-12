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
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
                        {/* Bottom fade out */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                    </div>

                    <div className="container relative z-10 mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl space-y-8 flex flex-col items-start relative z-20">

                            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.05] drop-shadow-lg mt-4">
                                Expert-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-300">Digital Solutions</span><br />
                                No Freelancers. <br /> No Outsourcing.
                            </h1>

                            <p className="max-w-2xl text-lg sm:text-xl text-zinc-300/90 leading-relaxed font-medium">
                                From high-performing websites and automation setups to ready-to-use digital products — we build everything in-house so you can scale effortlessly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto">
                                <Button size="lg" className="group relative bg-white text-[#1677FF] hover:bg-zinc-100 shadow-[0_8px_25px_rgba(255,255,255,0.15)] rounded-2xl px-10 h-16 text-[16px] font-bold w-full sm:w-auto overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.25)] border-0">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    <span className="flex items-center gap-3">
                                        Explore Our Solutions
                                        <svg className="size-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </span>
                                </Button>
                                <Button size="lg" className="bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl px-10 h-16 text-[16px] font-bold w-full sm:w-auto transition-all duration-300 hover:-translate-y-1">
                                    Shop Products
                                </Button>
                            </div>

                            {/* Trust Metrics (Horizontal Row) */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 pt-12 w-full mt-4 border-t border-white/10">
                                {[
                                    { val: "50+", label: "Projects Delivered" },
                                    { val: "100%", label: "In-House Team" },
                                    { val: "12+", label: "Years Experience" },
                                    { val: "24/7", label: "Premium Support" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="text-2xl font-black text-white drop-shadow-md">{stat.val}</div>
                                        <div className="text-[12px] font-bold text-blue-200/70 uppercase tracking-widest mt-1 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
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
                    <div className="container mx-auto px-4 lg:px-8 max-w-7xl mb-16">
                        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-sm text-xs font-bold text-[#00477b] uppercase tracking-widest mb-6">What We Do</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal  tracking-tight text-[#00477b] leading-tight">Our Core Offerings</h2>
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
                                <h4 className="text-xl lg:text-2xl font-bold text-[#00477b] mb-2">In-House Gigs</h4>
                                <p className="text-xs lg:text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Ready-To-Use Digital Services</p>
                                <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                                    Web development, SEO, eCommerce, server management, and marketing automation - delivered end-to-end by our team.
                                </p>
                                <Button className="mt-auto bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-6 h-12 font-bold w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30">
                                    View All Gigs
                                </Button>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-white/60 border-l-0 sm:border-l-0 border-r-0 p-8 lg:p-12 transition-colors duration-300 hover:bg-white/60 bg-white/40 backdrop-blur-lg flex flex-col items-center text-center">
                                <div className="size-14 lg:size-16 bg-white shadow-sm border border-gray-100 text-zinc-900 flex items-center justify-center mb-6">
                                    <Package className="size-7 lg:size-8" />
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold text-[#00477b] mb-2">Digital Products</h4>
                                <p className="text-xs lg:text-sm font-bold text-gray-600 mb-4 uppercase tracking-wider">Ready-To-Use Digital Assets</p>
                                <p className="text-gray-600 text-sm lg:text-base mb-8 leading-relaxed">
                                    Templates, workflows, themes, UI kits, and proven frameworks built to accelerate your business workflows.
                                </p>
                                <Button className="mt-auto bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-6 h-12 font-bold w-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30">
                                    Shop Products
                                </Button>
                            </div>
                        </div>

                        {/* Right Side: Image (Curve on left side) */}
                        <div className="relative border-y border-white/60 bg-white/40 backdrop-blur-lg min-h-[400px] lg:min-h-full flex items-start justify-start text-left px-8 pt-4 pb-8 sm:px-12 sm:pt-6 sm:pb-12">
                            {/* Shadow wrapper */}
                            <div className="absolute inset-0 lg:rounded-l-[2.5rem] shadow-[-15px_0_20px_-5px_rgba(0,0,0,0.3),_-30px_0_60px_-15px_rgba(13,148,136,0.4)] z-0">
                                <div className="absolute inset-0 overflow-hidden lg:rounded-l-[2.5rem]">
                                    <img
                                        src="/assets/mountain.webp"
                                        alt="Digital Offerings"
                                        className="absolute inset-0 w-full h-full object-cover z-0"
                                    />
                                    {/* Overlay to ensure text readability */}
                                    <div className="absolute inset-0 bg-zinc-900/10 z-10"></div>
                                </div>
                            </div>

                            <div className="relative z-20 flex flex-col items-start">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-zinc-300 tracking-tight mb-4 drop-shadow-md">
                                    Build. Transform. Scale.
                                </h3>
                                <p className="text-lg sm:text-xl text-zinc-300/80 font-normal max-w-md drop-shadow">
                                    Taking your business from its digital foundation to its next peak.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Why Choose Gnosys */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Why Gnosys</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Why Businesses Choose Gnosys Digital</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
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
                                    <h4 className="text-lg font-bold text-[#00477b] mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Culture of Change */}
                <section className="border-t border-white/40 relative overflow-hidden text-zinc-900" style={{ minHeight: '480px' }}>
                    {/* Background Container */}
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('/assets/worldmap.webp')" }}
                        ></div>
                        {/* Dark overlay for better text contrast */}
                        <div className="absolute inset-0 bg-zinc-900/40 z-10"></div>
                    </div>

                    <div className="flex items-center justify-center w-full min-h-[480px] relative z-10">
                        {/* Center Text */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center py-24 px-8 lg:px-12">
                            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white drop-shadow-md mb-6">Our Culture Of Change</h2>
                            <p className="text-zinc-300 font-normal text-md sm:text-lg leading-relaxed mb-8 max-w-4xl drop-shadow">
                                Change isn't a campaign for us - it's our culture. We constantly evolve our tools, design, and strategies to help our clients grow faster in a world that changes every day. At Gnosys Digital, we experiment boldly, execute precisely, and learn endlessly - because progress never stands still.
                            </p>
                            <Button className="bg-white hover:bg-zinc-100 text-zinc-900 shadow-lg shadow-black/20 border border-white rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Read Our Story
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 4. Featured Gigs */}
                <section className="pt-24 bg-transparent text-left border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Featured Gigs</span>
                            <h2 className=" text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] ">Our Top Gigs - Built & Delivered By Experts</h2>
                        </div>
                        <div className="shrink-0">
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                View All Gigs
                            </Button>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid md:grid-cols-3 gap-8 w-full max-w-[1800px] mx-auto">
                            {[
                                { icon: Code, title: "Laravel", desc: "Expert development & APIs", img: "/assets/larawel.webp" },
                                { icon: Cpu, title: "AI Automation", desc: "Smart workflow integration", img: "/assets/ai-automation.jpg" },
                                { icon: Server, title: "Server Setup", desc: "Cloud deployment & scaling", img: "/assets/server-setup.jpg" },
                            ].map((gig, i) => (
                                <div key={i} className="group relative bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2rem] p-3 hover:bg-white/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-900/10 flex flex-col overflow-hidden">

                                    {/* Image Container */}
                                    <div className="relative h-[280px] w-full rounded-[1.25rem] overflow-hidden bg-zinc-100/50">
                                        <div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img src={gig.img} alt={gig.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />

                                        {/* Floating Badge over image */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className="bg-white/80 backdrop-blur-md text-zinc-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm border border-white/80 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                Explore Gig
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-6 pb-4 px-3 flex flex-col items-start text-left">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 bg-white/60 backdrop-blur-md rounded-xl flex shrink-0 items-center justify-center border border-white/80 text-zinc-700 shadow-sm">
                                                <gig.icon className="size-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#00477b] tracking-tight mb-1">{gig.title}</h4>
                                                <p className="text-sm text-zinc-500 font-medium leading-relaxed">{gig.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Featured Digital Products */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Featured Digital Products</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Ready-To-Use Digital Products</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 w-full">
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
                                        <h4 className="font-extrabold text-[15px] text-[#00477b] mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                            Premium Digital Product Template {item}
                                        </h4>

                                        {/* Pricing */}
                                        <div className="flex items-end gap-2 mb-6 mt-auto">
                                            <span className="text-gray-400 text-sm line-through font-semibold">$79.00</span>
                                            <span className="font-black text-zinc-900 text-xl tracking-tight">$19.00</span>
                                        </div>

                                        {/* Action Button */}
                                        <Button size="sm" className="w-full bg-white hover:bg-[#00477b] hover:text-white text-zinc-900 border border-gray-200 hover:border-[#00335e] rounded-full h-11 font-bold transition-all duration-300 shadow-sm group-hover:shadow-md">
                                            Add to cart
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <Button asChild className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-14 text-[15px] font-extrabold transition-all duration-300 hover:-translate-y-1">
                                <Link href="/digital-products">Browse All Products</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 6. Solutions by Goal */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Solutions by Goal</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Solutions Built For Every Digital Goal</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10 w-full">
                            {[
                                { icon: Rocket, title: "Launch Fast", desc: "For startups & new businesses" },
                                { icon: TrendingUp, title: "Scale Online Sales", desc: "For eCommerce brands" },
                                { icon: Settings, title: "Automate Workflows", desc: "For agencies & B2B founders" },
                                { icon: Eye, title: "Grow Visibility", desc: "For SEO & content-driven teams" },
                            ].map((sol, i) => (
                                <div key={i} className="group relative bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 hover:bg-white/50 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 flex flex-col items-start text-left overflow-hidden">
                                    {/* Subtle gradient overlay for extra depth */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                                    <div className="relative z-10 size-14 rounded-2xl bg-white shadow-sm border border-white text-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-500">
                                        <sol.icon className="size-6" />
                                    </div>
                                    <h4 className="relative z-10 text-xl font-extrabold text-[#00477b] mb-2 tracking-tight">{sol.title}</h4>
                                    <p className="relative z-10 text-sm font-medium text-zinc-600 leading-relaxed">{sol.desc}</p>
                                </div>
                            ))}
                            </div>
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Explore Solutions
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 7. Proof & Impact */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Proof & Impact</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">Proven Results. Real Impact.</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="flex flex-wrap justify-center divide-x divide-zinc-200/60 max-w-5xl mx-auto mb-10 py-12 bg-white/30 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden relative w-full">
                            {/* Shining Glass Effect */}
                            <div
                                className="absolute top-0 -left-[100%] h-full w-1/2 z-0 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"
                                style={{ animation: 'shimmerGlass 3s infinite' }}
                            />
                            <style>{`
                                @keyframes shimmerGlass {
                                    0% { transform: translateX(-50%) skewX(-20deg); opacity: 0; }
                                    20% { opacity: 1; }
                                    80% { opacity: 1; }
                                    100% { transform: translateX(400%) skewX(-20deg); opacity: 0; }
                                }
                            `}</style>

                            {[
                                { num: "500+", label: "Projects Delivered" },
                                { num: "90%", label: "Client Retention Rate" },
                                { num: "3", label: "Global Offices" },
                                { num: "38%", label: "Avg Increase In Client Conversions" },
                            ].map((stat, i) => (
                                <div key={i} className="px-8 sm:px-14 flex flex-col items-center relative z-10 group cursor-default my-4 sm:my-0">
                                    <div className="text-5xl font-normal text-zinc-900 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">{stat.num}</div>
                                    <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.2em] text-center max-w-[140px] leading-relaxed">{stat.label}</div>
                                </div>
                            ))}
                            </div>
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                View Case Studies
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 8. Testimonials */}
                <section className="pt-24 bg-transparent text-center border-t border-white/40">
                    <div className="w-full px-4 lg:px-8 mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Testimonials</span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b]">What Our Clients Say</h2>
                    </div>

                    <div className="w-full">
                        <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 pt-10 pb-16 px-4 sm:px-8 lg:px-12 shadow-lg shadow-blue-900/5">
                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 w-full">
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
                            <Button className="bg-[#00477b] hover:bg-[#00477b] text-white shadow-lg shadow-blue-900/20 border border-[#00335e] rounded-full px-8 h-12 font-bold transition-all duration-300 hover:-translate-y-1">
                                Client Videos
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 9. CTA */}
                <section
                    className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/get ready.webp')" }}
                >
                    {/* Optional dark overlay so the image is clear but doesn't overpower the text */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-5xl mx-auto py-12 lg:py-24 text-left relative z-10">

                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-xs font-extrabold text-white uppercase tracking-wider mb-6">Let's Connect</span>
                            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight mb-6 text-white max-w-3xl">Ready To Start Something Great?</h2>
                            <p className="text-gray-200 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl font-medium">
                                Whether you want to launch a store, scale marketing, or streamline your workflows — Gnosys Digital is your in-house growth partner.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                                <Button className="bg-white text-zinc-900 hover:bg-gray-100 rounded-full px-10 h-14 w-full sm:w-auto font-bold shadow-xl shadow-black/20 border border-white hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                                    Get Started Today
                                </Button>
                                <Button variant="outline" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 hover:text-white rounded-full px-10 h-14 w-full sm:w-auto font-bold hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-sm">
                                    Book a Free Consultation
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>

        </>
    );
}
