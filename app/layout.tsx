import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import SideNav from "@/app/ui/sidenav/sidenav";
import Breadcrumb from "@/app/components/Breadcrumb";


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
          className="md:w-1/4 h-screen overflow-hidden"
          style={{
            borderRight: "1px solid grey"
          }}
          >
            <SideNav />
          </div>
          <div className="w-full md:w-3/4 overflow-y-auto">
            <div className="max-w-2xl mx-auto my-32 p-2">
              <Breadcrumb />
              {children}      
            </div>
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
