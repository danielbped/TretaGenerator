import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const { label, onChange } = this.props;
    return (
      <div className="text-center">
        <h1 className={
          `font-mono
          uppercase
          text-center
          text-2xl
          m-6`}
        >
          { label }
        </h1>
        <label 
          htmlFor="biscoito"
          className="uppercase"
        >
          Biscoito
        <input
          id="biscoito"
          name="preference"
          value="biscoito"
          type="radio"
          onChange={ onChange }
          className="mr-4"
        />
      </label>
        <label 
          htmlFor="bolacha"
          className="uppercase"
        >
          Bolacha
        <input
          id="bolacha"
          name="preference"
          value="bolacha"
          type="radio"
          onChange={ onChange }
          className="mr-4"
        />
      </label>
      </div>
    )
  }
}

export default Radio;