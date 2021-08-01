import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { animated, config, useSpring } from 'react-spring';

import LinearProgressIndicator from './linear-progress-indicator';

export default {
  title: 'Atoms/LinearProgressIndicator',
  component: LinearProgressIndicator,
  argTypes: {
    backgroundColor: { table: { disable: true } },
    color: { table: { disable: true } },
  },
} as ComponentMeta<typeof LinearProgressIndicator>;

const AnimatedLinearProgressIndicator = animated(LinearProgressIndicator);

/**
 * This is a simple animated component.
 * It uses `react-spring` to handle animation
 */
const AnimatedComponent = (props: ComponentProps<typeof LinearProgressIndicator>) => {
  const { value } = useSpring({
    from: { value: 0 },
    to: { value: 100 },
    loop: true,
    config: { ...config.molasses, duration: 5000 },
  });

  return <AnimatedLinearProgressIndicator {...props} value={value.to((x) => x)} />;
};

const Template: ComponentStory<typeof LinearProgressIndicator> = (args) => (
  <LinearProgressIndicator {...args} />
);

const AnimatedTemplate: ComponentStory<typeof LinearProgressIndicator> = (args) => (
  <AnimatedComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 40,
  height: 4,
};

export const Animated = AnimatedTemplate.bind({});
Animated.args = {
  height: 4,
};
Animated.argTypes = {
  value: { table: { disable: true } },
};
