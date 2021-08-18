import 'intersection-observer';

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
  it('should render successfully', () => {
    render(
      <Carousel>
        <div key={1} style={styles.element}>
          Example 1
        </div>
        <div key={2} style={styles.element}>
          Example 2
        </div>
        <div key={3} style={styles.element}>
          Example 3
        </div>
        <div key={4} style={styles.element}>
          Example 4
        </div>
        <div key={5} style={styles.element}>
          Example 5
        </div>
        <div key={6} style={styles.element}>
          Example 6
        </div>
        <div key={7} style={styles.element}>
          Example 7
        </div>
      </Carousel>,
    );
  });
});
