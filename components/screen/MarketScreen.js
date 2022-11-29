import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {selectCount} from '../testredux/counterSlice';
import {testState} from '../testredux/testSlice';
import {
  loginState,
  loginAction,
  logoutAction,
} from '../../redux/slice/loginSlice';
import {useSelector, useDispatch} from 'react-redux';

export default function MarketScreen({navigation}) {
  const count = useSelector(selectCount);
  const test = useSelector(testState);

  const login = useSelector(loginState);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>
        MarketScreen---count:{count ? 'true' : 'false'}--test:{test}
        --loginState:{login + ''}
      </Text>
      <Button
        title="Go to DetailsScreen"
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
            testcs: 'marketscreen',
          })
        }
      />
      <Button
        title="Login OUT"
        onPress={() => {
          console.log('loginState', login);
          dispatch(logoutAction());
        }}
      />
    </View>
  );
}
