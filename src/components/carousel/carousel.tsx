import React, { Children, FC } from 'react';

import Colors from '../colors';
import Icon from '../icon';
import IconButton from '../icon-button';
import Icons from '../icons';
import classes from './carousel.module.scss';
import useCarousel from './useCarousel';

interface CarouselProps {
  /**
   * The elements you want to display in the carousel.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * The gap (in px) you want to display between elements.
   * @default 12
   */
  gap?: number;
}

/**
 * This is a simple carousel.
 * You can use it to show a really simple carousel that you can control with chevrons.
 */
export const Carousel: FC<CarouselProps> = ({ children, gap = 12 }) => {
  const { leftIndicator, rightIndicator, listRef, scrollLeft, scrollRight, itemRef } =
    useCarousel(children);

  const onScrollLeft = () => scrollLeft(1);
  const onScrollRight = () => scrollRight(1);

  return (
    <div className={classes.wrapper}>
      {leftIndicator && (
        <IconButton
          className={classes.button}
          onPress={onScrollLeft}
          icon={<Icon icon={Icons.chevron_left} size={16} color={Colors.grey[500]} />}
        />
      )}

      <ul className={classes.inner} ref={listRef} style={{ gap }}>
        {Children.map(children, (child, index) => (
          <li key={index} className={classes.element} ref={itemRef(index)}>
            {child}
          </li>
        ))}
      </ul>

      {rightIndicator && (
        <IconButton
          className={classes.button}
          onPress={onScrollRight}
          icon={<Icon icon={Icons.chevron_right} size={16} color={Colors.grey[500]} />}
        />
      )}
    </div>
  );
};

export default Carousel;
