"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  const { profile } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-slate-900 border-b border-slate-200 pb-4">{profile.labels.projects}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profile.projects.map((project, index) => (
           <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <FolderGit2 className="text-indigo-600" size={32} />
                    {project.link && (
                        <a href={project.link} className="text-sm font-medium text-slate-500 hover:text-indigo-600">
                            View →
                        </a>
                    )}
                </div>
                
                <h3 className="font-semibold text-xl text-slate-900 mb-2">
                    {project.title}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
           </div>
        ))}
      </div>
    </div>
  );
}
