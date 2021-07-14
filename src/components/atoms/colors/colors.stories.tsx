import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Color from '../color';
import Colors from './colors';
import styles from './colors.stories.module.scss';

const ColorComponent: React.FC<{ color: Color; value: string }> = ({ color, value }) => {
  const textColor = color.estimateBrightness() === 'light' ? Colors.black : Colors.white;

  return (
    <div className={styles.color_component} style={{ backgroundColor: color.toRGB() }}>
      <span style={{ color: textColor.toRGB() }}>{value}</span>
    </div>
  );
};

export default {
  title: 'Atoms/Colors',
  component: ColorComponent,
  argTypes: {
    colors: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ColorComponent>;

const Template: ComponentStory<({ colors }: { colors: Colors }) => JSX.Element> = (args) => (
  <div style={{ display: 'flex' }}>
    {Object.entries(args.colors).map(([k, v]) => (
      <ColorComponent key={k} color={v} value={k} />
    ))}
  </div>
);

export const amber = Template.bind({});
amber.args = {
  colors: Colors.amber,
};

export const amberAccent = Template.bind({});
amberAccent.args = {
  colors: Colors.amberAccent,
};

export const black = Template.bind({});
black.args = {
  colors: {
    black: Colors.black,
    black12: Colors.black12,
    black26: Colors.black26,
    black38: Colors.black38,
    black45: Colors.black45,
    black54: Colors.black54,
    black87: Colors.black87,
  },
};

export const blue = Template.bind({});
blue.args = {
  colors: Colors.blue,
};

export const blueAccent = Template.bind({});
blueAccent.args = {
  colors: Colors.blueAccent,
};

export const blueGrey = Template.bind({});
blueGrey.args = {
  colors: Colors.blueGrey,
};

export const brown = Template.bind({});
brown.args = {
  colors: Colors.brown,
};

export const cyan = Template.bind({});
cyan.args = {
  colors: Colors.cyan,
};

export const cyanAccent = Template.bind({});
cyanAccent.args = {
  colors: Colors.cyanAccent,
};

export const deepOrange = Template.bind({});
deepOrange.args = {
  colors: Colors.deepOrange,
};

export const deepOrangeAccent = Template.bind({});
deepOrangeAccent.args = {
  colors: Colors.deepOrangeAccent,
};

export const deepPurple = Template.bind({});
deepPurple.args = {
  colors: Colors.deepPurple,
};

export const deepPurpleAccent = Template.bind({});
deepPurpleAccent.args = {
  colors: Colors.deepPurpleAccent,
};

export const green = Template.bind({});
green.args = {
  colors: Colors.green,
};

export const greenAccent = Template.bind({});
greenAccent.args = {
  colors: Colors.greenAccent,
};

export const grey = Template.bind({});
grey.args = {
  colors: Colors.grey,
};

export const indigo = Template.bind({});
indigo.args = {
  colors: Colors.indigo,
};

export const indigoAccent = Template.bind({});
indigoAccent.args = {
  colors: Colors.indigoAccent,
};

export const lightBlue = Template.bind({});
lightBlue.args = {
  colors: Colors.lightBlue,
};

export const lightBlueAccent = Template.bind({});
lightBlueAccent.args = {
  colors: Colors.lightBlueAccent,
};

export const lightGreen = Template.bind({});
lightGreen.args = {
  colors: Colors.lightGreen,
};

export const lightGreenAccent = Template.bind({});
lightGreenAccent.args = {
  colors: Colors.lightGreenAccent,
};

export const lime = Template.bind({});
lime.args = {
  colors: Colors.lime,
};

export const limeAccent = Template.bind({});
limeAccent.args = {
  colors: Colors.limeAccent,
};

export const orange = Template.bind({});
orange.args = {
  colors: Colors.orange,
};

export const orangeAccent = Template.bind({});
orangeAccent.args = {
  colors: Colors.orangeAccent,
};

export const pink = Template.bind({});
pink.args = {
  colors: Colors.pink,
};

export const pinkAccent = Template.bind({});
pinkAccent.args = {
  colors: Colors.pinkAccent,
};

export const purple = Template.bind({});
purple.args = {
  colors: Colors.purple,
};

export const purpleAccent = Template.bind({});
purpleAccent.args = {
  colors: Colors.purpleAccent,
};

export const red = Template.bind({});
red.args = {
  colors: Colors.red,
};

export const redAccent = Template.bind({});
redAccent.args = {
  colors: Colors.redAccent,
};

export const teal = Template.bind({});
teal.args = {
  colors: Colors.teal,
};

export const tealAccent = Template.bind({});
tealAccent.args = {
  colors: Colors.tealAccent,
};

export const white = Template.bind({});
white.parameters = {
  backgrounds: { default: 'dark' },
};
white.args = {
  colors: {
    white: Colors.white,
    white10: Colors.white10,
    white12: Colors.white12,
    white24: Colors.white24,
    white30: Colors.white30,
    white38: Colors.white38,
    white54: Colors.white54,
    white60: Colors.white60,
    white70: Colors.white70,
  },
};

export const yellow = Template.bind({});
yellow.args = {
  colors: Colors.yellow,
};

export const yellowAccent = Template.bind({});
yellowAccent.args = {
  colors: Colors.yellowAccent,
};
