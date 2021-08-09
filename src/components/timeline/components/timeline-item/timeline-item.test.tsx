import { render } from '@testing-library/react';

import TimelineItem from './timeline-item';

it('should render successfully', () => {
  render(
    <TimelineItem>
      <p>Hello, World !</p>
    </TimelineItem>,
  );
});
