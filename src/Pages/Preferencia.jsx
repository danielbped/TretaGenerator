import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPreference } from '../redux/actions';
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
      <main>
        <Radio
          label="Escolha o certo:" 
          onChange={ this.handleChange }
        />
        <Link to="/comida">
          <button
            type="button"
            onClick={ () => addPreferenceToStore(preference) }
          >
            Próxima
          </button>
        </Link>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPreferenceToStore: (preference) => dispatch(addPreference(preference)),
})

export default connect(null, mapDispatchToProps)(Preferencia);