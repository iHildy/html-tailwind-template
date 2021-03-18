const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                body: "Inter",
            },
            colors: {
                primaryLight: "#4f8dff",
                primary: "#2B73FF",
                primaryDark: "#055aff",
                background: "#16151F",

                // gray: colors.trueGray,
                // coolGray: colors.coolGray,
            },
            maxWidth: {
                "70p": "70%",
                "90p": "90%",
            },
        },
    },
    variants: {
        extend: {
            outline: ["hover", "active"],
            scale: ["active"],
            opacity: ["focus"],
        },
    },
    plugins: [],
};