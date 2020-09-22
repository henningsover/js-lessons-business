import React from 'react';

export default class {
  renderInput(index, placeholder, stateVariable, setStateVariable) {
    return (
      <div key={index}>
        <label>{placeholder}</label>
        <input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => setStateVariable(e.target.value)}
          required
        />
      </div>
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
