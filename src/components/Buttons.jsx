import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { onClick } = this.props;
    return(
      <main>
        <h1>Escolha o pior:</h1>
        <button 
          name="food"
          value="açaí"
          type="button"
          onClick={ onClick }
        >
          Açaí
        </button>
        <button 
          name="food"
          value="sushi"
          type="button"
          onClick={ onClick }
        >
          Sushi
        </button>
        <button 
          name="food"
          value="sopa"
          type="button"
          onClick={ onClick }
        >
            Sopa
        </button>
      </main>
    )
  }
}

export default Buttons;