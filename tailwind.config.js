/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        "header-width": "calc(100% - 16rem)",
      },
    },
    colors: {
      "kg-purple": "#635FC7",
      "kg-purple-hover": "#A8A4FF",
      "kg-red": "#EA5555",
      "kg-red-hover": "#FF9898",
      "kg-black": "#000112",
      "kg-grey-very-dark": "#20212C",
      "kg-grey-dark": "#2B2C37",
      "kg-grey-medium": "#828FA3",
      "kg-grey-light": "#F4F7FD",
      "kg-lines-dark": "#3E3F4E",
      "kg-lines-light": "#E4EBFA",
      "kg-white": "#FFFFFF",
    },
    fontSize: {
      "kg-h-xl": [
        "1.5rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "700",
        },
      ],
      "kg-h-l": [
        "1.125rem",
        {
          lineHeight: "1.438rem",
          fontWeight: "700",
        },
      ],
      "kg-h-m": [
        "0.938rem",
        {
          lineHeight: "1.188rem",
          fontWeight: "700",
        },
      ],
      "kg-h-s": [
        "0.75rem",
        {
          lineHeight: "0.938rem",
          fontWeight: "700",
        },
      ],
      "kg-b-l": [
        "0.813rem",
        {
          lineHeight: "1.438rem",
          fontWeight: "400",
        },
      ],
      "kg-b-m": [
        "0.75rem",
        {
          lineHeight: "0.938rem",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
