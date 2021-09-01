import React from 'react';
import Task from 'components/Task/Task';
import { StyledList } from './TaskList.styles';

const TaskList = ({ data, deleteTask, finishTask }) => {
  return (
    <>
      {data.length ? (
        <StyledList>
          {data.map(({ id, name, isFinished }) => (
            <Task
              key={id}
              id={id}
              name={name}
              isFinished={isFinished}
              deleteTask={deleteTask}
              finishTask={finishTask}
            />
          ))}
        </StyledList>
      ) : (
        <div>Add your first task</div>
      )}
    </>
  );
};

export default TaskList;
