import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export default function LoggedInTopContent({ pageTitle }) {
  const { userData } = useContext(UserContext);
  return (
    <TopContainer>
      <h1>{pageTitle}</h1>
      {userData && (
        <div>
          <p>{`Logged in as: ${userData.firstName} ${userData.lastName}`} </p>
          <p>{`Email: ${userData.email}`}</p>
        </div>
      )}
    </TopContainer>
  );
}
