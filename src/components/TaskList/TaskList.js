import React from 'react';
import trashcanIcon from 'assets/icons/trashcan.svg';
import tickIcon from 'assets/icons/check-tick.svg';
import styled from 'styled-components';
import data from 'data/tasks';

const TaskList = () => {
  return (
    <Wrapper>
      {data.length ? (
        <StyledList>
          {data.map(({ id, name, isFinished }) => (
            <StyledLi key={id}>
              <Checkbox type="checkbox" id={id} />
              <StyledLabel htmlFor={id} isChecked={isFinished}>
                {name}
              </StyledLabel>
              <StyledButton />
            </StyledLi>
          ))}
        </StyledList>
      ) : (
        <div>Add your first task</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 450px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.35);
`;
const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledLi = styled.li`
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
`;

const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  place-self: center end;

  border: none;
  background: transparent url(${trashcanIcon}) no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const StyledLabel = styled.label`
  margin-left: 34px;
  position: relative;
  cursor: pointer;

  color: ${({ theme, isChecked }) =>
    isChecked ? theme.color.darkGray : theme.color.black};
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};

  &::before {
    content: '';
    width: 24px;
    height: 24px;

    position: absolute;
    top: 50%;
    left: -34px;

    transform: translate(0, -50%);
    border: ${({ theme, isChecked }) =>
      isChecked ? 'none' : `1px solid ${theme.color.coral}`};
    border-radius: 50%;

    background: ${({ theme, isChecked }) =>
      isChecked
        ? `url(${tickIcon}) no-repeat center, linear-gradient(335deg, ${theme.color.coralLight}, ${theme.color.violet}) `
        : ''};
    background-size: auto 75%, 100%;
  }
`;

export default TaskList;
