import classnames from 'classnames';
import React, { cloneElement, FC, ReactElement, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../../../color';
import Colors from '../../../colors';
import { IconInnerProps } from '../../../icon';
import classes from './timeline-item.module.scss';

interface TimelineItemPropsWithoutDot {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: Color;

  dot?: undefined;

  children: ReactNode;
}

interface TimelineItemPropsWithDot {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: undefined;

  dot?: ReactElement<IconInnerProps>;

  children: ReactNode;
}

type TimelineItemProps = TimelineItemPropsWithoutDot | TimelineItemPropsWithDot;

interface TimelineItemStylesProps {
  color: Color;
}

const useStyles = createUseStyles({
  item: (props: TimelineItemStylesProps) => ({
    '--dot-color': props.color.toRGBA(),
  }),
});

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  color = Colors.blue[500],
  dot,
}) => {
  const styles = useStyles({ color });

  return (
    <li className={classnames(classes.item, styles.item, { [classes.with_custom_dot]: !!dot })}>
      {dot
        ? cloneElement(dot, {
            className: classes.dot,
          })
        : null}
      <div className={classes.content}>{children}</div>
    </li>
  );
};

export default TimelineItem;
