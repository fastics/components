import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icons from '../icons';
import DropdownButton from './dropdown-button';
import classes from './dropdown-button.stories.module.scss';

const generateItems = (n = 100) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push({ value: i.toString(), text: `Item ${i}` });
  }
  return result;
};

export default {
  title: 'DropdownButton',
  component: DropdownButton,
  decorators: [(story) => <div style={{ padding: 32 }}>{story()}</div>],
  args: {
    items: generateItems(),
    onChange: action('select'),
  },
  argTypes: {
    items: { control: { disable: true } },
    onChange: { control: { disable: true } },
    icon: { control: { disable: true } },
    classNames: { control: { disable: true } },
  },
} as ComponentMeta<typeof DropdownButton>;

const Template: ComponentStory<typeof DropdownButton> = (args) => <DropdownButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '12',
};

export const WithEmptyValue = Template.bind({});
WithEmptyValue.args = {
  value: '',
  allowEmpty: true,
  placeholder: 'Please select an option',
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  value: '12',
  icon: Icons.auto_graph,
};

export const WithCustomClassNames = Template.bind({});
WithCustomClassNames.args = {
  value: '12',
  classNames: {
    wrapper: classes.wrapper,
    item_list: classes.item_list,
    item_list_item: classes.item_list_item,
  },
};
