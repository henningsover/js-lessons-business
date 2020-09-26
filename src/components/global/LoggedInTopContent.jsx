import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import LogoutButton from './LogoutButton';

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #2b3b63;
  color: whitesmoke;
  padding: 0.5em;
  margin-bottom: 20px;
  @media (min-width: 800px) {
    flex-direction: row;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const TopContainerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
    width: 25em;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function LoggedInTopContent({ pageTitle }) {
  const { userData } = useContext(UserContext);
  return (
    <TopContainer>
      <h1>{pageTitle}</h1>
      {userData && (
        <TopContainerContentWrapper>
          <div>
            <p>{`Logged in as: ${userData.firstName} ${userData.lastName}`} </p>
            <p>{`Email: ${userData.email}`}</p>
          </div>
          <LogoutButton />
        </TopContainerContentWrapper>
      )}
    </TopContainer>
  );
}
