import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    CheckCircle, ShoppingCart, Box, Truck, CreditCard, 
    TrendingUp, FileText, ClipboardList, Clock, CheckSquare,
    Search, Server, PlayCircle, Settings, Monitor, Headset,
    LayoutDashboard, MapPin, Eye, ArrowUpRight
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextTradingDistribution() {
    return (
        <MainLayout>
            <Head title="ERPNext For Trading & Distribution SMEs" />

            {/* Custom Ambient Background */}
            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-blue-200 via-blue-100 to-pink-200 pointer-events-none"></div>
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-36 lg:pt-32 lg:pb-48 flex items-center min-h-[90vh] lg:min-h-[100vh] w-full">
                {/* Background Container */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center lg:bg-[center_right] bg-no-repeat transition-all duration-700"
                        style={{ backgroundImage: "url('/assets/erp-treading.webp')", backgroundColor: '#020b18' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none lg:w-1/2"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1550px]">
                    <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        <ScrollReveal animation="fade-up" delay={80}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00477b]/80 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md backdrop-blur-xs">
                                TRADING & DISTRIBUTION
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                                Streamline Your <br />
                                <span className="text-blue-100 font-normal">Wholesale & Distribution</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={180}>
                            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed font-normal mb-10 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                                Manage inventory, orders, logistics, and accounting seamlessly from one single platform. Accelerate business growth and customer satisfaction.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={280}>
                            <Button asChild className="group relative overflow-hidden bg-[#00477b] hover:bg-[#003355] text-white border border-white/30 hover:shadow-[0_0_25px_rgba(0,71,123,0.6)] hover:scale-105 rounded-full px-8 sm:px-10 h-14 text-sm sm:text-base font-bold shadow-xl transition-all duration-300">
                                <Link href="/free-digital-consultation">
                                    <span className="relative z-10 flex items-center gap-2">Get A Free Consultation <ArrowUpRight className="size-5" /></span>
                                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                                </Link>
                            </Button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Curved Wave Divider */}
                <HeroWaveDivider />
            </section>

            {/* Main Content Wrapper */}
            <div className="bg-transparent">

                {/* 2. Why Trading Businesses Choose Gnosys Digital */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Why Trading Businesses Choose Gnosys Digital
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                                {[
                                    { icon: <Box />, title: "Stock Uncertainty", desc: "Not knowing inventory levels across warehouses" },
                                    { icon: <Settings />, title: "Manual Orders", desc: "Errors in sales orders and invoices" },
                                    { icon: <Truck />, title: "Logistics Chaos", desc: "Difficulty tracking shipments and deliveries" },
                                    { icon: <CreditCard />, title: "Payment Delays", desc: "No clarity on receivables and payables" },
                                    { icon: <Eye />, title: "Poor Visibility", desc: "Lack of real-time data for decisions" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center h-full group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="p-3.5 bg-blue-50/50 text-[#00477b] rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100/50 relative z-10">
                                            {React.cloneElement(item.icon, { className: "size-6" })}
                                        </div>
                                        <h3 className="text-base font-bold text-[#00477b] mb-2 leading-tight relative z-10">{item.title}</h3>
                                        <p className="text-xs text-zinc-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. How ERPNext Transforms Your Business */}
                <section className="relative overflow-hidden w-full flex flex-col lg:flex-row items-stretch bg-white/50 backdrop-blur-2xl border-y border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] my-16">
                    {/* Left Side: Seamless World Map Image (100% 50/50 Cover, Attached to Left) */}
                    <div className="relative w-full lg:w-1/2 min-h-[380px] lg:min-h-[580px]">
                        <div 
                            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat shadow-[15px_0_40px_-10px_rgba(0,71,123,0.15)]" 
                            style={{ backgroundImage: 'url("/assets/world-map.webp")' }}
                        ></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 flex justify-start">
                        <div className="w-full max-w-[800px] py-14 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center space-y-8">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                                    TRANSFORMATION
                                </span>
                                <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                                    How ERPNext Transforms Your Business
                                </h2>
                                <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
                                    Empower your trading enterprise with global visibility, automated fulfillment, and real-time inventory intelligence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Real-time multi-location inventory tracking",
                                    "Automated order-to-invoice processing",
                                    "Integrated logistics and delivery management",
                                    "Smart accounting with automated GST compliance",
                                    "Dashboards for sales, stock, and financial health",
                                    "Faster month-end closing and reconciliation"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3.5 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:bg-white hover:shadow-md transition-all duration-200">
                                        <div className="flex-shrink-0 size-9 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm">
                                            <CheckCircle className="size-4" />
                                        </div>
                                        <span className="text-zinc-700 text-sm font-semibold leading-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2">
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white rounded-full px-8 h-12 shadow-md text-sm font-medium hover:-translate-y-0.5 transition-all w-fit">
                                    Schedule Transformation Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* 4. Key ERPNext Modules For Trading & Distribution */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            MODULES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key ERPNext Modules For Trading & Distribution
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    { 
                                        icon: <FileText className="size-6 text-[#00477b]" />, 
                                        title: "Inventory & Warehousing", 
                                        items: [
                                            "Multi-location stock tracking and stock transfers",
                                            "Batch & expiry management (essential for FMCG & pharma)",
                                            "Automated reorder alerts and stock valuation"
                                        ] 
                                    },
                                    { 
                                        icon: <ShoppingCart className="size-6 text-[#00477b]" />, 
                                        title: "Sales & Order Processing", 
                                        items: [
                                            "Quotation-to-invoice automation",
                                            "Multi-channel order handling (wholesale, retail, online)",
                                            "Customer credit & discount management"
                                        ] 
                                    },
                                    { 
                                        icon: <Box className="size-6 text-[#00477b]" />, 
                                        title: "Logistics & Delivery", 
                                        items: [
                                            "Delivery note management & route optimization",
                                            "Fleet tracking & proof of delivery",
                                            "E-way bill generation and freight automation"
                                        ] 
                                    },
                                    { 
                                        icon: <CreditCard className="size-6 text-[#00477b]" />, 
                                        title: "Finance & Reporting", 
                                        items: [
                                            "Accounts receivable/payable and bank reconciliation",
                                            "Profitability analysis per product/customer"
                                        ] 
                                    }
                                ].map((mod, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-start text-left h-full group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="p-3.5 bg-blue-50/50 rounded-2xl mb-6 border border-blue-100/50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {mod.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-4 relative z-10">{mod.title}</h3>
                                        <ul className="space-y-3 mt-auto text-left w-full relative z-10">
                                            {mod.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-600 font-medium leading-relaxed">
                                                    <span className="text-[#00477b] font-bold mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Implementation Made Simple */}
                <section className="pt-24 pb-12 text-center overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            ROADMAP
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Implementation Made Simple
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { 
                                        step: "1", 
                                        title: "Discovery & Configuration", 
                                        desc: [
                                            "Analyze workflows, inventory, and order processes",
                                            "Configure ERPNext modules and dashboards"
                                        ] 
                                    },
                                    { 
                                        step: "2", 
                                        title: "Training & Go-Live", 
                                        desc: [
                                            "Role-based training for sales, inventory, logistics, and accounts",
                                            "Monitor initial operations and optimize"
                                        ] 
                                    },
                                    { 
                                        step: "3", 
                                        title: "Ongoing Support", 
                                        desc: [
                                            "Regular system health checks",
                                            "Continuous improvements and scalability planning"
                                        ] 
                                    }
                                ].map((phase, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col text-left relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="size-11 rounded-full border border-blue-100 bg-blue-50/70 flex items-center justify-center mb-6 text-[#00477b] font-bold text-base shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {phase.step}
                                        </div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-4 relative z-10">{phase.title}</h3>
                                        <ul className="space-y-3.5 mt-auto w-full relative z-10">
                                            {phase.desc.map((pt, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-600 font-medium leading-relaxed">
                                                    <span className="text-[#00477b] font-bold mt-0.5">•</span>
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Success Stories */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            STORIES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Success Stories
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-5xl">
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[#00477b] mb-1">FMCG Distributor</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Delhi NCR</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Automated stock management reduced stockouts by 70%; month-end closing went from 3 days to 3 hours.</p>
                                </div>
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[#00477b] mb-1">Pharma Wholesaler</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Mumbai</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Batch expiry alerts cut medicine waste by 40%; real-time reporting simplified audits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Key Benefits You'll Experience */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            BENEFITS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Key Benefits You'll Experience
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { 
                                        title: "Operational Efficiency", 
                                        items: [
                                            "60% faster order processing", 
                                            "40% reduction in stockouts", 
                                            "50% faster delivery"
                                        ] 
                                    },
                                    { 
                                        title: "Financial Control", 
                                        items: [
                                            "Real-time cash flow visibility", 
                                            "Automated GST compliance", 
                                            "Accurate profit margins per product/customer"
                                        ] 
                                    },
                                    { 
                                        title: "Business Growth", 
                                        items: [
                                            "Data-driven decisions with dashboards", 
                                            "Better customer service", 
                                            "Scalable platform for future growth"
                                        ] 
                                    }
                                ].map((benefit, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 text-left flex flex-col h-full group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <h3 className="text-lg font-bold text-[#00477b] mb-6 relative z-10">{benefit.title}</h3>
                                        <ul className="space-y-3.5 mt-auto w-full relative z-10">
                                            {benefit.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium leading-relaxed">
                                                    <span className="text-[#00477b] font-bold mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Common Manufacturing Challenges / Distribution Strengths */}
                <section className="py-24 bg-transparent text-center relative z-10 border-t border-white/40">
                    <div className="w-full px-4 mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            WHY GNOSYS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b] mb-4">
                            Common Manufacturing Challenges
                        </h2>
                    </div>

                    <div className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-16 px-0 shadow-lg shadow-blue-900/5 my-8">
                        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                                {[
                                    "40+ distribution business implementations in India",
                                    "ERPNext is configured specifically for trading & distribution",
                                    "Transparent pricing with predictable ROI",
                                    "End-to-end support, including training, updates, and account management"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/80 hover:border-white transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center text-center group min-h-[160px] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>
                                        <div className="bg-blue-50/50 p-3 rounded-2xl mb-4 border border-blue-100/50 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            <CheckCircle className="size-5 text-[#00477b]" />
                                        </div>
                                        <p className="text-sm font-bold text-[#00477b] leading-relaxed relative z-10">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Contact Form + Special Offer Combined */}
                <section className="pt-24 pb-12 relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            GET STARTED
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Trading & Distribution ERP Package
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 lg:px-6 2xl:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="w-full">
                            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">

                                {/* Left Column: Special Offer */}
                                <div className="lg:col-span-5 lg:sticky lg:top-24">
                                    <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                                        <div className="text-center border-b border-zinc-200/60 pb-8 mb-8 relative z-10">
                                            <h3 className="text-[11px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">Package Starts At</h3>
                                            <div className="flex justify-center items-start gap-1 mb-4">
                                                <span className="text-2xl font-bold text-[#00477b] mt-2">₹</span>
                                                <p className="text-6xl font-black text-[#00477b] tracking-tighter">75,000</p>
                                            </div>
                                            <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 text-[#00477b] text-xs font-bold uppercase tracking-widest border border-blue-200/60 shadow-sm">
                                                Ideal for SME distributors
                                            </span>
                                        </div>

                                        <div className="bg-gradient-to-r from-[#00477b]/5 to-transparent rounded-2xl p-5 mb-8 border-l-4 border-[#00477b] relative z-10">
                                            <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                                                Includes core modules: <br/>
                                                <span className="text-[#00477b] font-bold text-base">Inventory, Orders, Accounts, GST</span>
                                            </p>
                                        </div>

                                        <ul className="space-y-4 relative z-10">
                                            {["Up to 5 users (scalable on demand)", "Standard 2-month support", "Vendor portal & app support"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                                                    <div className="size-5 rounded-full bg-[#00477b]/10 flex items-center justify-center shrink-0">
                                                        <CheckCircle className="size-3 text-[#00477b]" />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column: Contact Form */}
                                <div className="lg:col-span-7">
                                    <div className="bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                                        <h3 className="text-2xl font-bold text-[#00477b] mb-2 relative z-10">Tell Us About Your Business</h3>
                                        <p className="text-sm text-zinc-500 font-medium mb-8 relative z-10">Let us understand your operations and recommend the best ERP solution.</p>

                                        <form className="space-y-5 relative z-10">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="fullName" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Full Name</Label>
                                                    <Input id="fullName" placeholder="Enter your full name" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="email" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Email Address</Label>
                                                    <Input id="email" type="email" placeholder="Enter your email" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="phone" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Phone Number</Label>
                                                    <Input id="phone" placeholder="Enter your phone number" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="companyName" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Company Name</Label>
                                                    <Input id="companyName" placeholder="Enter your company name" className="h-12 rounded-2xl bg-white/70 backdrop-blur-md border-white/60 text-zinc-800 text-sm placeholder:text-zinc-400 shadow-inner focus-visible:ring-[#00477b]/30 focus-visible:bg-white" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="industryType" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Industry / Distribution Type</Label>
                                                <select id="industryType" className="w-full h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-2 text-sm text-zinc-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white">
                                                    <option>Select Option</option>
                                                    <option>FMCG</option>
                                                    <option>Electronics</option>
                                                    <option>Pharmaceuticals</option>
                                                    <option>Apparel & Textiles</option>
                                                    <option>Industrial Goods</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="challenges" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Current Challenges / Needs</Label>
                                                <textarea id="challenges" rows={3} placeholder="Please describe the challenges you are facing..." className="w-full rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white"></textarea>
                                            </div>

                                            <div className="space-y-1.5">
                                                <Label htmlFor="contactMethod" className="text-xs font-semibold text-zinc-600 uppercase tracking-wider">Preferred Contact Method</Label>
                                                <select id="contactMethod" className="w-full h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 px-4 py-2 text-sm text-zinc-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00477b]/30 focus:bg-white">
                                                    <option>Choose an option</option>
                                                    <option>Email</option>
                                                    <option>Phone Call</option>
                                                    <option>WhatsApp</option>
                                                </select>
                                            </div>

                                            <div className="pt-4">
                                                <button type="submit" className="w-full bg-gradient-to-r from-[#00477b] to-[#0063a7] text-white font-bold py-4 rounded-2xl shadow-[0_8px_30px_rgba(0,71,123,0.25)] hover:shadow-[0_12px_40px_rgba(0,71,123,0.35)] hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider">
                                                    Request Free Demo →
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                
            </div> {/* End Main Content Wrapper */}
            
        </MainLayout>
    );
}
