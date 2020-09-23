import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import UserKit from '../../data/UserKit';
import styled from 'styled-components';

const TableFixHead = styled.div`
  overflow-y: auto;
  height: 190px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  thead th {
    position: sticky;
    top: 0;
  }
`;

const TableStyled = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 5px;
  }

  th {
    background: #2b3b63;
    color: white;
  }
`;

const TBodyStyled = styled.tbody`
  tr:nth-child(even) {
    background: #e3e3ea;
  }
  tr:nth-child(odd) {
    background: whitesmoke;
  }
`;

export default function CustomerList() {
  const { customerList, setCustomerList } = useContext(UserContext);
  const userKit = new UserKit();
  const history = useHistory();

  return (
    <TableFixHead>
      <TableStyled>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organisation Number</th>
            <th>Reference</th>
            <th></th>
          </tr>
        </thead>
        <TBodyStyled>
          {customerList &&
            customerList.map((customer, index) => {
              return (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.organisationNr}</td>
                  <td>{customer.reference}</td>
                  <td>
                    <Link to={`/customer/${customer.id}`}>
                      <span>View Details</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </TBodyStyled>
      </TableStyled>
    </TableFixHead>
  );
}
