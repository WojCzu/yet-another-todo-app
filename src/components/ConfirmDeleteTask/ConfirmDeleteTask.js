import React from 'react';
import {
  StyledTitle,
  StyledInfo,
  StyledButton,
  ButtonsWrapper,
} from './ConfirmDeleteTask.styles';

const ConfirmDeleteTask = ({
  isSingleTask,
  handleDelete,
  handleCloseModal,
  taskName,
}) => {
  return (
    <>
      <StyledTitle>
        {isSingleTask ? 'Delete task?' : 'Delete completed tasks?'}
      </StyledTitle>
      <StyledInfo>
        Are you sure you want to delete{' '}
        <em>{isSingleTask ? taskName : 'all finished'}</em> task
        {isSingleTask ? '' : 's'}? This cannot be undone.
      </StyledInfo>
      <ButtonsWrapper>
        <StyledButton
          onClick={() => {
            handleDelete();
            handleCloseModal();
          }}
        >
          Delete
        </StyledButton>
        <StyledButton isPrimary onClick={handleCloseModal}>
          Cancel
        </StyledButton>
      </ButtonsWrapper>
    </>
  );
};

export default ConfirmDeleteTask;
