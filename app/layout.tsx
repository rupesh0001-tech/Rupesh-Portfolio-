import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import FooterBlur from "@/components/Footer/FooterBlur";
import NavBar from "@/components/Navbar/NavBar";
import DottedBackground from "@/components/ui/DottedBackground";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/hooks/ThemeProvider";

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
  title: "Rupesh Jagtap | Full Stack Developer & Web Engineer",
  description:
    "Full Stack Developer building scalable, user-friendly web applications.",
  icons: {
    icon: [
      { url: "/Logo.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/Logo.png",
  },
};

// Script to prevent flash of incorrect theme
const themeInitScript = `
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="icon" href="/Logo.png" type="image/png" />
        <link rel="shortcut icon" href="/Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preload" href="/Logo.png" as="image" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScroll>
            <DottedBackground />
            <NavBar />
            {children}
            <FooterBlur />
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
