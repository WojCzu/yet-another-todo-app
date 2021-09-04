import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  place-self: center end;

  border: none;
  background: transparent url(${({ icon }) => icon}) no-repeat;
  background-size: contain;
  cursor: pointer;
`;
