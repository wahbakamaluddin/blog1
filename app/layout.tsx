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
        <div 
        className="flex h-screen bg-[#121212] md:flex-row"
        style={{
          backgroundImage: "radial-gradient(#ffff1110 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        >
          <div
          className="w-1/4 overflow-hidden"
          style={{
            borderRight: "1px solid grey"
          }}
          >
            <SideNav />
          </div>
          <div className="w-3/4 overflow-y-auto">
            <div className="max-w-2xl mx-auto my-32 px-2">
              {children}      
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
