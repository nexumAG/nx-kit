module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  // https://github.com/styled-components/babel-plugin-styled-components/issues/261
  // does not even work with 1.10.2
  // plugins: [['babel-plugin-styled-components', { ssr: false, displayName: true }]],
};
