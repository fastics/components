import { ComponentMeta, ComponentStory } from '@storybook/react';

import Colors from '../../../colors';
import SkeletonParagraph from './paragraph';

export default {
  title: 'Skeleton.Paragraph',
  component: SkeletonParagraph,
} as ComponentMeta<typeof SkeletonParagraph>;

const Template: ComponentStory<typeof SkeletonParagraph> = (args) => (
  <SkeletonParagraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rows: 1,
  active: false,
};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  rows: 1,
  active: true,
  color: Colors.red[200],
};
