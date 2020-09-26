import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UserKit from '../../data/UserKit';

const ButtonStyled = styled.button`
  width: 5em;
  padding: 0px 5px;
  margin: 10px 0 5px 0;
  @media (min-width: 800px) {
    margin: 0;
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
