import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './input';
import useTextEditingController from './useTextEditingController';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    controller: { control: { disable: true } },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

/**
 * Controlling [Input] may be useful to get current input value.
 * You can get it by calling `getValue` method, or by passing `listenValue` option to `true` then calling `.value`.
 */
const TemplateControlled: ComponentStory<typeof Input> = (args) => {
  const _controller = useTextEditingController({ listenValue: true });

  return (
    <div>
      <Input {...args} controller={_controller} />
      <span>Value is : {_controller.value}</span>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Controlling [Input] may be useful to get current input value.
 * You can get it by calling `getValue` method, or by passing `listenValue` option to `true` then calling `.value`.
 */
export const Controlled = TemplateControlled.bind({});
Controlled.args = {};
