import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FixedSizeList } from 'react-window';

import Icon from '../icon';
import Icons, { IconData } from './icons';

const IconComponent = ({ value, icon }: { value: keyof Icons; icon: IconData }) => (
  <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center' }}>
    <Icon icon={icon} />
    <div>{value}</div>
  </div>
);

export default {
  title: 'Atoms/Icons',
  component: IconComponent,
} as ComponentMeta<typeof Icon>;

const Row = ({ index, style }: { index: number; style: any }) => {
  const icon = Object.entries(Icons)[index];
  return (
    <div style={style}>
      <IconComponent value={icon[0] as keyof Icons} icon={icon[1]} />
    </div>
  );
};

const Template: ComponentStory<typeof Icon> = () => {
  return (
    <FixedSizeList height={800} itemCount={Object.keys(Icons).length} itemSize={55} width={800}>
      {Row}
    </FixedSizeList>
  );
};

export const Default = Template.bind({});
Default.args = {};
