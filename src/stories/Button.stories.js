import Button from './Button.vue';

export default {
  title: 'Ejemplos/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'outlined'],
      control: 'radio',
    },
  },
};

export const Text = {
  args: {
    label: 'Button',
    variant: 'text',
  },
};

export const Outlined = {
  args: {
    label: 'Button Test',
    variant: 'outlined',
  },
};
