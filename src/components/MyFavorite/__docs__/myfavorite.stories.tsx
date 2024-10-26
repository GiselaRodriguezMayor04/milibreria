import type { Meta, StoryObj } from '@storybook/react';
import Example from './example'; 

const meta: Meta<typeof Example> = {
  title: 'MyFavorite',
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    iconColor: 'red',
    disabled: false,
    onClick: () => alert('Icono pulsado o clicado'),  
  },
};

export const Disabled: Story = {
  args: {
    iconColor: 'gray',
    disabled: true,
  },
};
 