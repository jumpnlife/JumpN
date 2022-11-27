import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function MarketScreen({navigation}) {
  return (
    <View>
      <Text>MarketScreen</Text>
      <Button
        title="Go to DetailsScreen"
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
            testcs: 'testhello',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
