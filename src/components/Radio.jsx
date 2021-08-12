import React, { Component } from 'react';

class Radio extends Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <h1>{ label }</h1>
        <label for="biscoito">
          Biscoito
        <input
          id="biscoito"
          name="preferencia"
          type="radio"
        />
      </label>
        <label for="bolacha">
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