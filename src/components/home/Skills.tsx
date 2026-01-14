"use client";

import { typography, components as themeComponents, categoryColors as themeCategoryColors } from "@/src/styles/theme";
import { skills, skillCategoryLabels, skillCategoryOrder, type SkillCategory } from "@/src/content/data";

export default function Skills() {
  return (
    <section className={themeComponents.section}>
      <h2 className={typography.sectionHeading}>
        SKILLS & TOOLS
      </h2>

      <div className="space-y-4">
        {skillCategoryOrder.map((category) => (
          <div key={category}>
            <h3 className={typography.caption + " mb-2"}>{skillCategoryLabels[category]}</h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm border rounded-full transition-colors ${themeCategoryColors.skills[skill.category as SkillCategory]}`}
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
