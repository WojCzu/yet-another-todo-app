import React, { useState } from 'react';
import IconButton from 'components/IconButton/IconButton';
import plus from 'assets/icons/plus.svg';
import { StyledForm, StyledInput, Error } from './Input.styles';
import { useTask } from 'hooks/useTask';

const Input = () => {
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const { addTask } = useTask();

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        if (name.length > 2) {
          addTask(name);
          setName('');
          setIsError(false);
        } else {
          setIsError(true);
        }
      }}
    >
      <StyledInput
        isError={isError}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Create a new task..."
      />
      <IconButton icon={plus} type="submit" srText="add task" />
      {isError && <Error>Task name should be longer than 2 characters</Error>}
    </StyledForm>
  );
};

export default Input;
