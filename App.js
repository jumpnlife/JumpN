import React from 'react';
import {NativeBaseProvider} from 'native-base';
import TabNavi from './components/navigator/TabNavi';
import {Provider} from 'react-redux';
import {store} from './components/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/screen/LoginScreen';

import {useSelector} from 'react-redux';
import {selectCount} from './components/redux/counter/counterSlice';

export default function App() {
  const Stack = createNativeStackNavigator();
  // const count = useSelector(selectCount);
  const isLogin = true;
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {isLogin ? (
            <TabNavi />
          ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
