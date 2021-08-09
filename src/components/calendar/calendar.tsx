import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';

import DateTime from '../date-time';
import Duration from '../duration';
import classes from './calendar.module.scss';
import { CalendarTop, Days, MonthDays } from './components';
import { SupportedLocales } from './constants';
import { CalendarEvent, Day } from './types';
import { filterCalendarEvents } from './utils';

interface CalendarProps {
  /**
   * Initial selected date. Can be a timestamp or a [DateTime].
   * @default DateTime.now()
   * @see DateTime
   */
  initialValue?: DateTime | number;
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
  events?: CalendarEvent[];
  dark?: boolean;
}

/**
 * A **[Calendar]** that uses no external dependency.
 * @see DateTime
 */
export const Calendar: React.FC<CalendarProps> = ({
  initialValue = DateTime.now(),
  locale = SupportedLocales.EN,
  formatDay = (value) => value.substr(0, 3),
  events,
  dark,
}) => {
  const date = useMemo<DateTime>(
    () =>
      typeof initialValue === 'number'
        ? DateTime.fromMillisecondsSinceEpoch(initialValue)
        : initialValue,
    [initialValue],
  );

  const [currentDate, setCurrentDate] = useState(date);

  const handlePrevClick = useCallback(() => {
    setCurrentDate((dt) => dt.subtract(Duration.days(365.25 / 12)));
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentDate((dt) => dt.add(Duration.days(30.4)));
  }, []);

  const filteredEvents = useMemo(() => {
    return events && filterCalendarEvents(currentDate, events);
  }, [currentDate, events]);

  return (
    <div className={classnames(classes.calendar, { [classes.calendar__dark]: dark })}>
      <CalendarTop
        currentDate={currentDate}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        locale={locale}
      />

      <div className={classes.inner}>
        <Days locale={locale} formatDay={formatDay} />
        <MonthDays currentDate={currentDate} events={filteredEvents} />
      </div>
    </div>
  );
};

export default Calendar;
