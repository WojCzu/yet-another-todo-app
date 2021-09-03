import React, { useState } from 'react';
import Button from 'components/Button/Button';
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
      <Button icon={plus} type="submit" />
    </StyledForm>
  );
};

export default Input;
