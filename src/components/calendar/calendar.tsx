import classnames from 'classnames';
import React from 'react';

import classes from './calendar.module.scss';
import { DAYS, MONTHS, SupportedLocales } from './constants';
import { Day } from './types';
import { getDaysInMonth, getFirstDayOfMonthWeek, isInCurrentMonth, isToday } from './utils';

interface CalendarProps {
  /**
   * Current selected date. Can be a timestamp or a Date.
   * @default new Date()
   */
  value?: Date | number;
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
 * A **[Calendar]** that uses no library.
 */
export const Calendar: React.FC<CalendarProps> = ({
  value = new Date(),
  locale = SupportedLocales.EN,
  formatDay = (value) => value.substr(0, 3),
}) => {
  const date = typeof value === 'number' ? new Date(value) : value;

  const localizedMonths = MONTHS[locale];
  const localizedDays = DAYS[locale];

  const currentMonth = date.getMonth();

  console.log({
    localizedMonths,
    currentMonth,
    firstDay: getFirstDayOfMonthWeek(date),
    daysInMonth: getDaysInMonth(date).map((d) => d.toLocaleDateString(locale)),
  });

  return (
    <div className={classes.calendar}>
      <span>{MONTHS[locale][date.getMonth()]}</span>
      <span>{date.getFullYear()}</span>

      <div className={classes.header}>
        {localizedDays.map((day) => (
          <span key={day} className={classes.cell}>
            {formatDay(day)}
          </span>
        ))}
      </div>

      <div className={classes.content}>
        {getDaysInMonth(date).map((d) => (
          <span
            key={d.valueOf()}
            className={classnames(classes.cell, {
              [classes.cell__out_of_range]: !isInCurrentMonth(d, date),
            })}
          >
            <span
              className={classnames(classes.day_number, {
                [classes.day_number__current]: isToday(d),
              })}
            >
              {d.getDate()}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
