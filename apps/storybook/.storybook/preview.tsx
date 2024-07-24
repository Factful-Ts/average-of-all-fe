import { Preview } from '@storybook/react';
import { Provider } from '../../../packages/factful-design-system/src/core';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [(story: any) => <Provider>{story()}</Provider>],
  tags: ['autodocs']
};

export default preview;
