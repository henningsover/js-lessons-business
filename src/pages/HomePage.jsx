import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../data/UserKit';
import { UserContext } from '../contexts/UserContext';
import CreateCustomerForm from '../components/home_page/CreateCustomerForm';
import CustomerList from '../components/home_page/CustomerList';

export default function HomePage() {
  const { customerList, setCustomerList } = useContext(UserContext);
  const [shouldLoadCustomerList, setshouldLoadCustomerList] = useState(true);
  const userKit = new UserKit();
  const history = useHistory();

  const token = userKit.getToken();
  if (!token) {
    history.push('/');
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
    if (shouldLoadCustomerList) {
      getCustomerList();
      setshouldLoadCustomerList(false);
    }
    console.log('Fetching');
  }, [shouldLoadCustomerList]);

  return (
    <main>
      <h1>Home</h1>
      {customerList ? <CustomerList /> : <span>No customers yet</span>}
      <hr></hr>
      <CreateCustomerForm setshouldLoadCustomerList={setshouldLoadCustomerList} />
    </main>
  );
}
