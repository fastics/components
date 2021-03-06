// TODO: Replace styled-components by react-jss

import { css } from 'styled-components';

import { Maybe } from '../../types';
import EdgeInsets from '../edge-insets';

const isNull = <T extends any>(value: Maybe<T>) => value === null;

class Margin extends EdgeInsets {
  /**
   * Generates CSS string based on data.
   */
  toCSSString() {
    if (isNull(this.top) && isNull(this.right) && isNull(this.bottom) && isNull(this.left))
      return null;

    const result = [];

    // test left
    if (!isNull(this.left)) result.push(`margin-left: ${this.left}px;`);
    // test right
    if (!isNull(this.right)) result.push(`margin-right: ${this.right}px;`);
    // test top
    if (!isNull(this.top)) result.push(`margin-top: ${this.top}px;`);
    // test bottom
    if (!isNull(this.bottom)) result.push(`margin-bottom: ${this.bottom}px;`);

    return result.join('\n');
  }

  /**
   * Generates `styled-components` CSS based on data.
   */
  toStyledCSS() {
    if (isNull(this.top) && isNull(this.right) && isNull(this.bottom) && isNull(this.left))
      return null;

    return css`
      ${!isNull(this.left) && `margin-left: ${this.left}px;`}
      ${!isNull(this.right) && `margin-right: ${this.right}px;`}
      ${!isNull(this.top) && `margin-top: ${this.top}px;`}
      ${!isNull(this.bottom) && `margin-bottom: ${this.bottom}px;`}
    `;
  }

  copyWith({
    top = null,
    right = null,
    bottom = null,
    left = null,
  }: {
    top?: Maybe<number>;
    right?: Maybe<number>;
    bottom?: Maybe<number>;
    left?: Maybe<number>;
  }) {
    return new Margin(
      top ?? this.top,
      right ?? this.right,
      bottom ?? this.bottom,
      left ?? this.left,
    );
  }

  public toString() {
    return `Margin(top: ${this.top}, right: ${this.right}, bottom: ${this.bottom}, left: ${this.left})`;
  }
}

export default Margin;
