import { Maybe } from '../../types';

type NewEdgeInsets<T> = new (
  top: Maybe<number>,
  right: Maybe<number>,
  bottom: Maybe<number>,
  left: Maybe<number>,
) => T;

abstract class EdgeInsets {
  top: Maybe<number>;
  right: Maybe<number>;
  bottom: Maybe<number>;
  left: Maybe<number>;

  constructor(
    top: Maybe<number>,
    right: Maybe<number>,
    bottom: Maybe<number>,
    left: Maybe<number>,
  ) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }

  /**
   * Creates insets where all the offsets are value.
   * @param {Number} value
   */
  public static all<T extends EdgeInsets>(this: NewEdgeInsets<T>, value: number): T {
    return new this(value, value, value, value);
  }

  /**
   * Creates insets with symmetrical vertical and horizontal offsets.
   * @param {Number} [horizontal]
   * @param {Number} [vertical]
   */
  static symmetric<T extends EdgeInsets>(
    this: NewEdgeInsets<T>,
    {
      horizontal = null,
      vertical = null,
    }: {
      horizontal?: Maybe<number>;
      vertical?: Maybe<number>;
    },
  ) {
    return new this(vertical, horizontal, vertical, horizontal);
  }

  /**
   * Creates insets with only the given values non-zero.
   * @param {Number} [top]
   * @param {Number} [right]
   * @param {Number} [bottom]
   * @param {Number} [left]
   */
  static only<T extends EdgeInsets>(
    this: NewEdgeInsets<T>,
    {
      top = null,
      right = null,
      bottom = null,
      left = null,
    }: {
      top?: Maybe<number>;
      right?: Maybe<number>;
      bottom?: Maybe<number>;
      left?: Maybe<number>;
    } = {},
  ) {
    return new this(top, right, bottom, left);
  }

  /**
   * Creates insets from offsets from the left, top, right, and bottom.
   * @param {Number} left
   * @param {Number} top
   * @param {Number} right
   * @param {Number} bottom
   */
  static fromLTRB<T extends EdgeInsets>(
    this: NewEdgeInsets<T>,
    left: Maybe<number>,
    top: Maybe<number>,
    right: Maybe<number>,
    bottom: Maybe<number>,
  ) {
    return new this(top, right, bottom, left);
  }

  /**
   * An EdgeInsets with zero offsets in each direction.
   */
  static zero<T extends EdgeInsets>(this: NewEdgeInsets<T>) {
    return new this(0, 0, 0, 0);
  }
}

export default EdgeInsets;
