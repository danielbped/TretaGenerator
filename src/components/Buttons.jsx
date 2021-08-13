import React, { Component } from 'react';
import Title from './Title';

class Buttons extends Component {
  render() {
    const { onClick, className } = this.props;
    const options = ["Açaí", "Sushi", "Sopa"];
    return(
      <div>
        <Title text="Escolha o pior:" />
        <div className="h-20 flex flex-col">
          {options.map((option) => <button
            key= { option }
            name="food"
            value={ option.toLowerCase() }
            type="button"
            onClick={ onClick }
            className={`
            bg-indigo-300
            rounded-2xl
            transition hover:bg-indigo-200
            p-4
            m-4
          `}
          >
            {option}
          </button>)}
        </div>
      </div>
    )
  }
}

export default Buttons;