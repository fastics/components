import React from 'react';

import useTextEditingController, { UseTextEditingController } from './useTextEditingController';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * If you want to control the input directly, pass in a controller.
   * Use it like this
   *
   * @example
   * const _controller = useTextEditingController({ listenValue: true });
   */
  controller?: UseTextEditingController;
}

export const Input: React.FC<InputProps> = ({ controller, ...props }) => {
  const _controller2 = useTextEditingController({ listenValue: false });
  const _controller = controller || _controller2;

  return (
    <input
      ref={_controller.ref}
      onSelect={_controller.handleSelectionChange}
      onChange={_controller.handleChange}
      data-testid="text-field"
      {...props}
    />
  );
};

export default Input;
