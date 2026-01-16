import Link from "next/link";
import { Mail } from "lucide-react"
import { FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
const links = ['https://www.linkedin.com/in/wahbakamaluddin/', 'https://github.com/wahbakamaluddin', 'https://www.youtube.com/@wahbakamaluddin', 'mailto:wahbakamaluddin@yahoo.com'];

export default function SocMedIcons () {

    return (
        <div className="flex flex-row gap-3">
            <Link href={links[0]} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500"> <FiLinkedin size={22}/> </Link>
            <Link href={links[1]} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500"> <FiGithub size={22}/> </Link>
            <Link href={links[2]} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500"> <FiYoutube size={22}/> </Link>
            <Link href={links[3]} className="hover:text-emerald-500"> <Mail size={22}/> </Link>
        </div>
   )
}