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

export default function CreateCustomerForm() {
  const [name, setName] = useState('Andss');
  const [organisationNr, setOrganisationNr] = useState('12313');
  const [vatNr, setVatNr] = useState('SE827936876514');
  const [reference, setReference] = useState('dbjalsb');
  const [paymentTerm, setPaymentTerm] = useState('2');
  const [website, setWebsite] = useState('ascascasc');
  const [email, setEmail] = useState('jljsbs@bjablsc.com');
  const [phoneNumber, setPhoneNumber] = useState('7386398276');

  const { setShouldLoadCustomerList } = useContext(UserContext);

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

  //Fix validation for each input

  function handleSubmit(event) {
    event.preventDefault();
    const VATreg = /^(SE)?[0-9]{10}$/;
    if (!VATreg.test(vatNr)) {
      console.log('VAT number not accepted');
    } else {
      userKit
        .createCustomer(name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber)
        .then((res) => {
          if (res.ok) {
            console.log('ok');
            setShouldLoadCustomerList(true);
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
        return buildKit.renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button type="submit">Add customer</button>
    </CustomerForm>
  );
}
