import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper.jsx";
import tradingImg from "../assets/trading.png" // optional screenshot placeholder

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

export default function TradingApp() {
    return (
        <PageWrapper>
            <section className="min-h-screen bg-[#0B0B10] text-gray-200 font-mono relative overflow-hidden">

                {/* HERO */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-24">
                    <motion.div {...variants.fadeUp(0)}>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FF61F6]">
                            Mock Trading Application
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 max-w-xl">
                            A <span className="text-white font-semibold">Java-based stock trading simulator</span> built
                            as part of my Level 3 coursework. The project allows users to manage a wallet, deposit and
                            withdraw funds, and buy or sell shares in companies such as{" "}
                            <span className="text-white font-semibold">Intel, Apple, and Google</span>.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Fraaz-Kagzi/MockTradingApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#00F0FF] text-black font-bold rounded-lg hover:bg-[#FF61F6] hover:text-white transition"
                            >
                                GitHub Repo
                            </a>
                        </div>
                    </motion.div>

                    {/* IMAGE (optional) */}
                    <motion.div {...variants.fadeUp(1)} className="relative flex justify-center items-center">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#FF61F6]/30 to-[#00F0FF]/30 blur-2xl" />
                        <div className="relative rounded-2xl border-2 border-[#FF61F6] shadow-2xl bg-black/40 flex items-center justify-center p-6">
                            <img
                                src={tradingImg}
                                alt="Mock Trading App Screenshot"
                                className="w-full max-w-md object-contain rounded-lg"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* QUICK STATS */}
                <motion.div {...variants.fadeIn} className="max-w-6xl mx-auto px-8 md:px-16 pb-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-xl bg-black/60 border border-[#00F0FF]/30">
                            <div className="text-3xl font-bold text-white">Java</div>
                            <div className="text-sm text-gray-400">Core language</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#FF61F6]/30">
                            <div className="text-3xl font-bold text-white">OOP</div>
                            <div className="text-sm text-gray-400">Encapsulation, inheritance</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#00F0FF]/30">
                            <div className="text-3xl font-bold text-white">GUI</div>
                            <div className="text-sm text-gray-400">Swing Interface</div>
                        </div>
                        <div className="p-5 rounded-xl bg-black/60 border border-[#FF61F6]/30">
                            <div className="text-3xl font-bold text-white">Trading</div>
                            <div className="text-sm text-gray-400">Stock buy/sell logic</div>
                        </div>
                    </div>
                </motion.div>

                {/* FUNCTIONALITY OVERVIEW */}
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-10 grid md:grid-cols-2 gap-8">
                    <motion.div {...variants.fadeUp(0)} className="bg-black/50 border border-[#00F0FF]/30 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Create and reset profiles with a new trading wallet.</li>
                            <li>Deposit or withdraw GBP funds dynamically.</li>
                            <li>Buy and sell shares in companies like Intel, Apple, and Google.</li>
                            <li>Track holdings and view live wallet value.</li>
                            <li>Interactive and intuitive GUI using Java Swing.</li>
                        </ul>
                    </motion.div>
                    <motion.div {...variants.fadeUp(1)} className="bg-black/50 border border-[#FF61F6]/30 p-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Technical Highlights</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Modular OOP structure across multiple Java classes.</li>
                            <li>Interfaces like <span className="text-white">ProfileActions.java</span> for reusability.</li>
                            <li>Polymorphism in <span className="text-white">UserName.java</span> for user identity handling.</li>
                            <li>Conversion utilities for monetary formatting.</li>
                            <li>Separate GUI frames for Buying, Selling, and Profile creation.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* CORE COMPONENTS */}
                <div className="bg-[#0E0E14] py-16 px-8 md:px-16">
                    <SectionHeading overline="Core Development" title="Main System Components" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { t: "TradingApp.java", d: "Main GUI file that runs the program and handles overall navigation." },
                            { t: "BuyingFrame.java", d: "Handles stock purchases and updates wallet values accordingly." },
                            { t: "SellingFrame.java", d: "Handles stock sales and GBP conversions." },
                            { t: "Wallet.java", d: "Stores and manages funds and owned stocks." },
                            { t: "Stock.java", d: "Defines stock objects including name, symbol, and rate." },
                            { t: "StockTrading.java", d: "Implements buy/sell logic and market interactions." },
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
                                <li>Deepened understanding of Java OOP and Swing GUI design.</li>
                                <li>Learned interface-driven architecture for modular code.</li>
                                <li>Improved ability to handle real-time user input and updates.</li>
                                <li>Strengthened debugging and exception-handling skills.</li>
                            </ul>
                        </div>
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                            <h4 className="text-xl text-white mb-3">Professional</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Practiced translating real-world trading systems into code.</li>
                                <li>Improved planning and design documentation habits.</li>
                                <li>Gained experience structuring multi-file Java applications.</li>
                                <li>Enhanced presentation and reporting of technical projects.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ROLE & TECH STACK */}
                <motion.div {...variants.fadeIn} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-8 md:px-16 pb-24">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#00F0FF]/30">
                        <h3 className="text-2xl text-white mb-3">My Role</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            I designed and implemented the entire trading system using Java Swing and object-oriented principles.
                            I developed all core trading logic, wallet management, and GUI interactions, ensuring a clear and
                            accessible interface for users to simulate real-world stock trading.
                        </p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-[#FF61F6]/30">
                        <h3 className="text-2xl text-white mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Java", "Swing", "OOP", "Interfaces", "File I/O", "Exception Handling"].map((t) => (
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
