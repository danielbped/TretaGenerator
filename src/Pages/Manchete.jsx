import React from 'react';
import BackButton from '../components/BackButton';
import MyContext from '../MyContext';
import { Redirect } from 'react-router-dom';

function Manchete () {
  // const { name, animal, food, preference } = this.props;
  return(
    <MyContext.Consumer>
      {({ name, animal, food, preference }) => (
        (name === '' || animal === '' || food === '' || preference === '') ? <Redirect to='/' /> :
        <main className="w-1/2">
          <h1 className="text-center text-4xl my-12 dark:text-white transition duration-1000">Extra! Extra!</h1>
          <p className="text-center text-2xl font-serif dark:text-white transition duration-1000">
            {`Em entrevista internacional, ${name} teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? 
            ${name} foi direto na canela dizendo que o certo é ${preference}!
            E ainda complementou que ${food} `}
            {food === 'sopa' ? 'nem é janta' : 'é ruim'}
            {` e que nem seu ${animal} come!`}
          </p>
          <BackButton />
        </main>
      )}
    </MyContext.Consumer>
  )
}

export default Manchete;