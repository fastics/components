import Duration from './duration';

describe('Atoms/Duration', function () {
  describe('initialization', () => {
    it('should correctly work with microseconds', () => {
      expect(new Duration({ microseconds: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ microseconds: 500 }).inMicroseconds).toEqual(500);
    });

    it('should correctly work with milliseconds', () => {
      expect(new Duration({ milliseconds: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ milliseconds: 500 }).inMicroseconds).toEqual(500000);
    });

    it('should correctly work with seconds', () => {
      expect(new Duration({ seconds: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ seconds: 20 }).inMicroseconds).toEqual(20000000);
    });

    it('should correctly work with minutes', () => {
      expect(new Duration({ minutes: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ minutes: 20 }).inMicroseconds).toEqual(1200000000);
    });

    it('should correctly work with hours', () => {
      expect(new Duration({ hours: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ hours: 2 }).inMicroseconds).toEqual(7200000000);
    });

    it('should correctly work with days', () => {
      expect(new Duration({ days: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ days: 2 }).inMicroseconds).toEqual(172800000000);
    });

    it('should correctly initialize with zero', () => {
      expect(Duration.zero.inMicroseconds).toEqual(0);
    });

    it('should successfully mix duration units', () => {
      expect(
        new Duration({
          microseconds: 50,
          milliseconds: 200,
          seconds: 20,
          minutes: 2,
          hours: 2,
          days: 1,
        }).inMicroseconds,
      ).toEqual(93740200050);
    });
  });

  describe('properties', () => {
    it('inMicroseconds should return correct value', () => {
      expect(Duration.zero.inHours).toEqual(0);
      expect(new Duration({ milliseconds: 0 }).inMicroseconds).toEqual(0);
      expect(new Duration({ milliseconds: 120 }).inMicroseconds).toEqual(120000);
      expect(new Duration({ milliseconds: 2 }).inMicroseconds).toEqual(2000);
    });

    it('inDays should return correct value', () => {
      expect(Duration.zero.inDays).toEqual(0);
      expect(new Duration({ hours: 24 }).inDays).toEqual(1);
      expect(new Duration({ hours: 29 }).inDays).toEqual(1);
    });

    it('inHours should return correct value', () => {
      expect(Duration.zero.inHours).toEqual(0);
      expect(new Duration({ minutes: 24 }).inHours).toEqual(0);
      expect(new Duration({ minutes: 120 }).inHours).toEqual(2);
      expect(new Duration({ minutes: 140 }).inHours).toEqual(2);
    });

    it('inMilliseconds should return correct value', () => {
      expect(Duration.zero.inMilliseconds).toEqual(0);
      expect(new Duration({ seconds: 0 }).inMilliseconds).toEqual(0);
      expect(new Duration({ seconds: 2 }).inMilliseconds).toEqual(2000);
    });

    it('inMinutes should return correct value', () => {
      expect(Duration.zero.inMinutes).toEqual(0);
      expect(new Duration({ seconds: 0 }).inMinutes).toEqual(0);
      expect(new Duration({ seconds: 59 }).inMinutes).toEqual(0);
      expect(new Duration({ seconds: 64 }).inMinutes).toEqual(1);
      expect(new Duration({ hours: 4 }).inMinutes).toEqual(240);
    });

    it('inSeconds should return correct value', () => {
      expect(Duration.zero.inSeconds).toEqual(0);
      expect(new Duration({ seconds: 0 }).inSeconds).toEqual(0);
      expect(new Duration({ milliseconds: 900 }).inSeconds).toEqual(0);
      expect(new Duration({ milliseconds: 1300 }).inSeconds).toEqual(1);
      expect(new Duration({ minutes: 2 }).inSeconds).toEqual(120);
      expect(new Duration({ hours: 2 }).inSeconds).toEqual(7200);
    });

    it('isNegative should return correct value', () => {
      expect(Duration.zero.isNegative).toBe(false);
      expect(new Duration({ seconds: -1 }).isNegative).toBe(true);
      expect(new Duration({ seconds: 2 }).isNegative).toBe(false);
    });
  });

  describe('methods', () => {
    it('abs() should return correct value', () => {
      expect(Duration.zero.abs().inMicroseconds).toEqual(0);
      expect(new Duration({ seconds: 1 }).abs().inMicroseconds).toEqual(1000000);
      expect(new Duration({ seconds: -1 }).inMicroseconds).toEqual(-1000000);
      expect(new Duration({ seconds: -1 }).abs().inMicroseconds).toEqual(1000000);
    });
  });

  describe('operators', () => {
    it('add() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ milliseconds: 200 });

      const result = duration1.add(duration2);

      expect(result.inMicroseconds).toEqual(1200000);
      // Below we check that other durations are untouched.
      expect(duration1.inMicroseconds).toEqual(1000000);
      expect(duration2.inMicroseconds).toEqual(200000);
    });

    it('subtract() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ milliseconds: 200 });

      const result = duration1.subtract(duration2);

      expect(result.inMicroseconds).toEqual(800000);
      // Below we check that other durations are untouched.
      expect(duration1.inMicroseconds).toEqual(1000000);
      expect(duration2.inMicroseconds).toEqual(200000);
    });

    it('multiply() should return correct value', () => {
      const duration = new Duration({ seconds: 1 });

      const result = duration.multiply(2);

      expect(result.inMicroseconds).toEqual(2000000);
      expect(result.inSeconds).toEqual(2);
      // Below we check that other duration is untouched.
      expect(duration.inMicroseconds).toEqual(1000000);
    });

    it('divide() should return correct value', () => {
      const duration = new Duration({ seconds: 1 });

      const result = duration.divide(2);

      expect(result.inMicroseconds).toEqual(500000);
      expect(result.inMilliseconds).toEqual(500);
      expect(result.inSeconds).toEqual(0);
      // Below we check that other duration is untouched.
      expect(duration.inMicroseconds).toEqual(1000000);

      // Check that it's correctly truncated.
      // The result should be 398,406374502
      expect(duration.divide(2.51).inMilliseconds).toEqual(398);
    });

    it('isLesserThan() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ microseconds: 1000000 }); // 1 second
      const duration3 = new Duration({ seconds: 2 });

      expect(duration1.isLesserThan(duration2)).toBe(false);
      expect(duration1.isLesserThan(duration3)).toBe(true);
      expect(duration2.isLesserThan(duration3)).toBe(true);
      expect(duration3.isLesserThan(duration2)).toBe(false);
    });

    it('isLesserThanOrEqual() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ microseconds: 1000000 }); // 1 second
      const duration3 = new Duration({ seconds: 2 });

      expect(duration1.isLesserThanOrEqual(duration2)).toBe(true);
      expect(duration1.isLesserThanOrEqual(duration3)).toBe(true);
      expect(duration2.isLesserThanOrEqual(duration3)).toBe(true);
      expect(duration3.isLesserThanOrEqual(duration2)).toBe(false);
    });

    it('isEqual() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ microseconds: 1000000 }); // 1 second
      const duration3 = new Duration({ seconds: 2 });

      expect(duration1.isEqual(duration2)).toBe(true);
      expect(duration1.isEqual(duration3)).toBe(false);
      expect(duration2.isEqual(duration3)).toBe(false);
      expect(duration3.isEqual(duration2)).toBe(false);
      expect(duration2.isEqual(duration1)).toBe(true);
    });

    it('isGreaterThan() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ microseconds: 1000000 }); // 1 second
      const duration3 = new Duration({ seconds: 2 });

      expect(duration1.isGreaterThan(duration2)).toBe(false);
      expect(duration1.isGreaterThan(duration3)).toBe(false);
      expect(duration2.isGreaterThan(duration3)).toBe(false);
      expect(duration3.isGreaterThan(duration2)).toBe(true);
    });

    it('isGreaterThanOrEqual() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ microseconds: 1000000 }); // 1 second
      const duration3 = new Duration({ seconds: 2 });

      expect(duration1.isGreaterThanOrEqual(duration2)).toBe(true);
      expect(duration1.isGreaterThanOrEqual(duration3)).toBe(false);
      expect(duration2.isGreaterThanOrEqual(duration3)).toBe(false);
      expect(duration3.isGreaterThanOrEqual(duration2)).toBe(true);
    });

    it('opposite() should return correct value', () => {
      const duration1 = new Duration({ seconds: 1 });
      const duration2 = new Duration({ microseconds: -1000000 }); // 1 second
      const duration3 = new Duration({ seconds: 2 });

      expect(duration1.opposite().inSeconds).toBe(-1);
      expect(duration2.opposite().inSeconds).toBe(1);
      expect(duration3.opposite().inSeconds).toBe(-2);
    });

    it('toString() should return correct value', () => {
      const duration1 = new Duration({ days: 1, hours: 1, minutes: 33, microseconds: 500 });
      const duration2 = new Duration({ days: 0, hours: 1, minutes: 10, microseconds: 500 });
      const duration3 = new Duration({ days: -1 });

      expect(duration1.toString()).toEqual('25:33:00.000500');
      expect(duration2.toString()).toEqual('1:10:00.000500');
      expect(duration3.toString()).toEqual('-24:00:00.000000');
    });
  });
});
