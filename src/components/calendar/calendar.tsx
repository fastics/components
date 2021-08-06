import classnames from 'classnames';
import React from 'react';

import DateTime from '../date-time';
import classes from './calendar.module.scss';
import { DAYS, MONTHS, SupportedLocales } from './constants';
import { Day } from './types';

interface CalendarProps {
  /**
   * Current selected date. Can be a timestamp or a Date.
   * @default new Date()
   */
  value?: DateTime | number;
  /**
   * Set locale for months and days.
   * @default SupportedLocales.EN
   */
  locale?: SupportedLocales;
  /**
   * You can override the day label.
   * @default (value) => value.substr(0, 3)
   */
  formatDay?: (day: Day) => string;
}

/**
 * A **[Calendar]** that uses no external dependency.
 * @see DateTime
 */
export const Calendar: React.FC<CalendarProps> = ({
  value = DateTime.now(),
  locale = SupportedLocales.EN,
  formatDay = (value) => value.substr(0, 3),
}) => {
  const date: DateTime =
    typeof value === 'number' ? DateTime.fromMillisecondsSinceEpoch(value) : value;

  const localizedDays = DAYS[locale];

  return (
    <div className={classes.calendar}>
      <span>{MONTHS[locale][date.month - 1]}</span>
      <span>{date.year}</span>

      <div className={classes.header}>
        {localizedDays.map((day) => (
          <span key={day} className={classes.cell}>
            {formatDay(day)}
          </span>
        ))}
      </div>

      <div className={classes.content}>
        {date.getDaysInMonth().map((dateTime) => (
          <span
            key={dateTime.millisecondsSinceEpoch}
            className={classnames(classes.cell, {
              [classes.cell__out_of_range]: !dateTime.isInSameMonth(date),
            })}
          >
            <span
              className={classnames(classes.day_number, {
                [classes.day_number__current]: dateTime.isToday(),
              })}
            >
              {dateTime.day}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
