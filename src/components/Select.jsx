import React, { Component } from 'react';

class Select extends Component {
  render() {
    const options = ["Gato", "Cachorro", "Papagaio"]
    const { onChange } = this.props;
    return (
        <select
          name="animal"
          onChange = { onChange }
          className={
            `p-4
            rounded-2xl
            bg-indigo-50`
          }
        >
          {options.map((option) => 
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          )}
        </select>
    )
  }
}

export default Select;