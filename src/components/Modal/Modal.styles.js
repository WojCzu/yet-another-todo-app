import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 200px;
  max-width: 420px;
  min-height: 80px;
  padding: 16px 24px;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  transform: translate(-50%, -50%);
  outline: none;
`;
