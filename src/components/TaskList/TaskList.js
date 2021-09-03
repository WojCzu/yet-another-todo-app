import React from 'react';
import { useLocation } from 'react-router';
import Task from 'components/Task/Task';
import { StyledList, StyledInfo } from './TaskList.styles';
import { useTask } from 'hooks/useTask';

const shouldShow = (isFinished, pathname) => {
  switch (pathname) {
    case '/finished':
      return isFinished === true;
    case '/unfinished':
      return isFinished === false;
    case '/all':
    default:
      return true;
  }
};

const TaskList = () => {
  const { data } = useTask();
  const { pathname } = useLocation();

  const tasksToShow = data.filter(({ isFinished }) =>
    shouldShow(isFinished, pathname)
  );

  return (
    <>
      {tasksToShow.length ? (
        <StyledList>
          {tasksToShow.map(({ id, name, isFinished }) => (
            <Task key={id} id={id} name={name} isFinished={isFinished} />
          ))}
        </StyledList>
      ) : (
        <StyledInfo>There is nothing to show...</StyledInfo>
      )}
    </>
  );
};

export default TaskList;
