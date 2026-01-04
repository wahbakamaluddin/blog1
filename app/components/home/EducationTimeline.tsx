import { School } from "lucide-react";


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
    <section className="max-w-xl">
      <h2 className="mb-6 text-sm tracking-widest text-gray-400">
        Education
      </h2>

      <div className="space-y-6">
        {educations.map((ed, idx) => (
          <div key={idx} className="flex gap-4 relative">

            {/* logo */}
            <div className="h-10 w-10 bg-gray-800 rounded-md flex items-center justify-center">
                <School size={25}/>
            </div>
       
            {/* Timeline line */}
            {idx !== educations.length - 1 && (
              <div className="absolute left-5 top-10 w-px h-full bg-gray-500" />
            )}

            {/* content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font">{ed.institution}</h3>
                {ed.current && (
                  <span className="rounded bg-green-600/20 px-2 py-0.5 text-xs text-green-400">
                    Current
                  </span>
                )}
                <span className="ml-auto text-xs text-gray-400">
                  {ed.duration}
                </span>
              </div>

              <p className="text-sm text-gray-300">{ed.level}</p>
              <p className="italic text-sm text-gray-300">{ed.grade}</p>
              <p className="text-xs text-gray-500">{ed.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
