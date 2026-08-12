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
            
            <div className="bg-transparent min-h-screen py-24">
                <div className="w-full mx-auto px-4 lg:px-12 max-w-[1600px] text-center">
                    
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Our Blog</span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">Latest Insights & Articles</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-left">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="group bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1.5 ring-1 ring-white/50 transition-all duration-400 h-full">
                                <div className={`h-44 w-full bg-blue-50/60 border border-white/80 rounded-[1rem] flex items-center justify-center p-6 text-center mb-6 relative overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 mix-blend-overlay"></div>
                                    <h3 className="text-[19px] font-bold text-[#022c54] z-10 relative tracking-tight drop-shadow-sm leading-tight">{post.imageText}</h3>
                                    <div className="absolute top-3 right-3 z-20">
                                        <div className="bg-white/90 backdrop-blur-md text-[#022c54] text-[9px] font-black px-2.5 py-1 rounded-full shadow-sm border border-white/80 uppercase tracking-widest">
                                            {post.badge}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col flex-grow">
                                    <Link href={post.link} className="block mb-3">
                                        <h4 className="text-[17px] font-medium text-[#00477b] hover:text-blue-600 transition-colors leading-snug tracking-tight">
                                            {post.title}
                                        </h4>
                                    </Link>
                                    <p className="text-[13px] text-zinc-500 font-medium mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>
                                    
                                    <Link href={post.link} className="inline-flex items-center justify-center bg-[#00477b] border border-[#00335e] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full mb-6 hover:bg-[#00335e] hover:border-[#002646] hover:shadow-[0_0_15px_rgba(24,24,27,0.5)] hover:-translate-y-0.5 transition-all self-start mt-auto">
                                        Read More &rarr;
                                    </Link>
                                    
                                    <div className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center text-[10px] text-zinc-400 font-bold uppercase tracking-wider gap-2">
                                        <span className="text-zinc-600">{post.author}</span>
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
                        <span className="flex items-center justify-center text-sm font-bold text-zinc-400 tracking-widest px-1">
                            ...
                        </span>
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-[#02498b] hover:bg-slate-50 transition-colors">
                            10
                        </Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
