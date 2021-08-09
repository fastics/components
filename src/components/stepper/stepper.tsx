import { Children, FC, ReactElement } from 'react';

import Color from '../color';
import Colors from '../colors';
import StepperItem, {
  InternalStepperItem,
  StepperItemProps,
} from './components/stepper-item/stepper-item';
import classes from './stepper.module.scss';

/**
 * Types below were intended to automatically type `current` prop based on children length.
 * But I couldn't get it to work :(
 */
// type _NumbersFrom0ToN<Nr extends number> = Nr extends Nr
//   ? number extends Nr
//     ? number
//     : Nr extends 0
//     ? never
//     : _NumbersFrom0ToNRec<Nr, [], 0>
//   : never;
//
// type _NumbersFrom0ToNRec<
//   Nr extends number,
//   Counter extends any[],
//   Accumulator extends number,
// > = Counter['length'] extends Nr
//   ? Accumulator
//   : _NumbersFrom0ToNRec<Nr, [any, ...Counter], Accumulator | Counter['length']>;
//
// type NrRange<From extends number, To extends number> = Exclude<
//   _NumbersFrom0ToN<To>,
//   _NumbersFrom0ToN<From>
// >;

interface StepperProps {
  /**
   * The [StepperItem] children. At least 2.
   */
  children: ReactElement<StepperItemProps>[];
  /**
   * Current step. Should be between 0 and `children['length'] - 1`
   */
  current: number;
  /**
   * Color of the primary elements.
   */
  primaryColor?: Color;
  /**
   * Color of the secondary elements.
   */
  secondaryColor?: Color;
  /**
   * Color of the disabled elements.
   */
  disabledColor?: Color;
  /**
   * Color of the title elements.
   */
  titleColor?: Color;
}

type StepperComponent = FC<StepperProps> & { Item: typeof StepperItem };

export const Stepper: StepperComponent = ({
  children,
  current,
  primaryColor = Colors.blue[300],
  secondaryColor = Colors.black54,
  disabledColor = Colors.black38,
  titleColor = Colors.black,
}) => (
  <div className={classes.wrapper}>
    {Children.map(children, (child, index) => (
      <InternalStepperItem
        key={index}
        isCurrent={index === current}
        isPast={index < current}
        index={index}
        disabledColor={disabledColor}
        secondaryColor={secondaryColor}
        primaryColor={primaryColor}
        titleColor={titleColor}
        {...child.props}
      />
    ))}
  </div>
);

Stepper.Item = StepperItem;

export default Stepper;
