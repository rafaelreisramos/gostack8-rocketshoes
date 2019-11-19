import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import Routes from './routes';

import NavigationService from './services/navigation';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
    </Provider>
  );
}
