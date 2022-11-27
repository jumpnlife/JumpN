import {View, Text, Button} from 'react-native';
import React from 'react';

export default function MyRopesScreen({navigation}) {
  return (
    <View>
      <Text>MyRopesScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}
