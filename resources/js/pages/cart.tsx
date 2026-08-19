import React, { useState } from 'react';
import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ArrowLeft, Lock, FileText, Package } from 'lucide-react';

interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    quantity: number;
}

export default function Cart() {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('paypal');
    const [couponOpen, setCouponOpen] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [showApartment, setShowApartment] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [orderNote, setOrderNote] = useState('');

    const items: CartItem[] = [
        {
            id: '1',
            title: 'Affiliate Marketing Landing Page Template',
            description: 'Professionally Designed Affiliate Program Page.',
            price: 6.99,
            quantity: 1,
        },
        {
            id: '2',
            title: 'Agency Project Management Suite',
            description: 'A Lightweight All-in-One Workspace for Freelancers and Small Agencies',
            price: 29.99,
            originalPrice: 39.99,
            quantity: 1,
        },
    ];

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = appliedCoupon ? 5.00 : 0;
    const total = Math.max(0, subtotal - discountAmount);

    const handleApplyCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        if (couponCode.trim()) {
            setAppliedCoupon(couponCode.trim().toUpperCase());
        }
    };

    return (
        <MainLayout>
            <Head title="Checkout - Gnosys Digital" />

            <div className="min-h-screen py-10 lg:py-14">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                        Checkout
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-8 relative">
                        {/* Left Column: Checkout Forms */}
                        <div className="w-full lg:w-3/5 space-y-6">
                            
                            {/* Express Checkout Card */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-2xl p-6 shadow-sm">
                                <div className="text-center mb-3">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Express Checkout
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod('paypal')}
                                    className="w-full bg-[#ffc439] hover:bg-[#f5b82e] active:scale-[0.99] transition-all text-black font-semibold h-12 rounded-xl flex items-center justify-center text-lg border border-amber-300/40 shadow-xs"
                                >
                                    <span className="font-extrabold text-[#003087] italic mr-1">Pay</span>
                                    <span className="font-extrabold text-[#0079C1] italic">Pal</span>
                                </button>

                                <div className="relative my-5">
                                    <div className="absolute inset-0 flex items-center">
                                        <Separator className="w-full border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-xs text-gray-500">
                                        <span className="bg-white px-3 text-gray-400 font-medium">
                                            OR CONTINUE BELOW
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Form Box */}
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-2xl p-6 lg:p-8 shadow-sm space-y-6">
                                
                                {/* 1. Contact Information */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-base font-bold text-gray-900">
                                            Contact Information
                                        </h2>
                                        <Link href="/login" className="text-xs font-medium text-[#00477b] hover:underline">
                                            Log in
                                        </Link>
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Email address"
                                            className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                        />
                                        <p className="text-xs text-gray-500 mt-1.5">
                                            Order confirmation and download links will be sent to this email address.
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-2 pt-1">
                                        <Checkbox id="create_account" />
                                        <label htmlFor="create_account" className="text-xs font-medium text-gray-700 cursor-pointer select-none">
                                            Create an account with Gnosys Digital
                                        </label>
                                    </div>
                                </div>

                                <Separator className="border-gray-100" />

                                {/* 2. Shipping Address */}
                                <div className="space-y-4">
                                    <h2 className="text-base font-bold text-gray-900">
                                        Shipping Address
                                    </h2>

                                    <div className="space-y-3">
                                        {/* Country Selector */}
                                        <div className="relative border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:border-[#00477b] focus-within:ring-1 focus-within:ring-[#00477b]">
                                            <label className="block text-[10px] text-gray-500 font-medium">Country / Region</label>
                                            <select className="w-full bg-transparent text-sm text-gray-900 outline-none cursor-pointer appearance-none">
                                                <option>Canada</option>
                                                <option>United States</option>
                                                <option>United Kingdom</option>
                                                <option>Australia</option>
                                                <option>India</option>
                                                <option>Other</option>
                                            </select>
                                            <ChevronDown className="size-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>

                                        {/* Name Row */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <Input
                                                placeholder="First name"
                                                className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                            />
                                            <Input
                                                placeholder="Last name"
                                                className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                            />
                                        </div>

                                        {/* Address */}
                                        <Input
                                            placeholder="Address"
                                            className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                        />

                                        {showApartment ? (
                                            <Input
                                                placeholder="Apartment, suite, unit (optional)"
                                                className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                            />
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => setShowApartment(true)}
                                                className="text-xs font-medium text-[#00477b] hover:underline block"
                                            >
                                                + Add apartment, suite, etc.
                                            </button>
                                        )}

                                        {/* City & Province */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <Input
                                                placeholder="City"
                                                className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                            />
                                            <div className="relative border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus-within:border-[#00477b] focus-within:ring-1 focus-within:ring-[#00477b]">
                                                <label className="block text-[10px] text-gray-500 font-medium">Province / State</label>
                                                <select className="w-full bg-transparent text-sm text-gray-900 outline-none cursor-pointer appearance-none">
                                                    <option>Ontario</option>
                                                    <option>Quebec</option>
                                                    <option>British Columbia</option>
                                                    <option>Alberta</option>
                                                    <option>Other</option>
                                                </select>
                                                <ChevronDown className="size-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Postal Code & Phone */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <Input
                                                placeholder="Postal code"
                                                className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                            />
                                            <Input
                                                placeholder="Phone (optional)"
                                                className="h-11 bg-white border-gray-300 rounded-lg text-sm focus:border-[#00477b] focus:ring-[#00477b]"
                                            />
                                        </div>

                                        <div className="flex items-center space-x-2 pt-1">
                                            <Checkbox id="same_billing" defaultChecked />
                                            <label htmlFor="same_billing" className="text-xs font-medium text-gray-700 cursor-pointer select-none">
                                                Use same address for billing
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="border-gray-100" />

                                {/* 3. Shipping Options */}
                                <div className="space-y-3">
                                    <h2 className="text-base font-bold text-gray-900">
                                        Shipping Method
                                    </h2>
                                    <div className="border border-[#00477b] bg-blue-50/30 rounded-xl p-3.5 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="size-4 rounded-full border-4 border-[#00477b] bg-white"></div>
                                            <span className="text-sm font-medium text-gray-900">Digital Delivery (Instant Access)</span>
                                        </div>
                                        <span className="text-xs font-bold text-[#00477b] uppercase">Free</span>
                                    </div>
                                </div>

                                <Separator className="border-gray-100" />

                                {/* 4. Payment Options */}
                                <div className="space-y-3">
                                    <h2 className="text-base font-bold text-gray-900">
                                        Payment Options
                                    </h2>

                                    <div className="space-y-3">
                                        {/* PayPal Option */}
                                        <div className={`border rounded-xl transition-all overflow-hidden ${
                                            paymentMethod === 'paypal' ? 'border-[#00477b] bg-blue-50/20' : 'border-gray-200 bg-white'
                                        }`}>
                                            <label
                                                onClick={() => setPaymentMethod('paypal')}
                                                className="p-4 flex items-center justify-between cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`size-4 rounded-full border-4 ${
                                                        paymentMethod === 'paypal' ? 'border-[#00477b] bg-white' : 'border-gray-300'
                                                    }`} />
                                                    <span className="text-sm font-bold text-[#003087] italic">
                                                        Pay<span className="text-[#0079C1]">Pal</span>
                                                    </span>
                                                </div>
                                            </label>

                                            {paymentMethod === 'paypal' && (
                                                <div className="px-4 pb-4 text-xs text-gray-600 border-t border-blue-100 pt-3">
                                                    You will be redirected to PayPal to complete your purchase securely.
                                                </div>
                                            )}
                                        </div>

                                        {/* Credit Card Option */}
                                        <div className={`border rounded-xl transition-all overflow-hidden ${
                                            paymentMethod === 'card' ? 'border-[#00477b] bg-blue-50/20' : 'border-gray-200 bg-white'
                                        }`}>
                                            <label
                                                onClick={() => setPaymentMethod('card')}
                                                className="p-4 flex items-center justify-between cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`size-4 rounded-full border-4 ${
                                                        paymentMethod === 'card' ? 'border-[#00477b] bg-white' : 'border-gray-300'
                                                    }`} />
                                                    <span className="text-sm font-medium text-gray-900">Credit / Debit Card</span>
                                                </div>
                                            </label>

                                            {paymentMethod === 'card' && (
                                                <div className="p-4 border-t border-blue-100 space-y-3 bg-white">
                                                    <Input
                                                        placeholder="Card number"
                                                        className="h-10 bg-white border-gray-300 text-sm"
                                                    />
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <Input
                                                            placeholder="MM / YY"
                                                            className="h-10 bg-white border-gray-300 text-sm"
                                                        />
                                                        <Input
                                                            placeholder="CVC"
                                                            className="h-10 bg-white border-gray-300 text-sm"
                                                        />
                                                    </div>
                                                    <Input
                                                        placeholder="Name on card"
                                                        className="h-10 bg-white border-gray-300 text-sm"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Order Notes */}
                                <div className="pt-1">
                                    {!showNotes ? (
                                        <button
                                            type="button"
                                            onClick={() => setShowNotes(true)}
                                            className="text-xs text-[#00477b] hover:underline flex items-center gap-1"
                                        >
                                            <FileText className="size-3.5" />
                                            + Add a note to your order
                                        </button>
                                    ) : (
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-medium text-gray-700">Order Note</label>
                                            <textarea
                                                value={orderNote}
                                                onChange={(e) => setOrderNote(e.target.value)}
                                                placeholder="Special instructions or billing notes..."
                                                className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-xs outline-none focus:border-[#00477b] min-h-[60px]"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="text-[11px] text-gray-500 pt-2">
                                    By proceeding with your purchase you agree to our{' '}
                                    <Link href="#" className="text-[#00477b] underline">Terms and Conditions</Link>{' '}
                                    and{' '}
                                    <Link href="#" className="text-[#00477b] underline">Privacy Policy</Link>.
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                    <Link
                                        href="/digital-products"
                                        className="text-[#00477b] hover:underline flex items-center gap-1.5 text-sm font-medium"
                                    >
                                        <ArrowLeft className="size-4" /> Return to Products
                                    </Link>

                                    <Button
                                        type="button"
                                        className="w-full sm:w-auto bg-[#00477b] hover:bg-[#003860] text-white px-8 h-11 rounded-lg font-medium text-sm transition-colors"
                                    >
                                        {paymentMethod === 'paypal' ? 'Proceed to PayPal' : `Pay $${total.toFixed(2)}`}
                                    </Button>
                                </div>

                            </div>
                        </div>

                        {/* Right Column: Order Summary (Sticky on Desktop) */}
                        <div className="w-full lg:w-2/5">
                            <div className="bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-2xl p-6 lg:p-7 lg:sticky lg:top-24 shadow-sm space-y-5">
                                <h2 className="text-lg font-bold text-gray-900">
                                    Order Summary
                                </h2>

                                {/* Product List */}
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-3.5 items-start">
                                            <div className="relative shrink-0">
                                                <div className="w-14 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                                                    <Package className="size-5" />
                                                </div>
                                                <span className="absolute -top-1.5 -right-1.5 bg-gray-700 text-white size-4 rounded-full flex items-center justify-center text-[10px] font-bold">
                                                    {item.quantity}
                                                </span>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start gap-2">
                                                    <div>
                                                        <h3 className="text-xs font-semibold text-gray-900 leading-snug">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="text-right shrink-0">
                                                        <span className="text-xs font-semibold text-gray-900">
                                                            ${item.price.toFixed(2)}
                                                        </span>
                                                        {item.originalPrice && (
                                                            <span className="text-[10px] text-gray-400 line-through block">
                                                                ${item.originalPrice.toFixed(2)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Separator className="border-gray-100" />

                                {/* Coupon Section */}
                                <div>
                                    {!couponOpen && !appliedCoupon ? (
                                        <button
                                            type="button"
                                            onClick={() => setCouponOpen(true)}
                                            className="w-full flex justify-between items-center text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors py-1"
                                        >
                                            <span>Add coupon code</span>
                                            <ChevronDown className="size-3.5" />
                                        </button>
                                    ) : (
                                        <div className="space-y-2">
                                            {appliedCoupon ? (
                                                <div className="flex justify-between items-center text-xs p-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                                                    <span>Coupon: <strong>{appliedCoupon}</strong> (-$5.00)</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => setAppliedCoupon(null)}
                                                        className="text-[11px] text-emerald-700 underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ) : (
                                                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                                                    <Input
                                                        value={couponCode}
                                                        onChange={(e) => setCouponCode(e.target.value)}
                                                        placeholder="Enter coupon"
                                                        className="h-9 bg-white text-xs border-gray-300"
                                                    />
                                                    <Button
                                                        type="submit"
                                                        className="h-9 px-3 bg-[#00477b] hover:bg-[#003860] text-white text-xs rounded-lg"
                                                    >
                                                        Apply
                                                    </Button>
                                                </form>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <Separator className="border-gray-100" />

                                {/* Calculations */}
                                <div className="space-y-2 text-xs">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                                    </div>

                                    {appliedCoupon && (
                                        <div className="flex justify-between text-emerald-600">
                                            <span>Discount</span>
                                            <span>-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="font-semibold text-gray-900 uppercase">Free</span>
                                    </div>

                                    <div className="flex justify-between text-gray-600">
                                        <span>Taxes</span>
                                        <span className="text-gray-400">$0.00</span>
                                    </div>
                                </div>

                                <Separator className="border-gray-200" />

                                {/* Total */}
                                <div className="flex justify-between items-baseline pt-1">
                                    <span className="text-sm font-bold text-gray-900">Total</span>
                                    <span className="text-2xl font-bold text-gray-900">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>

                                <div className="pt-2 text-center">
                                    <span className="text-[11px] text-gray-500 inline-flex items-center gap-1">
                                        <Lock className="size-3 text-gray-400" /> Secure and encrypted checkout
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
