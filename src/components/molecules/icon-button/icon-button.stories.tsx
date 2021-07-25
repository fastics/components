import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon, Icons } from '../../atoms';
import Padding from '../padding';
import IconButton from './icon-button';

export default {
  title: 'Molecules/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Icon icon={Icons.ring_volume} />,
  onPress: action('Press icon'),
  padding: Padding.all(8),
};
