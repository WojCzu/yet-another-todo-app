import React, { useReducer, useContext } from 'react';
import tasks from 'data/tasks';
import { v4 as uuid } from 'uuid';

const actionTypes = {
  addTask: 'ADD_TASK',
  deleteTask: 'DELETE_TASK',
  clearFinished: 'CLEAR_FINISHED',
  toggleFinish: 'TOGGLE_FINISH',
};

const reducer = (state, action) => {
  try {
    switch (action.type) {
      case actionTypes.addTask:
        return [...state, action.payload];

      case actionTypes.deleteTask:
        return state.filter(({ id }) => id !== action.payload.id);

      case actionTypes.clearFinished:
        return state.filter(({ isFinished }) => !isFinished);

      case actionTypes.toggleFinish:
        return state.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, isFinished: !task.isFinished };
          }
          return task;
        });

      default:
        return state;
    }
  } finally {
    console.log('save');
  }
};

const initialState = tasks;

const TaskContext = React.createContext({});

export const TaskProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const addTask = (name) =>
    dispatch({
      type: actionTypes.addTask,
      payload: { id: uuid(), name, isFinished: false },
    });

  const deleteTask = (id) => {
    dispatch({ type: actionTypes.deleteTask, payload: { id } });
  };

  const clearFinished = () => {
    dispatch({ type: actionTypes.clearFinished });
  };

  const toggleFinish = (id) => {
    dispatch({ type: actionTypes.toggleFinish, payload: { id } });
  };

  const tasksLeft = data.reduce(
    (sum, task) => (task.isFinished ? sum : sum + 1),
    0
  );

  return (
    <TaskContext.Provider
      value={{
        data,
        tasksLeft,
        addTask,
        deleteTask,
        clearFinished,
        toggleFinish,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const tasks = useContext(TaskContext);
  return tasks;
};
