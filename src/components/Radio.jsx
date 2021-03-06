import React, { Component } from 'react';
import Title from './Title'

class Radio extends Component {
  render() {
    const { label, onChange } = this.props;
    return (
      <div className="text-center">
        <Title text={ label } />
        <label 
          htmlFor="biscoito"
          className="
          uppercase
          dark:text-white
          transition
          duration-1000"
        >
          Biscoito
        <input
          id="biscoito"
          name="preference"
          value="biscoito"
          type="radio"
          onChange={ onChange }
          className="mr-4 ml-2"
        />
      </label>
        <label 
          htmlFor="bolacha"
          className="
          uppercase
          dark:text-white
          transition
          duration-1000"
        >
          Bolacha
        <input
          id="bolacha"
          name="preference"
          value="bolacha"
          type="radio"
          onChange={ onChange }
          className="mr-4  ml-2"
        />
      </label>
      </div>
    )
  }
}

export default Radio;