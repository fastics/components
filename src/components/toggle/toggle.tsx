import classnames from 'classnames';
import React, { FC, ReactNode, useCallback } from 'react';
import { createUseStyles } from 'react-jss';

import useMergedState from '../../hooks/useMergedState';
import Color from '../color';
import Colors from '../colors';
import Loader from '../loader';
import classes from './toggle.module.scss';

interface BaseToggleProps {
  /**
   * Basically the `checked` state color.
   * @default Colors.teal[500]
   */
  checkedColor?: Color;
  /**
   * Basically the `unchecked` state color.
   * @default Colors.grey[300]
   */
  unCheckedColor?: Color;
  /**
   * Is the button disabled ?
   * If true, it sets whole opacity to 0.4 and disabled any click.
   */
  disabled?: boolean;
  /**
   * Will be shown inside the Toggle when its `checked` prop is `true`.
   */
  checkedLabel?: ReactNode;
  /**
   * Will be shown inside the Toggle when its `checked` prop is `false`.
   */
  unCheckedLabel?: ReactNode;
  /**
   * You can get a small `Toggle` component.
   */
  size?: 'small';
  /**
   * Is the button loading ?
   * If true, it shows a loader and disabled the toggle actions.
   */
  loading?: boolean;
}

interface UncontrolledToggleProps {
  checked?: undefined;
  onChange?: undefined;
}

interface ControlledToggleProps {
  /**
   * Is the Toggle checked ? Should ne be set if you want an uncontrolled Toggle.
   */
  checked: boolean;
  /**
   * Handle Toggle value change. Should ne be set if you want an uncontrolled Toggle.
   */
  onChange: (nextValue: boolean) => void;
}

type ToggleProps = BaseToggleProps & (UncontrolledToggleProps | ControlledToggleProps);

interface ToggleStylesProps {
  value: boolean;
  checkedColor: Color;
  unCheckedColor: Color;
  disabled: boolean;
}

const useStyles = createUseStyles({
  button: ({ checkedColor, unCheckedColor, value, disabled }: ToggleStylesProps) => {
    let color = value ? checkedColor : unCheckedColor;

    return {
      backgroundColor: color.toRGBA(),
      opacity: disabled ? 0.4 : undefined,
      cursor: disabled ? 'not-allowed' : undefined,
    };
  },
});

/**
 * Displays a Toggle that you can click on to make it checked.
 *
 * By default, if you don't pass `checked` and `onChange`, it's considered `uncontrolled`.
 * That means you can't control its value nor catch its change.
 */
export const Toggle: FC<ToggleProps> = ({
  checked,
  onChange,
  checkedColor = Colors.teal[500],
  unCheckedColor = Colors.grey[500],
  disabled = false,
  checkedLabel,
  unCheckedLabel,
  size,
  loading,
}) => {
  const isDisabled = loading || disabled;

  const [value, setValue] = useMergedState(checked ?? false);
  const styles = useStyles({ value, checkedColor, unCheckedColor, disabled: isDisabled });

  const handleClick = useCallback(() => {
    if (isDisabled) return;
    if (onChange) onChange(!value);
    else setValue(!value);
  }, [isDisabled, onChange, setValue, value]);

  return (
    <button
      data-testid="toggle"
      type="button"
      role="switch"
      aria-checked={value}
      className={classnames(classes.button, styles.button, {
        [classes.button__checked]: value,
        [classes.button__small]: size === 'small',
        [classes.button__disabled]: isDisabled,
      })}
      onClick={handleClick}
    >
      <span className={classes.handle}>
        {loading ? (
          <Loader
            className={classes.loader}
            size={size === 'small' ? 10 : 14}
            thickness={1}
            color={value ? checkedColor : unCheckedColor}
          />
        ) : null}
      </span>
      <span className={classes.inner}>{value ? checkedLabel ?? null : unCheckedLabel ?? null}</span>
    </button>
  );
};

export default Toggle;
