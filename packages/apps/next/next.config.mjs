import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
import nextMdx from '@next/mdx';
import nextTranspileModules from 'next-transpile-modules';

// https://github.com/martpie/next-transpile-modules/issues/143#issuecomment-817467144
const withTM = nextTranspileModules([
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
  'remark-gfm'
]);

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // eslint-disable-next-line global-require
    remarkPlugins: [remarkPrism, remarkGfm],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = withTM(
  withMDX({
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })
);

export default nextConfig;
