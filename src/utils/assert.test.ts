import assert from './assert';

it('should work', () => {
  const spy = jest.spyOn(console, 'assert').mockImplementation();

  const value = 1;

  assert(value, (v) => v === 2, 'Value should be 2');
  expect(console.assert).toHaveBeenCalledWith(false, 'Value should be 2');

  assert(value, (v) => v === 1, 'Value should be 1');
  expect(console.assert).toHaveBeenCalledWith(true, 'Value should be 1');

  spy.mockRestore();
});
