import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global English Pare - Kampung Inggris Terbaik",
  description: "Global English Pare - Kursus bahasa Inggris terbaik di Kampung Inggris dengan program lengkap, TOEFL, IELTS, dan English Camp dengan fasilitas modern.",
  keywords: ["Global English", "Kampung Inggris", "Kursus Bahasa Inggris", "TOEFL", "IELTS", "English Camp", "Pare"],
  authors: [{ name: "Global English Team" }],
  openGraph: {
    title: "Global English Pare - Kampung Inggris Terbaik",
    description: "Kursus bahasa Inggris terbaik di Kampung Inggris dengan program lengkap dan fasilitas modern",
    url: "https://globalenglish.co.id",
    siteName: "Global English",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global English Pare - Kampung Inggris Terbaik",
    description: "Kursus bahasa Inggris terbaik di Kampung Inggris dengan program lengkap dan fasilitas modern",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
