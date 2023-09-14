/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'serif': ['avenir-next-regular', 'sans-serif'],
            },
            colors: {
                blue: {
                    950: "var(--blue-950)"
                },
                white: "var(--white)",
                black: "var(--black)",
            },
            backgroundImage: {
                'page': "url(assets/images/background.jpg)"
            },
            minHeight: {
                'container': "1268px",
            },
            backgroundSize: {
                '100%': "100%"
            },
            width: {
                'wrapper-100%': "calc(100% - 30px)",
                'wrapper-100%-sm': "calc(100% - 80px)",
                'picture-before-100%': "calc(100% + 15px)",
                'picture-before-100%-sm': "calc(100% + 40px)"
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                sm: "40px",
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

