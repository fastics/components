// TODO: Replace styled-components by react-jss

import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Input from '../input';
import * as styles from './text-field.styles';

/**
 * I intentionally remove the `type` prop, since it will break the `TextField`
 */
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

interface TextFieldProps extends InputProps {
  /**
   * Override style
   */
  className?: string;
  /**
   * Change input characters by * signs
   */
  obscureText?: boolean;
}

export const TextFieldBase: FC<TextFieldProps> = ({ className, obscureText, ...props }) => {
  return <Input type={obscureText ? 'password' : 'text'} className={className} {...props} />;
};

const StyledTextField = styled(TextFieldBase)`
  ${styles.baseStyles}
`;

/**
 * A **TextField** lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
 */
export const TextField: FC<TextFieldProps> = (props) => <StyledTextField {...props} />;

export default TextField;
