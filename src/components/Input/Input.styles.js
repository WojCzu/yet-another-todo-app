import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 10px 30px;

  display: grid;
  grid-template-columns: 1fr 40px;
  grid-gap: 15px;
  align-items: center;

  border-radius: 2em;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.35);
`;

export const StyledInput = styled.input`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
`;
