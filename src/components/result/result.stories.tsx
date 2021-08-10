import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Colors from '../colors';
import { Icon } from '../icon';
import Icons from '../icons';
import Result, { ResultStatus } from './result';
import classes from './result.stories.module.scss';

export default {
  title: 'Result',
  component: Result,
  argTypes: {
    icon: { control: { disable: true } },
    children: { control: { disable: true } },
    iconSize: { control: { type: 'number' } },
    status: {
      control: {
        type: 'radio',
        labels: {
          [ResultStatus.SUCCESS]: 'ResultStatus.SUCCESS',
          [ResultStatus.INFO]: 'ResultStatus.INFO',
          [ResultStatus.WARNING]: 'ResultStatus.WARNING',
          [ResultStatus.ERROR]: 'ResultStatus.ERROR',
        },
      },

      options: [ResultStatus.SUCCESS, ResultStatus.INFO, ResultStatus.WARNING, ResultStatus.ERROR],
    },
  },
  decorators: [(story) => <div className={classes.wrapper}>{story()}</div>],
  subcomponents: { Icon },
} as ComponentMeta<typeof Result>;

const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const Success = Template.bind({});
Success.args = {
  title: 'Successfully Purchased !',
  subtitle: 'Order number #12345. Shipped at 2021-08-15.',
  status: ResultStatus.SUCCESS,
  iconSize: 72,
};

export const Info = Template.bind({});
Info.args = {
  title: 'Your operation has been executed',
  status: ResultStatus.INFO,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  title: 'Your operation has been executed',
  status: ResultStatus.INFO,
  iconSize: 54,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  title: 'Your operation has been executed',
  icon: <Icon icon={Icons.sentiment_satisfied_outlined} color={Colors.blue[500]} size={72} />,
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'There are some problems with your operation.',
  status: ResultStatus.WARNING,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Submission Failed',
  subtitle: 'Please check and modify the following information before resubmitting.',
  status: ResultStatus.ERROR,
};

export const ErrorWithContent = Template.bind({});
ErrorWithContent.args = {
  title: 'Submission Failed',
  subtitle: 'Please check and modify the following information before resubmitting.',
  status: ResultStatus.ERROR,
  children: (
    <div style={{ fontSize: 14 }}>
      <p style={{ fontSize: 16 }}>
        <b style={{ fontWeight: 600 }}>The content you submitted has the following error: </b>
      </p>
      <p style={{ marginBottom: '1em' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Icon icon={Icons.cancel_outlined} size={16} color={Colors.red[500]} />
          Your account has been frozen.
        </span>
      </p>
      <p>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Icon icon={Icons.cancel_outlined} size={16} color={Colors.red[500]} />
          Your account is not yet eligible to apply.
        </span>
      </p>
    </div>
  ),
};
