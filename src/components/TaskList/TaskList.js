import React from 'react';
import { NavLink } from 'react-router-dom';
import data from 'data/tasks';
import Task from 'components/Task/Task';
import { Wrapper, StyledList } from './TaskList.styles';
import styled from 'styled-components';

const TaskList = () => {
  const tasksLeft = data.reduce(
    (sum, task) => (task.isFinished ? sum + 1 : sum),
    0
  );
  return (
    <Wrapper>
      {data.length ? (
        <StyledList>
          {data.map(({ id, name, isFinished }) => (
            <Task key={id} id={id} name={name} isFinished={isFinished} />
          ))}
        </StyledList>
      ) : (
        <div>Add your first task</div>
      )}

      <StyledInfo>
        <TaskInfo>
          {tasksLeft} task{tasksLeft === 1 ? '' : 's'} left
        </TaskInfo>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/all">All</StyledLink>
            </li>
            <li>
              <StyledLink to="/unfinished">Unfinished</StyledLink>
            </li>
            <li>
              <StyledLink to="/finished">Finished</StyledLink>
            </li>
          </NavList>
        </nav>
        <ClearButton>clear finished</ClearButton>
      </StyledInfo>
    </Wrapper>
  );
};
const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const TaskInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
  padding: 0.4em;
`;

const ClearButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
  border: none;
  background: none;
  padding: 0.4em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.coral};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  padding: 0.4em;

  &.active {
    color: ${({ theme }) => theme.color.violet};
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme.color.coral};
  }
`;
export default TaskList;
