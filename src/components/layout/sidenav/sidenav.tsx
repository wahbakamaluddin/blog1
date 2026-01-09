"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TopPart from '@/src/components/layout/sidenav/TopPart';
import NavLinks from '@/src/components/layout/sidenav/NavLinks';
import SocMedIcons from '@/src/components/layout/sidenav/SocMedIcons';
import TypewriterText from '@/src/components/layout/sidenav/TypewriterText';
// import ThemeToggle from '@/app/components/ThemeToggle';

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
                {/* <div className="mt-4">
                    <ThemeToggle />
                </div> */}
            </div>
            <div className="hidden md:flex flex-col h-full items-center justify-start p-4 gap-3">
                {/* <div className="absolute top-4 right-4">
                    <ThemeToggle />
                </div> */}
               <TopPart />
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
