import React from 'react';

import GridViewCount from './components/grid-view-count';

interface GridViewProps {}

type GridViewComponent = React.FC<GridViewProps> & {
  Count: typeof GridViewCount;
};

const GridView: GridViewComponent = () => null;

GridView.Count = GridViewCount;

export default GridView;
