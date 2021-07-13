import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styles from './button.stories.module.scss';

import Button from './button';
import { action } from '@storybook/addon-actions';
import Color from '../color';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Hello Button',
    onClick: action('clicked button'),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  primary: true,
  tint: 'light',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};

export const CustomClassButton = Template.bind({});
CustomClassButton.args = {
  className: styles.custom_button,
};

export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  color: Color.fromARGB(255, 200, 100, 100),
};
