import classNames from 'classnames';
import { FC, MouseEvent, MouseEventHandler, ReactChild, useCallback } from 'react';

import styles from './text-button.module.scss';

type Maybe<T> = T | null;

export interface TextButtonProps {
  /**
   * Called when the button is tapped or otherwise activated.
   */
  onPress?: Maybe<MouseEventHandler<HTMLButtonElement>>;
  /**
   * Typically the button's label.
   */
  children: ReactChild;
  className?: string;
}

/**
 * Use text buttons on toolbars, in dialogs, or inline with other content but offset from that
 * content with padding so that the button's presence is obvious.
 * Text buttons do not have visible borders and must therefore rely on their position relative to
 * other content for context.
 *
 * @see [OutlinedButton], a [TextButton] with a border outline.
 * @see [ElevatedButton], a filled button whose material elevates when pressed.
 */
export const TextButton: FC<TextButtonProps> = ({ onPress, children, className }) => {
  // Handle click event
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (onPress) {
        onPress(event);
      }
    },
    [onPress],
  );

  return (
    <button
      className={classNames(styles.wrapper, { [styles.wrapper__disabled]: !onPress }, className)}
      onClick={handleClick}
      data-testid="text-button"
    >
      <span>{children}</span>
    </button>
  );
};

export default TextButton;
