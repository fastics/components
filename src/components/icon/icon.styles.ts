// TODO: Replace styled-components by react-jss

import { css } from 'styled-components';

import Colors from '../colors';

export const baseStyles = css`
  cursor: default;
  pointer-events: none;
`;

export const disabledStyles = css`
  color: ${Colors.black26.toRGB()};
`;
