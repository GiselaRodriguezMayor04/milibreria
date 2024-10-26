import type { Meta, StoryObj } from "@storybook/react";
import GiselaRM from "../GiselaRM"; 

const meta: Meta<typeof GiselaRM> = {
  title: "GiselaRM", 
  component: GiselaRM, 
};
export default meta;

type Story = StoryObj<typeof GiselaRM>;

export const Primary: Story = {
  args: {
    title: "Primary",
    description: "Componente primary",
    avatar: "https://example.com/avatar-primary.jpg",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    description: "Componente secondary",
    avatar: "https://example.com/avatar-secondary.jpg", 
  },
};
