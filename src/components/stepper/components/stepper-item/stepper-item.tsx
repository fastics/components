import classnames from 'classnames';
import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../../../color';
import Icon from '../../../icon';
import Icons, { IconData } from '../../../icons';
import classes from './stepper-item.module.scss';

export interface StepperItemProps {
  /**
   * Title of the step. Mandatory, it's the step title.
   */
  title: string;
  /**
   * A small step description.
   */
  description?: string;
  /**
   * Subtitle to allow showing additional data.
   */
  subTitle?: string;
}

export interface InternalStepperItemProps extends StepperItemProps {
  isCurrent: boolean;
  isPast: boolean;
  index: number;
  primaryColor: Color;
  secondaryColor: Color;
  disabledColor: Color;
  titleColor: Color;
}

const makeCreateUseStyles = ({
  disabledColor,
  secondaryColor,
  primaryColor,
  titleColor,
}: {
  primaryColor: Color;
  secondaryColor: Color;
  disabledColor: Color;
  titleColor: Color;
}) =>
  createUseStyles({
    wrapper: {
      '--stepper-main-color': primaryColor.toRGBA(),
      '--stepper-secondary-color': secondaryColor.toRGBA(),
      '--stepper-disabled-color': disabledColor.toRGBA(),
      '--stepper-title-color': titleColor.toRGBA(),
    },
  });

export const StepperItem: FC<StepperItemProps> = () => null;

export const InternalStepperItem: FC<InternalStepperItemProps> = ({
  title,
  description,
  subTitle,
  isCurrent,
  isPast,
  index,
  disabledColor,
  secondaryColor,
  primaryColor,
  titleColor,
}) => {
  const useStyles = makeCreateUseStyles({
    primaryColor,
    secondaryColor,
    disabledColor,
    titleColor,
  });
  const styles = useStyles();

  const icon: IconData = isPast ? Icons.check : isCurrent ? Icons.check_box : Icons.pin;

  const iconComponent = isPast ? <Icon icon={icon} color={primaryColor} /> : index + 1;

  return (
    <div
      className={classnames(styles.wrapper, classes.item, {
        [classes.item__current]: isCurrent,
        [classes.item__past]: isPast,
      })}
    >
      <div className={classes.container}>
        <span className={classes.icon}>{iconComponent}</span>
        <div className={classes.content}>
          <span className={classes.title}>
            {title} <span className={classes.subtitle}>{subTitle}</span>
          </span>
          <span className={classes.description}>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default StepperItem;
