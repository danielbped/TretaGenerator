import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <div>
        <select name="animal">
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Papagaio">Papagaio</option>
        </select>
      </div>
    )
  }
}

export default Select;