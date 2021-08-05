import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Colors from '../colors';
import Icon from '../icon';
import Icons from '../icons';
import Toggle from './toggle';

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    checkedColor: { control: { disable: true } },
    unCheckedColor: { control: { disable: true } },
    onChange: { control: { disable: true } },
    checkedLabel: { control: { type: 'text' } },
    unCheckedLabel: { control: { type: 'text' } },
    size: { control: { options: ['small', undefined] } },
  },
  parameters: {
    // Below is a hack to override default call to `action` on the `onChange` handler
    actions: { argTypesRegex: '^toto.*' },
    docs: {
      description: {
        story: "If you don't want to control the Toggle. Usually not what you want",
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  checked: undefined,
  checkedColor: undefined,
  loading: false,
  size: undefined,
  disabled: false,
};
Uncontrolled.parameters = {
  docs: {
    description: {
      story: "If you don't want to control the Toggle. Usually not what you want",
    },
  },
};

export const Controlled = Template.bind({});
Controlled.args = {
  checked: true,
  onChange: action('change toggle'),
};
Controlled.parameters = {
  docs: {
    description: {
      story: 'If you want to control the Toggle. Usually what you want',
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  checked: undefined,
  checkedColor: undefined,
  size: 'small',
};
Small.argTypes = {
  checked: { control: { disable: true } },
};

export const WithCheckedLabelString = Template.bind({});
WithCheckedLabelString.args = {
  checkedLabel: '1',
  unCheckedLabel: '0',
};
WithCheckedLabelString.parameters = {
  docs: {
    description: {
      story: 'You can pass a **checkedChildren** and a **unCheckedChildren** to display them',
    },
  },
};

export const WithCheckedLabelIcon = Template.bind({});
WithCheckedLabelIcon.args = {
  checkedLabel: <Icon icon={Icons.check} size={16} color={Colors.white} />,
  unCheckedLabel: <Icon icon={Icons.close} size={16} color={Colors.white} />,
};
WithCheckedLabelIcon.parameters = {
  docs: {
    description: {
      story: 'You can pass a **checkedChildren** and a **unCheckedChildren** to display them',
    },
  },
};
