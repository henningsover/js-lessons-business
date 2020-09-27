import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UserKit from '../../data/UserKit';

const ButtonStyled = styled.button`
  background: #687698;
  border-style: none;
  color: whitesmoke;
  padding: 5px 5px;
  font-size: 13px;
  width: 5em;
  margin: 10px 0 5px 0;
  @media (min-width: 800px) {
    margin: 0;
  }
  &:hover {
    background: #868fa4;
    transition: background-color 0.2s;
  }
`;

export default function LogoutButton() {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('BUSINESS_TOKEN');
    history.push('/');
  }

  return <ButtonStyled onClick={handleLogout}>Logout</ButtonStyled>;
}
