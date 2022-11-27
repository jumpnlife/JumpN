import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JumpRopeScreen from '../screen/JumpRopeScreen';
import MyRopesScreen from '../screen/MyRopesScreen';
import LeaderBoardScreen from '../screen/LeaderBoardScreen';
import MarketScreen from '../screen/MarketScreen';
import HomeScreen from '../testpage/HomeScreen';
import DetailsScreen from '../testpage/DetailsScreen';

const Stack = createNativeStackNavigator();
export const JumpRopeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        // title: 'My home',
        headerStyle: {
          backgroundColor: '#2563eb',
          // elevation: 0, //删除安卓下影线(已过时)
          // shadowOpacity: 0, //删除ios下影线(已过时)
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="JumpRopeScreen" component={JumpRopeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const MyRopesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyRopesScreen" component={MyRopesScreen} />
    </Stack.Navigator>
  );
};

export const LeaderBoardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />
      {/* 若放在此处，则pop返回主页是到LeaderBoardScreen */}
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export const MarketStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MarketScreen" component={MarketScreen} />
    </Stack.Navigator>
  );
};
