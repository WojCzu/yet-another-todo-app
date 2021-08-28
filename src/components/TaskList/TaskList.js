import React from 'react';
import data from 'data/tasks';
import Task from 'components/Task/Task';
import { Wrapper, StyledList } from './TaskList.styles';

const TaskList = () => {
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
    </Wrapper>
  );
};

export default TaskList;
