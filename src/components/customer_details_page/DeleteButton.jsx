import React from 'react';
import { useHistory } from 'react-router-dom';
import UserKit from '../../data/UserKit';

export default function DeleteButton({ customerId }) {
  const userKit = new UserKit();
  const history = useHistory();

  function handleDelete() {
    userKit.deleteCustomer(customerId).then(history.push('/home'));
  }
  return <button onClick={handleDelete}>Delete customer</button>;
}
