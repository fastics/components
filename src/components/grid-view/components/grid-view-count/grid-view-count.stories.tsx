import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Colors from '../../../colors';
import Icon from '../../../icon';
import Icons from '../../../icons';
import Padding from '../../../padding';
import GridViewCount, { Axis } from './grid-view-count';

const generateItems = (n: number) =>
  Array.from({ length: n }, (_, index) => {
    const color = Colors.primaries[Math.floor(Math.random() * Colors.primaries.length)];

    return (
      <div key={index} style={{ backgroundColor: color['400'].toRGBA() }}>
        <div>
          <Icon icon={Icons.person} />
          Item {index}
        </div>
      </div>
    );
  });

export default {
  title: 'GridView.Count',
  component: GridViewCount,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      /**
       * Large mobile
       * @see https://github.com/storybookjs/storybook/blob/main/addons/viewport/src/defaults.ts#L176
       */
      defaultViewport: 'mobile2',
    },
  },
  argTypes: {
    padding: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof GridViewCount>;

const Template: ComponentStory<typeof GridViewCount> = (args) => <GridViewCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: generateItems(4),
  crossAxisCount: 4,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  padding: Padding.all(20),
  scrollDirection: Axis.vertical,
};

export const WithMultipleElements = Template.bind({});
WithMultipleElements.args = {
  children: generateItems(32),
  crossAxisCount: 4,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  padding: Padding.all(20),
  scrollDirection: Axis.vertical,
};
