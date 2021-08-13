import React, { Component } from 'react';
import ButtonNext from '../components/ButtonNext';
import Select from '../components/Select'
import Title from '../components/Title';
import MyContext from '../context/MyContext';

class Animal extends Component {
  constructor() {
    super();

    this.state ={
      animal: 'Gato',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { animal } = this.state;
    const { handleClick } = this.context;
    
    return (
      <main className="flex flex-col">
        <Title text="Escolha um animal" />
        <Select onChange = { this.handleChange } />
        <ButtonNext
          name={ animal }
          link="/manchete"
          onClick={ () => handleClick('animal', animal) }
        />
      </main>
    )
  }
}

Animal.contextType = MyContext;

export default Animal;