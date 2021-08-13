import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackButton extends Component {
  render() {
    return (
      <button
        type="button"
        className={`
        block
        mx-auto
        my-12
        bg-indigo-200
        p-4
        rounded-2xl
        transition hover:bg-indigo-300
        `}
      >
      <Link to="/">
        Voltar
      </Link>
      </button>
    )
  }
}

export default BackButton;