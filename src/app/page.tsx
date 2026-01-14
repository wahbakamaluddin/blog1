import type { Metadata } from "next";
import SocMedIcons from "@/src/components/layout/sidenav/SocMedIcons";
import EducationTimeline from "@/src/components/home/EducationTimeline";
import Certifications from "@/src/components/home/Certifications";
import Skills from "@/src/components/home/Skills";
import TopPart from "@/src/components/layout/sidenav/TopPart";
import ClientMotion from "@/src/components/ui/ClientMotion";

export const metadata: Metadata = {
  title: "Wahba Kamaluddin",  
  description:
    "Portfolio and blog of Wahba Kamaluddin — cybersecurity student. Exploring web application security, Linux, and more.",
  keywords: [
    "cybersecurity",
    "CTF",
    "web security",
    "web development",
    "USIM",
    "Wahba Kamaluddin",
    "blog",
    "portfolio",
  ],
  authors: [{ name: "Wahba Kamaluddin" }],
  creator: "Wahba Kamaluddin",
  openGraph: {
    title: "Wahba Kamaluddin | Cybersecurity Student",
    description:
      "Portfolio and blog of Wahba Kamaluddin — cybersecurity student",
    siteName: "Wahba Kamaluddin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahba Kamaluddin | Cybersecurity Student",
    description:
      "Portfolio and blog of Wahba Kamaluddin — cybersecurity student.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <section>
      <ClientMotion
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      >
      <h1 className="md:block hidden mb-8 text-2xl font-bold tracking-tight">
        $whoami
      </h1>
      <div className="md:hidden block">
          <TopPart />
      </div>

      <p className="block md:hidden py-4 italic !text-gray-500">
          Psst... it looks better on a bigger screen!  
      </p>
      <p className="mb-4">
        I'm an undergrad cybersecurity student at Universiti 
        Sains Islam Malaysia (USIM). Back during COVID-19,
        I started using Linux Mint as my main OS just to see what the fuss is about. 
          For days, I juggled around in terminal, tweaking all sorts of stuff
          just to get my speakers working, which led to my very first <a href="https://techy-dudes.blogspot.com/2020/05/in-this-tutorial-im-going-to-show-you.html" className="text-blue-500">blog post</a>. 
        And I've been hooked ever since.
      </p>
      <p className="mb-4">
        {`I love learning web application security, joining CTF competitions, and doing web development on the side. I also love to read; most of the general stuff I post on my blog is based on what I've read.`}
      </p>

      <SocMedIcons />
      <div className="pt-10">
        <Skills />
      </div>
      <div className="pt-10">
        <EducationTimeline />
      </div>
      <div className="pt-10">
        <Certifications />
      </div>

      </ClientMotion>
    </section>
    
  );
}
