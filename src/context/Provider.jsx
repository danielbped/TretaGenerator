import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [state, setState] = useState({
    animal: '',
    food: '',
    name: '',
    preference: '',
  });

  const handleClick = (name, value) => {
    const newState = {...state, [name]: value};
    setState(newState);
  }

  return (
    <MyContext.Provider value={ {state, handleClick} }>
        { children }
    </MyContext.Provider>
  )
}

export default Provider;