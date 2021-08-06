import DateTime from '../date-time';
import { CalendarEvent } from './types';

/**
 * Returns all events occurring `month` month.
 *
 * It's used to get a subset of events, to be able to process fast.
 */
export const filterCalendarEvents = (month: DateTime, events: CalendarEvent[]) => {
  const firstDayOfFirstMonthWeek = month.getFirstDayOfMonthWeek();
  const lastDayOfFirstMonthWeek = month.getLastDayOfMonthWeek();

  return events.filter(
    (event) =>
      event.date.isBetween(firstDayOfFirstMonthWeek, lastDayOfFirstMonthWeek) ||
      event.endDate?.isBetween(firstDayOfFirstMonthWeek, lastDayOfFirstMonthWeek),
  );
};

/**
 * Returns all events occurring `date` day.
 *
 * You should filter events by month first to avoid processing useless data.
 * @see filterCalendarEvents
 */
export const getEventsThatDay = (date: DateTime, events: CalendarEvent[]) => {
  const start = new DateTime({
    year: date.year,
    month: date.month,
    day: date.day,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const end = new DateTime({
    year: date.year,
    month: date.month,
    day: date.day,
    hour: 23,
    minute: 59,
    second: 59,
  });

  return events.filter(
    (event) => event.date.isBetween(start, end) || event.endDate?.isBetween(start, end),
  );
};
