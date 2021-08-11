import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Alignment from '../alignment';
import Colors from '../colors';
import Container from '../container';
import Align from './align';

export default {
  title: 'Align',
  component: Align,
  argTypes: {
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof Align>;

const Template: ComponentStory<typeof Align> = (args) => (
  <Container color={Colors.blueGrey[100]} width={100} height={100}>
    <Align {...args} />
  </Container>
);

export const TopLeft = Template.bind({});
TopLeft.args = {
  alignment: Alignment.topLeft,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  alignment: Alignment.topCenter,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const TopRight = Template.bind({});
TopRight.args = {
  alignment: Alignment.topRight,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const CenterLeft = Template.bind({});
CenterLeft.args = {
  alignment: Alignment.centerLeft,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const Center = Template.bind({});
Center.args = {
  alignment: Alignment.center,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const CenterRight = Template.bind({});
CenterRight.args = {
  alignment: Alignment.centerRight,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  alignment: Alignment.bottomLeft,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const BottomCenter = Template.bind({});
BottomCenter.args = {
  alignment: Alignment.bottomCenter,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  alignment: Alignment.bottomRight,
  children: (
    <Container color={Colors.cyan[100]}>
      <span>X</span>
    </Container>
  ),
};
