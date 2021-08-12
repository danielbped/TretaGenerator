import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const { label, onChange } = this.props;
    return (
      <div>
        <h1>{ label }</h1>
        <label htmlFor="biscoito">
          Biscoito
        <input
          id="biscoito"
          name="preference"
          value="biscoito"
          type="radio"
          onChange={ onChange }
        />
      </label>
        <label htmlFor="bolacha">
          Bolacha
        <input
          id="bolacha"
          name="preference"
          value="bolacha"
          type="radio"
          onChange={ onChange }
        />
      </label>
      </div>
    )
  }
}

export default Radio;