import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <View>
      <Button title='Increase' onPress={onIncrease} />
      <Button title='Decrease' onPress={onDecrease} />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
