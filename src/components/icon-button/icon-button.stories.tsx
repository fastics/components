import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from '../icon';
import Icons from '../icons';
import Padding from '../padding';
import IconButton from './icon-button';

export default {
  title: 'IconButton',
  component: IconButton,
  subcomponents: { Icon },
  argTypes: {
    icon: { control: { disable: true } },
    onPress: { control: { disable: true } },
    padding: { control: { disable: true } },
    className: { control: { disable: true } },
  },
  parameters: {
    // Below is a hack to override default call to `action` on the `onChange` handler
    actions: { argTypesRegex: '^toto.*' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Icon icon={Icons.ring_volume} />,
  onPress: action('Press icon'),
  padding: Padding.all(8),
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <Icon icon={Icons.ring_volume} />,
  onPress: undefined,
  padding: Padding.all(8),
};
