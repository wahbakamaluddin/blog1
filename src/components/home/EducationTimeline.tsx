import { School } from "lucide-react";
import { typography, components as themeComponents } from "@/src/styles/theme";

interface  Education{
  institution: string;
  level: string;
  duration: string;
  date: string;
  grade: string;
  current: boolean;
}

const educations: Education[] = [
  {
    institution: "Universiti Sains Islam Malaysia (USIM)",
    level: "BCompSc Information Security and Assurance",
    duration: "4yrs",
    date: "Oct 2022 – Present",
    grade: "CGPA (current): 3.84/4.00",
    current: true,
  },
  {
    institution: "Korea Internet and Security Agency (KISA)",
    level: "ASEAN Cyber Shield Education",
    duration: "5mos",
    date: "Sep 2024 – Jan 2025",
    grade: "Excellence Award",
    current: false,
  },
  {
    institution: "Universiti Sains Islam Malaysia (USIM)",
    level: "Foundation in Science",
    duration: "1yr",
    date: "Jul 2021 – Jul 2022",
    grade: "CGPA: 3.79/4.00",
    current: false,
  },
  {
    institution: "Sekolah Menengah Kebangsaan Desa Cempaka",
    level: "Secondary School",
    duration: "5yrs",
    date: "Jan 2016 – Dec 2020",
    grade: "SPM: 11As, Valedictorian",
    current: false,
  },
];

export default function EducationTimeline() {
  return (
    <section className={themeComponents.section}>
      <h2 className={typography.sectionHeading}>
        EDUCATION
      </h2>

      <div className="space-y-6">
        {educations.map((ed, idx) => (
          <div key={idx} className="flex gap-4 relative">

            {/* logo */}
            <div className={themeComponents.iconBox}>
                <School size={25}/>
            </div>
       
            {/* Timeline line */}
            {idx !== educations.length - 1 && (
              <div className="absolute left-5 top-10 w-px h-full bg-gray-500 border-solid " />
            )}

            {/* content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font">{ed.institution}</h3>
                {ed.current && (
                  <span className={themeComponents.statusBadge.current}>
                    Current
                  </span>
                )}
                <span className={`ml-auto ${typography.caption}`}>
                  {ed.duration}
                </span>
              </div>

              <p className={typography.body}>{ed.level}</p>
              <p className={`italic ${typography.body}`}>{ed.grade}</p>
              <p className={typography.caption}>{ed.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
