import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '../asset/style';
import { Button } from '../components/Button';

export default {
  title: 'Cheese-UI/Button',
  component: Button,
  argTypes: {}
}

const Template = (args) => <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Button {...args}>
      {args.children}
    </Button>
  </ThemeProvider>
</>;

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  type: "contained",
  color: "primary",
  children: "Button"
}

export const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  type: "contained",
  color: "secondary",
  children : "Button"
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  type: "outlined",
  color: "primary",
  children : "Button"
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args  = {
  type: "outlined",
  color : "secondary",
  children : "Button"
};

export const TextedPrimary = Template.bind({});
TextedPrimary.args  = {
  type: "texted",
  color : "primary",
  children : "Button"
};

export const TextedSecondary = Template.bind({});
TextedSecondary.args  = {
  type: "texted",
  color : "secondary",
  children : "Button"
};

