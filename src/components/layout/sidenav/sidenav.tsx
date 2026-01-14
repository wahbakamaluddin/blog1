import TopPart from '@/src/components/layout/sidenav/TopPart';
import NavLinks from '@/src/components/layout/sidenav/NavLinks';
import SocMedIcons from '@/src/components/layout/sidenav/SocMedIcons';
import ClientMotion from '@/src/components/ui/ClientMotion';
import { animations, typography } from '@/src/styles/theme';
import ThemeToggle from '@/src/components/layout/theme/ThemeToggle';

export default function SideNav() {
    return (
        <ClientMotion
        {...animations.fadeInUp}
        className="h-full"
        >
            <div className="flex flex-col justify-center items-center md:hidden h-full">
                <div>
                    <NavLinks />
                </div>
                <div className="mt-4">
                    <ThemeToggle />
                </div>
            </div>
            <div className="hidden md:flex flex-col h-full items-center justify-start p-4 gap-3">
                <div className="absolute top-4 right-4">
                    <ThemeToggle />
                </div>
               <TopPart />
                <div className="">
                    <NavLinks />
                </div>
                <div className="h-full flex items-end pb-4">
                    <SocMedIcons />
                </div>
                <div className='h-full flex flex-col justify-end'>
                    <p className={typography.caption}>© 2026 Wahba Kamaluddin</p>
                </div>
            </div>

        </ClientMotion>
    )
}
