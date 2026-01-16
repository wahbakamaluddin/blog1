import Link from "next/link";
import { LinkedinIcon, YoutubeIcon, Github, Mail } from "lucide-react"

const links = ['https://www.linkedin.com/in/wahbakamaluddin/', 'https://github.com/wahbakamaluddin', 'https://www.youtube.com/@wahbakamaluddin', 'mailto:wahbakamaluddin@yahoo.com'];

export default function SocMedIcons () {

    return (
        <div className="flex flex-row gap-3">
            <Link href={links[0]} className="hover:text-emerald-500"> <LinkedinIcon size={22}/> </Link>
            <Link href={links[1]} className="hover:text-emerald-500"> <Github size={22}/> </Link>
            <Link href={links[2]} className="hover:text-emerald-500"> <YoutubeIcon size={22}/> </Link>
            <Link href={links[3]} className="hover:text-emerald-500"> <Mail size={22}/> </Link>
        </div>
   )
}