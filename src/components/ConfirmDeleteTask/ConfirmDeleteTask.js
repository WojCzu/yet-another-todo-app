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
      <StyledTitle id="modal__heading">
        {isSingleTask ? 'Delete task?' : 'Delete completed tasks?'}
      </StyledTitle>
      <StyledInfo id="modal__description">
        Are you sure you want to delete{' '}
        {isSingleTask ? (
          <>
            <em>{taskName}</em> task
          </>
        ) : (
          <>
            <em>all finished</em> tasks
          </>
        )}
        ? This cannot be undone.
      </StyledInfo>
      <ButtonsWrapper>
        <StyledButton isPrimary onClick={handleCloseModal}>
          Cancel
        </StyledButton>
        <StyledButton
          onClick={() => {
            handleDelete();
            handleCloseModal();
          }}
        >
          Delete
        </StyledButton>
      </ButtonsWrapper>
    </>
  );
};

export default ConfirmDeleteTask;
