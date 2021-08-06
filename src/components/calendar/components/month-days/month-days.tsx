import classnames from 'classnames';
import React from 'react';

import DateTime from '../../../date-time';
import { CalendarEvent } from '../../types';
import { getEventsThatDay } from '../../utils';
import Event from '../event';
import classes from './month-days.module.scss';

interface MonthDaysProps {
  currentDate: DateTime;
  events?: CalendarEvent[];
}

const MonthDays: React.FC<MonthDaysProps> = ({ currentDate, events }) => (
  <>
    {currentDate.getDaysInMonth().map((dateTime) => {
      const eventsThatDay = events && getEventsThatDay(dateTime, events);

      return (
        <span
          key={dateTime.millisecondsSinceEpoch}
          className={classnames(classes.cell, {
            [classes.cell__out_of_range]: !dateTime.isInSameMonth(currentDate),
          })}
        >
          <span
            className={classnames(classes.day_number, {
              [classes.day_number__current]: dateTime.isToday(),
            })}
          >
            {dateTime.day}
          </span>

          <div className={classes.events}>
            {eventsThatDay?.map((event) => (
              <Event key={event.date.millisecondsSinceEpoch} event={event} />
            ))}
          </div>
        </span>
      );
    })}
  </>
);

export default MonthDays;
