"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Download, ArrowRight, GraduationCap, Briefcase, Award, Cpu, Newspaper, FileText } from "lucide-react";
import { PublicationCard } from "@/components/PublicationCard";
import Link from "next/link";

export default function Home() {
  const { profile } = useLanguage();

  return (
    <div className="space-y-20 animate-in fade-in duration-500 pb-20">
      
      {/* Hero Section */}
      <section className="space-y-8 pt-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
          Hi, I'm <span className="text-indigo-600">{profile.name}</span>.
        </h1>
        <div className="prose prose-lg prose-slate text-slate-600 max-w-none font-serif leading-relaxed">
            {profile.about.split('\n').map((line, i) => (
                <p key={i} className="mb-4">
                    {line.split(/(\*\*.*?\*\*)/).map((part, j) => 
                        part.startsWith('**') && part.endsWith('**') 
                            ? <strong key={j} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong> 
                            : part
                    )}
                </p>
            ))}
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
            <a href="/cv.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium font-sans text-sm hover:bg-slate-700 transition-all shadow-sm hover:shadow-md">
                <Download size={18} />
                {profile.labels.downloadCV}
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-medium font-sans text-sm hover:bg-slate-50 transition-all">
                {profile.labels.contactMe}
            </a>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <GraduationCap className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900">{profile.labels.education}</h2>
        </div>
        <div className="space-y-6">
            {profile.education.map((edu, index) => (
                <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-8 p-4 -mx-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-32 shrink-0 pt-1">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wide group-hover:text-indigo-600 transition-colors">{edu.period}</span>
                    </div>
                    <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{edu.school}</h3>
                        <p className="text-lg text-slate-700 font-medium">{edu.degree}</p>
                        <div className="flex flex-wrap gap-y-1 gap-x-4 text-sm text-slate-600">
                            <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-100">{profile.labels.gpa}: {edu.gpa}</span>
                            {edu.rank && <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">{profile.labels.rank}: {edu.rank}</span>}
                        </div>
                        {edu.coursework && (
                            <div className="pt-2">
                                <p className="text-sm text-slate-500 font-medium mb-1">{profile.labels.coursework}:</p>
                                <div className="text-sm text-slate-600 leading-relaxed flex flex-wrap gap-x-2">
                                    {edu.coursework.filter(course => {
                                        if (!course.grade) return true; // Keep if no grade specified
                                        if (["Ongoing", "Upcoming", "通过", "在修", "即将修读"].includes(course.grade)) return true; // Keep non-numerical grades
                                        
                                        const gradeValue = parseInt(course.grade.split('/')[0]);
                                        return !isNaN(gradeValue) && gradeValue >= 90;
                                    }).map((course, i) => (
                                        <React.Fragment key={i}>
                                            {course.highlight ? (
                                                <span className="font-semibold text-slate-900">
                                                    {course.name}{course.grade && ` (${course.grade})`}
                                                </span>
                                            ) : (
                                                <span>
                                                    {course.name}{course.grade && ` (${course.grade})`}
                                                </span>
                                            )}
                                            {i < edu.coursework.length - 1 && ", "}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Cpu className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900">{profile.labels.skills}</h2>
        </div>
        <div className="space-y-4">
            {profile.skills.map((skillGroup, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <h3 className="w-24 font-bold text-slate-900 shrink-0">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Briefcase className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900">{profile.labels.experience}</h2>
        </div>
        
        <div className="space-y-8">
            {profile.experience.map((exp, index) => (
                <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-8 relative p-4 -mx-4 rounded-xl hover:bg-slate-50 transition-colors">
                     <div className="w-32 shrink-0 pt-1 md:text-right">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wide group-hover:text-indigo-600 transition-colors">{exp.period}</span>
                    </div>
                    {/* Timeline Line & Dot (Desktop) */}
                    <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-slate-200">
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-[3px] border-indigo-600 rounded-full group-hover:scale-125 transition-transform" />
                    </div>
                    
                    <div className="flex-1 space-y-2 md:pl-8">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{exp.role}</h3>
                        <div className="text-slate-700 font-medium">
                            {exp.institution}
                            {exp.advisor && <span className="text-slate-500 font-normal"> — {profile.labels.advisedBy} {exp.advisor}</span>}
                        </div>
                        <ul className="list-disc list-outside ml-4 text-slate-600 space-y-1 mt-2 text-sm leading-relaxed">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      {/* News Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Newspaper className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900">{profile.labels.news}</h2>
        </div>
        <div className="space-y-3">
            {profile.news.map((item, index) => (
                <div key={index} className="group flex flex-col sm:flex-row gap-1 sm:gap-6 text-slate-700 p-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <span className="font-mono text-xs font-bold text-slate-400 min-w-[100px] pt-1.5">{item.date}</span>
                    <div className="flex-1 font-serif">
                         <p className="group-hover:text-slate-900 transition-colors">
                            {item.content.split(/(\*\*.*?\*\*)/).map((part, i) => 
                                part.startsWith('**') && part.endsWith('**') 
                                    ? <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong> 
                                    : part
                            )}
                         </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Selected Publications */}
       <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-3">
                <FileText className="text-indigo-600" size={28} />
                <h2 className="text-2xl font-serif font-bold text-slate-900">{profile.labels.publications}</h2>
            </div>
            <Link href="/publications" className="group flex items-center gap-1 text-sm font-medium font-sans text-slate-500 hover:text-indigo-600 transition-colors">
                {profile.labels.viewAll} 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
        <div className="space-y-4">
             {profile.publications.slice(0, 3).map((pub, index) => (
                <PublicationCard key={index} pub={pub} />
            ))}
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Award className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-serif font-bold text-slate-900">{profile.labels.awards}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.awards.map((award, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-400 text-sm pt-0.5">{award.year}</span>
                    <div>
                        <h4 className="font-semibold text-slate-900">{award.title}</h4>
                        <p className="text-sm text-slate-500">{award.issuer}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
}