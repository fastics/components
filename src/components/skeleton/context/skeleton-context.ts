import { createContext } from 'react';

import Color from '../../color';
import Colors from '../../colors';

type SkeletonContextValue = {
  active?: boolean;
  color?: Color;
};

const SkeletonContext = createContext<SkeletonContextValue>({
  active: false,
  color: Colors.grey[200],
});

export default SkeletonContext;
