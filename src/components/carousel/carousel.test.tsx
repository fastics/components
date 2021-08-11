import { render } from '@testing-library/react';
import React, { CSSProperties } from 'react';

import Colors from '../colors';
import Carousel from './carousel';

const styles: Record<string, CSSProperties> = {
  element: {
    width: '20rem',
    height: '12rem',
    borderRadius: 4,
    backgroundColor: Colors.grey[200].toRGBA(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

describe('Carousel', function () {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('should render successfully', () => {
    render(
      <Carousel>
        <div style={styles.element}>Example 1</div>
        <div style={styles.element}>Example 2</div>
        <div style={styles.element}>Example 3</div>
        <div style={styles.element}>Example 4</div>
        <div style={styles.element}>Example 5</div>
        <div style={styles.element}>Example 6</div>
        <div style={styles.element}>Example 7</div>
      </Carousel>,
    );
  });
});
