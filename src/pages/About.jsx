// pages/About.jsx
import { motion } from "framer-motion"
import profilePic from "./assets/me.JPG"
import artSnippet from "./assets/myart.GIF"
import volleyballPic from "./assets/sport.jpg"
import thinkingPic from "./assets/curious.jpg"

export default function About() {
    return (
        <section className="min-h-screen px-6 py-24 bg-background text-white font-mono">
            {/* Header */}
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-5xl font-bold text-neonBlue mb-4">About Me</h2>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    A look into what I do, what I love, and what keeps me curious.
                </p>
            </motion.div>

            {/* Story Section */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.img
                    src={profilePic}
                    alt="Fraaz"
                    className="w-full rounded-2xl border border-neonBlue/30 shadow-[0_0_25px_rgba(0,255,255,0.15)] object-cover h-[450px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                        <p>
                            Hey, I’m Fraaz!  A Computer Science graduate who loves building things that feel alive.
                        </p>

                        <p>
                            I’ve always been drawn to projects that mix creativity and logic, whether that’s designing a game, building a web app, or creating something visual just for fun.
                        </p>

                        <p>
                            I studied at Queen Mary University of London, where I learned how to think critically, collaborate, and bring ideas to life through code.
                        </p>

                        <p>
                            What drives me most is learning; new tools, new skills, and new ways to make something better than before.
                        </p>

                        <p>
                            I’ve always liked blending design with code; figuring out how to make things work well and look great.
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* Passions Section */}
            <div className="max-w-6xl mx-auto mt-32 space-y-20">
                {/* Creativity */}
                <motion.div
                    className="flex flex-col md:flex-row gap-10 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <img
                        src={artSnippet}
                        alt="Digital art by Fraaz"
                        className="w-full md:w-1/2 rounded-2xl border border-neonPink/30 shadow-[0_0_25px_rgba(255,20,147,0.15)] object-cover"
                    />
                    <div className="text-left md:text-right">
                        <h3 className="text-neonPink text-2xl font-semibold mb-3">I’m Creative</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I’ve always been drawn to creating things, whether that’s art, design, or code.
                            I love exploring new ideas and finding creative ways to bring them to life.
                            That curiosity drives how I approach tech, always learning, experimenting, and improving with every project.
                        </p>
                    </div>
                </motion.div>

                {/* Sports */}
                <motion.div
                    className="flex flex-col md:flex-row-reverse gap-10 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <img
                        src={volleyballPic}
                        alt="Volleyball"
                        className="w-full md:w-1/2 rounded-2xl border border-neonBlue/30 shadow-[0_0_25px_rgba(0,255,255,0.15)] object-cover"
                    />
                    <div className="text-left md:text-left">
                        <h3 className="text-neonBlue text-2xl font-semibold mb-3">I’m Active</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I like staying on my feet, whether that’s football, volleyball, climbing, or heading to the driving range.
                            It helps me stay focused and brings a sense of balance to everything I do.
                            Team sports especially remind me how much good communication and flow matter when working with others.
                        </p>
                    </div>
                </motion.div>

                {/* Perspective */}
                <motion.div
                    className="flex flex-col md:flex-row gap-10 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <img
                        src={thinkingPic}
                        alt="Reflection"
                        className="w-full md:w-1/2 rounded-2xl border border-neonGreen/30 shadow-[0_0_25px_rgba(0,255,100,0.15)] object-cover"
                    />
                    <div className="text-left md:text-right">
                        <h3 className="text-neonGreen text-2xl font-semibold mb-3">I’m Curious</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I love learning new things, whether that’s exploring new technologies, picking up creative skills, or diving into something completely unfamiliar.
                            I’m driven by curiosity and the desire to keep improving, both technically and personally.
                            For me, growth comes from staying curious, experimenting, and always being open to learning.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Closing Line */}
            <motion.div
                className="max-w-3xl mx-auto text-center mt-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p className="text-gray-400 leading-relaxed">
                    I’m always building, learning, and exploring new ideas, both in code and art.
                    If you’d like to see some of the creative side of what I do, check out my projects and my artwork

                </p>
            </motion.div>
        </section>
    )
}
