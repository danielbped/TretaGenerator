import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeholder, name, onChange, className } = this.props;
    return (
      <input
        placeholder = { placeholder }
        name= { name }
        type="text"
        onChange={ onChange }
        className={ className }
      />
    )
  }
}

export default Input;