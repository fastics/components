import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';

import Color from '../color';
import DateTime from '../date-time';
import Duration from '../duration';
import Icon from '../icon';
import IconButton from '../icon-button';
import Icons from '../icons';
import classes from './calendar.module.scss';
import { DAYS, MONTHS, SupportedLocales } from './constants';
import eventClasses from './event.module.scss';
import { CalendarEvent, Day } from './types';
import { filterCalendarEvents, getEventsThatDay } from './utils';

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
  const date: DateTime =
    typeof initialValue === 'number'
      ? DateTime.fromMillisecondsSinceEpoch(initialValue)
      : initialValue;

  const [currentDate, setCurrentDate] = useState(date);

  const handlePrevClick = useCallback(() => {
    setCurrentDate((dt) => dt.subtract(Duration.days(365.25 / 12)));
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentDate((dt) => dt.add(Duration.days(30.4)));
  }, []);

  const localizedDays = DAYS[locale];

  const filteredEvents = useMemo(() => {
    return events && filterCalendarEvents(currentDate, events);
  }, [currentDate, events]);

  return (
    <div className={classnames(classes.calendar, { [classes.calendar__dark]: dark })}>
      <div className={classes.top}>
        <IconButton
          onPress={handlePrevClick}
          icon={<Icon icon={Icons.arrow_left} color={new Color(0xff99a1a7)} />}
        />

        <div className={classes.center}>
          <span>{MONTHS[locale][currentDate.month - 1]}</span>
          <span>{currentDate.year}</span>
        </div>

        <IconButton
          onPress={handleNextClick}
          icon={<Icon icon={Icons.arrow_right} color={new Color(0xff99a1a7)} />}
        />
      </div>

      <div className={classes.inner}>
        {localizedDays.map((day) => (
          <span key={day} className={classnames(classes.day_name)}>
            {formatDay(day)}
          </span>
        ))}

        {currentDate.getDaysInMonth().map((dateTime) => {
          const eventsThatDay = filteredEvents && getEventsThatDay(dateTime, filteredEvents);

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

              <div className={eventClasses.events}>
                {eventsThatDay?.map((event) => (
                  <div key={event.date.millisecondsSinceEpoch} className={eventClasses.event}>
                    <span>{event.title}</span>
                    <span className={eventClasses.hour}>
                      {event.date.hour.toString().padStart(2, '0')}:
                      {event.date.minute.toString().padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
