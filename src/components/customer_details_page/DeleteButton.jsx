import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import UserKit from '../../data/UserKit';

export default function DeleteButton({ customerId }) {
  const { setShouldLoadCustomerList } = useContext(UserContext);
  const userKit = new UserKit();
  const history = useHistory();

  function handleDelete() {
    userKit.deleteCustomer(customerId).then((res) => {
      if (res.ok) {
        setShouldLoadCustomerList(true);
        history.push('/home');
      }
    });
  }
  return <button onClick={handleDelete}>Delete customer</button>;
}
