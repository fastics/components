import DateTime from '../date-time';
import { CalendarEvent } from './types';

export const filterCalendarEvents = (month: DateTime, events: CalendarEvent[]) => {
  const firstDayOfFirstMonthWeek = month.getFirstDayOfMonthWeek();
  const lastDayOfFirstMonthWeek = month.getLastDayOfMonthWeek();

  return events.filter(
    (event) =>
      event.date.isBetween(firstDayOfFirstMonthWeek, lastDayOfFirstMonthWeek) ||
      event.endDate?.isBetween(firstDayOfFirstMonthWeek, lastDayOfFirstMonthWeek),
  );
};

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
