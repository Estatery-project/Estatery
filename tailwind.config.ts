import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            // center: true,
            // padding: '1rem',
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1120px',
            },
        },

        fontSize: {
            '5xl': [
                '64px',
                {
                    lineHeight: '110%',
                    letterSpacing: '-0.64px',
                    fontWeight: '700',
                },
            ],
            '4xl': ['40px', { fontWeight: 700 }],
            '3xl': [
                '32px',
                {
                    lineHeight: '40px',
                    letterSpacing: '-0.32px',
                    fontWeight: 700,
                },
            ],
            '2xl': ['24px', { fontWeight: 700 }],
            xl: ['20px', '32px'],
            lg: '18px',
        },

        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
        },

        fontFamily: {
            'pj-regular': 'PlusJakartaSans-Regular',
            'pj-bold': 'PTSans-Bold',
        },

        colors: {
            white: '#ffffff',
            indigo: '#7065F0',
            midnight: '#100A55',
            'blue-black': '#000929',
            purple: {
                50: '#F7F7FD',
                100: '#F0EFFB',
                200: '#E8E6F9',
                300: '#E0DEF7',
                400: '#D8D6F5',
            },

            'blue-gray': {
                50: '#F9FAFB',
                100: '#F4F4F6',
                200: '#E5E6EB',
                300: '#D3D5DA',
                400: '#9EA3AE',
                500: '#6C727F',
                600: '#4D5461',
                700: '#394150',
                800: '#212936',
                900: '#0B0A0F',
            },
        },

        extend: {
            backgroundImage: {
                'hero-pattern':
                    "url('../app/public/assets/images/heropng.png')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
