import Image from "next/image";
import { School } from "lucide-react";

const experiences = [
  {
    company: "Universiti Sains Islam Malaysia (USIM)",
    role: "BCompSc Information Security and Assurance",
    duration: "4yrs",
    date: "Oct 2022 – Present",
    current: true,
  },
  {
    company: "Asean Cyber Shield Education",
    role: "",
    duration: "5mos",
    date: "Sep 2024 – Jan 2025",
    current: false,
  },
  {
    company: "Universiti Sains Islam Malaysia (USIM)",
    role: "Foundation in Science",
    duration: "1yr",
    date: "Jul 2021 – Jul 2022",
    current: false,
  },
  {
    company: "Sekolah Menengah Kebangsaan Desa Cempaka",
    role: "Secondary School",
    duration: "5yrs",
    date: "Jan 2016 – Dec 2020",
    current: false,
  },
];

export default function EducationTimeline() {
  return (
    <section className="max-w-xl">
      <h2 className="mb-6 text-sm tracking-widest text-gray-400">
        Education
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-4 relative">

            {/* logo */}
            <div className="h-10 w-10 bg-gray-800 rounded-md flex items-center justify-center">
                <School size={25}/>
            </div>
       
            {/* Timeline line */}
            {idx !== experiences.length - 1 && (
              <div className="absolute left-5 top-10 w-px h-full bg-gray-500" />
            )}

            {/* content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font">{exp.company}</h3>
                {exp.current && (
                  <span className="rounded bg-green-600/20 px-2 py-0.5 text-xs text-green-400">
                    Current
                  </span>
                )}
                <span className="ml-auto text-xs text-gray-400">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm text-gray-300">{exp.role}</p>
              <p className="text-xs text-gray-500">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
