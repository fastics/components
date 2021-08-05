import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Colors from '../../../colors';
import SkeletonAvatar from './avatar';

export default {
  title: 'Skeleton.Avatar',
  component: SkeletonAvatar,
  argTypes: {
    size: {
      options: ['small', 'default', 'large', undefined],
      control: { type: 'radio' },
    },
    color: { control: { disable: true } },
  },
} as ComponentMeta<typeof SkeletonAvatar>;

const Template: ComponentStory<typeof SkeletonAvatar> = (args) => <SkeletonAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  shape: 'circle',
  active: false,
  size: 'default',
};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  shape: 'circle',
  active: false,
  size: 'default',
  color: Colors.red[200],
};

export const WithCustomSizes = Template.bind({});
WithCustomSizes.args = {
  shape: 'circle',
  active: false,
  size: 'default',
  sizes: {
    small: 124,
    default: 132,
    large: 140,
  },
};
