import React from 'react';

interface HeroWaveDividerProps {
    className?: string;
}

export default function HeroWaveDivider({ className = '' }: HeroWaveDividerProps) {
    return (
        <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none drop-shadow-xs ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 250"
                preserveAspectRatio="none"
                className="w-full h-[60px] md:h-[100px] lg:h-[140px] xl:h-[160px] scale-x-[-1]"
            >
                <path
                    fill="currentColor"
                    className="text-blue-200/80"
                    d="M0,120 C300,120 500,250 1440,100 L1440,250 L0,250 Z"
                />
                <path
                    fill="currentColor"
                    className="text-blue-100"
                    d="M0,160 C400,160 600,250 1440,140 L1440,250 L0,250 Z"
                />
            </svg>
        </div>
    );
}
