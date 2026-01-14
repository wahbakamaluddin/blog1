"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Network Intrusion Detection System (NIDS)",
    description:
      "A lightweight anomaly-based NIDS for end devices using machine learning, developed in Python. It monitors network traffic in real-time to detect DoS, Port Scan, Brute Force, and Web Attack. The machine learning component is trained on CIC-IDS2017 dataset. Evaluated on Raspberry Pi 4B for resource efficiency.",
    image: "/image/projects/1.png",
    tags: ["Python", "Machine Learning", "Cybersecurity", "Networking"],
    github: "https://github.com/wahbakamaluddin/nids8",
  },
  {
    id: 2,
    title: "n8n-cryptobot",
    description:
      "An n8n workflow that analyzes crypto market sentiment and price movements to suggest buy or sell decisions with target prices, accessible via Telegram bot.",
    image: "/image/projects/2.png",
    tags: ["n8n", "Telegram", "Crypto", "ML trading"],
    github: "https://github.com/wahbakamaluddin/n8n-cryptobot",
  },
];

function Gradient({
  className,
  isExpanded,
}: {
  className?: string;
  isExpanded?: boolean;
}) {
  return (
    <div
      className={`absolute z-10 inset-0 size-full pointer-events-none transition-opacity duration-500 ${
        isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      } ${className}`}
      style={{
        background: `linear-gradient(to bottom, rgba(16,16,16,0.1) 0%, rgba(16,16,16,0.4) 50%, rgba(16,16,16,0.9) 100%)`,
      }}
    />
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <section className="max-w-xl">
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <button
                key={project.id}
                onClick={() => toggleExpand(project.id)}
                className="relative overflow-hidden group p-3 flex flex-col border border-gray-700/50 rounded-[14px] bg-[#1a1a1a]/50 text-left cursor-pointer transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className={`w-full h-auto rounded-lg pointer-events-none transition-all duration-400 ${
                      isExpanded
                        ? "opacity-90"
                        : "opacity-70 group-hover:opacity-90"
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <Gradient isExpanded={isExpanded} />

                  {/* Title Overlay - Always visible at bottom */}
                  <div className="absolute z-20 bottom-0 left-0 p-3">
                    <div className="px-2.5 py-1 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <div
                        className={`size-2 bg-emerald-400 rounded-full transition-transform duration-400 ${
                          isExpanded ? "scale-100" : "scale-75 group-hover:scale-100"
                        }`}
                      />
                      <span className="text-sm text-white/90 font-medium">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.github && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className="px-3 py-1.5 text-xs text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </span>
                    )}
                    {project.link && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                        className="px-3 py-1.5 text-xs text-emerald-600 dark:text-emerald-400 border border-emerald-500/50 rounded-full hover:bg-emerald-500/10 transition-colors cursor-pointer"
                      >
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}