module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        login: "0 0px 10px 0px rgba(0, 0, 0, 0.3)",
        button: "0px 5px 5px 0px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: {
          main: "#FF2352",
          surface: "#ffd3dc",
          border: "#FFB6C5",
          hover: "#d51d44",
          pressed: "#801129",
          focus: "#F3C4CE",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#EDEDED",
          400: "#E0E0E0",
          500: "#C2C2C2",
          600: "#9E9E9E",
          700: "#757575",
          800: "#616161",
          900: "#404040",
          1000: "#0A0A0A",
        },
        success: {
          main: "#65C466",
          surface: "#E0F3E0",
          border: "#CCEBCC",
          hover: "#54A355",
          pressed: "#326233",
        },
        error: {
          main: "#ED4330",
          surface: "#FBD9D6",
          border: "#F9C0BA",
          hover: "#C53828",
          pressed: "#76118",
        },
        info: {
          main: "#3267E3",
          surface: "#F0F3FF",
          border: "#B1C5F6",
          hover: "#114CD6",
          pressed: "#11317D",
        },
        danger: {
          main: "#ED8B30",
          surface: "#FBE8D6",
          border: "#F9D8BA",
          hover: "#C57428",
          pressed: "#764518",
        },
      },
    },
  },
  plugins: [],
};
