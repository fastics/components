import classnames from 'classnames';
import { FC, ReactElement, ReactNode } from 'react';

import Colors from '../colors';
import Icon, { IconProps } from '../icon';
import Icons from '../icons';
import { Color } from '../index';
import classes from './result.module.scss';

export enum ResultStatus {
  SUCCESS = '@result-status_success',
  INFO = '@result-status_info',
  WARNING = '@result-status_warning',
  ERROR = '@result-status_error',
}

interface BaseResultProps {
  /**
   * The **title** you want to show.
   */
  title: string;
  /**
   * An optional **subtitle**.
   */
  subtitle?: string;
  /**
   * @deprecated NYI.
   */
  children?: ReactNode;
}

interface ResultWithCustomIconProps extends BaseResultProps {
  /**
   * Mandatory if **icon** is not set.
   *
   * You cannot set a **status** along with an **icon**.
   */
  status?: undefined;
  /**
   * Mandatory if **status** is not set.
   *
   * You cannot set an **icon** along with a **status**.
   *
   * Icons generated when you set a **status** are 72px sized. We recommend you to use this size.
   */
  icon: ReactElement<IconProps>;

  /**
   * Override default Icon size.
   */
  iconSize?: undefined;
}

interface ResultWithoutCustomIconProps extends BaseResultProps {
  /**
   * Mandatory if **icon** is not set.
   *
   * You cannot set a **status** along with an **icon**.
   */
  status: ResultStatus;
  /**
   * Mandatory if **status** is not set.
   *
   * You cannot set an **icon** along with a **status**.
   */
  icon?: undefined;

  /**
   * Override default Icon size.
   *
   * @default 72
   */
  iconSize?: number;
}

type ResultProps = ResultWithoutCustomIconProps | ResultWithCustomIconProps;

const getIcon = (status?: ResultStatus, icon?: ReactElement<IconProps>, iconSize = 72) => {
  if (icon) return icon;
  const wrappedIconSize = (iconSize * 54) / 72;

  switch (status) {
    case ResultStatus.INFO:
      return <Icon icon={Icons.error} size={iconSize} color={new Color(0xff1890ff)} />;
    case ResultStatus.ERROR:
      return (
        <div
          className={classnames(classes.icon_wrapper, classes.icon_wrapper__error)}
          style={{ width: iconSize, height: iconSize }}
        >
          <Icon icon={Icons.close} color={Colors.white} size={wrappedIconSize} />
        </div>
      );
    case ResultStatus.SUCCESS:
      return (
        <div
          className={classnames(classes.icon_wrapper, classes.icon_wrapper__success)}
          style={{ width: iconSize, height: iconSize }}
        >
          <Icon icon={Icons.check} color={Colors.white} size={wrappedIconSize} />
        </div>
      );
    case ResultStatus.WARNING:
      return <Icon icon={Icons.warning_rounded} color={new Color(0xfffaad14)} size={iconSize} />;
    default:
      return null;
  }
};

export const Result: FC<ResultProps> = ({ status, title, subtitle, icon, children, iconSize }) => (
  <div className={classes.wrapper}>
    <div className={classes.icon}>{getIcon(status, icon, iconSize)}</div>
    <div className={classes.title}>{title}</div>
    {subtitle && <div className={classes.subtitle}>{subtitle}</div>}

    {children && <div className={classes.content}>{children}</div>}
  </div>
);

export default Result;
