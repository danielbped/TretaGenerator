import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class Manchete extends Component {
  render() {
    const { name, animal, food, preference } = this.props;
    return(
      <main>
        <h1 className="w-56">Extra! Extra!</h1>
        <p>
          {`Em entrevista internacional, ${name} teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? 
          ${name} foi direto na canela dizendo que o certo é ${preference}!
          E ainda complementou que ${food} `}
          {food === 'sopa' ? 'nem é janta' : 'é ruim'}
          {` e que nem seu ${animal} come!`}
        </p>
        <Link to="/">
          <button className="hover:bg-red-700" type="button">
            Voltar
          </button>
        </Link>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  animal: state.animal,
  food: state.food,
  preference: state.preference,
})

Manchete.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  food: PropTypes.string.isRequired,
  preference: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Manchete);