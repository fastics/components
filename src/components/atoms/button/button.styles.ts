// TODO: Replace styled-components by react-jss

import { css } from 'styled-components';

import { theme } from '../../../styles/useTheme';

export const basicStyles = css`
  border: 0;
  padding: 12px 32px;
  border-radius: 8px;

  &:hover,
  &:active {
    background-color: ${theme.primaryAlmostWhite.toRGB()};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${theme.primarySuperLight.toRGB()};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const primaryStyles = css`
  background-color: ${theme.primaryColor.toRGB()};
  color: ${theme.primarySuperLight.toRGB()};

  &:hover {
    background-color: ${theme.primaryLight.toRGB()};
  }
`;

export const primaryLightStyles = css`
  background-color: ${theme.white.toRGB()};
  color: ${theme.primaryLight.toRGB()};
  border: 0;

  &:hover,
  &:active {
    background-color: ${theme.primaryAlmostWhite.toRGB()};
  }
`;

export const secondaryStyles = css`
  border: 1px solid ${theme.primaryColor.toRGB()};
  background-color: ${theme.white.toRGB()};
  color: ${theme.primaryLight.toRGB()};
`;
