import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      page: "1440px",
    },
    fontSize: {
      40: "clamp(28px,4vw,40px)",
    },
    screens: {
      "2xl": { max: "1440px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      pview: { max: "980px", min: "800px" },
      clg: { max: "800px" },
      md: { max: "700px" },
      cmd: { max: "631px" },
      mcmd: { min: "630px" },
      cgsm: { max: "560px" },
      gsm: { max: "500px" },
      csm: { max: "425px" },
      sm: { max: "320px" },
    },
    backgroundImage: {
      "auth-bg": "url('/authBg.svg')",
    },
  },
  plugins: [],
}
export default config
