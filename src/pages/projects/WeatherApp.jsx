/// /pages/WeatherApp.jsx — Deep Dive Showcase (Skills-Focused)
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper.jsx";

import ss1 from "../assets/weather1.png";
import ss2 from "../assets/weather2.png";

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

export default function WeatherApp() {
    return (
        <PageWrapper>
            <section className="min-h-screen bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">

                {/* HERO */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24">
                    <motion.div {...variants.fadeUp(0)}>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FF61F6]">
                             Weather App
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 max-w-xl">
                            A project focused on <span className="text-white font-bold">API integration</span>,{" "}
                            <span className="text-white font-bold">UX evaluation</span>, and{" "}
                            <span className="text-white font-bold">requirements analysis</span>.
                            It combines weather and flight data into a responsive dashboard, designed to meet
                            the needs of frequent travellers while showcasing my skills in{" "}
                            <span className="text-white font-bold">React, state management, and usability testing</span>.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Fraaz-Kagzi/WeatherApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                 GitHub Repo
                            </a>
                            <a
                                href="/WeatherApp.zip"
                                download
                                className="px-6 py-3 bg-transparent border border-[#FF61F6] text-[#FF61F6] font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                 Download Documentation
                            </a>
                        </div>
                    </motion.div>

                    <motion.div {...variants.fadeUp(1)} className="relative">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#FF61F6]/30 to-[#00F0FF]/30 blur-2xl" />

                        <div className="relative rounded-2xl border-2 border-[#FF61F6] shadow-2xl flex items-center justify-center text-gray-500 p-4">
                            <div className="flex gap-4 w-full justify-center">
                                <img
                                    src={ss1}
                                    alt="Gameplay 1"
                                    className="w-1/2 h-auto object-contain rounded-2xl border-2 border-[#00F0FF] shadow-2xl"
                                />
                                <img
                                    src={ss2}
                                    alt="Gameplay 2"
                                    className="w-1/2 h-auto object-contain rounded-2xl border-2 border-[#00F0FF] shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* TECHNICAL FEATURES */}
                <div className="bg-[#0E0E14] py-16 px-8 md:px-16">
                    <SectionHeading overline="Technical" title="Core Engineering Features" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "API Integration", d: "Combined OpenWeather API and flight status APIs into a unified interface." },
                            { t: "Multi-Location Tracking", d: "State management in React allowed saving and removing multiple cities." },
                            { t: "Forecasting", d: "5-day forecast with humidity, wind, and temperature parsed from live data." },
                            { t: "Session Persistence", d: "Session storage retained user selections between sessions." },
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

                {/* ANALYSIS & WORKFLOW */}
                <div className="max-w-5xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Business Analysis" title="Requirements & Workflow" />
                    <div className="relative pl-6 border-l-2 border-[#00F0FF]/50 space-y-10">
                        {[
                            { h: "Stakeholder Research", p: "Analysed the needs of business travellers: multi-location, reliability, simplicity." },
                            { h: "User Journey", p: "Storyboarded flow from location detection → adding cities → flight tracking." },
                            { h: "Requirements Gathering", p: "Mapped features to stakeholder pain points: clarity, speed, global unit toggle." },
                            { h: "Design Choices", p: "Applied Nielsen’s usability heuristics for consistency and error prevention." },
                        ].map((s, i) => (
                            <motion.div key={i} {...variants.fadeUp(i)}>
                                <div className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-[#FF61F6]" />
                                <h4 className="text-xl font-bold text-white">{s.h}</h4>
                                <p className="text-gray-400">{s.p}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* TESTING & REFLECTION */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
                    <SectionHeading overline="Evaluation" title="Testing & Lessons Learned" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                            <h4 className="text-white font-semibold mb-3">Usability Testing</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Applied Nielsen’s 10 Heuristics to evaluate icons, error prevention, and visibility.</li>
                                <li>Found lack of predictive search → suggested implementation with error handling.</li>
                                <li>Added toggle for °C/°F to suit global users.</li>
                                <li>Proposed pinned widgets for quick flight/weather access.</li>
                            </ul>
                        </div>
                        <div className="bg-black/50 border border-white/10 rounded-xl p-6">
                            <h4 className="text-white font-semibold mb-3">What I Learned</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>How to integrate and normalise multiple APIs within one interface.</li>
                                <li>State management in React for dynamic, persistent dashboards.</li>
                                <li>UX testing methodologies and applying heuristic frameworks.</li>
                                <li>Balancing user needs with technical feasibility under project deadlines.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ROLE & STACK */}
                <motion.div {...variants.fadeIn} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-8 md:px-16 pb-24">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#00F0FF]/30">
                        <h3 className="text-2xl text-white mb-3">My Contributions</h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            I worked across both the <span className="text-white font-semibold">technical and analytical</span> sides:
                            integrating APIs, managing state, and ensuring persistence, while also conducting
                            requirements analysis, stakeholder research, and heuristic usability testing.
                            This dual focus demonstrates <span className="text-white">full-stack problem solving</span> and{" "}
                            <span className="text-white">business analysis skills</span>.
                        </p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-[#FF61F6]/30">
                        <h3 className="text-2xl text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Framer Motion", "OpenWeather API", "Flight API", "Session Storage", "UX Testing"].map(
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
