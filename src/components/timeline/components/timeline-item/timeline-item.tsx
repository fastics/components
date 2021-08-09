import classnames from 'classnames';
import { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../../../color';
import Colors from '../../../colors';
import classes from './timeline-item.module.scss';

interface TimelineItemProps {
  /**
   * What's the dot color ?
   *
   * @default Colors.blue[500]
   */
  color?: Color;

  children: ReactNode;
}

interface TimelineItemStylesProps {
  color: Color;
}

const useStyles = createUseStyles({
  item: (props: TimelineItemStylesProps) => ({
    '--dot-color': props.color.toRGBA(),
  }),
});

export const TimelineItem: FC<TimelineItemProps> = ({ children, color = Colors.blue[500] }) => {
  const styles = useStyles({ color });

  return (
    <li className={classnames(classes.item, styles.item)}>
      <div className={classes.content}>{children}</div>
    </li>
  );
};

export default TimelineItem;
