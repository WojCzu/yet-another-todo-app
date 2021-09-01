import React, { useReducer } from 'react';
import TaskList from 'components/TaskList/TaskList';
import NavBar from 'components/NavBar/NavBar';
import { Wrapper, ListWrapper, Title } from './App.styles';
import tasks from 'data/tasks';
import Input from 'components/Input/Input';
import { v4 as uuid } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DEL_TASK':
      return state;
    case 'FINISH_TASK':
      return state;

    default:
      return state;
  }
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, tasks);
  const tasksLeft = data.reduce(
    (sum, task) => (task.isFinished ? sum + 1 : sum),
    0
  );
  return (
    <Wrapper>
      <Title>
        Yet another <span>ToDo app</span>
      </Title>
      <Input
        addUser={(name) =>
          dispatch({
            type: 'ADD_TASK',
            payload: { id: uuid(), name, isFinished: false },
          })
        }
      />
      <ListWrapper>
        <TaskList data={data} />
        <NavBar tasksLeft={tasksLeft} />
      </ListWrapper>
    </Wrapper>
  );
};

export default App;
