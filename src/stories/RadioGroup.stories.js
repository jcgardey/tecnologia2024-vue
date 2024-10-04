import RadioGroup from "./RadioGroup.vue";

export default {
  title: "Ejemplos/RadioGroup",
  component: RadioGroup,
};

export const TwoItems = {
  args: {
    items: [
      {
        label: "Item 1",
        value: "item_1",
      },
      {
        label: "Item 2",
        value: "item_2",
      },
    ],
    value: "item_2",
    name: "radios",
  },
};

export const Inline = {
  args: {
    items: [
      {
        label: "Item 1",
        value: "item_1",
      },
      {
        label: "Item 2",
        value: "item_2",
      },
    ],
    value: "item_2",
    name: "radios",
    inline: true,
  },
};
