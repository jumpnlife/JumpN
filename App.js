import React from 'react';
import {NativeBaseProvider} from 'native-base';
import TabNavi from './components/navigator/TabNavi';
import {Provider} from 'react-redux';
import {store} from './components/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <TabNavi />
      </NativeBaseProvider>
    </Provider>
  );
}
