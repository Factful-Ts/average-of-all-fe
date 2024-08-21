import { SearchBar } from '@/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof SearchBar>;
export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
