import classnames from 'classnames';
import { FC, forwardRef, ReactNode, RefObject } from 'react';
import { createUseStyles } from 'react-jss';

import Color from '../../../color';
import { Icon } from '../../../icon';
import { IconData } from '../../../icons';
import classes from './tab-item.module.scss';

export interface TabItemProps {
  /**
   * The tab name that will be shown.
   */
  name: string;
  children: ReactNode;
  /**
   * This key will be used by system to know default tab.
   */
  key: string;
  /**
   * An optional [IconData] to show aside of tab item name.
   *
   * @default undefined
   */
  icon?: IconData;
  /**
   * Override active icon & text color.
   *
   * @default Inherits from parent.
   */
  activeColor?: Color;
  /**
   * Override inactive icon & text color.
   *
   * @default Inherits from parent.
   */
  inactiveColor?: Color;
}

export interface InnerTabItemProps extends Omit<TabItemProps, 'key'> {
  ref: RefObject<HTMLDivElement>;
  onChange: () => void;
  active: boolean;
}

const useStyles = createUseStyles({
  item: ({ inactiveColor }: { inactiveColor?: Color }) =>
    inactiveColor && {
      '--inactive-color': inactiveColor.toRGBA(),
    },
});

export const InnerTabItem = forwardRef<HTMLDivElement, InnerTabItemProps>(
  ({ children, name, onChange, active, icon, inactiveColor }, ref) => {
    const styles = useStyles({ inactiveColor });
    return (
      <div
        className={classnames(classes.item, styles.item, { [classes.item__active]: active })}
        ref={ref}
        onClick={onChange}
        role="tab"
      >
        {icon && <Icon icon={icon} className={classes.icon} size={20} />}
        {name}
      </div>
    );
  },
);

export const TabItem: FC<TabItemProps> = () => null;

export default TabItem;
