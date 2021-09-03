import styled from 'styled-components';
import tickIcon from 'assets/icons/check-tick.svg';

export const Wrapper = styled.li`
  position: relative;
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 40px;
  grid-gap: 10px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 460px) {
    padding: 10px 0;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyledLabel = styled.label`
  margin-left: 34px;
  position: relative;
  cursor: pointer;

  color: ${({ theme, isFinished }) =>
    isFinished ? theme.color.darkGray : theme.color.black};
  text-decoration: ${({ isFinished }) =>
    isFinished ? 'line-through' : 'none'};

  &::before {
    content: '';
    width: 24px;
    height: 24px;

    position: absolute;
    top: 50%;
    left: -34px;

    transform: translate(0, -50%);
    border: ${({ theme, isFinished }) =>
      isFinished ? 'none' : `1px solid ${theme.color.coral}`};
    border-radius: 50%;

    background: ${({ theme, isFinished }) =>
      isFinished
        ? `url(${tickIcon}) no-repeat center, linear-gradient(335deg, ${theme.color.coralLight}, ${theme.color.violet}) `
        : ''};
    background-size: auto 75%, 100%;
  }
`;
