import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ArrowLeft } from 'lucide-react';

export default function Cart() {
    return (
        <MainLayout>
            <Head title="Checkout" />
            
            <div className="bg-transparent min-h-screen py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="text-3xl font-medium text-gray-900 mb-8">Checkout</h1>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column: Forms */}
                        <div className="w-full lg:w-3/5 space-y-8 bg-white/50 backdrop-blur-xl border border-white/80 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/10">
                            
                            {/* Express Checkout */}
                            <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-3xl p-8 relative shadow-xl shadow-blue-900/5">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-gray-100 rounded-full px-4 py-0.5 text-xs font-semibold text-gray-500 shadow-sm">
                                    Express Checkout
                                </div>
                                <Button className="w-full bg-[#ffc439] hover:bg-[#f2b934] text-black font-semibold h-12 rounded-sm shadow-sm flex items-center justify-center text-lg">
                                    <span className="font-bold text-blue-900 mr-1 italic">Pay</span>
                                    <span className="font-bold text-blue-500 italic">Pal</span>
                                </Button>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <Separator className="w-full border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-xs font-semibold text-gray-500 bg-white/70 backdrop-blur-md rounded-full px-4 w-max mx-auto border border-gray-100">
                                    Or continue below
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <h2 className="text-xl font-medium text-gray-900">Contact information</h2>
                                    <Link href="/login" className="text-sm text-gray-600 hover:underline">Log in</Link>
                                </div>
                                <Input type="email" placeholder="Email address" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                <div className="text-xs text-gray-500">You are currently checking out as a guest.</div>
                                <div className="flex items-center space-x-2 pt-2">
                                    <Checkbox id="create_account" />
                                    <label htmlFor="create_account" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">
                                        Create an account with Gnosysdigital
                                    </label>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-medium text-gray-900">Shipping address</h2>
                                
                                <div className="space-y-4">
                                    <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl px-3 py-2 relative shadow-inner focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400">
                                        <label className="text-xs text-gray-500">Country/Region</label>
                                        <select className="w-full outline-none bg-transparent text-gray-900 appearance-none">
                                            <option>Canada</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="First name" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                        <Input placeholder="Last name" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    </div>
                                    
                                    <Input placeholder="Address" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    
                                    <button className="text-sm text-blue-600 hover:underline text-left">+ Add apartment, suite, etc.</button>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="City" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                        <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl px-3 py-1 relative flex flex-col justify-center shadow-inner focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400">
                                            <label className="text-[10px] text-gray-500 uppercase">Province</label>
                                            <select className="w-full outline-none bg-transparent text-gray-900 appearance-none text-sm">
                                                <option>Ontario</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="Postal code" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                        <Input placeholder="Phone (optional)" className="h-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl shadow-inner focus:border-blue-400 focus:ring-blue-400" />
                                    </div>

                                    <div className="flex items-center space-x-2 pt-2">
                                        <Checkbox id="same_billing" defaultChecked />
                                        <label htmlFor="same_billing" className="text-sm font-medium leading-none text-gray-700">
                                            Use same address for billing
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Options */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-medium text-gray-900">Shipping options</h2>
                                <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-4 flex justify-between items-center shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="size-4 rounded-full border-[5px] border-gray-900"></div>
                                        <span className="text-sm font-medium text-gray-900">Free shipping</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900 uppercase">Free</span>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-medium text-gray-900">Payment options</h2>
                                <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl overflow-hidden shadow-xl shadow-blue-900/5">
                                    <div className="p-4 flex items-center gap-3 border-b border-white/60 bg-white/40">
                                        <div className="size-4 rounded-full border-[5px] border-gray-900"></div>
                                        <span className="text-sm font-medium italic font-bold text-blue-900">Pay<span className="text-blue-500">Pal</span></span>
                                    </div>
                                    <div className="p-6 bg-white/20 flex flex-col items-center justify-center text-center gap-4 text-sm text-gray-600">
                                        <p>Our all-in-one checkout solution lets you offer PayPal, Venmo, Pay Later options, and more to help maximize conversion.</p>
                                        <p>Clicking "Proceed to PayPal" will redirect you to PayPal to complete your purchase.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="note1" />
                                    <label htmlFor="note1" className="text-sm font-medium leading-none text-gray-700">
                                        Add a note to your order
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="note2" />
                                    <label htmlFor="note2" className="text-sm font-medium leading-none text-gray-700">
                                        Add a note to your order
                                    </label>
                                </div>
                            </div>

                            <div className="text-xs text-gray-500 pt-2">
                                By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy
                            </div>

                            <div className="flex items-center justify-between pt-6">
                                <Link href="#" className="text-[#00477b] hover:underline flex items-center gap-2 text-sm font-medium">
                                    <ArrowLeft className="size-4" /> Return to Cart
                                </Link>
                                <Button className="bg-[#00477b] hover:bg-[#00335e] text-white px-8 h-12 rounded-sm font-medium">
                                    Proceed to PayPal
                                </Button>
                            </div>

                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="w-full lg:w-2/5">
                            <div className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-3xl p-6 md:p-8 sticky top-24 shadow-2xl shadow-blue-900/10">
                                <h2 className="text-lg font-medium text-gray-900 mb-6">Order summary</h2>
                                
                                <div className="space-y-6">
                                    {/* Item 1 */}
                                    <div className="flex gap-4">
                                        <div className="relative">
                                            <div className="w-16 h-12 bg-blue-100 rounded border border-gray-100 flex items-center justify-center text-[8px] text-blue-800 text-center font-bold">
                                                Affiliate Template
                                            </div>
                                            <div className="absolute -top-2 -right-2 bg-gray-600 text-white size-5 rounded-full flex items-center justify-center text-xs font-medium">
                                                1
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div className="pr-4">
                                                    <h3 className="text-sm font-medium text-gray-900 leading-tight">Affiliate Marketing Landing Page Template</h3>
                                                    <div className="text-xs text-gray-500 mt-1">Professionally Designed Affiliate Program Page.</div>
                                                </div>
                                                <span className="text-sm text-gray-600 shrink-0">$6.99</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex gap-4">
                                        <div className="relative">
                                            <div className="w-16 h-12 bg-slate-200 rounded border border-gray-100 flex items-center justify-center text-[8px] text-slate-800 text-center font-bold">
                                                Agency Suite
                                            </div>
                                            <div className="absolute -top-2 -right-2 bg-gray-600 text-white size-5 rounded-full flex items-center justify-center text-xs font-medium">
                                                1
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div className="pr-4">
                                                    <h3 className="text-sm font-medium text-gray-900 leading-tight">Agency Project Management Suite</h3>
                                                    <div className="text-xs font-bold text-gray-900 mt-1">A Lightweight All-in-One Workspace for Freelancers and Small Agencies</div>
                                                    <div className="text-xs text-gray-400 line-through mt-1">$39.99</div>
                                                </div>
                                                <div className="flex flex-col items-end gap-1 shrink-0">
                                                    <span className="text-sm text-gray-900">$29.99</span>
                                                    <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded whitespace-nowrap">Save $10.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-gray-200 space-y-4">
                                    <button className="w-full flex justify-between items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                        <span>Add coupons</span>
                                        <ChevronDown className="size-4" />
                                    </button>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="text-gray-900 font-medium">$36.98</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Free shipping</span>
                                        <span className="text-gray-900 font-bold uppercase">Free</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-end">
                                    <span className="text-lg font-medium text-gray-900">Total</span>
                                    <span className="text-2xl font-bold text-gray-900">$36.98</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
