// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {
      optimize: { minify: false },
    },
  },
};