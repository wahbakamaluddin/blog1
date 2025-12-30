import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import SideNav from "@/app/ui/sidenav/sidenav";
import MobileLayout from "@/app/ui/MobileLayout";

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
      <body className={`${poppins.className} antialiased`}>
        <MobileLayout>
          {children}
        </MobileLayout>
      </body>
    </html>
  );
}
