import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import NativeTachyons from 'react-native-style-tachyons';

import rootReducer from './rootReducer';
import Router from './src/Router';

StatusBar.setBarStyle('light-content', true);
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

NativeTachyons.build({
  rem: 16
}, StyleSheet);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);


export default App;
