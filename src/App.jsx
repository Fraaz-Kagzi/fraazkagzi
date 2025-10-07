import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Art from './pages/Art'
import Projects from './pages/Projects'
import MenT from './pages/projects/Ment'
import Theseus from './pages/projects/Theseus'
import Weather from './pages/projects/WeatherApp'
import History from './pages/projects/History.jsx'
import EotLR from './pages/projects/EotLR.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx";
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import TradingApp from "./pages/projects/TradingApp.jsx";

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/art" element={<Art />} />
                <Route path="/projects/ment" element={<MenT />} />
                <Route path="/projects/theseus" element={<Theseus />} />
                <Route path="/projects/weatherapp" element={<Weather />} />
                <Route path="/projects/history" element={<History />} />
                <Route path="/projects/eotlr" element={<EotLR />} />
                <Route path="/projects/trading" element={<TradingApp />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <Navbar />
            <main className="pt-20">
                <AnimatedRoutes />
            </main>
            <Footer />
        </Router>
    )
}

export default App
