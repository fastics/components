import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Colors from '../../../colors';
import SkeletonContext from '../../context/skeleton-context';
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
const ActiveTemplate: ComponentStory<typeof SkeletonAvatar> = (args) => (
  <SkeletonContext.Provider value={{ active: true }}>
    <SkeletonAvatar {...args} />
  </SkeletonContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  shape: 'circle',
  size: 'default',
};

export const Active = ActiveTemplate.bind({});
Active.args = {
  shape: 'circle',
  size: 'default',
};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  shape: 'circle',
  size: 'default',
  color: Colors.red[200],
};

export const WithCustomSizes = Template.bind({});
WithCustomSizes.args = {
  shape: 'circle',
  size: 'default',
  sizes: {
    small: 124,
    default: 132,
    large: 140,
  },
};
