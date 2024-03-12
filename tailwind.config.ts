import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/modules/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                lightgray: '#EEF0F4',
                orange: '#F90',
                gray: '#848D9F',
                red: '#E85252',
            },
            screens: {
                sm: '768px',
                md: '1024px',
                lg: '1500px',
            },
        },
    },
    plugins: [],
}
export default config
