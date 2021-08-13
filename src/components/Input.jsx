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
        className={
          `p-4
          rounded-2xl
          focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent`
        }
      />
    )
  }
}

export default Input;