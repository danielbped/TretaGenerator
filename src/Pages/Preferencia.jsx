import React, { Component } from 'react';
import ButtonNext from '../components/ButtonNext';
import Radio from '../components/Radio';
import MyContext from '../MyContext';

class Preferencia extends Component {
  constructor() {
    super();

    this.state = {
      preference: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value }}) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { preference } = this.state;
    return (
      <MyContext.Consumer>
        {({ handleClick }) => (
          <main className="flex flex-col">
            <Radio
              label="Escolha o certo:"
              value={ preference }
              onChange={ this.handleChange }
            />
            <ButtonNext
              link="/comida"
              onClick={ () => handleClick('preference', preference) }
              name={ preference }
            />
          </main>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Preferencia;