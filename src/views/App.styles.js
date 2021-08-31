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

export const Title = styled.h1`
  color: white;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.l};

  display: flex;
  flex-direction: column;
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
