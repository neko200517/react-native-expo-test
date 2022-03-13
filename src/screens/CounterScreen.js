import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TYPE_INCREMENT = 'increment';
const TYPE_DECREMENT = 'decrement';
const COUNT_INCREMENT = 10;

const reducer = (state, action) => {
  const { count } = state;
  const { type, payload } = action;
  switch (type) {
    case TYPE_INCREMENT:
      return { ...state, count: count + payload };
    case TYPE_DECREMENT:
      return { ...state, count: count - payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  const onIncrease = () => {
    dispatch({ type: TYPE_INCREMENT, payload: COUNT_INCREMENT });
  };
  const onDecrease = () => {
    dispatch({ type: TYPE_DECREMENT, payload: COUNT_INCREMENT });
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
