import { ComponentMeta, ComponentStory } from '@storybook/react';

import Colors from '../../../colors';
import SkeletonContext from '../../context/skeleton-context';
import SkeletonParagraph from './paragraph';

export default {
  title: 'Skeleton.Paragraph',
  component: SkeletonParagraph,
} as ComponentMeta<typeof SkeletonParagraph>;

const Template: ComponentStory<typeof SkeletonParagraph> = (args) => (
  <SkeletonParagraph {...args} />
);

const ActiveTemplate: ComponentStory<typeof SkeletonParagraph> = (args) => (
  <SkeletonContext.Provider value={{ active: true }}>
    <SkeletonParagraph {...args} />
  </SkeletonContext.Provider>
);

const CustomColorTemplate: ComponentStory<typeof SkeletonParagraph> = (args) => (
  <SkeletonContext.Provider value={{ active: true, color: Colors.red[200] }}>
    <SkeletonParagraph {...args} />
  </SkeletonContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  rows: 1,
};

export const Active = ActiveTemplate.bind({});
Active.args = {
  rows: 1,
};

export const WithAnotherColor = CustomColorTemplate.bind({});
WithAnotherColor.args = {
  rows: 1,
};
