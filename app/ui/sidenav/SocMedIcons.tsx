import Link from "next/link";
import { LinkedinIcon, GithubIcon, YoutubeIcon, Github } from "lucide-react"

const links = ['https://www.linkedin.com/in/wahbakamaluddin/', 'https://github.com/wahbakamaluddin', 'https://www.youtube.com/@wahbakamaluddin']

export default function SocMedIcons () {

    return (
        <div className="flex flex-row gap-5">
            <Link href={links[0]}> <LinkedinIcon /> </Link>
            <Link href={links[1]}> <Github /> </Link>
            <Link href={links[2]}> <YoutubeIcon /> </Link>
        </div>
   )
}