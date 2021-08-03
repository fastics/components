// TODO: Replace styled-components by react-jss

import { css } from 'styled-components';

import EdgeInsets from '../edge-insets';

type Nullable<T> = T | null;

const isNull = <T extends any>(value: Nullable<T>) => value === null;

class Padding extends EdgeInsets {
  /**
   * Generates CSS string based on data.
   */
  toCSSString() {
    if (isNull(this.top) && isNull(this.right) && isNull(this.bottom) && isNull(this.left))
      return null;

    const result = [];

    // test left
    if (!isNull(this.left)) result.push(`padding-left: ${this.left}px;`);
    // test right
    if (!isNull(this.right)) result.push(`padding-right: ${this.right}px;`);
    // test top
    if (!isNull(this.top)) result.push(`padding-top: ${this.top}px;`);
    // test bottom
    if (!isNull(this.bottom)) result.push(`padding-bottom: ${this.bottom}px;`);

    return result.join('\n');
  }

  /**
   * Generates `styled-components` CSS based on data.
   */
  toStyledCSS() {
    if (isNull(this.top) && isNull(this.right) && isNull(this.bottom) && isNull(this.left))
      return null;

    return css`
      ${!isNull(this.left) && `padding-left: ${this.left}px;`}
      ${!isNull(this.right) && `padding-right: ${this.right}px;`}
      ${!isNull(this.top) && `padding-top: ${this.top}px;`}
      ${!isNull(this.bottom) && `padding-bottom: ${this.bottom}px;`}
    `;
  }

  copyWith({
    top = null,
    right = null,
    bottom = null,
    left = null,
  }: {
    top?: Nullable<number>;
    right?: Nullable<number>;
    bottom?: Nullable<number>;
    left?: Nullable<number>;
  }) {
    return new Padding(
      top ?? this.top,
      right ?? this.right,
      bottom ?? this.bottom,
      left ?? this.left,
    );
  }
}

export default Padding;
