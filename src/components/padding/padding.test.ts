import Padding from './padding';

describe('Padding', () => {
  describe('.toCSSString method', () => {
    it('should return null when no value set', () => {
      // Since all other values default to null, it should return a Padding with all values to null.
      const padding = Padding.only({ top: null });

      expect(padding.toCSSString()).toBe(null);
    });

    it('should return correct value', () => {
      expect(Padding.only({ top: 12 }).toCSSString()).toEqual('padding-top: 12px;');
      expect(Padding.only({ right: 12 }).toCSSString()).toEqual('padding-right: 12px;');
      expect(Padding.only({ bottom: 12 }).toCSSString()).toEqual('padding-bottom: 12px;');
      expect(Padding.only({ left: 12 }).toCSSString()).toEqual('padding-left: 12px;');
      expect(Padding.only({ top: 12, bottom: 32 }).toCSSString()).toEqual(`padding-top: 12px;
padding-bottom: 32px;`);
      expect(Padding.only({ left: 12, right: 32 }).toCSSString()).toEqual(`padding-left: 12px;
padding-right: 32px;`);
      expect(Padding.all(32).toCSSString()).toEqual(`padding-left: 32px;
padding-right: 32px;
padding-top: 32px;
padding-bottom: 32px;`);
    });
  });

  describe('.toStyledCSS method', () => {
    it('should return null when no value set', () => {
      // Since all other values default to null, it should return a Padding with all values to null.
      const padding = Padding.only({ top: null });

      expect(padding.toStyledCSS()).toBe(null);
    });

    it('should return correct value', () => {
      expect(Padding.only({ top: 12 }).toStyledCSS()?.includes(`padding-top: 12px;`)).toBe(true);
    });
  });

  describe('.copyWith method', () => {
    it('should override correctly', () => {
      const { top, right, bottom, left } = Padding.all(32).copyWith({ top: 0 });

      expect(top).toEqual(0);
      expect(right).toEqual(32);
      expect(bottom).toEqual(32);
      expect(left).toEqual(32);
    });
  });
});
