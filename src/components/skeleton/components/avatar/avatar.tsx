import classnames from 'classnames';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../../../color';
import Colors from '../../../colors';
import useSkeletonContext from '../../hooks/useSkeletonContext';
import classes from './avatar.module.scss';

type AvatarSize = 'small' | 'default' | 'large';
type AvatarSizes = Record<AvatarSize, number>;

interface AvatarProps {
  /**
   * Defines the **[Skeleton.Avatar]** shape.
   * @default circle
   */
  shape?: 'square' | 'circle';
  /**
   * Defines the **[Skeleton.Avatar]** size.
   *
   * - **small**: default is 24px
   * - **default**: default is 32px
   * - **large**: default is 40px
   *
   * You can override these values with `sizes` prop.
   *
   * You can also pass a `number` so it fixes its size to this value.
   * @default default
   */
  size?: number | AvatarSize;
  /**
   * You can override default sizes values.
   *
   * The shape is :
   * ```
   * type Sizes = {
   *   small: number;
   *   default: number;
   *   large: number;
   * }
   * ```
   */
  sizes?: AvatarSizes;
}

interface AvatarStylesProps {
  active: boolean;
  shape: 'square' | 'circle';
  size: number | 'small' | 'default' | 'large';
  color: Color;
  sizes: AvatarSizes;
}

const DEFAULT_SIZES: AvatarSizes = {
  small: 24,
  default: 32,
  large: 40,
};

const useStyles = createUseStyles({
  wrapper: ({ color, sizes, size }: AvatarStylesProps) => {
    const finalSize = typeof size === 'number' ? size : sizes[size];

    return {
      backgroundColor: color.toRGBA(),
      width: finalSize,
      height: finalSize,
      lineHeight: finalSize,
    };
  },
});

/**
 * You can display a **[Skeleton.Avatar]** to mimic an avatar while content is loading.
 */
export const SkeletonAvatar: FC<AvatarProps> = ({
  size = 'default',
  shape = 'circle',
  sizes = DEFAULT_SIZES,
}) => {
  const { active = false, color = Colors.grey[200] } = useSkeletonContext();
  const styles = useStyles({ size, shape, active, color, sizes });

  return (
    <div
      className={classnames(classes.wrapper, styles.wrapper, {
        [classes.wrapper__circle]: shape === 'circle',
        [classes.wrapper__active]: active,
      })}
    />
  );
};

export default SkeletonAvatar;
