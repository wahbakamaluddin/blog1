import SocMedIcons from "@/app/ui/sidenav/SocMedIcons"

export default function Page () {
 return (
    <div>
        <h1 className="font-bold text-[30px]">{ "print('hi')" }</h1>
        <div>
            <p className="font-small pt-6">{ "I'm sharing various CS stuffs that might come in handy for students, including notes from my foundation to undergraduate studies, CTF writeups, and other interesting finds. Hope it helps!" }</p>
            <div className="pt-6"><SocMedIcons /></div>
        </div>

    </div>
 )
}