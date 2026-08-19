import { Head } from '@inertiajs/react';
import AuthFlipCard from '@/components/auth-flip-card';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <>
            <Head title="Create an account - Gnosys Digital" />
            <AuthFlipCard
                initialMode="register"
                passwordRules={passwordRules}
            />
        </>
    );
}

Register.layout = {
    title: 'Create an account',
    description: 'Enter your details below to create your account',
};
