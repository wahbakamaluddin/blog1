import type { Metadata } from "next";
import SocMedIcons from "@/src/components/layout/sidenav/SocMedIcons";
import EducationTimeline from "@/src/components/home/EducationTimeline";
import Certifications from "@/src/components/home/Certifications";
import Skills from "@/src/components/home/Skills";
import TopPart from "@/src/components/layout/sidenav/TopPart";
import ClientMotion from "@/src/components/ui/ClientMotion";
import { animations, typography, components as themeComponents } from "@/src/styles/theme";
import { siteMetadata, homeContent, firstBlogPostLink } from "@/src/content/data";

export const metadata: Metadata = {
  title: siteMetadata.name,  
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <section>
      <ClientMotion {...animations.fadeInUp}>
      <h1 className={`md:block hidden ${typography.pageTitle}`}>
        {homeContent.greeting}
      </h1>
      <div className="md:hidden block">
          <TopPart />
      </div>

      <p className="block md:hidden py-4 italic !text-gray-500">
          {homeContent.mobileHint}
      </p>
      <p className="mb-4">
        {homeContent.bio[0].split("blog post")[0]}
        <a href={firstBlogPostLink} target="_blank" rel="noopener noreferrer" className={typography.link}>blog post</a>
        {homeContent.bio[0].split("blog post")[1]}
      </p>
      <p className="mb-4">
        {homeContent.bio[1]}
      </p>

      <SocMedIcons />
      <div className={themeComponents.sectionSpacing}>
        <Skills />
      </div>
      <div className={themeComponents.sectionSpacing}>
        <EducationTimeline />
      </div>
      <div className={themeComponents.sectionSpacing}>
        <Certifications />
      </div>

      </ClientMotion>
    </section>
    
  );
}
