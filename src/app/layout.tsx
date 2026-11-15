
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

export const metadata: Metadata = {
  title: {
    default: "CHENOR | Digital Development Studio",
    template: "%s | CHENOR",
  },
  description:
    "CHENOR is an independent digital development studio creating modern websites, web applications, and Python-powered solutions. Rooted in Strength. Driven by Innovation.",
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
  openGraph: {
    title: "CHENOR | Digital Development Studio",
    description:
      "Thoughtfully designed digital experiences. Rooted in Strength. Driven by Innovation.",
    siteName: "CHENOR",
    type: "website",
    locale: "en_IN",
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
