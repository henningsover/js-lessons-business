import React, { useEffect, useContext, useState } from 'react';
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

const CustomersContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

const CreateCustomerContainer = styled.div`
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 100%;
  background: whitesmoke;
  color: #172341;
  border-radius: 0px;
  -webkit-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  -moz-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  @media (min-width: 800px) {
    width: 720px;
    padding: 2em;
    position: absolute;
    top: 38px;
    right: 0px;
  }
`;

const CustomersTopContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  background: #2b3b63;
  color: whitesmoke;
  @media (min-width: 800px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
const CustomersBottom = styled.div`
  width: 100%;
  height: 2em;
  background: #2b3b63;
  @media (min-width: 800px) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ToggleModalButton = styled.button`
  width: 12em;
  text-align: center;
`;

const CreateCustomerTitle = styled.h2`
  margin-top: 10px;
`;

export default function HomePage() {
  const [createUserButtonMsg, setCreateUserButtonMsg] = useState('Create customer');
  const [shouldShowCreateUserForm, setShouldShowCreateUserForm] = useState(false);
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

  function toggleCreateUserModal() {
    setShouldShowCreateUserForm(!shouldShowCreateUserForm);
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
    }
    {
      getUser();
    }
    // getCustomerList();
  }, []);
  useEffect(() => {
    if (!shouldShowCreateUserForm) {
      setCreateUserButtonMsg('Create customer');
    } else {
      setCreateUserButtonMsg('Close');
    }
  }, [shouldShowCreateUserForm]);

  return (
    <main>
      <ContentWrapper>
        <LoggedInTopContent pageTitle="Home" />
        <div>
          <CustomersContainer>
            <CustomersTopContent>
              <h3>Customers:</h3>
              <ToggleModalButton onClick={toggleCreateUserModal}>{createUserButtonMsg}</ToggleModalButton>
            </CustomersTopContent>
            {shouldShowCreateUserForm && (
              <CreateCustomerContainer>
                <CreateCustomerTitle>Create new customer:</CreateCustomerTitle>
                <CreateCustomerForm setShouldShowCreateUserForm={setShouldShowCreateUserForm} />
              </CreateCustomerContainer>
            )}
            {customerList ? <CustomerList /> : <span>No customers yet</span>}
            <CustomersBottom />
          </CustomersContainer>
        </div>
      </ContentWrapper>
    </main>
  );
}
