import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 85px 1fr 85px;
  grid-gap: 12px;
  align-items: center;

  margin-top: 30px;

  @media (max-width: 460px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TaskInfo = styled.span`
  justify-self: left;
  padding: 0.4em;

  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
`;

export const ClearButton = styled.button`
  justify-self: right;
  padding: 0.4em;

  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.coral};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 180px;
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  padding: 0.4em;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.color.violet};
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme.color.coral};
  }
`;

export const StyledNav = styled.nav`
  justify-self: center;
  @media (max-width: 460px) {
    order: 1;
    grid-column: span 2;
    border-top: 1px solid ${({ theme }) => theme.color.gray};
    padding-top: 4px;
  }
`;
