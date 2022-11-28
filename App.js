import React from 'react';
import {NativeBaseProvider} from 'native-base';
import TabNavi from './components/navigator/TabNavi';
import {Provider} from 'react-redux';
import {store} from './components/redux/store';
import {Counter} from './components/redux/counter/Counter';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <TabNavi />
        {/* <Counter /> */}
      </NativeBaseProvider>
    </Provider>
  );
}
