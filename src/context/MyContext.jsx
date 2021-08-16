import { createContext } from 'react';

const MyContext = createContext({
  animal: '',
  food: '',
  name: '',
  preference: '',
});

export default MyContext;