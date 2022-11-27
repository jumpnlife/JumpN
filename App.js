import React from 'react';
import {NativeBaseProvider} from 'native-base';
import TabNavi from './components/navigator/TabNavi';

export default function App() {
  return (
    <NativeBaseProvider>
      <TabNavi />
    </NativeBaseProvider>
  );
}
