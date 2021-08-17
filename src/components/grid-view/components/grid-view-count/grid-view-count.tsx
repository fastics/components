import classNames from 'classnames';
import React, { Children, cloneElement, FC, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import Padding from '../../../padding';

/**
 * Here I'm using explicit enum values since it may help Storybook.
 * But we should forever use enum, not string.
 */
export enum Axis {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

interface GridViewCountProps {
  children: JSX.Element[];
  className?: string;
  /**
   * How much columns should be displayed
   */
  crossAxisCount: number;
  /**
   * How much spacing should be done on columns
   */
  crossAxisSpacing?: number;
  /**
   * How much spacing should be done on rows
   */
  mainAxisSpacing?: number;
  /**
   * If you want some padding around
   */
  padding?: Padding;
  scrollDirection?: Axis;
}

type StylesProps = Pick<
  GridViewCountProps,
  'crossAxisCount' | 'crossAxisSpacing' | 'mainAxisSpacing' | 'padding' | 'scrollDirection'
>;

const useStyles = createUseStyles({
  wrapper: ({
    scrollDirection,
    crossAxisSpacing,
    mainAxisSpacing,
    crossAxisCount,
    padding,
  }: StylesProps) => ({
    // Since we want a grid
    display: 'grid',
    // Here we handle gaps between each child
    columnGap: scrollDirection === Axis.vertical ? crossAxisSpacing : mainAxisSpacing,
    rowGap: scrollDirection === Axis.vertical ? mainAxisSpacing : crossAxisSpacing,
    // Define how many columns or rows we should draw.
    // Based on `scrollDirection`.
    gridTemplateColumns:
      scrollDirection === Axis.vertical ? `repeat(${crossAxisCount}, 1fr)` : undefined,
    gridTemplateRows:
      scrollDirection === Axis.horizontal ? `repeat(${crossAxisCount}, 1fr)` : undefined,
    // We want the parent scrollable if content overflow
    overflow: 'auto',
    // This is where we define global padding.
    paddingBottom: padding?.bottom ?? undefined,
    paddingLeft: padding?.left ?? undefined,
    paddingRight: padding?.right ?? undefined,
    paddingTop: padding?.top ?? undefined,
    // This is used to automatically generate rows or cols based on `scrollDirection`.
    gridAutoFlow: scrollDirection === Axis.vertical ? 'row' : 'column',

    /**
     * Below is a hack to handle end-side padding
     * @see https://webplatform.news/issues/2019-08-07
     */
    '&:after': {
      content: '""',
      paddingRight: '0.02px',
    },
  }),
  child: {
    aspectRatio: 1,
    minWidth: 'max-content',

    // Handle navigators that does not understand aspect-ratio
    '@supports not (aspect-ratio: 1)': {
      paddingTop: '100%',
      width: '100%',
      position: 'relative',
      '& > *': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  },
});

/**
 * Creates a scrollable, 2D array of widgets with a fixed number of tiles in the cross axis.
 */
export const GridViewCount: FC<GridViewCountProps> = ({ children, className, ...props }) => {
  const styles = useStyles(props);

  /**
   * Since I have some inconsistent gap between rows and cols when scrollDirection is Axis.horizontal,
   * I prefer to warn the user.
   */
  useEffect(() => {
    if (props.scrollDirection === Axis.horizontal) {
      console.warn(
        '[GridView.Count] You used Axis.horizontal as scrollDirection. Be warned that strange behaviour may occur with this.',
      );
    }
  }, [props.scrollDirection]);

  return (
    <div className={classNames(styles.wrapper, className)}>
      {Children.map(children, (child) =>
        cloneElement(child, { className: classNames(child.props.className, styles.child) }),
      )}
    </div>
  );
};

export default GridViewCount;
