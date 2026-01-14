import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { poppins } from "@/src/styles/fonts";
import "@/src/styles/globals.css";
import SideNav from "@/src/components/layout/sidenav/sidenav";
import Breadcrumb from "@/src/components/layout/Breadcrumb";
import { ThemeProvider } from "@/src/components/layout/theme/ThemeProvider";
import { layout } from "@/src/styles/theme";


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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`} 
      >
        <ThemeProvider>
          <div 
            className="flex h-screen md:flex-row bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 dot-pattern"
          >
            <div className={layout.sidebar}>
              <SideNav />
            </div>
            <div className={layout.mainArea}>
              <div className={layout.contentContainer}>
                <Breadcrumb />
                {children}      
              </div>
            </div>
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
