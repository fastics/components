import classnames from 'classnames';
import React, { FC, ReactElement } from 'react';

import TimelineItem from './components/timeline-item';
import classes from './timeline.module.scss';
import { TimelineMode } from './types';

interface TimelineProps {
  /**
   * Choose at which side of the text the line should be.
   *
   * - **left**: As default, text is on the right
   * - **right**: Text is on the left
   * - **alternate**: Text starts on the right, then next element on the left, etc.
   * @default left
   */
  mode?: TimelineMode;

  /**
   * Children components are **[Timeline.Item]**s. This is where magic happens.
   */
  children: ReactElement<typeof TimelineItem> | ReactElement<typeof TimelineItem>[];
}

export type TimelineComponent = FC<TimelineProps> & {
  Item: typeof TimelineItem;
};

/**
 * You can limit the TimeLine space by wrapping it with a div.
 *
 * @see TimelineItem
 */
export const Timeline: TimelineComponent = ({ children, mode = 'left' }) => (
  <div
    className={classnames(classes.timeline, {
      timeline__left: mode === 'left',
      timeline__right: mode === 'right',
      timeline__alternate: mode === 'alternate',
    })}
  >
    {children}
  </div>
);

Timeline.Item = TimelineItem;

export default Timeline;
