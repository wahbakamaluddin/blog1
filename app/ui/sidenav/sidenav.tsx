import { UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/NavLinks';
import SocMedIcons from '@/app/ui/sidenav/SocMedIcons';
export default function SideNav() {
    return (
        <nav className="flex flex-col items-center h-full px-6 py-8 md:px-10 md:py-10">
            <div>
                <UserCircleIcon className="h-20 w-20 md:h-28 md:w-28 text-emerald-500" strokeWidth={0.8} />
            </div>
            <div className="mt-2 mb-4">
                <Link 
                    href="/"
                    className="flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                    <p className="font-medium text-[22px] md:text-[26px]">Wahba </p> 
                    <p className="font-medium text-[22px] md:text-[26px]">Kamaluddin</p>
                </Link>
            </div>
            <div className="w-full">
                <NavLinks />
            </div>
            <div className="h-full w-full grow"></div>
            <SocMedIcons />
        </nav>
    )
}