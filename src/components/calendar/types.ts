import DateTime from '../date-time';
import { DAYS, MONTHS, SupportedLocales } from './constants';

export type DaysType = typeof DAYS;
export type MonthsType = typeof MONTHS;

export type Day = DaysType[SupportedLocales][number];
export type Month = MonthsType[SupportedLocales][number];

export interface CalendarEvent {
  date: DateTime;
  title: string;
  endDate?: DateTime;
}
