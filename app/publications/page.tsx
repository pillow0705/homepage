"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PublicationCard } from "@/components/PublicationCard";

export default function PublicationsPage() {
  const { profile } = useLanguage();
  
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900">{profile.labels.publications}</h1>
      </div>
      
      <div className="space-y-2">
        {profile.publications.map((pub, index) => (
           <PublicationCard key={index} pub={pub} />
        ))}
      </div>
    </div>
  );
}
