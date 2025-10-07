// Navbar.jsx
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const navItems = ['Home', 'About','Art', 'Projects', 'Skills', 'Resume', 'Contact']
    const [showBrand, setShowBrand] = useState(false) // hidden at start

    useEffect(() => {
        const hero = document.getElementById('hero')
        // If there's no hero (e.g., not on Home), always show brand
        if (!hero || !('IntersectionObserver' in window)) {
            setShowBrand(true)
            return
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                // While hero is visible => hide brand; when hero mostly gone => show brand
                setShowBrand(!entry.isIntersecting)
            },
            {
                // start revealing when ~80% of the hero has been scrolled past
                threshold: 0.2,
                rootMargin: '0px 0px 0px 0px',
            }
        )

        io.observe(hero)
        return () => io.disconnect()
    }, [])

    return (
        <nav className="fixed top-0 inset-x-0 w-full px-6 py-4 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

                <NavLink
                    to="/"
                    className={`text-white font-mono font-extrabold leading-none tracking-tight
                      text-3xl sm:text-4xl md:text-5xl transition-all duration-300
                      ${showBrand ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}
                >
                    FRAAZ KAGZI
                </NavLink>

                {/* Right: Nav Links */}
                <ul className="flex flex-wrap justify-end items-center gap-x-6 gap-y-3
                       text-sm sm:text-base md:text-lg font-medium text-gray-300 list-none m-0 p-0">
                    {navItems.map((item) => (
                        <li key={item}>
                            <NavLink
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `hover:text-white transition-all pb-1 border-b-2 ${
                                        isActive ? 'text-white border-neonGreen' : 'border-transparent'
                                    }`
                                }
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
