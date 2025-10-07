/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                background: '#0e0e12',
                neonPink: '#FF61F6',
                neonGreen: '#00FFBF',
                neonBlue:  '#5EDFFF',
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
