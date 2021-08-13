import React, { Component } from 'react';
import DarkModeButton from './DarkModeButton'

class Header extends Component {
  render() {
    return(
      <header className="flex justify-between">
        <h1 className="dark:text-white
          transition
          duration-1000
          uppercase
          m-4
          font-bold
          animate-pulse
          select-none"
        >
          Treta Generator
        </h1>
        <DarkModeButton />
      </header>
    )
  }
}

export default Header;