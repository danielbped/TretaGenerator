import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <select
          name="animal"
          onChange = { onChange }
        >
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Papagaio">Papagaio</option>
        </select>
      </div>
    )
  }
}

export default Select;