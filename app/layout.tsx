import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "ListHook - Automated Postcard Marketing for Real Estate Agents",
  description: "Automated postcard marketing that farms neighborhoods intelligently while you focus on closing deals. Proven ROI with minimal time investment.",
  keywords: ["real estate marketing", "postcard marketing", "geographic farming", "real estate automation", "lead generation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="apple-mobile-web-app-title" content="ListHook" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
