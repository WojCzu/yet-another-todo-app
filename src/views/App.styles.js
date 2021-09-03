import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 330px 44px 1fr;
  grid-gap: 16px;
  align-items: start;
  justify-content: center;
  min-height: 100vh;

  & > * {
    width: 90vw;
    max-width: 550px;
  }

  @media (max-width: 460px) {
    grid-template-rows: 210px 44px 1fr;
  }
`;
export const ListWrapper = styled.div`
  padding: 40px 25px 10px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.35);
`;

export const Title = styled.h1`
  color: white;
  align-self: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.l};

  display: flex;
  flex-direction: column;
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
