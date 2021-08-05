/**
 * Get the first monday of first week of month.
 */
export const getFirstDayOfMonthWeek = (monthDate: Date) => {
  const date = new Date(monthDate);

  // First we go to the first day of the month
  date.setDate(1);

  /**
   * While date is not monday, we go in past.
   * We finally get first monday of month's first week
   *
   * 0 - sunday
   * 1 - monday
   * 2 - tuesday
   * 3 - wednesday
   * 4 - thursday
   * 5 - friday
   * 6 - saturday
   */
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
  }

  return date;
};

/**
 * Get an array of all dates between the first day of the first week of the month, and the last sunday
 * of the last week of the month.
 */
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

/**
 * Check if a given `day` Date is in the `monthDate` Date.
 * Basically it aims to stripe the days that aren't in current month.
 */
export const isInCurrentMonth = (day: Date, monthDate: Date) =>
  day.getMonth() === monthDate.getMonth();

/**
 * Check is a date is today.
 * It's sad that JavaScript does not do it by default.
 */
export const isToday = (date: Date) => {
  const today = new Date();
  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
};
