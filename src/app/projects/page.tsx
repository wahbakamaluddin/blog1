import ClientMotion from "@/src/components/ui/ClientMotion";
import Projects from "@/src/components/projects/projects";

export default function Page() {
    return (
        <section>
        <ClientMotion
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <Projects />
        </ClientMotion>
        </section>
    )
}