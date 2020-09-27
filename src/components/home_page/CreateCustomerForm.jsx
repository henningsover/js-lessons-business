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
  const [name, setName] = useState('Andss');
  const [organisationNr, setOrganisationNr] = useState('12313');
  const [vatNr, setVatNr] = useState('SE8279368765');
  const [reference, setReference] = useState('dbjalsb');
  const [paymentTerm, setPaymentTerm] = useState('2');
  const [website, setWebsite] = useState('ascascasc');
  const [email, setEmail] = useState('jljsbs@bjablsc.com');
  const [phoneNumber, setPhoneNumber] = useState('7386398276');

  const { setShouldLoadCustomerList } = useContext(UserContext);

  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const history = useHistory();

  // const inputObjects = [
  //   ['Name', name, setName],
  //   ['Organisation Number', organisationNr, setOrganisationNr],
  //   ['VAT Number', vatNr, setVatNr],
  //   ['Reference', reference, setReference],
  //   ['Payment Term', paymentTerm, setPaymentTerm],
  //   ['Website', website, setWebsite],
  //   ['Email', email, setEmail],
  //   ['Phone Number', phoneNumber, setPhoneNumber],
  // ];
  const inputObjects = [
    { label: 'Name', type: 'text', placeholder: 'John Doe', maxLength: 50, state: name, setState: setName },
    {
      label: 'Org. Number',
      type: 'number',
      placeholder: '123...',
      maxLength: 30,
      state: organisationNr,
      setState: setOrganisationNr,
    },
    {
      label: 'VAT Number',
      type: 'text',
      placeholder: 'SE1234567890',
      maxLength: 12,
      state: vatNr,
      setState: setVatNr,
      maxValue: null,
    },
    {
      label: 'Reference',
      type: 'text',
      placeholder: 'Reference Name',
      maxLength: 50,
      state: reference,
      setState: setReference,
    },
    {
      label: 'Payment Term',
      type: 'number',
      placeholder: '0-2147483647',
      maxLength: 10,
      state: paymentTerm,
      setState: setPaymentTerm,
      maxValue: 2147483647,
    },
    {
      label: 'Website',
      type: 'text',
      placeholder: 'https://www.website.se',
      maxLength: 50,
      state: website,
      setState: setWebsite,
    },
    { label: 'Email', type: 'email', placeholder: 'john@doe.com', maxLength: 254, state: email, setState: setEmail },
    {
      label: 'Phone Number',
      type: 'text',
      placeholder: '070-1234567',
      maxLength: 20,
      state: phoneNumber,
      setState: setPhoneNumber,
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
        const maxValue = inputItem.maxValue ? inputItem.maxValue : null;
        console.log(inputItem.setState);
        console.log(inputItem.state);
        return buildKit.renderInput(
          index,
          inputItem.label,
          inputItem.type,
          inputItem.placeholder,
          inputItem.maxLength,
          inputItem.state,
          inputItem.setState,
          maxValue
        );
      })}
      <AddCustomerButton type="submit">Add customer</AddCustomerButton>
    </CustomerForm>
  );
}
