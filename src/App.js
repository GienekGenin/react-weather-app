import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';

import Cities from './components/Cities';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Cities />
        </div>
      </Provider>
    );
  }
}

export default App;
