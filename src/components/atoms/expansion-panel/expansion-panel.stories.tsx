import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ExpansionPanel from './expansion-panel';
import classes from './expansion-panel.stories.module.scss';

const Header = () => <span>Hello Panel</span>;

export default {
  title: 'Atoms/ExpansionPanel',
  component: ExpansionPanel,
  argTypes: {
    headerBuilder: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof ExpansionPanel>;

const Template: ComponentStory<typeof ExpansionPanel> = (args) => (
  <ExpansionPanel {...args} headerBuilder={Header}>
    <span>Ah que coucou</span>
  </ExpansionPanel>
);

const TemplateMultiple: ComponentStory<typeof ExpansionPanel> = (args) => (
  <div>
    <ExpansionPanel {...args} headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>

    <ExpansionPanel {...args} headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>

    <ExpansionPanel {...args} headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {};

export const WithCustomClassNames = TemplateMultiple.bind({});
WithCustomClassNames.args = {
  classNames: {
    wrapper: classes.wrapper,
    header: classes.header,
    contentInner: classes.contentInner,
    contentOuter: classes.contentOuter,
    headerIconButton: classes.headerIconButton,
  },
};
