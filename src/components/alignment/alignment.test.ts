import Alignment from './alignment';

describe('Alignment', () => {
  it('toString should return correct value', () => {
    expect(Alignment.bottomLeft.toString()).toBe('Alignment(x: -1, y: 1)');
  });
});
