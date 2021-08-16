import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider(props) {
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

  const { children } = props;
  const context = {state, handleClick}
  return (
    <MyContext.Provider value={ context }>
        { children }
    </MyContext.Provider>
  )
}

export default Provider;