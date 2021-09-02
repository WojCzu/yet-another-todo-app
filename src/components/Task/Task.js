import React from 'react';
import Button from 'components/Button/Button';
import trashcanIcon from 'assets/icons/trashcan.svg';
import { Wrapper, Checkbox, StyledLabel } from './Task.styles';
import { useTask } from 'hooks/useTask';

const Task = ({ id, name, isFinished }) => {
  const { toggleFinish, deleteTask } = useTask();
  return (
    <Wrapper>
      <Checkbox type="checkbox" id={id} onClick={() => toggleFinish(id)} />
      <StyledLabel htmlFor={id} isFinished={isFinished}>
        {name}
      </StyledLabel>
      <Button icon={trashcanIcon} onClick={() => deleteTask(id)} />
    </Wrapper>
  );
};

export default Task;
