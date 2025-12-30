"use client";

import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/NavLinks';
import SocMedIcons from '@/app/ui/sidenav/SocMedIcons';
export default function SideNav() {
    return (
        <>
        <div className="block md:hidden">
            <NavLinks />
        </div>
        <div className="flex-col items-center justify-between p-8 rounded-xl bg-[#1E1E1F] hidden md:flex h-full w-58">
            <div className='hidden md:block'>
                <UserCircleIcon className="h-28 w-28 text-emerald-500" strokeWidth={0.8} />
            </div>
            <div>
                <Link 
                    href="/"
                    className="flex flex-col items-center"
                >
                    <p className="font-medium text-[26px]">Wahba </p> 
                    <p className="font-medium text-[26px]">Kamaluddin</p>
                </Link>
            </div>
            <div className="">
                <NavLinks />
            </div>
            <div className="py-6">
                <SocMedIcons />
            </div>
            
        </div>
        </>
        
    )
}
