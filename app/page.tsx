"use client";

import { motion } from "framer-motion";
import SocMedIcons from "./ui/sidenav/SocMedIcons";
import EducationTimeline from "@/app/components/home/EducationTimeline";
import Certifications from "@/app/components/home/Certifications";
import Skills from "@/app/components/home/Skills";

export default function Page () {
  return (
    <section>
      <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
      <h1 className="mb-8 text-2xl font-bold tracking-tight">
        whoami
      </h1>
      <p className="mb-4">
        {`I'm an undergrad cybersecurity student at Universiti 
        Sains Islam Malaysia (USIM). Back during COVID-19,
        I started using Linux Mint as my main OS just to see what's the fuss is about. 
        For days, I got my hands dirty with terminal, tweaking all sort of stuff
        just to get my speaker working (typical linux user activity). 
        And I'm hooked ever since. Do checkout my social media:`}
      </p>

      <SocMedIcons />
      <div className="pt-10">
        <EducationTimeline />
      </div>
      <div className="pt-10">
        <Certifications />
      </div>
      <div className="pt-10">
        <Skills />
      </div>
    

      </motion.div>
    </section>
    
  );
}
