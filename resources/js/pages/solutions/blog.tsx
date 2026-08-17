import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const blogPosts = [
    {
        imageText: "Rescuing the Un-runnable",
        badge: "CASE STUDY",
        title: "Rescuing the Un-runnable: Application Recovery & Modernization for Painteye & Exotic",
        excerpt: "The Situation Two Applications, One Critical Problem Painteye and Exotic were production web applications serving real customers with active data. Both were deployed on Vercel",
        author: "Jay Thanki",
        date: "July 20, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-blue-50"
    },
    {
        imageText: "The URL Redirect Strategy",
        badge: "CONTENT & SEO",
        title: "The URL Redirect Strategy That Skyrocketed This Ecom Brand from #4 to #1 in 7 Days",
        excerpt: "The Hidden Opportunity in Your Existing Rankings One of the biggest mistakes I see e-commerce brand owners make is treating their website like a product catalog rather than a structured revenue",
        author: "Jay Thanki",
        date: "July 16, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-purple-50"
    },
    {
        imageText: "Recovering Trust & Defeating Malware",
        badge: "CASE STUDY",
        title: "From 285K Spam URLs to Full Recovery: How Technical SEO Restored a Site Google Abandoned",
        excerpt: "When we last shared this project, we had just completed a deep malware cleanup of a compromised WordPress website. The malicious code was gone. The",
        author: "Jay Thanki",
        date: "July 7, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-teal-50"
    },
    {
        imageText: "The $10,000/Month Trap",
        badge: "MARKETING, GROWTH & SEO",
        title: "The $10,000/Month Trap: Why \"Premium\" SEO Agencies Are Often Just Premium Rip-Offs",
        excerpt: "The High Cost of Low-Quality Work In the world of digital marketing, there is a pervasive myth that a high price tag guarantees high-quality results. Nowhere is this more apparent",
        author: "Jay Thanki",
        date: "July 6, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-red-50"
    },
    {
        imageText: "The Silent SEO Mistake",
        badge: "SEO STRATEGY",
        title: "The Silent SEO Mistake Costing You Search Traffic and Money",
        excerpt: "Every day, thousands of businesses invest heavily in content creation, backlink strategies, and on-page optimization. They see initial gains, maybe even land on page one for a few target keywords. But",
        author: "Jay Thanki",
        date: "July 5, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-amber-50"
    },
    {
        imageText: "Transforming Businesses with Modern Software",
        badge: "DIGITAL TRANSFORMATION",
        title: "Transforming Businesses with Modern Software Solutions",
        excerpt: "How Modern Tech Stacks and ERPs Drive Efficiency, Growth, and ROI In today's digital-first business environment, legacy systems are no longer just an inconvenience — they are a business risk.",
        author: "Jay Thanki",
        date: "July 4, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-cyan-50"
    },
    {
        imageText: "AI in Action: Smart Automation",
        badge: "AI AUTOMATION USE CASES",
        title: "AI in Action: 5 High-Impact Automation Use Cases for Modern Enterprises",
        excerpt: "Moving Beyond the Hype: How Pragmatic AI is Transforming Business Workflows Artificial Intelligence has moved from speculative concept to boardroom priority. But for most business leaders, the question is no longer",
        author: "Jay Thanki",
        date: "July 3, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-indigo-50"
    },
    {
        imageText: "The Hidden Cost of Manual Processes",
        badge: "ERP FOR SMES",
        title: "The Hidden Cost of Manual Processes: Why Excel Is Costing Your Business More Than You Think",
        excerpt: "The Spreadsheet Trap In the early days of a business, spreadsheets are a superpower. They are flexible, free, and require no training. But as order volume grows, spreadsheets become bottlenecks.",
        author: "Jay Thanki",
        date: "July 2, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-emerald-50"
    },
    {
        imageText: "Custom Software vs. SaaS",
        badge: "CUSTOM SOFTWARE",
        title: "Custom Software vs. Commercial SaaS: When Should You Build Instead of Buy?",
        excerpt: "The Software Dilemma Every growing company eventually faces a critical technical crossroads: should you subscribe to an existing SaaS product or invest in custom-built software?",
        author: "Jay Thanki",
        date: "July 1, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-rose-50"
    },
    {
        imageText: "Smart School Management System",
        badge: "EDUCATION ERP",
        title: "Smart School Management System: Why Every School Needs Digital Transformation in 2026",
        excerpt: "Running a school smoothly involves managing many daily responsibilities at the same time. Admissions, fee collection, attendance tracking, timetable planning, and parent communication all require",
        author: "Jay Thanki",
        date: "May 2, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-indigo-50"
    }
];

export default function Blog() {
    return (
        <MainLayout>
            <Head title="Blog | Gnosys Digital" />
            
            <div className="bg-transparent min-h-screen py-24">
                <div className="w-full mx-auto px-4 lg:px-12 max-w-[1600px] text-center">
                    
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                        OUR BLOG
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-14">
                        Latest Insights & Articles
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full text-left">
                        {blogPosts.map((post, index) => (
                            <div 
                                key={index} 
                                className="group bg-gradient-to-br from-white/50 via-white/35 to-white/20 backdrop-blur-xl border border-white/60 hover:border-white/80 rounded-[2rem] p-6 sm:p-7 flex flex-col shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/50 hover:-translate-y-2 transition-all duration-400 h-full relative overflow-hidden"
                            >
                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                                {/* Top Glassmorphism Banner / Thumbnail */}
                                <div className="h-44 w-full bg-gradient-to-br from-white/45 via-white/25 to-blue-50/20 backdrop-blur-md border border-white/60 rounded-2xl flex flex-col items-center justify-center p-6 text-center mb-6 relative overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute -top-10 -right-10 size-28 rounded-full bg-blue-200/20 blur-2xl pointer-events-none"></div>
                                    <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-cyan-200/15 blur-2xl pointer-events-none"></div>

                                    <h3 className="text-[17px] font-normal text-[#00477b] z-10 relative tracking-tight leading-snug">
                                        {post.imageText}
                                    </h3>
                                    
                                    <div className="absolute top-3 right-3 z-20">
                                        <div className="bg-white/70 backdrop-blur-md text-[#00477b] text-[9px] font-semibold px-2.5 py-1 rounded-full shadow-sm border border-white/80 uppercase tracking-widest">
                                            {post.badge}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Card Body */}
                                <div className="flex flex-col flex-grow relative z-10">
                                    <Link href={post.link} className="block mb-3">
                                        <h4 className="text-[16px] font-normal text-zinc-900 group-hover:text-[#00477b] transition-colors leading-snug tracking-tight line-clamp-2">
                                            {post.title}
                                        </h4>
                                    </Link>
                                    
                                    <p className="text-[13px] text-zinc-500 font-normal mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>
                                    
                                    <Link 
                                        href={post.link} 
                                        className="inline-flex items-center gap-2 bg-[#00477b] text-white text-[12px] font-medium px-6 py-2.5 rounded-full mb-6 hover:bg-[#00335e] shadow-md shadow-blue-900/10 hover:-translate-y-0.5 transition-all self-start mt-auto group-hover:gap-3"
                                    >
                                        <span>Read More</span>
                                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                    
                                    <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between text-[11px] text-zinc-400 font-normal">
                                        <span className="text-zinc-600 font-medium">{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-16 gap-3">
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-sm text-sm font-normal text-zinc-500 hover:bg-white hover:shadow-md transition-all">
                            1
                        </Link>
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-white shadow-md text-sm font-semibold text-[#00477b] transition-all">
                            2
                        </Link>
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-sm text-sm font-normal text-zinc-500 hover:bg-white hover:shadow-md transition-all">
                            3
                        </Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
