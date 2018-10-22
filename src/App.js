import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';

import Postform from './components/Postform';
import Posts from './components/Posts';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Postform />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
