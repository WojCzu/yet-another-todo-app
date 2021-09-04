import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 10px 30px;

  display: grid;
  grid-template-columns: 1fr 40px;
  grid-gap: 15px;
  align-items: center;

  border-radius: 40px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.35);

  @media (max-width: 460px) {
    padding: 10px 15px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid
    ${({ isError, theme }) => (isError ? theme.color.violet : 'transparent')};
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  width: 100%;

  &:focus {
    border-color: ${({ isError, theme }) =>
      isError ? theme.color.violet : theme.color.darkGray};
  }
`;

export const Error = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.violet};
`;
