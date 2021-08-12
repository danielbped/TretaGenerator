import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radio from '../components/Radio';

class Name extends Component {
  render() {
    return (
      <main>
        <Radio label="Escolha o certo:" />
        <Link to="/comida">
          <button type="button">
            Próxima
          </button>
        </Link>
      </main>
    )
  }
}

export default Name;