module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1), rgba(255,255,255,1),rgba(200,255,255,1),rgba(100,255,255,1),rgba(50,255,255,1),rgba(150,255,255,1),rgba(10,255, 255,1))",
        "hero-pattern": "url('./assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
