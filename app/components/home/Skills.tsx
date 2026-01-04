"use client";

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

const categoryColors: Record<Skill["category"], string> = {
  Development: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10",
  Security: "border-red-500/50 text-red-400 hover:bg-red-500/10",
};

const categoryLabels: Record<Skill["category"], string> = {
  Development: "Development",
  Security: "Security",
};

export default function Skills() {
  const categories = ["Security", "Development"] as const;
  return (
    <section className="max-w-xl">
      <h2 className="mb-6 text-sm tracking-widest text-gray-400">
        SKILLS & TOOLS
      </h2>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xs text-gray-500 mb-2">{categoryLabels[category]}</h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm border rounded-full transition-colors ${categoryColors[skill.category]}`}
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
