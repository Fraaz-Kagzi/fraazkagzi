// pages/Contact.jsx
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section className="font-mono min-h-screen px-6 py-24 bg-background text-white flex flex-col items-center justify-center">
            {/* Header */}
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-5xl font-bold text-neonBlue mb-4">Get in Touch</h2>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Whether you’d like to collaborate, chat about tech and design, or just say hello, feel free to reach out.
                </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300 text-lg font-semibold mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <a
                    href="mailto:fraazkagzi@outlook.com"
                    className="hover:text-neonPink transition-colors border-b border-transparent hover:border-neonPink pb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    fraazkagzi@outlook.com
                </a>
                <a
                    href="https://www.linkedin.com/in/fraaz-kagzi/"
                    className="hover:text-neonGreen transition-colors border-b border-transparent hover:border-neonGreen pb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/fraaz-kagzi
                </a>
                <a
                    href="https://github.com/Fraaz-Kagzi"
                    className="hover:text-neonBlue transition-colors border-b border-transparent hover:border-neonBlue pb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/Fraaz-Kagzi
                </a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
                action="https://formspree.io/f/myznpake"
                method="POST"
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.05)] max-w-md w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                        className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neonPink transition-colors"
                    />
                </div>
                <div className="mb-6">
          <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neonPink transition-colors"
          />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#FF61F6] text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,20,147,0.4)]"
                >
                    Send Message
                </button>
            </motion.form>

            {/* Footer Note */}
            <motion.p
                className="text-gray-500 text-sm mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                Messages go directly to my inbox — I’ll get back to you soon.
            </motion.p>
        </section>
    )
}
