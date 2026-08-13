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
    '--ring': 'oklch(0.87 0 0)',
} as React.CSSProperties;

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <MainLayout>
            <div
                style={lightModeVars}
                className="flex min-h-[calc(100vh-100px)] items-center justify-center bg-[linear-gradient(135deg,#dfeeff_0%,#edf5ff_35%,#f7ecf4_100%)] px-4 py-16 sm:px-6 lg:px-8"
            >
                <div className="w-full max-w-[440px] rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 md:p-10">
                    <div className="flex flex-col gap-7">
                        <div className="space-y-3 text-center">
                            <span className="inline-flex items-center rounded-full border border-[#dfeeff] bg-[#f3f8ff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#123b61]">
                                Gnosys Digital
                            </span>
                            <h1 className="text-3xl font-semibold tracking-[-0.06em] text-[#0b1f35]">{title}</h1>
                            <p className="text-center text-sm text-slate-600">{description}</p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
