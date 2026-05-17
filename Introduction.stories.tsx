import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Introduction",
  parameters: {
    docs: {
      description: {
        component: "Atomic Design entry point for the Livinnza UI system.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => <div style={{ padding: 24 }}>Livinnza design system overview.</div>,
};

