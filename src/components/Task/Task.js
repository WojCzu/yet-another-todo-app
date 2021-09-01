import React from 'react';
import Button from 'components/Button/Button';
import trashcanIcon from 'assets/icons/trashcan.svg';
import { Wrapper, Checkbox, StyledLabel } from './Task.styles';

const Task = ({ id, name, isFinished, deleteTask }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id={id} />
      <StyledLabel htmlFor={id} isFinished={isFinished}>
        {name}
      </StyledLabel>
      <Button icon={trashcanIcon} onClick={() => deleteTask(id)} />
    </Wrapper>
  );
};

export default Task;
