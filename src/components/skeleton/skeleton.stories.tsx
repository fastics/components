import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Skeleton from './skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {};
