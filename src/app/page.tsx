"use client";

import { motion } from "framer-motion";
import SocMedIcons from "@/src/components/layout/sidenav/SocMedIcons";
import EducationTimeline from "@/src/components/home/EducationTimeline";
import Certifications from "@/src/components/home/Certifications";
import Skills from "@/src/components/home/Skills";
import TopPart from "@/src/components/layout/sidenav/TopPart";

export default function Page () {
  return (
    <section>
      <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
      <h1 className="md:block hidden mb-8 text-2xl font-bold tracking-tight">
        $whoami
      </h1>
      <div className="md:hidden block">
          <TopPart />
      </div>

      <h1 className="text-l block md:hidden py-10">
          Psst... it looks better on a bigger screen!  
      </h1>
      <p className="mb-4">
        {`I'm an undergrad cybersecurity student at Universiti 
        Sains Islam Malaysia (USIM). Back during COVID-19,
        I started using Linux Mint as my main OS just to see what the fuss is about. 
        For days, I juggled around in terminal, tweaking all sorts of stuff
        just to get my speakers working (typical linux user activity). 
        And I've been hooked ever since.`}
      </p>
      <p className="mb-4">
        {`I love learning web application security, joining CTF competitions, and doing web development on the side. I'm also an avid reader; most of the general stuff I post on my blog is based on what I've read.`}
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

      </motion.div>
    </section>
    
  );
}
