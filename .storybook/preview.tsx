import type { Preview } from '@storybook/react';
import { Provider } from '../src/app/Provider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [(story: any) => <Provider>{story()}</Provider>],
};

export default preview;
