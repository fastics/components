import { useContext } from 'react';

import SkeletonContext from '../context/skeleton-context';

const useSkeletonContext = () => {
  return useContext(SkeletonContext);
};

export default useSkeletonContext;
