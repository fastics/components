import React from 'react';

import Color from '../../../color';
import DateTime from '../../../date-time';
import Icon from '../../../icon';
import IconButton from '../../../icon-button';
import Icons from '../../../icons';
import { MONTHS, SupportedLocales } from '../../constants';
import classes from './top.module.scss';

interface TopProps {
  currentDate: DateTime;
  onPrevClick: VoidFunction;
  onNextClick: VoidFunction;
  locale: SupportedLocales;
}

const CalendarTop: React.FC<TopProps> = ({ currentDate, locale, onNextClick, onPrevClick }) => (
  <div className={classes.top}>
    <IconButton
      data-testid="prev-month"
      onPress={onPrevClick}
      icon={<Icon icon={Icons.arrow_left} color={new Color(0xff99a1a7)} />}
    />

    <div className={classes.center}>
      <span data-testid="month">{MONTHS[locale][currentDate.month - 1]}</span>
      <span>{currentDate.year}</span>
    </div>

    <IconButton
      data-testid="next-month"
      onPress={onNextClick}
      icon={<Icon icon={Icons.arrow_right} color={new Color(0xff99a1a7)} />}
    />
  </div>
);

export default CalendarTop;
