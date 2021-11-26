import { ComponentStory, ComponentMeta } from "@storybook/react";

import Display from "./";

export default {
  title: "Display",
  component: Display,
} as ComponentMeta<typeof Display>;

const Template: ComponentStory<typeof Display> = (args) => (
  <Display {...args} />
);

export const DisplayA = Template.bind({});
DisplayA.args = {
  value: "0",
};
