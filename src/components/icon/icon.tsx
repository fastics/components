// TODO: Replace styled-components by react-jss

import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

import Color from '../color';
import Colors from '../colors';
import { IconData } from '../icons';
import * as styles from './icon.styles';

const mapIcon = (variant?: 'rounded' | 'outlined' | 'sharp' | 'screen') => {
  if (variant === 'rounded') return 'material-icons-round';
  if (variant === 'outlined') return 'material-icons-outlined';
  if (variant === 'sharp') return 'material-icons-sharp';
  return 'material-icons';
};

export interface IconProps {
  disabled?: boolean;
  className?: string;
  /**
   * Although the icons in the font can be scaled to any size,
   * in accordance with material design icons guidelines,
   * we recommend them to be shown in either 18, 24, 36 or 48px.
   * @default 24
   */
  size?: number;
  /**
   * The color to use when drawing the icon.
   */
  color?: Color;
  icon: IconData;
}

export interface IconInnerProps {
  className?: string;
  icon: IconData;
  semanticLabel?: string;
}

export const IconInner: FC<IconInnerProps> = ({ className, icon, semanticLabel }) => {
  const classes = useMemo(
    () => [mapIcon(icon.variant), className].filter(Boolean).join(' '),
    [className, icon.variant],
  );

  return (
    <span className={classes} aria-label={semanticLabel}>
      {icon.name}
    </span>
  );
};

const StyledIcon = styled(IconInner)<IconProps>`
  ${styles.baseStyles}
  color: ${(p) => p.color?.toRGBA() || Colors.black.toRGBA()};
  ${(p) => p.disabled && styles.disabledStyles}
  font-size: ${(p) => p.size || 24}px;
`;

/**
 * A graphical **Icon** widget drawn with a glyph.
 *
 * Icons are not interactive. For an interactive icon, consider **IconButton**.
 *
 * It uses Material-Icons font. Don't forget to include Material CSS in your app !
 * @example
 * <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
 *
 * @see IconButton
 * @see Icons
 */
export const Icon: FC<IconProps> = (props) => <StyledIcon {...props} />;

export default Icon;
