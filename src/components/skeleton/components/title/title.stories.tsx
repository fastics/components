import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import SkeletonTitle from './title';

export default {
  title: 'Skeleton.Title',
  component: SkeletonTitle,
} as ComponentMeta<typeof SkeletonTitle>;

const Template: ComponentStory<typeof SkeletonTitle> = (args) => <SkeletonTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};
