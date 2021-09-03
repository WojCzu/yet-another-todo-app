import styled from 'styled-components';

export const StyledTitle = styled.h2`
  margin: 0;
  padding-bottom: 6px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.black};
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

export const StyledInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.black};

  em {
    font-style: normal;
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  margin: 0;
  margin-left: 5px;
  padding: 8px 24px;

  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.color.coral : theme.color.white};
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.color.white : theme.color.coral};
  border: 2px solid ${({ theme }) => theme.color.coral};
  border-radius: 4px;
  cursor: pointer;
  text-transform: lowercase;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
