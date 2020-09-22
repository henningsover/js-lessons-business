import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%; 
  display flex;
  height: 3em;
  background: #15498c;
`;
const HeaderWrapper = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;

export default function SimpleLayout({ children }) {
  return (
    <div>
      <HeaderStyled>
        <HeaderWrapper>
          <Title>Hej</Title>
          <NavBar />
        </HeaderWrapper>
      </HeaderStyled>
      {children}
    </div>
  );
}
