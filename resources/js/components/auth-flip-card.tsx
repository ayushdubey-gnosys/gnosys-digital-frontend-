import React, { useState, useEffect } from 'react';
import { Form, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasskeyVerify from '@/components/passkey-verify';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store as loginStore } from '@/routes/login';
import { store as registerStore } from '@/routes/register';
import { request as passwordRequest } from '@/routes/password';
import { ArrowRight } from 'lucide-react';

interface AuthFlipCardProps {
    initialMode?: 'login' | 'register';
    canResetPassword?: boolean;
    status?: string;
    passwordRules?: string;
}

export default function AuthFlipCard({
    initialMode = 'login',
    canResetPassword = true,
    status,
    passwordRules,
}: AuthFlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(initialMode === 'register');

    useEffect(() => {
        setIsFlipped(initialMode === 'register');
    }, [initialMode]);

    const handleFlipToRegister = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsFlipped(true);
        if (window.location.pathname !== '/register') {
            window.history.pushState({}, '', '/register');
        }
    };

    const handleFlipToLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsFlipped(false);
        if (window.location.pathname !== '/login') {
            window.history.pushState({}, '', '/login');
        }
    };

    return (
        <div className="w-full max-w-[490px] mx-auto [perspective:1400px]">
            <div
                className="w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.0,0.2,1)] [transform-style:preserve-3d] relative"
                style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* FRONT FACE: LOG IN */}
                <div
                    className="w-full bg-white/20 backdrop-blur-2xl border border-white/40 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-blue-950/20 space-y-6 [backface-visibility:hidden] -webkit-[backface-visibility:hidden]"
                    style={{
                        transform: 'rotateY(0deg)',
                        pointerEvents: isFlipped ? 'none' : 'auto',
                    }}
                >
                    {/* Logo */}
                    <div className="pb-1">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <img
                                src="/gnosysLogo.png"
                                alt="Gnosys Digital"
                                className="h-10 w-auto object-contain drop-shadow-md"
                            />
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="space-y-1">
                        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-white drop-shadow-md">
                            Log in to your account
                        </h1>
                        <p className="text-sm text-blue-50 font-normal mt-1 leading-relaxed drop-shadow-xs">
                            Enter your email and password below to log in
                        </p>
                    </div>

                    {/* Passkey Support */}
                    <PasskeyVerify />

                    {/* Login Form */}
                    <Form
                        {...loginStore.form()}
                        resetOnSuccess={['password']}
                        className="flex flex-col gap-5"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="login-email" className="block text-sm font-semibold text-white drop-shadow-xs">
                                            Email Address <span className="text-pink-300">*</span>
                                        </Label>
                                        <Input
                                            id="login-email"
                                            type="email"
                                            name="email"
                                            required
                                            tabIndex={isFlipped ? -1 : 1}
                                            autoComplete="email"
                                            placeholder="john@example.com"
                                            className="h-12 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="login-password" className="block text-sm font-semibold text-white drop-shadow-xs">
                                                Password <span className="text-pink-300">*</span>
                                            </Label>
                                            {canResetPassword && (
                                                <Link
                                                    href={passwordRequest()}
                                                    tabIndex={isFlipped ? -1 : 5}
                                                    className="text-xs font-semibold text-white hover:text-blue-100 underline drop-shadow-xs"
                                                >
                                                    Forgot password?
                                                </Link>
                                            )}
                                        </div>
                                        <PasswordInput
                                            id="login-password"
                                            name="password"
                                            required
                                            tabIndex={isFlipped ? -1 : 2}
                                            autoComplete="current-password"
                                            placeholder="Enter your password"
                                            className="h-12 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-2 pt-1">
                                        <Checkbox
                                            id="login-remember"
                                            name="remember"
                                            tabIndex={isFlipped ? -1 : 3}
                                            className="rounded-md border-white/80 bg-white/40 data-[state=checked]:bg-[#00477b] data-[state=checked]:border-[#00477b]"
                                        />
                                        <Label htmlFor="login-remember" className="text-xs font-medium text-white cursor-pointer select-none drop-shadow-xs">
                                            Remember me for 30 days
                                        </Label>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-3 h-12 w-full rounded-full bg-[#00477b] hover:bg-[#003860] text-sm font-semibold text-white shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                                        tabIndex={isFlipped ? -1 : 4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing && <Spinner />}
                                        <span>Log in</span>
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </div>

                                <div className="text-center text-xs text-blue-50 pt-2 drop-shadow-xs">
                                    Don't have an account?{' '}
                                    <button
                                        type="button"
                                        onClick={handleFlipToRegister}
                                        tabIndex={isFlipped ? -1 : 5}
                                        className="font-bold text-white hover:underline cursor-pointer transition-colors"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </>
                        )}
                    </Form>

                    {status && (
                        <div className="mt-4 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-center text-xs font-medium text-white">
                            {status}
                        </div>
                    )}

                    <div className="pt-2 text-center text-xs text-blue-100/90 drop-shadow-xs">
                        © {new Date().getFullYear()} Gnosys Digital. All rights reserved.
                    </div>
                </div>

                {/* BACK FACE: REGISTER / SIGN UP */}
                <div
                    className="w-full bg-white/20 backdrop-blur-2xl border border-white/40 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-blue-950/20 space-y-6 [backface-visibility:hidden] -webkit-[backface-visibility:hidden] absolute inset-0"
                    style={{
                        transform: 'rotateY(180deg)',
                        pointerEvents: isFlipped ? 'auto' : 'none',
                    }}
                >
                    {/* Logo */}
                    <div className="pb-1">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <img
                                src="/gnosysLogo.png"
                                alt="Gnosys Digital"
                                className="h-10 w-auto object-contain drop-shadow-md"
                            />
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="space-y-1">
                        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-white drop-shadow-md">
                            Create an account
                        </h1>
                        <p className="text-sm text-blue-50 font-normal mt-1 leading-relaxed drop-shadow-xs">
                            Enter your details below to create your account
                        </p>
                    </div>

                    {/* Register Form */}
                    <Form
                        {...registerStore.form()}
                        resetOnSuccess={['password', 'password_confirmation']}
                        disableWhileProcessing
                        className="flex flex-col gap-4"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="space-y-3.5">
                                    <div className="space-y-1">
                                        <Label htmlFor="register-name" className="block text-sm font-semibold text-white drop-shadow-xs">
                                            Full Name <span className="text-pink-300">*</span>
                                        </Label>
                                        <Input
                                            id="register-name"
                                            type="text"
                                            required
                                            tabIndex={isFlipped ? 1 : -1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="John Doe"
                                            className="h-11 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                        />
                                        <InputError message={errors.name} className="mt-0.5" />
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="register-email" className="block text-sm font-semibold text-white drop-shadow-xs">
                                            Your Email <span className="text-pink-300">*</span>
                                        </Label>
                                        <Input
                                            id="register-email"
                                            type="email"
                                            required
                                            tabIndex={isFlipped ? 2 : -1}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="h-11 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="register-password" className="block text-sm font-semibold text-white drop-shadow-xs">
                                            Password <span className="text-pink-300">*</span>
                                        </Label>
                                        <PasswordInput
                                            id="register-password"
                                            required
                                            tabIndex={isFlipped ? 3 : -1}
                                            autoComplete="new-password"
                                            name="password"
                                            placeholder="Enter your password"
                                            passwordrules={passwordRules}
                                            className="h-11 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="register-password-confirm" className="block text-sm font-semibold text-white drop-shadow-xs">
                                            Confirm Password <span className="text-pink-300">*</span>
                                        </Label>
                                        <PasswordInput
                                            id="register-password-confirm"
                                            required
                                            tabIndex={isFlipped ? 4 : -1}
                                            autoComplete="new-password"
                                            name="password_confirmation"
                                            placeholder="Repeat your password"
                                            passwordrules={passwordRules}
                                            className="h-11 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 h-12 w-full rounded-full bg-[#00477b] hover:bg-[#003860] text-sm font-semibold text-white shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                                        tabIndex={isFlipped ? 5 : -1}
                                        disabled={processing}
                                        data-test="register-user-button"
                                    >
                                        {processing && <Spinner />}
                                        <span>Create account</span>
                                        <ArrowRight className="size-4" />
                                    </Button>
                                </div>

                                <div className="text-center text-xs text-blue-50 pt-1 drop-shadow-xs">
                                    Already have an account?{' '}
                                    <button
                                        type="button"
                                        onClick={handleFlipToLogin}
                                        tabIndex={isFlipped ? 6 : -1}
                                        className="font-bold text-white hover:underline cursor-pointer transition-colors"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </>
                        )}
                    </Form>

                    <div className="pt-2 text-center text-xs text-blue-100/90 drop-shadow-xs">
                        © {new Date().getFullYear()} Gnosys Digital. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
