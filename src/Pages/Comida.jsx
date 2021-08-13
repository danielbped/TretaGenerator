import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFood } from '../redux/actions'
import Buttons from '../components/Buttons';
import Title from '../components/Title';
import ButtonNext from '../components/ButtonNext';

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
    const { addFoodToStore } = this.props;
    return (
      <main className="flex flex-col">
          <Title text="Escolha o pior:" />
          <Buttons
            value={ food }
            onClick={ (e) => this.handleClick(e) }
          />
          <ButtonNext
            name={food}
            onClick = {() => addFoodToStore(food)}
            link="/animal"
          />
      </main>
    )
  }
}

Comida.propTypes = {
  addFoodToStore: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addFoodToStore: (food) => dispatch(addFood(food))
})

export default connect(null, mapDispatchToProps)(Comida);