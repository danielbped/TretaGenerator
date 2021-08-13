import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      animal: '',
      food: '',
      name: '',
      preference: '',
    }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render () {
    const { animal, food, name, preference } = this.state;
    const { children } = this.props;
    const context = {
      animal,
      food,
      name,
      preference,
      handleClick: this.handleClick,
    }
    return (
      <MyContext.Provider value={ context }>
          { children }
      </MyContext.Provider>
    )
  }
}

export default Provider;