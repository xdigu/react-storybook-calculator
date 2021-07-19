import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Number = Template.bind({});
Number.args = {
  label: "9",
  buttonType: "NUMBER",
};

export const Operator = Template.bind({});
Operator.args = {
  label: "+",
  buttonType: "OPERATOR",
};

export const LargeNumber = Template.bind({});
LargeNumber.args = {
  label: "0",
  buttonType: "LARGE_NUMBER",
};

export const Light = Template.bind({});
Light.args = {
  label: "%",
  buttonType: "LIGHT",
};
