import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';

class Name extends Component {
  render() {
    return (
      <main>
        <Buttons />
        <Link to="/animal">
          <button type="button">
            Próxima
          </button>
        </Link>
      </main>
    )
  }
}

export default Name;