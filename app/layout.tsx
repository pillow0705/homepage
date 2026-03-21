import type { Metadata } from "next";
import { Inter, Newsreader, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/utils/cn";
import { LanguageProvider } from "@/context/LanguageContext";
import { profile } from "@/data/profile"; // Default export (English)

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const newsreader = Newsreader({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const notoSerifSC = Noto_Serif_SC({ 
  weight: ["400", "500", "700"], 
  preload: false, 
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${profile.name}`,
    default: `${profile.name} - Academic Homepage`,
  },
  description: "Personal academic website of Yuanhang Chang, an undergraduate researcher at USTC.",
  openGraph: {
    title: `${profile.name} - Academic Homepage`,
    description: "Researcher in Deep Learning, Multi-Agent Systems, and AI for Science.",
    url: "https://your-website.com",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: `${profile.name} - Academic Homepage`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Academic Homepage`,
    description: "Researcher in AI and Math.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, newsreader.variable, notoSerifSC.variable)}>
      <body className="bg-slate-50 text-slate-900 font-serif antialiased selection:bg-indigo-100 selection:text-indigo-900">
        <LanguageProvider>
          <div className="flex min-h-screen">
            {/* Sidebar - Desktop Only */}
            <Sidebar />

            {/* Mobile Navigation Header & Drawer */}
            <MobileNav />
            
            {/* Main Content Area */}
            <main className="flex-1 md:ml-64 p-6 md:p-12 lg:p-16 max-w-4xl mx-auto w-full pt-20 md:pt-16">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}