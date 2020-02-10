module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-notes/register',
    '@storybook/addon-links',
  ],
};
