'use client';

import { 
    HomeIcon, 
    PencilSquareIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/', icon: HomeIcon},
    { name: 'Writing', href: '/writing', icon: PencilSquareIcon},
    // { name: 'Projects', href: '/projects', icon: CodeBracketIcon},
];

export default function NavLinks() {
    const pathname = usePathname();
    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(`${href}/`);
    };
    return (
        <div className="flex flex-col items-center gap-2">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                    "flex h-[48px] w-full items-center justify-center gap-2 rounded-md px-4 text-sm font-medium hover:bg-gray-200 dark:hover:bg-[#2f2f30] hover:text-emerald-500 md:w-fit md:justify-center md:px-5",
                    {
                        'text-emerald-500': isActive(link.href),
                    },
                    )}
                >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                );
            })}
        </div>
    );
}