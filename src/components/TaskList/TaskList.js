import React from 'react';
import trashcanIcon from 'assets/icons/trashcan.svg';
import styled from 'styled-components';

const TaskList = () => {
  return (
    <Wrapper>
      <StyledList>
        <StyledLi>
          <input type="checkbox" id="1" />
          <label htmlFor="1">Finish app </label>
          <StyledButton />
        </StyledLi>
        <StyledLi>
          <input type="checkbox" id="2" />
          <label htmlFor="2">Drink water (2l) </label>
          <StyledButton />
        </StyledLi>
        <StyledLi>
          <input type="checkbox" id="3" />
          <label htmlFor="3">Take creatine (5g) </label>
          <StyledButton />
        </StyledLi>
      </StyledList>
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
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.35);
`;
const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  padding: 10px;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
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
  place-self: end;

  border: none;
  background: transparent url(${trashcanIcon}) no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export default TaskList;
