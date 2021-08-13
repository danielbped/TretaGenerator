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
        m-6
        dark:text-white
        transition
        duration-1000
        `}
      >
        { text }
      </h1>
    )
  }
}

export default Title;