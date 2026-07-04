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
            <div className="hidden md:flex relative flex-col h-full items-center p-4">
                <div className="absolute top-4 right-4">
                    <ThemeToggle />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-6">
                    <TopPart />
                    <NavLinks />
                    <SocMedIcons />
                </div>
                <div className="pb-4">
                    <p className={typography.caption}>© 2026 Wahba Kamaluddin</p>
                </div>
            </div>

        </ClientMotion>
    )
}
