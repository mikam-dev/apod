import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { TailwindIndicator } from '@/components/providers/tailwind-indicator';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://apod.mikam.dev`) || new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: "Astronomy Picture of the Day | apod.mikam.dev",
  description: "This website provides a modernized UI for NASA's extremely popular “Astronomy Picture of the Day”. It is built with NextJS (App Router), React Server Components (RSC), TailwindCSS, TypeScript, and features responsive web design, dynamic routing, and beautiful space photography from the NASA APOD API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className}`}>

          <Header />
          {children}
          <Footer />

          <TailwindIndicator />
        </body>
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
