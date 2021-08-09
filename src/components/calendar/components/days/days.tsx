import classnames from 'classnames';
import React, { useMemo } from 'react';

import { DAYS, SupportedLocales } from '../../constants';
import { Day } from '../../types';
import classes from './days.module.scss';

interface DaysProps {
  locale: SupportedLocales;
  formatDay?: (day: Day) => string;
}

const Days: React.FC<DaysProps> = ({ locale, formatDay = (value) => value.substr(0, 3) }) => {
  const localizedDays = useMemo(() => DAYS[locale], [locale]);

  return (
    <>
      {localizedDays.map((day) => (
        <span key={day} className={classnames(classes.day_name)}>
          {formatDay(day)}
        </span>
      ))}
    </>
  );
};

export default Days;
