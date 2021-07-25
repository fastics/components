import { render } from '@testing-library/react';

import Modal from './modal';

it('should render successfully', () => {
  render(
    <Modal onClose={() => {}}>
      <p>Hello Testing World !</p>
    </Modal>,
  );
});
