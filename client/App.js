
import React from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './src/reducers/index.js';
import MainComponent from './MainComponent';


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const App = () => {

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
