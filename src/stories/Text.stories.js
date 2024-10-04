import Text from './Text.vue';

export default {
  title: 'Ejemplos/Text',
  component: Text,
  argTypes: {
    variant: {
      options: ['title', 'subtitle', 'body'],
      control: 'radio',
    },
  },
};

export const Title = {
  args: {
    variant: 'title',
    content: 'Titulo',
    color: '',
  },
};

export const Subtitle = {
  args: {
    variant: 'subtitle',
    content: 'Subtitle text',
  },
};

export const Body = {
  args: {
    variant: 'body',
    content: 'Body text',
  },
};
