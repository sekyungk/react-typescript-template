const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: {
        version: 3,
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];
const plugins = ['babel-plugin-styled-components'];

module.exports = { presets, plugins };
