import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '../components/Select'

class Animal extends Component {
  render() {
    return (
      <main>
        <h1>Escolha um animal</h1>
        <Select />
        <Link to="/manchete">
          <button type="button">
            Próxima
          </button>
        </Link>
      </main>
    )
  }
}

export default Animal;