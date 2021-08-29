import React from 'react';
import { NavLink } from 'react-router-dom';
import data from 'data/tasks';
import Task from 'components/Task/Task';
import { Wrapper, StyledList } from './TaskList.styles';

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

      <span>
        {tasksLeft} task{tasksLeft === 1 ? '' : 's'} left
      </span>
      <ul>
        <NavLink to="/all">All</NavLink>
        <NavLink to="/unfinished">Unfinished</NavLink>
        <NavLink to="/finished">Finished</NavLink>
      </ul>
      <button>Clear finished</button>
    </Wrapper>
  );
};

export default TaskList;
