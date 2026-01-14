"use client";

import { typography, components as themeComponents, categoryColors as themeCategoryColors } from "@/src/styles/theme";

interface Skill {
  name: string;
  category: "Development" | "Security";
}

const skills: Skill[] = [
  // Programming
  { name: "Python", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "Bash", category: "Development" },
  { name: "PHP", category: "Development" },
  { name: "JAVA", category: "Development" },
  { name: "C", category: "Development" },
  { name: "C++", category: "Development" },

  // Frameworks
  { name: "Next.js", category: "Development" },

  // Security Tools
  { name: "Web Application Security", category: "Security" },
  { name: "Burp Suite", category: "Security" },
  { name: "OWASP ZAP", category: "Security" },
  { name: "Nmap", category: "Security" },
  { name: "Wireshark", category: "Security" },
  { name: "Metasploit", category: "Security" },
];

const categoryLabels: Record<Skill["category"], string> = {
  Development: "Development",
  Security: "Security",
};

export default function Skills() {
  const categories = ["Security", "Development"] as const;
  return (
    <section className={themeComponents.section}>
      <h2 className={typography.sectionHeading}>
        SKILLS & TOOLS
      </h2>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category}>
            <h3 className={typography.caption + " mb-2"}>{categoryLabels[category]}</h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm border rounded-full transition-colors ${themeCategoryColors.skills[skill.category]}`}
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
