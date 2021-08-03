import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Modal from './modal';
import classes from './modal.stories.module.scss';

const children = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie, urna sit amet
    suscipit pulvinar, tellus ante feugiat sapien, ut pellentesque nibh orci sed eros. Fusce sem
    arcu, faucibus ac vestibulum ut, suscipit ut massa. Pellentesque porta pretium egestas. Proin
    faucibus massa id libero auctor, ac tempor mauris fermentum. Suspendisse et nisi non nunc
    dapibus pretium a vitae felis. Donec aliquam mollis elit vitae pulvinar. Duis elementum
    convallis sem, ac rhoncus leo malesuada id. Etiam dictum risus vitae posuere dictum. Nullam
    vestibulum velit at pellentesque sollicitudin. Vestibulum sed odio tincidunt, dapibus urna eu,
    rhoncus elit. Maecenas et metus a sapien porttitor porta. Fusce posuere convallis massa, eget
    consectetur felis accumsan ut. Vestibulum consequat fringilla odio eget pretium. In ut rhoncus
    nibh. Vivamus at nisl euismod, scelerisque dui ac, cursus orci. Duis augue nibh, tincidunt non
    vestibulum dictum, eleifend vitae mauris. Donec convallis felis id ligula molestie mollis. Proin
    in suscipit lectus. Nam pulvinar, risus ac luctus ornare, dui lectus mollis nulla, a accumsan
    augue erat nec nulla. Nullam facilisis porta justo, et tristique augue ultricies nec. Vestibulum
    fermentum dictum ex eu pretium. Donec in lorem consequat, imperdiet diam vel, efficitur mi. Sed
    rutrum lacinia leo nec porttitor. Fusce tristique condimentum volutpat. Quisque molestie massa
    ac aliquam ornare. Phasellus vel tempus lectus. Aliquam ipsum eros, iaculis sit amet felis eu,
    posuere viverra justo. Quisque imperdiet lacinia augue, tristique tristique tortor tempus sit
    amet. Aliquam vestibulum, ex ac consequat lobortis, libero mauris tempus erat, nec placerat
    tellus justo et turpis. Cras volutpat faucibus ligula, vel aliquam tellus hendrerit id. Duis
    viverra maximus ex, non rhoncus turpis aliquet quis. Phasellus vitae sem vulputate, ornare eros
    sit amet, laoreet nisl. Donec ante lorem, malesuada non ultrices at, iaculis in eros. In erat
    massa, tincidunt id maximus et, varius id velit. Mauris aliquet ultrices rutrum. Vestibulum
    cursus sem at eros finibus tristique. Integer vitae sapien non enim commodo aliquet. Nunc justo
    mi, mollis vitae mi quis, interdum viverra lacus. Phasellus ac condimentum ligula. Sed ultrices
    commodo eleifend. Vestibulum at vulputate dolor. Nunc sit amet blandit enim, vel hendrerit est.
    Vivamus eget bibendum purus, eget cursus nisi. Maecenas faucibus feugiat tellus, aliquet
    vulputate ipsum faucibus nec. Proin tincidunt, augue nec dapibus efficitur, nunc purus blandit
    diam, eu aliquam velit eros nec metus. Nam odio sapien, luctus in turpis sed, egestas accumsan
    enim. Pellentesque condimentum ligula vel tincidunt ultrices. Sed tempus nunc lectus, nec
    commodo magna pulvinar sit amet. Nam aliquet sapien eget diam dapibus, nec fermentum nulla
    vulputate. Curabitur nec dolor pretium, fermentum tellus in, imperdiet mauris. Etiam vestibulum
    velit odio. Sed luctus dapibus nisi, eu facilisis urna facilisis in. Maecenas facilisis sagittis
    neque, ac imperdiet risus cursus ut. Aliquam fringilla sit amet tellus vel sagittis. Nunc vitae
    turpis a nulla pulvinar pharetra in non leo. Nunc tempus rutrum auctor. Nunc tincidunt bibendum
    ullamcorper. Proin sapien nisl, lacinia vel mollis vel, convallis in magna. Vestibulum eleifend
    ante eu felis finibus consequat. Phasellus velit ex, hendrerit vitae libero id, vestibulum
    pulvinar risus. Donec nec felis ultrices, laoreet urna eu, rutrum eros.
  </p>
);

export default {
  title: 'Atoms/Modal',
  component: Modal,
  decorators: [(story) => <div style={{ height: 300 }}>{story()}</div>],
  argTypes: {
    onClose: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClose: action('close'),
  title: 'Default modal',
  children,
};

export const WithoutOverlay = Template.bind({});
WithoutOverlay.args = {
  title: 'Without overlay modal',
  withOverlay: false,
  children,
};

export const WithCustomClassNames = Template.bind({});
WithCustomClassNames.args = {
  onClose: action('close'),
  title: 'Without overlay modal',
  children,
  classNames: classes,
};
