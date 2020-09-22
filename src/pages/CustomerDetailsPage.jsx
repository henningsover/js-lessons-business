import React, { useEffect, useState } from 'react';
import UserKit from '../data/UserKit';
import BuildKit from '../data/BuildKit';

export default function CustomerDetailsPage(props) {
  const customerId = props.match.params.customerId;
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [customerArr, setCustomerArr] = useState(null);
  const userKit = new UserKit();
  const buildKit = new BuildKit();

  useEffect(() => {
    getCustomer();
  }, []);

  useEffect(() => {
    if (currentCustomer) {
      createCustomerArr();
    }
  }, [currentCustomer]);

  function getCustomer() {
    userKit
      .getCustomer(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCurrentCustomer(data);
        console.log(data);
      });
  }

  function createCustomerArr() {
    const arrToRender = [
      { head: 'Organisation Number', data: currentCustomer.organisationNr },
      { head: 'VAT Number', data: currentCustomer.vatNr },
      { head: 'Reference', data: currentCustomer.reference },
      { head: 'Email', data: currentCustomer.email },
      { head: 'Phone Number', data: currentCustomer.phoneNumber },
      { head: 'Website', data: currentCustomer.website },
      { head: 'Payment Term', data: currentCustomer.paymentTerm },
    ];
    setCustomerArr(arrToRender);
  }

  console.log(currentCustomer);
  return (
    <main>
      {customerArr && (
        <div>
          <h1>{currentCustomer.name}</h1>
          <table>
            <tbody>
              {customerArr.map((row, index) => {
                return buildKit.renderVerticalTr(index, row.head, row.data);
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
