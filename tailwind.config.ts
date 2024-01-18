import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-light": "#fcf8f4",
      "background-purple": "#5C36AA",
      // "background-blue-tint": "#6c4ab2",
      "background-purple-tint": "#402576",
      "background-dark": "#212122",
      light: "#f3f3f3",
      dark: "#333",
      orange: "#ed6829",
      "orange-dark": "#922701",
      blue: "#FCECBA",
      "background-blue": "#286876",
      // "light-blue": "#C0D4E7",
      "light-blue": "#e2d4a7",
    },
  },
  plugins: [],
}
export default config
