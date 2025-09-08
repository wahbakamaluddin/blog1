import Link from "next/link";
import { LinkedinIcon, YoutubeIcon, Github } from "lucide-react"

const links = ['https://www.linkedin.com/in/wahbakamaluddin/', 'https://github.com/wahbakamaluddin', 'https://www.youtube.com/@wahbakamaluddin']

export default function SocMedIcons () {

    return (
        <div className="flex flex-row gap-5">
            <Link href={links[0]} className="hover:text-emerald-500"> <LinkedinIcon /> </Link>
            <Link href={links[1]} className="hover:text-emerald-500"> <Github /> </Link>
            <Link href={links[2]} className="hover:text-emerald-500"> <YoutubeIcon /> </Link>
        </div>
   )
}