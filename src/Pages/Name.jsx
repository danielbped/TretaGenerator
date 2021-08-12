import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

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
      <main>
        <h1>Digite um nome</h1>
        <Input 
          name="name"
          placeholder="Nome"
          value = { name }
          onChange={ this.handleChange }
        />
        <Link to="/preferencia">
          <button type="button">
            Próxima
          </button>
        </Link>
      </main>
    )
  }
}

export default Name;