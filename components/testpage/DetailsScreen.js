import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId, otherParam, testcs} = route.params;
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Text>itemId:{JSON.stringify(itemId)}</Text>
      <Text>otherParam:{JSON.stringify(otherParam)}</Text>
      <Text>testcs:{JSON.stringify(testcs)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          navigation.push('DetailsScreen', {
            itemId: Math.floor(Math.random() * 10000),
          });
        }}
      />

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
