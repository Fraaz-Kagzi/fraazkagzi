import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children }) {
    const { pathname } = useLocation();

    // Scroll to top every time the route (pathname) changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);

        // also handle custom scroll containers if you ever use them
        const scroller =
            document.querySelector("[data-scroll-container]") ||
            document.scrollingElement ||
            document.documentElement;

        if (scroller) scroller.scrollTop = 0;
    }, [pathname]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}
