import React from 'react';
import styled from 'styled-components';
import UserKit from '../../data/UserKit';
import NavBarLink from './NavBarLink';

const UlStyled = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export default function NavBar() {
  const userKit = new UserKit();
  const token = userKit.getToken();
  return (
    <nav>
      <UlStyled>
        {!token && (
          <li>
            <NavBarLink url="/login" title="Login" />
          </li>
        )}
        {token && (
          <li>
            <NavBarLink url="/home" title="Home" />
          </li>
        )}
      </UlStyled>
    </nav>
  );
}
