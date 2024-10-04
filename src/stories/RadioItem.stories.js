import RadioItem from "./RadioItem.vue";

export default {
  title: "Ejemplos/RadioItem",
  component: RadioItem,
};

export const UnChecked = {
  args: {
    label: "Radio Item Label",
    value: "test",
  },
};

export const Checked = {
  args: {
    label: "Checked Item",
    value: "test",
    checked: true,
  },
};
