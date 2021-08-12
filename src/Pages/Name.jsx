import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addName } from '../redux/actions'
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
    const { addNameToStore } = this.props;
    return (
      <main>
        <h1 
          className={
          `font-mono
          uppercase
          text-center
          text-2xl
          m-6`}
        >
          Digite um nome
        </h1>
        <Input 
          name="name"
          placeholder="Nome"
          value = { name }
          onChange={ this.handleChange }
          className={
            `p-4
            rounded-2xl
            focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent`
          }
        />
        <Link to="/preferencia">
          <button
          type="button"
          onClick={ () => addNameToStore(name) }
          disabled={ name === '' }
          className={
            `m-4
            p-4
            rounded-2xl
            bg-indigo-200
            transition hover:bg-indigo-300`
          }
          >
            Próxima
          </button>
        </Link>
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