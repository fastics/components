import { render } from '@testing-library/react';

import SkeletonParagraph from './paragraph';

describe('Skeleton.Paragraph', () => {
  it('should render successfully', () => {
    render(<SkeletonParagraph />);
  });

  it('should render with number width and one row', () => {
    render(<SkeletonParagraph rows={1} width={120} />);
  });

  it('should render with number width and multiple rows', () => {
    render(<SkeletonParagraph rows={12} width={120} />);
  });
});
