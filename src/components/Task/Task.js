import React from 'react';
import IconButton from 'components/IconButton/IconButton';
import trashcanIcon from 'assets/icons/trashcan.svg';
import { Wrapper, Checkbox, StyledLabel } from './Task.styles';
import { useTask } from 'hooks/useTask';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import ConfirmDeleteTask from 'components/ConfirmDeleteTask/ConfirmDeleteTask';

const Task = ({ id, name, isFinished }) => {
  const { toggleFinish, deleteTask } = useTask();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        id={id}
        defaultChecked={isFinished}
        onChange={() => toggleFinish(id)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            toggleFinish(id);
          }
        }}
      />
      <StyledLabel htmlFor={id} isFinished={isFinished}>
        {name}
      </StyledLabel>
      <IconButton
        icon={trashcanIcon}
        onClick={handleOpenModal}
        srText={`delete "${name}" task`}
      />
      {isOpen && (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
          <ConfirmDeleteTask
            isSingleTask
            handleDelete={() => deleteTask(id)}
            handleCloseModal={handleCloseModal}
            taskName={name}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

export default Task;
