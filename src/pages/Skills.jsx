import { motion } from "framer-motion"

const sections = [
    {
        title: "Languages",
        hue: "border-[#00F0FF]/40",
        skills: ["Python", "Java", "C#", "JavaScript", "SQL"],
    },
    {
        title: "Frameworks & Libraries",
        hue: "border-[#FF61F6]/40",
        skills: ["React", "TailwindCSS", "Framer Motion"],
    },
    {
        title: "Game Dev & Engines",
        hue: "border-[#00F0FF]/40",
        skills: [
            "Unity (C#)",
            "Procedural Generation",
            "AI Pathfinding (DFS/BFS)",
            "Gameplay Systems",
            "3D Asset Integration",
        ],
    },
    {
        title: "APIs & Integrations",
        hue: "border-[#FF61F6]/40",
        skills: [
            "REST APIs",
            "OpenWeather API",
            "Flight Status API",
            "OpenAI API",
            "JSON Handling",
        ],
    },
    {
        title: "Data & Storage",
        hue: "border-[#00F0FF]/40",
        skills: ["SQL (relational)", "Firestore (NoSQL)", "Session Storage", "Data Modelling"],
    },
    {
        title: "Collaboration & Workflow",
        hue: "border-[#FF61F6]/40",
        skills: ["Git/GitHub", "Agile (Scrum/Iterative)", "Jira", "Trello"],
    },
    {
        title: "Platforms & Services",
        hue: "border-[#00F0FF]/40",
        skills: ["Firebase (Auth, Firestore)", "Linux (Bash basics)", "WebGL", "Itch.io", "GitHub Pages"],
    },
    {
        title: "Testing, Analysis & Methods",
        hue: "border-[#FF61F6]/40",
        skills: [
            "Requirements Gathering",
            "Domain Analysis",
            "UML / Use Case Modelling",
            "Usability Testing (Nielsen)",
            "Acceptance Testing",
        ],
    },
]

export default function Skills() {
    return (
        <section className="min-h-screen px-6 py-20 bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">
            {/* subtle background to match project pages */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <div className="absolute -inset-[200%] bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.400)_1px,transparent_1px)] [background-size:32px_32px]" />
            </div>

            {/* Title */}
            <motion.h2
                className="relative text-4xl md:text-5xl font-mono font-bold text-center text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                 Skills
            </motion.h2>
            <p className="relative text-gray-400 text-center max-w-3xl mx-auto mb-12">

            </p>

            {/* Skills Grid */}
            <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {sections.map((sec, idx) => (
                    <motion.div
                        key={sec.title}
                        className={`bg-black/50 ${sec.hue} border p-6 rounded-xl shadow-lg hover:scale-[1.02] transition`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06 }}
                    >
                        <h3 className="text-xl font-bold text-[#FF61F6] mb-4">{sec.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {sec.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-sm rounded-full bg-[#0E0E14] border border-white/10 text-gray-200"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
