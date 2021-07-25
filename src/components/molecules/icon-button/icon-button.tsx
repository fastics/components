import React from 'react';
import styled from 'styled-components';

import Icon from '../../atoms/icon';
import Padding from '../padding';

interface IconButtonBaseProps {
  icon: ReturnType<typeof Icon>;
  onPress: VoidFunction;
  className?: string;
}

interface StyledIconProps {
  /**
   * The padding around the button's icon. The entire padded icon will react to input gestures.
   * This property must not be null. It defaults to 8.0 padding on all sides.
   * @default 8
   */
  padding?: Padding;
}

type IconButtonProps = IconButtonBaseProps & StyledIconProps;

export const IconButtonBase: React.FC<IconButtonProps> = ({
  icon: IconComponent,
  onPress,
  className,
}) => (
  <div className={className} onClick={onPress}>
    {IconComponent}
  </div>
);

export const IconButton = styled(IconButtonBase)<IconButtonProps>`
  ${(p) => p.padding?.toStyledCSS() || Padding.all(8).toStyledCSS()};
  display: inline-grid;
  place-items: center;
  cursor: pointer;
`;

export default IconButton;
