import classnames from 'classnames';
import React, { createElement, ReactHTML, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import Align from '../align';
import Alignment from '../alignment';
import Color from '../color';
import Margin from '../margin';
import Padding from '../padding';

interface ContainerProps {
  /**
   * Add inner padding.
   */
  padding?: Padding;
  /**
   * Add outer margin.
   */
  margin?: Margin;
  /**
   * Sets background color.
   */
  color?: Color;
  /**
   * Sets container width.
   */
  width?: string | number;
  /**
   * Sets container height.
   */
  height?: string | number;
  /**
   * Sets container alignment.
   */
  alignment?: Alignment;
  children?: ReactNode;
  /**
   * Override rendered component.
   *
   * @default div
   */
  as?: keyof ReactHTML;
  /**
   * Add custom className
   */
  className?: string;
}

interface ContainerStylesProps {
  padding?: Padding;
  margin?: Margin;
  color?: Color;
  width?: string | number;
  height?: string | number;
}

const useStyles = createUseStyles({
  container: ({ color, height, margin, padding, width }: ContainerStylesProps) => ({
    boxSizing: 'border-box',
    display: 'flex',

    paddingTop: padding?.top ?? null,
    paddingRight: padding?.right ?? null,
    paddingBottom: padding?.bottom ?? null,
    paddingLeft: padding?.left ?? null,

    marginTop: margin?.top ?? null,
    marginRight: margin?.right ?? null,
    marginBottom: margin?.bottom ?? null,
    marginLeft: margin?.left ?? null,

    backgroundColor: color?.toRGBA() ?? null,
    height: height ?? null,
    width: width ?? null,
  }),
});

/**
 * **`Container`** is a utility to help you designing without adding some `classNames` only for organizing a container.
 *
 * @example
 * <Container
 *   width={100}
 *   height={100}
 *   color={Colors.blueGrey[500].withOpacity(0.3)}
 *   padding={Padding.all(12)}
 *   margin={Margin.all(24)}
 *   alignment={Alignment.center}
 * >
 *   <span>Hello users</span>
 * </Container>
 *
 * @see Padding
 * @see Margin
 * @see Color
 * @see Alignment
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  as = 'div',
  alignment,
  className,
  ...rest
}) => {
  const styles = useStyles(rest);

  return createElement(as, {
    className: classnames(styles.container, className),
    children: children ? (
      alignment ? (
        <Align alignment={alignment}>{children}</Align>
      ) : (
        children
      )
    ) : null,
  });
};

export default Container;
