import React, { Component } from 'react';
import Input from '../components/Input';
import Title from '../components/Title'
import ButtonNext from '../components/ButtonNext';
import MyContext from '../MyContext';

class Name extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    }

  this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: {name, value} }) {
    this.setState({[name]: value})
  }

  render() {
    const { name } = this.state;
    return (
    <MyContext.Consumer>
      {({ handleClick }) => (
        <main className="flex flex-col">
          <Title text="Digite um nome" />
          <Input 
            name="name"
            placeholder="Nome"
            value = { name }
            onChange={ this.handleChange }
            />
          <ButtonNext
            link="/preferencia"
            name={ name }
            onClick={ () => handleClick('name', name) }
            />
        </main>
      )}
    </MyContext.Consumer>
    )
  }
}

export default Name;