import Margin from './margin';

describe('Molecules/Margin', () => {
  describe('.toCSSString method', () => {
    it('should return null when no value set', () => {
      // Since all other values default to null, it should return a Padding with all values to null.
      const padding = Margin.only({ top: null });

      expect(padding.toCSSString()).toBe(null);
    });

    it('should return correct value', () => {
      expect(Margin.only({ top: 12 }).toCSSString()).toEqual('margin-top: 12px;');
      expect(Margin.only({ right: 12 }).toCSSString()).toEqual('margin-right: 12px;');
      expect(Margin.only({ bottom: 12 }).toCSSString()).toEqual('margin-bottom: 12px;');
      expect(Margin.only({ left: 12 }).toCSSString()).toEqual('margin-left: 12px;');
      expect(Margin.only({ top: 12, bottom: 32 }).toCSSString()).toEqual(`margin-top: 12px;
margin-bottom: 32px;`);
      expect(Margin.only({ left: 12, right: 32 }).toCSSString()).toEqual(`margin-left: 12px;
margin-right: 32px;`);
      expect(Margin.all(32).toCSSString()).toEqual(`margin-left: 32px;
margin-right: 32px;
margin-top: 32px;
margin-bottom: 32px;`);
    });
  });

  describe('.toStyledCSS method', () => {
    it('should return null when no value set', () => {
      // Since all other values default to null, it should return a Padding with all values to null.
      const padding = Margin.only({ top: null });

      expect(padding.toStyledCSS()).toBe(null);
    });

    it('should return correct value', () => {
      expect(Margin.only({ top: 12 }).toStyledCSS()?.includes(`margin-top: 12px;`)).toBe(true);
    });
  });

  describe('.copyWith method', () => {
    it('should override correctly', () => {
      const { top, right, bottom, left } = Margin.all(32).copyWith({ top: 0 });

      expect(top).toEqual(0);
      expect(right).toEqual(32);
      expect(bottom).toEqual(32);
      expect(left).toEqual(32);
    });
  });

  describe('.zero method', () => {
    it('should override correctly', () => {
      const { top, right, bottom, left } = Margin.zero();

      expect(top).toEqual(0);
      expect(right).toEqual(0);
      expect(bottom).toEqual(0);
      expect(left).toEqual(0);
    });
  });
});
