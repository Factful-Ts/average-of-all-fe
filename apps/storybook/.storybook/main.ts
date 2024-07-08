import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-themes',
    'storybook-dark-mode',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {},

  typescript: {
    check: true,
  },

  docs: {
    autodocs: true,
  },

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: 'factful-design-system',
            replacement: '../../../packages/factful-design-system/',
          },
        ],
      },
    };
  },
};

export default config;
