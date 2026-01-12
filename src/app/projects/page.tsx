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
      "A lightweight ml-based anomaly based NIDS for end devices using machine learning",
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

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
    <h1 className="md:block hidden mb-8 text-2xl font-bold tracking-tight">
        My projects
    </h1>
    <section className="max-w-xl">
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-col gap-4 p-4 rounded-lg bg-[#2f2f30]/50 border border-gray-700"
          >
            {/* Project Image */}
            <button
              onClick={() => setSelectedImage(project.image)}
              className="shrink-0 rounded-lg overflow-hidden flex items-center justify-center cursor-zoom-in hover:ring-1 hover:ring-emerald-500 transition-all"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={120}
                className=""
              />
            </button>

            {/* Content */}
            <div className="pt-3 flex-1 min-w-0">
              <h3 className="font-semibold">{project.title}</h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => toggleExpand(project.id)}
                className="mt-2 text-xs text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {expandedIds.has(project.id) ? "▼ Less" : "▶ More"}
              </button>

              {/* Expandable Description */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIds.has(project.id)
                    ? "max-h-48 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-2">
                {project.github && (
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="px-3 py-1 text-xs text-gray-300 border border-gray-600 rounded-full hover:bg-gray-700 transition-colors inline-flex items-center gap-1"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                )}
                {project.link && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="px-3 py-1 text-xs text-emerald-500 border border-emerald-500/50 rounded-full hover:bg-emerald-500/10 transition-colors"
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Project"
              width={800}
              height={600}
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
}