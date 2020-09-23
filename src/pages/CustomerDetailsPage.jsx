import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserKit from '../data/UserKit';
import BuildKit from '../data/BuildKit';
import DeleteButton from '../components/customer_details_page/DeleteButton';
import LoggedInTopContent from '../components/global/LoggedInTopContent';
import { CenteredContainer } from '../components/global/GlobalStyledComponents';

const ContentWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  padding: 2em;
  width: 50vw;
  background: whitesmoke;
  color: #172341;
  border-radius: 10px;
  -webkit-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  -moz-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
`;

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
      <CenteredContainer>
        <LoggedInTopContent pageTitle="Customer Details" />
        <ContentWrapper>
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
              <DeleteButton customerId={currentCustomer.id} />
            </div>
          )}
        </ContentWrapper>
      </CenteredContainer>
    </main>
  );
}
