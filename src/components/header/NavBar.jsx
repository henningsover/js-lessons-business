import React from "react";
import styled from "styled-components";
import NavBarLink from "./NavBarLink";

const UlStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export default function NavBar() {
  return (
    <nav>
      <UlStyled>
        <li>
          <NavBarLink url="/login" title="Login" />
        </li>
        <li>
          <NavBarLink url="/" title="Home" />
        </li>
      </UlStyled>
    </nav>
  );
}
