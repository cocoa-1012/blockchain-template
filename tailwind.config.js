module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1), rgba(255,255,255,1),rgba(255,241,241,1),rgba(10,241,241,1),rgba(5,241,241,1),rgba(5,255,255,1),rgba(10,255, 255,1))",
        "hero-pattern": "url('./assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
