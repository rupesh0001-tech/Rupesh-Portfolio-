import { Metadata } from "next";

import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import FooterBlur from "@/components/Footer/FooterBlur";
import GitHub from "@/components/GitHub/GitHub";
import Hero from "@/components/HeroSection/Hero";
import Projects from "@/components/Projects/Projects";
import FadeIn from "@/components/ui/FadeIn";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rupeshhh.in";

export const metadata: Metadata = {
  title: "Rupesh Jagtap | Full Stack Developer & Web Engineer Portfolio",
  description:
    "Full Stack Developer skilled in Fullstack dev with strong foundations in DSA and building scalable, user-friendly web applications.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Rupesh Jagtap",
    "Bun.js",
    "Hono",
  ],
  authors: [{ name: "Rupesh Jagtap" }],
  creator: "Rupesh Jagtap",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Rupesh Jagtap | Full Stack Developer & Web Engineer Portfolio",
    description:
      "Full Stack Developer skilled in Fullstack dev with strong foundations in DSA and building scalable, user-friendly web applications.",
    siteName: "Rupesh Jagtap Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupesh Jagtap | Full Stack Developer & Web Engineer Portfolio",
    description:
      "Full Stack Developer skilled in Fullstack dev with strong foundations in DSA and building scalable, user-friendly web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <div className="mx-auto max-w-[720px] px-8 md:px-0">
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <AboutMe />
      </FadeIn>
      <FadeIn>
        <GitHub />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default page;
