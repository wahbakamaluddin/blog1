import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import { typography, components as themeComponents } from "@/src/styles/theme";
import { experiences } from "@/src/content/data";

export default function ExperienceTimeline() {
  return (
    <section className={themeComponents.section}>
      <h2 className={typography.sectionHeading}>
        EXPERIENCE
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-4 relative">

            {/* logo */}
            <div className={themeComponents.iconBox}>
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain rounded"
                />
              ) : (
                <BriefcaseBusiness size={25} />
              )}
            </div>
            

            {/* content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font">{exp.company}</h3>
                {exp.current && (
                  <span className={themeComponents.statusBadge.current}>
                    Current
                  </span>
                )}
                <span className={`ml-auto ${typography.caption}`}>
                  {exp.duration}
                </span>
              </div>

              <p className={typography.body}>{exp.position}</p>
              <p className={`italic ${typography.body}`}>{exp.description}</p>
              <p className={typography.caption}>{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
