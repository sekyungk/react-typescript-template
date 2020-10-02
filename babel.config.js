const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: {
        version: 3,
      },
    },
  ],
  "@babel/preset-react",
  "@babel/preset-typescript",
];
const plugins = [];

module.exports = { presets, plugins };
