import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import UserKit from '../../data/UserKit';

export default function CustomerList() {
  const { customerList, setCustomerList } = useContext(UserContext);
  const userKit = new UserKit();
  const history = useHistory();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Organisation Number</th>
          <th>Reference</th>
        </tr>
      </thead>
      <tbody>
        {customerList &&
          customerList.map((customer, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/customer/${customer.id}`}>
                    <span>{customer.name}</span>
                  </Link>
                </td>
                <td>{customer.organisationNr}</td>
                <td>{customer.reference}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
