import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FaqItem {
    q?: string;
    question?: string;
    a?: string;
    answer?: string;
}

export interface FaqAccordionProps {
    items: FaqItem[];
    defaultOpenIndex?: number | null;
    iconPosition?: 'left' | 'right';
    containerClassName?: string;
    itemClassName?: string;
    buttonClassName?: string;
    answerClassName?: string;
    iconColorClass?: string;
    iconSize?: number;
}

export default function FaqAccordion({
    items,
    defaultOpenIndex = 0,
    iconPosition = 'left',
    containerClassName,
    itemClassName,
    buttonClassName,
    answerClassName,
    iconColorClass = 'text-[#00477b]',
    iconSize = 4
}: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={cn("bg-white border rounded-xl overflow-hidden shadow-sm", containerClassName)}>
            {items.map((item, idx) => {
                const questionText = item.q || item.question || '';
                const answerText = item.a || item.answer || '';
                const isOpen = openIndex === idx;
                const IconComponent = isOpen ? Minus : Plus;

                return (
                    <div 
                        key={idx} 
                        className={cn("border-b border-gray-100 last:border-b-0", itemClassName)}
                    >
                        <button
                            type="button"
                            className={cn(
                                "w-full text-left px-6 py-5 font-bold text-gray-900 text-sm sm:text-base flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors",
                                buttonClassName
                            )}
                            onClick={() => toggleFaq(idx)}
                        >
                            {iconPosition === 'left' ? (
                                <div className="flex items-center gap-3">
                                    <div className={cn(iconColorClass, "shrink-0")}>
                                        <IconComponent className={`size-${iconSize}`} />
                                    </div>
                                    <span>{questionText}</span>
                                </div>
                            ) : (
                                <>
                                    <span>{questionText}</span>
                                    <div className={cn(iconColorClass, "shrink-0 ml-4")}>
                                        <IconComponent className={`size-${iconSize}`} />
                                    </div>
                                </>
                            )}
                        </button>
                        
                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className={cn("px-14 pb-5 text-zinc-600 text-sm leading-relaxed", answerClassName)}>
                                    {answerText}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
