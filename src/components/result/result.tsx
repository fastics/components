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

export interface ResultClassnames {
  /**
   * The **Result** wrapper. Contains all React nodes.
   */
  wrapper?: string;

  /**
   * **icon** wrapper. By default, it only applies a bottom margin.
   */
  icon?: string;

  /**
   * The **title** className.
   */
  title?: string;

  /**
   * The **subtitle** className.
   */
  subtitle?: string;

  /**
   * The **actions** wrapper. By default, it only applies a bottom margin, and a gap between elements.
   */
  actions?: string;

  /**
   * The **content** className.
   */
  content?: string;
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
  /**
   * Use this to implement your own actions.
   * Generally buttons, but can be links too.
   */
  actions?: ReactNode | ReactNode[];

  /**
   * Override classNames.
   * Use this to customize the **Result** component.
   */
  classNames?: ResultClassnames;
}

interface ResultWithCustomIconProps extends BaseResultProps {
  status?: undefined;
  icon: ReactElement<IconProps>;
  iconSize?: undefined;
}

interface ResultWithoutCustomIconProps extends BaseResultProps {
  /**
   * REQUIRED if **icon** is not set.
   *
   * You cannot set a **status** along with an **icon**.
   */
  status: ResultStatus;
  /**
   * REQUIRED if **status** is not set.
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

export const Result: FC<ResultProps> = ({
  status,
  title,
  subtitle,
  icon,
  children,
  iconSize,
  actions,
  classNames,
}) => (
  <div className={classnames(classes.wrapper, classNames?.wrapper)}>
    <div className={classnames(classes.icon, classNames?.icon)}>
      {getIcon(status, icon, iconSize)}
    </div>

    <div className={classnames(classes.title, classNames?.title)}>{title}</div>

    {subtitle && (
      <div className={classnames(classes.subtitle, classNames?.subtitle)}>{subtitle}</div>
    )}

    {actions && <div className={classnames(classes.actions, classNames?.actions)}>{actions}</div>}

    {children && <div className={classnames(classes.content, classNames?.content)}>{children}</div>}
  </div>
);

export default Result;
