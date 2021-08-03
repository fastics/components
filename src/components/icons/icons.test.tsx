import Icons from './icons';

it('should return an icon', () => {
  expect(Icons.access_time_filled_outlined).toEqual({
    name: 'access_time_filled',
    variant: 'outlined',
  });
});
