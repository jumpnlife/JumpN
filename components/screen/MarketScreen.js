import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectCount} from '../redux/counter/counterSlice';
export default function MarketScreen({navigation}) {
  const count = useSelector(selectCount);
  return (
    <View>
      <Text>MarketScreen---count:{count ? 'true' : 'false'}</Text>
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
