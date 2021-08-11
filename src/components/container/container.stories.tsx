import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Alignment from '../alignment';
import Colors from '../colors';
import Margin from '../margin';
import Padding from '../padding';
import Container from './container';

export default {
  title: 'Container',
  component: Container,
  argTypes: {
    color: { control: { disable: true } },
    margin: { control: { disable: true } },
    padding: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: Colors.blueGrey[200],
  children: <span>Hello, World !</span>,
};

export const AsButton = Template.bind({});
AsButton.args = {
  color: Colors.blueGrey[200],
  padding: Padding.symmetric({ horizontal: 24, vertical: 12 }),
  children: <span>Hello, World !</span>,
  as: 'button',
};

export const WithFixedSize = Template.bind({});
WithFixedSize.args = {
  height: 200,
  width: 200,
  color: Colors.blueGrey[200],
  margin: Margin.all(24),
  padding: Padding.all(12),
  children: <span>Hello, World !</span>,
};

export const WithAlignment = Template.bind({});
WithAlignment.args = {
  height: 200,
  width: 200,
  color: Colors.blueGrey[200],
  margin: Margin.all(24),
  padding: Padding.all(12),
  children: <span>Hello, World !</span>,
  alignment: Alignment.topRight,
};
