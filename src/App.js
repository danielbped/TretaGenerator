import React, { Component } from 'react';
import MyContext from './MyContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Name from './Pages/Name';
import Preferencia from './Pages/Preferencia';
import Comida from './Pages/Comida';
import Animal from './Pages/Animal';
import Manchete from './Pages/Manchete';

class App extends Component {
  constructor() {
    super();

    this.state = {
      animal: '',
      food: '',
      name: '',
      preference: '',
    }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { animal, food, name, preference } = this.state;
    const context = {
      animal,
      food,
      name,
      preference,
      handleClick: this.handleClick,
    }
    return (
      <main className="h-screen bg-indigo-100 flex justify-center items-center" >
        <MyContext.Provider value={ context }>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Name } />
            <Route exact path="/preferencia" component={ Preferencia } />
            <Route exact path="/comida" component={ Comida } />
            <Route exact path="/animal" component={ Animal } />
            <Route exact path="/manchete" component={ Manchete } />
          </Switch>
        </BrowserRouter>
      </MyContext.Provider>
      </main>
    );
  }
}

export default App;
