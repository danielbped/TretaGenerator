import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFood } from '../redux/actions'
import Buttons from '../components/Buttons';


class Comida extends Component {
  constructor() {
    super();

    this.state = {
      food: ''
    }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { name, value } }) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { food } = this.state;
    const { addFoodToStore } = this.props;
    return (
      <main>
        <Buttons value={ food } onClick={ (e) => this.handleClick(e) }/>
        <Link to="/animal">
          <button
            type="button"
            onClick={ () => addFoodToStore(food) }
            disabled={ food === '' }
          >
            Próxima
          </button>
        </Link>
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