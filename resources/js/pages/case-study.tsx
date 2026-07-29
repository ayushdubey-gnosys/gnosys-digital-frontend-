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
            
            <div className="bg-[#fcfdfd] min-h-screen py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="bg-white border border-[#e2e8f0] rounded-sm flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                                {/* Card Header Image Area */}
                                <div className={`relative h-56 ${study.bgColor} border-b border-[#e2e8f0] flex items-center justify-center p-6 text-center`}>
                                    <h3 className="text-xl font-bold text-[#022c54] z-10">{study.imageText}</h3>
                                    
                                    {/* Geometric abstract background for images */}
                                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                                        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" fill="none" stroke="currentColor" strokeWidth="1">
                                            <rect x="20" y="20" width="60" height="60" rx="4" />
                                            <circle cx="50" cy="50" r="20" />
                                            <line x1="20" y1="50" x2="80" y2="50" />
                                            <line x1="50" y1="20" x2="50" y2="80" />
                                        </svg>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 bg-[#02498b] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                                        Case Study
                                    </div>
                                </div>
                                
                                {/* Card Body */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <Link href={study.link} className="group">
                                        <h2 className="text-[17px] font-bold text-[#02498b] mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                                            {study.title}
                                        </h2>
                                    </Link>
                                    <p className="text-[13px] text-zinc-600 font-medium mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {study.excerpt}
                                    </p>
                                    
                                    <Link href={study.link} className="text-[#02498b] text-[11px] font-bold uppercase tracking-wider mb-8 hover:text-blue-600 transition-colors">
                                        READ MORE +
                                    </Link>
                                    
                                    {/* Footer */}
                                    <div className="pt-4 border-t border-[#e2e8f0] flex flex-wrap items-center text-[11px] text-zinc-500 font-medium gap-2">
                                        <span className="text-[#022c54] font-bold">{study.author}</span>
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
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-zinc-500 hover:bg-slate-50 transition-colors">
                            1
                        </Link>
                        <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white border border-[#e2e8f0] text-sm font-bold text-[#02498b] hover:bg-slate-50 transition-colors">
                            2
                        </Link>
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
