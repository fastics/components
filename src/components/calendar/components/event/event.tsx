import React from 'react';

import { CalendarEvent } from '../../types';
import classes from './event.module.scss';

interface EventProps {
  event: CalendarEvent;
}

const Event: React.FC<EventProps> = ({ event }) => (
  <div className={classes.wrapper}>
    <span>{event.title}</span>
    <span className={classes.hour}>
      {event.date.hour.toString().padStart(2, '0')}:{event.date.minute.toString().padStart(2, '0')}
    </span>
  </div>
);

export default Event;
