import React, { useState } from 'react';
import BuildKit from '../../data/BuildKit';
import UserKit from '../../data/UserKit';

export default function CreateCustomerForm() {
  const [name, setName] = useState();
  const [organisationNr, setOrganisationNr] = useState();
  const [vatNr, setVatNr] = useState();
  const [reference, setReference] = useState();
  const [paymentTerm, setPaymentTerm] = useState();
  const [website, setWebsite] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const userKit = new UserKit(),
  const buildKit = new BuildKit(),

  
  return (
    <form>
      <h1>Hej</h1>
    </form>
  );
}
