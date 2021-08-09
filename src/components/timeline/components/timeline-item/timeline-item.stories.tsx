import { ComponentMeta, ComponentStory } from '@storybook/react';

import TimelineItem from './timeline-item';

export default {
  title: 'Timeline.Item',
  component: TimelineItem,
} as ComponentMeta<typeof TimelineItem>;

const Template: ComponentStory<typeof TimelineItem> = (args) => <TimelineItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>Hello, World !</p>,
};
