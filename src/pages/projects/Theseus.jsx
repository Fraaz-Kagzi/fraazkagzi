/// /pages/Theseus.jsx — Deep Dive Showcase (Skills-Focused)
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper.jsx";
import ss1 from "../assets/theseus1.png";
import ss2 from "../assets/theseus2.png";

const variants = {
    fadeUp: (i = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } },
    }),
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.6 } } },
};

const SectionHeading = ({ overline, title, sub }) => (
    <div className="text-center mb-12">
        {overline && (
            <div className="tracking-widest uppercase text-xs text-[#00F0FF]/80 mb-2">{overline}</div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF61F6]">{title}</h2>
        {sub && <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{sub}</p>}
    </div>
);

export default function Theseus() {
    return (
        <PageWrapper>
            <section className="min-h-screen bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">
                {/* subtle animated background grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                    <div className="absolute -inset-[200%] bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.400)_1px,transparent_1px)] [background-size:32px_32px] animate-pulse" />
                </div>

                {/* HERO */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24">
                    <motion.div {...variants.fadeUp(0)}>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FF61F6] drop-shadow-[0_0_10px_rgba(255,97,246,0.25)]">
                            Project Theseus
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 max-w-xl">
                            A survival-maze game inspired by Pac-Man, re-engineered with{" "}
                            <span className="text-white font-bold">procedural generation</span>,{" "}
                            <span className="text-white font-bold">graph traversal algorithms</span>, and{" "}
                            <span className="text-white font-bold">AI pathfinding</span>.
                            Beyond gameplay, this project was an opportunity to demonstrate
                            <span className="text-white font-bold"> algorithm design, system architecture, and software engineering practices</span>.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Fraaz-Kagzi/Project_Theseus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                 GitHub Repo
                            </a>
                            <a
                                href="/ProjectTheseus_Documentation.pdf"
                                download
                                className="px-6 py-3 bg-transparent border border-[#FF61F6] text-[#FF61F6] font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                Download Documentation
                            </a>
                        </div>
                    </motion.div>

                    <motion.div {...variants.fadeUp(1)} className="relative">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#FF61F6]/30 to-[#00F0FF]/30 blur-2xl" />
                        <img src={ss1} alt="Gameplay" className="relative rounded-2xl border-2 border-[#FF61F6] shadow-2xl" />
                    </motion.div>
                </div>

                {/* DEVELOPMENT FOCUS */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-10">
                    <SectionHeading
                        overline="Concept"
                        title="Goal & Development Focus"
                        sub="Showcase an artist’s work in a playable environment while pushing my skills in procedural generation, AI pathfinding, and game systems engineering."
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-black/50 border border-[#00F0FF]/30">
                            <h3 className="text-xl font-bold text-white mb-2">The Goal</h3>
                            <p className="text-gray-300">
                                Build a system that highlights a collaborator’s 3D art assets while
                                demonstrating <span className="text-white font-semibold">advanced programming techniques</span>.
                                The challenge was to balance creative integration with technical rigor.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-black/50 border border-[#FF61F6]/30">
                            <h3 className="text-xl font-bold text-white mb-2">The Core Idea</h3>
                            <p className="text-gray-300">
                                Procedurally generated mazes, AI-driven monsters, stamina mechanics,
                                and scoring systems—designed to showcase skills in{" "}
                                <span className="text-white">algorithm design</span>,
                                <span className="text-white"> system integration</span>, and
                                <span className="text-white"> iterative testing</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* TECHNICAL HIGHLIGHTS */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="CS Skills" title="Technical Highlights" />
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="rounded-2xl bg-black/50 border border-[#00F0FF]/30 p-6">
                            <h3 className="text-2xl font-bold text-white mb-3">Procedural Generation</h3>
                            <p className="text-gray-300">
                                Designed a two-stage maze generator with random seeding
                                and DFS enforcement of accessibility—an application of
                                <span className="text-white"> graph theory and traversal algorithms</span>.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-black/50 border border-[#FF61F6]/30 p-6">
                            <h3 className="text-2xl font-bold text-white mb-3">Enemy AI & BFS</h3>
                            <p className="text-gray-300">
                                Modeled maze cells as nodes in a graph. Enemies patrol by default and
                                chase when the player is in range, using BFS to calculate shortest paths
                                in real time—demonstrating applied use of
                                <span className="text-white"> search algorithms and data structures</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FEATURES AS SYSTEMS */}
                <div className="bg-[#0E0E14] py-16 px-8 md:px-16">
                    <SectionHeading overline="Engineered Systems" title="Key Components I Built" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { t: "Maze Generator", d: "Procedural N×N grid generation with DFS connectivity check." },
                            { t: "AI Pathfinding", d: "Graph-based BFS chase logic with patrol fallback." },
                            { t: "Stamina System", d: "Sprint mechanics with FOV feedback and stamina regen." },
                            { t: "Lives & Keys", d: "Game state tracking with elevator unlock progression." },
                            { t: "High Scores", d: "JSON save/load of top 5 runs with UI display." },
                            { t: "UX Integration", d: "Menus, controls, and artist’s 3D assets fully integrated." },
                        ].map((f, i) => (
                            <motion.div
                                key={i}
                                {...variants.fadeUp(i)}
                                className="bg-black/60 border border-[#00F0FF]/30 p-6 rounded-xl hover:scale-[1.02] hover:border-[#FF61F6]/50 transition"
                            >
                                <h4 className="text-white font-semibold mb-2">{f.t}</h4>
                                <p className="text-gray-400 text-sm">{f.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* GALLERY */}
                <motion.div {...variants.fadeIn} className="max-w-6xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Visuals" title="Gallery" />
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[ss1, ss2].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`Theseus screenshot ${i + 1}`}
                                className="w-[520px] h-[300px] object-cover flex-shrink-0 rounded-xl border border-[#00F0FF]/40 shadow-lg"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* REFLECTION */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Reflection" title="What I Learned" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Technical</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Applied <span className="text-white">graph theory</span> in procedural generation & AI pathfinding.</li>
                                <li>Practiced <span className="text-white">OOP & modular design</span> in Unity (C#).</li>
                                <li>Handled <span className="text-white">data persistence</span> via JSON high scores.</li>
                                <li>Debugged and tested enemy AI edge cases and maze connectivity.</li>
                            </ul>
                        </div>
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Professional</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Collaborated with a graduate artist, integrating creative assets effectively.</li>
                                <li>Balanced client requirements with technical feasibility.</li>
                                <li>Iterated based on playtest feedback, improving usability & balance.</li>
                                <li>Delivered within academic deadlines, managing scope and priorities.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ROLE & STACK */}
                <motion.div {...variants.fadeIn} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-8 md:px-16 pb-24">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#00F0FF]/30">
                        <h3 className="text-2xl text-white mb-3">My Role</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I designed and developed the project end-to-end: implementing procedural generation,
                            enemy AI, game systems, and data persistence. I also integrated external artwork,
                            managed feedback from playtests, and optimised performance.
                            This project demonstrates my ability to take a concept through the{" "}
                            <span className="text-white">full software lifecycle</span>—from ideation, to system design, to testing.
                        </p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-[#FF61F6]/30">
                        <h3 className="text-2xl text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Unity", "C#", "Procedural Generation", "DFS/BFS", "Graph Modeling", "JSON Persistence", "GitHub"].map(
                                (t) => (
                                    <span key={t} className="px-3 py-1 rounded-full text-sm bg-[#0E0E14] border border-white/10">
                                        {t}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
