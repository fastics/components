import { css } from 'styled-components';

import { Colors } from '../../atoms';

export const baseStyles = css`
  border-radius: 4px;
  border: 1px solid ${Colors.blueGrey[200].toRGB()};
  transition: 300ms ease;
  padding: 6px 12px;

  &::placeholder {
    color: ${Colors.blueGrey[200].toRGB()};
    transition: 300ms ease;
  }

  &:focus {
    outline: none;
    border-color: ${Colors.blueGrey[400].toRGB()};

    &::placeholder {
      color: ${Colors.blueGrey[400].toRGB()};
    }
  }
`;
