import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAnimal } from '../redux/actions'
import ButtonNext from '../components/ButtonNext';
import Select from '../components/Select'
import Title from '../components/Title';

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
        <Title text="Escolha um animal" />
        <Select onChange = { this.handleChange } />
        <ButtonNext
          name={ animal }
          link="/manchete"
          onClick={ () => addAnimalToStore(animal) }
        />
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