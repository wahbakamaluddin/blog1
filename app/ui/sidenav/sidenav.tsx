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
        <div className="flex-col h-full items-center justify-between p-4 hidden md:flex w-58">
            <div className='hidden md:block'>
                <UserCircleIcon className="h-28 w-28 text-emerald-500" strokeWidth={0.8} />
            </div>
            <div>
                <Link 
                    href="/"
                    className="flex flex-col items-center"
                >
                    <p className="font-bold text-[24px]">Wahba </p> 
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
