import React, { useState, useContext } from 'react';
import Buttons from '../components/Buttons';
import Title from '../components/Title';
import ButtonNext from '../components/ButtonNext';
import MyContext from '../context/MyContext';

function Comida() {

  const [ food, setFood ] = useState('');
  const { handleClick } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setFood(value)
  }

  return (
    <main className="flex flex-col">
      <Title text="Escolha o pior:" />
      <Buttons
        value={ food }
        onClick={ (e) => handleChange(e) }
      />
      <ButtonNext
        name={food}
        onClick = { () => handleClick('food', food) }
        link="/animal"
      />
    </main>
  )
}

export default Comida;