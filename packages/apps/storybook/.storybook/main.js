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
};
