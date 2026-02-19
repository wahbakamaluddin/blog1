import type { Metadata } from "next";
import SocMedIcons from "@/src/components/layout/sidenav/SocMedIcons";
import EducationTimeline from "@/src/components/home/EducationTimeline";
import Certifications from "@/src/components/home/Certifications";
import Skills from "@/src/components/home/Skills";
import TopPart from "@/src/components/layout/sidenav/TopPart";
import ClientMotion from "@/src/components/ui/ClientMotion";
import BioParagraph from "@/src/components/home/BioParagraph";
import { animations, typography, components as themeComponents } from "@/src/styles/theme";
import { siteMetadata } from "@/src/content/data";

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
        $Whoami
      </h1>
      <div className="md:hidden block">
          <TopPart />
      </div>
      <div>
        <BioParagraph />
      </div>
      <SocMedIcons />
      {/* <div className={themeComponents.sectionSpacing}>
        <Skills />
      </div> */}
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
