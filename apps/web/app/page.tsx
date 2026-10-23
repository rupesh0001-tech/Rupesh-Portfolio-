import { Metadata } from "next";

import { SETTING_KEYS } from "@repo/content";

import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import GitHub from "@/components/GitHub/GitHub";
import Hero from "@/components/HeroSection/Hero";
import Projects from "@/components/Projects/Projects";
import FadeIn from "@/components/ui/FadeIn";
import { getSiteContent, setting } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = getSiteContent();
  const baseUrl =
    setting(settings, SETTING_KEYS.SITE_URL) ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://rupeshhh.in";
  const title = setting(
    settings,
    SETTING_KEYS.SEO_TITLE,
    "Rupesh Jagtap | Full Stack Developer & Web Engineer Portfolio"
  );
  const description = setting(
    settings,
    SETTING_KEYS.SEO_DESCRIPTION,
    "Full Stack Developer skilled in Fullstack dev with strong foundations in DSA and building scalable, user-friendly web applications."
  );
  let keywords: string[] = [];
  try {
    keywords = JSON.parse(
      setting(settings, SETTING_KEYS.SEO_KEYWORDS, "[]")
    ) as string[];
  } catch {
    keywords = [];
  }

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Rupesh Jagtap" }],
    creator: "Rupesh Jagtap",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      title,
      description,
      siteName: "Rupesh Jagtap Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
}

export default function Page() {
  const content = getSiteContent();

  return (
    <div className="mx-auto max-w-[720px] px-8 md:px-0">
      <FadeIn>
        <Hero
          settings={content.settings}
          roles={content.roles}
          socials={content.socials}
          buttons={content.heroButtons}
          techStack={content.techStack}
        />
      </FadeIn>
      <FadeIn>
        <Experience
          experiences={content.experiences}
          settings={content.settings}
        />
      </FadeIn>
      <FadeIn>
        <Projects projects={content.projects} settings={content.settings} />
      </FadeIn>
      <FadeIn>
        <AboutMe settings={content.settings} skills={content.aboutSkills} />
      </FadeIn>
      <FadeIn>
        <GitHub />
      </FadeIn>
      <FadeIn>
        <Footer settings={content.settings} socials={content.socials} />
      </FadeIn>
    </div>
  );
}
