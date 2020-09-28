import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserKit from '../data/UserKit';
import BuildKit from '../data/BuildKit';
import DeleteButton from '../components/customer_details_page/DeleteButton';
import LoggedInTopContent from '../components/global/LoggedInTopContent';
import { CenteredContainer } from '../components/global/GlobalStyledComponents';
import { Link } from 'react-router-dom';

const DetailsCard = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-top: 3em;
  padding: 0;
  width: 100vw;
  background: whitesmoke;
  color: #172341;

  -webkit-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  -moz-box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  box-shadow: -5px 5px 6px 1px rgba(23, 35, 65, 0.83);
  @media (min-width: 800px) {
    width: 720px;
    border-radius: 10px;
  }
`;

const CustomerTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  padding: 0 0.5em;
  font-size: 14px;
  border: 1px solid #bec8de;
  @media (min-width: 500px) {
    font-size: 16px;
  }
  th {
    width: 12em;
    background: #3f517d;
    color: whitesmoke;
    padding: 5px;
    border-spacing: 0;
  }
  td {
    color: #172341;
    padding: 5px 5px 5px 10px;
  }
  tr:nth-child(even) {
    td {
      background: whitesmoke;
    }
  }
  tr:nth-child(odd) {
    td {
      background: #e3e3ea;
    }
  }
`;

const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8em 0.5em;
  background: #2b3b63;
  color: whitesmoke;
  @media (min-width: 800px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const CardContent = styled.div`
  padding: 2em 0.5em;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const CloseLink = styled.div`
  height: 100%;
  background: ;
  a {
    display: flex;
    background: #687698;
    color: whitesmoke;
    align-items: center;
    text-decoration: none;
    padding: 0.3rem 0.4rem;
    &:hover {
      background: #868fa4;
      transition: background-color 0.2s;
    }
  }
`;

const Title = styled.h2``;

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

  return (
    <main>
      <CenteredContainer>
        <LoggedInTopContent pageTitle="Customer Details" />
        {customerArr && (
          <DetailsCard>
            <CardHead>
              <Title>{currentCustomer.name}</Title>
              <CloseLink>
                <Link to="/home">Close</Link>
              </CloseLink>
            </CardHead>
            <CardContent>
              <CustomerTable>
                <tbody>
                  {customerArr.map((row, index) => {
                    return buildKit.renderVerticalTr(index, row.head, row.data);
                  })}
                </tbody>
              </CustomerTable>
              <DeleteButton customerId={currentCustomer.id} />
            </CardContent>
          </DetailsCard>
        )}
      </CenteredContainer>
    </main>
  );
}
