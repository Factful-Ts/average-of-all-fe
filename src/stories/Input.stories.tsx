import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, Input } from '@/components';
import { IconSearch } from '#/icons';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const LeftSection: Story = {
  args: {
    leftSection: <IconSearch />,
  },
};

export const RightSection: Story = {
  args: {
    rightSection: <Button label="search" />,
    hasRightSectionPadding: false,
  },
};

export const BothSection: Story = {
  args: {
    leftSection: <IconSearch />,
    rightSection: <Button label="search" />,
    hasRightSectionPadding: false,
  },
};
