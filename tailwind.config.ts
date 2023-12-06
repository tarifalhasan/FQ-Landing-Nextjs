import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-bg-1":
          "linear-gradient(258deg, rgba(79, 224, 182, 0.00) 14.63%, rgba(79, 224, 182, 0.08) 56.32%, rgba(79, 224, 182, 0.06) 65.36%, rgba(217, 217, 217, 0.00) 109.44%)",
        hero: "url('/hero.png')",
        "start-investing": "url('/start-inverstion.png')",
        contact: "url('/contact.png')",
        blog: "url('/blog.png')",
      },
      colors: {
        skin: {
          primary: "#02060C",
          secondary: "#4FE0B6",
          "light-subtitle:": "#B6B6B6",
        },
      },
      fontSize: {
        "t-96": "6rem",
        "t-32": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
