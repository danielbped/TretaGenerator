import React, { useState, useContext} from 'react';
import ButtonNext from '../components/ButtonNext';
import Radio from '../components/Radio';
import MyContext from '../context/MyContext';

function Preferencia() {
  const [ preference, setPreference ] = useState('');
  const { handleClick } = useContext(MyContext);
  const handleChange = ({ target: { value }}) => {
    setPreference(value)
  }
  return (
  <main className="flex flex-col">
    <Radio
      label="Escolha o certo:"
      value={ preference }
      onChange={ handleChange }
    />
    <ButtonNext
      link="/comida"
      onClick={ () => handleClick('preference', preference) }
      name={ preference }
    />
  </main>
  )
}

export default Preferencia;