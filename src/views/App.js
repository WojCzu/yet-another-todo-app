import React from 'react';
import TaskList from 'components/TaskList/TaskList';
import NavBar from 'components/NavBar/NavBar';
import { Wrapper, ListWrapper, Title } from './App.styles';
import Input from 'components/Input/Input';

const App = () => {
  return (
    <Wrapper>
      <Title>
        Yet another <span>ToDo app</span>
      </Title>
      <Input />
      <ListWrapper>
        <TaskList />
        <NavBar />
      </ListWrapper>
    </Wrapper>
  );
};

export default App;
