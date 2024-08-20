import type { Preview } from '@storybook/react';
import { Provider } from '../src/app/Provider';
import { suit } from '../public/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (story: any) => (
      <Provider>
        <div style={suit.style}>{story()}</div>
      </Provider>
    ),
  ],
};

export default preview;
