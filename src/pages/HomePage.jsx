import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import UserKit from '../data/UserKit';
import { UserContext } from '../contexts/UserContext';
import CreateCustomerForm from '../components/home_page/CreateCustomerForm';
import CustomerList from '../components/home_page/CustomerList';

import { CenteredContainer } from '../components/global/GlobalStyledComponents';
import LoggedInTopContent from '../components/global/LoggedInTopContent';

const ContentWrapper = styled(CenteredContainer)`
  padding-top: 1em;
`;

const CustomerListContainer = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`;

const CreateCustomerContainer = styled.div`
  width: fit-content;
`;
const CreateCustomerTitle = styled.h3`
  padding: 0.5em;
  background: #2b3b63;
  color: whitesmoke;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function HomePage() {
  const {
    customerList,
    setCustomerList,
    shouldLoadCustomerList,
    setShouldLoadCustomerList,
    userData,
    setUserData,
  } = useContext(UserContext);

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
        if (data.results.length > 0) {
          setCustomerList(data.results);
        } else {
          setCustomerList(null);
        }
        console.log(data.results.length);
      });
  }

  useEffect(() => {
    if (shouldLoadCustomerList) {
      getCustomerList();
      setShouldLoadCustomerList(false);
      console.log('Loaded customer list');
    }
  }, [shouldLoadCustomerList]);

  useEffect(() => {
    if (!userData) {
      getUser();
    }
    // getCustomerList();
  }, []);

  return (
    <main>
      <ContentWrapper>
        <LoggedInTopContent pageTitle="Home" />
        <CustomerListContainer>
          <h3>Customers:</h3>
          {customerList ? <CustomerList /> : <span>No customers yet</span>}
        </CustomerListContainer>
        <CreateCustomerContainer>
          <CreateCustomerTitle>Create new customer:</CreateCustomerTitle>
          <CreateCustomerForm />
        </CreateCustomerContainer>
      </ContentWrapper>
    </main>
  );
}
