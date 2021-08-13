import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPreference } from '../redux/actions';
import ButtonNext from '../components/ButtonNext';
import Radio from '../components/Radio';

class Preferencia extends Component {
  constructor() {
    super();

    this.state = {
      preference: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value }}) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { preference } = this.state;
    const { addPreferenceToStore } = this.props;
    return (
      <main className="flex flex-col">
        <Radio
          label="Escolha o certo:"
          value={ preference }
          onChange={ this.handleChange }
        />
        <ButtonNext
          link="/comida"
          onClick={ () => addPreferenceToStore(preference) }
          name={ preference }
        />
      </main>
    )
  }
}

Preferencia.propTypes = {
  addPreferenceToStore: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addPreferenceToStore: (preference) => dispatch(addPreference(preference)),
})

export default connect(null, mapDispatchToProps)(Preferencia);