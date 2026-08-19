import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    CheckCircle, ShoppingCart, Box, Truck, CreditCard, 
    TrendingUp, FileText, ClipboardList, Clock, CheckSquare,
    Search, Server, PlayCircle, Settings, Monitor, Headset,
    LayoutDashboard, MapPin
} from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import HeroWaveDivider from '@/components/hero-wave-divider';
import ScrollReveal from '@/components/scroll-reveal';

export default function ErpnextTradingDistribution() {
    return (
        <MainLayout>
            <Head title="ERPNext For Trading & Distribution SMEs" />
            
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-28 lg:pt-36 lg:pb-40 flex items-center justify-center text-center min-h-[85vh] "
                style={{
                    backgroundImage: "url('/assets/erp-treading.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-[#0a2540]/20 z-0"></div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <ScrollReveal animation="fade-up" delay={80}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
                            Streamline Your Wholesale, Retail & Distribution Operations
                        </h1>
                    </ScrollReveal>
                    
                    <ScrollReveal animation="fade-up" delay={180}>
                        <p className="text-lg sm:text-xl text-blue-50 leading-relaxed font-medium mb-12 max-w-3xl mx-auto drop-shadow-md">
                            Manage inventory, orders, logistics and accounting seamlessly from one single platform. Accelerate business growth and customer satisfaction.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={280}>
                        <Button asChild className="group relative overflow-hidden bg-transparent backdrop-blur-md border border-white text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 rounded-full px-10 h-14 text-base font-extrabold transition-all duration-300">
                            <Link href="/free-digital-consultation">
                                <span className="relative z-10 flex items-center gap-2">Get A Free Consultation <span className="text-xl">&rarr;</span></span>
                                <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out z-0" />
                            </Link>
                        </Button>
                    </ScrollReveal>
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
                                    { icon: <Box />, title: "Stock Uncertainty", desc: "Real-time tracking across multiple warehouses." },
                                    { icon: <Settings />, title: "Manual Orders", desc: "Automated order to fulfillment workflows." },
                                    { icon: <Truck />, title: "Logistics Delays", desc: "Optimized dispatch and delivery tracking." },
                                    { icon: <CreditCard />, title: "Payment Delays", desc: "Integrated invoicing and payment gateways." },
                                    { icon: <TrendingUp />, title: "Profitability", desc: "Accurate landed cost calculations." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                        <div className="p-3.5 bg-blue-50/50 text-blue-600 rounded-2xl inline-flex mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100/50">
                                            {React.cloneElement(item.icon, { className: "size-6" })}
                                        </div>
                                        <h3 className="text-base font-semibold text-[#00477b] mb-2 leading-tight">{item.title}</h3>
                                        <p className="text-sm text-zinc-700 font-normal leading-relaxed">{item.desc}</p>
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
                                    "End-to-end Inventory visibility",
                                    "Automated Order Processing",
                                    "Seamless Logistics & Delivery Tracking",
                                    "Integrated Accounting & GST Compliance",
                                    "Multi-Warehouse, Multi-Branch Support",
                                    "Real-time Analytics & Dashboards"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3.5 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:bg-white/90 hover:shadow-md transition-all duration-200">
                                        <div className="flex-shrink-0 size-9 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#00477b] shadow-sm">
                                            <CheckCircle className="size-4" />
                                        </div>
                                        <span className="text-zinc-700 text-sm font-medium leading-tight">{item}</span>
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
                            Key ERPNext Modules
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[
                                { 
                                    icon: <Box />, 
                                    title: "Inventory & Warehousing", 
                                    items: ["Multi-level item trees", "Tracking by serial/batch", "Stock transfers", "Automated re-order levels", "Stock audits"] 
                                },
                                { 
                                    icon: <ShoppingCart />, 
                                    title: "Sales & Order Processing", 
                                    items: ["Quotation to invoice automation", "B2B/B2C pricing rules", "Customer portal", "Sales commissions"] 
                                },
                                { 
                                    icon: <Truck />, 
                                    title: "Logistics & Delivery", 
                                    items: ["Delivery notes", "Integration with 3PL providers", "Fleet tracking & dispatch schedules", "Route planning and vehicle tracking"] 
                                },
                                { 
                                    icon: <FileText />, 
                                    title: "Finance & Accounting", 
                                    items: ["GST/Tax compliance", "Accounts Payable/Receivable", "Multi-currency", "Profitability by item/category"] 
                                }
                            ].map((mod, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center h-full">
                                    <div className="p-3.5 bg-blue-50/50 text-blue-600 rounded-2xl inline-flex mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-blue-100/50">
                                        {React.cloneElement(mod.icon, { className: "size-6" })}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-4">{mod.title}</h3>
                                    <ul className="space-y-2 mt-auto text-left w-full">
                                        {mod.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-zinc-700 font-normal">
                                                <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-0.5 shrink-0">
                                                    <div className="size-1 bg-zinc-600 rounded-full"></div>
                                                </div>
                                                <span className="leading-tight">{item}</span>
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
                                { step: "1", title: "Discovery & Configuration", desc: ["Process mapping, setup taxes, items, and warehouses.", "Custom workflows and dashboards."] },
                                { step: "2", title: "Training & Go-Live", desc: ["Role-based training for sales, inventory, and finance teams.", "Master data upload and system launch."] },
                                { step: "3", title: "Ongoing Support", desc: ["Post go-live stabilization.", "Continuous process refinement and training."] }
                            ].map((phase, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 justify-center">
                                    <div className="bg-white rounded-full size-12 flex items-center justify-center mb-4 shadow-sm text-zinc-800 font-bold text-lg">
                                        {phase.step}
                                    </div>
                                    <h3 className="text-base font-semibold text-[#00477b] mb-4">{phase.title}</h3>
                                    <ul className="space-y-2 mt-auto text-left w-full">
                                        {phase.desc.map((pt, j) => (
                                            <li key={j} className="flex items-start gap-2 text-xs text-zinc-700 font-normal leading-relaxed">
                                                <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                    <div className="size-1 bg-zinc-600 rounded-full"></div>
                                                </div>
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
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Kolkata</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Automated 500+ daily orders, reduced stock-outs by 40%, and improved delivery time by 2 days.</p>
                                </div>
                                <div className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[#00477b] mb-1">Pharma Wholesaler</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold mb-4 uppercase tracking-wider">Mumbai</p>
                                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">Achieved 100% batch traceability and increased order fulfillment rate to 99%.</p>
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
                                { title: "Operational Efficiency", items: ["30% faster order processing", "50% less manual data entry", "99% inventory accuracy"] },
                                { title: "Financial Control", items: ["20% improvement in cash flow", "Automated GST filing & returns", "Real-time tracking of unpaid invoices"] },
                                { title: "Business Growth", items: ["Seamless scaling across new branches", "Better vendor negotiations", "Scalable platform ready for e-commerce"] }
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white/40 backdrop-blur-lg border border-white/60 rounded-2xl p-6 shadow-sm text-center flex flex-col items-center hover:-translate-y-1 hover:bg-white/60 transition-all duration-300 justify-center">
                                    <h3 className="text-lg font-semibold text-[#00477b] mb-4">{benefit.title}</h3>
                                    <ul className="space-y-3 w-full text-left mt-auto">
                                        {benefit.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-zinc-700 font-normal">
                                                <div className="bg-white border border-zinc-200 rounded-full p-0.5 mt-1 shrink-0">
                                                    <div className="size-1 bg-zinc-600 rounded-full"></div>
                                                </div>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Common Trading Challenges */}
                <section className="pt-24 pb-12 text-center relative z-10">
                    <div className="container mx-auto px-4 max-w-[90rem] mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-6">
                            CHALLENGES
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#00477b]">
                            Common Trading Challenges
                        </h2>
                    </div>

                    <div className="bg-white/50 backdrop-blur-2xl border-y border-white/60 pt-12 pb-16 px-4 sm:px-6 lg:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="container mx-auto max-w-[90rem]">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    {
                                        icon: <Server className="size-7" />,
                                        title: "Disconnected Systems",
                                        desc: "Siloed sales, inventory, and accounts causing data discrepancies and manual overhead."
                                    },
                                    {
                                        icon: <Box className="size-7" />,
                                        title: "Inventory Blind Spots",
                                        desc: "Lack of real-time multi-warehouse stock visibility leading to frequent stockouts and lost orders."
                                    },
                                    {
                                        icon: <CreditCard className="size-7" />,
                                        title: "Complex Pricing Margins",
                                        desc: "Complicated customer tiers, volume discounts, and error-prone manual margin calculations."
                                    },
                                    {
                                        icon: <Truck className="size-7" />,
                                        title: "Dispatch & Logistics Delays",
                                        desc: "Inefficient order routing, delayed dispatches, and untracked multi-point deliveries."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>
                                        
                                        <div className="size-16 mb-6 rounded-2xl bg-blue-50/80 text-[#00477b] border border-blue-100/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00477b] group-hover:text-white transition-all duration-300 relative z-10">
                                            {item.icon}
                                        </div>
                                        
                                        <h3 className="text-lg font-bold text-[#00477b] mb-3 leading-snug relative z-10">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 font-medium leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
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
