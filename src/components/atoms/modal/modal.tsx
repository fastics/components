import React from 'react';

import { IconButton, Padding } from '../../molecules';
import Icon from '../icon';
import Icons from '../icons';
import classes from './modal.module.scss';

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
  children: React.ReactChild | React.ReactChildren;
}

export const Modal: React.FC<ModalProps> = ({ onClose, withOverlay = true, children }) => (
  <>
    {withOverlay && <div className={classes.overlay} onClick={onClose} />}

    <div className={classes.modal_wrapper}>
      <div className={classes.modal_header}>
        <span className={classes.modal_title}>Hello, World !</span>
        {onClose && (
          <IconButton
            icon={<Icon icon={Icons.close} size={18} />}
            onPress={onClose}
            padding={Padding.all(12)}
          />
        )}
      </div>

      <div className={classes.modal_content}>{children}</div>

      {/*<div className="footer">*/}
      {/*  <button>Cancel</button>*/}
      {/*  <button>Accept</button>*/}
      {/*</div>*/}
    </div>
  </>
);

export default Modal;
