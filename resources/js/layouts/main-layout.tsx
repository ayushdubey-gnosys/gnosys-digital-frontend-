import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, ShoppingBag, Menu, ChevronRight, MapPin, Phone, Mail, ArrowUpRight, Cookie } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import CookiePreferencesModal from '@/components/cookie-preferences-modal';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage().props as any;
    const [cartOpen, setCartOpen] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [cookieModalOpen, setCookieModalOpen] = React.useState(false);
    const [showScrollTop, setShowScrollTop] = React.useState(false);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const handleOpenCart = () => {
            setCartOpen(true);
            setTimeout(() => setCartOpen(false), 3000);
        };
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)) : 0;

            setScrollProgress(progress);
            if (scrollY > 150) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener('open-cart', handleOpenCart);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('open-cart', handleOpenCart);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-r from-blue-100 via-blue-50 to-pink-100 text-gray-900 font-sans w-full max-w-full overflow-x-hidden relative">
            {/* Header Container */}
            <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 relative">
                {/* Unified Header Row */}
                <div>
                    <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4 lg:gap-6">
                        {/* Logo */}
                        <Link href="/" className="shrink-0 transition-transform hover:scale-105" aria-label="Gnosys Digital Home">
                            <img src="/gnosysLogo.png" alt="Gnosys Digital Logo" width="160" height="40" className="h-9 lg:h-10 w-auto object-contain" fetchPriority="high" />
                        </Link>

                        {/* Right Side: Links & Icons */}
                        <div className="flex items-center gap-6 xl:gap-8">
                            {/* Navigation Links */}
                            <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-6 font-medium text-gray-600 text-[14px]">
                                {/* Digital Products */}
                                <div className="relative group">
                                    <Link href="/digital-products" className="flex items-center gap-1 hover:text-[#00477b] group-hover:text-[#00477b] transition-colors py-1 relative focus:outline-none">
                                        Digital Products <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#00477b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </Link>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 overflow-hidden flex flex-col">
                                            <Link href="/digital-products/ai-tools-automation-packs" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">AI Tools & Automation Packs</Link>
                                            <Link href="/digital-products/ebooks-guides" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">eBooks & Guides</Link>
                                            <Link href="/digital-products/hosting-add-ons" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Hosting Add-ons</Link>
                                            <Link href="/digital-products/marketing-kits" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Marketing Kits</Link>
                                            <Link href="/digital-products/templates-frameworks" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Templates & Frameworks</Link>
                                            <Link href="/digital-products/wordpress-themes-plugins" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">WordPress Themes & Plugins</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Digital Services */}
                                <div className="relative group">
                                    <Link href="/digital-services" className="flex items-center gap-1 hover:text-[#00477b] group-hover:text-[#00477b] transition-colors py-1 relative focus:outline-none">
                                        Digital Services <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#00477b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </Link>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 overflow-hidden flex flex-col">
                                            <Link href="/digital-services/custom-development" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Custom Development</Link>
                                            <Link href="/digital-services/digital-marketing" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Digital Marketing</Link>
                                            <Link href="/digital-services/ecommerce-development" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">eCommerce Development</Link>
                                            <Link href="/digital-services/ecommerce-operations-support" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">eCommerce Operations Support</Link>
                                            <Link href="/digital-services/seo-content" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">SEO & Content</Link>
                                            <Link href="/digital-services/server-devops" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Server & Devops</Link>
                                            <Link href="/digital-services/social-media-management" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Social Media Management</Link>
                                            <Link href="/digital-services/web-app-development" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Web & App Development</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Solutions */}
                                <div className="relative group">
                                    <Link href="/solutions" className="flex items-center gap-1 hover:text-[#00477b] group-hover:text-[#00477b] transition-colors py-1 relative focus:outline-none">
                                        Solutions <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#00477b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </Link>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 flex flex-col">
                                            <div className="relative group/sub">
                                                <Link href="/erpnext-implementation" className="py-3 px-5 cursor-pointer flex justify-between items-center hover:bg-[#00477b] hover:text-white text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 group-hover/sub:bg-[#00477b] group-hover/sub:text-white rounded-t-md">
                                                    ERPNext Implementation <ChevronDown className="size-3.5 -rotate-90 opacity-50 group-hover/sub:opacity-100 group-hover/sub:text-white" />
                                                </Link>

                                                {/* Nested Dropdown */}
                                                <div className="absolute top-0 right-full pr-0 opacity-0 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto transition-opacity duration-200 z-[60]">
                                                    <div className="w-[280px] bg-white rounded-md shadow-2xl border border-gray-100 p-0 flex flex-col overflow-hidden">
                                                        <Link href="/solutions/erpnext-healthcare" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext For Healthcare</Link>
                                                        <Link href="/solutions/epc-project-control" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">EPC Project Control with ERPNext</Link>
                                                        <Link href="/solutions/erpnext-ecommerce" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for E-commerce</Link>
                                                        <Link href="/solutions/erpnext-restaurants" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Restaurants</Link>
                                                        <Link href="/solutions/erpnext-education" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Education Institutions</Link>
                                                        <Link href="/solutions/erpnext-financial" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Financial Services</Link>
                                                        <Link href="/solutions/erpnext-nonprofits" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Non-Profits & NGOs</Link>
                                                        <Link href="/solutions/erpnext-professional-services" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Professional Services Firms</Link>
                                                        <Link href="/solutions/erpnext-retail" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Retail SMEs</Link>
                                                        <Link href="/solutions/erpnext-trading" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Trading & Distribution SMEs</Link>
                                                        <Link href="/solutions/erpnext-manufacturing" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors last:border-b-0">ERPNext Solutions for Manufacturing SMEs</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/solutions/channel-distribution" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Channel & Distribution</Link>
                                            <Link href="/solutions/custom-manufacturing" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Custom Manufacturing</Link>
                                            <Link href="/solutions/custom-warehouse" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Custom Warehouse & Inventory</Link>
                                            <Link href="/solutions/supply-chain" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Supply Chain & Logistics</Link>
                                            <Link href="/solutions/seo-services" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">SEO Services</Link>
                                            <Link href="/solutions/case-study" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Case Study</Link>
                                            <Link href="/solutions/blog" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Blog</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* About Us */}
                                <div className="relative group">
                                    <button aria-label="About Us navigation" className="flex items-center gap-1 hover:text-[#00477b] group-hover:text-[#00477b] transition-colors py-1 relative focus:outline-none">
                                        About Us <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#00477b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </button>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 overflow-hidden flex flex-col">
                                            <Link href="/about/culture-of-change" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Culture Of Change</Link>
                                            <Link href="/about/engagement-models" className="py-3 px-5 hover:bg-slate-50 hover:text-[#00477b] text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Engagement Models</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Us */}
                                <div className="relative group">
                                    <Link href="/contact" className="flex items-center gap-1 hover:text-[#00477b] group-hover:text-[#00477b] transition-colors py-1 relative focus:outline-none">
                                        Contact Us
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#00477b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </Link>
                                </div>
                            </nav>

                            {/* User & Cart Icons */}
                            <div className="flex items-center gap-2 shrink-0">

                                {/* Mobile Menu Trigger */}
                                <div className="xl:hidden block">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        aria-label="Toggle navigation menu"
                                        className="size-10 rounded-full border-gray-200 text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    >
                                        <Menu className="size-5" />
                                    </Button>
                                </div>

                                <Link href={auth?.user ? dashboard() : login()} aria-label="User Account" className="block">
                                    <Button size="icon" aria-label="User Account" className="size-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 shadow-sm transition-all">
                                        <User className="size-4" />
                                        <span className="sr-only">Account</span>
                                    </Button>
                                </Link>

                                <div className="relative group/cart">
                                    <Button size="icon" aria-label="Shopping Cart" className="size-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 shadow-sm transition-all relative">
                                        <ShoppingBag className="size-4 group-hover/cart:scale-110 transition-transform" />
                                        <span className="absolute -top-1 -right-1 flex size-[20px] items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                                            2
                                        </span>
                                        <span className="sr-only">Cart</span>
                                    </Button>

                                    {/* Cart Dropdown */}
                                    <div className={`absolute top-full right-0 pt-4 transition-all duration-300 z-50 ${cartOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none group-hover/cart:opacity-100 group-hover/cart:translate-y-0 group-hover/cart:pointer-events-auto'}`}>
                                        <div className="w-[360px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-200/60 p-6 flex flex-col">

                                            <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
                                                <h3 className="font-bold text-gray-900 text-[15px]">Shopping Cart</h3>
                                                <span className="bg-blue-50 text-[#00477b] text-xs font-bold px-2.5 py-0.5 rounded-full">2 Items</span>
                                            </div>

                                            <div className="flex flex-col gap-5 max-h-[300px] overflow-y-auto pr-1">
                                                {/* Item 1 */}
                                                <div className="flex gap-4 relative group/item">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-blue-100/50 shadow-sm text-[9px] text-[#00477b] text-center font-bold px-1 leading-tight">
                                                        Affiliate Template
                                                    </div>
                                                    <div className="flex flex-col justify-center flex-1 pr-6">
                                                        <Link href="#" className="text-[13.5px] font-semibold text-gray-800 hover:text-[#00477b] transition-colors leading-snug mb-1 line-clamp-2">
                                                            Affiliate Marketing Landing Page Template
                                                        </Link>
                                                        <div className="text-gray-500 text-[13px] font-medium">1 &times; <span className="text-gray-900 font-bold">$6.99</span></div>
                                                    </div>
                                                    <button aria-label="Remove Affiliate Marketing Landing Page Template from cart" className="absolute top-1/2 -translate-y-1/2 -right-1 text-gray-300 hover:text-red-500 hover:bg-red-50 size-7 rounded-full flex items-center justify-center transition-all opacity-0 group-hover/item:opacity-100" title="Remove item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                    </button>
                                                </div>

                                                {/* Item 2 */}
                                                <div className="flex gap-4 relative group/item">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/50 shadow-sm text-[9px] text-slate-700 text-center font-bold px-1 leading-tight">
                                                        Agency Suite
                                                    </div>
                                                    <div className="flex flex-col justify-center flex-1 pr-6">
                                                        <Link href="#" className="text-[13.5px] font-semibold text-gray-800 hover:text-[#00477b] transition-colors leading-snug mb-1 line-clamp-2">
                                                            Agency Project Management Suite
                                                        </Link>
                                                        <div className="text-gray-500 text-[13px] font-medium">1 &times; <span className="text-gray-900 font-bold">$29.99</span></div>
                                                    </div>
                                                    <button aria-label="Remove Agency Project Management Suite from cart" className="absolute top-1/2 -translate-y-1/2 -right-1 text-gray-300 hover:text-red-500 hover:bg-red-50 size-7 rounded-full flex items-center justify-center transition-all opacity-0 group-hover/item:opacity-100" title="Remove item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Subtotal */}
                                            <div className="flex justify-between items-center py-4 mt-4 border-t border-gray-100">
                                                <span className="font-medium text-[14px] text-gray-500">Subtotal</span>
                                                <span className="font-black text-xl text-gray-900">$36.98</span>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex flex-col gap-2 mt-2">
                                                <Link href="/cart" className="w-full">
                                                    <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-xl h-11 text-[14px] font-bold shadow-md shadow-[#00477b]/20 hover:shadow-lg transition-all hover:-translate-y-0.5">
                                                        Checkout
                                                    </Button>
                                                </Link>
                                                <Link href="/cart" className="w-full">
                                                    <Button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl h-11 text-[14px] font-bold shadow-sm transition-all">
                                                        View cart
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="xl:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-blue-50 to-white shadow-[0_20px_40px_rgb(0,0,0,0.1)] border-t border-blue-100 flex flex-col max-h-[85vh] overflow-y-auto z-40">
                        <div className="flex-1 px-4 py-4 flex flex-col gap-2">
                            <Collapsible className="w-full">
                                <CollapsibleTrigger
                                    className="flex w-full items-center justify-between py-3 px-4 font-semibold text-[15px] text-gray-800 rounded-xl hover:bg-white/80 transition-colors"
                                    onDoubleClick={() => { router.visit('/digital-products'); setMobileMenuOpen(false); }}
                                >
                                    Digital Products
                                    <ChevronDown className="size-4 text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-2 flex flex-col gap-2 bg-white/60 rounded-b-xl border-t border-blue-100/50">
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-products/ai-tools-automation-packs" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">AI Tools & Automation Packs</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-products/ebooks-guides" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">eBooks & Guides</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-products/hosting-add-ons" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Hosting Add-ons</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-products/marketing-kits" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Marketing Kits</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-products/templates-frameworks" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Templates & Frameworks</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-products/wordpress-themes-plugins" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">WordPress Themes & Plugins</Link>
                                </CollapsibleContent>
                            </Collapsible>

                            <Collapsible className="w-full">
                                <CollapsibleTrigger
                                    className="flex w-full items-center justify-between py-3 px-4 font-semibold text-[15px] text-gray-800 rounded-xl hover:bg-white/80 transition-colors"
                                    onDoubleClick={() => { router.visit('/digital-services'); setMobileMenuOpen(false); }}
                                >
                                    Digital Services
                                    <ChevronDown className="size-4 text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-2 flex flex-col gap-2 bg-white/60 rounded-b-xl border-t border-blue-100/50">
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-services/custom-development" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Custom Development</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-services/digital-marketing" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Digital Marketing</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-services/ecommerce-development" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">eCommerce Development</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-services/seo-content" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">SEO & Content</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/digital-services/server-devops" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Server & Devops</Link>
                                </CollapsibleContent>
                            </Collapsible>

                            <Collapsible className="w-full">
                                <CollapsibleTrigger
                                    className="flex w-full items-center justify-between py-3 px-4 font-semibold text-[15px] text-gray-800 rounded-xl hover:bg-white/80 transition-colors"
                                    onDoubleClick={() => { router.visit('/solutions'); setMobileMenuOpen(false); }}
                                >
                                    Solutions
                                    <ChevronDown className="size-4 text-gray-400" />
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-2 flex flex-col gap-2 bg-white/60 rounded-b-xl border-t border-blue-100/50">
                                    <Collapsible className="w-full">
                                        <CollapsibleTrigger
                                            className="flex w-full items-center justify-between py-2 text-[14px] font-medium text-gray-700 hover:text-blue-600 transition-colors"
                                            onDoubleClick={() => { router.visit('/erpnext-implementation'); setMobileMenuOpen(false); }}
                                        >
                                            ERPNext Implementation
                                            <ChevronDown className="size-3.5 text-gray-400" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="pl-4 py-1 flex flex-col gap-2 border-l border-blue-200 ml-2 mt-1 mb-2">
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-healthcare" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext For Healthcare</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/epc-project-control" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">EPC Project Control with ERPNext</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-ecommerce" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for E-commerce</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-restaurants" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Restaurants</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-education" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Education Institutions</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-financial" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Financial Services</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-nonprofits" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Non-Profits & NGOs</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-professional-services" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Professional Services Firms</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-retail" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Retail SMEs</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-trading" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext for Trading & Distribution SMEs</Link>
                                            <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/erpnext-manufacturing" className="py-1.5 text-[13px] text-gray-500 hover:text-blue-600">ERPNext Solutions for Manufacturing SMEs</Link>
                                        </CollapsibleContent>
                                    </Collapsible>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/channel-distribution" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Channel & Distribution</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/custom-manufacturing" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Custom Manufacturing</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/supply-chain" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">Supply Chain & Logistics</Link>
                                    <Link onClick={() => setMobileMenuOpen(false)} href="/solutions/seo-services" className="py-2 text-[14px] text-gray-600 hover:text-blue-600">SEO Services</Link>
                                </CollapsibleContent>
                            </Collapsible>

                            <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="flex w-full items-center justify-between py-3 px-4 font-semibold text-[15px] text-gray-800 rounded-xl hover:bg-white/80 transition-colors">
                                About Us
                                <ChevronRight className="size-4 text-gray-300" />
                            </Link>

                            <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="flex w-full items-center justify-between py-3 px-4 font-semibold text-[15px] text-gray-800 rounded-xl hover:bg-white/80 transition-colors">
                                Contact Us
                                <ChevronRight className="size-4 text-gray-300" />
                            </Link>
                        </div>
                        <div className="p-6 border-t border-blue-100/50 bg-white/60">
                            <Link onClick={() => setMobileMenuOpen(false)} href={auth?.user ? dashboard() : login()}>
                                <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white">
                                    <User className="mr-2 size-4" />
                                    {auth?.user ? 'Dashboard' : 'Sign In'}
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}

                {/* True Dual-color outset box-shadow glow */}
                <div className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500/10 via-pink-200/30 to-blue-500/10 blur-[4px] pointer-events-none z-[-1]"></div>
            </header>

            <main key={usePage().url} className="flex-1 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
                {children}
            </main>

            {/* Footer - Project Theme Aligned */}
            <footer className="bg-transparent pt-8 sm:pt-10 pb-0 flex flex-col mt-auto text-zinc-900 border-t border-white/60 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-0 text-left">
                    {/* Top-Left Gnosys Logo with Compact Padding */}
                    <div className="mb-6 sm:mb-8">
                        <Link 
                            href="/" 
                            aria-label="Gnosys Digital Home" 
                            className="inline-block cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <img 
                                src="/gnosysLogo.png" 
                                alt="Gnosys Digital Logo" 
                                width="300" 
                                height="75" 
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
                                loading="lazy" 
                                decoding="async" 
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        {/* 1. Brand & Contact */}
                        <div className="flex flex-col items-start w-full">
                            <h4 className="font-bold text-[#00477b] mb-4 sm:mb-6 text-[14px] md:text-[15px] uppercase tracking-wider">Our Offices</h4>
                            <div className="text-[13px] text-gray-700 space-y-3 leading-relaxed w-full">
                                {/* Canada Office */}
                                <div className="flex items-start gap-2">
                                    <MapPin className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                    <p><strong className="text-[#00477b] font-bold">Canada Office:</strong> 1664, 225 The East Mall, Toronto, ON, M9B 0A9</p>
                                </div>

                                {/* UK Office */}
                                <div className="flex items-start gap-2">
                                    <MapPin className="size-4 text-[#00477b] shrink-0 mt-0.5" />
                                    <p><strong className="text-[#00477b] font-bold">UK Office:</strong> 20-22 Wenlock Road, London N1 7GU, United Kingdom.</p>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-2">
                                    <Phone className="size-4 text-[#00477b] shrink-0" />
                                    <p><strong className="text-[#00477b] font-bold">Phone:</strong> <a href="tel:+16479479546" className="text-gray-700 hover:text-[#00477b] transition-colors font-medium">+1 647 947 9546</a></p>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-2">
                                    <Mail className="size-4 text-[#00477b] shrink-0" />
                                    <p><strong className="text-[#00477b] font-bold">Email:</strong> <a href="mailto:connect@gnosysdigital.com" className="text-gray-700 hover:text-[#00477b] transition-colors font-medium break-all">connect@gnosysdigital.com</a></p>
                                </div>
                            </div>
                        </div>

                        {/* 2 & 3. Digital Services & Quick Links (2-Column Grid on Mobile to fill width) */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:contents">
                            {/* 2. Digital Services */}
                            <div>
                                <h4 className="font-bold text-[#00477b] mb-4 sm:mb-6 text-[14px] md:text-[15px] uppercase tracking-wider">Digital Services</h4>
                                <ul className="text-[13px] md:text-[14px] text-gray-700 space-y-2.5 sm:space-y-3 font-medium">
                                    <li><Link href="/digital-services/erpnext-implementation" className="hover:text-[#00477b] transition-colors">ERPNext Implementation</Link></li>
                                    <li><Link href="/digital-services/ai-automation-data-services" className="hover:text-[#00477b] transition-colors">AI Automation & Data Services</Link></li>
                                    <li><Link href="/digital-services/seo-growth-services" className="hover:text-[#00477b] transition-colors">SEO & Growth Services</Link></li>
                                    <li><Link href="/digital-services/managed-wordpress-services" className="hover:text-[#00477b] transition-colors">Managed WordPress Services</Link></li>
                                </ul>
                            </div>

                            {/* 3. Quick Links */}
                            <div>
                                <h4 className="font-bold text-[#00477b] mb-4 sm:mb-6 text-[14px] md:text-[15px] uppercase tracking-wider">Quick Links</h4>
                                <ul className="text-[13px] md:text-[14px] text-gray-700 space-y-2.5 sm:space-y-3 font-medium">
                                    <li><Link href="/digital-services/custom-development" className="hover:text-[#00477b] transition-colors">Explore Custom Development</Link></li>
                                    <li><Link href="/digital-services/ecommerce-development" className="hover:text-[#00477b] transition-colors">Explore eCommerce Solutions</Link></li>
                                    <li><Link href="/about/contact" className="hover:text-[#00477b] transition-colors">Contact Us Today</Link></li>
                                    <li><Link href="/delivery-engagement-models" className="hover:text-[#00477b] transition-colors">Delivery & Engagement Models</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. Follow Us (Facebook, X, Instagram, LinkedIn, Pinterest) */}
                        <div className="flex flex-col items-start w-full">
                            <h4 className="font-bold text-[#00477b] mb-4 sm:mb-6 text-[14px] md:text-[15px] uppercase tracking-wider">Follow Us</h4>
                            <div className="flex gap-2.5 flex-wrap justify-start">
                                {/* FB - Authentic Blue */}
                                <a 
                                    href="https://facebook.com/gnosys.digital/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Gnosys Digital on Facebook" 
                                    className="size-9 bg-[#1877F2] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_2px_8px_rgba(24,119,242,0.35)] hover:shadow-[0_4px_16px_rgba(24,119,242,0.55)] cursor-pointer"
                                >
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>

                                {/* X - Authentic Black */}
                                <a 
                                    href="https://twitter.com/GnosysDigital" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Gnosys Digital on X" 
                                    className="size-9 bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.45)] cursor-pointer"
                                >
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                </a>

                                {/* IG - Authentic Gradient (Orange-Red-Purple) */}
                                <a 
                                    href="https://www.instagram.com/gnosysdigital/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Gnosys Digital on Instagram" 
                                    className="size-9 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_2px_8px_rgba(220,39,67,0.35)] hover:shadow-[0_4px_16px_rgba(220,39,67,0.55)] cursor-pointer"
                                >
                                    <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                </a>

                                {/* LinkedIn - Authentic Blue */}
                                <a 
                                    href="https://www.linkedin.com/company/gnosys-digital/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Gnosys Digital on LinkedIn" 
                                    className="size-9 bg-[#0A66C2] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_2px_8px_rgba(10,102,194,0.35)] hover:shadow-[0_4px_16px_rgba(10,102,194,0.55)] cursor-pointer"
                                >
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>

                                {/* Pinterest - Authentic Red */}
                                <a 
                                    href="https://pinterest.com/GnosysDigital/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Follow Gnosys Digital on Pinterest" 
                                    className="size-9 bg-[#E60023] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_2px_8px_rgba(230,0,35,0.35)] hover:shadow-[0_4px_16px_rgba(230,0,35,0.55)] cursor-pointer"
                                >
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>
                                </a>
                            </div>

                            {/* Visit Our Portfolio Button Link - Theme Gradient Aligned (Enlarged) */}
                            <div className="mt-6 sm:mt-8 flex flex-col items-start w-full">
                                <a 
                                    href="https://portfolio.gnosysdigital.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="group relative inline-flex items-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-100 via-blue-50 to-pink-100 text-[#00477b] text-[15px] sm:text-base font-bold tracking-wide shadow-[0_4px_14px_rgba(0,71,123,0.08),0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,71,123,0.14)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer"
                                >
                                    {/* Shimmer light sweep animation on hover */}
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></span>

                                    <span>Visit Our Portfolio</span>

                                    <svg className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00477b] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clearly Visible 3-Layer Dynamic Curved Wave Divider (Matching Hero Section Multi-Layer Style) */}
                <div className="w-full overflow-hidden leading-[0] pointer-events-none relative z-10 -mb-2 mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 250"
                        preserveAspectRatio="none"
                        className="w-full h-[52px] sm:h-[75px] lg:h-[95px]"
                    >
                  <defs>
    {/* Layer 1 — Deep / Background Wave */}
    <linearGradient
        id="footerWaveLayer1"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
    >
        <stop offset="0%" stopColor="#FCE7F3" stopOpacity="0.55" />
        <stop offset="50%" stopColor="#DBEAFE" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.55" />
    </linearGradient>

    {/* Layer 2 — Middle Wave */}
    <linearGradient
        id="footerWaveLayer2"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
    >
        <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#E0E7FF" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.8" />
    </linearGradient>

    {/* Layer 3 — Foreground / Main Wave */}
    <linearGradient
        id="footerWaveLayer3"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
    >
        <stop offset="0%" stopColor="#FCE7F3" stopOpacity="1" />
        <stop offset="50%" stopColor="#EEF2FF" stopOpacity="1" />
        <stop offset="100%" stopColor="#DBEAFE" stopOpacity="1" />
    </linearGradient>
</defs>

                        {/* Layer 1: Background flowing wave */}
                        <path
                            fill="url(#footerWaveLayer1)"
                            d="M0,80 C320,170 640,20 1440,70 L1440,500 L0,500 Z"
                        />

                        {/* Layer 2: Mid-depth flowing wave */}
                        <path
                            fill="url(#footerWaveLayer2)"
                            d="M0,120 C380,50 720,190 1440,110 L1440,500 L0,500 Z"
                        />

                        {/* Layer 3: Foreground solid wave connecting into copyright bar */}
                        <path
                            fill="url(#footerWaveLayer3)"
                            d="M0,160 C460,110 880,210 1440,140 L1440,500 L0,500 Z"
                        />

                        {/* Crisp white light highlight on crest */}
                        <path
                            fill="none"
                            stroke="rgba(255,255,255,0.7)"
                            strokeWidth="1.5"
                            d="M0,160 C460,110 880,210 1440,140"
                        />
                    </svg>
                </div>

                {/* Professional Seamless Copyright Bar (Left pink-100, Mid blue-50, Right blue-100) */}
                <div className="bg-gradient-to-r from-pink-50 via-blue-50 to-blue-50 pt-4 sm:pt-6 pb-6 sm:pb-7 relative w-full border-none">
                    <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center relative text-center">
                        <div className="text-base sm:text-lg md:text-[17px] font-normal text-[#00477b] tracking-wide leading-relaxed flex items-center justify-center gap-2">
                            <span>Copyright © 2018 – 2026 by Dwarkadhish E-Commerce Private Limited</span>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Stylish Fixed Floating Cookie Preferences Trigger (Animated Expand on Hover, Subtle Soft Pink Shadow) */}
            <div className="fixed bottom-5 left-5 z-40">
                <button
                    type="button"
                    aria-label="Cookie Preferences"
                    title="Cookie Preferences"
                    onClick={() => setCookieModalOpen(true)}
                    className="group relative flex items-center bg-white/95 text-[#00477b] backdrop-blur-xl border border-white/90 shadow-[0_0_15px_rgba(244,114,182,0.22),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_0_20px_rgba(244,114,182,0.38),0_4px_12px_rgba(0,0,0,0.06)] rounded-full p-2 sm:p-2.5 transition-all duration-500 ease-out hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
                >
                    <div className="size-7 sm:size-8 rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Cookie className="size-4 sm:size-4.5 text-[#00477b]" />
                    </div>

                    {/* Smooth expanding text on hover */}
                    <div className="max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:pl-2.5 group-hover:pr-2 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
                        <span className="text-xs font-bold tracking-tight text-[#00477b]">
                            Cookie Settings
                        </span>
                    </div>
                </button>
            </div>

            {/* Stylish Fixed Floating Unified Scroll-To-Top Pill (Right Side, with Teal Progress Ring, Expanding Text Inside Same Unified Pill) */}
            <div className={`fixed bottom-5 right-5 z-40 transition-all duration-500 ease-out ${showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-6 pointer-events-none scale-90'
                }`}>
                <button
                    type="button"
                    aria-label="Back to Top"
                    title="Back to Top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group relative flex flex-row-reverse items-center bg-white/95 text-[#00477b] backdrop-blur-xl border border-white/90 shadow-[0_0_18px_rgba(13,148,136,0.18),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_0_24px_rgba(13,148,136,0.32),0_4px_12px_rgba(0,0,0,0.06)] rounded-full p-1.5 sm:p-2 transition-all duration-500 ease-out hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
                >
                    {/* Circle Icon Container with Circular Progress Ring */}
                    <div className="relative size-8 sm:size-9 flex items-center justify-center shrink-0">
                        {/* Progress SVG */}
                        <svg className="absolute inset-0 size-full -rotate-90 pointer-events-none" viewBox="0 0 40 40">
                            <defs>
                                <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#14b8a6" />
                                    <stop offset="100%" stopColor="#0284c7" />
                                </linearGradient>
                            </defs>
                            {/* Track Circle */}
                            <circle
                                cx="20"
                                cy="20"
                                r="17.5"
                                fill="none"
                                stroke="#e2e8f0"
                                strokeWidth="2.2"
                                strokeOpacity="0.8"
                            />
                            {/* Animated Glowing Teal Progress Circle */}
                            <circle
                                cx="20"
                                cy="20"
                                r="17.5"
                                fill="none"
                                stroke="url(#scrollProgressGradient)"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeDasharray="110"
                                strokeDashoffset={110 - (110 * scrollProgress) / 100}
                                className="transition-all duration-150 ease-out"
                                style={{
                                    filter: 'drop-shadow(0 0 3px rgba(20, 184, 166, 0.65))',
                                }}
                            />
                        </svg>

                        {/* Inner Logo Image */}
                        <div className="size-5 sm:size-5.5 flex items-center justify-center z-10">
                            <img src="/gnosys.png" alt="Scroll to Top" width="22" height="22" className="size-full object-contain" />
                        </div>
                    </div>

                    {/* Smooth expanding text INSIDE the same unified pill */}
                    <div className="max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:pl-3 group-hover:pr-1 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
                        <span className="text-xs font-bold tracking-tight text-[#00477b] flex items-center gap-1">
                            Back to Top &uarr;
                        </span>
                    </div>
                </button>
            </div>

            {/* Cookie Preferences Modal */}
            <CookiePreferencesModal
                isOpen={cookieModalOpen}
                onClose={() => setCookieModalOpen(false)}
            />
        </div>
    );
}
