// https://github.com/martpie/next-transpile-modules/issues/143#issuecomment-817467144
const withTM = require('next-transpile-modules')([
  '@nx-kit/accordion',
  '@nx-kit/breakpoint',
  '@nx-kit/button',
  '@nx-kit/checkbox',
  '@nx-kit/divider',
  '@nx-kit/flex',
  '@nx-kit/form',
  '@nx-kit/heading',
  '@nx-kit/layout',
  '@nx-kit/link',
  '@nx-kit/meter',
  '@nx-kit/overlay',
  '@nx-kit/select',
  '@nx-kit/slot',
  '@nx-kit/ssr',
  '@nx-kit/styling',
  '@nx-kit/table',
  '@nx-kit/tabs',
  '@nx-kit/text',
  '@nx-kit/textfield',
  '@nx-kit/theme-default',
  '@nx-kit/types',
  '@nx-kit/utils',
  '@nx-kit/view',
]);

module.exports = withTM({
  reactStrictMode: true,
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withTM(
  withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })
);
