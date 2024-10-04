import Input from './Input.vue';

export default {
  title: 'Ejemplos/TextField',
  component: Input,
  argTypes: {
    variant: {
      options: ['solo', 'filled', 'outlined', 'plain', 'underlined'],
      control: 'radio',
    },
  },
};

export const Primary = {
  args: {
    label: 'Input Test',
    placeholder: 'ingrese un valor',
    variant: 'outlined',
  },
};
