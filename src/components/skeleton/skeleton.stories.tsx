import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Colors from '../colors';
import Skeleton from './skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    children: { control: { disable: true } },
    color: { control: { disable: true } },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCustomProps = Template.bind({});
WithCustomProps.args = {
  children: undefined,
  active: true,
  avatar: true,
  color: Colors.red[200],
  paragraph: {
    rows: 3,
  },
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  children: (
    <>
      <Skeleton.Avatar />
      <Skeleton.Title />
      <Skeleton.Paragraph rows={1} />
    </>
  ),
  active: true,
};
