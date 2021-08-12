import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAnimal } from '../redux/actions'
import Select from '../components/Select'

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
    const { addAnimalToStore } = this.props;
    return (
      <main>
        <h1 className={
          `font-mono
          uppercase
          text-center
          text-2xl
          m-6`}
        >
          Escolha um animal
        </h1>
        <Select onChange = { this.handleChange } />
        <Link to="/manchete">
          <button
            type="button"
            onClick={ () => addAnimalToStore(animal) }
            disabled={ animal === '' }
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

const mapDispatchToProps = (dispatch) => ({
  addAnimalToStore: (animal) => dispatch(addAnimal(animal))
})

Animal.propTypes = {
  addAnimalToStore: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Animal);