import classnames from 'classnames';
import { FC, ReactChild, ReactChildren } from 'react';

import Icon from '../icon';
import IconButton from '../icon-button';
import Icons from '../icons';
import Padding from '../padding';
import classes from './modal.module.scss';

interface ModalClassNames {
  overlay?: string;
  wrapper?: string;
  header?: string;
  title?: string;
  closeIconButton?: string;
  closeIcon?: string;
  content?: string;
}

interface ModalProps {
  /**
   * What to do when user is trying to close.
   * If not passed, it will hide close icon and you should close it programmatically.
   */
  onClose?: VoidFunction;
  /**
   * Should we use an overlay ?
   * @default true
   */
  withOverlay?: boolean;
  children: ReactChild | ReactChildren;
  classNames?: ModalClassNames;
  title: string;
}

export const Modal: FC<ModalProps> = ({
  onClose,
  withOverlay = true,
  children,
  classNames,
  title,
}) => (
  <>
    {withOverlay && (
      <div className={classnames(classes.overlay, classNames?.overlay)} onClick={onClose} />
    )}

    <div className={classnames(classes.modal_wrapper, classNames?.wrapper)}>
      <div className={classnames(classes.modal_header, classNames?.header)}>
        <span className={classnames(classes.modal_title, classNames?.title)}>{title}</span>
        {onClose && (
          <IconButton
            icon={<Icon icon={Icons.close} size={18} className={classNames?.closeIcon} />}
            onPress={onClose}
            padding={Padding.all(12)}
            className={classNames?.closeIconButton}
          />
        )}
      </div>

      <div className={classnames(classes.modal_content, classNames?.content)}>{children}</div>

      {/*<div className="footer">*/}
      {/*  <button>Cancel</button>*/}
      {/*  <button>Accept</button>*/}
      {/*</div>*/}
    </div>
  </>
);

export default Modal;
