import { UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from '@/app/ui/sidenav/NavLinks';
import SocMedIcons from '@/app/ui/sidenav/SocMedIcons';
export default function SideNav() {
    return (
        <div className="flex flex-col items-center h-full px-10 py-10 ">
            <div>
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
            <div>
                <NavLinks />
            </div>
            <div className="h-full w-full grow"></div>
            <SocMedIcons />
        </div>

        
    )
}