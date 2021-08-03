import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { EXCLUDED_CONTROLS } from '../../../.storybook/constants';
import Colors from '../colors';
import Icons from '../icons';
import Icon from './icon';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(Icons),
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: {
      exclude: [...EXCLUDED_CONTROLS, 'color'],
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ icon, ...args }) => {
  const originalIcon = Icons[icon as keyof Icons];

  return <Icon icon={originalIcon} {...args} />;
};

const WithCustomColorTemplate: ComponentStory<typeof Icon> = ({ icon, ...args }) => {
  const originalIcon = Icons[icon as keyof Icons];

  return <Icon color={Colors.red[500]} icon={originalIcon} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  icon: Icons.access_time.name,
  size: 140,
};

export const WithCustomColor = WithCustomColorTemplate.bind({});
WithCustomColor.args = {
  disabled: false,
  icon: Icons.access_time.name,
  size: 140,
};
