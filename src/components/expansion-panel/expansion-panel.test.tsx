import { act, fireEvent, render } from '@testing-library/react';

import ExpansionPanel from './expansion-panel';

describe('ExpansionPanel', () => {
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

  it('should open', () => {
    const { getByTestId } = render(
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

    const toggle = getByTestId('toggle');

    act(() => {
      fireEvent.click(toggle);
    });
  });
});
