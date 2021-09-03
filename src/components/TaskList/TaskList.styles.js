import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 0 15px;
  margin: 0;
  list-style: none;
`;
export const StyledInfo = styled.p`
  margin: 0;
  padding: 0 15px;
  color: ${({ theme }) => theme.color.darkGray};
`;
