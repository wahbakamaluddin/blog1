"use client";

import { motion } from "framer-motion";
import SocMedIcons from "./ui/sidenav/SocMedIcons";

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
        Sains Islam Malaysia (USIM). I started my geek journey
        during COVID-19, where i started using Linux Mint as my OS. 
        There, I started to get my hands dirty with terminal, tweaking all sort of stuffs for days
        to get my laptop speaker to work (typical linux user 
        activity). And I'm hooked ever since. Do checkout my social media:`}
      </p>

      <SocMedIcons />
      </motion.div>
    </section>
    
  );
}
