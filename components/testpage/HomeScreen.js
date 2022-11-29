import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Counter} from '../testredux/Counter';

export default function HomeScreen({navigation}) {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>Count: {count}</Text>
      <Button title="click" onPress={() => setCount(count + 1)} />
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
            testcs: 'testhello',
          });
        }}
      />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
