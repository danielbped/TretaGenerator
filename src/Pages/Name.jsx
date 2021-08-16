import React, { useState, useContext} from 'react';
import Input from '../components/Input';
import Title from '../components/Title'
import ButtonNext from '../components/ButtonNext';
import MyContext from '../context/MyContext';

function Name() {
  const [ name, setName ] = useState('');
  const { handleClick } = useContext(MyContext);
  const handleChange = ({ target: { value } }) => {
    setName(value)
  }
  
  return (
    <main className="flex flex-col">
      <Title text="Digite um nome" />
      <Input 
        name="name"
        placeholder="Nome"
        value = { name }
        onChange={ handleChange }
        />
      <ButtonNext
        link="/preferencia"
        name={ name }
        onClick={ () => handleClick('name', name) }
        />
    </main>
  )
}

export default Name;