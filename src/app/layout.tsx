import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from '@/context/LanguageContext';
import { Suspense } from "react";
import { Metrika } from "@/components/metrika";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dzyrdle",
  description: "Addictive word game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>

        <Suspense>
          <Metrika />
        </Suspense>
        
      </body>
    </html>
  );
}
