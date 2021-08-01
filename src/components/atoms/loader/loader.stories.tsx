import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Colors from '../colors';
import Loader from './loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
  argTypes: {
    color: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  color: Colors.blueGrey[500],
};

export const WithAnotherSize = Template.bind({});
WithAnotherSize.args = {
  size: 62,
  thickness: 8,
};
