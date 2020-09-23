import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import UserKit from '../data/UserKit';
import { UserContext } from '../contexts/UserContext';
import CreateCustomerForm from '../components/home_page/CreateCustomerForm';
import CustomerList from '../components/home_page/CustomerList';

import { CenteredContainer } from '../components/global/GlobalStyledComponents';

const ContentWrapper = styled(CenteredContainer)`
  padding-top: 1em;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const MainContentContainer = styled.div`
  display: flex;
`;

const CustomerListContainer = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`;

export default function HomePage() {
  const { customerList, setCustomerList, shouldLoadCustomerList, setShouldLoadCustomerList } = useContext(UserContext);

  const [userData, setUserData] = useState(null);
  const userKit = new UserKit();
  const history = useHistory();

  const token = userKit.getToken();
  if (!token) {
    history.push('/');
  }

  function getUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
        console.log(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();
    getUser();
  }, []);

  return (
    <main>
      <ContentWrapper>
        <TopContainer>
          <h1>Home</h1>
          {userData && (
            <div>
              <p>{`Logged in as: ${userData.firstName} ${userData.lastName}`} </p>
              <p>{`Email: ${userData.email}`}</p>
            </div>
          )}
        </TopContainer>
        <MainContentContainer>
          <CustomerListContainer>
            <h3>Customers:</h3>
            {customerList ? <CustomerList /> : <span>No customers yet</span>}
          </CustomerListContainer>
          <div>
            <h3>Create new customer:</h3>
            <CreateCustomerForm setshouldLoadCustomerList={setshouldLoadCustomerList} />
          </div>
        </MainContentContainer>
      </ContentWrapper>
    </main>
  );
}
