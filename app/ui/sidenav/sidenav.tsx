"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/NavLinks';
import SocMedIcons from '@/app/ui/sidenav/SocMedIcons';
import TypewriterText from '@/app/ui/sidenav/TypewriterText';
export default function SideNav() {
    return (
        <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="h-full"
        >
            <div className="flex flex-col justify-center items-center md:hidden h-full">
                <div>
                    <NavLinks />
                </div>
            </div>
            <div className="hidden md:flex flex-col h-full items-center justify-start p-4 gap-3 flex">
                <div className='pt-20 hidden md:block hover:scale-105 transition-transform duration-200'>
                    <Image 
                    src="/profile1.jpeg" 
                    alt="Profile Pitcure" 
                    width={120}
                    height={15}
                    className='rounded-full border-1 shadow-lg'
                    />
                </div>
                <div>
                    <Link href="/">
                        <p className="font-bold text-[20px]">Wahba </p> 
                    </Link>
                </div>
                <div className=''>
                    <p className="text-[13px] text-gray-300">
                        Cybersecurity <TypewriterText words={['student', 'learner', 'enthusiast']} /> from 🇮🇩
                    </p> 
                </div>
                <div className="">
                    <NavLinks />
                </div>
                <div className="h-full flex items-end pb-4">
                    <SocMedIcons />
                </div>
                <div className='h-full flex flex-col justify-end'>
                    <p className="text-[10px] text-gray-500">© 2026 Wahba Kamaluddin</p>
                </div>
            </div>

        </motion.div>
    )
}
