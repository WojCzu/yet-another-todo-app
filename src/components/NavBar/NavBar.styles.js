import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TaskInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
  padding: 0.4em;
`;

export const ClearButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
  border: none;
  background: none;
  padding: 0.4em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.coral};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  padding: 0.4em;

  &.active {
    color: ${({ theme }) => theme.color.violet};
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme.color.coral};
  }
`;
