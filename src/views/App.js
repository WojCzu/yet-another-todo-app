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
      return state.filter(({ id }) => id !== action.payload.id);
    case 'DEL_ALL_FINISHED':
      return state.filter(({ isFinished }) => !isFinished);
    case 'FINISH_TASK':
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, isFinished: !task.isFinished };
        }
        return task;
      });
    default:
      return state;
  }
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, tasks);
  const tasksLeft = data.reduce(
    (sum, task) => (task.isFinished ? sum : sum + 1),
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
        <TaskList
          data={data}
          deleteTask={(id) => dispatch({ type: 'DEL_TASK', payload: { id } })}
          finishTask={(id) =>
            dispatch({ type: 'FINISH_TASK', payload: { id } })
          }
        />
        <NavBar
          tasksLeft={tasksLeft}
          clearFinished={() => dispatch({ type: 'DEL_ALL_FINISHED' })}
        />
      </ListWrapper>
    </Wrapper>
  );
};

export default App;
