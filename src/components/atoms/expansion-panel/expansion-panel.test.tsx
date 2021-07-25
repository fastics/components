import { render } from '@testing-library/react';
import React from 'react';

import ExpansionPanel from './expansion-panel';

it('should render successfully', () => {
  render(
    <ExpansionPanel
      headerBuilder={() => (
        <div>
          <span>Hello Panel</span>
        </div>
      )}
    >
      Ah que coucou
    </ExpansionPanel>,
  );
});
