import AbstractEdgeInsets from './edge-insets';

class EdgeInsets extends AbstractEdgeInsets {
  toto() {
    return 'toto';
  }
}

describe('EdgeInsets', () => {
  describe('.all constructor', () => {
    it('.all should return correct value', () => {
      const { left, bottom, right, top } = EdgeInsets.all(32);

      expect(left).toEqual(32);
      expect(bottom).toEqual(32);
      expect(right).toEqual(32);
      expect(top).toEqual(32);
    });
  });

  describe('.symmetric constructor', () => {
    it('.symmetric should return correct value without vertical', () => {
      const { top, right, bottom, left } = EdgeInsets.symmetric({ horizontal: 12 });

      expect(top).toEqual(null);
      expect(right).toEqual(12);
      expect(bottom).toEqual(null);
      expect(left).toEqual(12);
    });

    it('.symmetric should return correct value without horizontal', () => {
      const { top, right, bottom, left } = EdgeInsets.symmetric({ vertical: 12 });

      expect(top).toEqual(12);
      expect(right).toEqual(null);
      expect(bottom).toEqual(12);
      expect(left).toEqual(null);
    });

    it('.symmetric should return correct value with horizontal & vertical', () => {
      const { top, right, bottom, left } = EdgeInsets.symmetric({ horizontal: 12, vertical: 6 });

      expect(top).toEqual(6);
      expect(right).toEqual(12);
      expect(bottom).toEqual(6);
      expect(left).toEqual(12);
    });
  });

  describe('.only constructor', () => {
    it('should return correct value in all cases', () => {
      const onlyNothing = EdgeInsets.only();
      expect(onlyNothing.top).toEqual(null);
      expect(onlyNothing.right).toEqual(null);
      expect(onlyNothing.bottom).toEqual(null);
      expect(onlyNothing.left).toEqual(null);

      const onlyTop = EdgeInsets.only({ top: 12 });
      expect(onlyTop.top).toEqual(12);
      expect(onlyTop.right).toEqual(null);
      expect(onlyTop.bottom).toEqual(null);
      expect(onlyTop.left).toEqual(null);

      const onlyRight = EdgeInsets.only({ right: 12 });
      expect(onlyRight.top).toEqual(null);
      expect(onlyRight.right).toEqual(12);
      expect(onlyRight.bottom).toEqual(null);
      expect(onlyRight.left).toEqual(null);

      const onlyBottom = EdgeInsets.only({ bottom: 12 });
      expect(onlyBottom.top).toEqual(null);
      expect(onlyBottom.right).toEqual(null);
      expect(onlyBottom.bottom).toEqual(12);
      expect(onlyBottom.left).toEqual(null);

      const onlyLeft = EdgeInsets.only({ left: 12 });
      expect(onlyLeft.top).toEqual(null);
      expect(onlyLeft.right).toEqual(null);
      expect(onlyLeft.bottom).toEqual(null);
      expect(onlyLeft.left).toEqual(12);
    });
  });

  describe('.fromLTRB constructor', () => {
    it('should return correct value', () => {
      const { top, right, bottom, left } = EdgeInsets.fromLTRB(1, 2, 3, 4);

      expect(top).toEqual(2);
      expect(right).toEqual(3);
      expect(bottom).toEqual(4);
      expect(left).toEqual(1);
    });
  });

  describe('.zero constructor', () => {
    const { top, right, bottom, left } = EdgeInsets.zero();

    expect(top).toEqual(0);
    expect(right).toEqual(0);
    expect(bottom).toEqual(0);
    expect(left).toEqual(0);
  });
});
