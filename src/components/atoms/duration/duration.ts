interface DurationIntervals {
  microseconds?: number;
  milliseconds?: number;
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
}

class Duration {
  private readonly _duration: number = 0;

  //#region Constants
  static microsecondsPerMillisecond = 1000;
  static millisecondsPerSecond = 1000;
  static secondsPerMinute = 60;
  static minutesPerHour = 60;
  static hoursPerDay = 24;

  static microsecondsPerSecond =
    Duration.microsecondsPerMillisecond * Duration.millisecondsPerSecond;
  static microsecondsPerMinute = Duration.microsecondsPerSecond * Duration.secondsPerMinute;
  static microsecondsPerHour = Duration.microsecondsPerMinute * Duration.minutesPerHour;
  static microsecondsPerDay = Duration.microsecondsPerHour * Duration.hoursPerDay;

  static millisecondsPerMinute = Duration.millisecondsPerSecond * Duration.secondsPerMinute;
  static millisecondsPerHour = Duration.millisecondsPerMinute * Duration.minutesPerHour;
  static millisecondsPerDay = Duration.millisecondsPerHour * Duration.hoursPerDay;

  static secondsPerHour = Duration.secondsPerMinute * Duration.minutesPerHour;
  static secondsPerDay = Duration.secondsPerHour * Duration.hoursPerDay;

  static minutesPerDay = Duration.minutesPerHour * Duration.hoursPerDay;

  static zero = new Duration({ seconds: 0 });
  //#endregion

  constructor({
    microseconds = 0,
    milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
  }: DurationIntervals) {
    this._duration =
      microseconds +
      milliseconds * Duration.microsecondsPerMillisecond +
      seconds * Duration.microsecondsPerSecond +
      minutes * Duration.microsecondsPerMinute +
      hours * Duration.microsecondsPerHour +
      days * Duration.microsecondsPerDay;
  }

  //#region Properties
  /**
   * The number of entire days spanned by this Duration.
   */
  get inDays() {
    return Math.floor(this._duration / Duration.microsecondsPerDay);
  }

  /**
   * The number of entire hours spanned by this Duration.
   */
  get inHours() {
    return Math.floor(this._duration / Duration.microsecondsPerHour);
  }

  /**
   * The number of whole microseconds spanned by this Duration.
   */
  get inMicroseconds() {
    return this._duration;
  }

  /**
   * The number of whole milliseconds spanned by this Duration.
   */
  get inMilliseconds() {
    return Math.floor(this._duration / Duration.microsecondsPerMillisecond);
  }

  /**
   * The number of whole minutes spanned by this Duration.
   */
  get inMinutes() {
    return Math.floor(this._duration / Duration.microsecondsPerMinute);
  }

  /**
   * The number of whole minutes spanned by this Duration.
   */
  get inSeconds() {
    return Math.floor(this._duration / Duration.microsecondsPerSecond);
  }

  /**
   * Whether this Duration is negative.
   */
  get isNegative() {
    return this._duration < 0;
  }
  //#endregion

  //#region Methods
  /**
   * Creates a new Duration representing the absolute length of this Duration.
   */
  public abs() {
    if (!this.isNegative) return this;
    return new Duration({ microseconds: Math.abs(this._duration) });
  }

  /**
   * Adds this Duration and other and returns the sum as a new Duration object.
   */
  public add(otherDuration: Duration) {
    return new Duration({ microseconds: this.inMicroseconds + otherDuration.inMicroseconds });
  }

  /**
   * Subtracts other from this Duration and returns the difference as a new Duration object.
   */
  public subtract(otherDuration: Duration) {
    return new Duration({ microseconds: this.inMicroseconds - otherDuration.inMicroseconds });
  }

  /**
   * Multiplies this Duration by the given factor and returns the result as a new Duration object.
   */
  public multiply(factor: number) {
    return new Duration({ microseconds: this.inMicroseconds * factor });
  }

  /**
   * Divides this Duration by the given quotient and returns the truncated result as a new Duration object.
   */
  public divide(factor: number) {
    return new Duration({ microseconds: Math.floor(this.inMicroseconds / factor) });
  }

  /**
   * Whether this Duration is shorter than other.
   */
  public isLesserThan(otherDuration: Duration) {
    return this._duration < otherDuration._duration;
  }

  /**
   * Whether this Duration is shorter than or equal to other.
   */
  public isLesserThanOrEqual(otherDuration: Duration) {
    return this._duration <= otherDuration._duration;
  }

  /**
   * Whether this Duration has the same length as other.
   */
  public isEqual(otherDuration: Duration) {
    return this._duration === otherDuration._duration;
  }

  /**
   * Whether this Duration is longer than other.
   */
  public isGreaterThan(otherDuration: Duration) {
    return this._duration > otherDuration._duration;
  }

  /**
   * Whether this Duration is longer than or equal to other.
   */
  public isGreaterThanOrEqual(otherDuration: Duration) {
    return this._duration >= otherDuration._duration;
  }

  /**
   * Whether this Duration is longer than or equal to other.
   */
  public opposite() {
    return new Duration({ microseconds: -this.inMicroseconds });
  }

  public toString(): string {
    function sixDigits(n: number): string {
      return n.toString().padStart(6, '0');
    }

    function twoDigits(n: number): string {
      return n.toString().padStart(2, '0');
    }

    if (this.inMicroseconds < 0) return `-${this.abs().toString()}`;

    const twoDigitMinutes = twoDigits(this.inMinutes % Duration.minutesPerHour);
    const twoDigitSeconds = twoDigits(this.inSeconds % Duration.secondsPerMinute);
    const sixDigitUs = sixDigits(this.inMicroseconds % Duration.microsecondsPerSecond);

    return `${this.inHours}:${twoDigitMinutes}:${twoDigitSeconds}.${sixDigitUs}`;
  }
  //#endregion
}

export default Duration;
