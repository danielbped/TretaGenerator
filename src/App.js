import React, { Component } from 'react';
import Provider from './context/Provider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Name from './Pages/Name';
import Preferencia from './Pages/Preferencia';
import Comida from './Pages/Comida';
import Animal from './Pages/Animal';
import Manchete from './Pages/Manchete';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <main className="bg-indigo-100 dark:bg-blue-900 transition duration-1000 h-screen">
        <Header />
        <section className="flex justify-center items-center h-3/4">
          <Provider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Name } />
              <Route exact path="/preferencia" component={ Preferencia } />
              <Route exact path="/comida" component={ Comida } />
              <Route exact path="/animal" component={ Animal } />
              <Route exact path="/manchete" component={ Manchete } />
            </Switch>
          </BrowserRouter>
        </Provider>
        </section>
      </main>
    );
  }
}

export default App;
