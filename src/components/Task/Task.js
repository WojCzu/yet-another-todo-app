import React from 'react';
import Button from 'components/Button/Button';
import trashcanIcon from 'assets/icons/trashcan.svg';
import { Wrapper, Checkbox, StyledLabel } from './Task.styles';
import { useTask } from 'hooks/useTask';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';

const Task = ({ id, name, isFinished }) => {
  const { toggleFinish, deleteTask } = useTask();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <Checkbox type="checkbox" id={id} onClick={() => toggleFinish(id)} />
      <StyledLabel htmlFor={id} isFinished={isFinished}>
        {name}
      </StyledLabel>
      <Button icon={trashcanIcon} onClick={handleOpenModal} />
      {isOpen && (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
          <button
            onClick={() => {
              deleteTask(id);
              handleCloseModal();
            }}
          >
            Delete
          </button>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Task;
