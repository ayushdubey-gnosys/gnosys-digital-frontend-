import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, ShoppingBag, Menu, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage().props as any;
    const [cartOpen, setCartOpen] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleOpenCart = () => {
            setCartOpen(true);
            setTimeout(() => setCartOpen(false), 3000);
        };
        window.addEventListener('open-cart', handleOpenCart);
        return () => window.removeEventListener('open-cart', handleOpenCart);
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-r from-blue-200 via-blue-100 to-pink-100 text-gray-900 font-sans">
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
                                {/* Digital Products */}
                                <div className="relative group">
                                    <Link href="/digital-products" className="flex items-center gap-1 hover:text-blue-500 group-hover:text-blue-500 transition-colors py-1 relative focus:outline-none">
                                        Digital Products <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </Link>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 overflow-hidden flex flex-col">
                                            <Link href="/digital-products/ai-tools-automation-packs" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">AI Tools & Automation Packs</Link>
                                            <Link href="/digital-products/ebooks-guides" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">eBooks & Guides</Link>
                                            <Link href="/digital-products/hosting-add-ons" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Hosting Add-ons</Link>
                                            <Link href="/digital-products/marketing-kits" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Marketing Kits</Link>
                                            <Link href="/digital-products/templates-frameworks" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Templates & Frameworks</Link>
                                            <Link href="/digital-products/wordpress-themes-plugins" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">WordPress Themes & Plugins</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Digital Services */}
                                <div className="relative group">
                                    <Link href="/digital-services" className="flex items-center gap-1 hover:text-blue-500 group-hover:text-blue-500 transition-colors py-1 relative focus:outline-none">
                                        Digital Services <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </Link>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 overflow-hidden flex flex-col">
                                            <Link href="/digital-services/custom-development" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Custom Development</Link>
                                            <Link href="/digital-services/digital-marketing" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Digital Marketing</Link>
                                            <Link href="/digital-services/ecommerce-development" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">eCommerce Development</Link>
                                            <Link href="/digital-services/ecommerce-operations-support" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">eCommerce Operations Support</Link>
                                            <Link href="/digital-services/seo-content" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">SEO & Content</Link>
                                            <Link href="/digital-services/server-devops" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Server & Devops</Link>
                                            <Link href="/digital-services/social-media-management" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Social Media Management</Link>
                                            <Link href="/digital-services/web-app-development" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Web & App Development</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Solutions */}
                                <div className="relative group">
                                    <Link href="/solutions" className="flex items-center gap-1 hover:text-blue-500 group-hover:text-blue-500 transition-colors py-1 relative focus:outline-none">
                                        Solutions <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
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
                                                        <Link href="/solutions/erpnext-healthcare" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext For Healthcare</Link>
                                                        <Link href="/solutions/epc-project-control" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">EPC Project Control with ERPNext</Link>
                                                        <Link href="/solutions/erpnext-ecommerce" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for E-commerce</Link>
                                                        <Link href="/solutions/erpnext-restaurants" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Restaurants</Link>
                                                        <Link href="/solutions/erpnext-education" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Education Institutions</Link>
                                                        <Link href="/solutions/erpnext-financial" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Financial Services</Link>
                                                        <Link href="/solutions/erpnext-nonprofits" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Non-Profits & NGOs</Link>
                                                        <Link href="/solutions/erpnext-professional-services" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Professional Services Firms</Link>
                                                        <Link href="/solutions/erpnext-retail" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Retail SMEs</Link>
                                                        <Link href="/solutions/erpnext-trading" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">ERPNext for Trading & Distribution SMEs</Link>
                                                        <Link href="/solutions/erpnext-manufacturing" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors last:border-b-0">ERPNext Solutions for Manufacturing SMEs</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/solutions/channel-distribution" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Channel & Distribution</Link>
                                            <Link href="/solutions/custom-manufacturing" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Custom Manufacturing</Link>
                                            <Link href="/solutions/custom-warehouse" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Custom Warehouse & Inventory</Link>
                                            <Link href="/solutions/supply-chain" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Supply Chain & Logistics</Link>
                                            <Link href="/solutions/seo-services" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">SEO Services</Link>
                                            <Link href="/solutions/case-study" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Case Study</Link>
                                            <Link href="/solutions/blog" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Blog</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* About Us */}
                                <div className="relative group">
                                    <button className="flex items-center gap-1 hover:text-blue-500 group-hover:text-blue-500 transition-colors py-1 relative focus:outline-none">
                                        About Us <ChevronDown className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                    </button>
                                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                        <div className="w-64 bg-white rounded-md shadow-xl border border-gray-100 p-0 overflow-hidden flex flex-col">
                                            <Link href="/about/culture-of-change" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100">Culture Of Change</Link>
                                            <Link href="/about/engagement-models" className="py-3 px-5 hover:bg-slate-50 hover:text-blue-600 text-[13px] font-medium text-gray-700 transition-colors border-b border-gray-100 last:border-b-0">Engagement Models</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Us */}
                                <div className="relative group">
                                    <Link href="/contact" className="flex items-center gap-1 hover:text-blue-500 group-hover:text-blue-500 transition-colors py-1 relative focus:outline-none">
                                        Contact Us
                                        <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
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
                                        className="size-10 rounded-full border-gray-200 text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    >
                                        <Menu className="size-5" />
                                    </Button>
                                </div>

                                <Link href={auth?.user ? dashboard() : login()} className="block">
                                    <Button size="icon" className="size-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 shadow-sm transition-all">
                                        <User className="size-4" />
                                        <span className="sr-only">Account</span>
                                    </Button>
                                </Link>
                                
                                <div className="relative group/cart">
                                    <Button size="icon" className="size-10 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 shadow-sm transition-all relative">
                                        <ShoppingBag className="size-4 group-hover/cart:scale-110 transition-transform" />
                                        <span className="absolute -top-1 -right-1 flex size-[20px] items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                                            2
                                        </span>
                                        <span className="sr-only">Cart</span>
                                    </Button>

                                    {/* Cart Dropdown */}
                                    <div className={`absolute top-full right-0 pt-4 transition-all duration-200 z-50 ${cartOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none group-hover/cart:opacity-100 group-hover/cart:translate-y-0 group-hover/cart:pointer-events-auto'}`}>
                                        <div className="w-[320px] bg-white rounded-md shadow-2xl border border-gray-100 p-5 flex flex-col gap-4">
                                            
                                            {/* Item 1 */}
                                            <div className="flex gap-3 relative border-b border-gray-100 pb-4">
                                                <div className="w-16 h-12 bg-blue-100 rounded overflow-hidden flex items-center justify-center shrink-0 text-[8px] text-blue-800 text-center font-bold">
                                                    Affiliate Template
                                                </div>
                                                <div className="flex flex-col">
                                                    <Link href="#" className="text-[13px] font-medium text-blue-600 hover:underline leading-tight pr-4">
                                                        Affiliate Marketing Landing Page Template
                                                    </Link>
                                                    <div className="text-gray-500 text-[12px] mt-1">1 &times; $6.99</div>
                                                </div>
                                                <button className="absolute top-0 right-0 text-gray-300 hover:text-red-500 border border-gray-200 rounded-full size-4 flex items-center justify-center text-[10px] pb-[1px]">
                                                    &times;
                                                </button>
                                            </div>

                                            {/* Item 2 */}
                                            <div className="flex gap-3 relative border-b border-gray-100 pb-4">
                                                <div className="w-16 h-12 bg-slate-200 rounded overflow-hidden flex items-center justify-center shrink-0 text-[8px] text-slate-800 text-center font-bold">
                                                    Agency Suite
                                                </div>
                                                <div className="flex flex-col">
                                                    <Link href="#" className="text-[13px] font-medium text-blue-600 hover:underline leading-tight pr-4">
                                                        Agency Project Management Suite
                                                    </Link>
                                                    <div className="text-gray-500 text-[12px] mt-1">1 &times; $29.99</div>
                                                </div>
                                                <button className="absolute top-0 right-0 text-gray-300 hover:text-red-500 border border-gray-200 rounded-full size-4 flex items-center justify-center text-[10px] pb-[1px]">
                                                    &times;
                                                </button>
                                            </div>

                                            {/* Subtotal */}
                                            <div className="flex justify-center items-center py-1">
                                                <span className="font-bold text-[15px] text-red-600">Subtotal: $36.98</span>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex gap-2 mt-1">
                                                <Link href="/cart" className="flex-1">
                                                    <Button className="w-full bg-[#00477b] hover:bg-[#00335e] text-white rounded-sm h-10 text-[13px] font-medium">
                                                        View cart
                                                    </Button>
                                                </Link>
                                                <Link href="/cart" className="flex-1">
                                                    <Button className="w-full bg-[#64748b] hover:bg-[#475569] text-white rounded-sm h-10 text-[13px] font-medium">
                                                        Checkout
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

            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white/40 backdrop-blur-lg pt-16 pb-0 flex flex-col mt-auto text-zinc-900 border-t border-white/60">
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
                                <li><Link href="/digital-services/erpnext-implementation" className="hover:text-blue-500 transition-colors">ERPNext Implementation</Link></li>
                                <li><Link href="/digital-services/ai-automation-data-services" className="hover:text-blue-500 transition-colors">Ai Automation Data Services</Link></li>
                                <li><Link href="/digital-services/seo-growth-services" className="hover:text-blue-500 transition-colors">SEO & Growth Services</Link></li>
                                <li><Link href="/digital-services/managed-wordpress-services" className="hover:text-blue-500 transition-colors">Managed WordPress Services</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-[15px] uppercase tracking-wider">Quick Links</h4>
                            <ul className="text-[14px] text-gray-600 space-y-3">
                                <li><Link href="/digital-services/custom-development" className="hover:text-blue-500 transition-colors">Explore Custom Development</Link></li>
                                <li><Link href="/digital-services/ecommerce-development" className="hover:text-blue-500 transition-colors">Explore eCommerce Solutions</Link></li>
                                <li><Link href="/about/contact" className="hover:text-blue-500 transition-colors">Contact Us Today</Link></li>
                                <li><Link href="#" className="hover:text-blue-500 transition-colors">Mailchimp Newsletter Landing Page</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 text-[15px] uppercase tracking-wider">Follow Us</h4>
                            <div className="flex gap-3">
                                {/* FB */}
                                <a href="#" className="size-9 bg-white/60 backdrop-blur-md border border-white/80 text-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all rounded-full flex items-center justify-center">
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                {/* X */}
                                <a href="#" className="size-9 bg-white/60 backdrop-blur-md border border-white/80 text-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all rounded-full flex items-center justify-center">
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                </a>
                                {/* IG */}
                                <a href="#" className="size-9 bg-white/60 backdrop-blur-md border border-white/80 text-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all rounded-full flex items-center justify-center">
                                    <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                </a>
                                {/* Pinterest */}
                                <a href="#" className="size-9 bg-white/60 backdrop-blur-md border border-white/80 text-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all rounded-full flex items-center justify-center">
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z" /></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="size-9 bg-white/60 backdrop-blur-md border border-white/80 text-zinc-600 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white transition-all rounded-full flex items-center justify-center">
                                    <svg className="size-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright Bar */}
                <div className="bg-transparent text-gray-600 py-4 relative w-full border-t border-white/40">
                    <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center relative">
                        {/* Cookie icon */}
                        <div className="absolute left-4 -top-8 size-[38px] rounded-full bg-zinc-900 text-white flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-lg border-[3px] border-white">
                            <svg className="size-[20px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 12.5v.01" /><path d="M12 16v.01" /><path d="M11 11v.01" /><path d="M8 14v.01" /></svg>
                        </div>
                        <div className="text-[12px] md:text-sm font-medium">© {new Date().getFullYear()} Gnosys Digital. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
