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
        <Buttons
          value={ food }
          onClick={ (e) => this.handleClick(e) }
          className={`
            bg-indigo-300
            rounded-2xl
            transition hover:bg-indigo-200
            p-4
            m-4
          `}
        />
        <Link to="/animal">
          <button
            type="button"
            onClick={ () => addFoodToStore(food) }
            disabled={ food === '' }
            className={
              `m-4
              block
              h-full
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

Comida.propTypes = {
  addFoodToStore: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addFoodToStore: (food) => dispatch(addFood(food))
})

export default connect(null, mapDispatchToProps)(Comida);