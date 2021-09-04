import React from 'react';
import { StyledModal } from './Modal.styles';

const Modal = ({ children, ...props }) => {
  return (
    <StyledModal
      aria={{
        labelledby: 'modal__heading',
        describedby: 'modal__description',
      }}
      style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.7)' } }}
      {...props}
    >
      {children}
    </StyledModal>
  );
};

StyledModal.setAppElement(document.getElementById('root'));

export default Modal;
