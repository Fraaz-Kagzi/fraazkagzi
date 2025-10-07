// pages/Art.jsx
import { motion } from "framer-motion"
import art1 from "./assets/art/art1.jpg"
import art2 from "./assets/art/art2.PNG"
import art3 from "./assets/art/art3.PNG"
import art4 from "./assets/art/art4.jpg"


export default function Art() {
    const artworks = [art1, art2, art3, art4,]

    return (
        <section className="min-h-screen px-6 py-20 bg-background text-white font-mono font-bold">
            {/* Header */}
            <motion.h2
                className="text-5xl text-center text-neonPink mb-6 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Digital Art Gallery
            </motion.h2>

            <motion.p
                className="text-gray-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                A selection of my digital artwork and animations created using Procreate.
            </motion.p>

            {/* Art Grid */}
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks.map((art, i) => (
                    <motion.div
                        key={i}
                        className="overflow-hidden rounded-2xl border border-white/10 hover:border-neonPink/30 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all bg-black/20 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={art}
                            alt={`Artwork ${i + 1}`}
                            className="max-h-[500px] w-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02]"
                        />
                    </motion.div>
                ))}
            </div>


            {/* Footer */}
            <motion.div
                className="text-center text-neonPink/60 text-sm mt-16 border-t border-neonPink/20 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >

            </motion.div>
        </section>
    )
}
