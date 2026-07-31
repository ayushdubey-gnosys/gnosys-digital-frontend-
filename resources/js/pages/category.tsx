import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import { Button } from '@/components/ui/button';
import { Package, ChevronRight, Search, Menu } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
interface CategoryProps {
    type: string;
    slug: string | null;
}

export default function Category({ type, slug }: CategoryProps) {
    // Determine friendly title from slug/type
    const getFriendlyTitle = () => {
        if (!slug) {
            return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const pageTitle = getFriendlyTitle();

    // Dummy product data
    const productData: Record<string, any[]> = {
        'digital-products': [
        {
                id: 1,
                title: "90 Claude Secret Codes",
                originalPrice: "$15.99",
                price: "$9.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 2,
                title: "Affiliate Marketing Landing Page Template",
                originalPrice: null,
                price: "$6.99",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 3,
                title: "Agency Project Management Suite",
                originalPrice: "$39.99",
                price: "$29.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 4,
                title: "Bio Link For your Social Media Profile",
                originalPrice: null,
                price: "$49.99",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 5,
                title: "Cash Flow Forecast for Service Businesses",
                originalPrice: "$29.20",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 6,
                title: "ChatGPT Pro - Advanced Language Model for Content Creation and Growth Hacking",
                originalPrice: null,
                price: "$49.99",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 7,
                title: "Complete Annual Budget Dashboard",
                originalPrice: "$39.99",
                price: "$29.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 8,
                title: "Content Marketing Calendar & Planner",
                originalPrice: "$29.99",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 9,
                title: "Enabling Growth: Entrepreneur's Guide to Digital Transformation",
                originalPrice: null,
                price: "$19.99",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 10,
                title: "How To Build Your Start-up Future",
                originalPrice: null,
                price: "$19.99",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 11,
                title: "Lightweight CRM for Freelancers & Small Agencies",
                originalPrice: "$29.99",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 12,
                title: "Local SEO Checklist - 75-Point Action Plan",
                originalPrice: "$29.99",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 13,
                title: "Project Pricing Calculator - Loaded Cost Excel Template",
                originalPrice: "$29.99",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 14,
                title: "Social Media Audit & Strategy Template",
                originalPrice: "$29.99",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 15,
                title: "The AI Monetization Masterclass 2026",
                originalPrice: "$29.99",
                price: "$19.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 16,
                title: "The Website Flipping Playbook",
                originalPrice: "$49.99",
                price: "$29.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 17,
                title: "Trend loom fashion templates | instagram post | instagram story | social media instagram post | canva editable post",
                originalPrice: null,
                price: "$9.99",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 18,
                title: "Unlocking the AI Business Frontier",
                originalPrice: "$19.99",
                price: "$9.99",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 19,
                title: "Urban Stitch fashion templates | instagram post | instagram story | social media instagram post | canva editable post",
                originalPrice: null,
                price: "$9.99",
                sale: false,
                buttonText: "Add to cart"
        }
],
        'digital-services': [
        {
                id: 101,
                title: "30 Days Instagram Management",
                originalPrice: null,
                price: "$150.00",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 102,
                title: "A Top Notch WooCommerce Online Store",
                originalPrice: null,
                price: "$500.00 - $995.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 103,
                title: "All In One - Social Media Management",
                originalPrice: null,
                price: "$200.00 - $2,000.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 104,
                title: "All In One Package",
                originalPrice: null,
                price: "$250.00",
                sale: false,
                buttonText: "Add to cart"
        },
        {
                id: 105,
                title: "Amazing Booster",
                originalPrice: null,
                price: "$250.00 - $400.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 106,
                title: "Automate your business tasks with AI and Laravel",
                originalPrice: null,
                price: "$249.00 - $1,199.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 107,
                title: "Boost Your Sales with Expert Shopify SEO - Rank Higher & Get More Traffic!",
                originalPrice: null,
                price: "$99.00 - $499.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 108,
                title: "Buy Instagram Followers",
                originalPrice: null,
                price: "$1.99 - $669.99",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 109,
                title: "Buy Instagram Likes",
                originalPrice: null,
                price: "$0.99 - $319.99",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 110,
                title: "Buy Instagram Views",
                originalPrice: null,
                price: "$0.99 - $2,199.99",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 111,
                title: "Convert Website to Android and Ios App",
                originalPrice: null,
                price: "$200.00",
                sale: true,
                buttonText: "Add to cart"
        },
        {
                id: 112,
                title: "Create a custom AI chatbot for your website using Laravel and OpenAI",
                originalPrice: null,
                price: "$199.00 - $899.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 113,
                title: "Custom CRM Development with Laravel",
                originalPrice: null,
                price: "$1,499.00 - $6,999.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 114,
                title: "Custom E-commerce Platform Development with Laravel",
                originalPrice: null,
                price: "$1,799.00 - $8,999.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 115,
                title: "Custom Scripting/Automation Service",
                originalPrice: null,
                price: "$150.00 - $750.00",
                sale: false,
                buttonText: "Select options"
        },
        {
                id: 116,
                title: "Database Cleanup",
                originalPrice: null,
                price: "$99.00",
                sale: false,
                buttonText: "Add to cart"
        }
]
    };

    const products = productData[type] || productData['digital-products'];
    
    // Limit to 9 items
    const displayProducts = products.slice(0, 9);

    const categories = type === 'digital-products' ? [
        { name: 'All Digital Products', slug: '' },
        { name: 'AI Tools & Automation Packs', slug: 'ai-tools' },
        { name: 'eBooks & Guides', slug: 'ebooks-guides' },
        { name: 'Hosting Add-ons', slug: 'hosting-addons' },
        { name: 'Marketing Kits', slug: 'marketing-kits' },
        { name: 'Templates & Frameworks', slug: 'templates-frameworks' },
        { name: 'WordPress Themes & Plugins', slug: 'wordpress-themes' },
    ] : [
        { name: type === 'solutions' ? 'All Solutions' : 'All Digital Services', slug: '' },
        { name: 'Custom Development', slug: 'custom-development' },
        { name: 'Digital Marketing', slug: 'digital-marketing' },
        { name: 'eCommerce Development', slug: 'ecommerce-development' },
        { name: 'eCommerce Operations Support', slug: 'ecommerce-operations' },
        { name: 'SEO & Content', slug: 'seo-content' },
        { name: 'Server & Devops', slug: 'server-devops' },
        { name: 'Social Media Management', slug: 'social-media' },
        { name: 'Web & App Development', slug: 'web-app-development' },
    ];

    return (
        <MainLayout>
            <Head title={`${pageTitle} - Gnosys Digital`} />
            
            {/* Page Header */}
            <div className="sticky top-[64px] z-40 pt-3 lg:pt-6 pb-3 lg:pb-4 pl-14 pr-4 sm:pl-14 sm:pr-10 lg:px-12 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3 lg:gap-6 bg-white/50 backdrop-blur-xl border-b border-white/40 shadow-[0_4px_30px_rgb(0,0,0,0.03)] mb-4 lg:mb-0">
                {/* 1. Header Text */}
                <div className="flex-1 min-w-0 w-full">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-[#00477b] tracking-tight">
                        Explore Our Digital Creations
                    </h1>
                    <p className="text-gray-500 mt-2 text-[15px] truncate block w-full">
                        Discover premium tools, templates, and services designed to accelerate your digital growth.
                    </p>
                </div>

                {/* 2. Controls (Right) */}
                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 mt-4 md:mt-0 w-full md:w-auto justify-end">
                    <div className="relative w-full sm:w-[350px] lg:w-[420px]">
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            className="w-full border border-gray-200 rounded-full pl-11 pr-5 h-[46px] py-2 text-[14px] font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#00477b]/50 hover:border-gray-300 transition-colors shadow-sm placeholder:text-gray-400"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    </div>

                    <Select defaultValue="default">
                        <SelectTrigger className="w-full sm:w-[180px] h-[46px] border border-gray-200 rounded-full px-5 py-2 text-[14px] font-medium text-gray-700 !bg-white focus:outline-none focus:ring-2 focus:ring-[#00477b]/50 cursor-pointer hover:border-gray-300 transition-colors shadow-sm">
                            <SelectValue placeholder="Sort by..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-gray-100 shadow-xl p-2 bg-white">
                            <SelectItem value="default" className="cursor-pointer focus:bg-[#00477b] focus:text-white rounded-xl text-[14px] py-2 transition-colors">Default sorting</SelectItem>
                            <SelectItem value="popularity" className="cursor-pointer focus:bg-[#00477b] focus:text-white rounded-xl text-[14px] py-2 transition-colors">Sort by popularity</SelectItem>
                            <SelectItem value="rating" className="cursor-pointer focus:bg-[#00477b] focus:text-white rounded-xl text-[14px] py-2 transition-colors">Sort by average rating</SelectItem>
                            <SelectItem value="latest" className="cursor-pointer focus:bg-[#00477b] focus:text-white rounded-xl text-[14px] py-2 transition-colors">Sort by latest</SelectItem>
                            <SelectItem value="price-low" className="cursor-pointer focus:bg-[#00477b] focus:text-white rounded-xl text-[14px] py-2 transition-colors">Sort by price: low to high</SelectItem>
                            <SelectItem value="price-high" className="cursor-pointer focus:bg-[#00477b] focus:text-white rounded-xl text-[14px] py-2 transition-colors">Sort by price: high to low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-screen">
                
                {/* Left Sidebar - Premium Flush Left (Desktop Only) */}
                <div className="hidden lg:block w-[320px] shrink-0 bg-white/70 backdrop-blur-3xl border border-white/60 border-l-0 rounded-r-[40px] shadow-[8px_8px_40px_rgb(0,0,0,0.04)] relative z-10 lg:sticky lg:top-[190px] h-fit lg:mt-6 mb-8 lg:mb-12 py-6 px-5 lg:px-7 overflow-hidden">
                    {/* Decorative Background Blob */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 blur-3xl rounded-full pointer-events-none z-0"></div>
                    
                    <div className="relative z-10 flex flex-col">
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200/60 px-2">
                            <div className="flex items-center justify-center size-8 rounded-xl bg-[#00477b]/5 text-[#00477b]">
                                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <h3 className="font-extrabold text-[15px] uppercase tracking-wider text-gray-900">Categories</h3>
                        </div>
                        
                        <ul className="space-y-1.5">
                            {categories.map((cat, index) => {
                                const isActive = (slug === null && cat.slug === '') || (slug === cat.slug);
                                const href = cat.slug ? `/${type}/${cat.slug}` : `/${type}`;
                                
                                return (
                                    <li key={index}>
                                        <Link 
                                            href={href}
                                            className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium relative overflow-hidden ${
                                                isActive 
                                                    ? 'text-white shadow-[0_8px_20px_rgb(0,71,123,0.2)] bg-gradient-to-r from-[#00477b] to-[#00335e] scale-[1.02]' 
                                                    : 'text-gray-600 hover:text-[#00477b] hover:bg-white/60 hover:shadow-sm border border-transparent hover:border-white/80'
                                            }`}
                                        >
                                            <span className={`relative z-10 transition-transform duration-300 ${!isActive && 'group-hover:translate-x-1'}`}>
                                                {cat.name}
                                            </span>
                                            
                                            <ChevronRight className={`size-[18px] relative z-10 transition-all duration-300 ${
                                                isActive 
                                                    ? 'opacity-100 translate-x-0 text-white/90' 
                                                    : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#00477b]/50'
                                            }`} />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Mobile Floating Category Button */}
                <div className="lg:hidden block">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="fixed left-0 top-[85px] z-50 flex items-center justify-center bg-[#00477b]/60 backdrop-blur-md text-white w-10 h-12 rounded-r-xl shadow-[4px_4px_15px_rgb(0,71,123,0.2)] hover:bg-[#00477b]/80 transition-colors focus:outline-none border border-white/20 border-l-0">
                                <Menu className="size-5" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[85vw] sm:w-[320px] p-0 border-r border-b border-white/60 bg-gradient-to-b from-blue-50 to-white backdrop-blur-3xl !h-fit !bottom-auto rounded-br-[32px] shadow-[8px_8px_40px_rgb(0,0,0,0.12)] z-50">
                            <SheetHeader className="px-6 py-5 border-b border-blue-100/50">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center size-8 rounded-xl bg-[#00477b]/5 text-[#00477b]">
                                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                    </div>
                                    <SheetTitle className="font-extrabold text-[15px] uppercase tracking-wider text-gray-900 mt-1">Categories</SheetTitle>
                                </div>
                            </SheetHeader>
                            <div className="p-4 overflow-y-auto max-h-[80vh]">
                                <ul className="space-y-1.5">
                                    {categories.map((cat, index) => {
                                        const isActive = (slug === null && cat.slug === '') || (slug === cat.slug);
                                        const href = cat.slug ? `/${type}/${cat.slug}` : `/${type}`;
                                        
                                        return (
                                            <li key={index}>
                                                <Link 
                                                    href={href}
                                                    className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium relative overflow-hidden ${
                                                        isActive 
                                                            ? 'text-white shadow-[0_8px_20px_rgb(0,71,123,0.2)] bg-gradient-to-r from-[#00477b] to-[#00335e]' 
                                                            : 'text-gray-600 hover:text-[#00477b] hover:bg-white/80 border border-transparent hover:border-gray-200'
                                                    }`}
                                                >
                                                    <span className="relative z-10">
                                                        {cat.name}
                                                    </span>
                                                    <ChevronRight className={`size-[18px] relative z-10 transition-all duration-300 ${
                                                        isActive 
                                                            ? 'opacity-100 text-white/90' 
                                                            : 'opacity-50 text-[#00477b]/50'
                                                    }`} />
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Right Content */}
                <div className="flex-1 w-full pt-10 pb-24 px-4 sm:px-8 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* Empty Space since controls were moved to header */}
                        <div className="mb-2"></div>
                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                                {displayProducts.map((product) => (
                                    <div key={product.id} className="group relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-3 hover:bg-white/60 transition-all duration-500 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col overflow-hidden">
                                        
                                        <Link href="/product/90-claude-secret-codes" className="flex flex-col flex-1">
                                            {/* Image Container */}
                                            <div className="relative h-48 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 border border-white/50 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                                                {/* Glow effect on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                <div className="size-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/60 text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-500 relative z-10">
                                                    <Package className="size-7" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-[11px] font-bold text-blue-900/50 uppercase tracking-widest relative z-10">
                                                    Digital Asset
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="pt-6 pb-2 px-3 flex flex-col flex-1 items-center text-center">
                                                <h4 className="font-extrabold text-[15px] text-zinc-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                                                    {product.title}
                                                </h4>
                                                
                                                <div className="flex items-end gap-2 mb-6 mt-auto">
                                                    {product.originalPrice && (
                                                        <span className="text-gray-400 text-sm line-through font-semibold">
                                                            {product.originalPrice}
                                                        </span>
                                                    )}
                                                    <span className="font-black text-zinc-900 text-xl tracking-tight">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="px-3 pb-2">
                                            <Button 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.dispatchEvent(new CustomEvent('open-cart'));
                                                }}
                                                size="sm"
                                                className="w-full bg-white hover:bg-zinc-900 hover:text-white text-zinc-900 border border-gray-200 hover:border-zinc-900 rounded-full h-11 font-bold transition-all duration-300 shadow-sm group-hover:shadow-md"
                                            >
                                                {product.buttonText}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination (Static for now) */}
                            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="text-[15px] text-gray-500 font-medium">
                                    Showing 1–{displayProducts.length} of {products.length} results
                                </div>
                                
                                <div className="flex items-center gap-1.5">
                                    <button className="flex items-center justify-center size-9 rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    
                                    <button className="flex items-center justify-center size-9 rounded-xl bg-[#00477b] text-white font-medium shadow-md shadow-[#00477b]/20 transition-colors">
                                        1
                                    </button>
                                    <button className="flex items-center justify-center size-9 rounded-xl border border-transparent hover:border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                                        2
                                    </button>
                                    <button className="flex items-center justify-center size-9 rounded-xl border border-transparent hover:border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                                        3
                                    </button>
                                    
                                    <span className="flex items-center justify-center size-9 text-gray-400">...</span>
                                    
                                    <button className="flex items-center justify-center size-9 rounded-xl border border-transparent hover:border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                                        8
                                    </button>
                                    
                                    <button className="flex items-center justify-center size-9 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
                                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
