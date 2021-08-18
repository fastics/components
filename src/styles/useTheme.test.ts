import { Color } from '../components';
import { theme } from './useTheme';

describe('useTheme', () => {
  it('should return correct value', () => {
    expect(theme.primaryColor).toBeInstanceOf(Color);
    expect(theme.primaryLight).toBeInstanceOf(Color);
    expect(theme.primarySuperLight).toBeInstanceOf(Color);
    expect(theme.primaryAlmostWhite).toBeInstanceOf(Color);
    expect(theme.white).toBeInstanceOf(Color);
    expect(theme.primaryAlmostBlack).toBeInstanceOf(Color);
    expect(theme.primarySuperDark).toBeInstanceOf(Color);
    expect(theme.darkGrey).toBeInstanceOf(Color);
    expect(theme.mediumGrey).toBeInstanceOf(Color);
  });
});
