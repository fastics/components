import classnames from 'classnames';
import React, {
  HTMLProps,
  ReactText,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import useOnClickOutside from '../../../hooks';
import Icon from '../icon';
import Icons, { IconData } from '../icons';
import classes from './dropdown-button.module.scss';

/**
 * This method is used to calculate max width of children elements.
 * It aims to get wrapper min width.
 */
const getMaxChildrenWidth = (parent?: HTMLElement | null) => {
  if (!parent) return;
  let maxWidth = 0;

  for (let i = 0; i < parent.childNodes.length; i++) {
    const child = parent.childNodes[i];

    const textContent = child.textContent;
    const span = document.createElement('span');
    span.innerText = textContent || '';
    document.body.appendChild(span);
    const w = span.getBoundingClientRect().width;
    document.body.removeChild(span);

    if (w > maxWidth) maxWidth = w;
  }

  return maxWidth;
};

export type DropdownButtonClassNames = {
  /**
   * Override wrapper style by creating className.
   */
  wrapper?: HTMLProps<HTMLButtonElement>['className'];
  /**
   * Override item list style by creating className.
   */
  item_list?: HTMLProps<HTMLUListElement>['className'];
  /**
   * Override list item style by creating className.
   */
  item_list_item?: HTMLProps<HTMLLIElement>['className'];
};

interface BaseDropdownButtonProps {
  /**
   * You have to pass the current value to the select
   */
  value?: string;
  /**
   * This is an array of objects containing `value` and `text`.
   * `value` is the value that will be returned after selecting it.
   * `text` is the text that will be shown in select options.
   */
  items: { value: string; text: ReactText }[];
  /**
   * @default Icons.arrow_drop_down
   */
  icon?: IconData;
  /**
   * @default 24
   */
  iconSize?: number;
  onChange?: (nextValue: string) => void;
  /**
   * If `allowEmpty` is set to `true`, it will be visually selected if given `value` is unknown,
   * or empty.
   * If it's set to `false`, the first option will be visually selected.
   * @default false
   */
  allowEmpty?: boolean;
  classNames?: DropdownButtonClassNames;
}

interface DropdownButtonPropsWithAllowEmpty extends BaseDropdownButtonProps {
  allowEmpty: true;
  placeholder?: string;
}

interface DropdownButtonPropsWithoutAllowEmpty extends BaseDropdownButtonProps {
  allowEmpty?: false;
  placeholder?: undefined;
}

type DropdownButtonProps = DropdownButtonPropsWithAllowEmpty | DropdownButtonPropsWithoutAllowEmpty;

/**
 * A button for selecting from a list of items.
 * A dropdown button lets the user select from a number of items.
 * The button shows the currently selected item as well as an arrow that opens a menu for selecting
 * another item.
 */
export const DropdownButton: React.FC<DropdownButtonProps> = ({
  allowEmpty = false,
  classNames,
  icon = Icons.arrow_drop_down,
  iconSize = 24,
  items,
  onChange,
  placeholder,
  value,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxW, setMaxW] = useState(0);

  const valueLabel = useMemo(
    () => value && items.find((item) => item.value === value)?.text,
    [items, value],
  );

  const handleSelect = useCallback(
    (nextValue: string) => (event: React.MouseEvent<HTMLLIElement>) => {
      event.stopPropagation();

      if (onChange) onChange(nextValue);
      setIsOpen(false);
    },
    [onChange],
  );

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    const max = getMaxChildrenWidth(ref.current?.querySelector('ul'));
    setMaxW(max || 0);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);

    setTimeout(() => {
      if (!value) return;
      /**
       * The part below aims to automatically scroll to selected value.
       * Cannot make it work for now.
       */

      // const selectedLi = ulRef.current?.querySelector(`#dropdown-value-${value}`);
      // const { top = 0, height = 0 } = selectedLi?.getBoundingClientRect() || {};
      // ulRef.current?.scrollTo({ top: top - height * 2 });
    }, 200);
  }, [value]);

  return (
    <button
      ref={ref}
      className={classnames(
        classes.wrapper,
        {
          [classes.wrapper__open]: isOpen,
        },
        classNames?.wrapper,
      )}
      onClick={handleOpen}
    >
      <span style={{ minWidth: maxW }}>
        {valueLabel ? (
          <span>{valueLabel}</span>
        ) : (
          <span className={classes.value_placeholder}>{placeholder}</span>
        )}
        <Icon icon={icon} size={iconSize} />
      </span>

      <ul ref={ulRef} className={classnames(classes.item_list, classNames?.item_list)}>
        {allowEmpty && (
          <li
            className={classnames(classes.item_list_item, classes.item_list_item__placeholder)}
            onClick={handleSelect('')}
          >
            {placeholder}
          </li>
        )}
        {items.map((item) => (
          <li
            key={item.value}
            onClick={handleSelect(item.value)}
            id={`dropdown-value-${item.value}`}
            className={classnames(
              classes.item_list_item,
              {
                [classes.item_list_item__selected]: value === item.value,
              },
              classNames?.item_list_item,
            )}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </button>
  );
};

export default DropdownButton;
