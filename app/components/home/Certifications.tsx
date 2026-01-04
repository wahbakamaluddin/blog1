"use client";

import Image from "next/image";
import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  description?: string;
  link?: string;
  date: string;
  badge?: string;
}

const certifications: Certification[] = [
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/VGP17IIU43XM",
    date: "2025",
    badge: "/image/certificates/google-cybersecurity.png",
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/de263913-c2a6-4500-91d2-ce8bfc052c38",
    date: "2025",
    badge: "/image/certificates/cisco-ethical-hacker.png",
  },
  {
    title: "Certificate of Excellence (ASEAN Cyber Shield 2024)",
    issuer: "Korea Internet and Security Agency (KISA)",
    link: "https://www.youtube.com/watch?v=bK6axYNI41A",
    date: "2025",
    badge: "/image/certificates/ACS-excellence.png",
  },
  {
    title: "Certified Appsec Practitioner (CAP)",
    issuer: "The SecOps Group",
    date: "2025",
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXRuAWPUhlG4OLxB+fpaC25Arrn3/alZRudTEfH7lVCQjl9mgh9oxEOE97Gkt+gXJnZBcyGIUubaPvRi2v4uLieM=",
    badge: "/image/certificates/cap.png",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="max-w-xl">
      <h2 className="mb-6 text-sm tracking-widest text-gray-400">
        CERTIFICATE
      </h2>
      
      <div className="grid gap-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex gap-4 p-4 rounded-lg bg-[#2f2f30]/50 border border-gray-700 items-center">
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
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
              {cert.link && (
                <button 
                  onClick={() => window.open(cert.link, '_blank')} 
                  className="mt-2 px-3 py-1 text-xs text-emerald-500 border border-emerald-500/50 rounded-full hover:bg-emerald-500/10 transition-colors"
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