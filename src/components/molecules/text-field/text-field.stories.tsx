import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextField from './text-field';

export default {
  title: 'Molecules/TextField',
  component: TextField,
  args: {
    obscureText: false,
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Hello Storybook',
};
