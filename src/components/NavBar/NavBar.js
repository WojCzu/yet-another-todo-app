import React from 'react';
import {
  Wrapper,
  TaskInfo,
  ClearButton,
  NavList,
  StyledLink,
} from './NavBar.styles';

const NavBar = ({ tasksLeft, clearFinished }) => {
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
      <ClearButton onClick={clearFinished}>clear finished</ClearButton>
    </Wrapper>
  );
};

export default NavBar;
