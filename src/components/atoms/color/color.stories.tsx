import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';

import Color from './color';

const color = Color.fromARGB(255, 200, 100, 123);

const ColorExample: FC<{ color: string }> = () => (
  <div style={{ width: 100, height: 100, backgroundColor: color.toRGB() }} />
);

export default {
  title: 'Atoms/Color',
  component: ColorExample,
} as ComponentMeta<typeof ColorExample>;

const Template: ComponentStory<typeof ColorExample> = (args) => <ColorExample {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: color.toRGB(),
};
