export const getFirstDayOfMonthWeek = (monthDate: Date) => {
  const date = new Date(monthDate);

  // First we go to the first day of the month
  date.setDate(1);

  /**
   * This variable holds the first day of month as day (day name).
   * 0 - sunday
   * 1 - monday
   * 2 - tuesday
   * 3 - wednesday
   * 4 - thursday
   * 5 - friday
   * 6 - saturday
   */
  // const day = date.getDay();

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
  }

  return date;
};

export const getDaysInMonth = (monthDate: Date) => {
  // First we get the first day of the month week.
  const firstDayOfMonthWeek = getFirstDayOfMonthWeek(monthDate);

  // We duplicate this date to avoid mutating it.
  let date = new Date(firstDayOfMonthWeek);

  // Initialize a new array with the first date.
  // It will soon contain other month dates.
  const daysInMonth = [firstDayOfMonthWeek];

  // Loop while the month is still the same OR the day IS NOT sunday.
  // So we get complete days between first day of first week and last day of last week.
  while (date.getMonth() === monthDate.getMonth() || date.getDay() !== 0) {
    // Mutate our date, to it can continue.
    date.setDate(date.getDate() + 1);

    // But insert a duplicated date so when our `date` variable is mutated is doesn't impact
    // our already pushed dates.
    daysInMonth.push(new Date(date));
  }

  // Finally return the result !
  return daysInMonth;
};

export const isInCurrentMonth = (day: Date, monthDate: Date) =>
  day.getMonth() === monthDate.getMonth();

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
};
