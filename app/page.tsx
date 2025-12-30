import SocMedIcons from "@/app/ui/sidenav/SocMedIcons"

export default function Page () {
 return (
    <div className="py-24 px-32">
        <h1 className="font-bold text-[30px]">{ "whoami" }</h1>
        <div>
            <p className="font-small pt-6">{ "A cybersecurity student focusing on web application security." }</p>
            <p className="font-small pt-6">{ "Checkout my social media profiles:" }</p>
            <div className="pt-6"><SocMedIcons /></div>
        </div>

    </div>
 )
}