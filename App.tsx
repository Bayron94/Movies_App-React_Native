import 'reflect-metadata';
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/core/store/store';

const App = () => {

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
