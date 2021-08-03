import classNames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../color';
import Colors from '../colors';

interface LinearProgressIndicatorProps {
  /**
   * Current value.
   * Should be between 0 and 100.
   */
  value: number;
  /**
   * Color of the outer line.
   * @default Colors.blue[300]
   */
  backgroundColor?: Color;
  /**
   * Color of the inner line, that one that moves.
   * @default Colors.blue[600]
   */
  color?: Color;
  /**
   * Lines height. It defines how big is the linear progress indicator.
   * @default 4
   */
  height?: number;
}

const defaultBackgroundColor = Colors.blue[200];
const defaultColor = Colors.blue[500];
const defaultHeight = 4;

const useBasicStyles = createUseStyles({
  wrapper: (props: Omit<LinearProgressIndicatorProps, 'value'>) => ({
    width: '100%',
    height: props.height ?? defaultHeight,
    backgroundColor: props.backgroundColor?.toRGBA() ?? defaultBackgroundColor.toRGBA(),
  }),
  inner: (props: Omit<LinearProgressIndicatorProps, 'value'>) => ({
    backgroundColor: props.backgroundColor?.toRGBA() ?? defaultColor.toRGBA(),
    height: props.height ?? defaultHeight,
  }),
});

const useValueStyles = createUseStyles({
  inner: (props: Pick<LinearProgressIndicatorProps, 'value'>) => ({
    width: `${props.value}%`,
  }),
});

export const LinearProgressIndicator: React.FC<LinearProgressIndicatorProps> = (props) => {
  const { value, ...rest } = props;

  if (value > 100)
    throw new RangeError('[LinearProgressIndicator] - The value should not exceed 100');

  const basicStyles = useBasicStyles(rest);
  const valueStyles = useValueStyles({ value });

  return (
    <div className={basicStyles.wrapper}>
      <div className={classNames(basicStyles.inner, valueStyles.inner)} />
    </div>
  );
};

export default LinearProgressIndicator;
