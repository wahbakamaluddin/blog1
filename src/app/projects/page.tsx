import ClientMotion from "@/src/components/ui/ClientMotion";
import Projects from "@/src/components/projects/projects";
import { animations } from "@/src/styles/theme";

export const metadata = {
  title: 'Projects',
  description: 'View my projects.',
}

export default function Page() {
    return (
        <section>
        <ClientMotion {...animations.fadeInUp}>
            <Projects />
        </ClientMotion>
        </section>
    )
}