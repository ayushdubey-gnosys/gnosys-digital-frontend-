import React, { useEffect, useRef, useState, ElementType, ReactNode, CSSProperties } from 'react';

export type RevealAnimation =
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'fade'
    | 'zoom-in'
    | 'zoom-out';

interface ScrollRevealProps {
    children: ReactNode;
    animation?: RevealAnimation;
    delay?: number; // in milliseconds
    duration?: number; // in milliseconds
    distance?: number; // in px, default 30
    threshold?: number;
    rootMargin?: string;
    className?: string;
    style?: CSSProperties;
    as?: ElementType;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 750,
    distance = 32,
    threshold = 0.1,
    rootMargin = '0px 0px -40px 0px',
    className = '',
    style = {},
    as: Component = 'div',
    once = true,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check if IntersectionObserver is available
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.disconnect();
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, once]);

    // Initial transform offset based on chosen animation
    const getInitialTransform = (): string => {
        switch (animation) {
            case 'fade-up':
                return `translate3d(0, ${distance}px, 0)`;
            case 'fade-down':
                return `translate3d(0, -${distance}px, 0)`;
            case 'fade-left':
                return `translate3d(${distance}px, 0, 0)`;
            case 'fade-right':
                return `translate3d(-${distance}px, 0, 0)`;
            case 'zoom-in':
                return `scale(0.92)`;
            case 'zoom-out':
                return `scale(1.08)`;
            case 'fade':
            default:
                return 'none';
        }
    };

    const combinedStyle: CSSProperties = {
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
    };

    return (
        <Component
            ref={ref}
            className={className}
            style={combinedStyle}
        >
            {children}
        </Component>
    );
}
