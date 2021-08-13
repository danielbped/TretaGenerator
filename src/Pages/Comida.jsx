import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import Title from '../components/Title';
import ButtonNext from '../components/ButtonNext';
import MyContext from '../MyContext';

class Comida extends Component {
  constructor() {
    super();

    this.state = {
      food: ''
    }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { name, value, className } }) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { food } = this.state;
    return (
      <MyContext.Consumer>
        {({ handleClick }) => (
          <main className="flex flex-col">
            <Title text="Escolha o pior:" />
            <Buttons
              value={ food }
              onClick={ (e) => this.handleClick(e) }
            />
            <ButtonNext
              name={food}
              onClick = { () => handleClick('food', food) }
              link="/animal"
            />
          </main>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Comida;