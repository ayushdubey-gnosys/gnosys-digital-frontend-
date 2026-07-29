import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';
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

    const products = productData[type] || productData['digital-products'];;

    return (
        <MainLayout>
            <Head title={`${pageTitle} - Gnosys Digital`} />
            
            <div className="min-h-screen pt-12 pb-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    
                    {/* Header & Controls */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-100 gap-4">
                        <div className="text-sm text-gray-500 font-medium">
                            Showing 1–{products.length} of {products.length} results
                        </div>
                        <div>
                            <select className="border border-gray-300 rounded px-3 py-1.5 text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                                <option>Default sorting</option>
                                <option>Sort by popularity</option>
                                <option>Sort by average rating</option>
                                <option>Sort by latest</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="flex flex-col group relative bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 rounded-[24px] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60">
                                {/* Image Container (Placeholder) */}
                                <div className="relative aspect-square overflow-hidden mb-5 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-[20px] flex flex-col items-center justify-center p-6">
                                    <div className="size-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
                                        <Package className="text-blue-600 size-7" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-blue-700/50 font-bold text-[11px] tracking-[0.2em] uppercase">
                                        Digital Asset
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 items-center text-center px-2 pb-2">
                                    <h3 className="font-bold text-[16px] text-gray-900 mb-3 leading-tight">
                                        {product.title}
                                    </h3>
                                    
                                    <div className="flex gap-2 items-center mb-5 mt-auto">
                                        {product.originalPrice && (
                                            <span className="text-gray-400 line-through text-sm font-medium">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                        <span className="text-gray-900 font-extrabold text-xl">
                                            {product.price}
                                        </span>
                                    </div>

                                    <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-[16px] h-12 transition-all border border-gray-100 shadow-sm hover:shadow">
                                        {product.buttonText}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
