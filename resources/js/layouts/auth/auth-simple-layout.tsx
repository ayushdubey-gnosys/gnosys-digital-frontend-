import MainLayout from '@/layouts/main-layout';
import type { AuthLayoutProps } from '@/types';

const lightModeVars = {
    '--background': 'oklch(1 0 0)',
    '--foreground': 'oklch(0.145 0 0)',
    '--card': 'oklch(1 0 0)',
    '--card-foreground': 'oklch(0.145 0 0)',
    '--popover': 'oklch(1 0 0)',
    '--popover-foreground': 'oklch(0.145 0 0)',
    '--primary': 'oklch(0.205 0 0)',
    '--primary-foreground': 'oklch(0.985 0 0)',
    '--secondary': 'oklch(0.97 0 0)',
    '--secondary-foreground': 'oklch(0.205 0 0)',
    '--muted': 'oklch(0.97 0 0)',
    '--muted-foreground': 'oklch(0.556 0 0)',
    '--accent': 'oklch(0.97 0 0)',
    '--accent-foreground': 'oklch(0.205 0 0)',
    '--destructive': 'oklch(0.577 0.245 27.325)',
    '--destructive-foreground': 'oklch(0.577 0.245 27.325)',
    '--border': 'oklch(0.922 0 0)',
    '--input': 'oklch(0.922 0 0)',
    '--ring': 'oklch(0.87 0 0)'
} as React.CSSProperties;

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <MainLayout>
            <div style={lightModeVars} className="flex flex-col items-center justify-center gap-6 py-20 px-6 md:px-10 bg-transparent min-h-[calc(100vh-100px)]">
                <div className="w-full max-w-md bg-card text-card-foreground p-8 md:p-10 rounded-2xl shadow-xl border border-border">
                    <div className="flex flex-col gap-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-[#00477b]">{title}</h1>
                            <p className="text-center text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
