import React from 'react';
import { StyledModal } from './Modal.styles';

const Modal = ({ children, ...props }) => {
  return (
    <StyledModal
      {...props}
      style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.7)' } }}
    >
      {children}
    </StyledModal>
  );
};

StyledModal.setAppElement(document.getElementById('root'));

export default Modal;
