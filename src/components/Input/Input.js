import React, { useState } from 'react';
import Button from 'components/Button/Button';
import plus from 'assets/icons/plus.svg';
import { StyledForm, StyledInput } from './Input.styles';

const Input = ({ addUser }) => {
  const [name, setName] = useState('');
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        addUser(name);
        setName('');
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
