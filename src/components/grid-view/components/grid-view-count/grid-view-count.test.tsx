import { render } from '@testing-library/react';

import Colors from '../../../colors';
import GridViewCount from './grid-view-count';

const items = Array.from({ length: 32 }, (_, index) => {
  const color = Colors.primaries[Math.floor(Math.random() * Colors.primaries.length)];

  return (
    <div key={index} style={{ backgroundColor: color['400'].toRGBA() }}>
      Item {index}
    </div>
  );
});

it('should render successfully', () => {
  render(<GridViewCount crossAxisCount={4}>{items}</GridViewCount>);
});
