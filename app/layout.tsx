import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://listhook.com'),
  title: {
    default: "ListHook - Automated Postcard Marketing for Real Estate Agents",
    template: "%s | ListHook"
  },
  description: "AI-powered postcard marketing that happens automatically. Turn your listings into more listings with proven ROI. 5x higher response rates than digital ads.",
  keywords: [
    "real estate marketing",
    "postcard marketing",
    "automated marketing",
    "listing marketing",
    "real estate agents",
    "geographic farming",
    "just listed postcards",
    "just sold postcards",
    "real estate lead generation"
  ],
  authors: [{ name: "ListHook" }],
  creator: "ListHook",
  publisher: "ListHook",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://listhook.com",
    siteName: "ListHook",
    title: "ListHook - Automated Postcard Marketing for Real Estate Agents",
    description: "AI-powered postcard marketing that happens automatically. Turn your listings into more listings with proven ROI. 5x higher response rates than digital ads.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ListHook - Automated Real Estate Postcard Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ListHook - Automated Postcard Marketing for Real Estate Agents",
    description: "AI-powered postcard marketing that happens automatically. Turn your listings into more listings with proven ROI.",
    images: ["/og-image.png"],
    creator: "@listhook",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ListHook',
    description: 'Automated postcard marketing platform for real estate agents',
    url: 'https://listhook.com',
    logo: 'https://listhook.com/logo.png',
    sameAs: [
      'https://twitter.com/listhook',
      'https://www.facebook.com/listhook',
      'https://www.linkedin.com/company/listhook',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@listhook.com',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '49 A Calhoun St',
      addressLocality: 'Charleston',
      addressRegion: 'SC',
      postalCode: '29401',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'ListHook Team',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#155dfc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
