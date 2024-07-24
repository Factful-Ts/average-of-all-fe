import type { StorybookConfig } from '@storybook/nextjs';
import merge from 'webpack-merge';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import * as path from 'node:path';

const config: StorybookConfig = {
  stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@storybook/addon-styling-webpack',
    // '@storybook/addon-themes',
    // 'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: true,
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../packages/factful-design-system/src'),
        },
        fallback: {
          fs: false,
          net: false,
          tls: false,
          tty: false,
        },
      },
      plugins: [new VanillaExtractPlugin()],
    });
  },
};

export default config;
