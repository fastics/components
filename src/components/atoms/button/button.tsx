import React, { ReactText } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

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
} & (PrimaryButtonProps | SecondaryButtonProps);

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ children, primary, tint, onClick, className }) => (
  <button
    onClick={onClick}
    className={classNames(
      styles.wrapper,
      {
        [styles.wrapper__primary]: primary,
        [styles.wrapper__secondary]: !primary,
        [styles.wrapper__primary__light]: primary && tint === 'light',
      },
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
