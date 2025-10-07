import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper.jsx";

// Import screenshots
import ss1 from "../assets/eotlr1.png";
import ss2 from "../assets/eotlr2.png";

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

export default function EotLR() {
    const screenshots = [
        {
            src: ss1,
            caption:
                "Combat System — Real-time action with health, hunger, and stamina management in a desert biome.",
        },
        {
            src: ss2,
            caption:
                "Shop System — Dynamic in-game economy with weapon and armour purchases tied to player progression.",
        },
    ];

    return (
        <PageWrapper>
            <section className="min-h-screen bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">

                {/* HERO */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24">
                    <motion.div {...variants.fadeUp(0)}>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FF61F6]">
                            Echoes of the Lost Realm
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 max-w-xl">
                            A collaborative group project built in Unity as part of my degree. It gave me the chance
                            to apply <span className="text-white font-semibold">software engineering principles</span>,
                            work with <span className="text-white font-semibold">game development pipelines</span>, and
                            deliver a full playable product with a team of peers.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Fraaz-Kagzi/EotLR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                GitHub (Project)
                            </a>
                            <a
                                href="https://fraazkagzi.itch.io/eotlr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-transparent border border-[#FF61F6] text-[#FF61F6] font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                Itch.io Build
                            </a>
                        </div>
                    </motion.div>

                    {/* FEATURE IMAGE */}
                    <motion.div {...variants.fadeUp(1)} className="relative">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#FF61F6]/30 to-[#00F0FF]/30 blur-2xl" />
                        <div className="relative rounded-2xl border-2 border-[#FF61F6] shadow-2xl overflow-hidden">
                            <img
                                src={ss1}
                                alt="Echoes of the Lost Realm gameplay"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* QUICK STATS */}
                <motion.div {...variants.fadeIn} className="max-w-6xl mx-auto px-8 md:px-16 pb-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-xl bg-black/60 border border-[#00F0FF]/30">
                            <div className="text-3xl font-bold text-white">4</div>
                            <div className="text-sm text-gray-400">Team members</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#FF61F6]/30">
                            <div className="text-3xl font-bold text-white">Unity</div>
                            <div className="text-sm text-gray-400">Game engine</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#00F0FF]/30">
                            <div className="text-3xl font-bold text-white">GitHub</div>
                            <div className="text-sm text-gray-400">Version control</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#FF61F6]/30">
                            <div className="text-3xl font-bold text-white">WebGL</div>
                            <div className="text-sm text-gray-400">Deployment target</div>
                        </div>
                    </div>
                </motion.div>

                {/* SKILLS LEARNED */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-10 grid md:grid-cols-2 gap-8">
                    <motion.div {...variants.fadeUp(0)} className="bg-black/50 border border-[#00F0FF]/30 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-4">️ Technical Skills</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Applied <span className="text-white">C#</span> for scripting player mechanics, AI, and systems.</li>
                            <li>Implemented <span className="text-white">inventory, shop, and stat tracking</span> systems.</li>
                            <li>Used Unity prefabs and physics for modular environments and enemy behaviour.</li>
                            <li>Built responsive UI for in-game menus and player interaction.</li>
                        </ul>
                    </motion.div>
                    <motion.div {...variants.fadeUp(1)} className="bg-black/50 border border-[#FF61F6]/30 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-4"> Professional Skills</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Collaborated in a <span className="text-white">team of four</span> using Agile-inspired sprints.</li>
                            <li>Used <span className="text-white">GitHub Projects</span> for version control and task tracking.</li>
                            <li>Conducted code reviews and documentation for maintainability.</li>
                            <li>Balanced technical depth with creative gameplay design.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* GALLERY SECTION */}
                <div className="bg-[#0E0E14] py-20 px-8 md:px-16">
                    <SectionHeading
                        overline="Showcase"
                        title="Gameplay Highlights"
                        sub="Key features of combat, environment, and player systems."
                    />
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm text-gray-100 text-center px-4 transition">
                                    {s.caption}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* LESSONS */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Reflection" title="Lessons Learned" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Technical Lessons</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Learned modular architecture for scalable gameplay systems.</li>
                                <li>Refined debugging workflow in Unity’s C# environment.</li>
                                <li>Balanced CPU and memory for smoother WebGL builds.</li>
                            </ul>
                        </div>
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Professional Lessons</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Improved sprint planning and time estimation accuracy.</li>
                                <li>Strengthened communication and peer review habits.</li>
                                <li>Experienced a full game dev pipeline from concept to release.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ROLE & STACK */}
                <motion.div {...variants.fadeIn} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-8 md:px-16 pb-24">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#00F0FF]/30">
                        <h3 className="text-2xl text-white mb-3">My Role</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I implemented the player stats, shop, and save systems while contributing to combat mechanics.
                            My work emphasized technical functionality, gameplay balance, and clean collaboration practices.
                        </p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-[#FF61F6]/30">
                        <h3 className="text-2xl text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Unity", "C#", "GitHub", "WebGL", "Itch.io", "Agile Workflow"].map((t) => (
                                <span key={t} className="px-3 py-1 rounded-full text-sm bg-[#0E0E14] border border-white/10">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </PageWrapper>
    );
}
