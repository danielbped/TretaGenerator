import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import BackButton from '../components/BackButton';

class Manchete extends Component {
  render() {
    const { name, animal, food, preference } = this.props;
    if (name === '' || animal === '' || food === '' || preference === '') return <Redirect to='/' />
    return(
      <main className="w-1/2">
        <h1 className="text-center text-4xl my-12">Extra! Extra!</h1>
        <p className="text-center text-2xl font-serif">
          {`Em entrevista internacional, ${name} teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? 
          ${name} foi direto na canela dizendo que o certo é ${preference}!
          E ainda complementou que ${food} `}
          {food === 'sopa' ? 'nem é janta' : 'é ruim'}
          {` e que nem seu ${animal} come!`}
        </p>
        <BackButton />
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