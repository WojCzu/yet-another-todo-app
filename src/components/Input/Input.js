import React from 'react';
import Button from 'components/Button/Button';
import plus from 'assets/icons/plus.svg';
import { StyledForm, StyledInput } from './Input.styles';

const Input = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Create a new task..." />
      <Button icon={plus} type="submit" />
    </StyledForm>
  );
};

export default Input;
