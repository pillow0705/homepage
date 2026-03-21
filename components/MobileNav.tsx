"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar"; // We'll reuse the sidebar content or structure
import { cn } from "@/utils/cn";
import { useLanguage } from "@/context/LanguageContext";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40 flex items-center px-4 justify-between">
        <span className="font-serif font-bold text-lg text-slate-900">
            {language === 'cn' ? '个人主页' : 'Academic Home'}
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 w-64 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="absolute top-2 right-2 z-50">
             <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
            >
                <X size={20} />
            </button>
        </div>
        {/* We reuse the sidebar logic/content here. 
            Ideally, Sidebar should be a pure presentational component, 
            but for now, importing it directly inside might render it twice if not careful.
            Since Sidebar is also 'use client' (which it is), this is okay.
        */}
        <div className="h-full overflow-y-auto">
            <Sidebar isMobile={true} />
        </div>
      </div>
    </>
  );
}
