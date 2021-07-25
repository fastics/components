import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ExpansionPanel from './expansion-panel';

const Header = () => <span>Hello Panel</span>;

export default {
  title: 'Atoms/ExpansionPanel',
  component: ExpansionPanel,
} as ComponentMeta<typeof ExpansionPanel>;

const Template: ComponentStory<typeof ExpansionPanel> = (args) => (
  <ExpansionPanel headerBuilder={Header}>
    <span>Ah que coucou</span>
  </ExpansionPanel>
);

const TemplateMultiple: ComponentStory<typeof ExpansionPanel> = (args) => (
  <div>
    <ExpansionPanel headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>

    <ExpansionPanel headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>

    <ExpansionPanel headerBuilder={Header}>
      <span>Ah que coucou</span>
    </ExpansionPanel>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Multiple = TemplateMultiple.bind({});
Multiple.args = {};
