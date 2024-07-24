import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/nextjs';
import merge from 'webpack-merge';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import * as path from 'node:path';

const config: StorybookConfig = {
  stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  core: {
    builder: getAbsolutePath('@storybook/builder-webpack5'),
  },
  typescript: {
    check: true,
  },
  docs: {},
  webpackFinal: (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../packages/factful-design-system/src'),
        },
      },
      plugins: [new VanillaExtractPlugin()],
    });
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
