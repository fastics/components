import classnames from 'classnames';
import { FC } from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../../../color';
import Colors from '../../../colors';
import useSkeletonContext from '../../hooks/useSkeletonContext';
import classes from './title.module.scss';

interface SkeletonTitleProps {}

interface SkeletonTitleStylesProps {
  color: Color;
}

const useStyles = createUseStyles({
  title: ({ color }: SkeletonTitleStylesProps) => ({
    backgroundColor: color.toRGBA(),
  }),
});

/**
 * You can display a **[Skeleton.Title]** to mimic a title while content is loading.
 */
export const SkeletonTitle: FC<SkeletonTitleProps> = () => {
  const { active = false, color = Colors.grey[200] } = useSkeletonContext();
  const styles = useStyles({ color });

  return (
    // Because it's just a placeholder, I remove the ESLint rule.
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3 className={classnames(classes.title, styles.title, { [classes.title__active]: active })} />
  );
};

export default SkeletonTitle;
