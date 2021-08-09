import { ComponentMeta, ComponentStory } from '@storybook/react';

import Colors from '../colors';
import Timeline from './timeline';

export default {
  title: 'Timeline',
  component: Timeline,
  subcomponents: { 'Timeline.Item': Timeline.Item },
  argTypes: {
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: 'left',
  children: (
    <>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.yellow[600]}>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.purple[300]}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
      <Timeline.Item color={Colors.black54}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
    </>
  ),
};
