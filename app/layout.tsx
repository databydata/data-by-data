import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Data / Data",
    template: "Data / Data | %s" // This adds your name to every sub-page title automatically
  },
  description: "Technical portfolio and SAP TM documentation hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header/>
        
        {/* This "children" represents whatever page or nested layout comes next */}
        <main className="flex-grow">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
