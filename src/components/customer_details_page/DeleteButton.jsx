import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import UserKit from '../../data/UserKit';

const ButtonStyled = styled.button`
  grid-column-start: 2;
  width: fit-content;
  padding: 0.8em 0.5em;
  place-self: flex-end;
  margin-top: 10px;
  margin-right: 1em;
  background: #bd2929;
  color: whitesmoke;
  border-style: none;
  &:hover {
    background: #dc5151;
    transition: background-color 0.2s;
  }
`;

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
  return <ButtonStyled onClick={handleDelete}>Delete customer</ButtonStyled>;
}
