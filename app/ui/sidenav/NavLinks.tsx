'use client';

import { 
    HomeIcon, 
    PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/', icon: HomeIcon},
    { name: 'Writings', href: '/writings', icon: PencilSquareIcon},
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                    "flex w-full h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#2f2f30] hover:text-emerald-500 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                        'text-emerald-500': pathname === link.href,
                    },
                    )}
                >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                );
            })}
        </>
    );
}