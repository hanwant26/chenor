
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://chenor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "CHENOR | Digital Development Studio",
    template: "%s | CHENOR",
  },

  description:
    "CHENOR is an independent digital development studio creating modern websites, web applications, and Python-powered solutions.",

  applicationName: "CHENOR",

  keywords: [
    "CHENOR",
    "Web Development",
    "Next.js",
    "Python",
    "Django",
    "Web Applications",
    "Digital Development Studio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CHENOR | Digital Development Studio",
    description:
      "Technology, thoughtfully built. Rooted in Strength. Driven by Innovation.",
    url: siteUrl,
    siteName: "CHENOR",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CHENOR — Technology, thoughtfully built.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CHENOR | Digital Development Studio",
    description:
      "Technology, thoughtfully built.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
