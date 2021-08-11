import classnames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { Tuple } from '../../../../types';
import Color from '../../../color';
import Colors from '../../../colors';
import useSkeletonContext from '../../hooks/useSkeletonContext';
import classes from './paragraph.module.scss';

export interface SkeletonParagraphProps<R extends number> {
  /**
   * How many rows you want to draw.
   * @default 1
   */
  rows?: R;
  /**
   * Set the width of paragraph. When width is an Array, it can set the width of each row.
   */
  width?: number | Tuple<number | undefined | string, R>;
}

interface SkeletonParagraphStylesProps {
  color: Color;
}

const useStyles = createUseStyles({
  line: ({ color }: SkeletonParagraphStylesProps) => ({
    backgroundColor: color.toRGBA(),
  }),
});

const getWidth = <R extends number>(
  rows: number,
  rowIndex: number,
  width?: number | Tuple<number | undefined | string, R>,
) => {
  if (!width) return undefined; // Easy. If no width given, just do nothing.
  if (Array.isArray(width)) return width[rowIndex]; // If width is an array, get the width by index.
  if (rows - 1 === rowIndex) return width; // Here width is a number
  return undefined;
};

/**
 * You can display a **[Skeleton.Paragraph]** to mimic a paragraph while content is loading.
 */
export const SkeletonParagraph = <R extends number>({ rows, width }: SkeletonParagraphProps<R>) => {
  const { active = false, color = Colors.grey[200] } = useSkeletonContext();

  const rowsNumber = rows ?? 1;
  const styles = useStyles({ color });

  return (
    <ul
      className={classnames(classes.paragraph, {
        [classes.paragraph__active]: active,
      })}
    >
      {Array.from({ length: rowsNumber }).map((_, i) => (
        <li
          key={i}
          className={classnames(classes.line, styles.line)}
          style={{ width: getWidth(rowsNumber, i, width) }}
        />
      ))}
    </ul>
  );
};

export default SkeletonParagraph;
