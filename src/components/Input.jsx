import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeholder, name, onChange } = this.props;
    return (
      <input
        placeholder = { placeholder }
        name= { name }
        type="text"
        onChange={ onChange }
      />
    )
  }
}

export default Input;