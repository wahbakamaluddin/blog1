import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import SideNav from "@/app/ui/sidenav/sidenav";


export const metadata: Metadata = {
  title: "Wahba Kamaluddin",
  description: "Portfolio and Blog of Wahba Kamaluddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`} 
      >
        <div className="flex p-2 gap-2 h-screen bg-[#121212] md:flex-row md:overflow-hidden items-center">
          <div>
            <SideNav />
          </div>
          <div className="flex h-full rounded-md bg-[#1E1E1F] md:overflow-y-auto flex-1">
            {children}      
          </div>
        </div>
      </body>
    </html>
  );
}
