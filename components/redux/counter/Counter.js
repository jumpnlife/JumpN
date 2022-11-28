import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, selectCount} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment(2))} />
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(decrement(2))} />
    </View>
  );
}
