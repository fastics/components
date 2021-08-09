import { render } from '@testing-library/react';

import Colors from '../colors';
import Timeline from './timeline';

it('should render successfully', () => {
  render(
    <Timeline>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.yellow[600]}>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color={Colors.purple[300]}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
      <Timeline.Item color={Colors.black54}>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3</p>
      </Timeline.Item>
    </Timeline>,
  );
});
