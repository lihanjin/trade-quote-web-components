/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{html,js,ts,svelte}'],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: ['selector', '[data-mode="dark"]'],
}
