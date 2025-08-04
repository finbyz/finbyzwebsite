import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent – All in One Partner",
  description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
  keywords: "ERP Implementation, AI Automation, Software Development, Resource Augmentation, Business Technology Partner, Digital Transformation, Finbyz Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <MobileMenuProvider>
          {children}
        </MobileMenuProvider>
      </body>
    </html>
  );
}
