import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addName } from '../redux/actions'
import Input from '../components/Input';
import Title from '../components/Title'
import ButtonNext from '../components/ButtonNext';

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
    const { addNameToStore } = this.props;
    return (
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
          onClick={ () => addNameToStore(name) }
        />
      </main>
    )
  }
}

Name.propTypes = {
  addNameToStore: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addNameToStore: (name) => dispatch(addName(name))
})

export default connect(null, mapDispatchToProps)(Name);