import React from 'react';
import { Wrapper, Checkbox, StyledLabel, StyledButton } from './Task.styles';

const Task = ({ id, name, isFinished }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id={id} />
      <StyledLabel htmlFor={id} isChecked={isFinished}>
        {name}
      </StyledLabel>
      <StyledButton />
    </Wrapper>
  );
};

export default Task;
