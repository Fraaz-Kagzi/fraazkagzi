// /pages/Ment.jsx — Deep Dive Showcase (Skills-Focused)
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper.jsx";
import ss1 from "@/pages/assets/ment1.png";

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

export default function Ment() {
    return (
        <PageWrapper>
            <section className="min-h-screen bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">

                {/* HERO */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24">
                    <motion.div {...variants.fadeUp(0)}>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FF61F6]">
                             MenT — Mentor Matching App
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 max-w-xl">
                            A group project built as a <span className="text-white font-bold">full-stack prototype</span>
                            for the FDM Affiliates Mentorship Programme. The system showcased my skills in
                            <span className="text-white font-bold"> React development, authentication,
                            database integration, and algorithm design</span> while also applying business analysis
                            to address real mentorship challenges.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Fraaz-Kagzi/MenT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                 GitHub Repo
                            </a>
                            <a
                                href="/MenT.zip"
                                download
                                className="px-6 py-3 bg-transparent border border-[#FF61F6] text-[#FF61F6] font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                Download Documentation
                            </a>
                        </div>
                    </motion.div>

                    <motion.div {...variants.fadeUp(1)} className="relative">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#FF61F6]/30 to-[#00F0FF]/30 blur-2xl" />
                        <div className="relative rounded-2xl border-2 border-[#FF61F6] shadow-2xl aspect-video flex items-center justify-center text-gray-500">
                            <img
                            src={ss1}
                            alt="mentT"
                            className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* QUICK STATS */}
                <motion.div {...variants.fadeIn} className="max-w-6xl mx-auto px-8 md:px-16 pb-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-xl bg-black/60 border border-[#00F0FF]/30">
                            <div className="text-3xl font-bold text-white">Full-Stack</div>
                            <div className="text-sm text-gray-400">React + Firebase</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#FF61F6]/30">
                            <div className="text-3xl font-bold text-white">Algorithmic</div>
                            <div className="text-sm text-gray-400">Matching logic</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#00F0FF]/30">
                            <div className="text-3xl font-bold text-white">UX Testing</div>
                            <div className="text-sm text-gray-400">Acceptance criteria</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#FF61F6]/30">
                            <div className="text-3xl font-bold text-white">Teamwork</div>
                            <div className="text-sm text-gray-400">Agile & GitHub</div>
                        </div>
                    </div>
                </motion.div>

                {/* PROBLEM & SOLUTION */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-10 grid md:grid-cols-2 gap-8">
                    <motion.div {...variants.fadeUp(0)} className="bg-black/50 border border-[#00F0FF]/30 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-4"> Challenge</h3>
                        <p className="text-gray-300">
                            Many professionals value mentorship but lack structured ways to access it.
                            Our analysis with FDM highlighted the need for a digital solution that
                            lowers barriers, manages data securely, and supports long-term engagement.
                        </p>
                    </motion.div>
                    <motion.div {...variants.fadeUp(1)} className="bg-black/50 border border-[#FF61F6]/30 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Technical Solution</h3>
                        <p className="text-gray-300">
                            MenT was designed as a responsive full-stack system with <span className="text-white">user
                            authentication, profile management, a matching algorithm, chat integration, and admin
                            tools</span>. This allowed me to demonstrate both <span className="text-white">CS fundamentals</span>
                            and <span className="text-white">business analysis</span> skills in one project.
                        </p>
                    </motion.div>
                </div>

                {/* SYSTEMS BUILT */}
                <div className="bg-[#0E0E14] py-16 px-8 md:px-16">
                    <SectionHeading overline="Core Development" title="Systems I Built" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { t: " Authentication", d: "Implemented secure login & registration using Firebase Auth." },
                            { t: " Profile Forms", d: "Dropdown-based data capture for skills, interests, and goals." },
                            { t: " Matching Algorithm", d: "Wrote percentage-based logic to suggest mentor/mentee pairings." },
                            { t: " Messaging", d: "Integrated chat features for mentor–mentee communication." },
                            { t: " Admin Tools", d: "Built forms for IT support, feedback, and mentorship management." },
                            { t: " Scheduling", d: "Created functionality for arranging mentorship sessions." },
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

                {/* REFLECTION */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Reflection" title="What I Learned" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Technical</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Strengthened <span className="text-white">full-stack skills</span> (React + Firebase).</li>
                                <li>Applied <span className="text-white">algorithm design</span> for compatibility matching.</li>
                                <li>Worked with <span className="text-white">real-world requirements</span> from FDM stakeholders.</li>
                                <li>Practiced <span className="text-white">secure data handling</span> for user interactions.</li>
                            </ul>
                        </div>
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Professional</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Collaborated in a 5-person team with GitHub and Agile-style sprints.</li>
                                <li>Balanced feature scope with time constraints.</li>
                                <li>Practiced requirements elicitation and business analysis.</li>
                                <li>Improved communication and documentation skills.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ROLE & TECH STACK */}
                <motion.div {...variants.fadeIn} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-8 md:px-16 pb-24">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#00F0FF]/30">
                        <h3 className="text-2xl text-white mb-3">My Role</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I focused on implementing authentication, registration, and profile systems,
                            and supported integration of the matching algorithm. I also co-led evaluation,
                            acceptance testing, and UI design to keep the platform consistent with FDM’s
                            branding. This project gave me hands-on experience in both
                            <span className="text-white"> software engineering</span> and
                            <span className="text-white"> business analysis</span>.
                        </p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-[#FF61F6]/30">
                        <h3 className="text-2xl text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Framer Motion", "Firebase Auth", "Firestore DB", "Matching Algorithms", "UX Testing"].map(
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
