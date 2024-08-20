import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/components/Text';

const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    color: {
      table: {
        defaultValue: {
          summary: 'black or white',
        },
      },
    },
  },
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'children',
  },
};
