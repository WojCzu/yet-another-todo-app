import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 450px;
  margin: 0 auto;
  padding: 40px 25px 10px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.35);
`;
export const StyledList = styled.ul`
  padding: 0 15px;
  margin: 0;
  list-style: none;
`;
