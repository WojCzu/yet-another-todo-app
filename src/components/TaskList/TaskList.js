import React from 'react';
import Task from 'components/Task/Task';
import { StyledList } from './TaskList.styles';
import { useTask } from 'hooks/useTask';

const TaskList = () => {
  const { data } = useTask();

  return (
    <>
      {data.length ? (
        <StyledList>
          {data.map(({ id, name, isFinished }) => (
            <Task key={id} id={id} name={name} isFinished={isFinished} />
          ))}
        </StyledList>
      ) : (
        <div>Add your first task</div>
      )}
    </>
  );
};

export default TaskList;
