import React, { Component } from 'react';
import Provider from './context/Provider';
import Header from './components/Header';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <main className="bg-indigo-100 dark:bg-gray-900 transition duration-1000 h-screen">
        <Header />
        <section className="flex justify-center items-center h-3/4">
          <Provider>
            <Routes />
          </Provider>
        </section>
      </main>
    );
  }
}

export default App;
