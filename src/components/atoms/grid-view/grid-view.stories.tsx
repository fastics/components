import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Color from '../color';
import Colors from '../colors';
import Icon from '../icon';
import Icons from '../icons';
import { Axis } from './components/grid-view-count/grid-view-count';
import GridView from './grid-view';

const Component: React.FC<{ index: number; color: Color }> = ({ index, color, ...props }) => (
  <div style={{ backgroundColor: color.toRGBA() }} {...props}>
    <h2>Item {index}</h2>

    <p>This is a sample !</p>

    <div>
      <Icon icon={Icons.person} />
    </div>
  </div>
);

const items = Array.from({ length: 32 }, (_, index) => {
  const color = Colors.primaries[Math.floor(Math.random() * Colors.primaries.length)];

  return <Component key={index} index={index} color={color['500']} />;
});

export default {
  title: 'Atoms/GridView',
  component: GridView.Count,
} as ComponentMeta<typeof GridView.Count>;

const Template: ComponentStory<typeof GridView.Count> = (args) => (
  <GridView.Count {...args}>{items}</GridView.Count>
);

export const Count = Template.bind({});
Count.args = {
  crossAxisCount: 4,
  scrollDirection: Axis.horizontal,
};
