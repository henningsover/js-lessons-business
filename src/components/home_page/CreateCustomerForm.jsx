import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import BuildKit from '../../data/BuildKit';
import UserKit from '../../data/UserKit';
import styled from 'styled-components';
import { FormStyled } from '../../components/global/GlobalStyledComponents';

const CustomerForm = styled(FormStyled)`
  padding: 0.5em;
  background: whitesmoke;
`;

const AddCustomerButton = styled.button`
  place-self: end;
  width: 10em;
  padding: 0.8em 0;
  justify-self: end;
  margin-top: 10px;
  background: #496385;
  color: whitesmoke;
  border-style: none;
  &:hover {
    background: #5981b5;
    transition: background-color 0.2s;
  }
  @media (min-width: 450px) {
    grid-column-start: 2;
  }
`;

export default function CreateCustomerForm({ setShouldShowCreateUserForm }) {
  const [name, setName] = useState('');
  const [organisationNr, setOrganisationNr] = useState('');
  const [vatNr, setVatNr] = useState('');
  const [reference, setReference] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { setShouldLoadCustomerList } = useContext(UserContext);

  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const history = useHistory();

  const inputObjects = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'John Doe',
      minLength: 1,
      maxLength: 50,
      state: name,
      setState: setName,
      pattern: null,
    },
    {
      label: 'Org. Number',
      type: 'number',
      placeholder: '123...',
      minLength: 1,
      maxLength: 30,
      state: organisationNr,
      setState: setOrganisationNr,
      pattern: null,
    },
    {
      label: 'VAT Number',
      type: 'text',
      placeholder: 'SE1234567890',
      minLength: 12,
      maxLength: 12,
      state: vatNr,
      setState: setVatNr,
      pattern: '(SE)?[0-9]{10}$',
    },
    {
      label: 'Reference',
      type: 'text',
      placeholder: 'Reference Name',
      minLength: 1,
      maxLength: 50,
      state: reference,
      setState: setReference,
      pattern: null,
    },
    {
      label: 'Payment Term',
      type: 'number',
      placeholder: '0-2147483647',
      minLength: 1,
      maxLength: 10,
      state: paymentTerm,
      setState: setPaymentTerm,
      pattern: null,
    },
    {
      label: 'Website',
      type: 'text',
      placeholder: 'https://www.website.se',
      minLength: 1,
      maxLength: 50,
      state: website,
      setState: setWebsite,
      pattern: null,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'john@doe.com',
      maxLength: 254,
      state: email,
      setState: setEmail,
      pattern: null,
    },
    {
      label: 'Phone Number',
      type: 'text',
      placeholder: '070-1234567',
      minLength: 1,
      maxLength: 20,
      state: phoneNumber,
      setState: setPhoneNumber,
      pattern: null,
    },
  ];

  //Todo: Make inputObjects contain objects with keys
  // const inputObjects = [
  //   { name: 'Name', stateVariable: name, setStateVariable: setName, inputType: 'text', maxLength: 50 },
  // ];

  //Fix validation for each input

  function handleSubmit(event) {
    event.preventDefault();
    const VATreg = /^(SE)?[0-9]{10}$/;
    if (!VATreg.test(vatNr)) {
      alert(`VAT number incorrect, follow pattern (SE1234567890)`);
    } else {
      userKit
        .createCustomer(name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber)
        .then((res) => {
          if (res.ok) {
            console.log('ok');
            setShouldLoadCustomerList(true);
            setShouldShowCreateUserForm(false);
            setName('');
            setOrganisationNr('');
            setVatNr('');
            setReference('');
            setPaymentTerm('');
            setWebsite('');
            setEmail('');
            setPhoneNumber('');
          }
        });
    }
  }

  return (
    <CustomerForm onSubmit={handleSubmit}>
      {inputObjects.map((inputItem, index) => {
        return buildKit.renderInput(
          index,
          inputItem.label,
          inputItem.type,
          inputItem.placeholder,
          inputItem.minLength,
          inputItem.maxLength,
          inputItem.state,
          inputItem.setState,
          inputItem.pattern
        );
      })}
      <AddCustomerButton type="submit">Add customer</AddCustomerButton>
    </CustomerForm>
  );
}
