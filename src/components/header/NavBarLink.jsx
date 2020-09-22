import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavFixedItem = styled.div`
  height: 100%;
  background: ;
  a {
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;
    padding: 0.3rem 0.4rem;
    &:hover {
      background: #5981b5;
      transition: background-color 0.2s;
    }
  }
`;

export default function NavBarLink({ url, title }) {
  return (
    <NavFixedItem>
      <Link to={url}>
        <span>{title}</span>
      </Link>
    </NavFixedItem>
  );
}
