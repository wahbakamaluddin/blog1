"use client";
import { useState } from "react";
import SideNav from "@/app/ui/sidenav/sidenav";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <>
      {/* Hamburger for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          aria-label={sideNavOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setSideNavOpen((v) => !v)}
          className="p-2 rounded bg-[#1E1E1F] text-emerald-500 hover:bg-[#232324] focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {sideNavOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>
      {/* Overlay SideNav for mobile */}
      {sideNavOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setSideNavOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-64 bg-[#1E1E1F] shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <SideNav />
          </div>
        </div>
      )}
      <div className="flex px-4 py-2 gap-4 h-screen bg-[#121212] md:flex-row md:overflow-hidden">
        {/* Hide SideNav on mobile, show on md+ */}
        <div className="hidden md:block p-6 w-full flex-none rounded-xl bg-[#1E1E1F] md:w-64">
          <SideNav />
        </div>
        <div className="flex rounded-xl bg-[#1E1E1F] p-6 md:overflow-y-auto md:p-1 flex-1">
          {children}
        </div>
      </div>
    </>
  );
}