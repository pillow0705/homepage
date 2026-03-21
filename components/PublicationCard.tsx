"use client";

import { useState } from "react";
import { Publication } from "@/data/profile";
import { AuthorList } from "./AuthorList";
import { FileText, Code, Globe, Quote, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PublicationCard({ pub }: { pub: Publication }) {
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const handleCopy = () => {
    if (pub.bibtex) {
      navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group flex flex-col gap-3 p-4 -mx-4 rounded-lg hover:bg-slate-50 transition-colors">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg text-slate-900 leading-tight">
          {pub.pdfUrl ? (
            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition-colors">
              {pub.title}
            </a>
          ) : (
            <span>{pub.title}</span>
          )}
        </h3>
        
        <div className="text-base mt-1">
            <AuthorList authors={pub.authors} />
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-2">
            <span className="font-medium text-slate-700 italic">
                {pub.conference}
            </span>
            <span className="text-slate-500">{pub.year}</span>
        </div>
      </div>

      <div className="flex gap-3 mt-1">
        {pub.pdfUrl && (
            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-slate-200 rounded-full text-slate-600 hover:border-slate-800 hover:text-slate-900 transition-colors bg-white">
                <FileText size={12} />
                PDF
            </a>
        )}
        {pub.codeUrl && (
            <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-slate-200 rounded-full text-slate-600 hover:border-slate-800 hover:text-slate-900 transition-colors bg-white">
                <Code size={12} />
                {language === 'cn' ? '代码' : 'Code'}
            </a>
        )}
         {pub.projectUrl && (
            <a href={pub.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-slate-200 rounded-full text-slate-600 hover:border-slate-800 hover:text-slate-900 transition-colors bg-white">
                <Globe size={12} />
                {language === 'cn' ? '项目主页' : 'Website'}
            </a>
        )}
        {pub.bibtex && (
            <button 
                onClick={() => setShowBibtex(!showBibtex)}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium border border-slate-200 rounded-full text-slate-600 hover:border-slate-800 hover:text-slate-900 transition-colors bg-white"
            >
                <Quote size={12} />
                BibTeX
            </button>
        )}
      </div>

      {/* BibTeX Area */}
      {showBibtex && pub.bibtex && (
          <div className="relative mt-2 p-3 bg-slate-100 rounded-md border border-slate-200 text-xs font-mono text-slate-700 overflow-x-auto animate-in fade-in slide-in-from-top-1 duration-200">
             <button 
                onClick={handleCopy}
                className="absolute top-2 right-2 p-1.5 bg-white rounded border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
                title="Copy to clipboard"
             >
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
             </button>
             <pre className="whitespace-pre-wrap pr-8">{pub.bibtex}</pre>
          </div>
      )}
    </div>
  );
}
