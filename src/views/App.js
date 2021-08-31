import React from 'react';
import TaskList from 'components/TaskList/TaskList';
import NavBar from 'components/NavBar/NavBar';
import { Wrapper, ListWrapper, Title } from './App.styles';
import data from 'data/tasks';
import Input from 'components/Input/Input';

const App = () => {
  const tasksLeft = data.reduce(
    (sum, task) => (task.isFinished ? sum + 1 : sum),
    0
  );
  return (
    <Wrapper>
      <Title>
        Yet another <span>ToDo app</span>
      </Title>
      <Input />
      <ListWrapper>
        <TaskList data={data} />
        <NavBar tasksLeft={tasksLeft} />
      </ListWrapper>
    </Wrapper>
  );
};

export default App;
