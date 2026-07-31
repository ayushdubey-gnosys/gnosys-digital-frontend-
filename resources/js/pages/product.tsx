import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ProductProps {
    slug: string | null;
}

export default function Product({ slug }: ProductProps) {
    return (
        <MainLayout>
            <Head title="90 Claude Secret Codes - Gnosys Digital" />
            
            <div className="bg-white min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
                        
                        {/* Left: Product Image */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="absolute top-4 left-4 z-10 bg-[#a3b118] text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                Sale!
                            </div>
                            <div className="aspect-[4/5] bg-gradient-to-br from-blue-900 to-indigo-950 rounded-lg overflow-hidden flex items-center justify-center p-8 relative shadow-lg border border-gray-100">
                                {/* Placeholder for the book cover image */}
                                <div className="w-3/4 aspect-[3/4] bg-blue-800/50 backdrop-blur-md rounded-md border border-blue-500/30 flex flex-col items-center justify-center shadow-2xl relative z-10 p-6 text-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="text-blue-200 text-sm tracking-widest uppercase mb-4 opacity-70">90 Claude Secret Codes</div>
                                    <h2 className="text-white text-4xl font-extrabold leading-tight mb-2">90<br/>Claude<br/>Secret Codes</h2>
                                    <p className="text-blue-300 text-xs mt-2 italic">That Change Everything</p>
                                    <div className="mt-8 size-12 border-2 border-blue-400 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    </div>
                                </div>
                                
                                {/* Background Decorative Elements */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
                                <div className="absolute top-1/4 left-1/4 size-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-1/4 right-1/4 size-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* Right: Product Details */}
                        <div className="w-full md:w-1/2 pt-2">
                            <h1 className="text-2xl lg:text-[28px] font-bold text-gray-900 mb-4 leading-tight">
                                90 Claude Secret Codes
                            </h1>
                            
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-gray-400 line-through text-xl font-medium">$15.99</span>
                                <span className="text-gray-900 font-extrabold text-2xl">$9.99</span>
                            </div>

                            <div className="prose prose-sm text-gray-600 mb-8 max-w-none leading-relaxed">
                                <p>
                                    Unlock the hidden operating system inside Claude AI. "90 Claude Secret Codes" is the ultimate prompt encyclopedia that transforms Claude from a helpful chatbot into a creative powerhouse, strategic genius, and relentless executive assistant. Stop getting average answers. Start commanding Claude with the exact codes that force it to think, write, and operate at its absolute peak.
                                </p>
                            </div>

                            {/* Add to Cart Controls */}
                            <div className="flex gap-4 mb-4">
                                <div className="w-16">
                                    <Input 
                                        type="number" 
                                        defaultValue="1" 
                                        min="1" 
                                        className="h-10 border-gray-300 rounded-sm text-center px-1"
                                    />
                                </div>
                                <Button 
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-cart'))}
                                    className="bg-black hover:bg-gray-800 text-white font-medium rounded-sm h-10 px-6"
                                >
                                    Add to cart
                                </Button>
                            </div>

                            {/* PayPal Button */}
                            <div className="mb-8">
                                <Button className="w-full sm:w-[260px] bg-[#ffc439] hover:bg-[#f2b934] text-black font-semibold h-10 rounded-sm shadow-sm flex items-center justify-center text-lg">
                                    <span className="font-bold text-blue-900 mr-1 italic text-[15px]">Pay</span>
                                    <span className="font-bold text-blue-500 italic text-[15px]">Pal</span>
                                </Button>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-100 text-sm">
                                <div className="flex">
                                    <span className="font-bold text-gray-900 mr-2">Categories:</span>
                                    <span className="text-gray-600">
                                        <Link href="#" className="hover:text-blue-600 hover:underline">AI Tools & Automation Packs</Link>,{' '}
                                        <Link href="#" className="hover:text-blue-600 hover:underline">eBooks & Guides</Link>
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-gray-900 mr-4">Share:</span>
                                    <div className="flex gap-3 text-gray-500">
                                        {/* Mock Social Icons */}
                                        <Link href="#" className="hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></Link>
                                        <Link href="#" className="hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                                        <Link href="#" className="hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg></Link>
                                        <Link href="#" className="hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></Link>
                                        <Link href="#" className="hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
