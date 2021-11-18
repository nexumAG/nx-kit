// add IE11 support: https://github.com/storybookjs/presets/tree/master/packages/preset-ie11

module.exports = {
  stories: [
    './../../../../packages/**/*.stories.mdx',
    './../../../../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    // problem with babel?
    // '@storybook/preset-typescript',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
