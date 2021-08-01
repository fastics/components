import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Padding } from '../../../../molecules';
import Colors from '../../../colors';
import Icon from '../../../icon';
import Icons from '../../../icons';
import GridViewCount, { Axis } from './grid-view-count';

const items = Array.from({ length: 32 }, (_, index) => {
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
  title: 'Atoms/GridView.Count',
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
} as ComponentMeta<typeof GridViewCount>;

const Template: ComponentStory<typeof GridViewCount> = (args) => (
  <GridViewCount {...args}>{items}</GridViewCount>
);

export const Default = Template.bind({});
Default.args = {
  crossAxisCount: 4,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  padding: Padding.all(20),
  scrollDirection: Axis.vertical,
};
