import React from 'react';
import TaskList from 'components/TaskList/TaskList';
import NavBar from 'components/NavBar/NavBar';
import { Wrapper } from './App.styles';
import data from 'data/tasks';

const App = () => {
  const tasksLeft = data.reduce(
    (sum, task) => (task.isFinished ? sum + 1 : sum),
    0
  );
  return (
    <>
      <Wrapper>
        <TaskList data={data} />
        <NavBar tasksLeft={tasksLeft} />
      </Wrapper>
    </>
  );
};

export default App;
