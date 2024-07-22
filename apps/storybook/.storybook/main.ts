import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

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
  typescript: {
    check: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      define: { 'process.env': {} },
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: 'factful-design-system',
            replacement: '../../../packages/factful-design-system/',
          },
        ],
        fallback: {
          tty: false,
        },
      },
    };
  },
};

export default config;
