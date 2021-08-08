module.exports = {
    purge: ['**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class' // TODO
    theme: {
        fontFamily: {
            sans: ['Rubik', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'],
        },
        extend: {
            animation: {
                'shrink-height': 'collapse-height 5s linear',
            },
            keyframes: {
                'collapse-height': {
                    from: { height: '100%' },
                    to: { height: '0%' },
                },
            },
        },
    },
    variants: {
        extend: {
            borderRadius: ['first', 'last'],
            borderWidth: ['last'],
            width: ['hover'],
            backgroundColor: ['active'],
            textColor: ['active'],
        },
    },
    plugins: [],
};
