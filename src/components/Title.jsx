import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { text } = this.props;
    return(
      <h1 className={
        `font-mono
        uppercase
        text-center
        text-2xl
        m-6`}
      >
        { text }
      </h1>
    )
  }
}

export default Title;