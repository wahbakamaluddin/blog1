"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/NavLinks';
import SocMedIcons from '@/app/ui/sidenav/SocMedIcons';
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
        <div className='flex justify-end hidden md:block'>
            <div className="flex-col h-full items-center justify-start p-4 gap-3 flex">
                <div className='pt-20 hidden md:block'>
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
                    <p className="text-[13px]">Cybersecurity student from  🇮🇩</p> 
                </div>
                <div className="">
                    <NavLinks />
                </div>
                <div className="">
                    <SocMedIcons />
                </div>
            </div>
        </div>  
        </motion.div>
    )
}
