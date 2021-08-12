import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <h1>{ label }</h1>
        <label htmlFor="biscoito">
          Biscoito
        <input
          id="biscoito"
          name="preferencia"
          type="radio"
        />
      </label>
        <label htmlFor="bolacha">
          Bolacha
        <input
          id="bolacha"
          name="preferencia"
          type="radio"
        />
      </label>
      </div>
    )
  }
}

export default Radio;