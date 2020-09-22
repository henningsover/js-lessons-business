import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

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

const Title = styled.div`
  height: 100%;
  background: ;
  a {
    display: flex;
    font-size: 2rem;
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

export default function SimpleLayout({ children }) {
  return (
    <div>
      <HeaderStyled>
        <HeaderWrapper>
          <Title>
            <Link to="/">Business</Link>
          </Title>
          <NavBar />
        </HeaderWrapper>
      </HeaderStyled>
      {children}
    </div>
  );
}
