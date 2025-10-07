import PageWrapper from '../components/PageWrapper.jsx'
import mentImg from './assets/menT.png'
import PTImg from './assets/PT.png'
import PHImg from './assets/PHis.png'
import WAImg from './assets/WA.png'
import TAImg from './assets/tradingapp.png'
import EOTLRImg from './assets/EOTLR.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'Project Theseus',
        description: 'Procedurally Generated Maze Game made using Unity and C#',
        image: PTImg,
        link: '/projects/theseus',
        internal: true,
    },
    {
        title: 'MenT - Mentor Matching app',
        description: 'Built with React + Firebase',
        image: mentImg,
        link: '/projects/ment',
        internal: true,
    },
    {
        title: 'Project History',
        description: 'Educational RPG game made using Unity and C#',
        image: PHImg,
        link: '/projects/history',
        internal: false,
    },
    {
        title: 'Weather App',
        description: 'Weather forecast webapp with flight tracking made using a P',
        image: WAImg,
        link: '/projects/weatherapp',
        internal: false,
    }, {
        title: 'Echoes of the Lost Realm',
        description: 'First Person shooter - survival game made using Unity and C#',
        image: EOTLRImg,
        link: '/projects/eotlr',
        internal: false,
    },
    {
        title: 'Mock Trading App',
        description: 'java-based mock trading app, created using Yahoo finance API',
        image: TAImg,
        link: '/projects/trading',
        internal: false,
    },
]

export default function Projects() {
    return (
        <PageWrapper>
            <section className="min-h-screen px-6 py-20 bg-background text-white">
                <h2 className="text-4xl font-mono font-bold mb-10">My Projects</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((proj, i) =>
                        proj.internal ? (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                            >
                                <Link
                                    to={proj.link}
                                    className="group relative block overflow-hidden rounded-xl border border-white/10 hover:scale-[1.02] transition"
                                >
                                    <img src={proj.image} alt={proj.title} className="w-full h-64 object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
                                        <h3 className="text-lg font-semibold">{proj.title}</h3>
                                        <p className="text-sm text-gray-400">{proj.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.a
                                key={i}
                                href={proj.link}
                                className="group relative block overflow-hidden rounded-xl border border-white/10 hover:scale-[1.02] transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.2 }}
                            >
                                <img src={proj.image} alt={proj.title} className="w-full h-64 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                                    <p className="text-sm text-gray-400">{proj.description}</p>
                                </div>
                            </motion.a>
                        )
                    )}
                </div>
            </section>
        </PageWrapper>
    )
}
