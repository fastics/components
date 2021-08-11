import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { animated, config, useSpring } from 'react-spring';

import Duration from '../duration';
import LinearProgressIndicator from './linear-progress-indicator';

export default {
  title: 'LinearProgressIndicator',
  component: LinearProgressIndicator,
  argTypes: {
    backgroundColor: { control: { disable: true } },
    color: { control: { disable: true } },
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
    config: { ...config.molasses, duration: Duration.seconds(5).inMilliseconds },
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
  value: { control: { disable: true } },
};
