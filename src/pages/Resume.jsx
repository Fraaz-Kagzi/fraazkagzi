// pages/Resume.jsx
import { motion } from "framer-motion"

export default function Resume() {
    return (
        <section className="min-h-screen px-6 py-20 bg-background text-white font-mono">
            {/* Header */}
            <motion.h2
                className="text-4xl text-center font-bold text-neonBlue mb-4 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                 Resume
            </motion.h2>

            <motion.p
                className="text-gray-400 text-center mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                A summary of my professional experience and education.
            </motion.p>

            {/* ✅ Centered Download Button */}
            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <a
                    href="/FRAAZ_CV.pdf"
                    download
                    className="px-6 py-3 bg-[#FF61F6] font-bold text-white rounded-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_12px_rgba(255,20,147,0.4)]"
                >
                    Download Full PDF
                </a>
            </motion.div>

            {/* Animated Divider */}
            <motion.div
                className="w-24 h-[2px] bg-gradient-to-r from-neonBlue via-[#FF61F6] to-neonGreen mx-auto my-16 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Experience Section */}
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-2xl text-white mb-8 text-center font-bold tracking-wider">
                    Experience
                </h3>

                <div className="space-y-10">
                    {[
                        {
                            role: "Stock Assistant",
                            company: "T.J. Morris Ltd (Home Bargains)",
                            time: "Jul 2024 – Present · Blackburn, UK",
                            color: "border-[#FF61F6]",
                            bullets: [
                                "Streamlined inventory processes to improve product availability and stock control.",
                                "Engaged with customers to enhance store layout and prioritisation.",
                                "Analysed stock trends to anticipate high-demand periods and improve efficiency.",
                            ],
                        },
                        {
                            role: "Support Technician",
                            company: "Park Computers Ltd",
                            time: "May 2019 – Jun 2019 · Blackburn, UK",
                            color: "border-[#FF61F6]",
                            bullets: [
                                "Diagnosed and repaired 30+ computer systems, reducing turnaround time by 20%.",
                                "Delivered client-focused technical support, improving satisfaction and reliability.",
                            ],
                        },
                    ].map((job, i) => (
                        <motion.div
                            key={i}
                            className={`relative pl-6 border-l-2 ${job.color} group`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                        >
                            <div className="absolute -left-[7px] w-3 h-3 bg-[#FF61F6] rounded-full group-hover:scale-125 transition-transform" />
                            <h4 className="text-xl font-bold text-white">{job.role}</h4>
                            <p className="text-gray-400">{job.company} · {job.time}</p>
                            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                                {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Divider */}
            <motion.div
                className="w-20 h-[2px] bg-gradient-to-r from-[#FF61F6] to-[#5EDFFF] mx-auto my-16 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            />

            {/* Education Section */}
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <h3 className="text-2xl text-neonGreen mb-8 text-center font-bold tracking-wider">
                    Education
                </h3>

                <div className="space-y-10">
                    <motion.div
                        className="relative pl-6 border-l-2 border-[#5EDFFF] group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="absolute -left-[7px] w-3 h-3 bg-[#5EDFFF] rounded-full group-hover:scale-125 transition-transform" />
                        <h4 className="text-xl font-bold text-white">
                            BSc (Hons) Computer Science — 2:1
                        </h4>
                        <p className="text-gray-400">Queen Mary University of London · 2020 – 2024</p>
                        <p className="text-gray-400 mt-2">
                            Relevant modules: Software Engineering, Security Engineering, OOP, Algorithms, Database Systems.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative pl-6 border-l-2 border-[#5EDFFF] group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="absolute -left-[7px] w-3 h-3 bg-[#5EDFFF] rounded-full group-hover:scale-125 transition-transform" />
                        <h4 className="text-xl font-bold text-white">A-Levels</h4>
                        <p className="text-gray-400">Clitheroe Royal Grammar School · 2018 – 2020</p>
                        <p className="text-gray-400 mt-2">
                            Subjects: Mathematics, Further Mathematics, Computer Science.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Divider */}
            <motion.div
                className="w-20 h-[2px] bg-gradient-to-r from-[#5EDFFF] to-[#FF61F6] mx-auto my-16 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Extracurricular Section */}
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <h3 className="text-2xl text-neonPurple mb-8 text-center font-bold tracking-wider">
                    Extracurricular
                </h3>

                <div className="space-y-10">
                    <motion.div
                        className="relative pl-6 border-l-2 border-[#FF61F6] group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <div className="absolute -left-[7px] w-3 h-3 bg-[#FF61F6] rounded-full group-hover:scale-125 transition-transform" />
                        <h4 className="text-xl font-bold text-white">Accenture Virtual Internship</h4>
                        <p className="text-gray-400">Jan 2023 – Apr 2023</p>
                        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                            <li>Enhanced problem-solving and debugging through secure software challenges.</li>
                            <li>Gained SDLC experience through hands-on design, development, and testing tasks.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="relative pl-6 border-l-2 border-[#FF61F6] group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                    >
                        <div className="absolute -left-[7px] w-3 h-3 bg-[#FF61F6] rounded-full group-hover:scale-125 transition-transform" />
                        <h4 className="text-xl font-bold text-white">Bright Network Internship Experience</h4>
                        <p className="text-gray-400">Jun 2021</p>
                        <p className="text-gray-400 mt-2">
                            Participated in workshops on software development, data analysis, and cybersecurity,
                            gaining hands-on industry insight.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
