import React, { useState } from 'react';
import BuildKit from '../../data/BuildKit';
import UserKit from '../../data/UserKit';

export default function CreateCustomerForm() {
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
  console.log(userKit);

  const inputObjects = [
    ['Name', name, setName],
    ['Organisation Number', organisationNr, setOrganisationNr],
    ['VAT Number(Ex: SE000000000000)', vatNr, setVatNr],
    ['Reference', reference, setReference],
    ['Payment Term(0)', paymentTerm, setPaymentTerm],
    ['Website', website, setWebsite],
    ['Email', email, setEmail],
    ['Phone Number', phoneNumber, setPhoneNumber],
  ];

  //Todo: Validate inputs to match API
  // const inputObjects = [
  //   { name: 'Name', stateVariable: name, setStateVariable: setName, inputType: 'text', maxLength: 50 },
  // ];

  function handleSubmit(event) {
    event.preventDefault();
    const VATreg = /^(SE)?[0-9]{12}$/;
    if (!VATreg.test(vatNr)) {
      console.log('VAT number not accepted');
    } else {
      userKit
        .createCustomer(name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputObjects.map((inputItem, index) => {
        return buildKit.renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <button type="submit">Add customer</button>
    </form>
  );
}
