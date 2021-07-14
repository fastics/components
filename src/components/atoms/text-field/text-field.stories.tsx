import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import TextField from './text-field';
import useTextEditingController from './useTextEditingController';

export default {
  title: 'Atoms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

/**
 * Controlling [TextField] may be useful to get current input value.
 * You can get it by calling `getValue` method, or by passing `listenValue` option to `true` then calling `.value`.
 */
const TemplateControlled: ComponentStory<typeof TextField> = (args) => {
  const _controller = useTextEditingController({ listenValue: true });

  return (
    <div>
      <TextField {...args} controller={_controller} />
      <span>Value is : {_controller.value}</span>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

/**
 * Controlling [TextField] may be useful to get current input value.
 * You can get it by calling `getValue` method, or by passing `listenValue` option to `true` then calling `.value`.
 */
export const Controlled = TemplateControlled.bind({});
Controlled.args = {};
