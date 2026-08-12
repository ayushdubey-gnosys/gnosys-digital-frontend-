import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

const caseStudies = [
    {
        imageText: "Rescuing the Un-runnable",
        title: "Rescuing the Un-runnable: Application Recovery & Modernization for Painteye & Exotic",
        excerpt: "The Situation Two Applications, One Critical Problem Painteye and Exotic were production web applications serving real customers with active data. Both were deployed on Vercel",
        author: "Jay Thanki",
        date: "July 20, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-blue-50"
    },
    {
        imageText: "Recovering Trust & Defeating Malware",
        title: "From 285K Spam URLs to Full Recovery: How Technical SEO Restored a Site Google Abandoned",
        excerpt: "When we last shared this project, we had just completed a deep malware cleanup of a compromised WordPress website. The malicious code was gone. The",
        author: "Jay Thanki",
        date: "July 7, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-teal-50"
    },
    {
        imageText: "Transforming ARCEUS Real Estate Platform",
        title: "Transforming ARCEUS Webdesign's Real Estate Platform Into a Modern Digital Property Experience",
        excerpt: "Client: ARCEUS Industry: Real Estate / Property Listings / Digital Platforms Delivered By: Gnosys Digital Executive Summary ARCEUS Webdesign approached TDWS Consulting Group with the",
        author: "tdwsadmin",
        date: "May 19, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-slate-100"
    },
    {
        imageText: "Distribution Case Study",
        title: "From Inventory Chaos to Control: How a Distributor Improved Stock Accuracy to 98%",
        excerpt: "Company Overview The client is a mid-size distribution company operating across multiple warehouses and locations, dealing in high-volume FMCG and industrial goods. With a growing",
        author: "Jay Thanki",
        date: "April 4, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-zinc-100"
    },
    {
        imageText: "3x SCALE Without Adding Staff",
        title: "How an E-commerce Brand Scaled 3x Without Hiring More Ops Team Using ERPNext",
        excerpt: "Company Overview: The client is a fast-growing D2C e-commerce brand selling across multiple marketplaces, including Amazon, Flipkart, and Shopify. Operating in a highly competitive environment,",
        author: "Jay Thanki",
        date: "April 1, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-orange-50"
    },
    {
        imageText: "ERPNext for Construction",
        title: "How a Construction Company Reduced Project Delays by 32% Using ERPNext",
        excerpt: "Company Overview: The client is a mid-size EPC contractor managing residential complexes, commercial buildings, and small infrastructure projects. Operating in a competitive construction market, the",
        author: "Jay Thanki",
        date: "March 31, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-blue-50"
    },
    {
        imageText: "From Blind Stocking to Data-Driven Inventory Valuation",
        title: "From Blind Stocking to Data-Driven Inventory Valuation With ERPNext",
        excerpt: "Industry: Retail (Multi-Store Chain) Core Challenge: Fragmented inventory data leading to excess stock, cash flow issues, and reactive purchasing Solution: ERPNext delivers real-time inventory valuation, replenishment automation,",
        author: "Aman Kapadiya",
        date: "January 27, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-indigo-50"
    },
    {
        imageText: "From Reactive to Predictable: Precision Manufacturing",
        title: "From Reactive to Predictable: How ERPNext Unified a Precision Manufacturing Operation",
        excerpt: "Executive Summary Within six months, a precision component manufacturer increased on-time delivery from 78% to 95% and reduced machine downtime by 15%. These gains were",
        author: "Aman Kapadiya",
        date: "January 25, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-sky-50"
    },
    {
        imageText: "From Reactive to Predictable: Precision Manufacturing",
        title: "From Reactive to Predictable: How ERPNext Unified a Precision Manufacturing Operation",
        excerpt: "Executive Summary Within six months, a precision component manufacturer increased on-time delivery from 78% to 95% and reduced machine downtime by 15%. These gains were",
        author: "Aman Kapadiya",
        date: "January 24, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-cyan-50"
    },
    {
        imageText: "ERPNext Healthcare Case Study",
        title: "Digital Transformation of a Multi-Specialty Hospital",
        excerpt: "Industry Profile Sector: Healthcare (Acute Care, Outpatient & Diagnostic Services) Country: India Core Challenge: Fragmented Clinical, Financial, and Operational Systems Functional Scope+ Clinical: EMR, Pharmacy, Laboratory+ Financial:",
        author: "Aman Kapadiya",
        date: "January 25, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-emerald-50"
    },
    {
        imageText: "From Disconnected Data to Unified Control",
        title: "From Disconnected Data to Unified Control: An ERPNext Transformation",
        excerpt: "Client Profile The Transformation in a Nutshell A concise view of how operational challenges were converted into measurable outcomes: Challenge Solution Result Siloed systems across",
        author: "Aman Kapadiya",
        date: "January 3, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-blue-50"
    },
    {
        imageText: "Migrating 16 Years of Business Data",
        title: "How We Migrated 16 Years of Business Data to ERPNext Without Losing a Single Transaction",
        excerpt: "Project Snapshot Executive Summary Gnosys Digital migrated 16 years of business data to ERPNext with zero downtime and 100 percent data preservation, reducing month-end closing",
        author: "Aman Kapadiya",
        date: "December 30, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-slate-100"
    }
];

export default function CaseStudy() {
    return (
        <MainLayout>
            <Head title="Case Studies | Gnosys Digital" />
            
            <div className="bg-transparent min-h-screen py-24">
                <div className="w-full mx-auto px-4 lg:px-12 max-w-[1600px] text-center">
                    
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">Case Studies</span>
                    <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-12">Our Success Stories</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full text-left">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="group bg-white/50 backdrop-blur-xl border border-white/80 rounded-2xl p-6 flex flex-col shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1.5 ring-1 ring-white/50 transition-all duration-400 h-full">
                                <div className={`h-44 w-full bg-blue-50/60 border border-white/80 rounded-[1rem] flex items-center justify-center p-6 text-center mb-6 relative overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 mix-blend-overlay"></div>
                                    <h3 className="text-[19px] font-bold text-[#022c54] z-10 relative tracking-tight drop-shadow-sm leading-tight">{study.imageText}</h3>
                                    <div className="absolute top-3 right-3 z-20">
                                        <div className="bg-white/90 backdrop-blur-md text-[#022c54] text-[9px] font-black px-2.5 py-1 rounded-full shadow-sm border border-white/80 uppercase tracking-widest">
                                            Case Study
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col flex-grow">
                                    <Link href={study.link} className="block mb-3">
                                        <h4 className="text-[17px] font-medium text-[#00477b] hover:text-blue-600 transition-colors leading-snug tracking-tight">
                                            {study.title}
                                        </h4>
                                    </Link>
                                    <p className="text-[13px] text-zinc-500 font-medium mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {study.excerpt}
                                    </p>
                                    
                                    <Link href={study.link} className="inline-flex items-center justify-center bg-[#00477b] border border-[#00335e] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full mb-6 hover:bg-[#00335e] hover:border-[#002646] hover:shadow-[0_0_15px_rgba(24,24,27,0.5)] hover:-translate-y-0.5 transition-all self-start mt-auto">
                                        Read Case Study &rarr;
                                    </Link>
                                    
                                    <div className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center text-[10px] text-zinc-400 font-bold uppercase tracking-wider gap-2">
                                        <span className="text-zinc-600">{study.author}</span>
                                        <span className="text-zinc-300">|</span>
                                        <span>{study.date}</span>
                                        <span className="text-zinc-300">|</span>
                                        <span>{study.comments}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-16 gap-3">
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-sm text-sm font-bold text-zinc-500 hover:bg-white hover:shadow-md transition-all">
                            1
                        </Link>
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-white shadow-md text-sm font-bold text-[#02498b] transition-all">
                            2
                        </Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
