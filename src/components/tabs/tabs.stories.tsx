import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Color from '../color';
import Colors from '../colors';
import Icons from '../icons';
import Tabs from './tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    children: { control: { disable: true } },
    activeColor: { control: { disable: true } },
    inactiveColor: { control: { disable: true } },
  },
  subcomponents: { 'Tabs.Item': Tabs.Item },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  space: 32,
  children: [
    <Tabs.Item key="1" name="Tab 1">
      Content of Tab 1
    </Tabs.Item>,
    <Tabs.Item key="2" name="Tab 2">
      Content of Tab 2
    </Tabs.Item>,
    <Tabs.Item key="3" name="Tab 3 with longer title">
      Content of Tab 3
    </Tabs.Item>,
    <Tabs.Item key="4" name="Tab 4">
      Content of Tab 4
    </Tabs.Item>,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  space: 32,
  children: [
    <Tabs.Item key="apple" name="Apple" icon={Icons.apple_outlined}>
      Apple content
    </Tabs.Item>,
    <Tabs.Item key="android" name="Android" icon={Icons.android_outlined}>
      Android content
    </Tabs.Item>,
  ],
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
  space: 32,
  activeColor: Colors.green[400],
  inactiveColor: Colors.grey[900],
  children: [
    <Tabs.Item
      key="apple"
      name="Apple"
      icon={Icons.apple_outlined}
      activeColor={new Color(0xff555555)}
      inactiveColor={new Color(0xff555555).withOpacity(0.5)}
    >
      Apple content
    </Tabs.Item>,
    <Tabs.Item
      key="android"
      name="Android"
      icon={Icons.android_outlined}
      activeColor={new Color(0xff78c257)}
      inactiveColor={new Color(0xff78c257).withOpacity(0.5)}
    >
      Android content
    </Tabs.Item>,
  ],
};

export const WithSingleCustomColor = Template.bind({});
WithSingleCustomColor.args = {
  space: 32,
  activeColor: Colors.blue[500],
  children: [
    <Tabs.Item
      key="apple"
      name="Apple"
      icon={Icons.apple_outlined}
      inactiveColor={new Color(0xff555555).withOpacity(0.5)}
    >
      Apple content
    </Tabs.Item>,
    <Tabs.Item
      key="android"
      name="Android"
      icon={Icons.android_outlined}
      inactiveColor={new Color(0xff78c257).withOpacity(0.5)}
    >
      Android content
    </Tabs.Item>,
  ],
};
