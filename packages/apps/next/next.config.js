// https://github.com/martpie/next-transpile-modules/issues/143#issuecomment-817467144
const withTM = require('next-transpile-modules')([
  '@nx-kit/styling',
  '@nx-kit/flex',
  '@nx-kit/heading',
  '@nx-kit/slot',
]);

module.exports = withTM({
  reactStrictMode: true,
});
