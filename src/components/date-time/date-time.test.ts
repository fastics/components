import Duration from '../duration';
import DateTime from './date-time';

describe('DateTime', () => {
  describe('Constructors', () => {
    afterEach(() => jest.restoreAllMocks());

    it('should construct with default values', () => {
      const date = new DateTime({ year: 2021 });

      expect(date.year).toEqual(2021);
      expect(date.month).toEqual(1);
      expect(date.day).toEqual(1);
    });

    it('`fromMillisecondsSinceEpoch` should return correct date', () => {
      const now = new Date(2021, 7, 6);
      const date = DateTime.fromMillisecondsSinceEpoch(now.getTime());

      expect(date.year).toEqual(2021);
      expect(date.month).toEqual(8);
      expect(date.day).toEqual(6);
    });

    it('`now` should return today', () => {
      // Since it uses `Date.now()` and the test can be ran anytime, we have to mock it !
      jest.spyOn(Date, 'now').mockImplementationOnce(() => new Date(2021, 7, 5).getTime());

      const now = DateTime.now();

      expect(now.year).toEqual(2021);
      expect(now.month).toEqual(8);
      expect(now.day).toEqual(5);
    });

    it('`parse` should work', () => {
      const dateString = '2021-08-06';
      const date = DateTime.parse(dateString);

      expect(date.year).toEqual(2021);
      expect(date.month).toEqual(8);
      expect(date.day).toEqual(6);
    });

    it('`parse` should throw if cannot be parsed', () => {
      const dateString = 'hello testing world';

      expect(() => {
        DateTime.parse(dateString);
      }).toThrow(EvalError('[DateTime] - Cannot parse string `hello testing world`'));
    });

    it('`tryParse` should work', () => {
      const dateString = '2021-08-06';
      const date = DateTime.tryParse(dateString);

      expect(date?.year).toEqual(2021);
      expect(date?.month).toEqual(8);
      expect(date?.day).toEqual(6);
    });

    it('`tryParse` should not throw if cannot be parsed', () => {
      const dateString = 'hello testing world';

      expect(() => {
        DateTime.tryParse(dateString);
      }).not.toThrow();

      expect(DateTime.tryParse(dateString)).toBe(null);
    });
  });

  describe('Properties', () => {
    const date = new DateTime({
      year: 2021,
      month: 8,
      day: 6,
      hour: 11,
      minute: 1,
      second: 24,
      millisecond: 912,
    });

    it('`year` should return correct value', () => {
      expect(date.year).toEqual(2021);
    });

    it('`month` should return correct value', () => {
      expect(date.month).toEqual(8);
    });

    it('`day` should return correct value', () => {
      expect(date.day).toEqual(6);
    });

    it('`hour` should return correct value', () => {
      expect(date.hour).toEqual(11);
    });

    it('`minute` should return correct value', () => {
      expect(date.minute).toEqual(1);
    });

    it('`second` should return correct value', () => {
      expect(date.second).toEqual(24);
    });

    it('`millisecond` should return correct value', () => {
      expect(date.millisecond).toEqual(912);
    });

    it('`weekDay` should return correct value', () => {
      expect(date.weekDay).toEqual(5);
    });

    it('`millisecondsSinceEpoch` should return correct value', () => {
      expect(date.millisecondsSinceEpoch).toEqual(1628240484912);
    });

    it('`timeZoneName` should return correct value', () => {
      expect(date.timeZoneName).toEqual('GMT');
    });

    it('`timeZoneOffset` should return correct value', () => {
      expect(date.timeZoneOffset).toEqual(Duration.hours(2));
    });
  });

  describe('Methods', () => {
    it('`add` should add a date', () => {
      // For example, I can set month my using constant `DateTime.august`
      const date = new DateTime({ year: 2021, month: DateTime.august, day: 6 });

      const duration = Duration.days(3);

      const finalDate = date.add(duration);

      expect(finalDate.year).toEqual(2021);
      expect(finalDate.month).toEqual(8);
      expect(finalDate.day).toEqual(9);
    });

    it('`subtract` should subtract a date', () => {
      // Date is 2021-08-06
      // 50 days ago was 2021-06-17
      const date = new DateTime({ year: 2021, month: 8, day: 6 });
      const duration = Duration.days(50);

      const finalDate = date.subtract(duration);

      expect(finalDate.year).toEqual(2021);
      expect(finalDate.month).toEqual(6);
      expect(finalDate.day).toEqual(17);

      const expected50daysAgo = new DateTime({ year: 2021, month: 6, day: 17 });

      expect(finalDate.isAtSameMomentAs(expected50daysAgo)).toBe(true);
    });

    it('`setDay` should return correct value', () => {
      const date = new DateTime({ year: 2021, month: 8, day: 6 });
      const nextDate = date.setDay(1);

      expect(date.day).toBe(6);
      expect(nextDate.year).toBe(2021);
      expect(nextDate.month).toBe(8);
      expect(nextDate.day).toBe(1);
    });

    it('`difference` should return correct value', () => {
      const date1 = new DateTime({ year: 2021, month: 8, day: 6 });
      const date2 = new DateTime({ year: 2021, month: 8, day: 9 });

      const duration1 = date1.difference(date2);
      const duration2 = date2.difference(date1);

      expect(duration1.inDays).toEqual(-3);
      expect(duration2.inDays).toEqual(3);
    });

    it('`isAfter` should return true', () => {
      const now = DateTime.now();
      const later = now.add(Duration.seconds(5));

      expect(later.isAfter(now)).toBe(true);
    });

    it('`isAfter` should return false', () => {
      const now = DateTime.now();
      const later = now.add(Duration.seconds(5));

      expect(now.isAfter(later)).toBe(false);
    });

    it('`isAtSameMomentAs` should return correct value', () => {
      const now = DateTime.now();
      const later = now.add(Duration.seconds(5));

      expect(now.isAtSameMomentAs(later)).toBe(false);
      expect(now.isAtSameMomentAs(now)).toBe(true);
    });

    it('`isBefore` should return correct value', () => {
      const now = DateTime.now();
      const later = now.add(Duration.seconds(5));

      expect(now.isBefore(later)).toBe(true);
      expect(later.isBefore(now)).toBe(false);
      expect(now.isBefore(now)).toBe(false);
    });

    it('`toIso8601String` should work', () => {
      expect(new DateTime({ year: 2021, month: 8, day: 6 }).toIso8601String()).toBe(
        '2021-08-06T00:00:00.000',
      );
      expect(
        new DateTime({
          year: 2021,
          month: 8,
          day: 6,
          hour: 9,
          minute: 36,
          second: 21,
          millisecond: 123,
        }).toIso8601String(),
      ).toBe('2021-08-06T09:36:21.123');
      expect(
        new DateTime({
          year: 122021,
          month: 8,
          day: 6,
          hour: 9,
          minute: 36,
          second: 21,
          millisecond: 123,
        }).toIso8601String(),
      ).toBe('122021-08-06T09:36:21.123');
    });
  });

  describe('Utils', () => {
    it('`getFirstDayOfMonthWeek` should return correct value', () => {
      const date = new DateTime({ year: 2021, month: 8, day: 6 });
      const expectedDate = new DateTime({ year: 2021, month: 7, day: 26 });

      expect(date.getFirstDayOfMonthWeek().isAtSameMomentAs(expectedDate)).toBe(true);
    });

    it('`getDaysInMonth` should return correct value', () => {
      const date = new DateTime({ year: 2021, month: 8, day: 6 });
      const expectedDates = [
        new DateTime({ year: 2021, month: 7, day: 26 }),
        new DateTime({ year: 2021, month: 7, day: 27 }),
        new DateTime({ year: 2021, month: 7, day: 28 }),
        new DateTime({ year: 2021, month: 7, day: 29 }),
        new DateTime({ year: 2021, month: 7, day: 30 }),
        new DateTime({ year: 2021, month: 7, day: 31 }),
        new DateTime({ year: 2021, month: 8, day: 1 }),
        new DateTime({ year: 2021, month: 8, day: 2 }),
        new DateTime({ year: 2021, month: 8, day: 3 }),
        new DateTime({ year: 2021, month: 8, day: 4 }),
        new DateTime({ year: 2021, month: 8, day: 5 }),
        new DateTime({ year: 2021, month: 8, day: 6 }),
        new DateTime({ year: 2021, month: 8, day: 7 }),
        new DateTime({ year: 2021, month: 8, day: 8 }),
        new DateTime({ year: 2021, month: 8, day: 9 }),
        new DateTime({ year: 2021, month: 8, day: 10 }),
        new DateTime({ year: 2021, month: 8, day: 11 }),
        new DateTime({ year: 2021, month: 8, day: 12 }),
        new DateTime({ year: 2021, month: 8, day: 13 }),
        new DateTime({ year: 2021, month: 8, day: 14 }),
        new DateTime({ year: 2021, month: 8, day: 15 }),
        new DateTime({ year: 2021, month: 8, day: 16 }),
        new DateTime({ year: 2021, month: 8, day: 17 }),
        new DateTime({ year: 2021, month: 8, day: 18 }),
        new DateTime({ year: 2021, month: 8, day: 19 }),
        new DateTime({ year: 2021, month: 8, day: 20 }),
        new DateTime({ year: 2021, month: 8, day: 21 }),
        new DateTime({ year: 2021, month: 8, day: 22 }),
        new DateTime({ year: 2021, month: 8, day: 23 }),
        new DateTime({ year: 2021, month: 8, day: 24 }),
        new DateTime({ year: 2021, month: 8, day: 25 }),
        new DateTime({ year: 2021, month: 8, day: 26 }),
        new DateTime({ year: 2021, month: 8, day: 27 }),
        new DateTime({ year: 2021, month: 8, day: 28 }),
        new DateTime({ year: 2021, month: 8, day: 29 }),
        new DateTime({ year: 2021, month: 8, day: 30 }),
        new DateTime({ year: 2021, month: 8, day: 31 }),
        new DateTime({ year: 2021, month: 9, day: 1 }),
        new DateTime({ year: 2021, month: 9, day: 2 }),
        new DateTime({ year: 2021, month: 9, day: 3 }),
        new DateTime({ year: 2021, month: 9, day: 4 }),
        new DateTime({ year: 2021, month: 9, day: 5 }),
      ];

      expect(JSON.stringify(date.getDaysInMonth())).toEqual(JSON.stringify(expectedDates));
    });
  });
});
