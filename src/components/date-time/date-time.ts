import Duration from '../duration';

interface DateTimeConstructor {
  year: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
}

const _twoDigits = (n: number) => n.toString().padStart(2, '0');
const _threeDigits = (n: number) => n.toString().padStart(3, '0');
const _fourDigits = (n: number) => n.toString().padStart(4, '0');
const _sixDigits = (n: number) => n.toString().padStart(6, '0');

class DateTime {
  private readonly date: Date;

  constructor({
    year,
    month = 1,
    day = 1,
    hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
  }: DateTimeConstructor) {
    this.date = new Date(year, month - 1, day, hour, minute, second, millisecond);
  }

  //#region Constants
  // Months
  static january = 1;
  static february = 2;
  static march = 3;
  static april = 4;
  static may = 5;
  static june = 6;
  static july = 7;
  static august = 8;
  static september = 9;
  static october = 10;
  static november = 11;
  static december = 12;

  // days
  static monday = 1;
  static tuesday = 2;
  static wednesday = 3;
  static thursday = 4;
  static friday = 5;
  static saturday = 6;
  static sunday = 7;

  static daysPerWeek = 7;
  static monthsPerYear = 12;
  //#endregion

  //#region Constructors
  /**
   * Constructs a new [DateTime] instance with the given `millisecondsSinceEpoch`.
   */
  static fromMillisecondsSinceEpoch = (millisecondsSinceEpoch: number) => {
    const date = new Date(millisecondsSinceEpoch);

    return new DateTime({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds(),
    });
  };

  /**
   * Constructs a [DateTime] instance with current date and time in the local time zone.
   *
   * @example
   * const thisInstant = DateTime.now()
   */
  static now = () => {
    return DateTime.fromMillisecondsSinceEpoch(Date.now());
  };

  /**
   * Constructs a new [DateTime] instance based on `formattedString`.
   *
   * Throws a `EvalError` if the input string cannot be parsed
   */
  static parse(formattedString: string) {
    if (isNaN(Date.parse(formattedString)))
      throw new EvalError(`[DateTime] - Cannot parse string \`${formattedString}\``);
    return DateTime.fromMillisecondsSinceEpoch(Date.parse(formattedString));
  }

  /**
   * Constructs a new [DateTime] instance based on `formattedString`.
   *
   * Works like `parse` except that this function returns `null` where parse would throw a EvalError.
   */
  static tryParse(formattedString: string) {
    try {
      return this.parse(formattedString);
    } catch (e) {
      return null;
    }
  }
  //#endregion

  //#region Properties
  /**
   * The day of the month 1..31.
   */
  public get day() {
    return this.date.getDate();
  }

  /**
   * The hour of the day, expressed as in a 24-hour clock 0..23
   */
  public get hour() {
    return this.date.getHours();
  }

  /**
   * The millisecond 0...999.
   */
  public get millisecond() {
    return this.date.getMilliseconds();
  }

  /**
   * The number of milliseconds since the "Unix epoch" 1970-01-01T00:00:00Z (UTC).
   */
  public get millisecondsSinceEpoch() {
    return this.date.getTime();
  }

  /**
   * The minute 0...59.
   */
  public get minute() {
    return this.date.getMinutes();
  }

  /**
   * The month 1..12.
   */
  public get month() {
    return this.date.getMonth() + 1;
  }

  /**
   * The second 0...59.
   */
  public get second() {
    return this.date.getSeconds();
  }

  /**
   * The time zone name.
   */
  public get timeZoneName() {
    const match = this.date.toString().match(/([A-Z]{2,})/);
    return (match as RegExpMatchArray)[0];
  }

  /**
   * The time zone offset, which is the difference between local time and UTC.
   *
   * The offset is positive for time zones east of UTC.
   */
  public get timeZoneOffset() {
    // const duration = new Duration()
    const match = this.date.toString().match(/([+-]\d\d:?\d\d)/);
    const data = (match as RegExpMatchArray)[0];

    const [, hoursString, minutesString] = data.split(/([+-])(\d{2})(\d{2})/).filter(Boolean);
    let hours = parseInt(hoursString);
    const minutes = parseInt(minutesString);
    // hours = sign === '+' ? hours : -hours;

    return new Duration({ hours, minutes });
  }

  /**
   * The day of the week monday..sunday.
   */
  public get weekDay() {
    return (this.date.getDay() === 0 ? 7 : this.date.getDay()) as 1 | 2 | 3 | 4 | 5 | 6 | 7;
  }

  /**
   * The year.
   */
  public get year() {
    return this.date.getFullYear();
  }
  //#endregion

  //#region Methods
  /**
   * Returns a new [DateTime] instance with duration added to this.
   */
  public add(duration: Duration) {
    const time = this.millisecondsSinceEpoch;
    const newDate = new Date(time + duration.inMilliseconds);
    return DateTime.fromMillisecondsSinceEpoch(newDate.getTime());
  }

  /**
   * Returns a [Duration] with the difference when subtracting other from this.
   *
   * The returned [Duration] will be negative if `other` occurs after this.
   */
  public difference(other: DateTime) {
    const d1 = this.millisecondsSinceEpoch;
    const d2 = other.millisecondsSinceEpoch;

    return Duration.milliseconds(d1 - d2);
  }

  /**
   * Returns true if this occurs after other.
   *
   * @example
   * const now = DateTime.now()
   * const later = now.add(Duration.seconds(5))
   *
   * assert(later.isAfter(now))
   * assert(!now.isBefore(now))
   */
  public isAfter(other: DateTime) {
    const d1 = this.millisecondsSinceEpoch;
    const d2 = other.millisecondsSinceEpoch;

    return d1 - d2 > 0;
  }

  /**
   * Returns true if this occurs at the same moment as other.
   *
   * @example
   * const now = DateTime.now();
   * const later = now.add(Duration.seconds(5));
   * assert(!later.isAtSameMomentAs(now));
   * assert(now.isAtSameMomentAs(now));
   */
  public isAtSameMomentAs(other: DateTime) {
    const d1 = this.millisecondsSinceEpoch;
    const d2 = other.millisecondsSinceEpoch;

    return d1 - d2 === 0;
  }

  /**
   * Returns true if this occurs after other.
   *
   * @example
   * const now = DateTime.now()
   * const earlier = now.subtract(Duration.seconds(5))
   *
   * assert(earlier.isBefore(now))
   * assert(!now.isBefore(now))
   */
  public isBefore(other: DateTime) {
    const d1 = this.millisecondsSinceEpoch;
    const d2 = other.millisecondsSinceEpoch;

    return d1 - d2 < 0;
  }

  /**
   * Returns a new [DateTime] instance with a different day.
   */
  public setDay(nextDay: number) {
    return new DateTime({
      year: this.year,
      month: this.month,
      day: nextDay,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
    });
  }

  /**
   * Returns a new [DateTime] instance with duration subtracted from this.
   *
   * @example
   * const today = DateTime.now()
   * const fiftyDaysAgo = today.subtract(Duration.days(50))
   */
  public subtract(duration: Duration) {
    const time = this.millisecondsSinceEpoch;
    const newDate = new Date(time - duration.inMilliseconds);
    return DateTime.fromMillisecondsSinceEpoch(newDate.getTime());
  }

  /**
   * Returns an ISO-8601 full-precision extended format representation.
   *
   * The format is `yyyy-MM-ddTHH:mm:ss.mmmZ` for UTC time, and `yyyy-MM-ddTHH:mm:ss.mmm` (no trailing "Z") for local/non-UTC time, where:
   */
  public toIso8601String() {
    const y =
      this.year >= -9999 && this.year <= 9999 ? _fourDigits(this.year) : _sixDigits(this.year);
    const m = _twoDigits(this.month);
    const d = _twoDigits(this.day);
    const h = _twoDigits(this.hour);
    const min = _twoDigits(this.minute);
    const sec = _twoDigits(this.second);
    const ms = _threeDigits(this.millisecond);
    // if (isUtc) {
    //   return `${y}-${m}-${d}T${h}:${min}:${sec}.${ms}Z`;
    // } else {
    //   return `${y}-${m}-${d}T${h}:${min}:${sec}.${ms}`;
    // }
    return `${y}-${m}-${d}T${h}:${min}:${sec}.${ms}`;
  }
  //#endregion

  //#region Utils
  public getFirstDayOfMonthWeek = () => {
    // First we go to the first day of the month
    let nextDate = this.setDay(1);

    /**
     * While date is not monday, we go in past.
     * We finally get first monday of month's first week
     */
    while (nextDate.weekDay !== 1) {
      nextDate = nextDate.subtract(Duration.days(1));
    }

    return nextDate;
  };

  /**
   * Get an array of all [DateTime] between the first day of the first week of the month, and the last sunday
   * of the last week of the month.
   */
  public getDaysInMonth = () => {
    // First we get the first day of the month week.
    let firstDayOfMonthWeek = this.getFirstDayOfMonthWeek();

    // Initialize a new array with the first date.
    // It will soon contain other month dates.
    const daysInMonth = [firstDayOfMonthWeek];

    // Loop while the month is still the same OR the day IS NOT sunday.
    // So we get complete days between first day of first week and last day of last week.
    while (firstDayOfMonthWeek.month === this.month || firstDayOfMonthWeek.weekDay !== 7) {
      firstDayOfMonthWeek = firstDayOfMonthWeek.add(Duration.days(1));

      // But insert a duplicated date so when our `date` variable is mutated is doesn't impact
      // our already pushed dates.
      daysInMonth.push(firstDayOfMonthWeek);
    }

    // Finally return the result !
    return daysInMonth;
  };

  /**
   * Check if a given `day` [DateTime] is in the `other` [DateTime].
   */
  public isInSameMonth = (other: DateTime) => this.month === other.month;

  /**
   * Check if this instance of [DateTime] is today.
   */
  public isToday = () => {
    const today = DateTime.now();

    return today.year === this.year && today.month === this.month && today.day === this.day;
  };
  //#endregion
}

export default DateTime;
