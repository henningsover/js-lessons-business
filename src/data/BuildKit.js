import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 15em;
`;

const InputStyled = styled.input``;

export default class {
  renderInput(index, placeholder, stateVariable, setStateVariable) {
    return (
      <DivStyled key={index}>
        <label>{placeholder}</label>
        <input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => setStateVariable(e.target.value)}
          required
        />
      </DivStyled>
    );
  }

  renderVerticalTr(index, head, data) {
    return (
      <tr key={index}>
        <th>{head}</th>
        <td>{data}</td>
      </tr>
    );
  }
}
