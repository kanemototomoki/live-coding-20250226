import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
  play: async ({ step, canvasElement }) => {
    const canvas = within(canvasElement);

    await step("クリック可能なこと", async () => {
      await expect(await canvas.findByRole("button")).toBeEnabled();
    });
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
