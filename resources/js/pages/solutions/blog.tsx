import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
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
        excerpt: "The Hidden Opportunity in Your Existing Rankings One of the biggest mistakes I see e-commerce brand owners make is treating their website like a static",
        author: "Jay Thanki",
        date: "July 16, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-teal-50"
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
        bgColor: "bg-slate-100"
    },
    {
        imageText: "The $10,000/Month Trap",
        badge: "MARKETING, GROWTH & SEO",
        title: "The $10,000/Month Trap: Why \"Premium\" SEO Agencies Are Often Just Premium Rip-Offs",
        excerpt: "The High Cost of Low-Quality Work In the world of digital marketing, there is a pervasive myth that a high price tag guarantees high-quality results.",
        author: "Jay Thanki",
        date: "July 6, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-indigo-50"
    },
    {
        imageText: "The Silent SEO Mistake Sabotaging Your Affiliate Site",
        badge: "SEO STRATEGY",
        title: "The Silent SEO Mistake Sabotaging Your Affiliate Site (And How to Fix It In 10 Minutes)",
        excerpt: "If you've been grinding away in the trenches of affiliate marketing or e-commerce for any length of time, you know the feeling. You've written what",
        author: "Jay Thanki",
        date: "July 4, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-sky-50"
    },
    {
        imageText: "Transforming Businesses with Digital Innovation",
        badge: "DIGITAL TRANSFORMATION",
        title: "Transforming Businesses with Digital Innovation",
        excerpt: "In today's fast-paced digital world, businesses are constantly facing pressure to evolve and adapt to new technologies. What worked a few years ago is no",
        author: "Jay Thanki",
        date: "June 27, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-cyan-50"
    },
    {
        imageText: "Digital Business Systems",
        badge: "AI AUTOMATION USE CASES",
        title: "What Happens When Your Competitor Goes Fully Automated?",
        excerpt: "Businesses today are struggling with disconnected systems where sales, operations, and customer management are handled separately without any unified digital structure. This creates delays, miscommunication,",
        author: "Jay Thanki",
        date: "June 8, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-blue-50"
    },
    {
        imageText: "The Hidden Cost of Manual Records",
        badge: "ERP FOR SMES",
        title: "The Hidden Cost of Manual Records: Why ERPNext is an Auditor's Best Friend",
        excerpt: "Every business owner has experienced that moment of panic before an audit. Teams start searching through folders, emails, spreadsheets, and filing cabinets trying to locate",
        author: "Jay Thanki",
        date: "May 30, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-red-50"
    },
    {
        imageText: "WordPress Malware Cleanup",
        badge: "PERFORMANCE OPTIMIZATION",
        title: "How We Cleaned and Optimized a Malware-Infected WordPress Website",
        excerpt: "A recent client approached us with a serious issue: their WordPress website had become extremely slow, unstable, and unreliable. At first, it looked like a",
        author: "tdwsadmin",
        date: "May 21, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-zinc-800"
    },
    {
        imageText: "Transforming ARCEUS Real Estate Platform",
        badge: "CASE STUDY",
        title: "Transforming ARCEUS Webdesign's Real Estate Platform Into a Modern Digital Property Experience",
        excerpt: "Client: ARCEUS Industry: Real Estate / Property Listings / Digital Platforms Delivered By: Gnosys Digital Executive Summary ARCEUS Webdesign approached TDWS Consulting Group with the",
        author: "tdwsadmin",
        date: "May 19, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-slate-100"
    },
    {
        imageText: "Help Businesses Improve Customer Relationships",
        badge: "BUSINESS & STARTUPS",
        title: "How CRM Systems Help Businesses Build Stronger Customer Relationships",
        excerpt: "Customer expectations are higher than ever in today's competitive business environment. People expect quick responses, personalized communication, and smooth interactions at every stage of the",
        author: "Jay Thanki",
        date: "May 9, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-blue-50"
    },
    {
        imageText: "Smart School Management System",
        badge: "DIGITAL TRANSFORMATION",
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
            
            <div className="bg-[#fcfdfd] min-h-screen py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="bg-white border border-[#e2e8f0] rounded-sm flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                {/* Card Header Image Area */}
                                <div className={`relative h-56 ${post.bgColor} border-b border-[#e2e8f0] flex items-center justify-center p-6 text-center`}>
                                    <h3 className={`text-xl font-bold ${post.bgColor === 'bg-zinc-800' ? 'text-white' : 'text-[#022c54]'} z-10`}>
                                        {post.imageText}
                                    </h3>
                                    
                                    {/* Geometric abstract background for images */}
                                    <div className={`absolute inset-0 ${post.bgColor === 'bg-zinc-800' ? 'opacity-20 text-white' : 'opacity-10'} flex items-center justify-center pointer-events-none`}>
                                        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" fill="none" stroke="currentColor" strokeWidth="1">
                                            <rect x="20" y="20" width="60" height="60" rx="4" />
                                            <circle cx="50" cy="50" r="20" />
                                            <line x1="20" y1="50" x2="80" y2="50" />
                                            <line x1="50" y1="20" x2="50" y2="80" />
                                        </svg>
                                    </div>

                                    {/* Dynamic Category Badge */}
                                    <div className="absolute top-4 right-4 bg-[#02498b] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                                        {post.badge}
                                    </div>
                                </div>
                                
                                {/* Card Body */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <Link href={post.link} className="group">
                                        <h2 className="text-[17px] font-bold text-[#02498b] mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-[13px] text-zinc-600 font-medium mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>
                                    
                                    <Link href={post.link} className="text-[#02498b] text-[11px] font-bold uppercase tracking-wider mb-8 hover:text-blue-600 transition-colors">
                                        READ MORE +
                                    </Link>
                                    
                                    {/* Footer */}
                                    <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center text-[11px] text-zinc-500 font-medium gap-2">
                                        <span className="text-[#022c54] font-bold">{post.author}</span>
                                        <span className="text-zinc-300">|</span>
                                        <span>{post.date}</span>
                                        <span className="text-zinc-300">|</span>
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-16 gap-3">
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-zinc-500 hover:bg-slate-50 transition-colors">
                            1
                        </Link>
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-[#02498b] hover:bg-slate-50 transition-colors">
                            2
                        </Link>
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-[#02498b] hover:bg-slate-50 transition-colors">
                            3
                        </Link>
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-[#02498b] hover:bg-slate-50 transition-colors">
                            4
                        </Link>
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-[#02498b] hover:bg-slate-50 transition-colors">
                            5
                        </Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
