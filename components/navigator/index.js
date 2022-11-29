import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {loginState} from '../../redux/slice/loginSlice';
import TabNavi from './TabNavi';
import LoginScreen from '../screen/LoginScreen';

export default function index() {
  const Stack = createNativeStackNavigator();
  const login = useSelector(loginState);
  return (
    <>
      {login ? (
        <TabNavi />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </>
  );
}
