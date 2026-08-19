import { Form, Head } from '@inertiajs/react';
import { LoaderCircle, ArrowRight } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <>
            <Head title="Forgot password - Gnosys Digital" />

            {status && (
                <div className="mb-4 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-center text-xs font-medium text-white">
                    {status}
                </div>
            )}

            <div className="space-y-5">
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="block text-sm font-semibold text-white drop-shadow-xs">
                                    Email Address <span className="text-pink-300">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                    placeholder="john@example.com"
                                    className="h-12 rounded-2xl border border-white/80 bg-white/90 px-4 text-sm text-gray-900 placeholder:text-gray-400 shadow-md transition focus:bg-white focus:border-[#00477b] focus:ring-2 focus:ring-blue-300"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="my-5 flex items-center justify-start">
                                <Button
                                    className="h-12 w-full rounded-full bg-[#00477b] hover:bg-[#003860] text-sm font-semibold text-white shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-white/20"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing ? (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <>
                                            <span>Email password reset link</span>
                                            <ArrowRight className="size-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="text-center text-xs text-blue-50 drop-shadow-xs">
                    <span>Or, return to </span>
                    <TextLink href={login()} className="font-bold text-white hover:underline">
                        Log in
                    </TextLink>
                </div>
            </div>
        </>
    );
}

ForgotPassword.layout = {
    title: 'Forgot password',
    description: 'Enter your email to receive a password reset link.',
};
