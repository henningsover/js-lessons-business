import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BuildKit from '../../data/BuildKit';
import UserKit from '../../data/UserKit';
import styled from 'styled-components';

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  gap: 10px;
`;

export default function CreateCustomerForm({ setshouldLoadCustomerList }) {
  const [name, setName] = useState('');
  const [organisationNr, setOrganisationNr] = useState('');
  const [vatNr, setVatNr] = useState('');
  const [reference, setReference] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const userKit = new UserKit();
  const buildKit = new BuildKit();
  const history = useHistory();

  const inputObjects = [
    ['Name', name, setName],
    ['Organisation Number', organisationNr, setOrganisationNr],
    ['VAT Number', vatNr, setVatNr],
    ['Reference', reference, setReference],
    ['Payment Term', paymentTerm, setPaymentTerm],
    ['Website', website, setWebsite],
    ['Email', email, setEmail],
    ['Phone Number', phoneNumber, setPhoneNumber],
  ];

  //Todo: Make inputObjects contain objects with keys
  // const inputObjects = [
  //   { name: 'Name', stateVariable: name, setStateVariable: setName, inputType: 'text', maxLength: 50 },
  // ];

  function handleSubmit(event) {
    event.preventDefault();
    const VATreg = /^(SE)?[0-9]{12}$/;
    if (!VATreg.test(vatNr)) {
      console.log('VAT number not accepted');
    } else {
      userKit.createCustomer(name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber);
      setshouldLoadCustomerList(true);
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      {inputObjects.map((inputItem, index) => {
        return buildKit.renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button type="submit">Add customer</button>
    </FormStyled>
  );
}
