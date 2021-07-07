import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styles from './button.stories.module.scss';

import Button from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const DarkTemplate: ComponentStory<typeof Button> = (args) => (
  <div className={styles.darkWrapper}>
    <Button {...args} />
  </div>
);

export const Default = DarkTemplate.bind({});
Default.args = {
  children: 'Hello Button',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello Button',
  primary: true,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'Hello Button',
  primary: true,
  tint: 'light',
};

export const Secondary = DarkTemplate.bind({});
Secondary.args = {
  children: 'Hello Button',
  primary: false,
};
