import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  JumpRopeStack,
  MyRopesStack,
  LeaderBoardStack,
  MarketStack,
} from './StackNavi';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Tab.Navigator
      // initialRouteName="JumpRope"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'JumpRope') {
            iconName = focused ? 'body' : 'body-outline';
          } else if (route.name === 'MyRopes') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'LeaderBoard') {
            iconName = focused ? 'cellular' : 'cellular-outline';
          } else if (route.name === 'Market') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="JumpRope" component={JumpRopeStack} />
      <Tab.Screen
        name="MyRopes"
        component={MyRopesStack}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="LeaderBoard" component={LeaderBoardStack} />
      <Tab.Screen name="Market" component={MarketStack} />
    </Tab.Navigator>
  );
}
