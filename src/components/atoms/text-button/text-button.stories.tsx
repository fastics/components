import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextButton from './text-button';
import styles from './text-button.stories.module.scss';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {
    onPress: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;
const WithContentTemplate: ComponentStory<typeof TextButton> = (args) => (
  <div>
    <span>Toto</span>
    <TextButton {...args} />
    <span>Tata</span>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  onPress: null,
};

export const WithContent = WithContentTemplate.bind({});
WithContent.args = {
  children: 'Hello',
};

export const WithContentDisabled = WithContentTemplate.bind({});
WithContentDisabled.args = {
  children: 'Hello',
  onPress: null,
};

export const WithCustomStyle = WithContentTemplate.bind({});
WithCustomStyle.args = {
  children: 'Hello',
  className: styles.wrapper,
};

export const WithCustomStyleDisabled = WithContentTemplate.bind({});
WithCustomStyleDisabled.args = {
  children: 'Hello',
  className: styles.wrapper,
  onPress: null,
};
