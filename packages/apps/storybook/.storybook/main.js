const path = require('path');

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
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    );

    // config.module.rules[0].use[0].options.presets.push(
    //   path.resolve(__dirname, '../../../../node_modules/linaria/babel.js')
    // );

    config.module.rules[0].use[0].options = {
      ...config.module.rules[0].use[0].options,
      rootMode: 'upward',
    };

    config.module.rules[0].use.unshift({
      loader: 'linaria/loader',
      options: {
        sourceMap: configType !== 'PRODUCTION',
        babelOptions: {
          rootMode: 'upward',
        },
      },
    });

    return config;
  },
};
