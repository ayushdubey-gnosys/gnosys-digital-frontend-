import MainLayout from '@/layouts/main-layout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/scroll-reveal';
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
        bgColor: "bg-amber-50"
    },
    {
        imageText: "2x SCALE Without Adding Overhead",
        title: "2x SCALE Without Adding Overhead: Custom Logistics Platform for Regional Distributor",
        excerpt: "The Situation The client is a fast-growing regional distributor operating across 4 warehouses with 1,200 active retail touchpoints. As order volumes doubled over 18 months, their manual dispatch",
        author: "Jay Thanki",
        date: "March 15, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-indigo-50"
    },
    {
        imageText: "From Blind Stocking to Data-Driven Buying",
        title: "From Blind Stocking to Data-Driven Buying: How a Retailer Cut Stockouts by 60%",
        excerpt: "Company Overview A multi-outlet retail chain was struggling with stock imbalances — overstocking slow items while high-demand products frequently ran out of stock.",
        author: "Aman Kapadiya",
        date: "February 12, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-purple-50"
    },
    {
        imageText: "From Reactive to Predictable",
        title: "From Reactive to Predictable: Building an ERP for Precision Manufacturing",
        excerpt: "Industry: Heavy Engineering & Components Delivered By: Gnosys Digital The client transitioned from spreadsheets to a unified ERPNext system with machine-level job card tracking.",
        author: "Aman Kapadiya",
        date: "January 25, 2025",
        comments: "No Comments",
        link: "#",
        bgColor: "bg-emerald-50"
    }
];

export default function CaseStudy() {
    return (
        <MainLayout>
            <Head title="Case Studies | Gnosys Digital" />
            
            <div className="bg-transparent min-h-screen py-24">
                <div className="w-full mx-auto px-4 lg:px-12 max-w-[1600px] text-center">
                    
                    <ScrollReveal animation="fade-up" delay={80}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs font-extrabold text-[#00477b] uppercase tracking-wider mb-4">
                            CASE STUDIES
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#00477b] mb-14">
                            Our Success Stories
                        </h2>
                    </ScrollReveal>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 w-full text-left">
                        {caseStudies.map((study, index) => (
                            <ScrollReveal key={index} animation="fade-up" delay={index * 70} className="h-full">
                                <div 
                                    className="group bg-gradient-to-br from-white/50 via-white/35 to-white/20 backdrop-blur-xl border border-white/60 hover:border-white/80 rounded-[2rem] p-6 sm:p-7 flex flex-col shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/50 hover:-translate-y-2 transition-all duration-400 h-full relative overflow-hidden"
                                >
                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00477b]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

                                {/* Top Glassmorphism Banner / Thumbnail */}
                                <div className="h-44 w-full bg-gradient-to-br from-white/45 via-white/25 to-blue-50/20 backdrop-blur-md border border-white/60 rounded-2xl flex flex-col items-center justify-center p-6 text-center mb-6 relative overflow-hidden shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute -top-10 -right-10 size-28 rounded-full bg-blue-200/20 blur-2xl pointer-events-none"></div>
                                    <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-cyan-200/15 blur-2xl pointer-events-none"></div>

                                    <h3 className="text-[17px] font-normal text-[#00477b] z-10 relative tracking-tight leading-snug">
                                        {study.imageText}
                                    </h3>
                                    
                                    <div className="absolute top-3 right-3 z-20">
                                        <div className="bg-white/70 backdrop-blur-md text-[#00477b] text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm border border-white/80 uppercase tracking-widest">
                                            Case Study
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Card Body */}
                                <div className="flex flex-col flex-grow relative z-10">
                                    <Link href={study.link} className="block mb-3">
                                        <h4 className="text-[16px] font-normal text-zinc-900 group-hover:text-[#00477b] transition-colors leading-snug tracking-tight line-clamp-2">
                                            {study.title}
                                        </h4>
                                    </Link>
                                    
                                    <p className="text-[13px] text-zinc-500 font-normal mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {study.excerpt}
                                    </p>
                                    
                                    <Link 
                                        href={study.link} 
                                        className="inline-flex items-center gap-2 bg-[#00477b] text-white text-[12px] font-medium px-6 py-2.5 rounded-full mb-6 hover:bg-[#00335e] shadow-md shadow-blue-900/10 hover:-translate-y-0.5 transition-all self-start mt-auto group-hover:gap-3"
                                    >
                                        <span>Read Case Study</span>
                                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                    
                                    <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between text-[11px] text-zinc-400 font-normal">
                                        <span className="text-zinc-600 font-medium">{study.author}</span>
                                        <span>{study.date}</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
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
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
}
