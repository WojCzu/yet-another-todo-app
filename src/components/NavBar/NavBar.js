import { useTask } from 'hooks/useTask';
import React from 'react';
import {
  Wrapper,
  TaskInfo,
  ClearButton,
  NavList,
  StyledLink,
} from './NavBar.styles';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';

const NavBar = () => {
  const { tasksLeft, clearFinished } = useTask();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Wrapper>
      <TaskInfo>
        {tasksLeft} task{tasksLeft === 1 ? '' : 's'} left
      </TaskInfo>
      <nav>
        <NavList>
          <li>
            <StyledLink to="/all">All</StyledLink>
          </li>
          <li>
            <StyledLink to="/unfinished">Unfinished</StyledLink>
          </li>
          <li>
            <StyledLink to="/finished">Finished</StyledLink>
          </li>
        </NavList>
      </nav>
      <ClearButton onClick={handleOpenModal}>clear finished</ClearButton>
      {isOpen && (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
          <button
            onClick={() => {
              clearFinished();
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

export default NavBar;
