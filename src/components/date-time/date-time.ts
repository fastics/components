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

interface DateTimeSetOptions {
  year?: number;
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
   *
   * @example
   * const dateTime = DateTime.fromMillisecondsSinceEpoch(690678000000) // 1991-11-21
   * const dateTime = DateTime.fromMillisecondsSinceEpoch(new Date(1991, 10, 21).getTime())
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
   * Throws a `EvalError` if the input string cannot be parsed.
   *
   * @example
   * const dateTime = DateTime.parse("1991-11-21")
   * const badDate = DateTime.parse("hello") // throw EvalError
   *
   * @throws EvalError
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
   *
   * @example
   * const dateTime = DateTime.tryParse("1991-11-21") // OK
   * const badDate = DateTime.tryParse("hello") // returns null
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
   *
   * @example
   * const thisDay = DateTime.now().day // 8
   */
  public get day() {
    return this.date.getDate();
  }

  /**
   * The hour of the day, expressed as in a 24-hour clock 0..23
   *
   * @example
   * const thisHour = DateTime.now().hour // 21
   */
  public get hour() {
    return this.date.getHours();
  }

  /**
   * The millisecond 0...999.
   *
   * @example
   * const thisMs = DateTime.now().millisecond // 923
   */
  public get millisecond() {
    return this.date.getMilliseconds();
  }

  /**
   * The number of milliseconds since the "Unix epoch" 1970-01-01T00:00:00Z (UTC).
   *
   * @example
   * const msEpoch = DateTime.now().millisecondsSinceEpoch // 1628450223122
   */
  public get millisecondsSinceEpoch() {
    return this.date.getTime();
  }

  /**
   * The minute 0...59.
   *
   * @example
   * const thisMinutes = DateTime.now().minute // 17
   */
  public get minute() {
    return this.date.getMinutes();
  }

  /**
   * The month 1..12.
   *
   * @example
   * const thisMonth = DateTime.now().month // 8
   */
  public get month() {
    return this.date.getMonth() + 1;
  }

  /**
   * The second 0...59.
   *
   * @example
   * const thisSecond = DateTime.now().second // 21
   */
  public get second() {
    return this.date.getSeconds();
  }

  /**
   * The time zone name.
   *
   * @example
   * const tzName = DateTime.now().timeZoneName // GMT
   */
  public get timeZoneName() {
    const match = this.date.toString().match(/([A-Z]{2,})/);
    return (match as RegExpMatchArray)[0];
  }

  /**
   * The time zone offset, which is the difference between local time and UTC.
   *
   * The offset is positive for time zones east of UTC.
   *
   * @example
   * const tzOffset = DateTime.now().timeZoneOffset // Duration({hours: 2})
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
   * The day of the week [DateTime.monday]..[DateTime.sunday].
   *
   * @example
   * const weekDay = DateTime.now().weekDay // DateTime.sunday or 7
   */
  public get weekDay() {
    return (this.date.getDay() === 0 ? 7 : this.date.getDay()) as 1 | 2 | 3 | 4 | 5 | 6 | 7;
  }

  /**
   * The year.
   *
   * @example
   * const year = DateTime.now().year // 2021
   */
  public get year() {
    return this.date.getFullYear();
  }
  //#endregion

  //#region Methods
  /**
   * Returns a new [DateTime] instance with duration added to this.
   *
   * @example
   * const current = DateTime.now() // 2021-08-08
   * const oneYearLater = current.add(Duration.years(1)) // 2022-08-08
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
   *
   * @example
   * const date1 = new DateTime({ year: 2021, month: 8, day: 6 });
   * const date2 = new DateTime({ year: 2021, month: 8, day: 9 });
   *
   * const duration = date1.difference(date2);
   * const duration2 = date2.difference(date1);
   *
   * assert(duration.inDays === 3)
   * assert(duration2.inDays === -3)
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
   * Returns true if this occurs at same moment or after other.
   *
   * @example
   * const now = DateTime.now();
   * const earlier = now.subtract(Duration.days(2));
   * const later = now.add(Duration.days(2));
   *
   * assert(now.isSameOrAfter(now))
   * assert(now.isSameOrAfter(earlier))
   * assert(!now.isSameOrAfter(later))
   */
  public isSameOrAfter(other: DateTime) {
    return this.isAfter(other) || this.isAtSameMomentAs(other);
  }

  /**
   * Returns true if this occurs at same moment or before other.
   *
   * @example
   * const now = DateTime.now();
   * const earlier = now.subtract(Duration.days(2));
   * const later = now.add(Duration.days(2));
   *
   * assert(now.isSameOrBefore(now))
   * assert(now.isSameOrBefore(later))
   * assert(!now.isSameOrBefore(earlier))
   */
  public isSameOrBefore(other: DateTime) {
    return this.isBefore(other) || this.isAtSameMomentAs(other);
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
   * Returns true if this occurs between date1 and date2, or between date2 and date1.
   *
   * @example
   * const now = DateTime.now();
   * const earlier = now.subtract(Duration.days(2));
   * const later = now.add(Duration.days(2));
   *
   * assert(now.isBetween(earlier, later))
   * assert(now.isBetween(later, earlier))
   * assert(!later.isBetween(now, earlier))
   * assert(!earlier.isBetween(now, later))
   * assert(now.isBetween(now, later))
   */
  public isBetween(date1: DateTime, date2: DateTime) {
    return (
      (this.isSameOrAfter(date1) && this.isSameOrBefore(date2)) ||
      (this.isSameOrBefore(date1) && this.isSameOrAfter(date2))
    );
  }

  /**
   * Returns a new [DateTime] instance with different parameters.
   *
   * @example
   * const dateTime = DateTime.now() // 2021-08-08
   * const firstDayOfMonth = dateTime.set({ day: 1 }) // 2021-08-01
   */
  public set(dateOptions: DateTimeSetOptions) {
    return new DateTime({
      year: dateOptions.year ?? this.year,
      month: dateOptions.month ?? this.month,
      day: dateOptions.day ?? this.day,
      hour: dateOptions.hour ?? this.hour,
      minute: dateOptions.minute ?? this.minute,
      second: dateOptions.second ?? this.second,
      millisecond: dateOptions.millisecond ?? this.millisecond,
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
    let nextDate = this.set({ day: 1 });

    /**
     * While date is not monday, we go in past.
     * We finally get first monday of month's first week
     */
    while (nextDate.weekDay !== 1) {
      nextDate = nextDate.subtract(Duration.days(1));
    }

    return nextDate;
  };

  public getLastDayOfMonthWeek = () => {
    const daysInMonth = this.getDaysInMonth();
    return daysInMonth.reverse()[0];
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
  public getIsInSameMonth = (other: DateTime) => this.month === other.month;

  /**
   * Check if this instance of [DateTime] is today.
   */
  public getIsToday = () => {
    const today = DateTime.now();

    return today.year === this.year && today.month === this.month && today.day === this.day;
  };
  //#endregion
}

export default DateTime;
