import React, { useState, useContext } from 'react';
import ButtonNext from '../components/ButtonNext';
import Select from '../components/Select'
import Title from '../components/Title';
import MyContext from '../context/MyContext';

function Animal() {
  
  const [animal, setAnimal] = useState('gato');
  const { handleClick } = useContext(MyContext)

  const handleChange = ({ target: { value } }) => {
    setAnimal(value)
  }

  return (
    <main className="flex flex-col">
      <Title text="Escolha um animal" />
      <Select onChange = { handleChange } />
      <ButtonNext
        name={ animal }
        link="/manchete"
        onClick={ () => handleClick('animal', animal) }
      />
    </main>
  )
}

export default Animal;