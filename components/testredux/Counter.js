import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
  changeVualue,
  incrementByAmount,
} from '../testredux/counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View style={{margin: 15}}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(decrement())} />
      <Button
        title="incrementByAmount"
        onPress={() => {
          console.log(dispatch(incrementByAmount(100)));
        }}
      />
      <Button
        title="changeVualue"
        onPress={() => {
          console.log(dispatch(changeVualue()));
        }}
      />
    </View>
  );
}
