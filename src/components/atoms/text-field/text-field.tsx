import React from 'react';

import useTextEditingController, { UseTextEditingController } from './useTextEditingController';

interface TextFieldProps {
  controller?: UseTextEditingController;
}

const TextField: React.FC<TextFieldProps> = ({ controller }) => {
  const _controller2 = useTextEditingController({ listenValue: false });
  const _controller = controller || _controller2;

  return (
    <input
      ref={_controller.ref}
      onSelect={_controller.handleSelectionChange}
      onChange={_controller.handleChange}
      data-testid="text-field"
    />
  );
};

export default TextField;
