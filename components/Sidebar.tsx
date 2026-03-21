"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github, MapPin, GraduationCap, FileText, Home, FolderKanban, Languages } from "lucide-react";
import { cn } from "@/utils/cn";

interface SidebarProps {
    className?: string;
    isMobile?: boolean;
}

export function Sidebar({ className, isMobile = false }: SidebarProps) {
  const pathname = usePathname();
  const { profile, language, setLanguage } = useLanguage();

  const navItems = [
    { name: language === 'cn' ? '首页' : 'Home', href: '/', icon: Home },
    { name: profile.labels.publications, href: '/publications', icon: FileText },
    { name: profile.labels.projects, href: '/projects', icon: FolderKanban },
  ];

  // Base classes always applied
  const baseClasses = "bg-slate-900 text-white flex flex-col p-6 overflow-y-auto h-full font-sans";
  
  // Desktop-specific positioning (fixed left)
  const desktopClasses = "hidden md:flex fixed left-0 top-0 w-64 border-r border-slate-800";

  // Mobile-specific is handled by the parent wrapper in MobileNav, so we just fill height
  const mobileClasses = "flex w-full";

  return (
    <aside className={cn(baseClasses, isMobile ? mobileClasses : desktopClasses, className)}>
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-32 h-32 rounded-full bg-slate-800 mb-4 overflow-hidden border-4 border-slate-700 shadow-lg relative">
            <Image src="/avatar.jpg" alt={profile.name} fill className="object-cover" />
        </div>
        <h1 className="text-xl font-bold text-center font-serif tracking-wide">{profile.name}</h1>
        <p className="text-sm text-slate-400 text-center mt-2 font-light">{profile.title}</p>
        <p className="text-xs text-slate-500 text-center mt-1 font-light uppercase tracking-wider">{profile.university}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-all duration-200 group",
                isActive
                  ? "bg-indigo-600/10 text-indigo-400 font-medium border-l-2 border-indigo-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              )}
            >
              <Icon size={18} className={cn("transition-colors", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Language Switcher */}
      <div className="mb-6 px-4">
        <div className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Languages size={16} />
                <span>Lang</span>
            </div>
            <div className="flex gap-1">
                <button 
                    onClick={() => setLanguage('en')}
                    className={cn(
                        "text-xs px-2 py-1 rounded transition-colors",
                        language === 'en' ? "bg-indigo-600 text-white font-medium shadow-sm" : "text-slate-500 hover:text-slate-300"
                    )}
                >
                    EN
                </button>
                <button 
                    onClick={() => setLanguage('cn')}
                     className={cn(
                        "text-xs px-2 py-1 rounded transition-colors",
                        language === 'cn' ? "bg-indigo-600 text-white font-medium shadow-sm" : "text-slate-500 hover:text-slate-300"
                    )}
                >
                    中文
                </button>
            </div>
        </div>
      </div>

      {/* Social / Contact */}
      <div className="pt-6 border-t border-slate-800/50 space-y-4">
        <div className="flex items-center gap-3 text-sm text-slate-400">
            <MapPin size={16} className="text-slate-600 shrink-0" />
            <span className="font-light">{profile.location}</span>
        </div>
        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors group">
            <Mail size={16} className="text-slate-600 group-hover:text-indigo-400 shrink-0 transition-colors" />
            <span className="truncate font-light">{profile.email}</span>
        </a>
        <div className="flex gap-4 mt-6 justify-center">
             {profile.github && (
               <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-transform hover:scale-110">
                  <Github size={20} />
               </a>
             )}
             {profile.scholar && (
               <a href={profile.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-transform hover:scale-110">
                  <GraduationCap size={20} />
               </a>
             )}
        </div>
      </div>
    </aside>
  );
}
