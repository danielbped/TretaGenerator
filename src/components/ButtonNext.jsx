import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonNext extends Component {
  render() {
    const { link, onClick, name } = this.props;
    return (
      <Link to={ link }>
        <button
            type="button"
            onClick={ onClick }
            disabled={ name === '' }
            className={
              `
              block
              bg-indigo-200
              m-4
              p-4
              rounded-2xl
              transition hover:bg-indigo-300`
            }
          >
            Próxima
          </button>
      </Link>
    )
  }
}

export default ButtonNext;