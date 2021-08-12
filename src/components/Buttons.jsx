import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return(
      <main>
        <h1>Escolha o pior:</h1>
        <button 
          name="comida"
          value="Açaí"
          type="button"
        >
          Açaí
        </button>
        <button 
          name="comida"
          value="Sushi"
          type="button"
        >
          Sushi
        </button>
        <button 
          name="comida"
          value="Sopa"
          type="button">
            Sopa
        </button>
      </main>
    )
  }
}

export default Buttons;