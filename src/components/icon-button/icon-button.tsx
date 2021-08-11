// TODO: Replace styled-components by react-jss

import React, { FC } from 'react';
import styled from 'styled-components';

import Icon from '../icon';
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

export const IconButtonBase: FC<IconButtonProps> = ({
  icon: IconComponent,
  onPress,
  className,
}) => (
  <button className={className} onClick={onPress}>
    {IconComponent}
  </button>
);

const StyledIconButton = styled(IconButtonBase)<IconButtonProps>`
  ${(p) => p.padding?.toStyledCSS() || Padding.all(8).toStyledCSS()};
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.3s ease;
  user-select: none;
  border: none;

  &:hover {
    background-color: rgba(100, 100, 100, 0.1);
    box-shadow: 0 0 0 10px rgba(100, 100, 100, 0.1);
  }

  &:active {
    background-color: rgba(100, 100, 100, 0.2);
    box-shadow: 0 0 0 10px rgba(100, 100, 100, 0.2);
  }
`;

const IconButton: FC<IconButtonProps> = (props) => <StyledIconButton {...props} />;

export default IconButton;
