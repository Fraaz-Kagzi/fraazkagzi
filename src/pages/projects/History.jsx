import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper.jsx";

// import the four screenshots (in order provided)
import ss1 from "../assets/history1.png";
import ss2 from "../assets/history2.png";
import ss3 from "../assets/history3.png";
import ss4 from "../assets/hisstory4.png";

const variants = {
    fadeUp: (i = 0) => ({
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } },
    }),
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.8 } } },
};

const SectionHeading = ({ overline, title, sub }) => (
    <div className="text-center mb-12">
        {overline && (
            <div className="tracking-widest uppercase text-xs text-[#00F0FF]/80 mb-2">{overline}</div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF61F6] drop-shadow-lg">{title}</h2>
        {sub && <p className="text-gray-400 mt-3 max-w-2xl mx-auto">{sub}</p>}
    </div>
);

export default function ProjectHistory() {
    const screenshots = [
        { src: ss1, caption: "Main Menu – Retro pixel-art showcase uniting world history eras." },
        { src: ss2, caption: "Topic Selection – Interactive hub connecting historical modules." },
        { src: ss3, caption: "Narrative Mode – Dialogue-driven storytelling with NPCs and quizzes." },
        { src: ss4, caption: "Quiz Battle – Knowledge-based encounters with gamified scoring." },
    ];

    return (
        <PageWrapper>
            <section className="min-h-screen bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">

                {/* HERO */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24">
                    <motion.div {...variants.fadeUp(0)}>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FF61F6]">
                            Project History
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 max-w-xl">
                            A <span className="text-white font-bold">pixel-art educational game</span> designed to make
                            history interactive and fun. It blends <span className="text-white font-bold">RPG exploration</span> with{" "}
                            <span className="text-white font-bold">quiz-based learning</span>, combining storytelling and gameplay
                            to reinforce learning objectives through immersive environments.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Fraaz-Kagzi/FinalProject"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                GitHub Repo
                            </a>
                            <a
                                href="/ProjectHistory_Documentation.pdf"
                                download
                                className="px-6 py-3 bg-transparent border border-[#FF61F6] text-[#FF61F6] font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                Download Documentation
                            </a>
                        </div>
                    </motion.div>

                    <motion.div {...variants.fadeUp(1)} className="relative">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#FF61F6]/30 to-[#00F0FF]/30 blur-2xl" />
                        <div className="relative rounded-2xl border-2 border-[#FF61F6]/40 overflow-hidden shadow-2xl">
                            <img
                                src={ss1}
                                alt="Project History main menu"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* TECHNICAL FEATURES */}
                <div className="bg-[#0E0E14] py-16 px-8 md:px-16">
                    <SectionHeading overline="Technical" title="Core Development Features" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "RPG Maker Integration", d: "Built using RPG Maker with event scripting for branching storylines." },
                            { t: "Educational Focus", d: "Embedded historical questions and facts for contextual learning." },
                            { t: "Dynamic Dialogue", d: "Interactive NPCs with choices leading to quizzes or narrative outcomes." },
                            { t: "Gamified Assessment", d: "Quiz battles and score tracking to motivate student engagement." },
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

                {/* DESIGN & WORKFLOW */}
                <div className="max-w-5xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Design" title="Research & Development Workflow" />
                    <div className="relative pl-6 border-l-2 border-[#00F0FF]/50 space-y-10">
                        {[
                            { h: "Concept Development", p: "Blended educational research with nostalgic 8-bit art to boost engagement." },
                            { h: "Level Design", p: "Used tile-based mapping and sprites to create distinct eras (Egypt, Britain, USA)." },
                            { h: "Learning Integration", p: "Embedded subject-specific questions within interactive dialogue trees." },
                            { h: "Accessibility", p: "Simplified control layout and color scheme for ease of use in classroom settings." },
                        ].map((s, i) => (
                            <motion.div key={i} {...variants.fadeUp(i)}>
                                <div className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-[#FF61F6]" />
                                <h4 className="text-xl font-bold text-white">{s.h}</h4>
                                <p className="text-gray-400">{s.p}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* GALLERY SECTION */}
                <div className="bg-[#0E0E14] py-20 px-8 md:px-16">
                    <SectionHeading
                        overline="Showcase"
                        title="Gameplay & Design Highlights"
                        sub="A journey through the learning experience — from exploration to quiz combat."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {screenshots.map((s, i) => (
                            <motion.div
                                key={i}
                                {...variants.fadeUp(i)}
                                className="relative group rounded-xl overflow-hidden border border-[#FF61F6]/30 hover:border-[#00F0FF]/40 transition"
                            >
                                <img
                                    src={s.src}
                                    alt={`Screenshot ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-gray-100 text-center px-3 transition">
                                    {s.caption}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* REFLECTION */}
                <motion.div {...variants.fadeIn} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-8 md:px-16 py-16">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#00F0FF]/30">
                        <h3 className="text-2xl text-white mb-3">What I Learned</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                            <li>How to balance educational goals with engaging gameplay mechanics.</li>
                            <li>Designing retro interfaces with modern usability principles.</li>
                            <li>Implementing dialogue systems and event scripting in RPG Maker.</li>
                            <li>Collaborating on a cross-disciplinary project (design + pedagogy).</li>
                        </ul>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-[#FF61F6]/30">
                        <h3 className="text-2xl text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["RPG Maker", "JavaScript", "Pixel Art", "Event Logic", "Educational Design", "UX Research"].map(
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
