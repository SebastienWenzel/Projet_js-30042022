// UTILISATION DU PRESET LORS DE L'exécution
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        debug: true,
        targets: "> 30%, not dead",
      },
    ],
  ],
};
