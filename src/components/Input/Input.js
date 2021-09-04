import React, { useState } from 'react';
import IconButton from 'components/IconButton/IconButton';
import plus from 'assets/icons/plus.svg';
import { StyledForm, StyledInput } from './Input.styles';
import { useTask } from 'hooks/useTask';

const Input = () => {
  const [name, setName] = useState('');
  const { addTask } = useTask();

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        if (name.length > 2) {
          addTask(name);
          setName('');
        }
      }}
    >
      <StyledInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Create a new task..."
      />
      <IconButton icon={plus} type="submit" srText="add task" />
    </StyledForm>
  );
};

export default Input;
