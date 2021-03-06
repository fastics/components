import { ComponentMeta, ComponentStory } from '@storybook/react';

import Duration from '../../../duration';
import LoaderScreen from './loader-screen';

export default {
  title: 'Loader.Screen',
  component: LoaderScreen,
  argTypes: {
    color1: { control: false },
    color2: { control: false },
    color3: { control: false },
    color4: { control: false },
  },
} as ComponentMeta<typeof LoaderScreen>;

const Template: ComponentStory<typeof LoaderScreen> = (args) => <LoaderScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  animationDuration: new Duration({ seconds: 1 }),
};
