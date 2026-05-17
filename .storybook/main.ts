import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)", "../Introduction.stories.@(ts|tsx|js|jsx)"],
  addons: [],
};

export default config;

