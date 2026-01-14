import { School } from "lucide-react";
import { typography, components as themeComponents } from "@/src/styles/theme";
import { educations } from "@/src/content/data";

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
