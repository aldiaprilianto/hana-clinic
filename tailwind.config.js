/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#334155', // Slate 700 - Sophisticated Dark
                secondary: '#F8FAFC', // Slate 50 - Clean White
                dark: '#0F172A', // Slate 900
                accent: '#38BDF8', // Sky 400 - Futuristic Glow
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        },
    },
    plugins: [],
}
