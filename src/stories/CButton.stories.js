import { Button } from '../components/Button';

export default {
  title: 'Cheese-UI/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  type: 'contained',
  color: 'primary',
  children: 'Button',
};

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  type: 'contained',
  color: 'secondary',
  children: 'Button',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  type: 'outlined',
  color: 'primary',
  children: 'Button',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  type: 'outlined',
  color: 'secondary',
  children: 'Button',
};

export const TextedPrimary = Template.bind({});
TextedPrimary.args = {
  type: 'texted',
  color: 'primary',
  children: 'Button',
};

export const TextedSecondary = Template.bind({});
TextedSecondary.args = {
  type: 'texted',
  color: 'secondary',
  children: 'Button',
};
