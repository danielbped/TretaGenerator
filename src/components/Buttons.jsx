import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const { onClick, className } = this.props;
    return(
      <main>
        <h1 className={
          `font-mono
          uppercase
          text-center
          text-2xl
          m-6`}
        >
          Escolha o pior:
        </h1>
        <div className="flex flex-col h-20">
          <button 
            name="food"
            value="açaí"
            type="button"
            onClick={ onClick }
            className={ className }
          >
            Açaí
          </button>
          <button 
            name="food"
            value="sushi"
            type="button"
            onClick={ onClick }
            className={ className }
          >
            Sushi
          </button>
          <button 
            name="food"
            value="sopa"
            type="button"
            onClick={ onClick }
            className={ className }
          >
              Sopa
          </button>
        </div>
      </main>
    )
  }
}

export default Buttons;