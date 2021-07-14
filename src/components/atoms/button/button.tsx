import React, { ReactText } from 'react';
import styled, { css } from 'styled-components';

import Color from '../color';
import * as styles from './button.styles';

/**
 * If `primary` is set to `true`, it takes these props.
 * In this case, user can select a tint.
 */
export interface PrimaryButtonProps {
  primary: true;
  tint?: 'dark' | 'light';
}

/**
 * If `secondary` is set to `false`, it takes these props.
 * In this case, user cannot select a tint, since secondary is only available in one tint.
 */
export interface SecondaryButtonProps {
  primary?: false;
  tint?: undefined;
}

export type ButtonProps = {
  /**
   * The text you want inside the button
   */
  children: ReactText;
  /**
   * Should the button be primary ?
   * @default false
   */
  primary?: boolean;
  /**
   * If primary is set to `true`, you can choose the variant : dark or light.
   * @default dark
   */
  tint?: 'dark' | 'light';
  /**
   * Handles button click
   */
  onClick?: VoidFunction;
  /**
   * Use this this override styles
   */
  className?: string;
  /**
   * Override color
   */
  color?: Color;
} & (PrimaryButtonProps | SecondaryButtonProps);

/**
 * Primary UI component for user interaction
 */
export const ButtonBase: React.FC<ButtonProps> = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export const Button = styled(ButtonBase)`
  ${styles.basicStyles};

  ${(props) => props.primary && styles.primaryStyles};
  ${(props) => !props.primary && styles.secondaryStyles};
  ${(props) => props.primary && props.tint === 'light' && styles.primaryLightStyles};
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color.toRGB()};
    `};
`;

export default Button;
