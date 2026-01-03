"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function Page () {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const redirect = useRouter();

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] before:[background-size:24px_24px]"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-10">
            <h1 className="text-3xl font-medium tracking-tight">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Wahba Kamaluddin
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            <span className="text-neutral-300">A Cybersecurity Student Focusing on Web Application Security</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
