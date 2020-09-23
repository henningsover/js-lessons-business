import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 15em;
`;

const LabelStyled = styled.label`
  margin-bottom: 10px;
`;

const InputStyled = styled.input`
  padding: 0.5em;
  color: #172341;
  :focus {
    outline: none;
  }
`;

export default class {
  renderInput(index, placeholder, stateVariable, setStateVariable) {
    return (
      <DivStyled key={index}>
        <LabelStyled>{placeholder}</LabelStyled>
        <InputStyled
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
