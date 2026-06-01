import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Angel Bryan Reyes — Full Stack Developer",
  description:
    "Portfolio of Angel Bryan Reyes, a Full Stack Developer and QA Engineer based in Manila, Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#0f0f13] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
