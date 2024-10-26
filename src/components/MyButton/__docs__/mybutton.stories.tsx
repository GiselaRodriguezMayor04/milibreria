import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example.tsx"; 

const meta: Meta<typeof Example> = {
  title: "MyButton",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Botón Primario",
    txtcolor: 'white',
    bgcolor: 'purple',
    bordercolor: 'purple',
    bordersize: '2px',
    hoverTxtColor: 'pink',
    hoverBgColor: 'magenta',
    disabled: false,
    size: "small",
    onClick: () => alert("Botón Primario"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Botón Secundario",
    txtcolor: 'black',
    bgcolor: 'pink',
    bordercolor: 'pink',
    bordersize: '1px',
    hoverTxtColor: 'white',
    hoverBgColor: 'purple',
    disabled: false,
    size: "small",
    onClick: () => alert("Botón Secundario"),
  },
};
