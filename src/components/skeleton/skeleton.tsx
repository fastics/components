import classnames from 'classnames';
import { FC, ReactChild, ReactChildren } from 'react';

import Color from '../color';
import SkeletonAvatar from './components/avatar';
import SkeletonParagraph from './components/paragraph';
import { SkeletonParagraphProps } from './components/paragraph/paragraph';
import SkeletonTitle from './components/title';
import SkeletonContext from './context/skeleton-context';
import classes from './skeleton.module.scss';

interface SkeletonProps {
  /**
   * If `true`, an infinite animation runs on every child.
   *
   * You should use it if you are loading something.
   * @default false
   */
  active?: boolean;
  /**
   * Override **[Skeleton]** default color.
   *
   * @default Colors.grey[200]
   */
  color?: Color;
  /**
   * Show avatar placeholder ?
   * @default false
   */
  avatar?: boolean;
  /**
   * Show paragraph placeholder ?
   *
   * You can also pass custom paragraph props to customize it.
   * @default true
   */
  paragraph?: boolean | SkeletonParagraphProps<any>;
  /**
   * You can completely render what you want.
   *
   * If you set some children, the basic skeleton will be replaced with your content.
   */
  children?: ReactChild | ReactChildren;
}

type SkeletonComponent = FC<SkeletonProps> & {
  Avatar: typeof SkeletonAvatar;
  Paragraph: typeof SkeletonParagraph;
  Title: typeof SkeletonTitle;
};

/**
 * You can display a **[Skeleton]** to mimic a content while it's loading.
 */
export const Skeleton: SkeletonComponent = ({
  active,
  avatar,
  children,
  color,
  paragraph = true,
}) => (
  <SkeletonContext.Provider value={{ active, color }}>
    <div className={classnames({ [classes.skeleton__active]: active })}>
      {children || (
        <div className={classes.skeleton}>
          {avatar && (
            <div className={classes.header}>
              <SkeletonAvatar />
            </div>
          )}

          <div className={classes.content}>
            <SkeletonTitle />
            {paragraph && <SkeletonParagraph rows={2} width={[undefined, '60%']} {...paragraph} />}
          </div>
        </div>
      )}
    </div>
  </SkeletonContext.Provider>
);

Skeleton.Avatar = SkeletonAvatar;
Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Title = SkeletonTitle;

export default Skeleton;
