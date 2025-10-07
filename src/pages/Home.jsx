// Home.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
    const name = "FRAAZ-KAGZI".split("")

    return (
        <div className="bg-background text-white">

            {/* ====== NAME SPLASH (full screen) ====== */}
            <section
                id="hero"
                className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background"
            >
                {/* Big, bold, white name with extra word spacing */}
                <h1
                    className="text-white font-mono font-extrabold leading-none tracking-tight whitespace-nowrap
               text-[18vw] sm:text-[16vw] md:text-[12vw] select-none"
                    style={{ wordSpacing: '0.45em' }}   // ← increase/decrease this value to tune spacing
                >
                    FRAAZ KAGZI
                </h1>

                {/* bounce hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs tracking-widest">
                    <div className="animate-bounce">SCROLL</div>
                </div>

                {/* keep the sentinel for your current Navbar observer */}
                <div id="hero-sentinel" className="absolute bottom-0 left-0 w-full h-px"></div>
            </section>

            {/* ====== HOME CONTENT ====== */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
                <div className="max-w-4xl w-full flex flex-col gap-10">
                    <motion.h1
                        className="text-5xl md:text-7xl font-mono font-bold leading-[1.1] tracking-tight"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Computer Science Graduate & Software Developer
                        <br />
                        <span className="font-mono text-4xl text-[#FF61F6]">
                            Turning ideas into real, working software.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="font-mono text-lg text-gray-400 max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        I’m Fraaz, a recent Computer Science graduate with a strong interest in solving problems through code.
                        I enjoy exploring different areas of tech, from software engineering and frontend development
                        to data, automation, and emerging technologies. I’m always looking for opportunities to grow my skills
                        and make an impact in the field.
                    </motion.p>

                    <motion.div
                        className="flex gap-6 mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                    >
                        <Link
                            to="/projects"
                            className="group text-white font-semibold text-lg relative inline-block"
                        >
                            <span className="font-mono pb-1 border-b-2 border-white group-hover:text-[#FF61F6] transition">
                                See My Work
                            </span>
                        </Link>

                        <Link
                            to="/contact"
                            className="group text-gray-300 font-semibold text-lg relative inline-block hover:text-[#FF61F6]"
                        >
                            <span className="font-mono pb-1 border-b border-[#FF61F6] border-gray-500 group-hover:border-white transition">
                                Get in Touch
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}
