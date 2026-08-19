import React from 'react';
import MainLayout from '@/layouts/main-layout';
import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({
    children,
}: AuthLayoutProps) {
    return (
        <MainLayout>
            <div className="w-full min-h-[calc(100vh-70px)] relative overflow-hidden flex flex-col lg:flex-row bg-transparent">
                
                {/* Full-Bleed Background Image Across Entire Page (No Cropping) */}
                <img
                    src="/assets/login.webp"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-fill z-0 pointer-events-none select-none"
                />

                {/* Left 55% Section - Completely Clean Image View (No Text) */}
                <div className="hidden lg:flex lg:w-[55%] xl:w-[58%] relative z-10 pointer-events-none">
                    {/* Left side remains 100% clean showing the full cherry blossom tree */}
                </div>

                {/* Right 45% Section - 3D Flip Card Container with Slightly Increased Width */}
                <div className="w-full lg:w-[45%] xl:w-[42%] relative z-10 flex flex-col justify-center p-6 sm:p-8 xl:p-10 bg-transparent min-h-full">
                    {children}
                </div>

            </div>
        </MainLayout>
    );
}
