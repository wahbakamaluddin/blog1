"use client";

import Image from "next/image";
import { useState } from "react";
import { typography, components as themeComponents } from "@/src/styles/theme";
import { certifications } from "@/src/content/data";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={themeComponents.section}>
      <h2 className={typography.sectionHeading}>
        CERTIFICATE
      </h2>
      
      <div className="grid gap-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className={themeComponents.card}>
            {/* Badge/Logo */}
            {cert.badge && (
              <button
                onClick={() => setSelectedImage(cert.badge!)}
                className="shrink-0 rounded-lg overflow-hidden flex items-center justify-center cursor-zoom-in hover:ring-2 hover:ring-emerald-500 transition-all"
              >
                <Image
                    src={cert.badge}
                    alt={cert.title}
                    width={100}
                    height={100}
                    className="object-contain"
                />
              </button>
            )}
            
            {/* Content */}
            <div className="flex-1">
              <h3 className={typography.cardTitle}>{cert.title}</h3>
              <p className={typography.subtitle}>{cert.issuer}</p>
              <p className={typography.caption}>{cert.date}</p>
              {cert.link && (
                <button 
                  onClick={() => window.open(cert.link, '_blank')} 
                  className={themeComponents.buttonPrimary + " mt-2"}
                >
                  View Certificate
                </button>
              )}
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
              alt="Certificate"
              width={600}
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
  );
}