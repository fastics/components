import { ComponentMeta, ComponentStory } from '@storybook/react';

import Colors from '../colors';
import Stepper from './stepper';
import classes from './stepper.stories.module.scss';

export default {
  title: 'Stepper',
  component: Stepper,
  decorators: [(story) => <div className={classes.wrapper}>{story()}</div>],
  argTypes: {
    primaryColor: { control: { disable: true } },
    secondaryColor: { control: { disable: true } },
    disabledColor: { control: { disable: true } },
    titleColor: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  subcomponents: { 'Stepper.Item': Stepper.Item },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Stepper.Item key="finished" title="Finished" description="This is a description" />,
    <Stepper.Item
      key="in-progress"
      title="In Progress"
      description="This is a description"
      subTitle="Left 00:00:08"
    />,
    <Stepper.Item key="waiting" title="Waiting" description="This is a description" />,
  ],
  current: 1,
};

export const WithCustomColors = Template.bind({});
WithCustomColors.args = {
  primaryColor: Colors.red[300],
  secondaryColor: Colors.red[200],
  disabledColor: Colors.red[100],
  titleColor: Colors.green[200],
  children: [
    <Stepper.Item key="finished" title="Finished" description="This is a description" />,
    <Stepper.Item
      key="in-progress"
      title="In Progress"
      description="This is a description"
      subTitle="Left 00:00:08"
    />,
    <Stepper.Item key="waiting" title="Waiting" description="This is a description" />,
  ],
  current: 1,
};
